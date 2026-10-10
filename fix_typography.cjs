const fs = require('fs');
let code = fs.readFileSync('components/pages.tsx', 'utf8');

// 1. Remove hardcoded font families
code = code.replace(/font-\['[^']+?'\]/g, '');
code = code.replace(/font-sans/g, '');

// 2. Standardize h1
code = code.replace(/<h1([^>]*)text-\[[^\]]+\]([^>]*)>/g, '<h1-display-xl text-display-xl>');
code = code.replace(/text-\[44px\] md:text-\[56px\] lg:text-\[72px\]/g, 'font-display-xl text-display-xl');

// 3. Standardize h2
code = code.replace(/<h2([^>]*)text-\[[^\]]+\]([^>]*)>/g, '<h2-headline-lg text-headline-lg>');

// 4. Standardize h3
code = code.replace(/<h3([^>]*)text-\[[^\]]+\]([^>]*)>/g, '<h3-headline-md text-headline-md>');

// 5. Standardize other text-[XXpx]
code = code.replace(/text-\[11px\]|text-\[12px\]|text-\[13px\]/g, 'font-label-sm text-label-sm');
code = code.replace(/text-\[14px\]|text-\[15px\]/g, 'font-body-sm text-body-sm');
code = code.replace(/text-\[16px\]|text-\[18px\]/g, 'font-body-md text-body-md');
code = code.replace(/text-\[20px\]|text-\[22px\]/g, 'font-headline-sm text-headline-sm');
code = code.replace(/text-\[24px\]|text-\[28px\]/g, 'font-headline-md text-headline-md');
code = code.replace(/text-\[32px\]|text-\[36px\]/g, 'font-headline-lg text-headline-lg');
code = code.replace(/text-\[40px\]|text-\[48px\]|text-\[56px\]|text-\[64px\]|text-\[72px\]/g, 'font-display-xl text-display-xl');

// Clean up duplicate classes (e.g. font-body-md font-body-md)
code = code.replace(/(font-[a-z\-]+)\s+\1/g, '');
code = code.replace(/(text-[a-z\-]+)\s+\1/g, '');
code = code.replace(/\s+/g, ' '); // Clean up double spaces in classNames
code = code.replace(/className=" /g, 'className="');

fs.writeFileSync('components/pages.tsx', code);
console.log('Typography fixed!');
