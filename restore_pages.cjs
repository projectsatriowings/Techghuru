const fs = require('fs');

let code = fs.readFileSync('components/pages.tsx', 'utf8');

const servicePageReturn = `  return (
    <>
      <PageHero eyebrow={\`SERVICES · \${info.name}\`} title={<>{headlineParts[0]}<br/><em>Built for {headlineParts[1]||"Growth"}</em></>} desc={info.overview} />
      <section className="py-24 relative z-10">
        <div className="max-w-[1280px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-16">
            <div>
              <h3 className="font-headline-md text-headline-md font-bold mb-6 text-on-surface">Our Approach</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {info.services?.map((s, i)=>(
                  <div key={i} className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                    <h4 className="font-bold mb-2 text-on-surface">{s.title}</h4>
                    <p className="text-sm text-on-surface-variant">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md font-bold mb-6 text-on-surface">Core Features</h3>
              <div className="space-y-4">
                {info.features?.map(([t,d], i)=>(
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">{(i+1).toString().padStart(2,'0')}</div>
                    <div>
                      <h4 className="font-bold text-on-surface">{t}</h4>
                      <p className="text-sm text-on-surface-variant">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/30">
              <h3 className="font-bold mb-4 font-headline-sm text-on-surface">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {info.technologies?.map((t)=><span key={t} className="px-4 py-2 bg-surface rounded-full text-sm font-semibold border border-outline-variant/30 text-on-surface">{t}</span>)}
              </div>
            </div>
            <div className="bg-primary text-on-primary rounded-3xl p-8 shadow-xl">
              <h3 className="font-bold mb-4 font-headline-md">Ready to start?</h3>
              <p className="mb-6 text-primary-fixed-dim font-body-md">Let's build something great together.</p>
              <Button href="/contact" variant="secondary" className="bg-white text-black hover:bg-gray-100">Get a Quote</Button>
            </div>
          </div>
        </div>
      </section>
      <CTA/>
    </>
  );
}`;

const blogPostComponent = `

const blogInfo: Record<string, string[]> = Object.fromEntries(articles.map(a => [a[3], [a[0], a[1], ""]]));

export function BlogPost({slug}: {slug: string}){
  const [category,title,desc]=blogInfo[slug] || ["Blog", "Article Not Found", ""];
  const content = <p>Full article content coming soon.</p>;
  const otherArticles = articles.filter(a => a[3] !== slug).slice(0, 5);

  return (
    <>
      <PageHero 
        eyebrow={\`JOURNAL · \${category.toUpperCase()}\`} 
        title={<>{title.split(" ").slice(0,3).join(" ")}<br/><em>{title.split(" ").slice(3).join(" ")}</em></>} 
        desc={desc}
      />
      
      <style dangerouslySetInnerHTML={{__html: \`
        .blog-body { font-size: 1.125rem; line-height: 1.8; color: var(--on-surface-variant); }
        .blog-body h3 { font-family: Outfit, sans-serif; font-size: 1.75rem; margin: 2.5rem 0 1rem 0; color: var(--on-surface); font-weight: 600; letter-spacing: -0.02em; }
        .blog-body p { margin-bottom: 1.5rem; }
        .blog-body ul { margin-bottom: 1.5rem; padding-left: 1.25rem; }
        .blog-body li { margin-bottom: 0.75rem; }
        .blog-body strong { color: var(--on-surface); font-weight: 600; }
      \`}} />

      <section className="py-24 relative z-10 bg-surface">
        <div className="max-w-[1280px] mx-auto px-gutter flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Main Content Column */}
          <div className="flex-[2] min-w-0 w-full">
            <div className="rounded-3xl overflow-hidden mb-12 shadow-lg border border-outline-variant/20 bg-surface-container">
              <img src={\`/blog-\${slug}.jpg\`} alt={title} className="w-full h-[300px] md:h-[450px] object-cover" />
            </div>
            
            <div className="blog-body">
              {content}
            </div>
            
            <div className="mt-16 pt-8 border-t border-outline-variant/30">
               <Link href="/blog" className="inline-flex items-center gap-2 font-label-md font-semibold text-primary hover:-translate-x-1 transition-transform">
                 <span className="material-symbols-outlined text-sm">arrow_back</span>
                 Back to the journal
               </Link>
            </div>
          </div>
          
          {/* Sidebar Column */}
          <div className="flex-1 w-full lg:max-w-[400px] lg:sticky lg:top-32 space-y-8">
            <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/30 shadow-sm">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-6 pb-4 border-b border-outline-variant/30 uppercase tracking-widest">
                Recent Blogs
              </h3>
              <div className="flex flex-col space-y-6">
                {otherArticles.map((article) => (
                  <Link href={\`/blog/\${article[3]}\`} key={article[3]} className="group flex gap-4 items-center">
                    {article[4] ? (
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-outline-variant/20 bg-surface-container">
                        <img src={article[4]} alt={article[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    ) : (
                      <div className="w-24 h-24 bg-surface-container rounded-2xl shrink-0 border border-outline-variant/20" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-label-sm text-[11px] text-primary font-bold tracking-wider uppercase mb-1.5">
                        {article[0]}
                      </div>
                      <h4 className="font-headline-sm text-[15px] text-on-surface font-semibold group-hover:text-primary transition-colors leading-tight line-clamp-2">
                        {article[1]}
                      </h4>
                      <div className="font-body-sm text-[13px] text-on-surface-variant mt-2 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px]">timer</span>
                        {article[2]}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}

`;

// Find ServicePage's current corrupted return block and replace it with servicePageReturn + blogPostComponent.
// We look from `const headlineParts = info.headline.split(" Built for ");` up to `function AboutPage()`
const searchPattern = /const headlineParts = info\.headline\.split\(" Built for "\);\s*return \(\s*<>[\s\S]*?\n\}/;

code = code.replace(searchPattern, "const headlineParts = info.headline.split(\" Built for \");\n" + servicePageReturn + "\n}\n" + blogPostComponent);

fs.writeFileSync('components/pages.tsx', code);
console.log('Restored pages.tsx');
