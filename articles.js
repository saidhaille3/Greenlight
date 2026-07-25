const articleEngineData = {

"lebron-philly": {
    tag: "NBA · Free Agency",
    hero: "images/LeBrontrade.jpeg",
    time: "12 MIN READ",
    published: "July 25, 2026",
    updated: "July 25, 2026",
    title: "The Manipulation: LeBron, Philly, and the Ghost of Dream Teams Past",
    content: `
<style>
  .lb-article {
    font-family: 'Georgia', serif;
    color: inherit;
    max-width: 780px;
    margin: 0 auto;
  }
  .lb-article p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.9;
    margin-bottom: 1.75rem;
    font-weight: 400;
    color: inherit;
    opacity: 0.88;
  }
  .lb-article .lb-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
  }
  .lb-article .lb-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
  }
  .lb-article .lb-lede {
    font-size: clamp(1.2rem, 3.2vw, 1.55rem);
    font-weight: 700;
    line-height: 1.55;
    opacity: 1;
    margin-bottom: 2rem;
  }
  .lb-article .lb-lede::first-letter {
    float: left;
    font-family: 'Georgia', serif;
    font-size: clamp(3.5rem, 10vw, 5.5rem);
    font-weight: 900;
    line-height: 0.78;
    margin-right: 0.12em;
    margin-top: 0.08em;
    color: #d4af37;
  }
  .lb-article .lb-section {
    margin: 3.5rem 0 1.25rem;
  }
  .lb-article .lb-section-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.45rem;
  }
  .lb-article .lb-section-title {
    font-family: 'Georgia', serif;
    font-size: clamp(1.4rem, 4.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: inherit;
    margin: 0;
  }
  .lb-article .lb-rule {
    display: block;
    height: 3px;
    width: 2.5rem;
    background: #d4af37;
    margin-top: 0.85rem;
    border-radius: 2px;
  }
  .lb-article .lb-pull {
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 80%);
    border-radius: 0 1.25rem 1.25rem 0;
  }
  .lb-article .lb-pull p {
    font-size: clamp(1.05rem, 2.8vw, 1.3rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .lb-article .lb-pull p { color: #d4af37; }
  .lb-article .lb-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent);
    margin: 3rem 0;
  }
  .lb-article .lb-timeline-card {
    background: linear-gradient(135deg, rgba(212,175,55,0.07) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .lb-article .lb-timeline-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #d4af37;
  }
  .lb-article .lb-timeline-card .lb-tl-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .lb-article .lb-timeline-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .lb-article .lb-timeline-card p:last-child { margin-bottom: 0 !important; }
  .lb-article .lb-warning-card {
    background: rgba(220,38,38,0.04);
    border: 1px solid rgba(220,38,38,0.15);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .lb-article .lb-warning-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #dc2626;
  }
  .lb-article .lb-warning-card .lb-w-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  }
  .lb-article .lb-warning-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .lb-article .lb-warning-card p:last-child { margin-bottom: 0 !important; }
  .lb-article .lb-roster-card {
    background: linear-gradient(135deg, rgba(139,92,246,0.05) 0%, rgba(212,175,55,0.03) 100%);
    border: 1px solid rgba(139,92,246,0.18);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .lb-article .lb-roster-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #8b5cf6;
  }
  .lb-article .lb-roster-card .lb-r-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #8b5cf6;
    margin-bottom: 1.25rem;
  }
  .lb-article .lb-roster-card p {
    margin-bottom: 0.85rem !important;
  }
  .lb-article .lb-roster-card p:last-child { margin-bottom: 0 !important; }
  .lb-article .lb-stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.65rem;
    margin: 2.5rem 0;
  }
  @media (min-width: 520px) {
    .lb-article .lb-stat-grid { grid-template-columns: repeat(4, 1fr); }
  }
  .lb-article .lb-stat-box {
    background: rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 0.875rem;
    padding: 1rem 0.75rem;
    text-align: center;
  }
  .dark .lb-article .lb-stat-box {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.08);
  }
  .lb-article .lb-stat-box .lb-sv {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(1.3rem, 3.5vw, 1.8rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.3rem;
  }
  .lb-article .lb-stat-box .lb-sl {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.4;
  }
  .lb-article .lb-isolated {
    font-family: 'Georgia', serif;
    font-size: clamp(1.2rem, 3.5vw, 1.7rem);
    font-weight: 900;
    letter-spacing: -0.01em;
    line-height: 1.3;
    margin: 2.5rem 0;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(212,175,55,0.2);
    border-bottom: 1px solid rgba(212,175,55,0.2);
    text-align: center;
    color: #d4af37;
  }
  .lb-article .lb-projection {
    background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2.5rem 0;
  }
  .lb-article .lb-projection .lb-proj-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .lb-article .lb-projection p {
    margin-bottom: 0.85rem !important;
  }
  .lb-article .lb-projection p:last-child { margin-bottom: 0 !important; }
  .lb-article .lb-finale {
    font-size: clamp(1.05rem, 2.6vw, 1.3rem) !important;
    font-weight: 700 !important;
    line-height: 1.85 !important;
    opacity: 1 !important;
  }
  .lb-article .lb-finale .lb-gold { color: #d4af37; font-style: italic; }
  .lb-article strong { font-weight: 700; opacity: 1; }
  .lb-article em { font-style: italic; }
</style>

<div class="lb-article">

  <div class="lb-byline">
    <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
    <div class="lb-byline-text">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a><br>
      July 25, 2026
    </div>
  </div>

  <p class="lb-lede">Let's be honest about what just happened.</p>

  <p>Not Rich Paul's carefully worded framing about "basketball happiness" and sacrifice and grinding and competing. The real version.</p>

  <p>LeBron James -- 41 years old, fresh off a two-year, eight-million dollar deal -- just signed with the Philadelphia 76ers. And the announcement came wrapped in the same cloth he's been cutting for sixteen years. The soul-searching. The reluctant hero returning to the arena. The carefully staged uncertainty. "I thought I was done when the season ended. I was pretty sure I played my last game." Heavy words. Moving words. Words that conveniently kept every franchise in the league on hold for three weeks while the market froze around him.</p>

  <p>Minnesota held its roster spot. Golden State restructured conversations. Cleveland cleared emotional bandwidth for a homecoming that never came. Miami floated Giannis proximity as bait. On a podcast, Rich Paul pulled out a whiteboard…like a professor…and listed the candidates -- Philadelphia, Miami, Minnesota, Denver, Golden State, Cleveland -- while the league held its collective breath.</p>

  <p>This is the LeBronomy. And by now we should be able to call it what it is -- the most sophisticated franchise manipulation operation in the history of professional sports. Not malicious. Not illegal. But manipulative? Absolutely. Deliberately. Masterfully.</p>

  <div class="lb-divider"></div>

  <div class="lb-section">
    <span class="lb-section-label">The Pattern</span>
    <h2 class="lb-section-title">Here's The History Because It Matters</h2>
    <span class="lb-rule"></span>
  </div>

  <div class="lb-timeline-card">
    <span class="lb-tl-label">The Decision Timeline</span>
    <p>In the summer of 2010, LeBron James announced his decision to leave Cleveland in a 75-minute live special on ESPN -- uttering the infamous line that he was "going to take my talents to South Beach and join the Miami Heat." Nearly 10 million people watched. The Cleveland fanbase burned his jerseys. Dan Gilbert published his infamous letter.</p>
    <p>The stated motive back then -- championships. Fair enough. He went to Miami and got two.</p>
    <p>Then in 2014 -- he opted out of Miami's contract and released a personal essay titled "I'm Coming Home" through Sports Illustrated. The stated motive -- home. Ohio. Legacy. Bringing a chip home. Cleveland got its championship in 2016 and wept. It was beautiful.</p>
    <p>Then 2018 came and he left Cleveland again. He went to the Lakers. The stated motive this time was Bronny, Hollywood, empire-building and the business of being LeBron James beyond basketball. A social media post from Klutch Sports Group on July 1. Clean. Controlled. No press conference needed. Each "decision" started to become more controlled than the last. Each motive more layered, more poetic, and harder and harder to argue with on its face.</p>
  </div>

  <p>And now this. Rich Paul had expressed that his client was prioritizing "basketball happiness" as the impetus to leave the Lakers. Basketball happiness. Think about what that phrase does. It's not championships -- too nakedly ambitious. It's not money -- he took a minimum deal with Philly to prove that. It's not family -- Bronny is likely staying in LA. After LeBron chose the 76ers, it's now considered unlikely the two will play together next season.</p>

  <p>Basketball happiness. It's emotionally disarming and analytically unfalsifiable. You cannot argue with a man's happiness. The franchise that makes him happy wins the sweepstakes. The ones that don't are left to wonder what they did wrong.</p>

  <p>What they did wrong was never the point.</p>

  <div class="lb-divider"></div>

  <div class="lb-section">
    <span class="lb-section-label">The Reveal</span>
    <h2 class="lb-section-title">The Detail That Exposes The Narrative</h2>
    <span class="lb-rule"></span>
  </div>

  <p>And here is the detail that exposes the entire narrative. According to ESPN's Shams Charania -- speaking on First Take the morning the decision dropped.</p>

  <div class="lb-pull"><p>"Philadelphia, I'm telling you, was not even on his radar, was not in the pool of candidates until Bob Myers went out and got Jaylen Brown," Charania said. "That changed the equation."</p></div>

  <p>The soul-searching. The retirement contemplation. The weeks of deliberation about love for the game and what he's really playing for -- all of it was happening while LeBron was quietly watching rosters assemble. Waiting to see where the pieces landed before deciding which puzzle he wanted to complete. That is not a man looking for a happy sunset. That is a man shopping. Patiently. Strategically. With the entire league frozen around his timeline while he browsed.</p>

  <div class="lb-divider"></div>

  <div class="lb-section">
    <span class="lb-section-label">Philly's Roster</span>
    <h2 class="lb-section-title">What He's Actually Walking Into</h2>
    <span class="lb-rule"></span>
  </div>

  <p>Now let's talk about what he's actually walking into.</p>

  <p>On paper it is staggering.</p>

  <p>LeBron James signing with the Philadelphia 76ers puts him on arguably the best roster of his illustrious career while offering perhaps his best chance to win another championship ring since 2020. The new-look Sixers now boast a lineup in which all five starters have the ability to be an All-Star, amongst them being 2 former final mvps.</p>

  <div class="lb-roster-card">
    <span class="lb-r-label">The Starting Five</span>
    <p>Tyrese Maxey at point guard, VJ Edgecombe at shooting guard, Jaylen Brown at small forward, LeBron at power forward, Joel Embiid at center.</p>
    <p>They are damn near elite at every position. A 41-year-old operating as the connective tissue between Maxey's explosiveness, Brown's physicality, and Embiid's interior dominance.</p>

  </div>
    <p>On paper.</p>
  <p>But here's the word that keeps surfacing in every honest conversation about this roster -- and it surfaced before LeBron even arrived. After a full season of Paul George, Embiid, and Maxey sharing the floor together, Maxey looked back and said simply: "We never really figured it out."</p>

  <p>Two stars and one fading star never figured it out. Now subtract that fading star. Add another -- older, yes, but one who, when the light catches him right, still shines like nobody this game has seen outside of Michael Jordan. And the light still catches him.</p>

  <div class="lb-divider"></div>

  <div class="lb-section">
    <span class="lb-section-label">The Cautionary Tale</span>
    <h2 class="lb-section-title">Philadelphia Has Lived This Before</h2>
    <span class="lb-rule"></span>
  </div>

  <p>Philadelphia is not new to this feeling. This city has lived this dream before. Different sport, same city, same electricity, same fatal flaw.</p>

  <p>In the summer of 2011 the Philadelphia Eagles assembled what backup quarterback Vince Young immediately called a Dream Team. From Nnamdi Asomugha to Dominique Rodgers-Cromartie, Jason Babin to Young himself, they had elite talent everywhere. The city was electric. The league was watching. Expectations were stratospheric.</p>

  <div class="lb-warning-card">
    <span class="lb-w-label">The Dream Team Cautionary Tale</span>
    <p>The result: players complained after wins if they didn't get their individual numbers -- tackles, catches, touchdowns. Players were caught on camera hanging their heads during games. The team limped to an 8-8 finish and missed the playoffs. The defining image of that season -- Nnamdi Asomugha reportedly eating lunch out of his car on practice days rather than with his teammates.</p>
    <p>Many of the foundations of great teams -- chemistry, leadership, character, continuity -- are incongruous to the Dream Team concept. "We didn't jell together well," one of the Eagles said. "There were different personality types."</p>
    <p>Howie Roseman himself later cited the Dream Team as a cautionary tale against over-relying on free agency without fostering team chemistry.</p>
    <p>That lesson came from this city. Fifteen years ago. In this city.</p>
  </div>

  <p>The 76ers just assembled the basketball equivalent -- and added LeBron James as the fifth star at 41 years old, into a locker room that already has Embiid -- who has spent his entire career demanding the ball and the system orbit around him -- Maxey, who emerged as a legitimate possible first option and earned that status -- and Jaylen Brown, a Finals MVP who played his best basketball as a co-star but has never had to carry the full weight of a franchise's offensive identity alone. Now add LeBron. Four different appetites. One ball. Nick Nurse conducting.</p>

  <p>The difference between the Eagles comparison and dismissing it entirely -- and this is where it gets nuanced -- is LeBron himself.</p>

  <p>Nobody in the history of team assembly has proven more capable of making superteam dynamics work than LeBron James. He willed the 2012 and 2013 Heat to championships alongside Wade and Bosh. He dragged a 2016 Cleveland team to the greatest comeback in Finals history. He manufactured a 2020 bubble ring next to Anthony Davis on a roster that had no business winning a title given its construction timeline. The man has done this before.</p>

  <p>But there are two variables this time that have no historical precedent in his career.</p>

  <div class="lb-stat-grid">
    <div class="lb-stat-box">
      <span class="lb-sv">41</span>
      <span class="lb-sl">LeBron's Age</span>
    </div>
    <div class="lb-stat-box">
      <span class="lb-sv">22</span>
      <span class="lb-sl">Games LeBron Missed</span>
    </div>
    <div class="lb-stat-box">
      <span class="lb-sv">19</span>
      <span class="lb-sl">Games Embiid Played</span>
    </div>
    <div class="lb-stat-box">
      <span class="lb-sv">$8M</span>
      <span class="lb-sl">LeBron's Contract</span>
    </div>
  </div>

  <p>The first is his body. LeBron missed 22 games last season dealing with sciatica and left foot arthritis. Embiid played just 19 games in 2024-25 with recurring left knee complications, a meniscus repair, and playoff appendicitis. Two of the five starters carry real chronic injury risk. The probability of both LeBron and Embiid being healthy simultaneously for a full playoff run isn't a guarantee. It's the central gamble of this entire construction.</p>

  <p>The second variable is role clarity. Every team LeBron has made work had a clear hierarchy with LeBron at the top. He was the first option, the closer, the last word. In Philadelphia he is functionally the fourth option behind Maxey, Brown, and a healthy Embiid. Can LeBron -- who has averaged over 23 points in the playoffs at 41 -- genuinely subordinate his instincts to be the connector in a system where three other guys eat first? The basketball version of him can. The competitive demon that has driven him for 24 seasons is a different conversation.</p>

  <div class="lb-divider"></div>

  <div class="lb-section">
    <span class="lb-section-label">The Real Cost</span>
    <h2 class="lb-section-title">And Then There Are The Franchises</h2>
    <span class="lb-rule"></span>
  </div>

  <p>Minnesota held a roster spot. Golden State restructured conversations around his potential arrival. Cleveland cleared emotional space for another homecoming -- the third act of a love story their fanbase has rewritten twice already. Miami positioned Giannis proximity as the pitch. Multiple front offices made real organizational decisions -- or deliberately avoided making them -- around one man's timeline.</p>

  <p>He kept them all waiting. Three weeks. The LeBronomy running at full operational capacity.</p>

  <div class="lb-isolated">LeBron James does not simply choose a team. He creates a gravitational event.</div>

  <p>He generates months of speculation, narrative energy, and genuine organizational paralysis across the entire league -- and then, when the moment is right, he resolves the tension in a single social media post that frames the decision as a deeply personal spiritual journey rather than what it functionally is: a competitive calculation made by one of the most strategically intelligent people the sport has ever produced.</p>

  <p>The stated motive this time was basketball happiness. Last time it was legacy and platform in Los Angeles. Before that it was home -- Ohio, identity, unfinished business. Before that it was championships with his brothers in Miami. Every decision has arrived wrapped in a different emotional language. Every decision has been received by the public as authentic. But authenticity and strategy are not mutually exclusive. A man can mean every word he says and still be engineering the outcome he wanted from the beginning.</p>

  <p>And the outcome he wanted was always the path of least resistance to a fifth ring.</p>

  <p>Not least effort -- LeBron will work. He will sacrifice and take on a lesser role if he has to. He has earned the right to be taken at his word on those things. No, not lesst effort....least resistance. The West is Wembanyama. The West is OKC's young hungry championship core with two years of deep playoff seasoning now behind them. The West is the gauntlet -- the road where even healthy prime stars accumulate damage across four rounds before they ever reach the Finals. A 41-year-old body managing sciatica and left foot arthritis does not navigate that road the same way a 29-year-old body does. The body knows things the press release doesn't say.</p>

  <p>The East -- even with the Knicks newly crowned and legitimate teeth grown across the conference -- is still the more forgiving bracket for a player in the final chapter of his physical story. Philadelphia gives LeBron Embiid's interior dominance to absorb contact. Maxey's explosiveness to carry early round possessions. Brown's physicality so LeBron doesn't have to be physical. The most loaded roster he has ever joined -- and he joined it for eight million dollars, which means the financial sacrifice is real, but the basketball ask is the lightest it has been since he was 25 and physically capable of carrying anything.</p>

  <p>The franchises that waited know all of this. The front offices that restructured, that held spots, that flew executives to pitch meetings, that cleared cap space and told their fan bases to believe -- they know. They feel the particular sting of having been used not maliciously but deliberately as leverage. As options. As the audience for a performance that was always going to end the same way.</p>

  <p>They just can't say it out loud. Because LeBron James is 41 years old, still an All-Star, still capable of moments that make you forget the calendar.</p>

  <p>That's the final layer of the manipulation. He constructs the narrative so airtight that the franchises who got played have no dignified way to say so.</p>

  <p>Cleveland burned his jersey in 2010 and looked small.</p>

  <p>Nobody wants to look small.</p>

  <p>So they'll wish him well. They'll say the right things. They'll spend the summer solving the problems his three-week indecision created. And LeBron James will report to Philadelphia in October -- older, rested, strategically positioned -- and the whole league will watch to see if the light still catches him.</p>

  <p>It probably will.</p>

  <p>That's the most infuriating part of all.</p>

  <div class="lb-divider"></div>

  <div class="lb-section">
    <span class="lb-section-label">Final Take</span>
    <h2 class="lb-section-title">The Honest Read On Philadelphia</h2>
    <span class="lb-rule"></span>
  </div>

  <div class="lb-projection">
    <p>Chemistry will understandably be an issue. That's not a prediction -- that's a direct quote from the analysis published the day the signing happened. This roster is the most talented collection of individual players in the Eastern Conference by a significant margin. They are the clear favorites to represent the East in the Finals. None of that is debatable.</p>
    <p>And here's the irony nobody's saying out loud. LeBron choosing the East -- specifically Philadelphia -- inadvertently exposes the Knicks. If the greatest living basketball mind looked at the entire landscape and decided the East was the easier path to a ring -- what does that say about New York's championship? The Knicks are the reigning champs and LeBron just treated their conference like a toll road.</p>
    <p>But LeBron knows something too. He knows what the Spurs showed everyone in the playoffs -- that KAT neutralized Wembanyama's paint dominance by pulling him out of the key, which is the one schematic wrinkle that made San Antonio beatable. That specific matchup problem doesn't exist in the East. Wemby stays in the West. OKC stays in the West. The gauntlet stays in the West.</p>
    <p>LeBron did avoid a challenge. But he also identified exactly which challenges his 41-year-old body can still absorb -- and which ones it can't.</p>
    <p>Hate or love it, it's a coldly…emphasis on cold..coldly intelligent basketball decision. And four stars and a budding wildcard sharing one ball, one locker room, and one October through June for the first time -- in a city that has already lived through exactly this experiment in a different sport and called it a cautionary tale -- is not a guaranteed formula.</p>
    <p>The last manipulation worked. LeBron got the roster he wanted. He got the platform. He got the narrative. He called it his last decision and made sure the whole world was watching when he made it.</p>
    <p>Whether it gets him his fifth ring, an early exit he can't explain away, or a seventh Finals loss to his legacy -- nobody knows. At 41, the runway is gone. This is the answer. Whatever it is.</p>
  </div>

</div>
`
},

"lopez-scouting-report": {
    tag: "NBA Draft · Film Room",
    hero: "images/lopez.jpeg",
    time: "11 MIN READ",
    published: "June 17, 2026",
    updated: null,
    title: "Karim Lopez Scouting Report",
    content: `
<style>
  .kl-article {
    font-family: 'Georgia', serif;
    color: inherit;
    max-width: 780px;
    margin: 0 auto;
  }
  .kl-article p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.88;
    margin-bottom: 1.75rem;
    font-weight: 400;
    color: inherit;
    opacity: 0.88;
  }
  .kl-article .kl-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
  }
  .kl-article .kl-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
  }
  .kl-article .kl-section {
    margin: 3.5rem 0 1.25rem;
  }
  .kl-article .kl-section-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.45rem;
  }
  .kl-article .kl-section-title {
    font-family: 'Georgia', serif;
    font-size: clamp(1.4rem, 4.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: inherit;
    margin: 0;
  }
  .kl-article .kl-rule {
    display: block;
    height: 3px;
    width: 2.5rem;
    background: #d4af37;
    margin-top: 0.85rem;
    border-radius: 2px;
  }
  .kl-article .kl-pull {
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 80%);
    border-radius: 0 1.25rem 1.25rem 0;
  }
  .kl-article .kl-pull p {
    font-size: clamp(1.05rem, 2.8vw, 1.3rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .kl-article .kl-pull p { color: #d4af37; }
  .kl-article .kl-stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.65rem;
    margin: 2.5rem 0;
  }
  @media (min-width: 520px) {
    .kl-article .kl-stat-grid { grid-template-columns: repeat(4, 1fr); }
  }
  .kl-article .kl-stat-box {
    background: rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 0.875rem;
    padding: 1rem 0.75rem;
    text-align: center;
  }
  .dark .kl-article .kl-stat-box {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.08);
  }
  .kl-article .kl-stat-box .kl-sv {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(1.3rem, 3.5vw, 1.8rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.3rem;
  }
  .kl-article .kl-stat-box .kl-sl {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.4;
  }
  .kl-article .kl-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent);
    margin: 3rem 0;
  }
  .kl-article .kl-record-card {
    background: linear-gradient(135deg, rgba(212,175,55,0.07) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .kl-article .kl-record-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #d4af37;
  }
  .kl-article .kl-record-card .kl-rc-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .kl-article .kl-record-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .kl-article .kl-record-card p:last-child { margin-bottom: 0 !important; }
  .kl-article .kl-weakness-card {
    background: rgba(220,38,38,0.04);
    border: 1px solid rgba(220,38,38,0.15);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .kl-article .kl-weakness-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #dc2626;
  }
  .kl-article .kl-weakness-card .kl-w-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  }
  .kl-article .kl-weakness-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .kl-article .kl-weakness-card p:last-child { margin-bottom: 0 !important; }
  .kl-article .kl-comp-card {
    background: linear-gradient(135deg, rgba(139,92,246,0.05) 0%, rgba(212,175,55,0.03) 100%);
    border: 1px solid rgba(139,92,246,0.18);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .kl-article .kl-comp-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #8b5cf6;
  }
  .kl-article .kl-comp-card .kl-c-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #8b5cf6;
    margin-bottom: 1.25rem;
  }
  .kl-article .kl-comp-card p {
    margin-bottom: 0.85rem !important;
  }
  .kl-article .kl-comp-card p:last-child { margin-bottom: 0 !important; }
  .kl-article .kl-projection {
    background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2.5rem 0;
  }
  .kl-article .kl-projection .kl-proj-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .kl-article .kl-projection p {
    margin-bottom: 0.85rem !important;
  }
  .kl-article .kl-projection p:last-child { margin-bottom: 0 !important; }
  .kl-article .kl-grade-banner {
    text-align: center;
    padding: 2.5rem 1.5rem;
    background: rgba(212,175,55,0.07);
    border: 1px solid rgba(212,175,55,0.22);
    border-radius: 1.75rem;
    margin: 2.5rem 0;
  }
  .kl-article .kl-grade-banner .kl-grade-num {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(3rem, 12vw, 6rem);
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.4rem;
  }
  .kl-article .kl-grade-banner .kl-grade-caption {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.45;
  }
  .kl-article strong { font-weight: 700; opacity: 1; }
  .kl-article em { font-style: italic; }
</style>

<div class="kl-article">

  <div class="kl-byline">
    <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
    <div class="kl-byline-text">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a><br>
      June 17, 2026
    </div>
  </div>

  <div class="kl-section">
    <span class="kl-section-label">Physical</span>
    <h2 class="kl-section-title">Physical Profile &amp; Body</h2>
    <span class="kl-rule"></span>
  </div>

  <p>He's 6'8.25 barefoot, 221.8 pounds, with a 6'11.5 wingspan and an 8'9.5 standing reach -- elite positional size for a wing-forward who projects to guard threes and fours interchangeably. His frame is already thick and NBA-ready for a 19-year-old, with broad shoulders, clean posture, and a structural density that reads as genuinely durable rather than just big. His kinetic chain is exceptional -- the way force travels from his base through his hips and into his upper body when he moves has an efficiency and flow that most prospects his age simply don't possess yet.</p>

  <div class="kl-pull"><p>His backpedal on full-court press deserves its own sentence: it's mechanically pristine, almost cornerback-level in how he flips his hips, maintains his base, and retreats without losing his spatial read. His movement efficiency at his size is exceptional.</p></div>

  <p>He tested at 38 inches max vertical and 32 no-step at the combine which shows real athleticism, not just physical mass.</p>

  <div class="kl-stat-grid">
    <div class="kl-stat-box">
      <span class="kl-sv">6'8.25"</span>
      <span class="kl-sl">Barefoot</span>
    </div>
    <div class="kl-stat-box">
      <span class="kl-sv">6'11.5"</span>
      <span class="kl-sl">Wingspan</span>
    </div>
    <div class="kl-stat-box">
      <span class="kl-sv">38"</span>
      <span class="kl-sl">Max Vertical</span>
    </div>
    <div class="kl-stat-box">
      <span class="kl-sv">222</span>
      <span class="kl-sl">Pounds</span>
    </div>
  </div>

  <div class="kl-divider"></div>

  <div class="kl-section">
    <span class="kl-section-label">Bag</span>
    <h2 class="kl-section-title">Offensive Toolkit</h2>
    <span class="kl-rule"></span>
  </div>

  <p>Lopez plays at a pace that resembles a chess match more than an athletic competition. He operates in the third-to-fourth gear range rather than explosive burst, and that's a deliberate strategic choice rather than a limitation. The way he manipulates defenders through gear shifts -- slight hesitation into a stutter-step rhythm change before attacking the lane -- is a Luka Dončić-adjacent quality that makes his offense nearly impossible to key on with pure athleticism alone. He lulls defenders into comfort and then makes them pay for it.</p>

  <p>His most distinctive offensive skill is his body manipulation on drives. He'll run a jab-step-into-crossover sequence -- slowing his tempo, adding a subtle head fake -- before contorting around two defenders in the paint using a combination of hip displacement, shoulder lead, and core flexibility to carve a driving lane that wasn't there a fraction of a second earlier.</p>

  <div class="kl-record-card">
    <span class="kl-rc-label">History Made</span>
    <p>He scored 358 points in his NBL season, the most ever by a draft-eligible player in the Next Stars program's history, surpassing LaMelo Ball, Josh Giddey, and Alex Sarr. That number wasn't manufactured by system -- it was earned against adult professionals as an 18-year-old.</p>
  </div>

  <p>His short-roll floater and running hook -- generated by creating contact with the defender's hip, using an elbow-out push-off to manufacture cushion, then lofting the ball over the outstretched arm -- is already a polished NBA-ready move. It's the same creation mechanism SGA uses to eat in the mid-range: generate space with body contact, then shoot over the resulting gap. His finishing package inside the arc -- the turnaround jumper off the catch, the euro step on straight-line drives, the ability to absorb contact and flip the ball home -- is genuinely advanced for his age and experience level.</p>

  <p>He processes the game quickly off the catch in the post, reading the double-team before it fully materializes and releasing soft-touch pocket passes to cutters before the help collapses.</p>

  <p>The passing isn't a headline trait -- his 1.9 assists per game understates the quality of his read-and-release in half-court situations -- but the decision-making is clearly there. He's never going to be the lead creator, but he understands how to be a connective piece and that intelligence shows up in those brief windows where the game demands it.</p>

  <div class="kl-weakness-card">
    <span class="kl-w-label">The Swing Skill</span>
    <p>His three-point shot is the legitimate developmental swing skill. He shot 32.6% from three this season on three attempts per game -- not a shooting disaster, but not the floor-spacing guarantee the league demands from a player at his draft position. His touch is there on stationary rhythm threes and he's adding dribble-jumper attempts to his diet, but the consistency and volume aren't NBA-ready yet. How quickly he rounds into a reliable perimeter threat will largely determine whether his ceiling is a high-end role player or a genuine starter.</p>
  </div>

  <p>He finished at 50.2% from the field overall, a remarkable efficiency mark for a 19-year-old playing professional ball against grown men.</p>

  <div class="kl-stat-grid">
    <div class="kl-stat-box">
      <span class="kl-sv">11.9</span>
      <span class="kl-sl">PPG</span>
    </div>
    <div class="kl-stat-box">
      <span class="kl-sv">50.2%</span>
      <span class="kl-sl">FG%</span>
    </div>
    <div class="kl-stat-box">
      <span class="kl-sv">6.1</span>
      <span class="kl-sl">RPG</span>
    </div>
    <div class="kl-stat-box">
      <span class="kl-sv">1.2</span>
      <span class="kl-sl">SPG</span>
    </div>
  </div>

  <div class="kl-divider"></div>

  <div class="kl-section">
    <span class="kl-section-label">The Other End</span>
    <h2 class="kl-section-title">Defensive Profile</h2>
    <span class="kl-rule"></span>
  </div>

  <p>His foundation is excellent. The tools -- length, anticipation, active hands, positional size, movement -- are all there. The 1.2 steals per game reflects genuine instincts jumping passing lanes rather than gambling, and his help-side read on shot contests shows the spatial awareness you want from a forward who might guard multiple positions.</p>

  <p>The intensity gap is the honest assessment. He reads the floor well enough to know when to leave his assignment and rotate, but the commitment level on the ball and away from it isn't yet consistent possession to possession.</p>

  <div class="kl-weakness-card">
    <span class="kl-w-label">Film Room Concern</span>
    <p>He'll pick his spots defensively rather than locking in for 30 minutes straight, and in the NBL that was manageable. In the NBA, that will get him killed until the professional habits fully form. His contests at the perimeter are too passive -- present but not disruptive -- and getting stationed against a quick two-guard or a slippery three who can put him on his heels laterally will expose the one real athleticism gap in his profile.</p>
    <p>The framework is right though. There's no mechanical breakdown to fix, no fundamental misunderstanding of defensive concepts, no posture issue. It's a motor and intensity problem -- which is the most coachable version of a defensive problem a prospect can have.</p>
  </div>

  <div class="kl-divider"></div>

  <div class="kl-section">
    <span class="kl-section-label">Who Does He Remind You Of</span>
    <h2 class="kl-section-title">The Comp Problem</h2>
    <span class="kl-rule"></span>
  </div>

  <div class="kl-comp-card">
    <span class="kl-c-label">My Read</span>
    <p>Franz Wagner is the body-type and skill-set comp that keeps appearing, and it's earned. Both are 6'9 forwards who handle the ball, score in a variety of ways without needing dominant athleticism, and bring positional versatility that fits any roster construction.</p>
    <p>The LaMelo, Giddey, and Sarr scoring comparison is the most meaningful contextual fact in his entire profile: the Next Stars program has produced real NBA players, and he just outscored all of them.</p>
  </div>

  <div class="kl-divider"></div>

  <div class="kl-section">
    <span class="kl-section-label">Final Take</span>
    <h2 class="kl-section-title">Outlook</h2>
    <span class="kl-rule"></span>
  </div>

  <div class="kl-projection">
    <p>Top-6 is a real grade rooted in his physical profile, his positional size, his offensive maturity at 19, and his defensive ceiling rather than his defensive reality. He's not a finished product defensively and the three-point shot needs work. But his frame is ideal, the footwork is already NBA-level, and the scoring instincts -- the body manipulation, the pace control, the post touch, the running hook, the turnaround -- are the kind of things that take most prospects years to develop and he's already doing them against professionals at 18.</p>
  </div>

  <div class="kl-grade-banner">
    <span class="kl-grade-num">Top 6 Talent</span>
    <span class="kl-grade-caption">4th Overall  2026</span>
  </div>

</div>
`
},

"wilson-scouting-report": {
    tag: "NBA Draft · Film Room",
    hero: "images/wilson.jpeg",
    time: "12 MIN READ",
    published: "June 17, 2026",
    updated: null,
    title: "Caleb Wilson Scouting Report",
    content: `
<style>
  .cw-article {
    font-family: 'Georgia', serif;
    color: inherit;
    max-width: 780px;
    margin: 0 auto;
  }
  .cw-article p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.88;
    margin-bottom: 1.75rem;
    font-weight: 400;
    color: inherit;
    opacity: 0.88;
  }
  .cw-article .cw-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
  }
  .cw-article .cw-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
  }
  .cw-article .cw-section {
    margin: 3.5rem 0 1.25rem;
  }
  .cw-article .cw-section-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.45rem;
  }
  .cw-article .cw-section-title {
    font-family: 'Georgia', serif;
    font-size: clamp(1.4rem, 4.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: inherit;
    margin: 0;
  }
  .cw-article .cw-rule {
    display: block;
    height: 3px;
    width: 2.5rem;
    background: #d4af37;
    margin-top: 0.85rem;
    border-radius: 2px;
  }
  .cw-article .cw-pull {
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 80%);
    border-radius: 0 1.25rem 1.25rem 0;
  }
  .cw-article .cw-pull p {
    font-size: clamp(1.05rem, 2.8vw, 1.3rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .cw-article .cw-pull p { color: #d4af37; }
  .cw-article .cw-stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.65rem;
    margin: 2.5rem 0;
  }
  @media (min-width: 520px) {
    .cw-article .cw-stat-grid { grid-template-columns: repeat(4, 1fr); }
  }
  .cw-article .cw-stat-box {
    background: rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 0.875rem;
    padding: 1rem 0.75rem;
    text-align: center;
  }
  .dark .cw-article .cw-stat-box {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.08);
  }
  .cw-article .cw-stat-box .cw-sv {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(1.3rem, 3.5vw, 1.8rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.3rem;
  }
  .cw-article .cw-stat-box .cw-sl {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.4;
  }
  .cw-article .cw-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent);
    margin: 3rem 0;
  }
  .cw-article .cw-dunk-card {
    background: linear-gradient(135deg, rgba(212,175,55,0.07) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .cw-article .cw-dunk-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #d4af37;
  }
  .cw-article .cw-dunk-card .cw-dk-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .cw-article .cw-dunk-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .cw-article .cw-dunk-card p:last-child { margin-bottom: 0 !important; }
  .cw-article .cw-weakness-card {
    background: rgba(220,38,38,0.04);
    border: 1px solid rgba(220,38,38,0.15);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .cw-article .cw-weakness-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #dc2626;
  }
  .cw-article .cw-weakness-card .cw-w-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  }
  .cw-article .cw-weakness-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .cw-article .cw-weakness-card p:last-child { margin-bottom: 0 !important; }
  .cw-article .cw-ceiling-card {
    background: linear-gradient(135deg, rgba(139,92,246,0.05) 0%, rgba(212,175,55,0.03) 100%);
    border: 1px solid rgba(139,92,246,0.18);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .cw-article .cw-ceiling-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #8b5cf6;
  }
  .cw-article .cw-ceiling-card .cw-c-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #8b5cf6;
    margin-bottom: 1.25rem;
  }
  .cw-article .cw-ceiling-card p {
    margin-bottom: 0.85rem !important;
  }
  .cw-article .cw-ceiling-card p:last-child { margin-bottom: 0 !important; }
  .cw-article .cw-projection {
    background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2.5rem 0;
  }
  .cw-article .cw-projection .cw-proj-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .cw-article .cw-projection p {
    margin-bottom: 0.85rem !important;
  }
  .cw-article .cw-projection p:last-child { margin-bottom: 0 !important; }
  .cw-article .cw-grade-banner {
    text-align: center;
    padding: 2.5rem 1.5rem;
    background: rgba(212,175,55,0.07);
    border: 1px solid rgba(212,175,55,0.22);
    border-radius: 1.75rem;
    margin: 2.5rem 0;
  }
  .cw-article .cw-grade-banner .cw-grade-num {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(3rem, 12vw, 6rem);
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.4rem;
  }
  .cw-article .cw-grade-banner .cw-grade-caption {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.45;
  }
  .cw-article strong { font-weight: 700; opacity: 1; }
  .cw-article em { font-style: italic; }
</style>

<div class="cw-article">

  <div class="cw-byline">
    <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
    <div class="cw-byline-text">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a><br>
      June 17, 2026
    </div>
  </div>

  <div class="cw-section">
    <span class="cw-section-label">Physical</span>
    <h2 class="cw-section-title">Physical Profile</h2>
    <span class="cw-rule"></span>
  </div>

  <p>6'9.25 barefoot, 210.8 pounds, 7'0.25 wingspan, 9'0 standing reach. The length is the first thing you notice -- his wingspan crosses the seven-foot threshold, which at his position creates defensive coverage and offensive finishing angles that most wings never access. His frame is lean, almost too lean for a player who will eventually need to anchor a frontcourt against NBA centers. He posted a 34.5-inch standing vertical and 39.5-inch max vertical at the combine but that feels conservative given what he does above the rim on tape. He's still growing into his body in the most meaningful sense: not taller, but denser. An NBA strength program will add functional mass to his upper body and lower his center of gravity, and the ceiling rises when that happens.</p>

  <p>The hand injury that ended his freshman season in February -- a broken thumb that cost him nine games -- is the only real physical concern in his profile, and it's already behind him.</p>

  <div class="cw-stat-grid">
    <div class="cw-stat-box">
      <span class="cw-sv">6'9.25"</span>
      <span class="cw-sl">Barefoot</span>
    </div>
    <div class="cw-stat-box">
      <span class="cw-sv">7'0.25"</span>
      <span class="cw-sl">Wingspan</span>
    </div>
    <div class="cw-stat-box">
      <span class="cw-sv">39.5"</span>
      <span class="cw-sl">Max Vertical</span>
    </div>
    <div class="cw-stat-box">
      <span class="cw-sv">211</span>
      <span class="cw-sl">Pounds</span>
    </div>
  </div>

  <div class="cw-divider"></div>

  <div class="cw-section">
    <span class="cw-section-label">Bag</span>
    <h2 class="cw-section-title">Offensive Toolkit</h2>
    <span class="cw-rule"></span>
  </div>

  <p>Wilson doesn't build advantages through dribble creation or three-point gravity. He builds them through timing, pre-read decisiveness, and an athletic ceiling so high that when the game opens up even slightly, he converts plays that most forwards simply can't access.</p>

  <div class="cw-pull"><p>The processing speed is what separates him from other elite athletes at his position. Catching a high-post entry pass, he's already read the defense, committed to his action, and initiated his move before the ball fully arrives -- storing his momentum while the pass is in the air so that the rocker step, the shoulder shimmy fake, or the jab-step misdirection begins from a live platform rather than a standing reset.</p></div>

  <p>That's how a 6'10 freshman regularly beats NBA-caliber athletes off the catch: he's simply already in motion when they think the sequence is still beginning. His 1.4 assist-to-turnover ratio on 28.8% usage speaks directly to this composure -- he's making quick, correct decisions under real defensive pressure at a rate most freshmen forwards can't approach.</p>

  <p>His post finishing package is the most surprising element of his offensive profile for someone of his age. He shows a legitimate shoulder-shimmy rocker step -- a subtle half-body fake that loads the defender's weight in one direction before he explodes the opposite way -- and his counters off it are already varied: he can pull up for a short runner off the gather, fade into a mid-range jumper from the elbow, or use the defender's momentum against them and attack the vacated lane for a rim finish. The foot coverage is exceptional -- he eats ground in two or three steps where most forwards need four or five, arriving at the rim before the help defense can fully rotate.</p>

  <div class="cw-dunk-card">
    <span class="cw-dk-label">Above The Rim</span>
    <p>He dunks violently and often. Sixty-six dunks in 24 games at UNC. Not poster dunks in the highlight-reel sense -- he finishes contact dunks and full-extension finishes that require going up and forward simultaneously, covering horizontal and vertical distance in the same leap. His head regularly appears at or above rim level on attempts. The euro-step dunk -- catching a step in traffic, switching launch foot, and arriving above the defense's outstretched arms -- is already in his bag and already spectacular.</p>
  </div>

  <p>He shot 68% at the rim on 176 total attempts, with reverse layups adding wrist spin to manipulate the angle over shot-blockers, and scoop finishes that exploit his length at undefendable release points. He ran the floor well enough in transition to be a legitimate lob threat on every possession, which Duke head coaches and opposing scouts have had to account for every single time the ball crosses halfcourt. His 14.0 BPM at UNC -- the metric that most comprehensively captures on-court impact -- ranked among the elite freshmen forwards in program history.</p>

  <div class="cw-weakness-card">
    <span class="cw-w-label">Film Room Concern</span>
    <p>The honest tension in his offensive profile is what remains when you remove the athleticism. His three-point shot doesn't exist yet -- 25.9% on 1.1 attempts per game is a number that opposing defenses will ignore, and getting ignored at the perimeter in the NBA opens up driving lanes but closes off floor-spacing value in half-court sets. His handle above the three-point line can get loose, with occasional high-dribble possessions that allow defensive hands to swipe through. He prefers going right, and elite scouts at the NBA level will have that tendency charted and loaded into their defensive game plan from night one. And when he runs into resistance in the post -- physical bigs who can hold their ground and push him off his pivot -- the lack of lower body mass creates instability that limits his efficiency in those sequences.</p>
  </div>

  <div class="cw-stat-grid">
    <div class="cw-stat-box">
      <span class="cw-sv">19.8</span>
      <span class="cw-sl">PPG</span>
    </div>
    <div class="cw-stat-box">
      <span class="cw-sv">9.4</span>
      <span class="cw-sl">RPG</span>
    </div>
    <div class="cw-stat-box">
      <span class="cw-sv">62.6%</span>
      <span class="cw-sl">True Shooting</span>
    </div>
    <div class="cw-stat-box">
      <span class="cw-sv">14.0</span>
      <span class="cw-sl">BPM</span>
    </div>
  </div>

  <div class="cw-divider"></div>

  <div class="cw-section">
    <span class="cw-section-label">The Other End</span>
    <h2 class="cw-section-title">Defensive Profile</h2>
    <span class="cw-rule"></span>
  </div>

  <p>His defensive upside is Giannis-adjacent in the specific sense that his length, lateral mobility, and instincts project toward guarding one through four in the NBA with the right development. His 2.9 stocks per game -- 1.5 steals and 1.4 blocks combined -- already show the two-way impact in real numbers rather than projection. His poke-away technique -- the long, controlled arm reach that strips the ball from a dribbler without overcommitting his body -- is rare and already effective.</p>

  <div class="cw-weakness-card">
    <span class="cw-w-label">The Motor Question</span>
    <p>His defensive motor is the critical developmental variable and the honest weakness in his profile. He takes possessions off. There are genuinely dominant stretches where he transforms into a defensive nightmare -- switching everything, contesting at the rim, cutting off driving lanes with his ground coverage -- followed by sequences where he loses his assignment off-ball, sags into the paint when he should be tracking a perimeter shooter, or gets caught gambling on a help-rotation that doesn't materialize. His inconsistency isn't scheme confusion -- it's competitive focus, which is the most coachable of the three possible reasons for defensive lapses and the one that most commonly resolves with professional coaching and higher stakes competition.</p>
    <p>He also struggles navigating ball screens on the perimeter, sometimes getting caught in the hip of the screener rather than fighting over or under cleanly, and his transition defense effort is inconsistent -- he doesn't always sprint back with the urgency his athletic profile would suggest. He's not an aggressive offensive rebounder, preferring to get back on defense rather than crashing the glass -- a habit that reflects basketball intelligence but also leaves points on the board.</p>
  </div>

  <div class="cw-divider"></div>

  <div class="cw-section">
    <span class="cw-section-label">Long View</span>
    <h2 class="cw-section-title">The Ceiling Question</h2>
    <span class="cw-rule"></span>
  </div>

  <div class="cw-ceiling-card">
    <span class="cw-c-label">My Read</span>
    <p>This is the genuinely open question in his entire evaluation: what does he look like when the athleticism recedes? The Giannis and Hakeem comparisons on his drives -- the gliding quality, the euro-step with finesse, the post spins that echo The Dream's footwork -- are real when you watch the tape. But Giannis built a second offensive identity around the three-point line. Hakeem had perhaps the most refined post repertoire in NBA history to fall back on. Wilson's mid-range game is real and his post footwork flashes are encouraging, but neither is currently developed enough to carry him if the elite athleticism becomes merely good athleticism over a decade in the league.</p>
    <p>Kevin Garnett is the comp that keeps floating around in evaluator circles -- same length profile, same two-way impact, same question about offensive floor-spacing. KG figured it out into his late twenties. The path exists. The work required to walk it is the open variable.</p>
  </div>

  <div class="cw-divider"></div>

  <div class="cw-section">
    <span class="cw-section-label">Final Take</span>
    <h2 class="cw-section-title">Outlook</h2>
    <span class="cw-rule"></span>
  </div>

  <div class="cw-projection">
    <p>Top-3 is defensible and possibly conservative depending on how aggressively you project the defensive ceiling. The consensus places him at four behind a combination of Dybantsa, Peterson, and Boozer depending on the evaluator -- but the pure upside case for taking Wilson over any of them is legitimate if you believe the offensive development will come and the defensive motor will lock in under professional accountability.</p>
    <p>Nineteen years old, seven-foot wingspan, 62.6% true shooting in college, 66 dunks in 24 games, and more post finishing craft than any freshman his size has shown in this program in two decades. The floor is high. The ceiling is genuinely among the highest in this class.</p>
  </div>

  <div class="cw-grade-banner">
    <span class="cw-grade-num">Top 3 Talent</span>

  </div>

</div>
`
},

"evans-scouting-report": {
    tag: "NBA Draft · Film Room",
    hero: "images/evans.jpeg",
    time: "10 MIN READ",
    published: "June 17, 2026",
    updated: null,
    title: "Isaiah Evans Scouting Report",
    content: `
<style>
  .ie-article {
    font-family: 'Georgia', serif;
    color: inherit;
    max-width: 780px;
    margin: 0 auto;
  }
  .ie-article p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.88;
    margin-bottom: 1.75rem;
    font-weight: 400;
    color: inherit;
    opacity: 0.88;
  }
  .ie-article .ie-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
  }
  .ie-article .ie-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
  }
  .ie-article .ie-section {
    margin: 3.5rem 0 1.25rem;
  }
  .ie-article .ie-section-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.45rem;
  }
  .ie-article .ie-section-title {
    font-family: 'Georgia', serif;
    font-size: clamp(1.4rem, 4.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: inherit;
    margin: 0;
  }
  .ie-article .ie-rule {
    display: block;
    height: 3px;
    width: 2.5rem;
    background: #d4af37;
    margin-top: 0.85rem;
    border-radius: 2px;
  }
  .ie-article .ie-pull {
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 80%);
    border-radius: 0 1.25rem 1.25rem 0;
  }
  .ie-article .ie-pull p {
    font-size: clamp(1.05rem, 2.8vw, 1.3rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .ie-article .ie-pull p { color: #d4af37; }
  .ie-article .ie-stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.65rem;
    margin: 2.5rem 0;
  }
  @media (min-width: 520px) {
    .ie-article .ie-stat-grid { grid-template-columns: repeat(4, 1fr); }
  }
  .ie-article .ie-stat-box {
    background: rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 0.875rem;
    padding: 1rem 0.75rem;
    text-align: center;
  }
  .dark .ie-article .ie-stat-box {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.08);
  }
  .ie-article .ie-stat-box .ie-sv {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(1.3rem, 3.5vw, 1.8rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.3rem;
  }
  .ie-article .ie-stat-box .ie-sl {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.4;
  }
  .ie-article .ie-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent);
    margin: 3rem 0;
  }
  .ie-article .ie-combine-card {
    background: rgba(220,38,38,0.04);
    border: 1px solid rgba(220,38,38,0.15);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .ie-article .ie-combine-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #dc2626;
  }
  .ie-article .ie-combine-card .ie-cc-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  }
  .ie-article .ie-combine-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .ie-article .ie-combine-card p:last-child { margin-bottom: 0 !important; }
  .ie-article .ie-weakness-card {
    background: rgba(220,38,38,0.04);
    border: 1px solid rgba(220,38,38,0.15);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .ie-article .ie-weakness-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #dc2626;
  }
  .ie-article .ie-weakness-card .ie-w-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  }
  .ie-article .ie-weakness-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .ie-article .ie-weakness-card p:last-child { margin-bottom: 0 !important; }
  .ie-article .ie-sleeper-card {
    background: linear-gradient(135deg, rgba(139,92,246,0.05) 0%, rgba(212,175,55,0.03) 100%);
    border: 1px solid rgba(139,92,246,0.18);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .ie-article .ie-sleeper-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #8b5cf6;
  }
  .ie-article .ie-sleeper-card .ie-s-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #8b5cf6;
    margin-bottom: 1.25rem;
  }
  .ie-article .ie-sleeper-card p {
    margin-bottom: 0.85rem !important;
  }
  .ie-article .ie-sleeper-card p:last-child { margin-bottom: 0 !important; }
  .ie-article .ie-projection {
    background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2.5rem 0;
  }
  .ie-article .ie-projection .ie-proj-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .ie-article .ie-projection p {
    margin-bottom: 0.85rem !important;
  }
  .ie-article .ie-projection p:last-child { margin-bottom: 0 !important; }
  .ie-article .ie-grade-banner {
    text-align: center;
    padding: 2.5rem 1.5rem;
    background: rgba(212,175,55,0.07);
    border: 1px solid rgba(212,175,55,0.22);
    border-radius: 1.75rem;
    margin: 2.5rem 0;
  }
  .ie-article .ie-grade-banner .ie-grade-num {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(3rem, 12vw, 6rem);
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.4rem;
  }
  .ie-article .ie-grade-banner .ie-grade-caption {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.45;
  }
  .ie-article strong { font-weight: 700; opacity: 1; }
  .ie-article em { font-style: italic; }
</style>

<div class="ie-article">

  <div class="ie-byline">
    <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
    <div class="ie-byline-text">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a><br>
      June 17, 2026
    </div>
  </div>

  <div class="ie-section">
    <span class="ie-section-label">Physical</span>
    <h2 class="ie-section-title">Physical Profile</h2>
    <span class="ie-rule"></span>
  </div>

  <p>6'5.5 barefoot, 186 pounds, 6'8.75 wingspan, 8'8.5 standing reach. His frame reads lean -- thin limbs, wiry build -- but he's basketball-built in the way that matters, long enough to get his shot over most wings and strong enough in the moment of contact to finish. The weight will come with an NBA strength program, and there's real developmental upside in that physical growth curve.</p>

  <div class="ie-combine-card">
    <span class="ie-cc-label">The Combine Paradox</span>
    <p>Here's where it gets interesting: his combine athletic testing raised red flags that don't fully square with what you see on tape. His 27-inch no-step vertical and second-slowest lane agility time of anyone in this class are legitimately poor numbers -- the kind of marks that typically correspond to a player who can't play above the rim or navigate traffic at full speed. But that's not what he shows you. He puts defenders on posters. He maneuvers through congested paint at full speed without losing a stride. He catches high-ball passes mid-run without breaking his momentum.</p>
    <p>The gap between his athletic profile on paper and his functional athleticism on tape is one of the most genuinely puzzling disconnects in this entire draft class, and it suggests his actual value lives somewhere the testing simply doesn't measure -- in timing, body control, and proprioception rather than raw twitch.</p>
  </div>

  <div class="ie-stat-grid">
    <div class="ie-stat-box">
      <span class="ie-sv">6'5.5"</span>
      <span class="ie-sl">Barefoot</span>
    </div>
    <div class="ie-stat-box">
      <span class="ie-sv">6'8.75"</span>
      <span class="ie-sl">Wingspan</span>
    </div>
    <div class="ie-stat-box">
      <span class="ie-sv">27"</span>
      <span class="ie-sl">No-Step Vert</span>
    </div>
    <div class="ie-stat-box">
      <span class="ie-sv">35.5"</span>
      <span class="ie-sl">Max Vert</span>
    </div>
  </div>

  <div class="ie-divider"></div>

  <div class="ie-section">
    <span class="ie-section-label">Bag</span>
    <h2 class="ie-section-title">Offensive Toolkit</h2>
    <span class="ie-rule"></span>
  </div>

  <p>Evans is a natural basketball mover in the truest sense. Everything he does offensively flows from an advanced pre-read processing system that begins before the ball ever arrives. When he's running off a screen from the high post curling out to the right wing for a catch-and-shoot three, he's already committed to his footwork and release by the time the ball is in flight. Defenders cannot rest or cheat with him because he's already decided and already moving. That pre-catch commitment is a trait the best movement shooters in the league share, and Evans has it naturally.</p>

  <p>His shooting is the foundation. He went from 14 made baskets at the rim as a freshman to 64 as a sophomore -- a leap in rim-attack volume that reflects genuine development in his willingness and ability to create off the catch and drive. His shooting splits -- 43.3/36.1/86.0 -- confirm his touch across all three levels is real. He led Duke in made threes, averaged 2.7 per game ranking 5th among all ACC players, and when he hits three or more threes, his teams are a combined 27-0 in his two-year career. That is a meaningful winning correlation.</p>

  <div class="ie-pull"><p>His compact, fluid release is a legitimate NBA weapon. His shot preparation -- early hand placement, active feet finding his spot before the catch, consistent balance at the release point -- creates a repeatable, quick-trigger mechanism that functions off the catch, off the curl, and off straight-line drives.</p></div>

  <p>He's shown deep range from both wings, not just his natural right side.</p>

  <p>His ability to attack the paint in straight-line drives off the catch is more advanced than his reputation suggests. He uses jab-step feints and body fakes to manipulate a tight defender's weight before attacking the gap, and he processes the coverage read fast enough to locate the open roll man or skip pass while still in full drive momentum.</p>

  <p>For a player with an 8.3% assist rate, a modest number, the passing flashes on catch-and-drive reads look better than that figure implies.</p>

  <p>His transition game is genuinely special. He may be the most fluid dribbler in this draft class in the open floor, not in terms of handle complexity, but in terms of total efficiency loss during maneuvering. He executes directional changes, behind-the-back redirections, and sudden directional cuts at full speed without any reduction in pace or stride length. That quality, maintaining momentum through actions rather than pausing to execute them, is genuinely rare and genuinely hard to teach.</p>

  <div class="ie-stat-grid">
    <div class="ie-stat-box">
      <span class="ie-sv">15.0</span>
      <span class="ie-sl">PPG</span>
    </div>
    <div class="ie-stat-box">
      <span class="ie-sv">43.3%</span>
      <span class="ie-sl">FG%</span>
    </div>
    <div class="ie-stat-box">
      <span class="ie-sv">36.1%</span>
      <span class="ie-sl">3PT%</span>
    </div>
    <div class="ie-stat-box">
      <span class="ie-sv">59%</span>
      <span class="ie-sl">True Shooting</span>
    </div>
  </div>

  <div class="ie-divider"></div>

  <div class="ie-section">
    <span class="ie-section-label">The Other End</span>
    <h2 class="ie-section-title">Defensive Profile</h2>
    <span class="ie-rule"></span>
  </div>

  <div class="ie-weakness-card">
    <span class="ie-w-label">Film Room Concern</span>
    <p>His defensive stance is the clearest mechanical concern on tape. His base reads as shallow and inconsistent, insufficient hip loading and core engagement to anchor him in position against physical wing matchups. It's a functional weakness that gets exposed when bigger players post him up or drive aggressively at his chest, and it's the physical development priority that has to be addressed in an NBA program before his defensive potential is fully unlocked.</p>
    <p>Off the ball, his awareness lapses are real. He can lose track of his assignment when ball movement requires him to process help rotations, he gives up too much cushion on off-ball relocations, and he's susceptible to shot fakes and jab-step misdirection on the perimeter when guarding the ball. His modest steal and block numbers -- 0.7 each -- reflect the limited defensive impact rather than obscuring something the tape doesn't show.</p>
  </div>

  <div class="ie-divider"></div>

  <div class="ie-section">
    <span class="ie-section-label">Me vs The Market</span>
    <h2 class="ie-section-title">The Sleeper Case</h2>
    <span class="ie-rule"></span>
  </div>

  <div class="ie-sleeper-card">
    <span class="ie-s-label">Where I Differ</span>
    <p>Jonathan Wasserman's most recent mock has him going 27th overall. Tankathon slots him 24th. The consensus has him as a late-lottery-to-mid-first value -- a shooting specialist who earns rotation minutes immediately but profiles as a specialist rather than a primary contributor.</p>
    <p>I have his value in the 13-18 range and the case for it is real: his pre-read processing speed, his transition fluency, his rim-attack development, and his shooting gravity are all traits that the league is demonstrably willing to pay for in the lottery. Combine that with a 59% true shooting percentage on 21.9% usage, and you have a player whose efficiency on the shots he does take is elite.</p>
    <p>The counterargument is the second-slowest lane agility, pedestrian steal and block numbers, modest assist rate, loose ball security in traffic. These facts limit the projection from elite starter to high-value potential starter. If strength development unlocks a defensive tier he hasn't shown yet, he might even become a good to great starter.</p>
  </div>

  <div class="ie-divider"></div>

  <div class="ie-section">
    <span class="ie-section-label">Final Take</span>
    <h2 class="ie-section-title">Outlook</h2>
    <span class="ie-rule"></span>
  </div>

  <div class="ie-projection">
    <p>He might be the most underrated athlete in this draft in the specific sense of -- functional, situational athleticism that the testing doesn't capture, packaged inside a shooting profile that translates immediately. His ceiling is a modern all around scoring threat with a legitimate on-off impact through shooting and slashing gravity. His floor, even if the defensive development stalls, is a rotation wing who earns minutes in NBA lineups on shooting alone.</p>
  </div>

  <div class="ie-grade-banner">
    <span class="ie-grade-num">13-18 Talent</span>

  </div>

</div>
`
},

"dybantsa-scouting-report": {
    tag: "NBA Draft · Film Room",
    hero: "images/dyb.webp",
    time: "13 MIN READ",
    published: "June 17, 2026",
    updated: "July 8, 2026",
    title: "AJ Dybantsa Scouting Report",
    content: `
<style>
  .aj-article {
    font-family: 'Georgia', serif;
    color: inherit;
    max-width: 780px;
    margin: 0 auto;
  }
  .aj-article p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.88;
    margin-bottom: 1.75rem;
    font-weight: 400;
    color: inherit;
    opacity: 0.88;
  }
  .aj-article .aj-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
  }
  .aj-article .aj-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
  }
  .aj-article .aj-section {
    margin: 3.5rem 0 1.25rem;
  }
  .aj-article .aj-section-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.45rem;
  }
  .aj-article .aj-section-title {
    font-family: 'Georgia', serif;
    font-size: clamp(1.4rem, 4.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: inherit;
    margin: 0;
  }
  .aj-article .aj-rule {
    display: block;
    height: 3px;
    width: 2.5rem;
    background: #d4af37;
    margin-top: 0.85rem;
    border-radius: 2px;
  }
  .aj-article .aj-pull {
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 80%);
    border-radius: 0 1.25rem 1.25rem 0;
  }
  .aj-article .aj-pull p {
    font-size: clamp(1.05rem, 2.8vw, 1.3rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .aj-article .aj-pull p { color: #d4af37; }
  .aj-article .aj-stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.65rem;
    margin: 2.5rem 0;
  }
  @media (min-width: 520px) {
    .aj-article .aj-stat-grid { grid-template-columns: repeat(4, 1fr); }
  }
  .aj-article .aj-stat-box {
    background: rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 0.875rem;
    padding: 1rem 0.75rem;
    text-align: center;
  }
  .dark .aj-article .aj-stat-box {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.08);
  }
  .aj-article .aj-stat-box .aj-sv {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(1.3rem, 3.5vw, 1.8rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.3rem;
  }
  .aj-article .aj-stat-box .aj-sl {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.4;
  }
  .aj-article .aj-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent);
    margin: 3rem 0;
  }
  .aj-article .aj-reckoning {
    background: rgba(220,38,38,0.04);
    border: 1px solid rgba(220,38,38,0.15);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .aj-article .aj-reckoning::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #dc2626;
  }
  .aj-article .aj-reckoning .aj-r-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  }
  .aj-article .aj-reckoning p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .aj-article .aj-reckoning p:last-child { margin-bottom: 0 !important; }
  .aj-article .aj-def-card {
    background: rgba(220,38,38,0.04);
    border: 1px solid rgba(220,38,38,0.12);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .aj-article .aj-def-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #dc2626;
  }
  .aj-article .aj-def-card .aj-d-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  }
  .aj-article .aj-def-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .aj-article .aj-def-card p:last-child { margin-bottom: 0 !important; }
  .aj-article .aj-comp-card {
    background: linear-gradient(135deg, rgba(139,92,246,0.05) 0%, rgba(212,175,55,0.03) 100%);
    border: 1px solid rgba(139,92,246,0.18);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .aj-article .aj-comp-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #8b5cf6;
  }
  .aj-article .aj-comp-card .aj-c-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #8b5cf6;
    margin-bottom: 1.25rem;
  }
  .aj-article .aj-comp-card p {
    margin-bottom: 0.85rem !important;
  }
  .aj-article .aj-comp-card p:last-child { margin-bottom: 0 !important; }
  .aj-article .aj-projection {
    background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2.5rem 0;
  }
  .aj-article .aj-projection .aj-proj-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .aj-article .aj-projection p {
    margin-bottom: 0.85rem !important;
  }
  .aj-article .aj-projection p:last-child { margin-bottom: 0 !important; }
  .aj-article .aj-grade-banner {
    text-align: center;
    padding: 2.5rem 1.5rem;
    background: rgba(212,175,55,0.07);
    border: 1px solid rgba(212,175,55,0.22);
    border-radius: 1.75rem;
    margin: 2.5rem 0;
  }
  .aj-article .aj-grade-banner .aj-grade-num {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(3rem, 12vw, 6rem);
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.4rem;
  }
  .aj-article .aj-grade-banner .aj-grade-caption {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.45;
  }
  .aj-article strong { font-weight: 700; opacity: 1; }
  .aj-article em { font-style: italic; }
</style>

<div class="aj-article">

  <div class="aj-byline">
    <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
    <div class="aj-byline-text">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a><br>
      June 17, 2026
    </div>
  </div>

  <div class="aj-section">
    <span class="aj-section-label">Physical</span>
    <h2 class="aj-section-title">Physical Profile</h2>
    <span class="aj-rule"></span>
  </div>

  <p>6'9 in shoes with a wingspan hovering around 6'11, an 8'10 standing reach, and a frame that has real room to add functional mass. His movement pattern is genuinely unlike anything in this draft class -- a knee-heavy, arm-swinging gait that looks almost mechanical at first glance but covers ground at a rate that doesn't match how much effort it appears to require. Long strides, unusual load distribution, a gliding quality through open space. It's a movement signature you haven't seen before, which makes it simultaneously fascinating and difficult to project. His ground coverage is mesmerizing, and there's a packed, stored power quality to his athleticism -- like energy coiled tight at the hip and knee rather than dispersed loosely through the body the way springy, elastic athletes tend to move.</p>

  <div class="aj-divider"></div>

  <div class="aj-section">
    <span class="aj-section-label">Bag</span>
    <h2 class="aj-section-title">Offensive Toolkit</h2>
    <span class="aj-rule"></span>
  </div>

  <p>He averaged 25.5 points, 6.8 rebounds, and 3.7 assists on 51% shooting across 35 games at BYU, the kind of volume-and-efficiency combination that almost never shows up from a true freshman, and his true shooting percentage sat at 60% despite the enormous usage load. His production is real and it's verified by the advanced numbers -- this isn't a volume mirage.</p>

  <p>He finished 73.4% on shots within 4.5 feet of the rim -- 127 of 173 attempts -- and 50.6% on all paint attempts. That's elite at-rim efficiency on real volume. His takeoff zone is notably large -- he'll initiate his gather from the inner elbow, which is further out than most players attempt, and still get the angle and clearance to finish. The arm deny move -- using his hand to swipe a defender's grip at the moment of contact to free the path -- is subtle and sophisticated. He's surefire grab-and-go in transition, with the twitch, elasticity, and toughness to finish at the basket.</p>

  <div class="aj-pull"><p>His midrange pull-up efficiency -- 46.3% on an enormous 12 attempts per 100 possessions -- is the most translatable offensive weapon in his profile. That's a volume and efficiency combination that defines the best midrange scorers in the league, and it's the bedrock of his offensive identity right now.</p></div>

  <p>He also shot 44% on 36 total runners, which speaks to genuine finishing touch in the in-between areas rather than just proximity to the basket.</p>

  <p>He also uses his body intelligently in ways that don't always get credited: the hip bump to slow a trailing defender -- using his lower body to absorb and pause the chase without fouling -- is a veteran habit that shows real physical awareness. The give-and-go without the ball is where he looks most natural as a cutter: his arm strength and swim move win the hand battle against tight press defenders, and he generates separation to catch as a cutter and finish above the rim.</p>

  <p>His off-play communication on the court stands out -- constant verbal engagement with teammates, eye contact, hands pointing. Whether that's true leadership or a young player who believes he's already the authority in the room is a real and important open question.</p>

  <div class="aj-stat-grid">
    <div class="aj-stat-box">
      <span class="aj-sv">25.5</span>
      <span class="aj-sl">PPG</span>
    </div>
    <div class="aj-stat-box">
      <span class="aj-sv">60%</span>
      <span class="aj-sl">True Shooting</span>
    </div>
    <div class="aj-stat-box">
      <span class="aj-sv">73.4%</span>
      <span class="aj-sl">At Rim FG%</span>
    </div>
    <div class="aj-stat-box">
      <span class="aj-sv">46.3%</span>
      <span class="aj-sl">Midrange%</span>
    </div>
  </div>

  <div class="aj-reckoning">
    <span class="aj-r-label">Now The Honest Truth</span>
    <p>His handle is tight relative to his style of play -- meaning he's dependent on hesitation, two-foot gathers, and his physical load rather than genuine manipulation of the dribble to create separation. He can become slightly overreliant on playing off two feet, and his spin moves, while functional, have a telegraphed quality. Defenders  at the NBA level will read some of his moves well in advance. The agility simply isn't there in the same way the athleticism is -- he's a powerful, stored-energy athlete rather than a twitchy, reactive one, and that stored quality makes him predictable when he needs to improvise in tight spaces.</p>
    <p>His three-point shot is flat. He shot 33.1% overall from three, with a pronounced pause when catching and shooting as he reorganizes his shot. He shot better off the dribble (36%) than catching and shooting (30%), which is the opposite of what you want to see from a developing shooter. The range shows up on tape but the reliability doesn't.</p>
    <p>When doubles come, and they came often at BYU, he runs from them. Backs to the basket, ball handler's worst nightmare: he turns to face the double and panics. He was seen multiple times running back to the three-point line to avoid the double rather than making the read, which stalls the offense, creates lag, and generates turnovers at the moments when his team needs him to be decisive. That's not a small thing. That's a fundamental processing deficiency under pressure that shows up specifically when he's most needed.</p>
    <p>He has a tendency to ball hog. His usage rate at BYU was enormous, and while the efficiency held, the shot selection discipline didn't always follow. He's going to have to share the floor with  NBA players who need to be involved, and the adjustment from BYU's system -- which was largely built to feed him -- to an NBA offensive ecosystem where he's one piece of a larger machine is not a guaranteed smooth transition.</p>
  </div>

  <div class="aj-divider"></div>

  <div class="aj-section">
    <span class="aj-section-label">The Other End</span>
    <h2 class="aj-section-title">Defensive Profile</h2>
    <span class="aj-rule"></span>
  </div>

  <div class="aj-def-card">
    <span class="aj-d-label">Film Room Concern</span>
    <p>He was basically completely inactive as an off-ball help defender this year at BYU.</p>
    <p>His transition get-back effort is slow and inconsistent, a real tell about where his competitive energy lives on that end. He has bursts of genuine half-court defensive intensity when his assignment demands it. He tracks his man through chaos, maintains visual discipline, and shows real awareness following his check through traffic. But the effort is selective rather than continuous.</p>
    <p>The most puzzling tendency is what I'd call defensive assignment tunnel vision: He'll be correctly positioned near a help man and in a position where he is close enough to contest a shot. in these situations however, he will watch the oppposing offesnive player wind up for an attempt…..and just...freeze. He has the length and the proximity to swipe the ball into the stands. He just doesn't go. It's almost too much assignment-mindedness, an over-focus on his specific role (or man) rather than reading the full defensive possession and reacting to the most impactful available play.</p>
    <p>Loose balls reveal some stiffness. When he has to get low quickly or react to an unscripted floor situation, there's a lag. The stored, coiled athleticism that serves him so well in vertical situations doesn't adapt as readily to horizontal or ground-level movement. His screening also has a technical flaw: he's too handsy, extending his arm to initiate contact rather than setting solid body picks, which at the NBA level is going to get called for illegal screens repeatedly.</p>
  </div>

  <div class="aj-divider"></div>

  <div class="aj-section">
    <span class="aj-section-label">Comparison</span>
    <h2 class="aj-section-title">The Comp Problem</h2>
    <span class="aj-rule"></span>
  </div>

  <div class="aj-comp-card">
    <span class="aj-c-label">My Read</span>
    <p>I see some Kemp in the frame and the athleticism. I also see Wiggins in the movement pattern -- the long, flowing, somewhat stiff yet explosive style of play that produces good-to-great results in college without quite achieving the dominant consistency you expect from a franchise cornerstone. Andrew Wiggins was the first overall pick. Andrew Wiggins is a very good NBA player who won a championship as a key rotation piece, not a superstar. That's the ceiling I worry about before he plays an NBA minute.</p>
    <p>The personality reads as charismatic, brash, enormously confident -- almost smugly so, with the eye rolls and the animated reactions that feel reminiscent of a young Dennis Smith Jr. energy. There's charm there, real engagement and passion, but there's also a question nobody can answer yet: is there room inside that sureness for the humility required to accept that he has a long way to go? Some players with supreme confidence are wired to channel it productively. Others use it as insulation against the coaching and development they actually need. Which version Dybantsa is remains genuinely open.</p>
  </div>

  <div class="aj-divider"></div>

  <div class="aj-section">
    <span class="aj-section-label">Where I Differ</span>
    <h2 class="aj-section-title">The Projection Problem</h2>
    <span class="aj-rule"></span>
  </div>

  <div class="aj-projection">
    <p>The Washington Wizards are reportedly torn between Dybantsa and Darryn Peterson for the first overall pick. The consensus has him as a top-3 selection, potentially the first overall pick, a franchise cornerstone.</p>
    <p>Here's the honest read: his midrange is special. If he develops a deep, varied post-up midrange package -- adding counters to the current pull-up foundation -- he can be a very effective NBA scorer, a microwave who packs points in bunches, capable of winning Sixth Man awards on the right team. But the path from that ceiling to a consistent starter, let alone a franchise cornerstone, requires developments that aren't visible on the current tape: a reliable three-point shot, improved handle under defensive pressure, genuine off-ball defensive engagement, and the adaptability to adjust when NBA defenses solve his telegraphed drives.</p>
    <p>The BYU context inflated his usage and arguably insulated his weaknesses from full exposure -- he got Gortat-style screens from his center, ran in a system built around his strengths, and faced defenses that couldn't match his athleticism. NBA defenses will be more sophisticated, faster, and more physical than anything he saw this year. The processing deficiency when doubles come is going to get exploited systematically.</p>
    <p>You don't select a potential Sixth Man candidate first overall. That's the uncomfortable truth underneath the hype. There's a player here worth developing. Whether that player becomes someone worthy of the expectations attached to his number on draft night is the question, and the tape doesn't currently answer it confidently in the affirmative.</p>
  </div>

  <div class="aj-grade-banner">
    <span class="aj-grade-num">#10 overall</span>
    <span class="aj-grade-caption">My Grade</span>
  </div>

</div>
`
},


"burries-scouting-report": {
    tag: "NBA Draft · Film Room",
    hero: "images/burries.jpeg",
    time: "10 MIN READ",
    published: "June 17, 2026",
    updated: null,
    title: "Brayden Burries Scouting Report",
    content: `
<style>
  .bb-article {
    font-family: 'Georgia', serif;
    color: inherit;
    max-width: 780px;
    margin: 0 auto;
  }
  .bb-article p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.88;
    margin-bottom: 1.75rem;
    font-weight: 400;
    color: inherit;
    opacity: 0.88;
  }
  .bb-article .bb-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
  }
  .bb-article .bb-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
  }
  .bb-article .bb-section {
    margin: 3.5rem 0 1.25rem;
  }
  .bb-article .bb-section-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.45rem;
  }
  .bb-article .bb-section-title {
    font-family: 'Georgia', serif;
    font-size: clamp(1.4rem, 4.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: inherit;
    margin: 0;
  }
  .bb-article .bb-rule {
    display: block;
    height: 3px;
    width: 2.5rem;
    background: #d4af37;
    margin-top: 0.85rem;
    border-radius: 2px;
  }
  .bb-article .bb-pull {
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 80%);
    border-radius: 0 1.25rem 1.25rem 0;
  }
  .bb-article .bb-pull p {
    font-size: clamp(1.05rem, 2.8vw, 1.3rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .bb-article .bb-pull p { color: #d4af37; }
  .bb-article .bb-stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.65rem;
    margin: 2.5rem 0;
  }
  @media (min-width: 520px) {
    .bb-article .bb-stat-grid { grid-template-columns: repeat(4, 1fr); }
  }
  .bb-article .bb-stat-box {
    background: rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 0.875rem;
    padding: 1rem 0.75rem;
    text-align: center;
  }
  .dark .bb-article .bb-stat-box {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.08);
  }
  .bb-article .bb-stat-box .bb-sv {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(1.3rem, 3.5vw, 1.8rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.3rem;
  }
  .bb-article .bb-stat-box .bb-sl {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.4;
  }
  .bb-article .bb-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent);
    margin: 3rem 0;
  }
  .bb-article .bb-weakness-card {
    background: rgba(220,38,38,0.04);
    border: 1px solid rgba(220,38,38,0.15);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .bb-article .bb-weakness-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #dc2626;
  }
  .bb-article .bb-weakness-card .bb-w-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  }
  .bb-article .bb-weakness-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .bb-article .bb-weakness-card p:last-child { margin-bottom: 0 !important; }
  .bb-article .bb-comp-card {
    background: linear-gradient(135deg, rgba(139,92,246,0.05) 0%, rgba(212,175,55,0.03) 100%);
    border: 1px solid rgba(139,92,246,0.18);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .bb-article .bb-comp-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #8b5cf6;
  }
  .bb-article .bb-comp-card .bb-c-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #8b5cf6;
    margin-bottom: 1.25rem;
  }
  .bb-article .bb-comp-card p {
    margin-bottom: 0.85rem !important;
  }
  .bb-article .bb-comp-card p:last-child { margin-bottom: 0 !important; }
  .bb-article .bb-projection {
    background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2.5rem 0;
  }
  .bb-article .bb-projection .bb-proj-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .bb-article .bb-projection p {
    margin-bottom: 0.85rem !important;
  }
  .bb-article .bb-projection p:last-child { margin-bottom: 0 !important; }
  .bb-article .bb-grade-banner {
    text-align: center;
    padding: 2.5rem 1.5rem;
    background: rgba(212,175,55,0.07);
    border: 1px solid rgba(212,175,55,0.22);
    border-radius: 1.75rem;
    margin: 2.5rem 0;
  }
  .bb-article .bb-grade-banner .bb-grade-num {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(3rem, 12vw, 6rem);
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.4rem;
  }
  .bb-article .bb-grade-banner .bb-grade-caption {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.45;
  }
  .bb-article strong { font-weight: 700; opacity: 1; }
  .bb-article em { font-style: italic; }
</style>

<div class="bb-article">

  <div class="bb-byline">
    <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
    <div class="bb-byline-text">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a><br>
      June 17, 2026
    </div>
  </div>

  <div class="bb-section">
    <span class="bb-section-label">Background</span>
    <h2 class="bb-section-title">Background &amp; Physical Profile</h2>
    <span class="bb-rule"></span>
  </div>

  <p>A bit older for this class -- he's 20 years old and will turn 21 during his rookie year, the product of a non-traditional high school path that included sitting out a season due to administrative issues at his original school before transferring to Eleanor Roosevelt High. That extra seasoning shows up on tape -- his game already carries a maturity and poise that most one-and-done freshmen simply don't have yet.</p>

  <p>He measured 6'3.75 barefoot, 215.4 pounds, with a 6'6 wingspan and an 8'2.5 standing reach at the combine -- a strong, NBA-ready frame already, with real room to add more functional strength once he's in a professional program full time. His body shows up immediately on tape -- he's able to move his feet in space and absorb bumps, and he might end up functionally as strong as some current NBA fours, even if his length is the gap that matters most against bigger wings who can simply shoot over him.</p>

  <div class="bb-stat-grid">
    <div class="bb-stat-box">
      <span class="bb-sv">6'3.75"</span>
      <span class="bb-sl">Barefoot</span>
    </div>
    <div class="bb-stat-box">
      <span class="bb-sv">6'6"</span>
      <span class="bb-sl">Wingspan</span>
    </div>
    <div class="bb-stat-box">
      <span class="bb-sv">215</span>
      <span class="bb-sl">Pounds</span>
    </div>
    <div class="bb-stat-box">
      <span class="bb-sv">20</span>
      <span class="bb-sl">Years Old</span>
    </div>
  </div>

  <div class="bb-divider"></div>

  <div class="bb-section">
    <span class="bb-section-label">Bag</span>
    <h2 class="bb-section-title">Offensive Toolkit</h2>
    <span class="bb-rule"></span>
  </div>

  <p>Burries plays with a calm, controlled pace -- nothing rushed, nothing forced, even in high-leverage moments. He's a legitimate three-level scorer with real range, comfortable pulling from above the break and showing deep range on straightaway looks from the top of the key. His catch is smooth and rhythmic, almost momentum-based -- he's already shifting into his shot before the ball fully arrives, which is a subtle but real indicator of advanced footwork and anticipation.</p>

  <div class="bb-pull"><p>The corner-three-into-baseline-drive-reverse sequence is a genuine highlight package -- patient setup into an efficient finish, the kind of move that looks easy precisely because the footwork underneath it is so clean.</p></div>

  <p>He's effective operating out of the triple threat, using pump fakes and angles to manipulate defenders and generate high-percentage shots, combining power with finesse.</p>

  <p>He's not an elite shake-and-bake dribbler, but he compensates with footwork and strength rather than pure handle craft. He uses his frame to manufacture separation -- bumping into defenders to clear room for his pull-ups, particularly that elbow push-off into a step-back from beyond the arc. His handle speeds up when the situation calls for it, even if that isn't his default tempo. He can also throttle down in the paint, showing real touch on a Euro-step finish that lifts the ball over the defender's reach rather than around it.</p>

  <p>He led Arizona in scoring at 16.1 points per game on elite efficiency -- 49.1% from the field, 39.1% from three, and 80.5% from the line -- a shooting profile that confirms the touch is genuine across all three levels rather than a hot-shooting mirage. His footwork shows excellent balance and composure in traffic, and the finishing ability is creative with solid body control and in-air adjustments. He's not an elite vertical athlete -- he posted 17 dunks on the season but also missed four, grading as below average in that specific finishing category per Synergy -- confirming his game is grounded in strength, footwork, and shot-making rather than above-the-rim explosiveness.</p>

  <div class="bb-stat-grid">
    <div class="bb-stat-box">
      <span class="bb-sv">16.1</span>
      <span class="bb-sl">PPG</span>
    </div>
    <div class="bb-stat-box">
      <span class="bb-sv">49.1%</span>
      <span class="bb-sl">FG%</span>
    </div>
    <div class="bb-stat-box">
      <span class="bb-sv">39.1%</span>
      <span class="bb-sl">3PT%</span>
    </div>
    <div class="bb-stat-box">
      <span class="bb-sv">80.5%</span>
      <span class="bb-sl">FT%</span>
    </div>
  </div>

  <div class="bb-divider"></div>

  <div class="bb-section">
    <span class="bb-section-label">The Other End</span>
    <h2 class="bb-section-title">Defensive Profile</h2>
    <span class="bb-rule"></span>
  </div>

  <div class="bb-weakness-card">
    <span class="bb-w-label">Film Room Concern</span>
    <p>This is where the evaluation gets more layered. Off the ball, there are real moments of hesitancy -- a beat slow processing rotations, occasionally giving up more cushion than he should, particularly when tracking shooters relocating to the corner in zone coverage. His hands aren't consistently strong on the glass; the ball can get stripped from him in rebounding traffic.</p>
  </div>

  <p>That said, the underlying instincts and motor are genuinely good. He reads the floor well on the defensive end, can anticipate passes, and stays engaged with strong, active hands -- willing at the nail or in the gaps, posting a 2.8 steal percentage that shows up clearly on tape. He shows real urgency rotating to protect the paint, and when he recognizes he's given too much space on a shooter, he'll close out hard and get a contesting hand up rather than conceding the look. In ball-screen actions near the corner, he can be a step late reacting in congested space, but he has the recovery burst to make up the difference. Against bigger, more physical drivers, he absorbs contact well and does a credible job slowing offensive momentum rather than getting moved off his spot.</p>

  <p>His defensive tools include a strong frame, real toughness, and lateral mobility to guard multiple positions on the perimeter -- a foundation that should let him defend up a position or two as his strength continues to develop.</p>

  <div class="bb-divider"></div>

  <div class="bb-section">
    <span class="bb-section-label">The Swing Skill</span>
    <h2 class="bb-section-title">Passing &amp; Playmaking</h2>
    <span class="bb-rule"></span>
  </div>

  <p>This is the genuine swing skill in his profile. In transition, his outlet passes to the wing can come in low and slightly off-target -- not wildly inaccurate, but lacking the touch you'd want from a primary table-setter. He doesn't really bend the defense as a facilitator, though to be fair, he didn't need to in Arizona's egalitarian offensive system. He's functioned more as a high-level scorer who can handle in a secondary role than as a true lead playmaker who manipulates a defense possession to possession.</p>

  <div class="bb-comp-card">
    <span class="bb-c-label">NBA Comparisons</span>
    <p>NBA.com draws Derrick White and Jrue Holiday comparisons, with continued growth as a lead playmaker identified as the key swing area for his development -- which is a meaningful signal about where evaluators see both the floor and the path to a higher ceiling. The encouraging sign is that flashes already exist of him reading the floor and finding shooters when the offense demands it, suggesting real untapped potential if his usage and trust as a passer increase at the next level.</p>
  </div>

  <div class="bb-divider"></div>

  <div class="bb-section">
    <span class="bb-section-label">Final Take</span>
    <h2 class="bb-section-title">Outlook</h2>
    <span class="bb-rule"></span>
  </div>

  <div class="bb-projection">
    <p>His blend of size, toughness, shooting, and defensive versatility highlights the traits of a future All-Star-caliber talent, with the ability to play on or off the ball and impact winning in multiple areas. He currently sits at 8th overall on Tankathon's big board, which lines up cleanly with the 5-8 range -- a safe, scalable two-way guard whose floor is high because of his strength, shot-making, and defensive feel, with his ceiling tied directly to how much he grows as a play-creator for others rather than just for himself.</p>
  </div>

  <div class="bb-grade-banner">
    <span class="bb-grade-num">5-8 talent</span>
    <span class="bb-grade-caption">5th Overall 2026</span>
  </div>

</div>
`
},

"wagler-scouting-report": {
    tag: "NBA Draft · Film Room",
    hero: "images/wagler.jpeg",
    time: "10 MIN READ",
    published: "June 17, 2026",
    updated: null,
    title: "Keaton Wagler Scouting Report",
    content: `
<style>
  .kw-article {
    font-family: 'Georgia', serif;
    color: inherit;
    max-width: 780px;
    margin: 0 auto;
  }
  .kw-article p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.88;
    margin-bottom: 1.75rem;
    font-weight: 400;
    color: inherit;
    opacity: 0.88;
  }
  .kw-article .kw-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
  }
  .kw-article .kw-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
  }
  .kw-article .kw-section {
    margin: 3.5rem 0 1.25rem;
  }
  .kw-article .kw-section-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.45rem;
  }
  .kw-article .kw-section-title {
    font-family: 'Georgia', serif;
    font-size: clamp(1.4rem, 4.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: inherit;
    margin: 0;
  }
  .kw-article .kw-rule {
    display: block;
    height: 3px;
    width: 2.5rem;
    background: #d4af37;
    margin-top: 0.85rem;
    border-radius: 2px;
  }
  .kw-article .kw-pull {
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 80%);
    border-radius: 0 1.25rem 1.25rem 0;
  }
  .kw-article .kw-pull p {
    font-size: clamp(1.05rem, 2.8vw, 1.3rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .kw-article .kw-pull p { color: #d4af37; }
  .kw-article .kw-stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.65rem;
    margin: 2.5rem 0;
  }
  @media (min-width: 520px) {
    .kw-article .kw-stat-grid { grid-template-columns: repeat(4, 1fr); }
  }
  .kw-article .kw-stat-box {
    background: rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 0.875rem;
    padding: 1rem 0.75rem;
    text-align: center;
  }
  .dark .kw-article .kw-stat-box {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.08);
  }
  .kw-article .kw-stat-box .kw-sv {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(1.3rem, 3.5vw, 1.8rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.3rem;
  }
  .kw-article .kw-stat-box .kw-sl {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.4;
  }
  .kw-article .kw-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent);
    margin: 3rem 0;
  }
  .kw-article .kw-weakness-card {
    background: rgba(220,38,38,0.04);
    border: 1px solid rgba(220,38,38,0.15);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .kw-article .kw-weakness-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #dc2626;
  }
  .kw-article .kw-weakness-card .kw-w-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  }
  .kw-article .kw-weakness-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .kw-article .kw-weakness-card p:last-child { margin-bottom: 0 !important; }
  .kw-article .kw-market-card {
    background: linear-gradient(135deg, rgba(139,92,246,0.05) 0%, rgba(212,175,55,0.03) 100%);
    border: 1px solid rgba(139,92,246,0.18);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .kw-article .kw-market-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #8b5cf6;
  }
  .kw-article .kw-market-card .kw-m-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #8b5cf6;
    margin-bottom: 1.25rem;
  }
  .kw-article .kw-market-card p {
    margin-bottom: 0.85rem !important;
  }
  .kw-article .kw-market-card p:last-child { margin-bottom: 0 !important; }
  .kw-article .kw-projection {
    background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2.5rem 0;
  }
  .kw-article .kw-projection .kw-proj-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .kw-article .kw-projection p {
    margin-bottom: 0.85rem !important;
  }
  .kw-article .kw-projection p:last-child { margin-bottom: 0 !important; }
  .kw-article .kw-grade-banner {
    text-align: center;
    padding: 2.5rem 1.5rem;
    background: rgba(212,175,55,0.07);
    border: 1px solid rgba(212,175,55,0.22);
    border-radius: 1.75rem;
    margin: 2.5rem 0;
  }
  .kw-article .kw-grade-banner .kw-grade-num {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(3rem, 12vw, 6rem);
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.4rem;
  }
  .kw-article .kw-grade-banner .kw-grade-caption {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.45;
  }
  .kw-article strong { font-weight: 700; opacity: 1; }
  .kw-article em { font-style: italic; }
</style>

<div class="kw-article">

  <div class="kw-byline">
    <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
    <div class="kw-byline-text">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a><br>
      June 17, 2026
    </div>
  </div>

  <div class="kw-section">
    <span class="kw-section-label">Physical</span>
    <h2 class="kw-section-title">Physical Profile</h2>
    <span class="kw-rule"></span>
  </div>

  <p>He measured 6'5 without shoes at the combine, with a 6'6.25 wingspan -- solid length for a guard, not elite, but functional in a way that shows up on both ends. The frame is long and lean without being a liability physically. He doesn't have premier athleticism in the traditional sense -- no explosive burst, no above-the-rim verticality -- but he relies instead on a blend of fluidity, balance, footwork, and feel that brings together his total scoring package. Not fast. Smooth. There's a meaningful difference, and Wagler embodies it.</p>

  <div class="kw-divider"></div>

  <div class="kw-section">
    <span class="kw-section-label">Bag</span>
    <h2 class="kw-section-title">Offensive Toolkit</h2>
    <span class="kw-rule"></span>
  </div>

  <p>His triple-threat game is legitimate in a way it rarely is at this level. He sets his feet, surveys the defense, and attacks from a position of balance rather than momentum -- which means he's dangerous before he's even moved. His post-up element is a genuine wrinkle: he's comfortable backing down smaller guards once he establishes position, and the footwork in those situations is advanced for his age. The spin-fade out of the post is already a polished counter, not a developmental concept.</p>

  <p>Off the ball, his corner relocation is purposeful and disciplined -- he moves with intention, not just to stay active. His handle has real shake to it. There's a Kevin Durant-like fluidity in how he strings moves together: jab, cross-step, into a shot or a drive, all one connected motion without wasted movement between them. The footwork is the actual separator. He's a natural ball-handler in the way certain players are just born looking right with it in their hands -- the ball never looks heavy, the dribble never looks effortful, and he never gets sped up or knocked off rhythm by defensive pressure.</p>

  <p>He shot 246 jumpers in total this season, 40% catch-and-shoot and 60% off the dribble -- a usage split that confirms he's not a spot-up specialist hiding behind ball-movement, but a genuine creator who thrives most when the ball is in his hands and he's making decisions. Roughly 35% of his attempts came within five feet and 48% from three -- a shot profile built for modern efficiency, attacking the rim and the arc while largely ignoring the midrange dead zone.</p>

  <div class="kw-pull"><p>There's a Stephen Curry-ish quality to the quick-trigger game specifically -- the bump, absorb, and re-set into a calm release without losing his shooting pocket. Defenders make contact and he doesn't come apart. He just recalibrates.</p></div>

  <p> He uses his frame to manufacture separation -- not blowing by defenders, but pushing into them slightly to create the half-step of space his release needs (ala SGA). The jab-into-cross-step shot is his signature, and the step-back, when he chooses to go there, is a legitimate weapon -- visually the toughest shot in his bag, and one he hits anyway.</p>

  <p>He's deceptively skilled finishing inside given the lack of pure explosiveness. It's craft and angles rather than verticality -- he finds the right window, uses the right touch, and doesn't try to overpower anyone.</p>

  <div class="kw-weakness-card">
    <span class="kw-w-label">Film Room Concern</span>
    <p>One real area for improvement is the floater -- he shot below 50% in the three-to-seven-foot range and doesn't yet look comfortable lofting the ball higher over NBA-level length. That's the specific mechanical gap between his current game and an elite all-around scoring package.</p>
  </div>

  <div class="kw-stat-grid">
    <div class="kw-stat-box">
      <span class="kw-sv">17.9</span>
      <span class="kw-sl">PPG</span>
    </div>
    <div class="kw-stat-box">
      <span class="kw-sv">4.2</span>
      <span class="kw-sl">APG</span>
    </div>
    <div class="kw-stat-box">
      <span class="kw-sv">39.7%</span>
      <span class="kw-sl">3PT%</span>
    </div>
    <div class="kw-stat-box">
      <span class="kw-sv">44.5%</span>
      <span class="kw-sl">FG%</span>
    </div>
  </div>

  <div class="kw-divider"></div>

  <div class="kw-section">
    <span class="kw-section-label">The Other End</span>
    <h2 class="kw-section-title">Defensive Profile</h2>
    <span class="kw-rule"></span>
  </div>

  <p>Off the ball, the engagement level is better than advertised for a player of his offensive profile. There's real urgency in how he moves without the ball on that end -- head on a constant swivel, eyes tracking ball and man simultaneously, which keeps him from drifting into the ball-watching that plagues most offensive-minded guards. The defensive stance is technically sound, the lateral movement shows real discipline, and he displays genuine burst in short closeout situations -- enough to contest without panicking, enough to recover without giving up clean looks.</p>

  <p>The larger concern is whether the physical tools hold up against NBA competition. At the moment, he's not quick enough to consistently guard NBA point guards and not strong enough to switch credibly onto bigger wings. That's a real gap that will get targeted in year one. The hope -- and it's a legitimate hope given the intelligence and technique he already shows -- is that added strength in an NBA program gets him to a manageable defensive level even if the ceiling there is never a plus.</p>

  <div class="kw-divider"></div>

  <div class="kw-section">
    <span class="kw-section-label">The Numbers</span>
    <h2 class="kw-section-title">Advanced Context</h2>
    <span class="kw-rule"></span>
  </div>

  <p>He shot 39.7% from three on significant volume, 17.9 points, 5.1 rebounds, and 4.2 assists per game -- a stat line that reads as legitimately complete for a guard prospect rather than a one-dimensional scorer. The assist total in particular matters: this is a player who averaged four assists per game while also being his team's primary scoring option, which suggests the floor vision and unselfishness are real rather than manufactured by system. His Illinois team made the Final Four built significantly around his offensive versatility, which is meaningful competitive context.</p>

  <div class="kw-divider"></div>

  <div class="kw-section">
    <span class="kw-section-label">Industry Context</span>
    <h2 class="kw-section-title">The Market</h2>
    <span class="kw-rule"></span>
  </div>

  <div class="kw-market-card">
    <span class="kw-m-label">Where The Boards Have Him</span>
    <p>Recent mock drafts have placed him as high as 6th overall, and multiple evaluators consider the offensive package alone sufficient to justify a top-five selection. The consensus has moved past mid-first round and is now firmly in the lottery range. Your top-12 projection is actually more conservative than where the industry currently sits -- the market has him going earlier. The physical and defensive question marks are real, but for an offensive creator with his shot-making, footwork, and ball-handling sophistication, teams are clearly willing to absorb those risks in the lottery.</p>
  </div>

  <div class="kw-divider"></div>

  <div class="kw-section">
    <span class="kw-section-label">Final Take</span>
    <h2 class="kw-section-title">Outlook</h2>
    <span class="kw-rule"></span>
  </div>

  <div class="kw-projection">
    <p>Top-12 pick, and the case for going earlier than that is legitimate. His offensive toolkit is already polished enough to project cleanly -- the footwork, the creation package, the shooting touch, the off-the-dribble variety. The defensive ceiling is the only thing keeping this from being a definitive top-five conversation. Controlled is the right word. He plays like a guy who has been here before, every time, in every situation. That quality at 19 years old is genuinely rare.</p>
  </div>

  <div class="kw-grade-banner">
    <span class="kw-grade-num">Top 12 Talent</span>
    <span class="kw-grade-caption">6th Overall 2026</span>
  </div>

</div>
`
},


"flemings-scouting-report": {
    tag: "NBA Draft · Film Room",
    hero: "images/flemings.jpeg",
    time: "10 MIN READ",
    published: "June 17, 2026",
    updated: null,
    title: "Kingston Flemings Scouting Report",
    content: `
<style>
  .kf-article {
    font-family: 'Georgia', serif;
    color: inherit;
    max-width: 780px;
    margin: 0 auto;
  }
  .kf-article p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.88;
    margin-bottom: 1.75rem;
    font-weight: 400;
    color: inherit;
    opacity: 0.88;
  }
  .kf-article .kf-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
  }
  .kf-article .kf-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
  }
  .kf-article .kf-section {
    margin: 3.5rem 0 1.25rem;
  }
  .kf-article .kf-section-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.45rem;
  }
  .kf-article .kf-section-title {
    font-family: 'Georgia', serif;
    font-size: clamp(1.4rem, 4.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: inherit;
    margin: 0;
  }
  .kf-article .kf-rule {
    display: block;
    height: 3px;
    width: 2.5rem;
    background: #d4af37;
    margin-top: 0.85rem;
    border-radius: 2px;
  }
  .kf-article .kf-pull {
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 80%);
    border-radius: 0 1.25rem 1.25rem 0;
  }
  .kf-article .kf-pull p {
    font-size: clamp(1.05rem, 2.8vw, 1.3rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .kf-article .kf-pull p { color: #d4af37; }
  .kf-article .kf-stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.65rem;
    margin: 2.5rem 0;
  }
  @media (min-width: 520px) {
    .kf-article .kf-stat-grid { grid-template-columns: repeat(4, 1fr); }
  }
  .kf-article .kf-stat-box {
    background: rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 0.875rem;
    padding: 1rem 0.75rem;
    text-align: center;
  }
  .dark .kf-article .kf-stat-box {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.08);
  }
  .kf-article .kf-stat-box .kf-sv {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(1.3rem, 3.5vw, 1.8rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.3rem;
  }
  .kf-article .kf-stat-box .kf-sl {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.4;
  }
  .kf-article .kf-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent);
    margin: 3rem 0;
  }
  .kf-article .kf-weakness-card {
    background: rgba(220,38,38,0.04);
    border: 1px solid rgba(220,38,38,0.15);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .kf-article .kf-weakness-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #dc2626;
  }
  .kf-article .kf-weakness-card .kf-w-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  }
  .kf-article .kf-weakness-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .kf-article .kf-weakness-card p:last-child { margin-bottom: 0 !important; }
  .kf-article .kf-disconnect-card {
    background: rgba(139,92,246,0.04);
    border: 1px solid rgba(139,92,246,0.18);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .kf-article .kf-disconnect-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #8b5cf6;
  }
  .kf-article .kf-disconnect-card .kf-dc-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #8b5cf6;
    margin-bottom: 1.25rem;
  }
  .kf-article .kf-disconnect-card p {
    margin-bottom: 0.85rem !important;
  }
  .kf-article .kf-disconnect-card p:last-child { margin-bottom: 0 !important; }
  .kf-article .kf-projection {
    background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2.5rem 0;
  }
  .kf-article .kf-projection .kf-proj-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .kf-article .kf-projection p {
    margin-bottom: 0.85rem !important;
  }
  .kf-article .kf-projection p:last-child { margin-bottom: 0 !important; }
  .kf-article .kf-grade-banner {
    text-align: center;
    padding: 2.5rem 1.5rem;
    background: rgba(212,175,55,0.07);
    border: 1px solid rgba(212,175,55,0.22);
    border-radius: 1.75rem;
    margin: 2.5rem 0;
  }
  .kf-article .kf-grade-banner .kf-grade-num {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(3rem, 12vw, 6rem);
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.4rem;
  }
  .kf-article .kf-grade-banner .kf-grade-caption {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.45;
  }
  .kf-article strong { font-weight: 700; opacity: 1; }
  .kf-article em { font-style: italic; }
</style>

<div class="kf-article">

  <div class="kf-byline">
    <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
    <div class="kf-byline-text">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a><br>
      June 17, 2026
    </div>
  </div>

  <div class="kf-section">
    <span class="kf-section-label">Physical</span>
    <h2 class="kf-section-title">Physical Profile</h2>
    <span class="kf-rule"></span>
  </div>

  <p>The frame raises real questions. He measured 6'2.5 barefoot at the combine, 183 pounds, with a 6'3.5 wingspan and an 8'2.5 standing reach -- measurements that confirm what the tape shows: thin upper body, limited wingspan, and small hands for a player being asked to guard and create at an NBA level. The physical tools that typically anchor a two-way guard projection simply aren't there in the measurements. What he does have is a 33.5-inch no-step vertical and a 40.5-inch max vertical -- genuine leaping ability that partially compensates for the length deficiency on the offensive end.</p>

  <div class="kf-stat-grid">
    <div class="kf-stat-box">
      <span class="kf-sv">6'2.5"</span>
      <span class="kf-sl">Barefoot</span>
    </div>
    <div class="kf-stat-box">
      <span class="kf-sv">6'3.5"</span>
      <span class="kf-sl">Wingspan</span>
    </div>
    <div class="kf-stat-box">
      <span class="kf-sv">40.5"</span>
      <span class="kf-sl">Max Vertical</span>
    </div>
    <div class="kf-stat-box">
      <span class="kf-sv">183</span>
      <span class="kf-sl">Pounds</span>
    </div>
  </div>

  <div class="kf-divider"></div>

  <div class="kf-section">
    <span class="kf-section-label">Bag</span>
    <h2 class="kf-section-title">Offensive Toolkit</h2>
    <span class="kf-rule"></span>
  </div>

  <p>The movement package is the best thing about him. He's a genuinely fast guard -- not just fast in a straight line but fast in the way that actually matters in basketball, generating burst off directional changes and out of hesitation moves. He explodes past anyone, doesn't even need a screen, and is vicious when he rejects picks -- turning the corner on bigs and then showing the body control to finish in the paint despite not being big or strong.</p>

  <div class="kf-pull"><p>The hesitation move from the right elbow into the paint is his most refined and dangerous weapon -- a move he runs with real conviction and disguise. The shot profile that comes off it is legitimately beautiful: a high-arcing release with a fluid follow-through that draws Kevin Durant comparisons in the mechanical fluidity rather than the body type.</p></div>

  <p>The arc is the tell -- it gives the ball time to come down softly even when the release point isn't perfect, and it's particularly evident on the midrange pull-up from the right low post area, which is already a polished, repeatable NBA shot.</p>

  <p>The crossover is clean. The handle overall is tight and secure -- never loose, never vulnerable under pressure -- and it's manipulative rather than just fast, meaning he uses it to engineer advantages rather than just blow by people on raw speed. He has a sharp behind-the-back in particular, and crucially, he uses it above the arc to maintain drive momentum rather than stopping to execute it -- the kind of functionally integrated handle detail that separates real ball-handlers from guys who can just do crossover drills.</p>

  <p>He finishes well at the rim with both hands using a variety of moves, and has a reliable midrange pull-up with soft touch. He showed the ability to score in bunches throughout the season, including a career-high 42-point outing. He's also effective at manufacturing foul-drawing opportunities -- using a drive-jump-pull-up or a layup-looking gather to bait defenders into contact and get to the line, which is a real NBA skill.</p>

  <div class="kf-weakness-card">
    <span class="kf-w-label">Film Room Concern</span>
    <p>The drive package's limitation is its predictability. The hesitation is the move -- and almost exclusively the move. No spin counter, no real change of direction beyond the between-the-legs used above the arc, no post footwork sequence. Defenders at the NBA level who get a scouting report on him have a single read to key on, which raises real questions about how much the current package survives once defenses take away the one thing he does. The floater game is underdeveloped, with just 2-of-5 on runners as a freshman per Synergy, which is the counter you'd most want to see developed alongside his driving ability.</p>
  </div>

  <p>He shot 48/39/85 this season -- the three-point percentage is a real number on real volume, and the free throw efficiency is excellent, confirming that the shooting touch is genuine rather than volume-inflated.</p>

  <div class="kf-stat-grid">
    <div class="kf-stat-box">
      <span class="kf-sv">16.1</span>
      <span class="kf-sl">PPG</span>
    </div>
    <div class="kf-stat-box">
      <span class="kf-sv">5.2</span>
      <span class="kf-sl">APG</span>
    </div>
    <div class="kf-stat-box">
      <span class="kf-sv">48%</span>
      <span class="kf-sl">FG%</span>
    </div>
    <div class="kf-stat-box">
      <span class="kf-sv">39%</span>
      <span class="kf-sl">3PT%</span>
    </div>
  </div>

  <div class="kf-divider"></div>

  <div class="kf-section">
    <span class="kf-section-label">The Other End</span>
    <h2 class="kf-section-title">Defensive Profile</h2>
    <span class="kf-rule"></span>
  </div>

  <p>Hard to fully evaluate from the available sample, but the flashes are mixed. The gambling instinct off the ball -- jumping passing lanes, anticipating bounce passes -- shows real defensive IQ when it works. He recorded 8 steals in a single game against Florida State, the second-most in program history, which speaks to real predatory instincts at their best.</p>

  <p>But off the ball more broadly, the awareness breaks down. There's an anxiousness to his defensive positioning -- ball-watching at the wrong moments, gravitating toward loose balls in a way that costs his team positioning on offensive rebounds. His man will be open because he's already moved toward a ball that isn't cleanly his team's possession yet. That's not a scheme issue -- it's a discipline pattern that shows up repeatedly and specifically in transition scramble situations.</p>

  <div class="kf-divider"></div>

  <div class="kf-section">
    <span class="kf-section-label">Where I Differ</span>
    <h2 class="kf-section-title">The Disconnect</h2>
    <span class="kf-rule"></span>
  </div>

  <div class="kf-disconnect-card">
    <span class="kf-dc-label">Me vs The Market</span>
    <p>My 28-30 grade puts him dramatically behind the market on this one, and that gap is worth naming directly. Flemings is ranked 7th overall on Tankathon's current big board. NBA.com draws De'Aaron Fox and VJ Edgecombe comps and projects an immediate two-way impact. Multiple evaluators see him as a player with everything in the toolkit -- size, speed, shot-making, playmaking, feel, and two-way instincts. The consensus has him as a potential lottery pick, not a late-first.</p>
    <p>The case for skepticism comes from the frame -- the sub-6'3 wingspan and thin upper body are real limitations that don't show up in the shooting splits -- and from the offensive predictability, which the college game's lower athleticism ceiling hasn't exposed yet but which NBA defenses will probe aggressively. A guard whose primary creation tool is one hesitation move with no counter faces a real adjustment curve, regardless of how well the move works right now.</p>
  </div>

  <div class="kf-divider"></div>

  <div class="kf-section">
    <span class="kf-section-label">Final Take</span>
    <h2 class="kf-section-title">Outlook</h2>
    <span class="kf-rule"></span>
  </div>

  <div class="kf-projection">
    <p>The shooting touch, the burst, and the foul-drawing craft are legitimate NBA skills. The defensive gambling instincts, when disciplined, could make him a real two-way piece. But the frame, the limited finishing counter package, and the off-ball defensive lapses are real enough concerns that the 28-30 range represents a credible dissenting opinion from the industry consensus -- even if the market has priced him considerably higher.</p>
  </div>

  <div class="kf-grade-banner">
    <span class="kf-grade-num">28-30 Talent</span>

  </div>

</div>
`
},
"mara-scouting-report": {
    tag: "NBA Draft · Film Room",
    hero: "images/mara.jpeg",
    time: "10 MIN READ",
    published: "June 17, 2026",
    updated: null,
    title: "Aday Mara Scouting Report",
    content: `
<style>
  .am-article {
    font-family: 'Georgia', serif;
    color: inherit;
    max-width: 780px;
    margin: 0 auto;
  }
  .am-article p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.88;
    margin-bottom: 1.75rem;
    font-weight: 400;
    color: inherit;
    opacity: 0.88;
  }
  .am-article .am-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
  }
  .am-article .am-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
  }
  .am-article .am-section {
    margin: 3.5rem 0 1.25rem;
  }
  .am-article .am-section-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.45rem;
  }
  .am-article .am-section-title {
    font-family: 'Georgia', serif;
    font-size: clamp(1.4rem, 4.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: inherit;
    margin: 0;
  }
  .am-article .am-rule {
    display: block;
    height: 3px;
    width: 2.5rem;
    background: #d4af37;
    margin-top: 0.85rem;
    border-radius: 2px;
  }
  .am-article .am-pull {
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 80%);
    border-radius: 0 1.25rem 1.25rem 0;
  }
  .am-article .am-pull p {
    font-size: clamp(1.05rem, 2.8vw, 1.3rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .am-article .am-pull p { color: #d4af37; }
  .am-article .am-stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.65rem;
    margin: 2.5rem 0;
  }
  @media (min-width: 520px) {
    .am-article .am-stat-grid { grid-template-columns: repeat(4, 1fr); }
  }
  .am-article .am-stat-box {
    background: rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 0.875rem;
    padding: 1rem 0.75rem;
    text-align: center;
  }
  .dark .am-article .am-stat-box {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.08);
  }
  .am-article .am-stat-box .am-sv {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(1.3rem, 3.5vw, 1.8rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.3rem;
  }
  .am-article .am-stat-box .am-sl {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.4;
  }
  .am-article .am-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent);
    margin: 3rem 0;
  }
  .am-article .am-weakness-card {
    background: rgba(220,38,38,0.04);
    border: 1px solid rgba(220,38,38,0.15);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .am-article .am-weakness-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #dc2626;
  }
  .am-article .am-weakness-card .am-w-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  }
  .am-article .am-weakness-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .am-article .am-weakness-card p:last-child { margin-bottom: 0 !important; }
  .am-article .am-context-card {
    background: linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(212,175,55,0.03) 100%);
    border: 1px solid rgba(16,185,129,0.18);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .am-article .am-context-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #10b981;
  }
  .am-article .am-context-card .am-c-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #10b981;
    margin-bottom: 1.25rem;
  }
  .am-article .am-context-card p {
    margin-bottom: 0.85rem !important;
  }
  .am-article .am-context-card p:last-child { margin-bottom: 0 !important; }
  .am-article .am-projection {
    background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2.5rem 0;
  }
  .am-article .am-projection .am-proj-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .am-article .am-projection p {
    margin-bottom: 0.85rem !important;
  }
  .am-article .am-projection p:last-child { margin-bottom: 0 !important; }
  .am-article .am-grade-banner {
    text-align: center;
    padding: 2.5rem 1.5rem;
    background: rgba(212,175,55,0.07);
    border: 1px solid rgba(212,175,55,0.22);
    border-radius: 1.75rem;
    margin: 2.5rem 0;
  }
  .am-article .am-grade-banner .am-grade-num {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(3rem, 12vw, 6rem);
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.4rem;
  }
  .am-article .am-grade-banner .am-grade-caption {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.45;
  }
  .am-article strong { font-weight: 700; opacity: 1; }
  .am-article em { font-style: italic; }
</style>

<div class="am-article">

  <div class="am-byline">
    <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
    <div class="am-byline-text">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a><br>
      June 17, 2026
    </div>
  </div>

  <div class="am-section">
    <span class="am-section-label">Physical</span>
    <h2 class="am-section-title">Physical Profile</h2>
    <span class="am-rule"></span>
  </div>

  <p>An unusual body -- wide-hipped, tall in a way that reads ungainly at first glance, but the functional output tells a different story. 7'3 barefoot with a 7'6 wingspan and a 9'9 standing reach that ranks among the longest in combine history. The arm length is the defining physical trait -- it shows up everywhere: in passing angles, in loose ball situations, in shot contests he has no right to be involved in. He glides rather than explodes, using his wingspan to cover ground and his hands to snatch boards or deflect passes. The hips create some instability moving backward, but the overall mobility given the frame is genuinely impressive.</p>

  <div class="am-stat-grid">
    <div class="am-stat-box">
      <span class="am-sv">7'3"</span>
      <span class="am-sl">Barefoot</span>
    </div>
    <div class="am-stat-box">
      <span class="am-sv">7'6"</span>
      <span class="am-sl">Wingspan</span>
    </div>
    <div class="am-stat-box">
      <span class="am-sv">9'9"</span>
      <span class="am-sl">Standing Reach</span>
    </div>
    <div class="am-stat-box">
      <span class="am-sv">21</span>
      <span class="am-sl">Years Old</span>
    </div>
  </div>

  <div class="am-divider"></div>

  <div class="am-section">
    <span class="am-section-label">Bag</span>
    <h2 class="am-section-title">Offensive Toolkit</h2>
    <span class="am-rule"></span>
  </div>

  <p>The passing is the headline skill, and it earns that billing. Mara sees the floor like a guard, delivering pinpoint passes out of the post, finding cutters in transition, or keeping the offense humming from the high post. His assist numbers at 2.4 per game don't fully capture how fluidly he operates.</p>

  <div class="am-pull"><p>What makes the passing special isn't just the volume -- it's the geometry. He throws around defenders rather than through them, bending the ball at angles that require extraordinary arm length and spatial awareness simultaneously.</p></div>

  <p>The passing is creative in a way that 7-footers almost never are, and it shows up in the most specific ways: fake passes out of the post to freeze help defenders before finishing himself, full-court outlet passes off the defensive glass, lob throws from beyond the arc on the catch where he reads the cutter and delivers immediately without resetting.</p>

  <p>He is a terror as a rim runner and lob catcher, finishing with both hands, soft touch, and an understanding of angles that lets him score efficiently in traffic at 67% inside the arc on high volume. The reverse dunk on a full-court pass in transition isn't a trick -- it's a real, repeatable finishing action because the hand-eye coordination and catch radius at his size are genuinely elite.</p>

  <p>The post game has real craft in it. The spin move in the low post is clean -- a legitimate Hakeem-adjacent counter that creates separation through footwork rather than power -- and the hook shot off that left-side spin to the corner is already a polished, reliable NBA weapon. These aren't developmental hopes; they show up consistently on tape.</p>

  <p>The clear limitation is strength. Despite improved strength, he's still adjusting to consistent physicality against high-level competition, and that shows up most directly in post-up situations where a stronger defender can simply hold position and prevent him from getting to his spots.</p>

  <p>The jumper remains a work in progress -- low-volume threes at 30% and mid-50s free throws -- but the mechanics are clean and there's touch on face-ups and midrange looks.</p>

  <div class="am-divider"></div>

  <div class="am-section">
    <span class="am-section-label">The Other End</span>
    <h2 class="am-section-title">Defensive Profile</h2>
    <span class="am-rule"></span>
  </div>

  <p>This is where the analysis gets genuinely compelling. Michigan posted 100th-percentile rim deterrence numbers with Mara on the floor according to RAPM metrics, highlighting his ability to influence possessions without even recording a block. The chase-down block is a real weapon -- he covers more ground than his frame suggests because the stride length and wingspan let him close distance efficiently without having to fully sprint. Film shows a player who reads angles early, stays vertical, and uses his length to disrupt everything in the paint. He posted one of the top block rates in the Big Ten while rarely getting beat off the dribble by smaller players.</p>

  <p>The mobile off-ball defensive movement -- tracking smaller, quicker players coming off the right wing -- is better than almost anyone his size in this draft class. He'll stay attached, redirect the drive, and not get embarrassed in space the way most 7'3 centers do.</p>

  <div class="am-weakness-card">
    <span class="am-w-label">Film Room Concern</span>
    <p>The specific weakness is his backward movement -- the shuffle and backpedal in drop coverage situations. He can get caught in transition or targeted by quicker guards in space, and the lower body coordination is inconsistent, with long legs that can appear stiff and lead to balance issues. There's an awkwardness and instability to the movement when he's asked to retreat quickly that sticks out against an otherwise impressive defensive profile. He's also not a strong screener -- he sets them, but the physicality and timing to actually spring a teammate open aren't consistently there.</p>
  </div>

  <div class="am-divider"></div>

  <div class="am-section">
    <span class="am-section-label">The Numbers</span>
    <h2 class="am-section-title">Advanced Context</h2>
    <span class="am-rule"></span>
  </div>

  <div class="am-context-card">
    <span class="am-c-label">Michigan 2025-26</span>
    <p>In 40 games and 39 starts at Michigan, Mara posted 12.1 points, 6.8 rebounds, 2.4 assists, and 2.6 blocks per game in just 23.4 minutes while shooting an elite 66.8% from the field. That efficiency on that volume in that limited time is genuinely unusual. He posted an 18.5 assist percentage, already good face-value passing numbers for a big, and the tape shows manipulation stuff -- reading the floor and dishing accordingly -- which is ultra-rare for a seven-footer.</p>
  </div>

  <div class="am-stat-grid">
    <div class="am-stat-box">
      <span class="am-sv">12.1</span>
      <span class="am-sl">PPG</span>
    </div>
    <div class="am-stat-box">
      <span class="am-sv">6.8</span>
      <span class="am-sl">RPG</span>
    </div>
    <div class="am-stat-box">
      <span class="am-sv">2.6</span>
      <span class="am-sl">BPG</span>
    </div>
    <div class="am-stat-box">
      <span class="am-sv">66.8%</span>
      <span class="am-sl">FG%</span>
    </div>
  </div>

  <div class="am-divider"></div>

  <div class="am-section">
    <span class="am-section-label">Final Take</span>
    <h2 class="am-section-title">Outlook</h2>
    <span class="am-rule"></span>
  </div>

  <div class="am-projection">
    <p>Mara is a top-15 pick due to his combination of size, rebounding, feel, shot-blocking, and at-rim scoring. The 7th-to-9th rotation man projection undersells what he already brings -- this is a player with legitimate NBA impact right now, today, on the defensive end and as a connective passer, before the strength development and perimeter shooting refinement that a professional strength program should unlock. Even if he reaches only the lower end of his developmental range, you're still looking at a massive rotation big who protects the rim, finishes plays above the basket, and impacts winning.</p>
    <p>The starter projection down the line isn't a stretch at all -- it's the natural ceiling of a player who already does so many difficult things well, and who is only 21 years old doing them.</p>
  </div>

  <div class="am-grade-banner">
    <span class="am-grade-num">8-12 Talent</span>
    <span class="am-grade-caption">8th Overall 2026</span>
  </div>

</div>
`
},

"quaintance-scouting-report": {
    tag: "NBA Draft · Film Room",
    hero: "images/quaintance.jpeg",
    time: "10 MIN READ",
    published: "June 17, 2026",
    updated: null,
    title: "Jayden Quaintance Scouting Report",
    content: `
<style>
  .jq-article {
    font-family: 'Georgia', serif;
    color: inherit;
    max-width: 780px;
    margin: 0 auto;
  }
  .jq-article p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.88;
    margin-bottom: 1.75rem;
    font-weight: 400;
    color: inherit;
    opacity: 0.88;
  }
  .jq-article .jq-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
  }
  .jq-article .jq-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
  }
  .jq-article .jq-section {
    margin: 3.5rem 0 1.25rem;
  }
  .jq-article .jq-section-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.45rem;
  }
  .jq-article .jq-section-title {
    font-family: 'Georgia', serif;
    font-size: clamp(1.4rem, 4.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: inherit;
    margin: 0;
  }
  .jq-article .jq-rule {
    display: block;
    height: 3px;
    width: 2.5rem;
    background: #d4af37;
    margin-top: 0.85rem;
    border-radius: 2px;
  }
  .jq-article .jq-pull {
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 80%);
    border-radius: 0 1.25rem 1.25rem 0;
  }
  .jq-article .jq-pull p {
    font-size: clamp(1.05rem, 2.8vw, 1.3rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .jq-article .jq-pull p { color: #d4af37; }
  .jq-article .jq-stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.65rem;
    margin: 2.5rem 0;
  }
  @media (min-width: 520px) {
    .jq-article .jq-stat-grid { grid-template-columns: repeat(4, 1fr); }
  }
  .jq-article .jq-stat-box {
    background: rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 0.875rem;
    padding: 1rem 0.75rem;
    text-align: center;
  }
  .dark .jq-article .jq-stat-box {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.08);
  }
  .jq-article .jq-stat-box .jq-sv {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(1.3rem, 3.5vw, 1.8rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.3rem;
  }
  .jq-article .jq-stat-box .jq-sl {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.4;
  }
  .jq-article .jq-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent);
    margin: 3rem 0;
  }
  .jq-article .jq-injury-card {
    background: rgba(220,38,38,0.04);
    border: 1px solid rgba(220,38,38,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .jq-article .jq-injury-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #dc2626;
  }
  .jq-article .jq-injury-card .jq-i-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  }
  .jq-article .jq-injury-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .jq-article .jq-injury-card p:last-child { margin-bottom: 0 !important; }
  .jq-article .jq-def-card {
    background: linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(212,175,55,0.03) 100%);
    border: 1px solid rgba(16,185,129,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .jq-article .jq-def-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #10b981;
  }
  .jq-article .jq-def-card .jq-d-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #10b981;
    margin-bottom: 1.25rem;
  }
  .jq-article .jq-def-card p {
    margin-bottom: 0.85rem !important;
  }
  .jq-article .jq-def-card p:last-child { margin-bottom: 0 !important; }
  .jq-article .jq-projection {
    background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2.5rem 0;
  }
  .jq-article .jq-projection .jq-proj-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .jq-article .jq-projection p {
    margin-bottom: 0.85rem !important;
  }
  .jq-article .jq-projection p:last-child { margin-bottom: 0 !important; }
  .jq-article .jq-grade-banner {
    text-align: center;
    padding: 2.5rem 1.5rem;
    background: rgba(212,175,55,0.07);
    border: 1px solid rgba(212,175,55,0.22);
    border-radius: 1.75rem;
    margin: 2.5rem 0;
  }
  .jq-article .jq-grade-banner .jq-grade-num {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(3rem, 12vw, 6rem);
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.4rem;
  }
  .jq-article .jq-grade-banner .jq-grade-caption {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.45;
  }
  .jq-article strong { font-weight: 700; opacity: 1; }
  .jq-article em { font-style: italic; }
</style>

<div class="jq-article">

  <div class="jq-byline">
    <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
    <div class="jq-byline-text">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a><br>
      June 17, 2026
    </div>
  </div>

  <div class="jq-section">
    <span class="jq-section-label">Physical</span>
    <h2 class="jq-section-title">Physical Profile</h2>
    <span class="jq-rule"></span>
  </div>

  <p>6'9 barefoot, 253 pounds, 7'5.25 wingspan, 9'1 standing reach. That's a legitimately enormous physical package, and the mass is already functional rather than raw -- he moves guys in the paint through sheer load-bearing force rather than technique, which is rare at his age. He's one of the youngest players in this entire draft class, having played 24 games of college basketball at 17 years old, unable to even be a one-and-done due to his youth.</p>

  <div class="jq-stat-grid">
    <div class="jq-stat-box">
      <span class="jq-sv">6'9"</span>
      <span class="jq-sl">Barefoot</span>
    </div>
    <div class="jq-stat-box">
      <span class="jq-sv">7'5"</span>
      <span class="jq-sl">Wingspan</span>
    </div>
    <div class="jq-stat-box">
      <span class="jq-sv">9'1"</span>
      <span class="jq-sl">Standing Reach</span>
    </div>
    <div class="jq-stat-box">
      <span class="jq-sv">253</span>
      <span class="jq-sl">Pounds</span>
    </div>
  </div>

  <div class="jq-divider"></div>

  <div class="jq-section">
    <span class="jq-section-label">Skillset</span>
    <h2 class="jq-section-title">Offensive Toolkit</h2>
    <span class="jq-rule"></span>
  </div>

  <p>The honest assessment here is that the bag is thin. He can dribble in spurts -- short, purposeful bursts to a spot -- but there are no real counters underneath it. No dream shake, no low-post footwork sequence, no established go-to move when the first option is taken away. He'll back a defender down and get to his spot, but the finishing inventory once he arrives is limited. The between-the-legs handle flashes something like Drummond or Mitchell (Andre) -- a big man who can put the ball on the floor without looking dangerous, meaning defenses don't have to make a hard choice when he dribbles.</p>

  <p>He does show a surprisingly soft layup touch for a player his size -- real touch around the rim rather than just power finishing. There's a three-pointer on his tape, though whether that's a reliable weapon or an outlier remains genuinely unclear given the sample.</p>

  <p>His midrange shot is a diet that needs to be cut out entirely -- he shot 31.8% on midrange twos at Arizona State -- and his free throw shooting is a legitimate crisis at 47.9% as a freshman, a number that raises real Hack-a-Quaintance concerns at the NBA level.</p>

  <div class="jq-pull"><p>What he does do offensively that's genuinely valuable is operate in congested paint situations without losing his composure or his positioning. He's strong enough to create his own carom opportunities through sheer mass -- working through contact, using subtle leverage to nudge defensive rebounders off their spot and create uncertainty around who actually owns the ball. That's a veteran habit in a young body.</p></div>

  <div class="jq-divider"></div>

  <div class="jq-section">
    <span class="jq-section-label">The Other End</span>
    <h2 class="jq-section-title">Defensive Profile</h2>
    <span class="jq-rule"></span>
  </div>

  <div class="jq-def-card">
    <span class="jq-d-label">Where He Lives</span>
    <p>This is where the evaluation gets genuinely interesting. He posted 2.2 steal percentage and 9.8 block percentage as a freshman -- astounding defensive production numbers that project immediately. He can switch or drop in pick-and-roll, switches up the length of his strides, stays parallel to ball-handlers, plays well off two feet, times himself well, and can easily flip his hips -- a movement profile that reads as legitimately switchable rather than just big.</p>
    <p>His off-ball zone engagement is better than most players at his developmental stage -- he stays mentally locked in, maintains a sound defensive stance, and doesn't drift into ball-watching. His core strength and footwork allow him to stay engaged and ready rather than having to reset from a compromised position.</p>
    <p>The hand activity is the most distinctive trait in his entire profile. In congested paint situations, he'll get his hands involved even when he can't cleanly secure the ball -- tipping it out, creating uncertainty for the defensive rebounder, disrupting what would otherwise be a clean possession for the other team. It's disruptive in a very specific, high-value way that most young bigs never develop at all.</p>
    <p>He's also a strong, technically sound screen setter -- using his mass intelligently to create real separation rather than just standing in someone's path -- and the swim move to establish inside position shows real refinement for a player with this limited body of work.</p>
  </div>

  <div class="jq-divider"></div>

  <div class="jq-section">
    <span class="jq-section-label">The Variable</span>
    <h2 class="jq-section-title">The Injury Elephant</h2>
    <span class="jq-rule"></span>
  </div>

  <div class="jq-injury-card">
    <span class="jq-i-label">Health Risk</span>
    <p>This is the conversation that overrides everything else. He dealt with a torn ACL and meniscus late in his freshman year, plus recurring knee issues that limited him this past season at Kentucky. He rushed back and played in just four games before shutting it down entirely to focus on the draft. For any prospect that injury history would be a significant draft-night risk; for a player whose entire case is built on elite athleticism and switchable mobility, it's the central variable in the entire evaluation.</p>
    <p>If his health checks out, few prospects have as much breakout potential -- a top-10 return -- and there may be no better defender in this draft class. That conditional is doing an enormous amount of work in that sentence, and it should.</p>
  </div>

  <div class="jq-divider"></div>

  <div class="jq-section">
    <span class="jq-section-label">Final Take</span>
    <h2 class="jq-section-title">Outlook</h2>
    <span class="jq-rule"></span>
  </div>

  <div class="jq-projection">
    <p>Quaintance is a player I genuinely like the character read on -- the engagement, the effort, the signs of being a high-character sponge who absorbs coaching. The physical tools are real, the defensive instincts are already advanced, and the age-adjusted context is significant. But the offensive package is thin enough that he's almost entirely a defensive projection right now, and projecting on a player coming off ACL and meniscus surgery with a four-game Kentucky sample is a genuine leap of faith.</p>
    <p>30-40 range reflects the health risk, the offensive limitations, and the reality that teams drafting in that range can't afford to carry a pure developmental defensive center on a rookie-scale contract who can't help you score. The upside is real. The floor is genuinely uncertain.</p>
  </div>

  <div class="jq-grade-banner">
    <span class="jq-grade-num">30-40 Talent</span>

  </div>

</div>
`
},

"boozer-scouting-report": {
    tag: "NBA Draft · Film Room",
    hero: "images/boozer.jpeg",
    time: "13 MIN READ",
    published: "June 17, 2026",
    updated: null,
    title: "Cameron Boozer Scouting Report",
    content: `
<style>
  .cb-article {
    font-family: 'Georgia', serif;
    color: inherit;
    max-width: 780px;
    margin: 0 auto;
  }
  .cb-article p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.88;
    margin-bottom: 1.75rem;
    font-weight: 400;
    color: inherit;
    opacity: 0.88;
  }
  .cb-article .cb-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
  }
  .cb-article .cb-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
  }
  .cb-article .cb-section {
    margin: 3.5rem 0 1.25rem;
  }
  .cb-article .cb-section-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.45rem;
  }
  .cb-article .cb-section-title {
    font-family: 'Georgia', serif;
    font-size: clamp(1.4rem, 4.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: inherit;
    margin: 0;
  }
  .cb-article .cb-rule {
    display: block;
    height: 3px;
    width: 2.5rem;
    background: #d4af37;
    margin-top: 0.85rem;
    border-radius: 2px;
  }
  .cb-article .cb-pull {
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 80%);
    border-radius: 0 1.25rem 1.25rem 0;
  }
  .cb-article .cb-pull p {
    font-size: clamp(1.05rem, 2.8vw, 1.3rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .cb-article .cb-pull p { color: #d4af37; }
  .cb-article .cb-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent);
    margin: 3rem 0;
  }
  .cb-article .cb-tension-card {
    background: rgba(220,38,38,0.04);
    border: 1px solid rgba(220,38,38,0.15);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
  }
  .cb-article .cb-tension-card .cb-t-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  }
  .cb-article .cb-tension-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .cb-article .cb-tension-card p:last-child { margin-bottom: 0 !important; }
  .cb-article .cb-makeup-card {
    background: linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(212,175,55,0.04) 100%);
    border: 1px solid rgba(16,185,129,0.18);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
  }
  .cb-article .cb-makeup-card .cb-m-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #10b981;
    margin-bottom: 1.25rem;
  }
  .cb-article .cb-makeup-card p {
    margin-bottom: 0.85rem !important;
  }
  .cb-article .cb-makeup-card p:last-child { margin-bottom: 0 !important; }
  .cb-article .cb-projection {
    background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2.5rem 0;
  }
  .cb-article .cb-projection .cb-proj-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .cb-article .cb-projection p {
    margin-bottom: 0.85rem !important;
  }
  .cb-article .cb-projection p:last-child { margin-bottom: 0 !important; }
  .cb-article .cb-grade-banner {
    text-align: center;
    padding: 2.5rem 1.5rem;
    background: rgba(212,175,55,0.07);
    border: 1px solid rgba(212,175,55,0.22);
    border-radius: 1.75rem;
    margin: 2.5rem 0;
  }
  .cb-article .cb-grade-banner .cb-grade-num {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(2.2rem, 8vw, 3.8rem);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1.05;
    color: #d4af37;
    margin-bottom: 0.4rem;
  }
  .cb-article .cb-grade-banner .cb-grade-caption {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.45;
  }
  .cb-article strong { font-weight: 700; opacity: 1; }
  .cb-article em { font-style: italic; }
</style>

<div class="cb-article">

  <div class="cb-byline">
    <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
    <div class="cb-byline-text">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a><br>
      June 17, 2026
    </div>
  </div>

  <div class="cb-section">
    <span class="cb-section-label">Bag</span>
    <h2 class="cb-section-title">Bag</h2>
    <span class="cb-rule"></span>
  </div>

  <p>Boozer is an excellent transition passer, reading the floor in motion rather than just running lanes. The strength shows up everywhere, but nowhere more obviously than on screens -- he's a load-bearing presence that defenders feel before they see.</p>

  <p>He is not a shooter right now in the way modern NBA spacing demands. What he is, consistently, is a catch-and-drive threat, and almost exclusively going left. Faster, stronger defenders should be able to negate that one-directional tendency at the next level if he doesn't develop real ambidextrous comfort. He can technically counter to his right, but the move is visibly slower and stiffer -- a clear processing and mechanical gap between his strong and weak sides.</p>

  <p>He loves to impose himself on the offensive glass through tip-ins and put-backs, and he's a strong, instinctive offensive rebounder. There's a surprising wrinkle in his handle too -- a between-the-legs dribble with real, unexpected quickness in the footwork -- but it's an isolated party trick rather than a functional tool, since the move went nowhere on tape and he even picked up his dribble illegally (a carry) attempting it. No real separation came from it. He also showed a surprising pull-up jumper through contact, which speaks to underrated touch.</p>

  <div class="cb-pull"><p>The passing is the most translatable, highest-grade skill in his profile right now. He puts real velocity on his outlet and skip passes -- the kind of bullet delivery that demands real trust from a coaching staff.</p></div>

  <p>And he consistently leads his receiver into space rather than passing to where they currently are, which is the actual mark of advanced floor vision. Boozer's passing is what separates him from every other big in this class, reading the floor like a point guard, and that observation lines up with what shows up on film.</p>

  <p>His jump shot looks functionally sound but visually a little awkward -- a quick enough release without a perfectly fluid load, occasionally reading as stiff. He's currently shooting 39.6% from three this season, which is a number that should genuinely surprise anyone watching the mechanics in isolation rather than the box score.</p>

  <p>His true weakness offensively is post scoring against length and physicality, despite the high overall efficiency number. He's converting 62.8% of his shots off post-ups, but the eye test reveals why that number could be fragile against bigger, longer NBA frontcourts: his body simply doesn't open up the angles a true post scorer needs. The turns and spins are slow, and there's a visible mechanical ceiling on how much footwork alone can manufacture separation when the frame underneath isn't fluid in that specific motion.</p>

  <p>What's genuinely underrated about his offensive game is the composure. When doubles arrive on the post or in the short roll, he doesn't panic or force anything -- he calmly resets, relocates with the ball, and finds the extra read, often skipping it across the floor to an open man on the weak-side wing. That single trait -- staying organized under duress -- is one of the hardest things to teach and one of the clearest signs of a translatable basketball IQ.</p>

  <p>The offensive rebounding has subtlety to it beyond pure box-out strength. There are small, almost imperceptible touches -- a nudge, a bump at the right moment -- that get a positioned defensive rebounder off his spot just enough to steal the carom. That's veteran subtlety from a teenager.</p>

  <div class="cb-divider"></div>

  <div class="cb-section">
    <span class="cb-section-label">The Other End</span>
    <h2 class="cb-section-title">Defensive Profile</h2>
    <span class="cb-rule"></span>
  </div>

  <p>Defensively, Boozer is disciplined and intelligent. He understands positioning, communicates well, and is effective at switching onto different matchups. What shows up specifically on film is a genuinely strange tendency in zone coverage: he'll lock in mentally on guarding the perimeter actions even while his body is correctly anchored in his assigned interior zone. It's not indiscipline exactly -- it almost looks like he felt he had to compensate for teammates who weren't holding their own zone responsibilities, so he split his attention trying to do more than what was schematically required of him.</p>

  <p>The hands are violent in the literal, useful sense -- when he can't secure a defensive rebound clean, he'll bat it away rather than let it go uncontested, which is the kind of competitive habit that shows up in deflection numbers more than highlight reels. He gets a lot of deflections and steals due to his anticipation, and his 17.8 box plus-minus is the highest mark since Zion Williamson's freshman season -- an absurd all-in-one number that captures just how much winning value he generates even without elite physical tools.</p>

  <div class="cb-divider"></div>

  <div class="cb-section">
    <span class="cb-section-label">The Tension</span>
    <h2 class="cb-section-title">The Projection Problem</h2>
    <span class="cb-rule"></span>
  </div>

  <div class="cb-tension-card">
    <span class="cb-t-label">My Honest Take</span>
    <p>Here's where I have to be honest about the central tension in this evaluation. For a player being discussed in the same breath as the first overall pick, there's almost no recent precedent of a player in his exact athletic mold becoming a true superstar. My bar for a non-center forward to justify a top-3 selection is a 20-plus point per game NBA scorer -- and it's genuinely difficult to find a comparable body type that's hit that mark recently. Jayson Tatum is the instinctive comp people reach for, but Tatum entered the league a notably slimmer, longer-limbed athlete. Luka Dončić doesn't fit the mold either. Nikola Jokić is a center playing an entirely different defensive role. His natural athleticism is a major concern for analysts -- he doesn't play above the rim as much as the prototypical NBA power forward does, and he's looked sluggish switching onto smaller guards.</p>
    <p>And yet the body itself is genuinely unique. He's not stiff -- there's an unexpected bounce to his game, almost a glide at times, layered underneath what otherwise reads as heavy-footedness. The stride length is long, which is a real positive marker for a player his size, and that combination -- mass without true rigidity -- is rare enough that I can't immediately think of a recent top-3 selection built quite like this who developed into a perennial 20-point scorer or a true superstar at his position.</p>
    <p>That matters enormously in the current era. The league is increasingly defined by the Wembanyama standard at the four and five -- to win a championship, you generally need a frontcourt piece in the mold of a Karl-Anthony Towns: someone with the length and switchable skill set to combat that specific archetype. Boozer, as currently built, doesn't profile as that length-and-skill combination at either forward spot.</p>
    <p>His box plus-minus, statistical profile, and overall production make him an extremely safe bet to avoid being a bust and become a multiple-time All-Star -- but safety and a true top-3, franchise-altering ceiling are different conversations.</p>
  </div>

  <div class="cb-divider"></div>

  <div class="cb-section">
    <span class="cb-section-label">Context</span>
    <h2 class="cb-section-title">Age, Makeup, and the Safe Pick Case</h2>
    <span class="cb-rule"></span>
  </div>

  <div class="cb-makeup-card">
    <span class="cb-m-label">The Intangibles</span>
    <p>The age context genuinely changes the analysis. He only turns 19 on July 18, meaning he'll spend his entire rookie season at 19 years old, having been 18 at the time of the draft itself. That's an outlier age for a player with this level of physical maturity and on-court polish already -- there's real swelling room left in the developmental curve, even if the frame itself looks close to finished now.</p>
    <p>Boozer is the son of two-time NBA All-Star and 2001 Duke national champion Carlos Boozer, and that pedigree shows up in the makeup. The family is basketball-saturated in a way that should ground him through the inevitable adjustment bumps of a rookie season, and that competitive backbone, paired with a winning résumé that includes National Player of the Year honors as just the fifth freshman ever to win the award, makes him feel like a genuinely safe selection at three, for the moment.</p>
  </div>

  <div class="cb-divider"></div>

  <div class="cb-section">
    <span class="cb-section-label">Final Take</span>
    <h2 class="cb-section-title">My Projection</h2>
    <span class="cb-rule"></span>
  </div>

  <div class="cb-projection">
    <p>I see a long-time, high-level NBA player if health holds -- a likely starter, possibly a long-tenured one, and a real building block for any franchise. The strength, the passing, the offensive composure under duress, and the rare combination of mass and mobility are more than enough to justify a top-5 selection on talent and translatable skill alone.</p>
    <p>But I'm not seeing a top-3, true-superstar ceiling. The body type lacks recent precedent at that tier, the post game has a real mechanical ceiling against length, and the league's current championship math increasingly demands a frontcourt archetype he doesn't currently resemble. He's special and he's safe -- those two things just aren't the same as superstar.</p>
  </div>

  <div class="cb-grade-banner">
    <span class="cb-grade-num">Top 5 talent</span>
    <span class="cb-grade-caption">3rd overall 2026</span>
  </div>

</div>
`
},
"acuff-scouting-report": {
    tag: "NBA Draft · Film Room",
    hero: "images/acuff.jpeg",
    time: "10 MIN READ",
    published: "June 17, 2026",
    updated: "July 9, 2026",
    title: "Darius Acuff Jr. Scouting Report",
    content: `
<style>
  .da-article {
    font-family: 'Georgia', serif;
    color: inherit;
    max-width: 780px;
    margin: 0 auto;
  }
  .da-article p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.88;
    margin-bottom: 1.75rem;
    font-weight: 400;
    color: inherit;
    opacity: 0.88;
  }
  .da-article .da-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
  }
  .da-article .da-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
  }
  .da-article .da-section {
    margin: 3.5rem 0 1.25rem;
  }
  .da-article .da-section-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.45rem;
  }
  .da-article .da-section-title {
    font-family: 'Georgia', serif;
    font-size: clamp(1.4rem, 4.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: inherit;
    margin: 0;
  }
  .da-article .da-rule {
    display: block;
    height: 3px;
    width: 2.5rem;
    background: #d4af37;
    margin-top: 0.85rem;
    border-radius: 2px;
  }
  .da-article .da-pull {
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 80%);
    border-radius: 0 1.25rem 1.25rem 0;
  }
  .da-article .da-pull p {
    font-size: clamp(1.05rem, 2.8vw, 1.3rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .da-article .da-pull p { color: #d4af37; }
  .da-article .da-stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.65rem;
    margin: 2.5rem 0;
  }
  @media (min-width: 520px) {
    .da-article .da-stat-grid { grid-template-columns: repeat(4, 1fr); }
  }
  .da-article .da-stat-box {
    background: rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 0.875rem;
    padding: 1rem 0.75rem;
    text-align: center;
  }
  .dark .da-article .da-stat-box {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.08);
  }
  .da-article .da-stat-box .da-sv {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(1.3rem, 3.5vw, 1.8rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.3rem;
  }
  .da-article .da-stat-box .da-sl {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.4;
  }
  .da-article .da-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent);
    margin: 3rem 0;
  }
  .da-article .da-weakness-card {
    background: rgba(220,38,38,0.04);
    border: 1px solid rgba(220,38,38,0.15);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .da-article .da-weakness-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #dc2626;
  }
  .da-article .da-weakness-card .da-w-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  }
  .da-article .da-weakness-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.85 !important;
  }
  .da-article .da-weakness-card p:last-child { margin-bottom: 0 !important; }
  .da-article .da-disconnect-card {
    background: rgba(139,92,246,0.04);
    border: 1px solid rgba(139,92,246,0.18);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
    overflow: hidden;
  }
  .da-article .da-disconnect-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #8b5cf6;
  }
  .da-article .da-disconnect-card .da-dc-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #8b5cf6;
    margin-bottom: 1.25rem;
  }
  .da-article .da-disconnect-card p {
    margin-bottom: 0.85rem !important;
  }
  .da-article .da-disconnect-card p:last-child { margin-bottom: 0 !important; }
  .da-article .da-projection {
    background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2.5rem 0;
  }
  .da-article .da-projection .da-proj-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .da-article .da-projection p {
    margin-bottom: 0.85rem !important;
  }
  .da-article .da-projection p:last-child { margin-bottom: 0 !important; }
  .da-article .da-grade-banner {
    text-align: center;
    padding: 2.5rem 1.5rem;
    background: rgba(212,175,55,0.07);
    border: 1px solid rgba(212,175,55,0.22);
    border-radius: 1.75rem;
    margin: 2.5rem 0;
  }
  .da-article .da-grade-banner .da-grade-num {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(3rem, 12vw, 6rem);
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.4rem;
  }
  .da-article .da-grade-banner .da-grade-caption {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.45;
  }
  .da-article strong { font-weight: 700; opacity: 1; }
  .da-article em { font-style: italic; }
</style>

<div class="da-article">

  <div class="da-byline">
    <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
    <div class="da-byline-text">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a><br>
      June 17, 2026
    </div>
  </div>

  <div class="da-section">
    <span class="da-section-label">Mechanics</span>
    <h2 class="da-section-title">Movement Profile</h2>
    <span class="da-rule"></span>
  </div>

  <p>He is a straight-line player without much bend in his frame -- limited hip flexibility shows up directly in how he navigates contact. When a defender gets into his body on a drive, he doesn't have the rotational give to slide around it, so he either bulldozes through or gets stood up. His ankles read stiff rather than springy, which kills his ability to decelerate and re-accelerate at a different angle. Compact, short strides rather than long ones, which limits how much ground he covers per move and forces him into more dribbles to manufacture the same separation a longer-strided guard gets in one or two touches.</p>

  <p>Offensively, this is the root of why clean separation is such a fight for him. He's not generating space through deception of the hips or a shifty plant-and-go -- he's generating it almost entirely through pace manipulation and handle craft, which is a much harder way to live against NBA length and quickness.</p>

  <div class="da-divider"></div>

  <div class="da-section">
    <span class="da-section-label">Bag</span>
    <h2 class="da-section-title">Offensive Toolkit</h2>
    <span class="da-rule"></span>
  </div>

  <p>Off the ball, he's a decent mover -- relocating with real purpose on set plays, showing good chemistry in close-quarters actions. His give-and-go reads are sharp: he'll juke his defender with a quick fake one direction, slip backdoor or curl into open space, and catch in rhythm. He's comfortable functioning as a catch-and-shoot weapon within structure rather than needing to create everything himself.</p>

  <p>His shot mechanic isn't pretty. There's a hitch and a funkiness to the release as well -- unconventional and a little stiff through the load phase -- but the results are there regardless of how it looks. He wasn't expected to be an elite shooter coming into the season, and that was one of the bigger pre-draft question marks on him, but he completely flipped that narrative. His range is the headline trait. He shows real depth beyond the arc, comfortably pulling from well above NBA three-point distance, and that shooting gravity is clearly his most translatable, special-level skill.</p>

  <div class="da-pull"><p>The vision is legitimate. He's flashed genuine no-look passes that suggest real processing speed, and the decent vision he shows attacking downhill -- finding cutters and shooters off two-foot gathers -- is a real plus.</p></div>

  <p>His bullet passes are accurate and well-timed into tight windows. That passing feel paired with his drives makes him a real driver-passer threat, someone who collapses the defense and then actually punishes the help rather than just looking to score every time. He has what's likely the best floater in this draft class, hitting it at a 46% clip -- elite for a guard his size, with visible touch whether shooting it on the move or stopping on a dime first.</p>

  <p>His driving package shows decent burst specifically off a between-the-legs setup move -- that's the one counter where he generates real first-step pop. Outside of that move, athleticism isn't the engine of his offense. He's not a high-flying finisher, hitting just two of six dunk attempts on the season, and based on what I've seen, I think his layups will get sent to the stand alot once he's facing NBA size and verticality at the rim. The tight hips and stiff ankles are real limiters in how he absorbs contact and adjusts mid-air, so he's reliant on craft and angles rather than physical tools to score inside -- a much thinner margin against NBA length.</p>

  <p>He shot roughly 44% from three on close to six attempts per game -- that's not a small sample fluke, that's real volume and real efficiency, and it's the trait that's going to carry his offensive profile regardless of how the athleticism questions resolve.</p>

  <div class="da-stat-grid">
    <div class="da-stat-box">
      <span class="da-sv">44%</span>
      <span class="da-sl">3PT%</span>
    </div>
    <div class="da-stat-box">
      <span class="da-sv">46%</span>
      <span class="da-sl">Floater%</span>
    </div>
    <div class="da-stat-box">
      <span class="da-sv">2/6</span>
      <span class="da-sl">Dunk Attempts</span>
    </div>
    <div class="da-stat-box">
      <span class="da-sv">~6</span>
      <span class="da-sl">3PA Per Game</span>
    </div>
  </div>

  <div class="da-divider"></div>

  <div class="da-section">
    <span class="da-section-label">The Other End</span>
    <h2 class="da-section-title">Defensive Profile</h2>
    <span class="da-rule"></span>
  </div>

  <div class="da-weakness-card">
    <span class="da-w-label">Film Room Concern</span>
    <p>This is where the warning signs cluster hardest. He gets overaggressive jumping into help-defense rotations -- leaving his assigned man early to crash toward the ball -- which works occasionally as a gambling steal attempt but more often just creates an open shooter. When he's tasked with picking up a new man after a switch or a rotation, his reaction is consistently a half-step slow, like he's still mentally processing the previous action rather than immediately locking onto the new assignment. He struggles with screens, gets beat off the dribble too easily, and frankly doesn't play with nearly enough effort on this end -- that part of the evaluation isn't just my read, it's been a consistent theme among scouts who've watched him all year.</p>
    <p>Off the ball, the awareness simply isn't there. He loses his man on movement -- not occasionally, but as a pattern -- and gets caught ball-watching at the exact moments he should be tracking his assignment. He gives up backdoor cuts because he's not scanning the floor the way disciplined off-ball defenders do.</p>
  </div>

  <div class="da-divider"></div>

  <div class="da-section">
    <span class="da-section-label">Where I Differ</span>
    <h2 class="da-section-title">The Disconnect</h2>
    <span class="da-rule"></span>
  </div>

  <div class="da-disconnect-card">
    <span class="da-dc-label">Me vs The Market</span>
    <p>This is where my evaluation splits hardest from the industry consensus. Acuff has been invited to the NBA Draft Green Room, reserved for prospects the league expects to go in the lottery. Some scouts now view him as the top point guard in this entire class, ahead of Flemings, Wagler, and Philon. Jonathan Wasserman's most recent mock has him going 5th overall to the Clippers.</p>
    <p>I just don't see it. His shooting development is real and the floater is a legitimate weapon, but a green room invite and a top-five mock placement don't erase what shows up on defensive film -- the gambling, the slow recovery, the off-ball lapses -- or the movement limitations that make him so dependent on craft rather than physical tools to create any separation at all. The league can fall in love with shot-making and scoring volume. I'm grading the whole player, both ends of the floor, and what I see on defense and in his movement profile caps him hard.</p>
  </div>

  <div class="da-divider"></div>

  <div class="da-section">
    <span class="da-section-label">Final Take</span>
    <h2 class="da-section-title">Outlook</h2>
    <span class="da-rule"></span>
  </div>

  <div class="da-projection">
    <p>His shooting range and floater give him a real offensive floor regardless of role, and the vision suggests legitimate upside as a connective passer. But the movement limitations are a genuine long-term ceiling concern -- tight hips and stiff ankles don't typically loosen up much with NBA strength training, and that caps how much separation he'll ever create independently. The defensive tape is the bigger issue: overaggressive gambling, slow recovery in switches, and poor off-ball discipline add up to a player who's actively giving possessions back on one end while scoring them on the other.</p>
    <p>Early second, late first range. The shooting and passing are real, but the defensive habits and athletic ceiling are significant enough that I have him outside the lottery entirely.</p>
  </div>

  <div class="da-grade-banner">
    <span class="da-grade-num">30-35 Talent</span>

  </div>

</div>
`
},


"wemby-mvp": {
    tag: "NBA Awards",
    hero: "images/wemby.jpeg",
    time: "8 MIN READ",
    published: "April 12, 2026",
    updated: null,
    title: "The Case For Youngest NBA MVP Ever",
    content: `
    <style>
      .wemby-article {
        font-family: 'Georgia', serif;
        color: inherit;
      }
      .wemby-article p {
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        line-height: 1.85;
        margin-bottom: 1.75rem;
        font-weight: 400;
        color: inherit;
        opacity: 0.88;
      }
      .wemby-article .lede {
        font-size: clamp(1.25rem, 3.5vw, 1.65rem);
        font-weight: 700;
        line-height: 1.5;
        opacity: 1;
        margin-bottom: 2.5rem;
        letter-spacing: -0.01em;
      }
      .wemby-article .section-hed {
        font-size: clamp(1.4rem, 4vw, 2rem);
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: -0.02em;
        line-height: 1.1;
        margin: 3.5rem 0 1.25rem;
        color: inherit;
        opacity: 1;
      }
      .wemby-article .pull-quote {
        border-left: 4px solid #d4af37;
        background: rgba(212,175,55,0.07);
        padding: 1.5rem 1.75rem;
        margin: 2.5rem 0;
        border-radius: 0 1rem 1rem 0;
      }
      .wemby-article .pull-quote p {
        font-size: clamp(1.1rem, 3vw, 1.45rem);
        font-style: italic;
        font-weight: 700;
        line-height: 1.5;
        opacity: 1;
        margin: 0;
        color: #d4af37;
      }
      .wemby-article .stat-callout {
        background: rgba(212,175,55,0.08);
        border: 1.5px solid rgba(212,175,55,0.3);
        border-radius: 1.25rem;
        padding: 1.5rem 1.75rem;
        margin: 2.5rem 0;
        text-align: center;
      }
      .wemby-article .stat-callout .stat-num {
        font-size: clamp(2rem, 8vw, 3.5rem);
        font-weight: 900;
        letter-spacing: -0.04em;
        line-height: 1;
        color: #d4af37;
        display: block;
        margin-bottom: 0.4rem;
      }
      .wemby-article .stat-callout .stat-label {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        opacity: 0.5;
        display: block;
      }
      .wemby-article .stat-row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
        margin: 2.5rem 0;
      }
      @media (min-width: 600px) {
        .wemby-article .stat-row { grid-template-columns: repeat(4, 1fr); }
      }
      .wemby-article .stat-box {
        background: rgba(0,0,0,0.04);
        border: 1px solid rgba(0,0,0,0.07);
        border-radius: 1rem;
        padding: 1rem 0.75rem;
        text-align: center;
      }
      .dark .wemby-article .stat-box {
        background: rgba(255,255,255,0.05);
        border-color: rgba(255,255,255,0.08);
      }
      .wemby-article .stat-box .val {
        font-size: clamp(1.4rem, 4vw, 2rem);
        font-weight: 900;
        letter-spacing: -0.03em;
        color: #d4af37;
        display: block;
        line-height: 1;
        margin-bottom: 0.3rem;
      }
      .wemby-article .stat-box .lbl {
        font-size: 0.65rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        opacity: 0.45;
        display: block;
      }
      .wemby-article .chapter-label {
        font-size: 0.65rem;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.25em;
        color: #d4af37;
        margin-bottom: 0.5rem;
        display: block;
      }
      .wemby-article .divider {
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent);
        margin: 3rem 0;
      }
      .wemby-article .coda {
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        font-style: italic;
        opacity: 0.7;
        line-height: 1.85;
        margin-bottom: 1.75rem;
      }
      .wemby-article .verdict {
        font-size: clamp(1.1rem, 3vw, 1.35rem);
        font-weight: 700;
        line-height: 1.65;
        margin-bottom: 1.25rem;
        opacity: 1;
      }
      .wemby-article .verdict span {
        display: block;
        color: #d4af37;
      }
      .wemby-article strong { font-weight: 700; opacity: 1; }
      .wemby-article em { font-style: italic; }
      .wemby-article .wemby-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
}

.wemby-article .wemby-byline img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(212,175,55,0.3);
    flex-shrink: 0;
}

.wemby-article .wemby-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
}

.wemby-article .wemby-byline-text a {
    color: #d4af37;
    text-decoration: none;
    opacity: 1;
}

    </style>

    <div class="wemby-article">
<div class="wemby-article">

  <div class="wemby-byline" style="display:flex; align-items:center; gap:0.75rem; margin-bottom:2.5rem; padding-bottom:2rem; border-bottom:1px solid rgba(128,128,128,0.12);">
    <img src="images/me.png" style="width:2.5rem; height:2.5rem; border-radius:50%; object-fit:cover; border:2px solid rgba(212,175,55,0.3); flex-shrink:0;" />
    <div style="font-family:'Inter',sans-serif; font-size:0.68rem; font-weight:700; text-transform:uppercase; letter-spacing:0.12em; opacity:0.5; line-height:1.6;">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none; opacity:1;">@Qb_vision</a> <br>
      April 12, 2026 
    </div>
  </div>

      <p class="lede">There is a moment


      <p>Where the mental file of historical parallels you've accumulated over a lifetime of watching basketball suddenly comes up empty. Where every prior frame of reference fails you not because you lack knowledge, but because what you are looking at exists outside the known universe of the sport.</p>

      <p>That moment arrived this season, in full force, wearing number 1 for the San Antonio Spurs.</p>

      <p>His name is Victor Wembanyama. He is 21 years old. He is 7 feet and 4 inches tall, with a wingspan that stretches 8 feet across. He grew up in the suburbs of Paris dreaming of something larger than basketball. He arrived in the NBA as the most hyped prospect in modern history. He repaid that hype with a rookie season that shattered records. He followed it with a sophomore year cut brutally short by a blood clot in his right shoulder.</p>

      <p>And then, this year, year 3, he came back different.</p>

      <div class="stat-callout">
        <span class="stat-label">No player in NBA history has ever averaged</span>
        <span class="stat-num">At least 23 PPG with a 3-3 (Blocks, Assists) split.</span>
        <span class="stat-label">for an entire season.</span>
      </div>

      <p>Not one player. Not Kareem. Not Hakeem. Not Shaq. Not Duncan. Not anyone who ever laced up sneakers in this league across 80 years of professional basketball has produced that combination. The scoring, the rebounding, the playmaking, the shot-altering -- simultaneously, sustained over an 82-game season.</p>


      <div class="divider"></div>

      <h2 class="section-hed">The MVP Conversation This Season Has Been Dominated By A Reasonable Debate.</h2>

      <p>Shai Gilgeous-Alexander is averaging 31.6 points, 4.4 rebounds, 6.5 assists, and 1.4 steals on 55.1/38.0/88.1 shooting splits in 66 games for the league's best team. That is a staggering season. A historically efficient season. A season that, in most years, wins the award without serious discussion.</p>

      <p>This is not most years.</p>

      <p>The counterargument for SGA centers on three things: minutes, efficiency, and team record. He has played 353 more total minutes, the equivalent of 10 more full games. SGA is slightly more efficient offensively, and his team has the best record in basketball.</p>

      <p>These are real arguments. They deserve acknowledgment. But they are also arguments that, if taken to their logical end, reduce the MVP award to a single-dimension scoring contest with durability as the tiebreaker. And that framework...that reductive, historically myopic framework -- has cost the trophy to the wrong player before.</p>

      <p>The argument that isn't being made loudly enough is the argument that sits at the foundation of basketball itself: <strong>the sport is played on both ends of the floor.</strong></p>

      <p>Wembanyama made this case himself, directly, at a press conference in March. "My first argument," he said, "would be that defense is 50% of the game and that it is undervalued so far in the MVP race. Because I believe I'm the most impactful player defensively in the league."</p>

      <p>He was right. And the fact that the conversation moved on without fully processing that statement says more about the limitations of NBA award discourse than it does about Wembanyama's candidacy.</p>

      <div class="divider"></div>

      <span class="chapter-label">Historical Defensive Impact</span>
      <h2 class="section-hed">Let's Start With The Number That Shouldn't Be Real.</h2>

      <p>Through 50 games this season, Victor Wembanyama had recorded more blocks than turnovers and more blocks than fouls. Not by a few. By a margin. He had 151 blocks, 125 turnovers, and 133 fouls.</p>

      <p>In a league where elite shot-blockers routinely foul out and the act of aggressive rim protection almost always trades blocked shots for personal fouls, Wembanyama is blocking more shots than he is committing infractions. He is more careful with his blocks than most players are with their dribbles.</p>

      <div class="stat-row">
        <div class="stat-box"><span class="val">197</span><span class="lbl">Total Blocks</span></div>
        <div class="stat-box"><span class="val">53.6%</span><span class="lbl">Opp FG% at Rim</span></div>
        <div class="stat-box"><span class="val">#1</span><span class="lbl">LEBRON Ranking</span></div>
        <div class="stat-box"><span class="val">+682</span><span class="lbl">Net Pts (his mins)</span></div>
      </div>

      <p>He leads the NBA in blocks by a landslide -- 197 total -- and opponents convert only 53.6% of their shots at the rim when he challenges them. But the blocks don't begin to tell the story. The Spurs use him essentially as a one-man zone, making the entire paint inaccessible. He covers an insane amount of real estate. His 8-foot wingspan gives him defensive range that no scheme in the league can prepare for.</p>

      <p>One analyst described watching Wembanyama defend the lane as what the Trojans must have felt watching Achilles vanquish their forces, or what concert-goers reasoned when watching Jimi Hendrix play guitar with his teeth. It's not much different when watching Wembanyama move around on a basketball court.</p>


      <p>One particular block this season, against Heat guard Norm Powell, who did the "right thing" by using the rim as a shield on a reverse layup attempt, only to have the shot swatted anyway -- left analysts struggling to explain the physics of what they had just witnessed.</p>

      <div class="pull-quote"><p>"Think about what that means. A player executed the textbook counter-move to a shot-blocker and used the rim itself as protection only for Wembanyama blocked it anyway."</p></div>

      <p>His presence inside completely changes the way opponents play in a way not even other elite shot-blockers can replicate. He's gotten better at guarding two players at once. Not one. Two. Simultaneously. Because his wingspan and his spatial intelligence allow him to occupy defensive territory that normally requires two separate human beings.</p>

      <p>There has been no shortage of "business decisions" by offensive players who choose not to shoot because of Wembanyama's presence in the paint. A written defense of his DPOY candidacy, one analyst noted, is like needing a written defense to prove that The Great Gatsby was written by F. Scott Fitzgerald. It just is. We know it. It's fact.</p>

      <p>Now take all of that..the altered shots, the deterred drives, the territory covered, the opponent decision-making rerouted before it even begins -- and ask yourself: what is that worth in terms of wins? How many possessions this season did a team's offense simply not execute its designed play because Wembanyama was standing in the paint? How many points did he prevent that never appeared on a box score because the shot was never attempted?</p>

      <p>Advanced metrics tell part of the story. He ranks first in the entire NBA in LEBRON, first in defensive estimated plus-minus, and second in overall estimated plus-minus. The Spurs have outscored opponents by 682 points in his minutes -- a number that ranks second in the entire league behind only SGA.</p>

      <p>Second in the league. In fewer minutes. By nearly 400 fewer minutes.</p>

      <p>That is efficiency of impact so extraordinary it almost doesn't fit within the statistical vocabulary the sport has developed.</p>

      <div class="divider"></div>

      <span class="chapter-label">The Offensive Case Nobody Is Telling Correctly</span>
      <h2 class="section-hed">Here Is Where The MVP Conversation Has Failed Wembanyama Most Profoundly.</h2>

      <p>The surface reading of his offensive numbers..24.8 points, 11.5 rebounds, 3.1 assists on 51/35/82.5 shooting splits. This looks, at first glance, like a step behind SGA. And if you are judging a 7-foot center against a scoring guard by points-per-game in the year 2026, you are using the wrong ruler.</p>

      <p>What the tracking numbers are failing to capture is how much Wembanyama's mere presence creates opportunities for others. He is averaging only 3 assists per game and generating fewer than 8 points via dimes. That is far below most elite offensive players. But what even the numbers don't show is how the threat of his scoring opens the floor for San Antonio's entire system.</p>

      <p>The Spurs lead the league in corner threes attempted. The corner three-point attempt frequency for every single rotation Spur except Stephon Castle increases with Wembanyama on the floor. His roll in ball screens generates 1.12 points per possession for San Antonio, one of the most efficient actions in the entire league.</p>

      <p>What that means, in plain language, is this: <strong>Victor Wembanyama doesn't need to touch the ball to change your offense's mathematics.</strong> His gravitational pull redistributes defensive attention away from every shooter the Spurs have deployed around him.</p>

      <p>He is using the 3-point shot more as a threat than a concession this season. He is driving to the basket and forcing defenders to play a step closer to him than they prefer. When you combine all the ways he makes life easier for teammates on offense, reading the floor and scoring at will, it is almost easy to overlook that we are also talking about the best defender in the league.</p>

      <p>Almost. But not quite.</p>

      <p>And then there are the individual performances that serve as reminders that when Wembanyama decides to impose his will offensively, there is no answer. He matched his 40-point season opener with another 40-point performance in his most recent game Friday night against Dallas. He posted 13 rebounds, 5 assists, all in just 26 minutes. He looked smooth on the perimeter, absorbed physical contact inside, finished over defenders at will, all while coming back from a rib injury that kept him out the game prior.</p>

      <p>The week before that, in a clash with Denver that felt like a playoff preview, he posted 34 points, 18 rebounds, 7 assists, and 5 blocks in a game that went to overtime. In that game, Nikola Jokic, one of the most skilled offensive players on the planet, called him "the most unique basketball player to ever play the game."</p>

      <div class="pull-quote"><p>"When one of your stronger competitors for an award is endorsing your candidacy from the opposing side, something profound is being communicated."</p></div>

      <div class="divider"></div>

      <span class="chapter-label">The Transformation of a Franchise</span>
      <h2 class="section-hed">The Word "Valuable" Sits In The Middle Of The Award's Name For A Reason.</h2>

      <p>Not "best." Not "most skilled." Not "highest scorer." Valuable.</p>

      <p>The San Antonio Spurs won 22 games two years ago. They won 22 games the year before that. Last season they missed the playoffs at 34-48. This season they enter the final day at 62-19, the second-best record in the Western Conference, and are positioned as one of the few teams capable of competing with the Oklahoma City Thunder for a championship.</p>

      <p>That is a 28-game improvement over the course of one season. In a league where teams rebuild over years, sometimes decades, the Spurs have gone from lottery fixture to title contender in a single campaign. And the primary variable that changed is not the roster -- though Castle, Fox, and the supporting cast deserve genuine credit -- it is what Wembanyama became this year.</p>

      <div class="stat-row">
        <div class="stat-box"><span class="val">22</span><span class="lbl">Wins -- 2 Yrs Ago</span></div>
        <div class="stat-box"><span class="val">62</span><span class="lbl">Wins This Season</span></div>
        <div class="stat-box"><span class="val">17-1</span><span class="lbl">Best 18-Game Stretch</span></div>
        <div class="stat-box"><span class="val">4-1</span><span class="lbl">vs OKC This Year</span></div>
      </div>


      <p>The Spurs went 17-1 in an 18-game stretch as Wembanyama averaged 4.1 blocks per game. That is a 17-1 record. For a team that was winning 22 games not long ago.</p>

      <p>And in a MVP race where the question of team success looms large, Wembanyama made the most damning argument possible: the Spurs won four of five matchups against the Oklahoma City Thunder -- the team with the best record in the entire NBA -- this season. In Wembanyama's own words at a press conference: "We almost swept OKC in the season and we dominated them three times with their real team and four times with more rotation players."</p>

      <p>The best team in basketball. The team whose star is the presumed MVP. San Antonio won four of five times against them. On the floor where the award is ultimately decided, head to head, mano a mano...Wembanyama's team won.</p>

      <div class="divider"></div>

      <span class="chapter-label">The Real Counter-Argument, And Why It Falls Short</span>
      <h2 class="section-hed">The Most Honest Case Against Wembanyama Is Minutes.</h2>

      <p>He trails SGA and Jokic by nearly 400 total minutes -- a gap born of early injuries, conservative load management after the blood clot, and nine games played as a reserve as the Spurs protected their asset while already in first place.</p>


      <p>But here is where context matters enormously. Wembanyama's minutes were managed partly because of a rib contusion suffered April 6 that kept him out one game. They were also managed because the San Antonio Spurs, already assured of a top seed race and already with the second-best record in basketball, simply did not need their 21-year-old franchise cornerstone to play 36 minutes in January blowouts. Load management of elite players on dominant teams is not a character flaw. It is organizational wisdom.</p>

      <p>SGA, by contrast, played on a team that needed its star every minute of every night. That is a reflection of roster depth, not individual superiority.</p>

      <p>And on a per-minute basis, the fairest accounting when minutes differ by 400, the distance between Wembanyama and SGA dissolves into something far less clean than the narrative suggests. Wembanyama's outscoring margin of +682 in his minutes trails SGA's +788 but SGA played nearly 400 more minutes to accumulate that edge. Per minute, the gap is essentially negligible. Per minute, on both ends, Wembanyama's impact is indistinguishable from SGA's and arguably superior when defense is appropriately weighted.</p>

      <div class="pull-quote"><p>"Defense is 50% of the game. Wembanyama said it himself, and the statement is not a strategic talking point. It is the literal operational reality of basketball."</p></div>

      <p>Every possession has two halves. Every game consists of two complete activities, offense and defense, each composing exactly half the contest. An award that has historically underweighted half the sport of basketball in favor of scoring has been a structurally biased award. And in the year that the single most dominant defensive force in the history of the sport is also producing historically unprecedented two-way numbers, voters have an opportunity to correct that bias.</p>

      <div class="divider"></div>

      <span class="chapter-label">Historical</span>


      <p>Wembanyama, at the season opener when asked about his transformation, said simply: "I felt like I needed to make a statement to my teammates. It's also just the beginning because there's so much more I want to add to my game, but some things take time and maturity."</p>

      <p>He was 21 years old. Coming off a blood clot that ended his season. Playing his first game of the year. And he dropped 40 points on Anthony Davis.</p>

      <p>If Wembanyama were to win this award, he would become the youngest MVP in NBA history, surpassing Derrick Rose, who won at 22 years and 191 days old.</p>

      <p>That is the record that would fall. Not a small record. Not a peripheral record. The youngest Most Valuable Player in the history of the league. And it would fall not to a scoring anomaly, not to a guard riding a hot streak. It would fall to a 7-foot-4 two-way specimen from France who has no historical precedent, produces no comparable statline, and inspires no prior template.</p>

      <div class="divider"></div>

      <span class="chapter-label">The Weight of Witnessing</span>
      <h2 class="section-hed">Here Is The Thing About Victor Wembanyama That Statistics Can't Hold And Award Votes Can't Contain.</h2>

      <p class="coda">He is playing basketball with a kind of serene, sovereign authority that only emerges when a player has found complete alignment between what they are capable of and what they have been called to do. He is not straining. He is not forcing. He is not grinding against the limits of his physical gifts. He is operating within them so fluidly, so completely, that watching him sometimes feels less like watching an athlete and more like watching a law of nature being demonstrated.</p>

      <p class="coda">His own coach said he was "in awe sometimes of the levels that Victor goes to" and added, "I know I wasn't thinking like that at that age." The head coach of an NBA team. In awe. Of his own player.</p>

      <p class="coda">When Wembanyama was asked before the season what sparked his leap, he said: "I feel like it's a mix of knowledge of the game, of recognition, of patterns on the court, and, obviously, physical development." Then he paused and added: "There are some things that just take time, and I'm able to do it now. The proof is there, so there's no reason not to do it."</p>

      <p class="coda">And then after his 40-point season opener, coming off a blood clot that threatened everything: "I know I still need to get better, and I'm still going to get better."</p>

      <p class="coda">Those words, spoken by a 21-year-old who just put up one of the most dominant individual performances of the modern era, should be the most frightening sentence anyone connected to the NBA has heard lately. Not because they are boastful. Because they are calm. Because he means them. Because the proof, as he said, is there.</p>

      <div class="pull-quote"><p>"The Most Valuable Player award should go to the player whose presence most dramatically changes what is possible for his team, the player without whom the entire enterprise collapses in on itself."</p></div>


      <p>Wembanyama staked his claim months ago: "I'm trying to make sure that at the end of the season, there's no debate."</p>

      <p>He was right that there is a debate. He should have been right that there isn't.</p>



    </div>
    `
},
"peterson-scouting-report": {
    tag: "NBA Draft · Film Room",
    hero: "images/pete.jpeg",
    time: "10 MIN READ",
    published: "May 18, 2026",
    updated: "June 10, 2026",
    title: "Darryn Peterson Scouting Report",
    content: `
<style>
  .ps-article {
    font-family: 'Georgia', serif;
    color: inherit;
    max-width: 780px;
    margin: 0 auto;
  }
  .ps-article p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.88;
    margin-bottom: 1.75rem;
    font-weight: 400;
    color: inherit;
    opacity: 0.88;
  }
  .ps-article .ps-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
  }
  .ps-article .ps-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
  }
  .ps-article .ps-section {
    margin: 3.5rem 0 1.25rem;
  }
  .ps-article .ps-section-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.45rem;
  }
  .ps-article .ps-section-title {
    font-family: 'Georgia', serif;
    font-size: clamp(1.4rem, 4.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: inherit;
    margin: 0;
  }
  .ps-article .ps-rule {
    display: block;
    height: 3px;
    width: 2.5rem;
    background: #d4af37;
    margin-top: 0.85rem;
    border-radius: 2px;
  }
  .ps-article .ps-pull {
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 80%);
    border-radius: 0 1.25rem 1.25rem 0;
  }
  .ps-article .ps-pull p {
    font-size: clamp(1.05rem, 2.8vw, 1.3rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .ps-article .ps-pull p { color: #d4af37; }
  .ps-article .ps-stat-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.65rem;
    margin: 2.5rem 0;
  }
  @media (min-width: 520px) {
    .ps-article .ps-stat-grid { grid-template-columns: repeat(3, 1fr); }
  }
  .ps-article .ps-stat-box {
    background: rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 0.875rem;
    padding: 1rem 0.75rem;
    text-align: center;
  }
  .dark .ps-article .ps-stat-box {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.08);
  }
  .ps-article .ps-stat-box .ps-sv {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(1.4rem, 4vw, 2rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.3rem;
  }
  .ps-article .ps-stat-box .ps-sl {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.6rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.4;
  }
  .ps-article .ps-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent);
    margin: 3rem 0;
  }
  .ps-article .ps-weakness-card {
    background: rgba(220,38,38,0.04);
    border: 1px solid rgba(220,38,38,0.15);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2rem 0;
  }
  .ps-article .ps-weakness-card .ps-w-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  }
  .ps-article .ps-weakness-card p {
    margin-bottom: 0.85rem !important;
    opacity: 0.82 !important;
  }
  .ps-article .ps-weakness-card p:last-child { margin-bottom: 0 !important; }
  .ps-article .ps-projection {
    background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(16,185,129,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 2.5rem 0;
  }
  .ps-article .ps-projection .ps-proj-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 1.25rem;
  }
  .ps-article .ps-projection p {
    margin-bottom: 0.85rem !important;
  }
  .ps-article .ps-projection p:last-child { margin-bottom: 0 !important; }
  .ps-article .ps-grade-banner {
    text-align: center;
    padding: 2.5rem 1.5rem;
    background: rgba(212,175,55,0.07);
    border: 1px solid rgba(212,175,55,0.22);
    border-radius: 1.75rem;
    margin: 2.5rem 0;
  }
  .ps-article .ps-grade-banner .ps-grade-num {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(3rem, 12vw, 6rem);
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.4rem;
  }
  .ps-article .ps-grade-banner .ps-grade-caption {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.45;
  }
  .ps-article strong { font-weight: 700; opacity: 1; }
  .ps-article em { font-style: italic; }
</style>

<div class="ps-article">

  <div class="ps-byline">
    <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
    <div class="ps-byline-text">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a><br>
      May 18, 2026
    </div>
  </div>


<div class="mb-10 p-5 sm:p-7 rounded-[2rem] bg-gradient-to-br from-black/5 to-transparent dark:from-white/10 dark:to-white/5 border border-black/10 dark:border-white/10 shadow-lg backdrop-blur-md transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
    <div class="flex items-center gap-3 mb-5">
        <span class="flex h-2.5 w-2.5 relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span class="font-black text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-emerald-600 dark:text-emerald-400">Pre-Draft Update</span>
    </div>
    <p class="font-medium text-sm sm:text-base leading-relaxed mb-6 text-black/80 dark:text-white/90">
        Before the draft kicked off, I officially moved Darryn Peterson up to my <strong>#1 overall prospect</strong>. 
    </p>
    
    <!-- PUT YOUR REAL X.COM LINK IN THE HREF BELOW -->
    <a href="https://x.com/qb_vision/status/2067485341590630737?s=46" target="_blank" class="group block p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-500 transform hover:-translate-y-1">
        <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-3 sm:gap-4">
                <img src="images/me.png" alt="@Qb_vision" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-100 dark:border-white/10 shadow-sm">
                <div>

                    <p class="text-[9px] sm:text-[10px] font-bold text-black/40 dark:text-white/40 uppercase tracking-widest mt-1.5">@Qb_vision</p>
                </div>
            </div>
            <i class="fa-brands fa-x-twitter text-xl sm:text-2xl text-black dark:text-white opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></i>
        </div>
        
        <!-- PASTE YOUR REAL TWEET TEXT BELOW -->
        <p class="text-sm sm:text-base font-medium text-black/80 dark:text-gray-300 mb-5 line-clamp-3 leading-relaxed">
    
    
    Ok so Darryn Peterson is the best player in this draft. I see some Kawhi in him.
        </p>
        
        <div class="flex items-center text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Read on X <i class="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
        </div>
    </a>
</div>




  <div class="ps-section">
    <span class="ps-section-label">Physical</span>
    <h2 class="ps-section-title">Movement Profile &amp; Athleticism</h2>
    <span class="ps-rule"></span>
  </div>

  <p>Peterson's locomotion pattern is distinctive. He moves with a compact, loaded gait, storing energy in each step. There's a coiled spring quality to his movement mechanics. His footwork shines defensively off-ball: when navigating through screens or defending rollers.</p>

  <p>He has quick feet, active hands and great awareness. He processes help rotations naturally, rarely loses his man even when his eyes drift ball-ward momentarily.</p>

  <p>On offense, it seemed at times this year he didn't trust his burst. There were moments where a defender was caught in a poor closeout and the lane was there -- and he still hesitated. Could've been the cramping episode still in his head. But we do know he is explosive. Some of his dunks display legitimate power at the point of contact and a real ability to finish through contact.</p>

  <div class="ps-divider"></div>
  
  
  <div class="ps-section">
    <span class="ps-section-label">Bag</span>
    <h2 class="ps-section-title">Offensive Toolkit</h2>
    <span class="ps-rule"></span>
  </div>


  <p>As far as systems go, Kansas's offensive structure didn't do a great job of emphasizing his advantages. From what I observed, it seems Bill Self ran a post-centric, inside-out offense -- heavy on guard-to-post entry, letting the big man work from the high post and elbow while perimeter players essentially waited for the ball to come back out. That was not an environment built for a guard whose value is attacking off movement, playing downhill off the catch.</p>

  <p>When allowed to create, Peterson shows legitimate deep range from above the break. The pull-up three off the left wing is a weapon.</p>

  <p>His off-the-dribble game has almost veteran like nuance.</p>

  <p>There's craft there: hesitations, subtle footwork adjustments, false spins that freeze defenders, floaters etc..</p>

  <div class="ps-divider"></div>

  <div class="ps-section">
    <span class="ps-section-label">Ceiling</span>
    <h2 class="ps-section-title">All-Star Upside</h2>
    <span class="ps-rule"></span>
  </div>

  <p>The skills are already present. Peterson has legitimate two-way impact tools that translate to All-Star frameworks. The defensive instincts, the shot creation off the dribble, the craft -- these aren't developmental hopes, he already has it.</p>

  <div class="ps-pull"><p>Put him in proper offensive structure that emphasizes his strengths and you're looking at a 20+ point per game scorer who defends multiple positions. The blueprint is there.</p></div>

  <div class="ps-divider"></div>

  <div class="ps-section">
    <span class="ps-section-label">Build &amp; Movement</span>
    <h2 class="ps-section-title">Movement Style</h2>
    <span class="ps-rule"></span>
  </div>

  <p>He's not an elastic, stretchy athlete. He has compact burst -- bouncy and contained. He generates explosiveness from a small runway. Think late 90s Jordan. It's a similar movement pattern.</p>

  <p>That compactness serves him in short-space battles: he wins hand-checks and stride-for-stride positioning through leverage.</p>

  <p>When clean separation isn't there he has a subtle hitch. A mid-drive body manipulation that gets defenders to commit early and draw fouls. Whether that translates consistently at the NBA level remains to be seen.</p>

  <div class="ps-divider"></div>

  <div class="ps-section">
    <span class="ps-section-label">Fast Break &amp; IQ</span>
    <h2 class="ps-section-title">Transition &amp; Opportunism</h2>
    <span class="ps-rule"></span>
  </div>

  <p>Reads turnovers quickly and rotates into transition in one motion. When that happens, he's usually the first player on the court to react, which creates easy fast break opportunities before the defense can set.</p>

  <div class="ps-divider"></div>

  <div class="ps-section">
    <span class="ps-section-label">Health</span>
    <h2 class="ps-section-title">Medical &amp; Recovery Context</h2>
    <span class="ps-rule"></span>
  </div>

  <p>The full-body cramping incident appears resolved post-creatine cessation. All signs suggest it was isolated and situational rather than systemic. Movement patterns show no residual effects. The kid's telling the truth -- people need to stop being cynical about it.</p>

  <div class="ps-divider"></div>

  <div class="ps-section">
    <span class="ps-section-label">The Concern</span>
    <h2 class="ps-section-title">Weakness</h2>
    <span class="ps-rule"></span>
  </div>

  <div class="ps-weakness-card">
    <span class="ps-w-label">Film Room Concern</span>
    <p>1.6 assists per contest across 24 appearances. For a player posting a 25.4 PER with substantial usage, that output is alarmingly deficient.</p>
    <p>The creation-to-giveaway balance tells an even bleaker story -- essentially one-to-one, meaning he surrendered possession as frequently as he generated scoring chances for others.</p>
    <p>Before their tournament clash, Rick Pitino referenced Peterson's assist metrics with a knowing smirk, noting the negative creation ratio. His game plan followed accordingly: force the pass, live with the result.</p>
    <p>Peterson responded with a zero-assist, three-turnover performance.</p>
    <p>The team impact data compounds the concern. Kansas posted a 9-2 mark in his absence versus 15-9 with him available, and their offensive efficiency actually improved when he sat -- 113.2 points per 100 possessions compared to 109.8 with him on the floor.</p>
    <p>The chemistry struggles and limited creation ability directly contributed to Kansas's offensive dysfunction.</p>
  </div>

  <div class="ps-stat-grid">
    <div class="ps-stat-box">
      <span class="ps-sv">25.4</span>
      <span class="ps-sl">PER</span>
    </div>
    <div class="ps-stat-box">
      <span class="ps-sv">1.6</span>
      <span class="ps-sl">APG</span>
    </div>
    <div class="ps-stat-box">
      <span class="ps-sv">1:1</span>
      <span class="ps-sl">Ast/TO Ratio</span>
    </div>
    <div class="ps-stat-box">
      <span class="ps-sv">9-2</span>
      <span class="ps-sl">Kansas W/L Without Him</span>
    </div>
    <div class="ps-stat-box">
      <span class="ps-sv">113.2</span>
      <span class="ps-sl">OffRtg Without Him</span>
    </div>
    <div class="ps-stat-box">
      <span class="ps-sv">109.8</span>
      <span class="ps-sl">OffRtg With Him</span>
    </div>
  </div>

  <div class="ps-divider"></div>

  <div class="ps-section">
    <span class="ps-section-label">Final Take</span>
    <h2 class="ps-section-title">My Projection</h2>
    <span class="ps-rule"></span>
  </div>

  <div class="ps-projection">
    
    <p>He has a high floor and a high ceiling. Probably the safest player in the draft floor wise.</p>
    <p>He can score. That's settled. The rest is about better passing reads and playing with the certainty his talent warrants.</p>
    <p>I see a Future All-star talent. A secondary creator with defensive versatility who could become a primary option in the right system.</p>
    <p>He is my #2 overall ranked prospect.</p>
  </div>

  <div class="ps-grade-banner">
    <span class="ps-grade-num">#2</span>
    <span class="ps-grade-caption">Overall Prospect · 2026 NBA Draft</span>
  </div>

</div>
`
},

"finch-seat": {
    tag: "NBA · Hot Seat",
    hero: "images/finch.png",
    time: "15 MIN READ",
    published: "April 12, 2026",
    updated: "July 6, 2026",
    title: "Good Enough Is the Enemy of Great",
    content: `
<style>
  .finch-article {
    font-family: 'Georgia', serif;
    color: inherit;
  }
  .finch-article p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.9;
    margin-bottom: 1.75rem;
    font-weight: 400;
    color: inherit;
    opacity: 0.88;
  }
  .finch-article .fa-lede {
    font-size: clamp(1.2rem, 3.2vw, 1.55rem);
    font-weight: 700;
    line-height: 1.55;
    opacity: 1;
    margin-bottom: 2rem;
  }
  .finch-article .fa-lede::first-letter {
    float: left;
    font-family: 'Georgia', serif;
    font-size: clamp(3.5rem, 10vw, 5.5rem);
    font-weight: 900;
    line-height: 0.78;
    margin-right: 0.12em;
    margin-top: 0.08em;
    color: #dc2626;
  }
  .finch-article .fa-deck {
    font-size: clamp(0.95rem, 2.4vw, 1.15rem);
    font-style: italic;
    font-weight: 400;
    line-height: 1.75;
    opacity: 0.6;
    margin-bottom: 2.5rem;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid rgba(128,128,128,0.15);
  }
  .finch-article .fa-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
  }
  .finch-article .fa-byline-dot {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #7f1d1d, #dc2626);
    flex-shrink: 0;
  }
  .finch-article .fa-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
  }
  .finch-article .fa-part {
    margin: 3.5rem 0 1.5rem;
  }
  .finch-article .fa-part-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 0.4rem;
  }
  .finch-article .fa-part-title {
    font-family: 'Georgia', serif;
    font-size: clamp(1.4rem, 4.5vw, 2.2rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: inherit;
    opacity: 1;
    margin: 0;
  }
  .finch-article .fa-part-rule {
    display: block;
    height: 3px;
    width: 2.5rem;
    background: #dc2626;
    margin-top: 0.85rem;
    border-radius: 2px;
  }
  .finch-article .fa-pull {
    position: relative;
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,0.07) 0%, transparent 80%);
    border-radius: 0 1rem 1rem 0;
  }
  .finch-article .fa-pull p {
    font-size: clamp(1.1rem, 3vw, 1.4rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .finch-article .fa-pull p { color: #d4af37; }
  .finch-article .fa-pull-red {
    position: relative;
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #dc2626;
    background: linear-gradient(135deg, rgba(220,38,38,0.06) 0%, transparent 80%);
    border-radius: 0 1rem 1rem 0;
  }
  .finch-article .fa-pull-red p {
    font-size: clamp(1.1rem, 3vw, 1.4rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #dc2626;
  }
  .finch-article .fa-stat {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.65rem;
    margin: 2.5rem 0;
  }
  @media (min-width: 520px) {
    .finch-article .fa-stat { grid-template-columns: repeat(4, 1fr); }
  }
  .finch-article .fa-stat-box {
    background: rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 0.875rem;
    padding: 1rem 0.75rem;
    text-align: center;
  }
  .dark .finch-article .fa-stat-box {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.08);
  }
  .finch-article .fa-stat-box .fa-sv {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(1.5rem, 4.5vw, 2.2rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #dc2626;
    margin-bottom: 0.3rem;
  }
  .finch-article .fa-stat-box .fa-sl {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.62rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.45;
  }
  .finch-article .fa-number {
    text-align: center;
    margin: 2.75rem 0;
    padding: 2rem 1.5rem;
    background: rgba(220,38,38,0.05);
    border: 1px solid rgba(220,38,38,0.18);
    border-radius: 1.25rem;
  }
  .finch-article .fa-number .fa-big {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(3.5rem, 14vw, 7rem);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1;
    color: #dc2626;
    margin-bottom: 0.35rem;
  }
  .finch-article .fa-number .fa-caption {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.45;
  }
  .finch-article .fa-break {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 3rem 0;
    opacity: 0.2;
  }
  .finch-article .fa-break::before,
  .finch-article .fa-break::after {
    content: '';
    flex: 1;
    height: 1px;
    background: currentColor;
  }
  .finch-article .fa-break span {
    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }
  .finch-article .fa-isolated {
    font-family: 'Georgia', serif;
    font-size: clamp(1.3rem, 4vw, 1.8rem);
    font-weight: 900;
    letter-spacing: -0.01em;
    line-height: 1.3;
    margin: 2rem 0;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(220,38,38,0.2);
    border-bottom: 1px solid rgba(220,38,38,0.2);
    text-align: center;
    color: #dc2626;
  }
  .finch-article .fa-finale {
    font-size: clamp(1.05rem, 2.6vw, 1.3rem) !important;
    font-weight: 700 !important;
    line-height: 1.85 !important;
    opacity: 1 !important;
  }
  .finch-article .fa-finale .fa-red { color: #dc2626; font-style: italic; }
  .finch-article .fa-finale .fa-gold { color: #d4af37; }
  .finch-article .fa-kicker {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.6rem;
    font-weight: 900;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 0.5rem;
  }
  .finch-article strong { font-weight: 700; opacity: 1; }
  .finch-article em { font-style: italic; }
</style>

<div class="finch-article">


  <div class="fa-byline">
    <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
    <div class="fa-byline-text">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a> <br>
      April 12, 2026
    </div>
  </div>


  <p class="fa-deck">
    The Definitive Case for Why Chris Finch Is Not a Championship Coach And Why Minnesota Is Burning Its Window Finding That Out Too Late
  </p>

  <p class="fa-lede">There is a sentence that should haunt every die hard Timberwolves fan.</p>

  <p>It was spoken by the head coach himself, at a press conference, after his team -- armed with arguably the deepest roster in franchise history, lost at home to the Charlotte Hornets.</p>

  <div class="fa-isolated">"It feels like we're a million miles away from the team that we can be and that we are."</div>

  <p>A million miles. Six days before the playoffs.</p>

  <p>Read that sentence and hold it. That statement sounds like it's coming from a man who has lost the thread of an entire season -- and who has been losing it, in patches and fragments, for years. It sounds like a coach who does not yet fully understand that the thread itself...is part of his job to hold.</p>

  <p>This is the Chris Finch problem. Not that he is a bad coach. He is not. Not that he has failed this franchise. He has not, at least by most conventional measures.</p>

  <p>The problem is far more insidious than failure.</p>

  <div class="fa-pull-red"><p>The problem is that Chris Finch is precisely good enough to keep this team from demanding better.</p></div>


  <div class="fa-part">
    <h2 class="fa-part-title">The Gift That Became the Trap</h2>
    <span class="fa-part-rule"></span>
  </div>


  <p>To understand the argument, you must first understand the context it lives inside. Because the argument is not that Chris Finch should never have been here.</p>


  <p>When Finch arrived, the Timberwolves hadn't been relevant in years. He rebuilt the culture. He built a defensive identity. He took an irrelevant team to two Western Conference Finals in back-to-back seasons. The second-longest playoff streak in franchise history since the Kevin Garnett era. He holds the highest winning percentage in franchise history.</p>

<!-- 1. BUILDERS vs CONQUERORS -- gold pull quote, philosophical/neutral tone -->
<div style="
  margin: 2.75rem 0;
  padding: 1.75rem 1.75rem 1.75rem 2rem;
  border-left: 3px solid #d4af37;
  background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 80%);
  border-radius: 0 1.25rem 1.25rem 0;
">
  <p style="
    font-family: 'Georgia', serif;
    font-size: clamp(1.05rem, 2.8vw, 1.3rem);
    font-style: italic;
    font-weight: 700;
    line-height: 1.55;
    margin: 0;
    color: #b8960a;
  ">Sports rewards builders. Then demands conquerors. </p>
</div>


  <p>These accomplishments are real. They deserve genuine respect. But there is a particular cruelty in professional sports that rewards builders and then demands conquerors and acts surprised when the two are not the same person. The NBA is littered with coaches who were exactly the right man for the moment they entered and exactly the wrong man for the moment the franchise needed to ascend. Men who built programs but couldn't win championships. Men who were great architects but poor generals.</p>

  <p>Chris Finch built the house. Now comes the urgent, time-sensitive question: Anthony-Edwards'-prime and what comes with it.</p>

  <p>Can Chris Finch lead what lives inside it to a championship.?</p>

  <p>The evidence is accumulated across six years and two conference finals exits. It is also accumulated in this season of documented and statistically verified dysfunction (heck even Finch himself has acknowledged it). And these collection of evidence says a resounding <span class="font-black text-red-800 dark:text-red-700 uppercase tracking-[0.2em] text-[1.15em] mx-1">NO.</span>
</p>

  <p>Here is why.</p>


  <div class="fa-part">
    <h2 class="fa-part-title">What Championship Coaches Have That Finch Doesn't</h2>
    <span class="fa-part-rule"></span>
  </div>

  <p>There is a quality that separates good coaches from championship coaches that defies statistical capture. It is not intelligence. Finch is intelligent. It is not preparation. Finch is prepared. It is not even tactical sophistication, though that matters.</p>

  <p>It is edge. Controlled, weaponized, cold-eyed edge.</p>

  <p>It is the quality that made Pat Riley's teams fear him more than they feared any opponent. It is what Gregg Popovich cultivated in San Antonio. Not warmth, not comfort, but a standard so absolute that players regulated themselves because they understood the consequence of falling short of it.</p>

  <p>It is what Erik Spoelstra brings to Miami: a relentlessness that makes players operate at their ceiling because anything less is simply not permitted.</p>

  <div class="fa-pull"><p>Championship coaches don't manage their rosters. They impose standards on them. There is a fundamental difference.</p></div>

  <p>One of the most penetrating observations made about Finch this season came from a local basketball writer who noted that the late-game failures that Finch himself once described as "baked into our DNA" have not only continued, they have become this team's calling card.</p>

  <div class="fa-isolated">Baked into our DNA.</div>

  <p>A head coach said that. About late-game failures. And then continued coaching the same team, with the same structure, and watched it happen again. And again. And again.</p>

  <p>That is not edge. That is acceptance disguised as analysis.</p>

  <p>This Wolves team, alongside the two that came before it under Finch, tends to come out with an energy level that corresponds to the level of the opponent and the time of year. Their effort scales to the perceived importance of the moment rather than operating at a fixed, non-negotiable standard regardless of circumstance.</p>

  <p>That is a coaching fingerprint. Championship teams do not take nights off because they feel the opponent is beneath them. Championship coaches do not allow nights off. Championship coaches build cultures where the standard is not situational. It is permanent. It is structural. It is, and this word is chosen deliberately...non-negotiable.</p>

  <p>Finch's culture is negotiable. And everyone in that locker room, at some level, knows it.</p>


  <div class="fa-part">

    <h2 class="fa-part-title">A Developmental Failure That Compounds With Interest</h2>
    <span class="fa-part-rule"></span>
  </div>

  <p>Finch's "young core" consisted of Rob Dillingham, Terrence Shannon Jr., and Jaylen Clark. They are second-year pros acquired with development in mind and they have been, by the season's own accounting, a collective disappointment.</p>
  <!-- 2. CONLEY / KNOWN QUANTITY -- red warning card, damning indictment tone -->
<div style="
  background: rgba(220,38,38,0.04);
  border: 1px solid rgba(220,38,38,0.15);
  border-radius: 1.5rem;
  padding: 2rem;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
">
  <div style="
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: #dc2626;
  "></div>
  <span style="
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #dc2626;
    margin-bottom: 1.25rem;
  ">Hampered Development</span>
  <p style="
    font-family: 'Georgia', serif;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.88;
    margin: 0;
    opacity: 0.85;
  ">Finch is a coach who trusts the known floor over the promising ceiling. Almost excessivley. </p>
</div>


  <p>Dillingham, the former Timberwolf was the most expensive of the group in terms of draft capital spent. During his time here, his shot inside the arc plummeted every year. Shannon's promised offensive development largely stagnated. Clark remains an offensive ghost who earns his minutes entirely on defense.</p>

  <p>This is not a personnel evaluation failure alone. The roster construction is the front office's domain. But the development of young players once they are on the roster -- their growth, their confidence, their integration into a system that makes their strengths legible -- that is the coach's domain.</p>

  <div class="fa-stat">
    <div class="fa-stat-box">
      <span class="fa-sv">27th ranked</span>
      <span class="fa-sl">Team Bench Scoring</span>
    </div>

    <div class="fa-stat-box">
      <span class="fa-sv">25th ranked</span>
      <span class="fa-sl">Team Bench Minutes</span>
    </div>

  </div>

  <p>For most of the season, the Timberwolves ranked 27th in the NBA in bench scoring. Every regular bench player had a negative on/off net rating. The team ranked 25th in bench minutes. That is lower than the two previous seasons, lower than when they had less talent, lower than a team with genuine championship aspirations should ever be.</p>

  <p>And yet buried inside that dysfunction was a player Finch consistently refused to play: Joan Beringer. A 19-year-old French rookie big with legitimate rim-running athleticism, elite timing instincts, and a fearlessness around the rim that his teammates openly lacked. He was repeatedly cycled back to the G League rather than given the sustained NBA minutes that could accelerate his development.</p> 

  <p>When Beringer had a breakout game and the question arose about his role going forward, Finch's answer was essentially: he probably isn't done going back to Iowa. The stated rationale was finding him minutes alongside three established bigs who don't miss games.</p>

  <p>The subtext was this: Finch is a coach who trusts the known quantity over the promising unknown. Who privileges the comfort of the familiar over the urgency of developing what comes next. Who will ride a 38-year-old Mike Conley through scoreless minutes in back-to-back games rather than hand the reps to the player whose development determines whether this franchise has a future beyond its current window.</p>

  <p>The clearest evidence of what Beringer could be and what Finch's rotation management has suppressed, came when Terrence Shannon Jr. was finally unleashed in a game against Orlando, while the regulars rested. Freed from his corner-standing role player cage, operating as a real initiator with the ball in his hands, Shannon scored a career-high 33 points on 11-of-14 shooting with 5 assists. The beat reporter's observation was precise: typically when Shannon plays for the full-strength Wolves, he operates as a role player who doesn't have the ball much and hangs in the corners. That can be a difficult ask for him.</p>

  <div class="fa-isolated">"A difficult ask."</div>

  <p>A coach who designs a system where one of his best athletes in transition is asked to stand in a corner because the system cannot accommodate his real skill set is not developing that player. He is containing him. And contained players do not grow.</p>

  <p>Championship coaches do not contain players. They design around them. They find ways to make the system elastic enough to amplify what their roster actually has rather than forcing their roster into the shape of what they prefer to run.</p>


  <div class="fa-part">
    
    <h2 class="fa-part-title">When Conviction Becomes Liability</h2>
    <span class="fa-part-rule"></span>
  </div>

  <p>There is a version of Finch's inflexibility that looks like conviction. In the first few years, when the roster was still being assembled and the identity was still being built, trusting your system was an asset. It gave the team consistency. It gave players clarity. It gave the organization stability.</p>

  <p>That version of inflexibility served a purpose.</p>

  <p>But conviction and stubbornness are the same quality at different temperatures. At the right temperature, it's leadership. Too hot, it becomes rigidity -- the inability to read what the game is telling you and respond to it rather than insisting on what the game should be.</p>

  <p>In Game 1 of last year's Western Conference Finals against Oklahoma City, the Wolves led 48-44 at halftime. They then collapsed in the second half, committing 17 turnovers, recording just 18 assists, and shooting 29.4 percent from three on 51 attempts. After Julius Randle had a hot start, OKC adjusted to collapse on his threes in the second half and his production cratered. The Wolves had no offensive answer, no second-half adjustment that created a new problem for OKC to solve.</p>

  <div class="fa-pull-red"><p>Halftime lead. Second-half collapse. No adjustment.</p></div>

  <p>That is the pattern. It is not a one-game anomaly. It is a seasonal constant.</p>

  <p>Against Charlotte on April 5 -- with a five-point halftime lead, after Bones Hyland hit a buzzer-beater three to close the half -- the Timberwolves came out in the third quarter and were outscored 34-19. Charlotte took the lead early in the third and never trailed again. Six of Minnesota's 18 turnovers came in that third quarter alone.</p>

  <p>The Hornets made halftime adjustments. Minnesota did not. Or more precisely -- Minnesota came out of halftime playing the same way they played in the first half, against a team that had watched that first half and built a response to it.</p>
  


  <p>This deficiency is real and chronic. And it points to a team who is being out-coached. The opponent's staff identified something, communicated it clearly, and the players executed it. The Timberwolves staff either didn't identify it, didn't communicate it clearly, or communicated it and the players didn't execute which circles back to the edge problem and the locker room authority problem.</p>
  <!-- 3. TWO EXPLANATIONS -- centered isolated callout, verdict tone -->
<div style="
  font-family: 'Georgia', serif;
  font-size: clamp(1.05rem, 2.8vw, 1.3rem);
  font-weight: 700;
  line-height: 1.65;
  margin: 2.5rem 0;
  padding: 2rem 1.75rem;
  border-top: 1px solid rgba(220,38,38,0.2);
  border-bottom: 1px solid rgba(220,38,38,0.2);
  text-align: center;
  color: #dc2626;
">
  When a coach knows the problem and the problem keeps happening, there are only two explanations.
</div>

  <p>The Wolves' late-game offensive structure devolves into the same pattern repeatedly: heavy isolation, little variety, no fallback architecture when the isolation isn't working.</p>

  <p>Finch has acknowledged this publicly -- "We can't rely solely on Edwards. We've got to get out of the mentality of just trying to hit a home run every single time" -- and then the team comes out in the next clutch situation and runs the same isolations.</p>

  <p>When a coach knows the problem and the problem keeps happening, there are only two explanations. Either he cannot solve it, meaning the fix is beyond his tactical capability or he believes that the next time will be different because the talent will execute better. The first is a hard ceiling. The second is faith dressed as strategy. Neither should be the head coach of a team trying to win a championship.</p>


  <div class="fa-part">
    <h2 class="fa-part-title">The In-Game Adjustment Vacuum</h2>
    <span class="fa-part-rule"></span>
  </div>

  <p>Championship coaches are improvisational artists working within structure. They have a system. They trust it. And then the game tells them something and they respond. They pull a lever, swap a lineup, call a timeout that changes momentum, make a substitution that reframes the game's entire narrative.</p>
<div style="
  position: relative;
  margin: 4rem 0;
  padding: 2.5rem 2rem;
  background: linear-gradient(145deg, #050505 0%, #1a0505 100%);
  border-left: 4px solid #dc2626;
  border-radius: 0 1.5rem 1.5rem 0;
  box-shadow: 0 25px 50px -12px rgba(220, 38, 38, 0.15), inset 0 0 0 1px rgba(220, 38, 38, 0.1);
  overflow: hidden;
">
  <div style="position: absolute; top: -50%; left: -10%; width: 250px; height: 250px; background: radial-gradient(circle, rgba(220,38,38,0.12) 0%, transparent 70%); filter: blur(40px); pointer-events: none;"></div>
  
  <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; position: relative; z-index: 2;">
    <span style="display: block; width: 6px; height: 6px; background: #dc2626; border-radius: 50%; box-shadow: 0 0 10px #dc2626;"></span>
    <span style="font-family: 'Inter', sans-serif; font-size: 0.65rem; font-weight: 900; letter-spacing: 0.35em; text-transform: uppercase; color: #dc2626;">The Critical Flaw</span>
  </div>

  <p style="
    position: relative;
    z-index: 2;
    font-family: 'Georgia', serif;
    font-size: clamp(1.25rem, 3.5vw, 1.6rem) !important;
    font-style: italic;
    font-weight: 900 !important;
    line-height: 1.4 !important;
    margin: 0 !important;
    color: #f8fafc !important;
    opacity: 1 !important;
  ">
    Finch's deepest flaw is his <span style="background: linear-gradient(120deg, #ef4444, #b91c1c); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 0 25px rgba(220,38,38,0.3);">philosophical relationship</span> with adaptation.
  </p>
</div>


  <p>Adaptive intelligence -- never so committed to what is planned that you cannot see what is actually happening.</p>

  <p>Finch's deepest flaw as a coach is not the individual decisions he makes. It is his philosophical relationship with adaptation. He trusts his formula. When it works, the trust looks like mastery. When it doesn't work, it looks like stubbornness dressed in conviction. And the failure to adjust during the Wolves' two conference finals exits -- both times holding a lead at some point, both times being systematically dismantled in the second half -- reveals a coach whose formula has a ceiling and who is reluctant to break the glass that could push past it.</p>

  <p>The Jazz loss in January is the clearest surgical illustration: facing a depleted Utah team missing its best player, Finch played Mike Conley through 15 scoreless minutes and a -5 plus/minus across two consecutive games -- while Bones Hyland, who had a breakout performance the week before, played one four-minute stint. The coaching consensus after that game was that it was Finch's worst performance of the season. Not a player's. The coach's.</p>

  <p>The coach who cannot read in real time that his 38-year-old veteran has nothing left that night and his energized young guard needs the floor. That coach..in the fourth quarter of a playoff elimination game, will make the same kind of read failure. The context changes. The underlying pattern does not.</p>


  <div class="fa-part">
    <h2 class="fa-part-title">What "Good Enough" Actually Costs</h2>
    <span class="fa-part-rule"></span>
  </div>

  <p>Here is the number that clarifies everything.</p>

  <p>No team in the NBA played more clutch-time games this season than the Timberwolves. Their record: 20-26. A 43% win rate in the moments that decide contests. That places them well outside the top half of the leauge. The year prior, they had an abysmal 41.9% clutch win rate which ranked 25th in the leauge</p>

  <div class="fa-number">
    <span class="fa-big">20–26</span>
    <span class="fa-caption">Clutch record</span>
  </div>

  <p>For a team with Anthony Edwards. With Rudy Gobert. With Julius Randle. With a roster that its own front office has called arguably the deepest in franchise history.</p>

  <p>Earlier this season they held a 99% win probability against Phoenix in the fourth quarter and lost. Days later they held a 98% win probability against Sacramento in the fourth quarter and lost.</p>

  <p>The mathematics of those collapses, the probability converted to near-certainty and then squandered not once but twice in four days -- are not bad luck. They are a system failure.</p>

  <p>They are the product of offensive designs that break down without structure, late-game rotations that deploy the wrong players, and a coaching staff that cannot stabilize the moment when the game tells them everything they planned is no longer working.</p>

  <p>And one more cost that nobody is accounting for publicly:</p>

  <div class="fa-stat">
    <div class="fa-stat-box">
      <span class="fa-sv">24</span>
      <span class="fa-sl">Edwards' Age</span>
    </div>
    <div class="fa-stat-box">
      <span class="fa-sv" style="color:#d4af37;">28%</span>
      <span class="fa-sl">Accounts for 28% of his team's FGs</span>
    </div>
    <div class="fa-stat-box">
      <span class="fa-sv">–6.4</span>
      <span class="fa-sl">Offensive Rating Drop</span>
    </div>
    <div class="fa-stat-box">
      <span class="fa-sv">10+</span>
      <span class="fa-sl">Games Missed (Knee)</span>
    </div>
  </div>


  <p>Anthony Edwards has already missed double-digit games this season with knee inflammation at 24 years old. He carries approximately 28% of his team's made field goals. Without him, the offensive rating drops by 6.4 points.</p>

  <p>A 24-year-old franchise cornerstone with a documented knee issue is carrying unsustainable load because the offense has no fallback architecture when he is absent or struggling.</p>


  <div class="fa-part">
    <h2 class="fa-part-title">The Championship Coach Test</h2>
    <span class="fa-part-rule"></span>
  </div>

  <p>The championship coach test asks one question: when this team is playing a tough Western Conference matchup in a seven-game series and the opponent has made halftime adjustments that are working…what does Chris Finch do?</p>

  <p>The evidence, across six seasons and two conference finals exits and one season of the most consistent late-game dysfunction in the league, answers that question.</p>
<style>
  .finch-article .fa-statement {
    margin: 3rem 0;
    padding: 1.5rem;
    border-left: 4px solid #dc2626;
    background: linear-gradient(to right, rgba(220, 38, 38, 0.08), transparent);
    border-radius: 0 0.75rem 0.75rem 0;
  }
  
  @media (min-width: 640px) {
    .finch-article .fa-statement {
      padding: 2rem 2.5rem;
      margin: 4rem 0;
    }
  }

  .finch-article .fa-statement p {
    font-family: 'Georgia', serif;
    font-size: clamp(1.05rem, 3vw, 1.3rem) !important;
    font-weight: 700 !important;
    line-height: 1.65 !important;
    opacity: 0.9 !important;
    margin-bottom: 1.25rem !important;
    color: inherit;
  }

  .finch-article .fa-statement p:last-child {
    margin-bottom: 0 !important;
    font-size: clamp(1.15rem, 3.5vw, 1.45rem) !important;
    font-weight: 900 !important;
    color: #dc2626 !important;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

</style>
  <div class="fa-statement">
    <p>Ant-Man needs a coach whose edge matches his talent.</p>
    
    <p>A Championship Coach</p>
  </div>



  <p>And the team that was a million miles away in April is still a million miles away when the series ends.</p>

  <p>The most likely outcome of this playoff run, as noted by multiple observers entering it, is a first-round exit at the hands of the Denver Nuggets.</p>

  <p>A team Minnesota had championship aspirations against. A team they should, on paper, compete with.</p>

  <p>If that happens, if Nikola Jokic and Dave Adeleman spend a week dissecting and systematically exploiting every structural flaw documented in this piece, every late-game collapse pattern, every rotation inflexibility, every second-half adjustment vacuum -- then the conversation Minnesota must have will no longer be uncomfortable.</p>

  <p>It will be urgent.</p>

  <p>Because the question was never whether Chris Finch is good.</p>

  <p>He is good. He is genuinely good. He built something real in a city that needed it desperately.</p>

  <p>The question is whether good is good enough for what Anthony Edwards deserves.</p>

  <p>And what Anthony Edwards deserves is a coach whose edge matches his talent. Who develops young players instead of containing them. Who makes halftime adjustments that opponent coaches haven't already scripted responses to. Who, when a high win probability is in his hands, does not let it slip through a structureless final minute.</p>

  <p>What Anthony Edwards deserves is a championship coach.</p>

  <p>The question -- on April 12, 2026, six days before the playoffs begin -- is whether he has one.</p>

  <p class="fa-finale">
    The seat is hot.<br>
    The window is open.<br>
    <span class="fa-gold">And the clock, which does not negotiate, does not wait.</span>
  </p>

</div>
`
},
"peterson-scouting": {
    tag: "NBA Draft · Film Room",
    hero: "images/pete.jpeg",
    time: "12 MIN READ",
     published: "April 12, 2026",
     updated: null,
    title: "My Early 2026 NBA Draft Jumbled Takes",
    content: `
<style>
  /* ── BASE ───────────────────────────────────────────────── */
  .draft-article {
    font-family: 'Georgia', serif;
    color: inherit;
    max-width: 780px;
    margin: 0 auto;
  }
  .draft-article p {
    font-size: clamp(.95rem, 2.4vw, 1.15rem);
    line-height: 1.88;
    margin-bottom: 1.6rem;
    font-weight: 400;
    color: inherit;
    opacity: 0.88;
  }

  /* ── INTRO NOTE ─────────────────────────────────────────── */
  .draft-article .da-note {
    font-size: clamp(.88rem, 2vw, 1rem);
    font-style: italic;
    line-height: 1.75;
    opacity: 0.6;
    margin-bottom: 2.5rem;
    padding: 1.25rem 1.5rem;

  }

  /* ── SECTION BANNERS ────────────────────────────────────── */
  .draft-article .da-section-banner {
    display: flex;
    align-items: center;
    gap: .75rem;
    margin: 4rem 0 2.5rem;
  }
  .draft-article .da-section-banner .da-banner-rule {
    flex: 1;
    height: 1px;
    background: currentColor;
    opacity: .1;
  }
  .draft-article .da-section-banner .da-banner-label {
    font-family: 'Inter', sans-serif;
    font-size: .62rem;
    font-weight: 900;
    letter-spacing: .35em;
    text-transform: uppercase;
    padding: .55rem 1.35rem;
    border-radius: 2rem;
    white-space: nowrap;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  }
  .da-banner-label.high,
  .da-banner-label.monitor,
  .da-banner-label.low {
    background: transparent;
    color: inherit;
    border: none;
    opacity: 0.35;
    letter-spacing: .45em;
    font-size: .58rem;
  }


  /* ── PLAYER CARDS ───────────────────────────────────────── */
  .draft-article .da-player-card {
    border: 1px solid rgba(0,0,0,.07);
    border-radius: 2rem;
    padding: 2rem 2rem 1.75rem;
    margin-bottom: 2rem;
    background: rgba(0,0,0,.015);
    transition: box-shadow .35s ease, transform .35s ease;
    position: relative;
    overflow: hidden;
  }
  .draft-article .da-player-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent);
    opacity: 0;
    transition: opacity .35s ease;
  }
  .draft-article .da-player-card:hover::before {
    opacity: 1;
  }
  .dark .draft-article .da-player-card {
    border-color: rgba(255,255,255,.07);
    background: rgba(255,255,255,.025);
  }
  .draft-article .da-player-card:hover {
    box-shadow: 0 20px 60px rgba(0,0,0,.1);
    transform: translateY(-2px);
  }
  .dark .draft-article .da-player-card:hover {
    box-shadow: 0 20px 60px rgba(0,0,0,.5);
  }

  /* ── PLAYER HEADER ──────────────────────────────────────── */
  .draft-article .da-player-header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(0,0,0,.06);
  }
  .dark .draft-article .da-player-header {
    border-bottom-color: rgba(255,255,255,.07);
  }
  .draft-article .da-player-name {
    font-family: 'Georgia', serif;
    font-size: clamp(1.5rem, 5vw, 2.4rem);
    font-weight: 900;
    letter-spacing: -.03em;
    line-height: .95;
    text-transform: uppercase;
    color: inherit;
    margin: 0 0 .5rem;
  }
  .draft-article .da-player-meta {
    font-family: 'Inter', sans-serif;
    font-size: .65rem;
    font-weight: 700;
    letter-spacing: .14em;
    text-transform: uppercase;
    opacity: .4;
    line-height: 1.6;
  }

  /* ── GRADE PILLS ────────────────────────────────────────── */
  .draft-article .da-grade-pill {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    font-family: 'Inter', sans-serif;
    font-size: .62rem;
    font-weight: 900;
    letter-spacing: .12em;
    text-transform: uppercase;
    padding: .55rem 1.1rem;
    border-radius: 2rem;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .da-grade-pill.tier-1 {
    background: rgba(16,185,129,.12);
    color: #10b981;
    border: 1px solid rgba(16,185,129,.25);
    box-shadow: 0 4px 16px rgba(16,185,129,.12);
  }
  .da-grade-pill.tier-2 {
    background: rgba(212,175,55,.12);
    color: #b8960a;
    border: 1px solid rgba(212,175,55,.25);
    box-shadow: 0 4px 16px rgba(212,175,55,.1);
  }
  .dark .da-grade-pill.tier-2 { color: #d4af37; }
  .da-grade-pill.tier-3 {
    background: rgba(245,158,11,.12);
    color: #d97706;
    border: 1px solid rgba(245,158,11,.2);
    box-shadow: 0 4px 16px rgba(245,158,11,.08);
  }
  .da-grade-pill.tier-4 {
    background: rgba(220,38,38,.08);
    color: #dc2626;
    border: 1px solid rgba(220,38,38,.2);
    box-shadow: 0 4px 16px rgba(220,38,38,.06);
  }

  /* ── PULL QUOTES ────────────────────────────────────────── */
  .draft-article .da-pull {
    margin: 1.75rem 0 1.5rem;
    padding: 1.5rem 1.75rem 1.5rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,.08) 0%, transparent 80%);
    border-radius: 0 1.25rem 1.25rem 0;
    box-shadow: inset 0 0 0 1px rgba(212,175,55,.06);
  }
  .draft-article .da-pull p {
    font-size: clamp(.95rem, 2.4vw, 1.15rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .draft-article .da-pull p { color: #d4af37; }

  /* ── TAGS ───────────────────────────────────────────────── */
  .draft-article .da-tag {
    display: inline-block;
    font-family: 'Inter', sans-serif;
    font-size: .58rem;
    font-weight: 900;
    letter-spacing: .22em;
    text-transform: uppercase;
    padding: .32rem .85rem;
    border-radius: 1rem;
    margin-bottom: .65rem;
  }
  .da-tag.hot {
    background: rgba(16,185,129,.1);
    color: #10b981;
    border: 1px solid rgba(16,185,129,.2);
  }
  .da-tag.watch {
    background: rgba(245,158,11,.1);
    color: #d97706;
    border: 1px solid rgba(245,158,11,.2);
  }
  .da-tag.cold {
    background: rgba(220,38,38,.08);
    color: #dc2626;
    border: 1px solid rgba(220,38,38,.18);
  }

  /* ── CONSENSUS ROW ──────────────────────────────────────── */
  .draft-article .da-consensus-row {
    display: flex;
    flex-wrap: wrap;
    gap: .55rem;
    align-items: center;
    margin-top: .85rem;
    margin-bottom: .25rem;
  }
  .draft-article .da-consensus-row span {
    font-family: 'Inter', sans-serif;
    font-size: .6rem;
    font-weight: 800;
    letter-spacing: .1em;
    text-transform: uppercase;
    opacity: .4;
  }
  .draft-article .da-consensus-row .da-boba {
    background: rgba(212,175,55,.1);
    color: #b8960a;
    border: 1px solid rgba(212,175,55,.25);
    padding: .32rem .9rem;
    border-radius: 1rem;
    font-size: .62rem;
    font-weight: 900;
    opacity: 1;
    box-shadow: 0 2px 8px rgba(212,175,55,.1);
  }
  .dark .draft-article .da-consensus-row .da-boba { color: #d4af37; }
  .draft-article .da-consensus-row .da-consensus {
    background: rgba(0,0,0,.05);
    padding: .32rem .9rem;
    border-radius: 1rem;
    font-size: .62rem;
    font-weight: 900;
    opacity: 1;
    border: 1px solid rgba(0,0,0,.06);
  }
  .dark .draft-article .da-consensus-row .da-consensus {
    background: rgba(255,255,255,.07);
    color: rgba(255,255,255,.55);
    border-color: rgba(255,255,255,.08);
  }

  /* ── RANKINGS TABLE ─────────────────────────────────────── */
  .da-table-wrap {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 1.75rem;
    border: 1px solid rgba(0,0,0,.07);
    margin: 2.5rem 0;
    box-shadow: 0 8px 40px rgba(0,0,0,.06);
  }
  .dark .da-table-wrap {
    border-color: rgba(255,255,255,.07);
    box-shadow: 0 8px 40px rgba(0,0,0,.3);
  }
  .da-table-wrap table {
    width: 100%;
    min-width: 520px;
    border-collapse: collapse;
    font-family: 'Inter', sans-serif;
  }
  .da-table-wrap thead tr {
    background: rgba(0,0,0,.04);
    border-bottom: 1px solid rgba(0,0,0,.06);
  }
  .dark .da-table-wrap thead tr {
    background: rgba(255,255,255,.04);
    border-bottom-color: rgba(255,255,255,.07);
  }
  .da-table-wrap th {
    font-size: .58rem;
    font-weight: 900;
    letter-spacing: .2em;
    text-transform: uppercase;
    padding: 1rem 1.25rem;
    text-align: left;
    opacity: .4;
    white-space: nowrap;
    color: inherit;
  }
  .da-table-wrap td {
    font-size: .8rem;
    font-weight: 600;
    padding: .9rem 1.25rem;
    border-bottom: 1px solid rgba(0,0,0,.04);
    color: inherit;
    vertical-align: middle;
  }
  .dark .da-table-wrap td { border-bottom-color: rgba(255,255,255,.04); }
  .da-table-wrap tr:last-child td { border-bottom: none; }
  .da-table-wrap tbody tr:hover td {
    background: rgba(212,175,55,.04);
  }
  .dark .da-table-wrap tbody tr:hover td {
    background: rgba(212,175,55,.06);
  }
  .da-table-wrap .da-grade-cell {
    font-weight: 900;
    font-size: .78rem;
    white-space: nowrap;
    letter-spacing: -.01em;
  }
  .da-table-wrap .da-grade-cell.g1 { color: #10b981; }
  .da-table-wrap .da-grade-cell.g2 { color: #d4af37; }
  .da-table-wrap .da-grade-cell.g3 { color: #d97706; }
  .da-table-wrap .da-grade-cell.g4 { color: #dc2626; }
  .da-table-wrap .da-consensus-cell {
    font-size: .73rem;
    opacity: .5;
    font-weight: 600;
  }
  .da-table-wrap tbody tr:first-child td {
    padding-top: 1.1rem;
  }
</style>

<div class="draft-article">
  <div class="qf-byline">
      <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
      <div class="qf-byline-text">
          <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a> <br>
          April 12, 2026
      </div>
  </div>

  <p class="pt-20 mt-10 mb-6 da-note">A note: These are early-cycle, film-room gut takes. Not my final assesment. </p>

  <!-- ── GUYS I'M HIGH ON ──────────────────────────────── -->
  <div class="da-section-banner">
    <span class="da-banner-rule"></span>
    <span class="da-banner-label high">Guys I'm High On</span>
    <span class="da-banner-rule"></span>
  </div>

  <!-- WAGLER -->
  <div class="da-player-card">
    <div class="da-player-header">
      <div>
   
        <h2 class="da-player-name">Keaton Wagler</h2>
        <p class="da-player-meta">Illinois &nbsp;·&nbsp; G &nbsp;·&nbsp; 6'6" &nbsp;·&nbsp; Freshman</p>
        <div class="da-consensus-row">
          <span>My Early Grade:</span>
          <span class="da-boba">Top 12 Pick</span>
          <span>Consensus:</span>
          <span class="da-consensus">Top 6–8</span>
        </div>
      </div>

    </div>
    <p>Wagler averaged 17.9 points, 5.1 rebounds and 4.2 assists per game on 44.5 percent shooting and 39.7 percent from three during his lone season at Illinois, helping the Illini reach the Final Four. </p>
    <p>Here's what the tape shows that the stat sheet doesn't fully capture.</p>
    <p>This kid has a triple threat that most guys in this class simply don't own. He sets his feet, reads the defense, and attacks from position. His footwork is Steph-adjacent in one specific way: the cross-step, one-motion release where the shot comes off the catch before the defense can even process the moment. He doesn't need separation because his process removes the need for it.</p>
    <p>His jab-cross is his signature. He lives there. And it works because his footwork is so natural. He's not an explosive athlete, but he's super fluid. There's a real artistry to the way his fluid movement flows into dribble moves, which glides into his footwork.</p>
    <p>His step-back is elite. Full stop. He's calm under contact in a way that 19-year-olds almost never are. He seems like a fast processor.</p>
    <p>He doesn't waste motion. He's always in a position to score, pass, or drive.</p>
    <p>His weakness seems to be a lack of above-the-rim play. His post-up is underrated. He loves that spin fade. For his frame, he shows surprising composure and balance when bumped and in staying in his shot and recalibrating off physical contact.</p>
    <p>He's a creative shot-maker who thrives off movement and pull-ups. Very very good handles. </p>
    <div class="da-pull"><p>Where I think he fits: Top 12 pick.</p></div>
  </div>

  <!-- McNEIL JR. -->
  <div class="da-player-card">
    <div class="da-player-header">
      <div>
        <h2 class="da-player-name">Paul McNeil Jr.</h2>
        <p class="da-player-meta">NC State &nbsp;·&nbsp; G &nbsp;·&nbsp; Sophomore</p>
        <div class="da-consensus-row">
          <span>My Early Grade:</span>
          <span class="da-boba">Mid-to-Late First Round (Picks 20–30)</span>
          <span>ESPN Board:</span>
          <span class="da-consensus">53rd Overall</span>
        </div>
      </div>
    </div>
    <p>McNeil Jr. is ranked 53rd overall on ESPN's current big board. </p>
    <p>The public grade on McNeil is low. The eye test argues for more.</p>
    <p>He has a nice shot mechanic,  good arc, soft touch. He's a glider ..moves without telegraphing, drifts into catch-and-fade situations. The moving corner fade on a somewhat contested look is his calling card.</p>
    <p>The hands are excellent. This doesn't get talked about enough with perimeter players -- the ability to catch anything, in any position, and immediately be in a shooting or driving posture. McNeil has it.
The concern is the frame. He's very thin. </p>
    <p>I think his ceiling is higher than where he's being projected. I see a really solid  NBA rotation player. Could be more.</p>
  </div>

  <!-- ── GUYS I'M MONITORING ──────────────────────────── -->
  <div class="da-section-banner">
    <span class="da-banner-rule"></span>
    <span class="da-banner-label monitor">Guys I'm Monitoring (Mixed Grades)</span>
    <span class="da-banner-rule"></span>
  </div>

  <!-- DYBANTSA -->
  <div class="da-player-card">
    <div class="da-player-header">
      <div>
        <h2 class="da-player-name">AJ Dybantsa</h2>
        <p class="da-player-meta">BYU &nbsp;·&nbsp; F &nbsp;·&nbsp; 6'9" &nbsp;·&nbsp; Freshman</p>
        <div class="da-consensus-row">
          <span>Consensus Grade:</span>
          <span class="da-consensus">Top 3 Pick</span>
          <span>My Honest Take:</span>
          <span class="da-boba">Top 3 But With an Asterisk</span>
        </div>
      </div>
    </div>
    <p>Dybantsa averaged 25.5 points on 51% shooting with 6.8 rebounds and 3.7 assists per game for a top-25 BYU program.  The scoring is real. The athleticism off screens is other-worldy. He gets to his spots fast, and the combination of strength and length makes him genuinely hard to contain in the post setup.</p>
    <p>But here's what the tape shows that the consensus is glossing over.</p>
    <p>He runs from double teams. This is not a minor flaw for a guy projected to be the No. 1 pick. When the double comes, he reads it slowly. He looks oblivious at times which leads to turnovers. </p>
    <p>He's a ball-hog, just a style observation. There's a lot of fleshing out to be done with his general decision-making, which can bleed into other areas. His transition get-back is slow. </p>
    <p>His defensive motor runs in bursts rather than continuously. When he's engaged defensively, it looks great. When he's not, he coasts.</p>
    <p>That said, the physical tools are outrageous. The strength on the post setup, pick and roll ability, bursts of truly impressive half-court defense when he locks in. He's very strong and has a good frame to build on.</p>
    <p>His production is backed up by a 60 % true shooting percentage and plenty of second-half highlights and sequences that highlight the ability to carry a team and take over a game. </p>
    <div class="da-pull"><p>He's a top-3 pick. But the "franchise cornerstone no questions asked" framing requires more than what the tape currently shows on defensive consistency.</p></div>
  </div>

  <!-- PETERSON -->
  <div class="da-player-card">
    <div class="da-player-header">
      <div>
        <h2 class="da-player-name">Darryn Peterson</h2>
        <p class="da-player-meta">Kansas &nbsp;·&nbsp; G &nbsp;·&nbsp; Freshman</p>
        <div class="da-consensus-row">
          <span>My Early Grade:</span>
          <span class="da-boba">15–27 Range</span>
          <span>Consensus:</span>
          <span class="da-consensus">Top 4</span>
        </div>
      </div>
    </div>
    <p>This might be the most controversial take in the piece, so sit with it.</p>
    <p>Peterson is smooth. His defensive movement is elite. He's a defensive communicator, vocal, present, engaged. His give-and-go passing is awesome. Off screens, he's one of the fastest processors in the class.</p>
    <p>But here's what the tape shows at the moment: the handle under pressure is tighter than his reputation suggests. He can be thrown off on dribble penetration by physical guards. The shot mechanics look awkward, functional but not natural.</p>
    <p>Peterson dealt with a full-body cramp during preseason bootcamp, and the physical and mental effects lingered all season. He averaged 19.9 points per game -- the first freshman in Kansas history to average 20 -- but played just 20 games. </p>
    <p>Durabiity is a concern. </p>
  </div>

  <!-- LOPEZ -->
  <div class="da-player-card">
    <div class="da-player-header">
      <div>
        <h2 class="da-player-name">Karim Lopez</h2>
        <p class="da-player-meta">New Zealand Breakers (NBL) &nbsp;·&nbsp; F &nbsp;·&nbsp; 6'9" &nbsp;·&nbsp; Mexico</p>
        <div class="da-consensus-row">
          <span>My Early Grade:</span>
          <span class="da-boba">Top 8 Pick</span>
          <span>Consensus:</span>
          <span class="da-consensus">10–12</span>
        </div>
      </div>
    </div>
    <p>He moves different and he looks like he has the body to be a force. Despite his size, he moves with a fluidity of a smaller forward. Fluid. Loose. Not explosive, but fluid in a way that covers ground easily.</p>
    <p>The loose passes are a compliment here, I mean that genuinely. They're confident passes. Not sloppy, just unbothered. </p>
    <p>He reads the catch quickly from the post and gets to his spin move fast. His pivot-and-turnaround jumper is an NBA weapon right now, not a project.</p>
    <p>The NBA values role versatility and high-end physical tools. That combined with the flashes Lopez has shown put him on clear NBA radars.  </p>
    <p>He's a big who processes at guard speed and knows instinctively when to leave his man on help rotations. That instinct might get him in trouble in the NBA, but it also signals IQ that you can't teach.</p>
    <p>The genuine concerns: the defensive anchor role against 2s and 3s will be brutal early. He's not going to hold up on the perimeter against NBA wings in year one. </p>
    <p>The help defense is poor, he leaves his man and doesn't actually protect the rim consistently. His perimeter shooting at 32% on three attempts per game are decent returns, but the shot process is the prevailing factor in determining his eventual ceiling. </p>
    <p>His hands are excellent. The short-range passing off the catch -- the jump-catch-and-drop to a cutter -- is already an NBA skill. He's going to give you good rotation minutes 12-15 as and his ceiling is legitimately exciting.</p>
  </div>

  <!-- BOOZER -->
  <div class="da-player-card">
    <div class="da-player-header">
      <div>
        <h2 class="da-player-name">Cameron Boozer</h2>
        <p class="da-player-meta">Duke &nbsp;·&nbsp; PF &nbsp;·&nbsp; Freshman</p>
        <div class="da-consensus-row">
          <span>Consensus Grade:</span>
          <span class="da-consensus">Top 3 Pick</span>
          <span>My Early Grade:</span>
          <span class="da-boba">4–10</span>
        </div>
      </div>
    </div>
    <p>The passing is genuinely impressive. The bullet pass is crisp, he leads the receiver, he sees cutters. That's the best thing on his tape right now.</p>
    <p>The transition vision is real. He's the most physically imposing player in this draft as far as raw strength. He loves the tip-in put-back and he's good at it. He graded in Synergy Sports' 90th percentile or better in ball screen and isolation possessions. </p>
    <p>But here's the honest tape reading: He is not a natural shooter. He's a catch-and-drive player, predominantly left-handed, and when he goes right it's slow and stiff. Scouts still wonder how much he can dominate at the next level without plus positional size, elite burst, or the kind of defensive tools and traits teams usually look for in a big. </p>
    <p>The post game is the core problem. His body doesn't bend into favorable post-scoring angles naturally. The post spin is slow. When fast, physical NBA bigs attack his lower half on the post, his angles break down. That's a body limitation, not a skill limitation -- which means it's harder to develop away.</p>
    <p>The shot looks functional but stiff.
There's lingering fear around his lack of quickness, vertical pop and defensive projection.  I share some of that fear after watching some of his tape. 
Hes a great teammate, I like his mentality, he's an excellent passer, and will win you games in specific situations. But some of the limitations at this stage of his development put him outside the top 3 in this particular class. In my humble opinion. </p>
  </div>

  <!-- WILSON -->
  <div class="da-player-card">
    <div class="da-player-header">
      <div>
        <h2 class="da-player-name">Caleb Wilson</h2>
        <p class="da-player-meta">UNC &nbsp;·&nbsp; F &nbsp;·&nbsp; Freshman</p>
        <div class="da-consensus-row">
          <span>Consensus Grade:</span>
          <span class="da-consensus">Top 4 Pick</span>
          <span>My Early Grade:</span>
          <span class="da-boba">4–10</span>
        </div>
      </div>
    </div>
    <p>Wilson produced 19.8 points, 9.4 boards, 2.7 assists, 1.5 steals and 1.4 blocks before a season-ending thumb injury. 
His frame has room to build into something special. He has a crazy fast twitch..elite. He's a a leaper, explosive.</p>
    <p>The fadeaway is clean and he finds his spots well in the midrange.
But the honest tape reading: this is a tall body with a small-guy mentality right now. He fades from physical confrontations rather than through them. The upper body and mid-back strength isn't there yet to bully smaller opponents. He doesn't shoot threes, which is a major concern in today's league for a forward who also can't force his way inside.</p>
    <p>The left-hand aversion is stark. He has a good jab and he seems to play at his own pace at times but experienced defenders will take away his right hand and make him use his left.</p>
    <p>His elite athleticism and activity level screams future All-Defense candidacy. He is really long and covers so much ground. His defensive upside is legitimate. Offensively, he needs a full year of NBA strength development before we know how real his ceiling is.</p>
  </div>

  <!-- ACUFF -->
  <div class="da-player-card">
    <div class="da-player-header">
      <div>
        <h2 class="da-player-name">Darius Acuff Jr.</h2>
        <p class="da-player-meta">Arkansas &nbsp;·&nbsp; G &nbsp;·&nbsp; Freshman</p>
        <div class="da-consensus-row">
          <span>My Early Grade:</span>
          <span class="da-boba">26–38</span>
          <span>Consensus:</span>
          <span class="da-consensus">Top 8</span>
        </div>
      </div>
    </div>
    <p>His three-point shot is the whole ticket here. He shows range, and shot 44% from three on significant volume while limiting turnovers to 2.2 per game on a 29.5% usage rate.  That's a legitimate shooting floor at the NBA level.
But the tape raises honest questions. He's a straight-line guy. His hips are tight, his ankles are stiff. There's not a lot of bend in his drives. He'll get his layups sent into the stands at the NBA level. Small guards who rely on straight-line drives to the rim don't survive that physics equation against real shot-blockers. Scouts acknowledge Acuff does not project favorably defensively. </p>
    <p>His vision on drives is decent. His no-look passes flash real playmaking IQ in isolated moments. But "moments" and "sustainable NBA skill" live in different zip codes.
His shot mechanics aren't pretty. It's functional, very functional, but not naturally fluid. Think Kenyon Martin Jr.</p>
    <p>He's more NBA-ready than most players in this class from a feel standpoint. He has a comfortable floor. But the ceiling questions around athleticism and defensive projection put him outside the lottery.</p>
  </div>

  <!-- LENDEBORG -->
  <div class="da-player-card">
    <div class="da-player-header">
      <div>
        <h2 class="da-player-name">Yaxel Lendeborg</h2>
        <p class="da-player-meta">Michigan &nbsp;·&nbsp; PF</p>
        <div class="da-consensus-row">
          <span>Projection:</span>
          <span class="da-boba">20–30</span>
          <span>Consensus:</span>
          <span class="da-consensus">Mid-Late 1st</span>
        </div>
      </div>
    </div>
    <p>Age is the downside here. He's a damn near finished product walking into the league. The frame is great even if initial eye test reads him as unathletic but if you watch him in movement, it shifts. He's a glider, not a sprinter, which at 6'8" reads odd until you realize he's covering ground efficiently without looking like he's working.</p>
    <p>He's a guy who always seems to be where the ball is going without appearing to chase it.</p>
    <p>The post bag has some depth. His spin moves on the drive are functional. Excellent layup finisher. Strong offensive rebounding instincts. His triple threat shows discipline.</p>
    <p>But the lack of explosive athleticism is real, and the defensive questions against quicker players in the NBA are legitimate. He's a role player on a good team. High-value role player, but a role player.</p>
  </div>

  <!-- MULLINS -->
  <div class="da-player-card">
    <div class="da-player-header">
      <div>
        <h2 class="da-player-name">Braylon Mullins</h2>
        <p class="da-player-meta">G/F &nbsp;·&nbsp; 6'6"</p>
        <div class="da-consensus-row">
          <span>My Early Grade:</span>
          <span class="da-boba">31–40</span>
          <span>Consensus:</span>
          <span class="da-consensus">Second Round</span>
        </div>
      </div>
    </div>
    <p>The shot mechanics are genuinely interesting. Good base, solid release with an arc that suggests it translates. He's a turn-three specialist who actually surprises you with his ability to drive once you've given him room on the perimeter. </p>
    <p>Uses the body bump intelligently on drives.
Very skinny frame. And his hands are a concern. His range is good but shot consistency needs work before you trust it.
Early second-round value. A bet on the shooting mechanics holding up at the next level.</p>
  </div>

  <!-- ── GUYS I'M LOW ON ──────────────────────────────── -->
  <div class="da-section-banner">
    <span class="da-banner-rule"></span>
    <span class="da-banner-label low">Guys I'm Low On</span>
    <span class="da-banner-rule"></span>
  </div>

  <!-- PHILON -->
  <div class="da-player-card">
    <div class="da-player-header">
      <div>

        <h2 class="da-player-name">LaBaron Philon</h2>
        <p class="da-player-meta">Alabama &nbsp;·&nbsp; G</p>
        <div class="da-consensus-row">
          <span>My Early Grade:</span>
          <span class="da-boba">Late 2nd / Undrafted</span>
          <span>Consensus:</span>
          <span class="da-consensus">Late 1st</span>
        </div>
      </div>
    </div>
    <p>He seems stiff in movement. Looks slow in the half-court. He comes off to me as a player built for a college game that doesn't fully translate -- like a Dillingham body type (and game somewhat) without Dillingham's burst.</p>
  </div>

  <!-- FAYE -->
  <div class="da-player-card">
    <div class="da-player-header">
      <div>

        <h2 class="da-player-name">Mouhamed Faye</h2>
        <p class="da-player-meta"></p>
        <div class="da-consensus-row">
          <span>My Early Grade:</span>
          <span class="da-boba">Undrafted</span>
          <span>Consensus:</span>
          <span class="da-consensus">Second Round</span>
        </div>
      </div>
    </div>
    <p>Amazing physical frame. But the finishing at the rim is poor, the hands are bad for a player his size, and the foul rate is alarming. He's a hacker who hasn't developed the feel to translate physical tools into basketball outcomes. Strong picker but you can't build an NBA career on screening alone.</p>
  </div>

  <!-- EVANS -->
  <div class="da-player-card">
    <div class="da-player-header">
      <div>

        <h2 class="da-player-name">Isaiah Evans</h2>
        <p class="da-player-meta">Duke &nbsp;·&nbsp; G</p>
        <div class="da-consensus-row">
          <span>My grade:</span>
          <span class="da-boba">Undrafted</span>
          <span>Consensus:</span>
          <span class="da-consensus">Late First</span>
        </div>
      </div>
    </div>
    <p>The body type raises red flags on first film watch, seems to play with an anterior tilt affecting his athleticism output. The vision on drives is poor. Slow processing in traffic. His defensive tools exist on paper , but the overall package on tape doesn't justify a guaranteed first-round commitment from a value standpoint.</p>
  </div>

  <!-- ── RANKINGS TABLE ──────────────────────────────── -->
  <div class="da-section-banner">
    <span class="da-banner-rule"></span>
    <span class="da-banner-label monitor">The Ranking At A Glance</span>
    <span class="da-banner-rule"></span>
  </div>

  <div class="da-table-wrap">
    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>My Early Grade</th>
          <th>Consensus</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Keaton Wagler</td><td class="da-grade-cell g1">Top 12 Pick</td><td class="da-consensus-cell">Top 6–8</td></tr>
        <tr><td>AJ Dybantsa</td><td class="da-grade-cell g2">Top 3 (with flags)</td><td class="da-consensus-cell">Top 3</td></tr>
        <tr><td>Karim Lopez</td><td class="da-grade-cell g1">Top 8</td><td class="da-consensus-cell">10–12</td></tr>
        <tr><td>Darryn Peterson</td><td class="da-grade-cell g3">Picks 15–27</td><td class="da-consensus-cell">Top 4</td></tr>
        <tr><td>Cameron Boozer</td><td class="da-grade-cell g3">Mid-Lottery</td><td class="da-consensus-cell">Top 3</td></tr>
        <tr><td>Caleb Wilson</td><td class="da-grade-cell g3">Mid-Lottery</td><td class="da-consensus-cell">Top 4</td></tr>
        <tr><td>Paul McNeil Jr.</td><td class="da-grade-cell g2">Late First</td><td class="da-consensus-cell">Late 1st/2nd</td></tr>
        <tr><td>Yaxel Lendeborg</td><td class="da-grade-cell g2">Late First</td><td class="da-consensus-cell">Mid-Late 1st</td></tr>
        <tr><td>Darius Acuff</td><td class="da-grade-cell g3">Late First/Early 2nd</td><td class="da-consensus-cell">Top 8</td></tr>
        <tr><td>Braylon Mullins</td><td class="da-grade-cell g4">Early Second</td><td class="da-consensus-cell">Second Round</td></tr>
        <tr><td>LaBaron Philon</td><td class="da-grade-cell g4">Late 2nd/Undrafted</td><td class="da-consensus-cell">Late 1st</td></tr>
        <tr><td>Mouhamed Faye</td><td class="da-grade-cell g4">Undrafted</td><td class="da-consensus-cell">Second Round</td></tr>
        <tr><td>Isaiah Evans</td><td class="da-grade-cell g4">Undrafted</td><td class="da-consensus-cell">Late First</td></tr>
      </tbody>
    </table>
  </div>


</div>
`
},

"jett-return": {
    tag: "NFL Offseason",
    hero: "images/jj.jpeg",
    time: "12 MIN READ",
    published: "April 12, 2026",
    updated: null,
    title: "Return Of The Jettas",
    content: `
<style>
  .qf {
    font-family: 'Georgia', serif;
    color: inherit;
  }
  .qf-kicker {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.6rem;
    font-weight: 900;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #2563eb;
    margin-bottom: 0.5rem;
  }
  .qf-deck {
    font-size: clamp(1.05rem, 2.8vw, 1.35rem);
    font-weight: 400;
    font-style: italic;
    line-height: 1.7;
    color: inherit;
    opacity: 0.65;
    margin-bottom: 2.5rem;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid rgba(128,128,128,0.15);
  }
  .qf p {
    font-size: clamp(1rem, 2.4vw, 1.175rem);
    line-height: 1.9;
    margin-bottom: 1.65rem;
    font-weight: 400;
    opacity: 0.88;
    color: inherit;
  }
  .qf .qf-lede {
    font-size: clamp(1.2rem, 3.2vw, 1.55rem);
    font-weight: 700;
    line-height: 1.55;
    opacity: 1;
    margin-bottom: 2rem;
  }
  .qf .qf-lede::first-letter {
    float: left;
    font-family: 'Georgia', serif;
    font-size: clamp(3.5rem, 10vw, 5.5rem);
    font-weight: 900;
    line-height: 0.78;
    margin-right: 0.12em;
    margin-top: 0.08em;
    color: #2563eb;
  }
  .qf-part {
    margin: 3.5rem 0 1.5rem;
  }
  .qf-part-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #2563eb;
    margin-bottom: 0.4rem;
  }
  .qf-part-title {
    font-family: 'Georgia', serif;
    font-size: clamp(1.5rem, 5vw, 2.4rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: inherit;
    opacity: 1;
    margin: 0;
  }
  .qf-part-rule {
    display: block;
    height: 3px;
    width: 2.5rem;
    background: #00000;
    margin-top: 0.85rem;
    border-radius: 2px;
  }
  .qf-pull {
    position: relative;
    margin: 2.75rem 0;
    padding: 1.75rem 1.75rem 1.75rem 2rem;
    border-left: 3px solid #d4af37;
    background: linear-gradient(135deg, rgba(212,175,55,0.07) 0%, transparent 80%);
    border-radius: 0 1rem 1rem 0;
  }
  .qf-pull p {
    font-size: clamp(1.1rem, 3vw, 1.4rem) !important;
    font-style: italic;
    font-weight: 700 !important;
    line-height: 1.55 !important;
    opacity: 1 !important;
    margin: 0 !important;
    color: #b8960a;
  }
  .dark .qf-pull p { color: #d4af37; }
  .qf-stat {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.65rem;
    margin: 2.5rem 0;
  }
  @media (min-width: 520px) {
    .qf-stat { grid-template-columns: repeat(4, 1fr); }
  }
  .qf-stat-box {
    background: rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.07);
    border-radius: 0.875rem;
    padding: 1rem 0.75rem;
    text-align: center;
  }
  .dark .qf-stat-box {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.08);
  }
  .qf-stat-box .qf-sv {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(1.5rem, 4.5vw, 2.2rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.3rem;
  }
  .qf-stat-box .qf-sl {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.62rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.45;
  }
  .qf-number {
    text-align: center;
    margin: 2.75rem 0;
    padding: 2rem 1.5rem;
    background: rgba(212,175,55,0.07);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 1.25rem;
  }
  .qf-number .qf-big {
    display: block;
    font-family: 'Georgia', serif;
    font-size: clamp(3.5rem, 14vw, 7rem);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1;
    color: #d4af37;
    margin-bottom: 0.35rem;
  }
  .qf-number .qf-caption {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.45;
  }
  .qf-break {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 3rem 0;
    opacity: 0.2;
  }
  .qf-break::before,
  .qf-break::after {
    content: '';
    flex: 1;
    height: 1px;
    background: currentColor;
  }
  .qf-break span {
    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }
  .qf-isolated {
    font-family: 'Georgia', serif;
    font-size: clamp(1.3rem, 4vw, 1.8rem);
    font-weight: 900;
    letter-spacing: -0.01em;
    line-height: 1.3;
    margin: 2rem 0;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(37,99,235,0.2);
    border-bottom: 1px solid rgba(37,99,235,0.2);
    text-align: center;
    color: #2563eb;
  }
  .qf-coda {
    font-style: italic;
    opacity: 0.7 !important;
  }
  .qf-finale {
    font-size: clamp(1.05rem, 2.6vw, 1.3rem) !important;
    font-weight: 700 !important;
    line-height: 1.75 !important;
    opacity: 1 !important;
  }
  .qf-finale .qf-blue { color: #2563eb; font-style: italic; }
  .qf-finale .qf-gold { color: #d4af37; }
  .qf-byline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(128,128,128,0.12);
  }
  .qf-byline-dot {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #062c06, #d4af37);
    flex-shrink: 0;
  }
  .qf-byline-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.5;
    line-height: 1.6;
  }
  .qf strong { font-weight: 700; opacity: 1; }
  .qf em { font-style: italic; }
</style>

<div class="qf">

  <div class="qf-byline">
    <img src="images/me.png" class="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30 flex-shrink-0" />
    <div class="qf-byline-text">
      <a href="https://x.com/qb_vision" target="_blank" style="color:#d4af37; text-decoration:none;">@Qb_vision</a> <br>
      April 10, 2026
    </div>
  </div>

  <!-- HUMBLE BEGINNINGS -->
  <div class="qf-part">
    <h2 class="qf-part-title">Humble Beginnings</h2>
    <span class="qf-part-rule"></span>
  </div>

  <p>Born June 16, 1999, in St. Rose, Louisiana  -- a small town that sits between New Orleans and Baton Rouge. There was no five-star recruiting circus.. Jefferson was a late bloomer at LSU, a slot receiver who had to learn his craft. A true student of the game. He took a quarterback approach to his studies, breaking the game down from a prospective of a DB.</p>

  <p>When the Vikings drafted him 22nd overall in 2020, he wasn't a household name. He was a smooth slot receiver from a high-powered college offense, and the skeptics wondered whether his production at LSU could translate.</p>

  <p>What followed was a historical rookie season. 
In his first three seasons, Jefferson averaged 96.5 receiving yards per game, the most of any player in NFL history across a player's first three seasons.</p>

  <div class="qf-number">
    <span class="qf-big">96.5</span>
    <span class="qf-caption">Receiving yards per game -- first three seasons. Most in NFL history.</span>
  </div>

  <p>His hard work had paid off. NFL defenses started scheming to stop him well into his rookie year,  and he still produced like no other WR who came before him.</p>

  <div class="qf-stat">
    <div class="qf-stat-box">
      <span class="qf-sv">6</span>
      <span class="qf-sl">Straight 1K Seasons</span>
    </div>
    <div class="qf-stat-box">
      <span class="qf-sv">500</span>
      <span class="qf-sl">Youngest ever to 500 receptions</span>
    </div>
    <div class="qf-stat-box">
      <span class="qf-sv">8,480</span>
      <span class="qf-sl">Career Yards at 26</span>
    </div>
    <div class="qf-stat-box">
      <span class="qf-sv">22nd</span>
      <span class="qf-sl">Draft Pick, 2020</span>
    </div>
  </div>

  <p>He joined Mike Evans and Randy Moss as the only NFL players to open their career with six consecutive 1,000-yard seasons.  He tied Larry Fitzgerald as the youngest player in history to reach 500 career receptions. He entered 2025 with 8,480 career receiving yards at 26 years old, and on that trajectory, he was supposed to be breaking all-time records comfortably by the time he was 30.
Then 2025 happened.</p>


  <!-- ANATOMY OF A DOWN YEAR -->
  <div class="qf-part">
    <h2 class="qf-part-title">Anatomy Of A Down Year</h2>
    <span class="qf-part-rule"></span>
  </div>

  <p>Justin Jefferson posted career lows in every metric last year. He had 84 receptions on 140 targets for 1,048 receiving yards and 2 touchdowns in 2025, earning a PFF grade of 80.5 -- 14th among qualified wide receivers.</p>

  <p>The best receiver in the game finished the season as the 25th ranked WR…WR.. in half-PPR fantasy scoring</p>

  <p>He had a particular issue with drops last year..well at least on the surface. That's what Vikings fans will tell you but that is contextually misread. He was charged with 3 drops on the year.  3 drops over 140 targets. That's a 2.13% drop rate. Not bad.</p>

  <div class="qf-pull">
    <p>This discourse manufactured a crisis from five dropped footballs and a quarterback who couldn't consistently get him the ball with anticipation. What actually happened in 2025 was not Justin Jefferson declining. It was Justin Jefferson being trapped inside a broken offensive ecosystem with a young quarterback who had no training camp with him.</p>
  </div>

  <p>Jefferson missed training camp due to a hamstring injury, which set back his rapport with first-year starter J.J. McCarthy. McCarthy lacked  touch on certain throws, particularly, the deep crossing pattern.</p>

  <div class="qf-isolated">18% of Jefferson's targets in 2025 were deemed 'uncatchable' due to ball placement--the highest mark of his career.</div>

  <p>Defenses continued their tradition of building specific coverage schemes to eliminate Jefferson from game. Jefferson constantly drew bracket coverage and safety rotation over the top to help slow him down. To counter these defensive schemes, it requires a quarterback with the experience and processing speed to quickly identify the coverage, find the pre-snap tell, and deliver the ball to the second read.</p>

  <p>McCarthy was learning to do this in real time.</p>

  <p><strong>A revolving door of QBs:</strong><br>
The Vikings cycled through McCarthy, Carson Wentz, and Max Brosmer at quarterback in 2025. For the lack of a better term, Jefferson was catching footballs thrown by a committee of "broken" quarterbacks.</p>

  <p>One of them being a 22 year old whose confidence was being tested in real-time with viral memes. Beyond his off field struggles, Mccarthy's locker room pep talks and press conference answers got clipped and mocked and recycled.</p>

  <p>Then Wentz came in, and went…and all you remembered were a lot of yards, a lot of interceptions , a lot of losses and one terrible pr nightmare for Kevin Oconell. Then came Max Brosmer's lone start in Seattle, One of the worst quarterback performances ever televised.</p>

  <p>And through all of it ..through the career low numbers, missed pro bowl, lowered madden ratings… Jefferson remained a solid teammate, a team captain, and a professional. That's what makes Jefferson so unique in this era.</p>


  <!-- THE CHARACTER OF SILENCE -->
  <div class="qf-part">
    <h2 class="qf-part-title">The Character Of Silence</h2>
    <span class="qf-part-rule"></span>
  </div>

  <p>Throughout his down season, Jefferson didn't sulk away or throw shade at his QBs like some other WR1s ..There was no "anonymous source" whisperings, none of the usual theatrics that follow the stereotypical "Diva WR" labels.
He carried the weight quietly. Which tells you everything about who he is.</p>

  <p>Jefferson's composure never wavered. He was arguably the best receiver in football being fed by a quarterback combination that would have made Randy Moss look average. The offense could not manufacture the space and timing his routes demanded. His historical statistical ascent was being interrupted in its prime. And his peers -- Puka Nacua and Jaxon Smith-Njigba amongst others, seemingly surpassed him.</p>

  <p>Jefferson maintained publicly that he was confident McCarthy could be the Vikings' No. 1 quarterback. He showed up to every week's press conference with the same measured dignity.</p>

  <p>That tells you something that the statistics don't: Jefferson's internal compass didn't move. 
His identity is not contingent on the stat line. He knows who he is. He knows how good he is. And he knows the difference between a down year that reflects him and a down year that reflects everything around him.</p>

  <div class="qf-pull">
    <p>That distinction …knowing the difference, is a talent in itself. A lot of athletes can't hold on to that distinction. They either deflect all blame outward or collapse inward. Jefferson found a third path: accountability without self-deprecation, patience without passivity.</p>
  </div>

  <p>He kept his throne in his mind. That matters for what comes next.</p>


  <!-- PART FOUR: THE OFFSEASON OF REDEMPTION -->
  <div class="qf-part">
    <h2 class="qf-part-title">The Offseason Of Redemption</h2>
    <span class="qf-part-rule"></span>
  </div>

  <p>On March 12, 2026, the Minnesota Vikings signed quarterback Kyler Murray to a one-year contract worth $1.3 million, with the Arizona Cardinals covering the remaining $35+ million of his guaranteed salary.</p>

  <p>In a business filled with complicated transactions, this one had a clarifying simplicity: the Vikings got one of the more talented quarterbacks in the league for essentially nothing, and Justin Jefferson got a lifeline.</p>

  <p>But calling it a lifeline undersells what Kyler Murray actually represents for Jefferson's game. This isn't desperation. This is architecture.
Murray will work with Kevin O'Connell and a WR tandem of Jetta and Jordan Addison. That is arguably the best supporting cast of his NFL career.</p>

  <p>Consider what Murray brings to this offense mechanically. He is a rhythm passer with genuine touch, which should bring relief from McCarthy's one speed arm.</p>

  <p>Murray offers an upgrade at processing, particularly in the shotgun and pistol. While McCarthy is a decent run threat himself, Murray offers a far superior run threat. This will make it easier to punish bracket coverages and relief some double-coverages that defenses have been deploying against Jefferson for most of his career.</p>

  <p>The most important thing Murray does for Jefferson is the intermediate digs, slants etc. . McCarthy couldn't consistently make those throws with the required timing. Murray has shown to be very solid in this area.</p>

  <p>O'Connell is expected to remake the offense around Murray's strengths, moving toward more shotgun and pistol formations that suit a quick-process quarterback with dual-threat capability. 
That shift fundamentally changes Jefferson's operating environment. Under-center play-action concepts -- the backbone of the O'Connell system with Cousins and Darnold -- require the receiver to be patient.</p>

  <p>In the shotgun, routes develop faster, the quarterback's eyes are pre-snap rather than post-snap, and this boosts Justin's play style -- his elite ability to create separation in his first three steps.</p>


  <!-- PART FIVE: HE'S STILL HERE -->
  <div class="qf-part">
    <h2 class="qf-part-title">He's Still Here</h2>
    <span class="qf-part-rule"></span>
  </div>

  <p>Justin Jefferson is 26 years old. His athleticism is intact. His route running has not declined , if anything, his technical mastery of the position has continued to develop even when the production numbers didn't reflect it.</p>

  <p>One part of his game that remained elite last year was his YAC.  He racked up 435 YAC yards, which speaks to the fact that when the ball found him, he still made people miss, still finished plays, still created.</p>

  <p>The muscle memory of greatness doesn't atrophy in one bad season. We might have seen a Raider Randy Moss season. The receiver is only as good as the infrastructure around him allows him to appear, and what 2025 proved is that Justin Jefferson requires at minimum a quarterback who can process defenses and throw with anticipation.</p>

  <p>Kyler Murray, healthy and motivated and pitching his case for a long-term contract in 2027, has every incentive in the world to make this work.</p>

  <p>What does the revival look like? It looks like Jefferson settling back into a rhythm he hasn't had since his peak years with Cousins -- pre-snap communication, hot routes that actually get executed, a quarterback who can see the post-snap coverage rotation and identify when Jefferson has beaten the bracket before the linebacker can recover.</p>

  <p>It looks like a target share that was already among the league's best at 31% actually converting into production instead of incompletions.</p>

  <p>It looks like touchdowns. Real red zone targets, not the afterthought opportunities that came in a season where the offense was too dysfunctional to even reach the red zone consistently.</p>

  <p>Voters and analysts already listed Jefferson as a top-20 player heading into 2026 despite his down year, recognizing that the skill set was never in question.</p>

  <p class="qf-finale"><span class="qf-gold">The ecosystem has been fixed (hopefully). The rest is almost inevitable.</span></p>

</div>
`
},
};
// Auto-open article from URL param
(function() {
  const params = new URLSearchParams(window.location.search);
  const articleId = params.get('article');
  if (articleId && articleEngineData[articleId]) {
    setTimeout(() => openReader(articleId), 400);
  }
})();

window.openReader = function(id) {
    window._currentArticleId = id;
    const data = articleEngineData[id];
    if (!data) return;

}