import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { PLAY_STORE_URL, APP_NAME } from './constants';
import { X, Download, Bell, Sparkles } from 'lucide-react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const AppInstallPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('popupDismissed');
      if (!dismissed) setShow(true);
    }, 5000); // Show after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
          exit={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
          className="fixed bottom-24 md:bottom-8 left-4 right-4 md:left-auto md:right-8 z-[60] max-w-sm glass-card p-8 shadow-2xl border-primary/20"
        >
          <div className="absolute -top-3 -left-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
            <Bell size={18} />
          </div>
          
          <button 
            onClick={() => {
              setShow(false);
              localStorage.setItem('popupDismissed', 'true');
            }}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex items-start gap-6">
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-display font-bold text-3xl shadow-xl shadow-primary/20"
            >
              {APP_NAME[0]}
            </motion.div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-display font-bold text-slate-900 text-xl">Get the App</h4>
                <Sparkles size={16} className="text-accent animate-pulse" />
              </div>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed font-light">
                Never miss a government job alert again. Install our app now for real-time notifications!
              </p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-3 text-sm w-full group"
              >
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                Get It Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            </Routes>
          </PageWrapper>
        </main>
        <Footer />
        <AppInstallPopup />
      </div>
    </Router>
  );
}

