const fs = require('fs');

let code = fs.readFileSync('components/pages.tsx', 'utf8');

const mapCode = `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{articles.map((article, i) => (
  <Link href={\`/blog/\${article[3]}\`} key={article[3]} className="group flex flex-col justify-between bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="relative h-56 overflow-hidden">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={article[4]} alt={article[1]} />
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-[11px] font-bold tracking-wider uppercase shadow-sm">
        {article[0]}
      </span>
    </div>
    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-label-md font-label-md text-on-surface-variant">
          <span className="material-symbols-outlined text-[16px]">timer</span>
          <span>{article[2]}</span>
        </div>
        <h3 className="font-headline-sm text-[18px] font-bold text-on-surface group-hover:text-primary transition-colors leading-tight">
          {article[1]}
        </h3>
      </div>
      
      <div className="pt-4 flex items-center justify-between border-t border-outline-variant/30 text-label-lg font-label-lg">
        <span className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
          Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </span>
        <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">bookmark_border</span>
      </div>
    </div>
  </Link>
))}
</div>`;

const searchPattern = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">[\s\S]*?<\/section>\s*<section className="mb-space-xl">\s*<div className="relative overflow-hidden rounded-xl bg-inverse-surface/;

code = code.replace(searchPattern, mapCode + '\n</section>\n\n<section className="mb-space-xl">\n<div className="relative overflow-hidden rounded-xl bg-inverse-surface');

fs.writeFileSync('components/pages.tsx', code);
console.log('Replaced blog index with mapped articles');
