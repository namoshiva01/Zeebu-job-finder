import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';
import { APP_NAME } from '../constants';
import { useState, FormEvent } from 'react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">
      <SEO 
        title={`Contact Us - ${APP_NAME}`}
        description={`Have questions or feedback about ${APP_NAME}? Get in touch with our support team.`}
      />

      <section className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-9xl font-display font-bold mb-8 tracking-tighter leading-[1] text-slate-900">
            Let's <span className="text-vibrant-gradient">Connect.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Have a question or want to partner with us? Our team is ready to help you navigate 
            the future of job discovery.
          </p>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold mb-12 text-slate-900">Contact Details</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-slate-50 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100"
                >
                  <Mail size={28} />
                </motion.div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2 text-slate-900">Email Us</h4>
                  <p className="text-slate-500 text-lg">support@zeebu.in</p>
                  <p className="text-slate-400 text-sm mt-2 italic">Response time: &lt; 24 hours</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-14 h-14 bg-slate-50 text-accent rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100"
                >
                  <MessageSquare size={28} />
                </motion.div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2 text-slate-900">Feedback</h4>
                  <p className="text-slate-500 text-lg">We value your input. Help us build the best platform for aspirants.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-slate-50 text-success rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100"
                >
                  <MapPin size={28} />
                </motion.div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2 text-slate-900">Location</h4>
                  <p className="text-slate-500 text-lg">Digital First, India.</p>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 p-8 glass-card border-primary/10 bg-primary/5"
            >
              <h4 className="font-display font-bold text-xl mb-4 text-primary">Note for Aspirants</h4>
              <p className="text-slate-500 leading-relaxed">
                Zeebu is an information platform. We do not provide jobs directly and we are not 
                affiliated with any government department. For real-time alerts, please use our mobile app.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            {submitted ? (
              <div className="text-center py-20">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-100"
                >
                  <Send size={36} />
                </motion.div>
                <h3 className="text-3xl font-display font-bold mb-4 text-slate-900">Message Sent!</h3>
                <p className="text-slate-500 text-lg">Thank you for reaching out. We'll get back to you soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-primary font-bold hover:text-accent transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest">Message</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="btn-primary w-full py-5 text-lg font-bold"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
