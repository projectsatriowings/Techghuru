const fs = require('fs');
let code = fs.readFileSync('components/site-shell.tsx', 'utf8');

const newFooter = `function Footer() { 
  return (
    <footer className="relative bg-[#f8f6f0] text-[#1a1a1a] pb-12 mt-0">
      
      {/* Cutout Container (aligns with the 1280px grid) */}
      <div className="absolute top-0 left-0 right-0 h-0 flex justify-center pointer-events-none z-0">
        <div className="relative w-full max-w-[1280px]">
          <div className="absolute top-0 left-[35%] right-[2%] h-[88px] bg-surface rounded-b-[48px] hidden md:block">
            {/* Left concave corner */}
            <div className="absolute top-0 -left-10 w-10 h-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-transparent rounded-full shadow-[0_0_0_60px_#fff8f1]"></div>
            </div>
            {/* Right concave corner */}
            <div className="absolute top-0 -right-10 w-10 h-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-20 h-20 bg-transparent rounded-full shadow-[0_0_0_60px_#fff8f1]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 flex flex-col space-y-6 pt-16 relative z-20">
            <Link href="/" className="font-headline-sm text-xl text-[#1a1a1a] font-bold flex items-center gap-2">
              <img src="/tech-ghuru-logo.png" alt="Tech Ghuru" className="h-16 w-auto object-contain -ml-2" />
            </Link>
            <h3 className="font-headline-md text-2xl font-bold tracking-tight">Create once.<br/><em className="text-[#eb5d1e] font-normal">Scale anytime.</em></h3>
            <p className="text-[#666] text-sm leading-relaxed max-w-[280px]">Tech Ghuru saves your business hours by delivering premium web development, strategy, and digital marketing—so you can scale faster.</p>
            <div>
               <Button href="/contact" className="bg-[#eb5d1e] text-white hover:bg-[#d64d14] rounded-[12px] px-6 py-3 flex items-center gap-2 inline-flex border-none font-bold shadow-[0_4px_15px_rgba(235,93,30,0.3)]">
                 Get a Quote
               </Button>
            </div>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 md:pt-[130px] pt-16 relative z-20">
            <div className="flex flex-col space-y-4">
              <h4 className="font-bold text-[#1a1a1a] mb-2 uppercase tracking-widest text-[11px]">Menu</h4>
              {links.slice(0, 5).map(([label, href]) => (
                <Link key={href} href={href} className="text-[#666] hover:text-[#eb5d1e] transition-colors text-sm font-medium">{label}</Link>
              ))}
            </div>
            
            <div className="flex flex-col space-y-4">
              <h4 className="font-bold text-[#1a1a1a] mb-2 uppercase tracking-widest text-[11px]">Navigation</h4>
              <Link href="/contact" className="text-[#666] hover:text-[#eb5d1e] transition-colors text-sm font-medium">Contact</Link>
              <Link href="/services" className="text-[#666] hover:text-[#eb5d1e] transition-colors text-sm font-medium">Roadmap</Link>
              <Link href="#" className="text-[#666] hover:text-[#eb5d1e] transition-colors text-sm font-medium">Privacy policy</Link>
              <Link href="#" className="text-[#666] hover:text-[#eb5d1e] transition-colors text-sm font-medium">Terms of service</Link>
              <Link href="#" className="text-[#666] hover:text-[#eb5d1e] transition-colors text-sm font-medium">Customer portal</Link>
            </div>
            
            <div className="flex flex-col space-y-4">
              <h4 className="font-bold text-[#1a1a1a] mb-2 uppercase tracking-widest text-[11px]">More services</h4>
              <Link href="/services/web-developing" className="text-[#666] hover:text-[#eb5d1e] transition-colors text-sm font-medium">Web Development</Link>
              <Link href="/services/digital-marketing" className="text-[#666] hover:text-[#eb5d1e] transition-colors text-sm font-medium">Digital Marketing</Link>
              <Link href="/services/product-design" className="text-[#666] hover:text-[#eb5d1e] transition-colors text-sm font-medium">Product Design</Link>
              <Link href="/services/video-ads" className="text-[#666] hover:text-[#eb5d1e] transition-colors text-sm font-medium">Video Ads & Editing</Link>
              <Link href="/services/content-writing" className="text-[#666] hover:text-[#eb5d1e] transition-colors text-sm font-medium">Content Writing</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#d0d0d0] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#888]">
          <p>© {new Date().getFullYear()} Tech Ghuru. All rights reserved.</p>
          <div className="flex items-center gap-4">
             <p>Built with 🤍 by Tech Ghuru</p>
             <div className="flex items-center gap-3">
               <Link href="#" className="text-[#666] hover:text-[#eb5d1e] transition-colors"><Instagram size={16}/></Link>
               <Link href="#" className="text-[#666] hover:text-[#eb5d1e] transition-colors"><Linkedin size={16}/></Link>
               <Link href="#" className="text-[#666] hover:text-[#eb5d1e] transition-colors"><Dribbble size={16}/></Link>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}`;

const startIdx = code.indexOf('function Footer()');
if (startIdx !== -1) {
    const endStr = '</footer>; \n}';
    let realEnd = code.indexOf(endStr, startIdx);
    if (realEnd === -1) {
        realEnd = code.indexOf('</footer>;\r\n}', startIdx);
    }
    if (realEnd === -1) {
        realEnd = code.indexOf('export function Eyebrow', startIdx);
    }
    if (realEnd !== -1) {
        const replacementEnd = code.substring(0, startIdx) + newFooter + '\n\n' + code.substring(realEnd).replace(/<\/footer>;\s*\}/, '');
        fs.writeFileSync('components/site-shell.tsx', replacementEnd);
        console.log('Footer updated successfully!');
    } else {
        console.log('Could not find end of Footer function!');
    }
} else {
    console.log('Could not find Footer function!');
}
