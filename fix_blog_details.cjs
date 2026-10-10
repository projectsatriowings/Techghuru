const fs = require('fs');
let code = fs.readFileSync('components/pages.tsx', 'utf8');

const replacement = `  return (
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
}`;

// Replaces lines 805 to 884 (the return block of BlogPost)
code = code.replace(/return \(\s*<>\s*<PageHero[\s\S]*?<\/div>\s*<\/section>\s*<\/>\s*\)/, replacement);

fs.writeFileSync('components/pages.tsx', code);
console.log('Fixed Blog detail colors');
