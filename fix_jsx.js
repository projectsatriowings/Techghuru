const fs = require('fs');
const path = 'components/pages.tsx';
let code = fs.readFileSync(path, 'utf8');

code = code.replace(/className="section-title" className="font-headline-lg text-headline-lg font-bold text-on-surface"/g, 'className="font-headline-lg text-headline-lg font-bold text-on-surface"');

fs.writeFileSync(path, code);
console.log('fixed jsx');
