import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { APP_NAME } from '../constants';
import { Bell, Github, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 text-slate-900 pt-32 pb-12 border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20">
              <Bell size={24} className="text-white" />
            </div>
            <span className="font-display font-bold text-3xl tracking-tighter text-slate-900">{APP_NAME}</span>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-md text-xl leading-relaxed font-light mb-10"
          >
            The future of government job discovery. We empower job seekers with real-time data, 
            personalized alerts, and a seamless mobile experience.
          </motion.p>
          <div className="flex gap-4">
            {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all shadow-sm"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="font-display font-bold text-xl mb-8 text-slate-900">Platform</h4>
          <ul className="space-y-5 text-slate-500 font-light text-lg">
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Contact', path: '/contact' },
              { label: 'Privacy Policy', path: '/privacy-policy' },
              { label: 'Terms & Conditions', path: '/terms-and-conditions' }
            ].map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="hover:text-primary transition-colors flex items-center gap-2 group">
                  {link.label}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="font-display font-bold text-xl mb-8 text-slate-900">Support</h4>
          <ul className="space-y-5 text-slate-500 font-light text-lg">
            <li>
              <a href="mailto:support@zeebu.app" className="hover:text-primary transition-colors flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</span>
                support@zeebu.app
              </a>
            </li>
            <li>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</span>
                Gurugram, Haryana, India
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="max-w-7xl mx-auto px-6 mt-32 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 text-sm font-light"
      >
        <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        <p className="flex items-center gap-2 italic">
          Built with passion for the next generation of job seekers.
        </p>
      </motion.div>
    </footer>
  );
};
