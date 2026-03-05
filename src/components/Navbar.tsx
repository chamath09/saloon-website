import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className={`font-display text-2xl font-bold ${scrolled ? 'text-charcoal' : 'text-white'}`}>
              Luxe<span className="text-rose-gold">Beauty</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-body hover:text-rose-gold transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider ${
                    scrolled ? 'text-charcoal' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                className="bg-rose-gold text-white px-6 py-2 rounded-full font-medium hover:bg-rose-gold/90 transition-colors shadow-md"
              >
                Book Now
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-charcoal' : 'text-white'} hover:text-rose-gold focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg absolute w-full"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-charcoal hover:text-rose-gold block px-3 py-2 rounded-md text-base font-medium text-center"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-rose-gold text-white px-6 py-3 rounded-md font-medium hover:bg-rose-gold/90 transition-colors mt-4"
            >
              Book Now
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
