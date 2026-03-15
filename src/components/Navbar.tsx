import { Link } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { APP_NAME, PLAY_STORE_URL } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          w-full max-w-7xl flex items-center justify-between px-6 h-16 rounded-full 
          backdrop-blur-xl border transition-all duration-500 pointer-events-auto
          ${scrolled 
            ? 'bg-black/40 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
            : 'bg-transparent border-transparent'}
        `}
      >
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
            <span className="text-white font-bold text-2xl">Z</span>
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-white">{APP_NAME}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-white/70 hover:text-white font-medium transition-colors">Home</Link>
          <Link to="/about" className="text-white/70 hover:text-white font-medium transition-colors">About</Link>
          <Link to="/contact" className="text-white/70 hover:text-white font-medium transition-colors">Contact</Link>
          <a 
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/20 flex items-center gap-2"
          >
            <Download size={18} />
            Get App
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:hidden pointer-events-auto z-[60]"
          >
            <div className="flex flex-col gap-6">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white/70">Home</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white/70">About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white/70">Contact</Link>
              <a 
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
