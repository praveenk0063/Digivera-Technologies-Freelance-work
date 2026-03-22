import { useEffect, useState, useRef } from 'react';
import { Menu } from 'lucide-react';
const navLinks = [
{
  label: 'About Us',
  href: '#about'
},
{
  label: 'Services',
  href: '#services'
},
{
  label: 'Contact Us',
  href: '#contact'
}];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);
  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    // Small delay so the user can move between button and dropdown
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <nav className="absolute top-0 left-0 right-0 w-full flex justify-between items-center py-6 px-8 md:px-16 lg:px-24 z-50">
      <button
        onClick={scrollToTop}
        className="flex items-center text-2xl font-bold tracking-wide select-none cursor-pointer bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-accentCyan rounded-sm"
        aria-label="Go to homepage">
        
        <span className="text-accentCyan">DIGI</span>
        <span className="text-white">VERA</span>
      </button>

      {/* Hover zone wrapping hamburger + dropdown */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        
        <button
          aria-label="Open menu"
          className="relative z-[60] text-white hover:text-accentCyan transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accentCyan focus:ring-offset-2 focus:ring-offset-bgDark rounded-sm">
          
          <Menu size={28} strokeWidth={2} />
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-full right-0 mt-4 w-64 bg-[#0e2236]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 ease-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
          role="menu"
          aria-label="Navigation menu">
          
          <div className="py-4 px-4">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) =>
              <li key={link.href}>
                  <button
                  role="menuitem"
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left text-lg font-body font-medium text-white/80 hover:text-accentCyan py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accentCyan">
                  
                    {link.label}
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>);

}