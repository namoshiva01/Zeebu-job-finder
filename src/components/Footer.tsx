import { Link } from 'react-router-dom';
import { APP_NAME } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">Z</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">{APP_NAME}</span>
          </div>
          <p className="text-white/40 max-w-md text-lg leading-relaxed">
            The future of government job discovery. We empower job seekers with real-time data, 
            personalized alerts, and a seamless mobile experience.
          </p>
        </div>
        
        <div>
          <h4 className="font-display font-bold text-lg mb-6 text-white">Platform</h4>
          <ul className="space-y-4 text-white/40">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6 text-white">Connect</h4>
          <ul className="space-y-4 text-white/40">
            <li><a href="mailto:support@zeebu.in" className="hover:text-white transition-colors">support@zeebu.in</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-sm">
        <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        <p className="flex items-center gap-2 italic">
          Built for the next generation of job seekers.
        </p>
      </div>
    </footer>
  );
};
