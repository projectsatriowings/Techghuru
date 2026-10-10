const fs = require('fs');
const path = 'components/pages.tsx';
let code = fs.readFileSync(path, 'utf8');

// 1. Replace SectionTitle
code = code.replace(/function SectionTitle.*?(?=function ServicesGrid)/s, `function SectionTitle({eyebrow,title,copy, maxWidth}: {eyebrow: string; title: ReactNode; copy?: string; maxWidth?: string | number}){
  return (
    <Reveal>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 relative z-10">
        <div className="space-y-4" style={{maxWidth: maxWidth || 800}}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight leading-tight">{title}</h2>
        </div>
        {copy && <p className="font-body-md text-body-md text-on-surface-variant max-w-[400px]">{copy}</p>}
      </div>
    </Reveal>
  );
}
`);

// 2. Replace PageHero
code = code.replace(/function PageHero.*?(?=function Prose)/s, `function PageHero({eyebrow,title,desc,children, image}: {eyebrow: string; title: ReactNode; desc: string; children?: ReactNode; image?: string}){
  return (
    <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6 z-10 relative">
            <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
            <Reveal delay={100}><h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight leading-[1.1]">{title}</h1></Reveal>
            <Reveal delay={200}><p className="font-body-lg text-body-lg text-on-surface-variant max-w-[540px]">{desc}</p></Reveal>
            {children && <Reveal delay={300}><div className="pt-4">{children}</div></Reveal>}
          </div>
          {image && (
            <div className="w-full lg:w-1/2 relative z-10 flex justify-center">
               <Reveal delay={200} className="w-full">
                 <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-w-[600px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest border border-outline-variant/30">
                    <img src={image} alt="Hero" className="w-full h-full object-cover" />
                 </div>
               </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
`);

// 3. Replace Prose
code = code.replace(/function Prose.*?(?=function ContactForm)/s, `function Prose({heading,children,eyebrow="THE WAY WE SEE IT"}: {heading: ReactNode; children: ReactNode; eyebrow?: string}){
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 my-24 relative z-10">
      <div className="md:col-span-5 space-y-4">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight leading-tight">{heading}</h2>
      </div>
      <div className="md:col-span-7 font-body-lg text-body-lg text-on-surface-variant space-y-6">
        {children}
      </div>
    </div>
  );
}
`);

// 4. Replace CTA
code = code.replace(/function CTA.*?(?=function PageHero)/s, `function CTA(){
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl border border-outline-variant/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-transparent pointer-events-none"></div>
          <div className="w-full md:w-1/2 space-y-6 relative z-10">
            <Eyebrow>YOUR NEXT CHAPTER</Eyebrow>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight leading-tight">Have a good one<br/><em className="text-primary not-italic">in the making?</em></h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[400px]">Tell us what you're dreaming up. We'll bring the right people and ideas to make it happen.</p>
          </div>
          <div className="w-full md:w-1/2 relative z-10 flex flex-col items-center md:items-end space-y-8">
            <div className="relative w-full max-w-[400px] aspect-video rounded-2xl overflow-hidden shadow-xl border border-outline-variant/30">
               <img src="/cta-image.png" alt="Creative Workspace" className="w-full h-full object-cover" />
            </div>
            <Button href="/contact">Let's talk about it</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
`);

// 5. Replace AboutPage inline styles
code = code.replace(/<div style={{backgroundColor: '#fff', color: '#181c18'}}>/g, '<div className="bg-surface min-h-screen text-on-surface">');
code = code.replace(/<section className="about-page-hero">/g, '<section className="pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden relative">');
code = code.replace(/<h1 style={{fontSize: 'clamp\(4rem, 8vw, 7rem\)', margin: 0, lineHeight: 1}}>/g, '<h1 className="font-headline-lg text-headline-lg font-bold tracking-tight leading-[1.1]">');
code = code.replace(/<p style={{fontSize: 'clamp\(1.1rem, 2vw, 1.5rem\)', color: '#4d5248', margin: 0}}>/g, '<p className="font-body-lg text-body-lg text-on-surface-variant max-w-[600px]">');
code = code.replace(/<h3 style={{fontSize: 'clamp\(1.5rem, 3vw, 2.5rem\)', margin: '0 0 10px', lineHeight: 1.1}}>/g, '<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">');
code = code.replace(/<p style={{color: '#4d5248', margin: 0, fontSize: '1.1rem', lineHeight: 1.6}}>/g, '<p className="font-body-md text-body-md text-on-surface-variant">');
code = code.replace(/<section className="about-page-story" style={{padding: '100px 0', borderTop: '1px solid #dcded8'}}>/g, '<section className="py-24 border-t border-outline-variant/30">');

fs.writeFileSync(path, code);
console.log('done generating stitches for subpages');
