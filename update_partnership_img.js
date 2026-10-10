const fs = require('fs');
const path = 'components/pages.tsx';
let code = fs.readFileSync(path, 'utf8');

const regex = /<img className="w-full h-\[480px\] object-cover" data-alt=".*?" src=".*?"\/>/s;

const newImg = `<div 
  className="w-full h-[480px] bg-primary relative z-10" 
  style={{
    WebkitMaskImage: 'url(/webdev-animation.svg)',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    WebkitMaskSize: 'contain',
    maskImage: 'url(/webdev-animation.svg)',
    maskRepeat: 'no-repeat',
    maskPosition: 'center',
    maskSize: 'contain',
  }}
/>`;

code = code.replace(regex, newImg);
fs.writeFileSync(path, code);
console.log('done updating partnership image');
