"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { ReactNode, CSSProperties } from "react";
import { ArrowUpRight, Menu, X, Instagram, Linkedin, Dribbble, Asterisk, Rocket } from "lucide-react";

const links = [["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Portfolio", "/portfolio"], ["Blog", "/blog"], ["Careers", "/careers"], ["Contact", "/contact"]];
export function SiteShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return path === "/";
    return path.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [path]);

  // Close mobile menu on Escape key press and manage scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.08)] pointer-events-none">
        <div className="relative h-16 sm:h-20 w-full max-w-5xl bg-surface rounded-b-[24px] sm:rounded-b-[32px] flex items-center justify-between px-3 sm:px-6 md:px-8 pointer-events-auto transition-all">
          {/* Left concave corner - only rendered when screen has sufficient outer margin */}
          <div className="absolute top-0 -left-6 w-6 h-6 overflow-hidden hidden xl:block pointer-events-none">
            <div className="absolute top-0 right-0 w-12 h-12 bg-transparent rounded-full shadow-[0_0_0_40px_#fff8f1]"></div>
          </div>
          {/* Right concave corner - only rendered when screen has sufficient outer margin */}
          <div className="absolute top-0 -right-6 w-6 h-6 overflow-hidden hidden xl:block pointer-events-none">
            <div className="absolute top-0 left-0 w-12 h-12 bg-transparent rounded-full shadow-[0_0_0_40px_#fff8f1]"></div>
          </div>

          <div className="flex items-center gap-2 overflow-hidden max-h-12 sm:max-h-16">
            <Link href="/" className="flex items-center gap-2 shrink-0 max-h-12 sm:max-h-16" aria-label="Tech Ghuru Homepage">
              <img
                src="/tech-ghuru-logo.png"
                alt="Tech Ghuru"
                className="h-10 sm:h-12 md:h-14 w-auto max-h-10 sm:max-h-12 md:max-h-14 max-w-[160px] sm:max-w-[200px] object-contain shrink-0"
                style={{ maxHeight: "44px", width: "auto" }}
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={`font-body-sm text-sm font-semibold transition-colors py-1 ${
                  isActive(href)
                    ? "text-[#eb5d1e]"
                    : "text-[#1a1a1a]/75 hover:text-[#eb5d1e]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#eb5d1e] text-white font-bold text-xs sm:text-[13px] uppercase tracking-wide px-3 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-[#d64d14] active:scale-95 transition-all shadow-sm shadow-[#eb5d1e]/20"
              aria-label="Get a Quote"
            >
              <span className="sm:hidden font-bold">Quote</span>
              <span className="hidden sm:inline">Get a Quote</span>
            </Link>
            <button
              type="button"
              className="md:hidden w-10 h-10 rounded-full bg-[#f0f0f0] hover:bg-[#e4e4e4] active:scale-95 flex items-center justify-center text-[#1a1a1a] transition-all shrink-0"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Backdrop overlay for mobile menu */}
        {open && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden pointer-events-auto animate-in fade-in duration-200"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Navigation Drawer/Dropdown */}
        <nav
          className={`fixed top-20 sm:top-24 left-3 right-3 sm:left-4 sm:right-4 max-h-[calc(100dvh-6.5rem)] overflow-y-auto bg-surface rounded-3xl p-6 shadow-2xl border border-[#eaeaea] transition-all duration-300 z-50 md:hidden pointer-events-auto ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4 pointer-events-none"
          }`}
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-3">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={`text-lg sm:text-xl font-bold py-2 px-3 rounded-xl transition-colors ${
                  isActive(href)
                    ? "text-[#eb5d1e] bg-[#eb5d1e]/10"
                    : "text-[#1a1a1a] hover:text-[#eb5d1e] hover:bg-black/5"
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-[#eaeaea]">
              <Link
                href="/contact"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#eb5d1e] text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-[#eb5d1e]/25 hover:bg-[#d64d14] active:scale-98 transition-all"
                onClick={() => setOpen(false)}
              >
                <span>Get a Free Quote</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="min-w-0 w-full">{children}</main>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#eb5d1e] text-white pb-12 mt-0 overflow-hidden">
      {/* Cutout Container (matches nav bar size) - only active on wide desktop */}
      <div className="absolute top-0 left-0 right-0 h-0 flex justify-center pointer-events-none z-0">
        <div className="relative h-20 w-full max-w-5xl bg-white rounded-b-[32px] hidden xl:block">
          {/* Left concave corner */}
          <div className="absolute top-0 -left-6 w-6 h-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-12 h-12 bg-transparent rounded-full shadow-[0_0_0_40px_#ffffff]"></div>
          </div>
          {/* Right concave corner */}
          <div className="absolute top-0 -right-6 w-6 h-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-12 h-12 bg-transparent rounded-full shadow-[0_0_0_40px_#ffffff]"></div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16">
          <div className="md:col-span-4 flex flex-col space-y-6 pt-12 md:pt-[130px] relative z-20">
            <Link href="/" className="font-headline-sm text-xl text-white font-bold flex items-center gap-2">
              <img
                src="/tech-ghuru-logo.png"
                alt="Tech Ghuru"
                className="h-16 sm:h-20 w-auto object-contain -ml-2"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <h3 className="font-headline-md text-2xl font-bold tracking-tight">
              Create once.
              <br />
              <em className="text-white/90 font-normal">Scale anytime.</em>
            </h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-[320px]">
              Tech Ghuru saves your business hours by delivering premium web development, strategy, and digital marketing—so you can scale faster.
            </p>
            <div>
              <Button
                href="/contact"
                light={true}
                className="w-full sm:w-auto inline-flex"
              >
                Get a Quote
              </Button>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 md:pt-[130px] relative z-20">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-[11px]">
                Menu
              </h4>
              {links.slice(0, 5).map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium py-0.5"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col space-y-3 sm:space-y-4">
              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-[11px]">
                Navigation
              </h4>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-sm font-medium py-0.5">
                Contact
              </Link>
              <Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm font-medium py-0.5">
                Roadmap
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium py-0.5">
                Privacy policy
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium py-0.5">
                Terms of service
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium py-0.5">
                Customer portal
              </Link>
            </div>

            <div className="col-span-2 sm:col-span-1 flex flex-col space-y-3 sm:space-y-4">
              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-[11px]">
                More services
              </h4>
              <Link href="/services/web-developing" className="text-white/80 hover:text-white transition-colors text-sm font-medium py-0.5">
                Web Development
              </Link>
              <Link href="/services/digital-marketing" className="text-white/80 hover:text-white transition-colors text-sm font-medium py-0.5">
                Digital Marketing
              </Link>
              <Link href="/services/product-design" className="text-white/80 hover:text-white transition-colors text-sm font-medium py-0.5">
                Product Design
              </Link>
              <Link href="/services/video-ads" className="text-white/80 hover:text-white transition-colors text-sm font-medium py-0.5">
                Video Ads & Editing
              </Link>
              <Link href="/services/content-writing" className="text-white/80 hover:text-white transition-colors text-sm font-medium py-0.5">
                Content Writing
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>© {new Date().getFullYear()} Tech Ghuru. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <p>Built with 🤍 by Tech Ghuru</p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Tech Ghuru Instagram" className="text-white/80 hover:text-white transition-colors p-1">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Tech Ghuru LinkedIn" className="text-white/80 hover:text-white transition-colors p-1">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Tech Ghuru Dribbble" className="text-white/80 hover:text-white transition-colors p-1">
                <Dribbble size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Eyebrow({
  children,
  style,
  className = "",
}: {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-label-sm text-xs font-bold tracking-widest uppercase border border-primary/20 shrink-0 ${className}`}
      style={style}
    >
      <Asterisk size={13} className="shrink-0" />
      <span>{children}</span>
    </div>
  );
}

export function Button({
  href = "/contact",
  children,
  light = false,
  className = "",
}: {
  href?: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 font-label-lg font-bold text-sm sm:text-base rounded-xl px-6 py-3.5 transition-all duration-200 active:scale-95 ${
        light
          ? "bg-white text-[#eb5d1e] hover:bg-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
          : "bg-[#eb5d1e] text-white hover:bg-[#d64d14] shadow-[0_4px_15px_rgba(235,93,30,0.3)]"
      } ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight size={17} className="shrink-0" />
    </Link>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(node);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "in-view" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}





