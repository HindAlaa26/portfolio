import { useState, useEffect } from 'react';
import { Menu, X, Code2, Download, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Experience & Education' },
    { id: 'certifications', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link tracker on scroll
      const sections = ['hero', ...navLinks.map((l) => l.id)];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-[#090514]/75 backdrop-blur-md border-b border-purple-500/10 shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('hero')}
            className="flex items-center space-x-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center group-hover:border-purple-500/60 transition-all duration-300">
              <Code2 className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-left">
              <span className="block text-sm font-display font-bold tracking-wider text-white group-hover:text-purple-300 transition-colors duration-300">
                {PERSONAL_INFO.name}
              </span>
              <span className="block text-[10px] font-mono text-purple-400 tracking-widest uppercase">
                Flutter Developer
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav id="desktop-navbar" className="hidden md:flex items-center space-x-1 bg-white/[0.02] border border-white/[0.05] p-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              id="cta-nav-contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/10 hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Talk</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-gray-400 hover:text-white focus:outline-none transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer-menu"
        className={`md:hidden fixed inset-x-0 top-[73px] bottom-0 z-40 bg-[#090514]/98 backdrop-blur-xl border-t border-white/[0.05] transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`mobile-nav-link-${link.id}`}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-5 py-4 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-between transition-all duration-300 ${
                activeSection === link.id
                  ? 'bg-purple-600/15 border border-purple-500/30 text-purple-300'
                  : 'bg-white/[0.02] border border-white/[0.05] text-gray-300 hover:text-white'
              }`}
            >
              <span>{link.label}</span>
              <span className={`w-1.5 h-1.5 rounded-full ${activeSection === link.id ? 'bg-purple-400 animate-ping' : 'bg-transparent'}`} />
            </button>
          ))}

          <div className="pt-4 flex flex-col space-y-3">
            <a
              href="#contact"
              id="mobile-nav-cta-talk"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="flex items-center justify-center space-x-2 px-5 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center"
            >
              <span>Hire Me</span>
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
