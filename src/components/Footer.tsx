import { Link } from 'react-router-dom';
import { APP_NAME } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 text-slate-900 pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-white font-bold text-2xl">Z</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-slate-900">{APP_NAME}</span>
          </div>
          <p className="text-slate-500 max-w-md text-lg leading-relaxed">
            The future of government job discovery. We empower job seekers with real-time data, 
            personalized alerts, and a seamless mobile experience.
          </p>
        </div>
        
        <div>
          <h4 className="font-display font-bold text-lg mb-6 text-slate-900">Platform</h4>
          <ul className="space-y-4 text-slate-500">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6 text-slate-900">Connect</h4>
          <ul className="space-y-4 text-slate-500">
            <li><a href="mailto:support@zeebu.in" className="hover:text-primary transition-colors">support@zeebu.in</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        <p className="flex items-center gap-2 italic">
          Built for the next generation of job seekers.
        </p>
      </div>
    </footer>
  );
};
