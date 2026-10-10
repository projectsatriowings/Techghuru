const fs = require('fs');

let code = fs.readFileSync('components/pages.tsx', 'utf8');

const heroPattern = /<PageHero[\s\S]*?\/>/;
const newHero = `<section className="pt-32 pb-12 lg:pt-40 lg:pb-12 overflow-hidden relative bg-surface">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
          <div className="max-w-[800px] mx-auto text-center space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-[12px] font-bold tracking-widest uppercase shadow-sm">
                {category}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-headline-lg text-4xl md:text-5xl lg:text-[56px] font-bold text-on-surface tracking-tight leading-[1.15] text-balance mx-auto">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap items-center justify-center gap-4 text-on-surface-variant font-body-md text-sm pt-4">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  Oct 9, 2026
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">timer</span>
                  {desc}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">person</span>
                  Written by Tech Ghuru
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>`;

code = code.replace(heroPattern, newHero);

const infoPattern = /const blogInfo: Record<string, string\[\]> = Object\.fromEntries\(articles\.map\(a => \[a\[3\], \[a\[0\], a\[1\], ""\]\]\)\);/;
code = code.replace(infoPattern, `const blogInfo: Record<string, string[]> = Object.fromEntries(articles.map(a => [a[3], [a[0], a[1], a[2]]]));`);

fs.writeFileSync('components/pages.tsx', code);
console.log('Fixed Blog Post Hero');
