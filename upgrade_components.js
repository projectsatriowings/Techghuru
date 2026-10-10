const fs = require('fs');
const path = 'components/pages.tsx';
let code = fs.readFileSync(path, 'utf8');

// ServicesGrid
code = code.replace(/function ServicesGrid\(\)\{.*?(?=function Projects)/s, `function ServicesGrid(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 relative z-10">
      {services.map(([n, t, c, ic, h, img], i) => (
        <Reveal key={n} delay={i*50}>
          <Link href={h} className="group relative block w-full h-[360px] rounded-3xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-lg hover:shadow-2xl transition-all duration-500">
             {img && <img src={img} alt={t} className="absolute inset-0 w-full h-full object-contain object-bottom opacity-10 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-0" />}
             {img && <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/40 to-transparent z-0"></div>}
             <div className="relative z-10 flex flex-col justify-between h-full p-8 transition-colors duration-500">
               <div>
                 <span className="font-mono text-sm font-semibold text-primary group-hover:text-primary-fixed transition-colors duration-500">{n}</span>
                 <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-4 transition-colors duration-500">{t}</h3>
                 <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-[280px] transition-colors duration-500">{c}</p>
               </div>
               <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
                 <ArrowUpRight size={20} />
               </div>
             </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
`);

// Projects
code = code.replace(/function Projects\(\{[^}]*\}\)\{.*?(?=function Journal)/s, `function Projects({small=false}){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 relative z-10">
      {projects.slice(0,small?2:4).map(([n,t,c],i) => (
        <Reveal key={n} delay={i*70}>
          <Link href="/portfolio" className="group block space-y-6">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-surface-container shadow-md border border-outline-variant/20">
               <div className="absolute inset-4 md:inset-8 bg-surface-container-lowest rounded-2xl shadow-inner border border-outline-variant/10 flex items-center justify-center overflow-hidden transition-transform duration-700 group-hover:scale-105">
                 <div className="w-64 h-64 bg-gradient-to-tr from-primary/30 to-secondary/10 rounded-full blur-3xl absolute opacity-50 group-hover:opacity-100 transition-opacity"></div>
                 <h3 className="font-headline-md text-headline-md font-bold text-on-surface-variant/30">{t.split(" ")[0]}</h3>
               </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">{t.split("?")[0]}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{c}</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
`);

// Journal
code = code.replace(/function Journal\(\{[^}]*\}\)\{.*?(?=function CTA)/s, `function Journal({compact=false}){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 relative z-10">
      {articles.map(([category,title,time,slug,img],i) => (
        <Reveal key={title} delay={i*50}>
          <article className="group block bg-surface-container-lowest rounded-3xl overflow-hidden shadow-lg border border-outline-variant/30 hover:shadow-2xl transition-all duration-500">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
              {img && <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />}
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-primary font-semibold tracking-wider uppercase">{category}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{time}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight group-hover:text-primary transition-colors">{title}</h3>
              <Link href={\`/blog/\${slug}\`} className="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                Read story <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
`);

// ContactForm
code = code.replace(/function ContactForm.*?(?=function WebDevTechStack)/s, `function ContactForm({quote=false}){
  return (
    <form className="space-y-6" action="#">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-label-md text-label-md text-on-surface font-semibold">Your name</label>
          <input className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="What should we call you?"/>
        </div>
        <div className="space-y-2">
          <label className="font-label-md text-label-md text-on-surface font-semibold">Email address</label>
          <input type="email" className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="you@yourcompany.com"/>
        </div>
      </div>
      {quote && (
        <div className="space-y-2">
          <label className="font-label-md text-label-md text-on-surface font-semibold">What are you looking to make?</label>
          <select defaultValue="" className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
            <option value="" disabled>Choose a service</option>
            {services.map(s=><option key={s[1]}>{s[1]}</option>)}
          </select>
        </div>
      )}
      <div className="space-y-2">
        <label className="font-label-md text-label-md text-on-surface font-semibold">A little about your idea</label>
        <textarea rows={4} className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" placeholder="Tell us what's on your mind..."/>
      </div>
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-label-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all" type="button">
          {quote ? "Continue to project details" : "Send your message"}
          <ArrowUpRight size={18}/>
        </button>
        <small className="font-body-sm text-body-sm text-on-surface-variant">Just a first hello. No commitment, no pressure.</small>
      </div>
    </form>
  );
}
`);

// RoutePage replacements (massively stripping old inline styles and replacing with Tailwind)
code = code.replace(/<section className="section" style={{paddingTop:30}}>/g, '<section className="py-24 relative z-10">');
code = code.replace(/<div className="section-inner">/g, '<div className="max-w-[1280px] mx-auto px-gutter">');
code = code.replace(/<section className="section">/g, '<section className="py-24 relative z-10">');
code = code.replace(/<div className="feature-grid".*?>/g, '<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">');
code = code.replace(/<div className="feature".*?>/g, '<div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 space-y-4 shadow-sm hover:shadow-lg transition-shadow">');
code = code.replace(/<section className="section" id="home" style={{paddingTop:25}}>/g, '<section className="py-24 relative z-10">');
code = code.replace(/<div id="stats" className="stats".*?>/g, '<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-outline-variant/30 my-16">');
code = code.replace(/<div className="stat".*?><strong style={{color: '#181c18'}}>/g, '<div className="flex flex-col items-center justify-center space-y-2"><strong className="font-headline-lg text-headline-lg font-bold text-primary">');
code = code.replace(/<span style={{fontSize: 14, color: '#181c18', marginTop: 10}}>/g, '<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-center">');
code = code.replace(/<span style={{display: 'inline', fontSize: 'inherit', color: 'inherit', margin: 0, letterSpacing: 'normal'}}>/g, '<span>');
code = code.replace(/<section className="section" style={{paddingTop:20}}>/g, '<section className="py-24 relative z-10">');
code = code.replace(/<section className="content-section">/g, '<section className="py-24 relative z-10">');
code = code.replace(/<div className="content-inner contact-grid">/g, '<div className="max-w-[1280px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16">');
code = code.replace(/<div className="content-inner">/g, '<div className="max-w-[1280px] mx-auto px-gutter">');
code = code.replace(/<div className="contact-info" style={{marginTop:45}}>/g, '<div className="space-y-4 mt-8">');
code = code.replace(/<div style={{display:"flex",alignItems:"center",gap:12}}/g, '<div className="flex items-center gap-3 font-body-lg text-body-lg text-on-surface"');
code = code.replace(/color="#86a932"/g, 'className="text-primary"');
code = code.replace(/<div className="service-detail-grid" style={{gridTemplateColumns:"1fr",marginTop:35}}>/g, '<div className="grid grid-cols-1 gap-6 mt-12">');
code = code.replace(/<div className="service-detail-grid" style={{gridTemplateColumns: "1fr"}}>/g, '<div className="grid grid-cols-1 gap-4 mt-8">');
code = code.replace(/<div className="service-detail-grid">/g, '<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">');
code = code.replace(/<div className="service-detail"/g, '<div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 hover:border-primary/50 transition-colors"');
code = code.replace(/<small className="lime">/g, '<small className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">');
code = code.replace(/<div className="split-copy" style={{marginBottom: 60}}>/g, '<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">');
code = code.replace(/<div className="split-copy" style={{marginTop: 100, marginBottom: 60}}>/g, '<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24 mb-16">');

// Fixing quotes in Contact Form titles
code = code.replace(/style={{fontSize:44}}/g, 'className="font-headline-lg text-headline-lg font-bold text-on-surface"');

fs.writeFileSync(path, code);
console.log('done upgrading subpage components to tailwind');
