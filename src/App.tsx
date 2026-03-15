import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { PLAY_STORE_URL } from './constants';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download } from 'lucide-react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Auto redirect mobile users logic
const useMobileRedirect = () => {
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const hasRedirected = sessionStorage.getItem('hasRedirected');
    
    if (isMobile && !hasRedirected && window.location.pathname === '/') {
      // We don't auto-redirect immediately to avoid bad UX, 
      // but we could if requested. Instead, we show a prominent popup.
      // If the user explicitly wants auto-redirect:
      // window.location.href = PLAY_STORE_URL;
      // sessionStorage.setItem('hasRedirected', 'true');
    }
  }, []);
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

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-24 md:bottom-8 left-4 right-4 md:left-auto md:right-8 z-[60] max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 md:p-6"
      >
        <button 
          onClick={() => {
            setShow(false);
            localStorage.setItem('popupDismissed', 'true');
          }}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          <X size={20} />
        </button>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl">
            Z
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Get the App</h4>
            <p className="text-sm text-slate-600 mb-4">Never miss a government job alert again. Install our app now!</p>
            <a 
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 text-sm w-full"
            >
              <Download size={16} />
              Get It Now
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  useMobileRedirect();

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
        <AppInstallPopup />
      </div>
    </Router>
  );
}

