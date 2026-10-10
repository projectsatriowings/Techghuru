const fs = require('fs');

let pagesTsx = fs.readFileSync('components/pages.tsx', 'utf8');

const titleSlugMap = {
  "Will AI Replace Writers?": "content-writing",
  "The Art and Science of Influencer Marketing": "influencer-marketing",
  "Advanced Link-Building Strategies": "link-building-strategies",
  "Minimalist Product Photography": "product-photoshoot",
  "Next-Gen Web Performance: Core Web Vitals in 2025": "web-developing",
  "Scalable Mobile App Architecture with Flutter": "product-design"
};

// We will find all <article ...> ... </article> blocks.
let result = pagesTsx;

// This regex finds the article block
const articleRegex = /<article\b[^>]*>([\s\S]*?)<\/article>/g;

result = result.replace(articleRegex, (match, innerHtml) => {
  let foundSlug = null;
  for (const [title, slug] of Object.entries(titleSlugMap)) {
    if (innerHtml.includes(title)) {
      foundSlug = slug;
      break;
    }
  }
  
  if (foundSlug) {
    // Replace <article with <Link href="/blog/slug" and </article> with </Link>
    return match.replace(/<article(\b[^>]*)>/, `<Link href="/blog/${foundSlug}"$1>`).replace(/<\/article>/, '</Link>');
  }
  
  return match;
});

fs.writeFileSync('components/pages.tsx', result);
console.log('Fixed Blog detail links');
