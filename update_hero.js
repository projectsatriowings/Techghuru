const fs = require('fs');
const path = 'components/pages.tsx';
let code = fs.readFileSync(path, 'utf8');

const regex = /<div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">.*?<\/div>\s*<\/div>\s*<\/section>/s;

const newRightCol = `<div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center items-center">
  <div className="absolute -inset-4 bg-gradient-to-tr from-primary-container/20 to-secondary-fixed/40 rounded-3xl blur-2xl -z-10"></div>
  <div 
    className="w-full h-[400px] bg-primary relative z-10" 
    style={{
      WebkitMaskImage: 'url(/Technology.svg)',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskImage: 'url(/Technology.svg)',
      maskRepeat: 'no-repeat',
      maskPosition: 'center',
      maskSize: 'contain',
    }}
  />
</div>
</div>
</section>`;

code = code.replace(regex, newRightCol);
fs.writeFileSync(path, code);
console.log('done updating hero');
