const fs = require('fs');
let code = fs.readFileSync('components/pages.tsx', 'utf8');

// Fix <br//> to <br/>
code = code.replace(/<br\/\/>/g, '<br/>');
code = code.replace(/<img\/\/>/g, '<img/>');
code = code.replace(/<hr\/\/>/g, '<hr/>');
code = code.replace(/<input\/\/>/g, '<input/>');

// Fix { and } inside HTML text in the code snippet block
code = code.replace(/initializeMesh<\/span>\(\{<\/p>/g, 'initializeMesh</span>({"{{"}}</p>');
code = code.replace(/<p>\}\);<\/p>/g, '<p>{"});"}</p>');
code = code.replace(/>99\.98%</g, '>{"99.98%"}<');
code = code.replace(/>6\+ Years</g, '>{"6+ Years"}<');

// Replace Bespoke image
code = code.replace(/<img[^>]*data-alt="A modern collaborative engineering team[^>]*\/>/, '<img src="/webdev-animation.svg" alt="Web Development" className="w-full h-[480px] object-cover drop-shadow-xl" />');

// Replace Hero image
code = code.replace(
  /<div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">.*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/s,
  `<div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center"><img src="/Technology.svg" alt="Tech Ghuru Cloud Architecture" className="w-full h-auto drop-shadow-2xl" /></div></div></div></section>`
);

fs.writeFileSync('components/pages.tsx', code);
console.log('Fixed some syntax errors.');
