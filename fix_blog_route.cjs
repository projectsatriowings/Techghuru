const fs = require('fs');

let pagesTsx = fs.readFileSync('components/pages.tsx', 'utf8');

// The original pattern to replace:
// if(key==="blog")return <><PageHero {...pages.blog}><img src="/files-play.svg" alt="Blog Illustration" className="blog-illustration-img" /></PageHero><section className="py-24 relative z-10"><div className="max-w-[1280px] mx-auto px-gutter"><BlogExplorer/></div></section></>;

pagesTsx = pagesTsx.replace(
  /if\(key==="blog"\)return <><PageHero \{\.\.\.pages\.blog\}><img src="\/files-play\.svg" alt="Blog Illustration" className="blog-illustration-img" \/><\/PageHero><section className="py-24 relative z-10"><div className="max-w-\[1280px\] mx-auto px-gutter"><BlogExplorer\/><\/div><\/section><\/>;/,
  'if(key==="blog")return <BlogPage />;'
);

fs.writeFileSync('components/pages.tsx', pagesTsx);
console.log('Fixed BlogRoute');
