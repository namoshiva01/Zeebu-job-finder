import { Link } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { APP_NAME, PLAY_STORE_URL } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="font-bold text-xl text-slate-900 hidden sm:block">{APP_NAME}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-slate-600 hover:text-primary font-medium">Home</Link>
            <Link to="/about" className="text-slate-600 hover:text-primary font-medium">About</Link>
            <Link to="/contact" className="text-slate-600 hover:text-primary font-medium">Contact</Link>
            <a 
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-4 text-sm"
            >
              <Download size={16} />
              Get It Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden bg-white border-b border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100 py-4 px-4' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-slate-600 font-medium">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-slate-600 font-medium">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-slate-600 font-medium">Contact</Link>
          <a 
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full"
          >
            <Download size={18} />
            Get It Now
          </a>
        </div>
      </div>
    </nav>
  );
};
