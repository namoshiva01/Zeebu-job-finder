import { Link } from 'react-router-dom';
import { APP_NAME } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="font-bold text-xl">{APP_NAME}</span>
          </div>
          <p className="text-slate-400 max-w-md">
            The most trusted app for government job seekers in India. Get instant alerts for Central and State government jobs, Railway, Banking, and more.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-slate-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Email: support@govtjobfinder.in</li>
            <li>Help Center</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved. Made in India.</p>
      </div>
    </footer>
  );
};
