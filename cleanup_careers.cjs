const fs = require('fs');
const path = 'components/pages.tsx';

let lines = fs.readFileSync(path, 'utf8').split('\n');

// Find the line index of `export function BlogPage() {`
let blogPageEndIndex = -1;
let openBraces = 0;
let insideBlogPage = false;

// We know the end of BlogPage is at lines 2155-2157 in the snippet above:
// 2155:     </main>
// 2156:   );
// 2157: }

// We know the start of the NEW CareersPage stuff is at:
// const jobs = [
// which is line 2416 in the snippet.

// Let's just find the index of "export function CareersPage() {" which is at line 2544
// Wait, the easiest way is to find the exact end of BlogPage and the exact start of the NEW jobs array.

const startIndex = lines.findIndex(l => l.includes('export function BlogPage'));
for (let i = startIndex; i < lines.length; i++) {
  if (lines[i].includes('</main>')) {
    if (lines[i+1].includes(');') && lines[i+2] === '}') {
      blogPageEndIndex = i + 2;
      break;
    }
  }
}

const newJobsStartIndex = lines.findIndex((l, idx) => idx > blogPageEndIndex && l.includes('const jobs = ['));

if (blogPageEndIndex !== -1 && newJobsStartIndex !== -1) {
  // Wipe everything strictly between the end of BlogPage and the start of the NEW const jobs = [
  // This will cleanly delete lines 2158 to 2415
  lines.splice(blogPageEndIndex + 1, newJobsStartIndex - blogPageEndIndex - 1);
  fs.writeFileSync(path, lines.join('\n'));
  console.log('Successfully cleaned up dangling code.');
} else {
  console.error('Could not find bounds to clean.');
}
