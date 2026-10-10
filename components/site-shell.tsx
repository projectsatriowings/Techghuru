"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { ReactNode, CSSProperties } from "react";
import { ArrowUpRight, Menu, X, Instagram, Linkedin, Dribbble, Asterisk, Rocket } from "lucide-react";

const links = [["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Portfolio", "/portfolio"], ["Blog", "/blog"], ["Careers", "/careers"], ["Contact", "/contact"]];
export function SiteShell({ children }: { children: ReactNode }) {
 const path = usePathname(); const [open, setOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const isActive = (href: string) => {
   if (href === '/') return path === '/';
   return path.startsWith(href);
 };
 useEffect(() => {
   const handleScroll = () => setScrolled(window.scrollY > 80);
   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);
  return <><header className="fixed top-0 left-0 right-0 z-50 flex justify-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
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
        <img src="/tech-ghuru-logo.png" alt="Tech Ghuru" className="h-16 w-auto object-contain" />
      </Link>
    </div>
    
    <nav className="hidden md:flex items-center gap-8">
      {links.map(([label, href]) => (
        <Link key={href} href={href} className={`font-body-sm text-sm font-semibold transition-colors ${isActive(href) ? "text-[#eb5d1e]" : "text-[#1a1a1a]/70 hover:text-[#eb5d1e]"}`}>
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
  
  <nav className={`fixed top-24 left-4 right-4 bg-surface rounded-3xl p-6 shadow-2xl border border-[#eaeaea] transition-all duration-300 ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}`}>
      <div className="flex flex-col gap-6">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className={`text-xl font-bold transition-colors ${isActive(href) ? "text-[#eb5d1e]" : "text-[#1a1a1a] hover:text-[#eb5d1e]"}`} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </div>
  </nav>
</header><main>{children}</main><Footer/></>;
}

function Footer() { 
  return (
    <footer className="relative bg-[#eb5d1e] text-white pb-12 mt-0">
      
      {/* Cutout Container (matches nav bar size) */}
      <div className="absolute top-0 left-0 right-0 h-0 flex justify-center pointer-events-none z-0">
        <div className="relative h-20 w-full max-w-5xl bg-white rounded-b-[32px] hidden md:block">
          {/* Left concave corner */}
          <div className="absolute top-0 -left-6 w-6 h-6 overflow-hidden hidden md:block">
            <div className="absolute top-0 right-0 w-12 h-12 bg-transparent rounded-full shadow-[0_0_0_40px_#ffffff]"></div>
          </div>
          {/* Right concave corner */}
          <div className="absolute top-0 -right-6 w-6 h-6 overflow-hidden hidden md:block">
            <div className="absolute top-0 left-0 w-12 h-12 bg-transparent rounded-full shadow-[0_0_0_40px_#ffffff]"></div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 flex flex-col space-y-6 md:pt-[130px] pt-16 relative z-20">
            <Link href="/" className="font-headline-sm text-xl text-white font-bold flex items-center gap-2">
              <img src="/tech-ghuru-logo.png" alt="Tech Ghuru" className="h-20 w-auto object-contain -ml-2" style={{ filter: "brightness(0) invert(1)" }} />
            </Link>
            <h3 className="font-headline-md text-2xl font-bold tracking-tight">Create once.<br/><em className="text-white/90 font-normal">Scale anytime.</em></h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-[280px]">Tech Ghuru saves your business hours by delivering premium web development, strategy, and digital marketing—so you can scale faster.</p>
            <div>
               <Button href="/contact" className="bg-white text-[#eb5d1e] hover:bg-gray-100 rounded-[12px] px-6 py-3 flex items-center gap-2 inline-flex border-none font-bold shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                 Get a Quote
               </Button>
            </div>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 md:pt-[130px] pt-16 relative z-20">
            <div className="flex flex-col space-y-4">
              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-[11px]">Menu</h4>
              {links.slice(0, 5).map(([label, href]) => (
                <Link key={href} href={href} className="text-white/80 hover:text-white transition-colors text-sm font-medium">{label}</Link>
              ))}
            </div>
            
            <div className="flex flex-col space-y-4">
              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-[11px]">Navigation</h4>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Contact</Link>
              <Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Roadmap</Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Privacy policy</Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Terms of service</Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Customer portal</Link>
            </div>
            
            <div className="flex flex-col space-y-4">
              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-[11px]">More services</h4>
              <Link href="/services/web-developing" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Web Development</Link>
              <Link href="/services/digital-marketing" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Digital Marketing</Link>
              <Link href="/services/product-design" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Product Design</Link>
              <Link href="/services/video-ads" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Video Ads & Editing</Link>
              <Link href="/services/content-writing" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Content Writing</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Tech Ghuru. All rights reserved.</p>
          <div className="flex items-center gap-4">
             <p>Built with 🤍 by Tech Ghuru</p>
             <div className="flex items-center gap-3">
               <Link href="#" className="text-white/80 hover:text-white transition-colors"><Instagram size={16}/></Link>
               <Link href="#" className="text-white/80 hover:text-white transition-colors"><Linkedin size={16}/></Link>
               <Link href="#" className="text-white/80 hover:text-white transition-colors"><Dribbble size={16}/></Link>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



export function Eyebrow({children, style, className=""}: {children: ReactNode; style?: React.CSSProperties; className?: string}){return <div className={`eyebrow ${className}`} style={style}><Asterisk size={14}/>{children}</div>}
export function Button({href="/contact",children,light=false,className=""}: {href?: string; children: ReactNode; light?: boolean; className?: string}){return <Link href={href} className={`button ${light?"button-light":""} ${className}`}>{children}<ArrowUpRight size={17}/></Link>}
export function Reveal({children,className="",delay=0}: {children: ReactNode; className?: string; delay?: number}){const ref=useRef<HTMLDivElement | null>(null);const [visible,setVisible]=useState(false);useEffect(()=>{const node=ref.current;if(!node)return;const io=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);io.unobserve(node)}},{threshold:.12,rootMargin:"0px 0px -32px 0px"});io.observe(node);return()=>io.disconnect()},[]);return <div ref={ref} className={`reveal ${visible?"in-view":""} ${className}`} style={{"--delay":`${delay}ms`} as CSSProperties}>{children}</div>}




