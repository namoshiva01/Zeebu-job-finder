import { Link, useLocation } from 'react-router-dom';
import { Download, Menu, X, Bell } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue } from 'motion/react';
import { APP_NAME, PLAY_STORE_URL } from '../constants';
import { MagneticButton } from '../components/Motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 80, damping: 15 }}
          className={`
            w-full max-w-7xl flex items-center justify-between px-6 h-16 md:h-20 rounded-full 
            backdrop-blur-xl border transition-all duration-700 pointer-events-auto
            ${scrolled 
              ? 'bg-white/80 border-slate-200/50 shadow-2xl shadow-slate-200/30' 
              : 'bg-white/20 border-white/30 shadow-none'}
          `}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30"
            >
              <Bell size={24} className="text-white" />
            </motion.div>
            <span className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-slate-900 group-hover:text-primary transition-colors duration-300">
              {APP_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {['Home', 'About', 'Contact'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;
              
              return (
                <Link 
                  key={item}
                  to={path} 
                  className={`relative font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300 group ${
                    isActive ? 'text-primary' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item}
                  <motion.span 
                    initial={false}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    className="absolute -bottom-2 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" 
                  />
                </Link>
              );
            })}
            <a 
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-8 !py-3.5 !text-sm shadow-[0_10px_30px_rgba(37,99,235,0.2)]"
            >
              <Download size={18} />
              Get App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button 
              whileTap={{ scale: 0.8 }}
              onClick={() => setIsOpen(!isOpen)} 
              className="w-12 h-12 flex items-center justify-center text-slate-900 bg-slate-50 rounded-full border border-slate-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Nav */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.9, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.9, rotateX: -15 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="fixed inset-x-4 top-28 bg-white/90 backdrop-blur-2xl border border-slate-200 shadow-[0_30px_60px_rgba(0,0,0,0.1)] rounded-[2.5rem] p-8 md:hidden pointer-events-auto z-[60] origin-top"
            >
              <div className="flex flex-col gap-8">
                {['Home', 'About', 'Contact'].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                      onClick={() => setIsOpen(false)} 
                      className={`text-3xl font-display font-bold tracking-tight transition-colors ${
                        location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                          ? 'text-primary'
                          : 'text-slate-900 hover:text-primary'
                      }`}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-6 text-xl"
                >
                  <Download size={24} />
                  Download App
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
