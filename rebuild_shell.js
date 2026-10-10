const fs = require('fs');
const lines = fs.readFileSync('components/site-shell.tsx', 'utf8').split(/\r?\n/);
const newContent = fs.readFileSync('new-shell.tsx', 'utf8');

// The file has SiteShell starting at line 9 (index 8).
// The Footer function ends before Eyebrow.
let startIndex = -1;
let endIndex = -1;
for (let i=0; i<lines.length; i++) {
  if (lines[i].includes('export function SiteShell')) { startIndex = i; }
  if (lines[i].includes('export function Eyebrow')) { endIndex = i; break; }
}

if (startIndex !== -1 && endIndex !== -1) {
  const before = lines.slice(0, startIndex);
  const after = lines.slice(endIndex);
  fs.writeFileSync('components/site-shell.tsx', [...before, newContent, ...after].join('\n'));
  console.log('Replaced by line indices!');
} else {
  console.log('Indices not found', startIndex, endIndex);
}
