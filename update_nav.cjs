const fs = require('fs');
let code = fs.readFileSync('components/site-shell.tsx', 'utf8');

const newHeader = `<header className="fixed top-0 left-0 right-0 z-50 flex justify-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
  <div className="relative h-20 w-full max-w-5xl bg-surface rounded-b-[32px] flex items-center justify-between px-8">
    {/* Left concave corner */}
    <div className="absolute top-0 -left-6 w-6 h-6 overflow-hidden hidden md:block">
      <div className="absolute top-0 right-0 w-12 h-12 bg-transparent rounded-full shadow-[0_0_0_40px_#fff8f1]"></div>
    </div>
    {/* Right concave corner */}
    <div className="absolute top-0 -right-6 w-6 h-6 overflow-hidden hidden md:block">
      <div className="absolute top-0 left-0 w-12 h-12 bg-transparent rounded-full shadow-[0_0_0_40px_#fff8f1]"></div>
    </div>
    
    <div className="flex items-center gap-2">
      <Link href="/" className="font-headline-sm text-lg text-[#1a1a1a] font-bold flex items-center gap-2">
        <img src="/tech-ghuru-logo.png" alt="Tech Ghuru" className="h-14 w-auto object-contain" />
      </Link>
    </div>
    
    <nav className="hidden md:flex items-center gap-8">
      {links.map(([label, href]) => (
        <Link key={href} href={href} className={\`font-body-sm text-sm font-semibold transition-colors \${isActive(href) ? "text-[#eb5d1e]" : "text-[#1a1a1a]/70 hover:text-[#eb5d1e]"}\`}>
          {label}
        </Link>
      ))}
    </nav>
    
    <div className="flex items-center gap-2">
      <Link href="/contact" className="inline-flex items-center gap-2 bg-[#eb5d1e] text-white font-bold text-[13px] uppercase tracking-wide px-5 py-2.5 rounded-full hover:bg-[#d64d14] transition-colors">
        <span className="hidden sm:inline">Get a Quote</span>
      </Link>
      <button className="md:hidden w-10 h-10 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[#1a1a1a]" onClick={() => setOpen(!open)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  </div>
  
  <nav className={\`fixed top-24 left-4 right-4 bg-surface rounded-3xl p-6 shadow-2xl border border-[#eaeaea] transition-all duration-300 \${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}\`}>
      <div className="flex flex-col gap-6">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className={\`text-xl font-bold transition-colors \${isActive(href) ? "text-[#eb5d1e]" : "text-[#1a1a1a] hover:text-[#eb5d1e]"}\`} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </div>
  </nav>
</header>`;

const startIdx = code.indexOf('<header');
const endIdx = code.indexOf('</header>') + '</header>'.length;

if (startIdx !== -1 && endIdx !== -1) {
  code = code.substring(0, startIdx) + newHeader + code.substring(endIdx);
  fs.writeFileSync('components/site-shell.tsx', code);
  console.log('Replaced header!');
} else {
  console.log('Could not find header!');
}
