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
  // Only flag it if the content block for this article changed
  // not just the updated field itself
  const articleSection = diff.match(
    new RegExp(`"${id}":[\\s\\S]*?(?="[a-z-]+":|$)`, 'g')
  );
  if (!articleSection) return false;
  
  // Ignore if only the updated line changed (prevent infinite loop)
  const lines = articleSection[0].split('\n')
    .filter(l => l.startsWith('+') || l.startsWith('-'))
    .filter(l => !l.includes('updated:'));
  
  return lines.length > 0;
});

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

  // Replace existing updated field (null or string)
  const hasField = html.includes(`updated:`);
  
  if (hasField) {
    html = html.replace(
      new RegExp(`(["']${id}["']\\s*:\\s*\\{[\\s\\S]*?published\\s*:[^,\\n]+,?)\\s*\\n(\\s*)updated\\s*:\\s*(?:null|"[^"]*")`),
      `$1\n$2updated: "${timestamp}"`
    );
  }
});

fs.writeFileSync('index.html', html);
console.log('Done.');
