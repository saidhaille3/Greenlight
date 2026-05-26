const express = require('express');
const { WebSocketServer } = require('ws');
const http = require('http');
const { AccessToken } = require('livekit-server-sdk');
const { Resend } = require('resend');
const admin = require('firebase-admin');

// --- INIT ---
const app = express();
app.use(express.json());
app.use(express.static('../'));

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// --- RESEND ---
const resend = new Resend(process.env.RESEND_API_KEY);

// --- FIREBASE ADMIN ---
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}
const db = admin.firestore();

// --- LIVEKIT ---
const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY;
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET;
const LIVEKIT_URL = process.env.LIVEKIT_URL;

// --- MUX ---
const Mux = require('@mux/mux-node');
const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});
const LIVE_STREAM_ID = process.env.MUX_LIVE_STREAM_ID;

// --- STATE ---
const chatHistory = [];
let viewerCount = 0;
const spaces = {};
let latestRecording = {
  playbackId: 'PASTE_YOUR_ID_HERE',
  title: 'Replay · Apr 18',
};

// --- WEBSOCKET ---
function broadcast(data) {
  const msg = JSON.stringify(data);
  wss.clients.forEach(client => {
    if (client.readyState === 1) client.send(msg);
  });
}

wss.on('connection', (ws) => {
  viewerCount++;
  broadcast({ type: 'viewers', count: viewerCount });
  ws.send(JSON.stringify({ type: 'history', messages: chatHistory }));
  ws.on('close', () => {
    viewerCount--;
    broadcast({ type: 'viewers', count: viewerCount });
  });
});

// --- CHAT ---
app.post('/api/chat', (req, res) => {
  const { username, text } = req.body;
  if (!username || !text) return res.status(400).json({ error: 'Missing fields' });
  const msg = { username, text };
  chatHistory.push(msg);
  if (chatHistory.length > 50) chatHistory.shift();
  broadcast({ type: 'chat', ...msg });
  res.json({ ok: true });
});

// --- NEWSLETTER ---
app.post('/api/send-newsletter', async (req, res) => {
  const { title, tag, summary, articleId, heroImage, secretKey } = req.body;

  if (secretKey !== process.env.NEWSLETTER_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const snap = await db
      .collection('newsletter_subscribers')
      .where('status', '==', 'active')
      .get();

    if (snap.empty) {
      return res.json({ ok: true, sent: 0, message: 'No subscribers' });
    }

    const emails = snap.docs.map(doc => doc.data().email);
    const articleUrl = `https://glsnetwork.com/?article=${articleId}`;

    await Promise.all(emails.map(email =>
      resend.emails.send({
        from: 'Greenlight <newsletter@glsnetwork.com>',
        to: email,
        subject: `New Drop: ${title}`,
        html: `
          <!DOCTYPE html>
          <html>
          <body style="margin:0; padding:0; background:#0a0a0a; font-family:'Inter',sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a; padding:40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

                    <tr>
                      <td style="padding-bottom:32px;">
                        <p style="margin:0; font-size:11px; font-weight:900; letter-spacing:0.3em; text-transform:uppercase; color:#d4af37;">
                          Greenlight Sports Network
                        </p>
                      </td>
                    </tr>

                    ${heroImage ? `
                    <tr>
                      <td style="padding-bottom:24px;">
                        <img src="${heroImage}" alt="${title}"
                             style="width:100%; border-radius:16px; display:block;" />
                      </td>
                    </tr>` : ''}

                    <tr>
                      <td style="padding-bottom:12px;">
                        <span style="font-size:10px; font-weight:900; letter-spacing:0.25em; text-transform:uppercase; color:#10b981;">
                          ${tag || 'Greenlight'}
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding-bottom:16px;">
                        <h1 style="margin:0; font-size:36px; font-weight:900; text-transform:uppercase; letter-spacing:-0.03em; line-height:1; color:#ffffff;">
                          ${title}
                        </h1>
                      </td>
                    </tr>

                    ${summary ? `
                    <tr>
                      <td style="padding-bottom:32px;">
                        <p style="margin:0; font-size:15px; color:rgba(255,255,255,0.55); line-height:1.7;">
                          ${summary}
                        </p>
                      </td>
                    </tr>` : ''}

                    <tr>
                      <td style="padding-bottom:48px;">
                        <a href="${articleUrl}"
                           style="display:inline-block; background:#d4af37; color:#000000;
                                  font-size:10px; font-weight:900; text-transform:uppercase;
                                  letter-spacing:0.2em; padding:16px 32px; border-radius:12px;
                                  text-decoration:none;">
                          Read Full Story
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td style="border-top:1px solid rgba(255,255,255,0.08); padding-top:32px;">
                        <p style="margin:0; font-size:10px; color:rgba(255,255,255,0.2); letter-spacing:0.1em; text-transform:uppercase;">
                          © 2026 Greenlight Network LLC
                        </p>
                        <p style="margin:8px 0 0; font-size:10px; color:rgba(255,255,255,0.2);">
                          You're receiving this because you subscribed at glsnetwork.com.
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
      })
    ));

    res.json({ ok: true, sent: emails.length });
  } catch (err) {
    console.error('Newsletter error:', err);
    res.status(500).json({ error: err.message });
  }
});

// --- MUX STREAM STATUS ---
app.get('/api/stream-status', async (req, res) => {
  try {
    const stream = await mux.video.liveStreams.retrieve(LIVE_STREAM_ID);
    const isLive = stream.status === 'active';
    res.json({
      live: isLive,
      viewers: viewerCount,
      title: 'Live Stream',
      playbackId: stream.playback_ids?.[0]?.id || null,
      recordingPlaybackId: !isLive && latestRecording ? latestRecording.playbackId : null,
      recordingTitle: !isLive && latestRecording ? latestRecording.title : null,
    });
  } catch (err) {
    console.error('Mux status error:', err.message);
    res.json({ live: false, viewers: viewerCount, title: 'Live Stream' });
  }
});

// --- MUX WEBHOOK ---
app.post('/api/mux-webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const body = JSON.parse(req.body);
  const { type, data } = body;

  if (type === 'video.live_stream.active') {
    latestRecording = null;
  }

  if (type === 'video.asset.ready' && data.live_stream_id === LIVE_STREAM_ID) {
    const playbackId = data.playback_ids?.[0]?.id;
    if (playbackId) {
      latestRecording = {
        playbackId,
        title: `Replay · ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`,
        createdAt: Date.now(),
      };
      console.log('Recording saved:', playbackId);
    }
  }

  res.json({ ok: true });
});

// --- RECORDING ---
app.delete('/api/recording', (req, res) => {
  latestRecording = null;
  res.json({ ok: true, message: 'Recording cleared' });
});

// --- SPACES ---
app.get('/api/spaces', (req, res) => {
  const list = Object.values(spaces).map(s => ({
    id: s.id, name: s.name,
    speakerCount: s.speakers.length, listenerCount: s.listeners.length,
  }));
  res.json({ spaces: list });
});

app.get('/api/spaces/:id', (req, res) => {
  const s = spaces[req.params.id];
  if (!s) return res.status(404).json({ error: 'Not found' });
  res.json({ id: s.id, name: s.name, speakerCount: s.speakers.length, listenerCount: s.listeners.length });
});

app.post('/api/spaces/create', async (req, res) => {
  const { name, hostName } = req.body;
  const spaceId = 'space_' + Date.now();
  spaces[spaceId] = { id: spaceId, name, host: hostName, speakers: [hostName], listeners: [] };
  const token = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, { identity: hostName });
  token.addGrant({ roomJoin: true, room: spaceId, canPublish: true, canSubscribe: true });
  res.json({ spaceId, token: await token.toJwt(), livekitUrl: LIVEKIT_URL });
});

app.post('/api/spaces/join', async (req, res) => {
  const { spaceId, username, asSpeaker } = req.body;
  const space = spaces[spaceId];
  if (!space) return res.status(404).json({ error: 'Space not found' });
  if (asSpeaker && !space.speakers.includes(username)) space.speakers.push(username);
  if (!asSpeaker && !space.listeners.includes(username)) space.listeners.push(username);
  const token = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, { identity: username });
  token.addGrant({ roomJoin: true, room: spaceId, canPublish: asSpeaker, canSubscribe: true });
  res.json({ token: await token.toJwt(), livekitUrl: LIVEKIT_URL });
});

app.post('/api/spaces/promote', async (req, res) => {
  const { spaceId, username } = req.body;
  const space = spaces[spaceId];
  if (!space) return res.status(404).json({ error: 'Not found' });
  if (!space.speakers.includes(username)) space.speakers.push(username);
  space.listeners = space.listeners.filter(l => l !== username);
  res.json({ ok: true });
});

// --- START ---
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
