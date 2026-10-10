const fs = require('fs');
const path = 'components/pages.tsx';
let code = fs.readFileSync(path, 'utf8');

// Revert Hero Right Column
const heroRegex = /<div\s+className="w-full h-\[400px\] bg-primary relative z-10"\s+style={{[^}]*}}[^>]*>\s*<\/div>/s;
code = code.replace(heroRegex, '<img src="/Technology.svg" alt="Tech Ghuru Cloud Architecture" className="w-full h-auto drop-shadow-2xl"/>');

// Revert Partnership Left Column
const partnerRegex = /<div\s+className="w-full h-\[480px\] bg-primary relative z-10"\s+style={{[^}]*}}[^>]*>\s*<\/div>/s;
code = code.replace(partnerRegex, '<img src="/webdev-animation.svg" alt="Web Development" className="w-full h-[480px] object-cover drop-shadow-xl"/>');

fs.writeFileSync(path, code);
console.log('done reverting images');
