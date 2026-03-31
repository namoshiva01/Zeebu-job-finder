import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, Globe, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { APP_NAME } from '../constants';
import { MagneticButton, TextReveal, TiltCard } from '../components/Motion';

export const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { scrollYProgress } = useScroll();
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="min-h-screen relative pt-32 overflow-hidden">
      <SEO 
        title={`Contact Us - ${APP_NAME}`}
        description={`Get in touch with the ${APP_NAME} team. We're here to help you with any questions or feedback.`}
      />

      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          style={{ y: blob1Y }}
          className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-blob" 
        />
        <motion.div 
          style={{ y: blob2Y }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] animate-blob-delayed" 
        />
      </div>

      <section className="section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-primary/15 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8"
            >
              Get In Touch
            </motion.div>
            <h1 className="text-7xl md:text-9xl font-display font-bold mb-10 text-slate-900 tracking-tighter leading-[0.9]">
              <TextReveal text="Let's" /> <br />
              <TextReveal text="Connect." className="text-vibrant-gradient" />
            </h1>
            <p className="text-2xl text-slate-600 font-light mb-16 leading-relaxed max-w-xl">
              Have questions about {APP_NAME}? Our team is here to support your journey. 
              Reach out and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail />, label: "Email Us", value: "support@zeebu.app", color: "text-primary" },
                { icon: <Phone />, label: "Call Us", value: "+91 98765 43210", color: "text-accent" },
                { icon: <MapPin />, label: "Visit Us", value: "Cyber Hub, Gurugram, India", color: "text-success" },
                { icon: <Globe />, label: "Social", value: "@zeebuapp", color: "text-emerald-500" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className={`w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center ${item.color} shadow-sm group-hover:shadow-md transition-all`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-xl font-display font-bold text-slate-900">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="glass-card p-10 md:p-16 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-24 h-24 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-8"
                  >
                    <CheckCircle size={48} />
                  </motion.div>
                  <h2 className="text-4xl font-display font-bold mb-4 text-slate-900">Message Sent!</h2>
                  <p className="text-slate-600 text-lg font-light mb-10">
                    Thank you for reaching out. We'll be in touch soon.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="btn-glass"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-slate-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-slate-900"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                    <input 
                      required
                      type="text" 
                      placeholder="How can we help?"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Your message here..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-slate-900 resize-none"
                    />
                  </div>
                  <MagneticButton>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={formState === 'submitting'}
                      className="btn-primary w-full py-5 text-xl relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {formState === 'submitting' ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-display font-bold mb-16 text-center text-slate-900 tracking-tight"
          >
            Common <span className="text-vibrant-gradient">Questions.</span>
          </motion.h2>
          <div className="space-y-6">
            {[
              { q: "Is the app free to use?", a: "Yes, {APP_NAME} is completely free for all aspirants." },
              { q: "How often are jobs updated?", a: "Our engine scans for updates every 15 minutes, 24/7." },
              { q: "Do you cover all states in India?", a: "Yes, we cover central government and all 28 states + UTs." }
            ].map((faq, i) => (
              <TiltCard key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card !p-8 hover:border-primary/30 cursor-pointer group h-full"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-display font-bold text-slate-900">{faq.q}</h3>
                    <ArrowRight className="text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                  <p className="mt-4 text-slate-600 text-lg font-light">{faq.a.replace('{APP_NAME}', APP_NAME)}</p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
