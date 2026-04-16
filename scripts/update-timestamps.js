const fs = require('fs');
const { execSync } = require('child_process');

const articleIds = [
  'wemby-mvp',
  'finch-seat',
  'boba-nba-draft',
  'jett-return'
];

let diff;
try {
  diff = execSync('git diff HEAD~1 HEAD -- index.html').toString();
} catch (e) {
  console.log('Could not get diff, skipping.');
  process.exit(0);
}

const changedArticles = articleIds.filter(id => {
  const idx = diff.indexOf(`"${id}"`);
  if (idx === -1) return false;
  
  const section = diff.substring(idx, idx + 3000);
  const lines = section.split('\n')
    .filter(l => l.startsWith('+') || l.startsWith('-'))
    .filter(l => !l.includes('updated:'));
  
  return lines.length > 0;
});

console.log('Changed articles detected:', changedArticles);

if (changedArticles.length === 0) {
  console.log('No article content changed. Skipping.');
  process.exit(0);
}

const now = new Date();
const timestamp = now.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
}) + ' · ' + now.toLocaleTimeString('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  timeZone: 'America/New_York'
}) + ' ET';

let html = fs.readFileSync('index.html', 'utf8');

changedArticles.forEach(id => {
  console.log(`Stamping: ${id} → ${timestamp}`);
  
  html = html.replace(
    new RegExp(`("${id}"[\\s\\S]*?updated\\s*:\\s*)(null|"[^"]*")`),
    `$1"${timestamp}"`
  );
});

fs.writeFileSync('index.html', html);
console.log('Done.');
