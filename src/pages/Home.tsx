import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Download, Bell, Shield, Smartphone, ArrowRight, Zap, Globe, Users, Search, MapPin, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/SEO';
import { APP_NAME, PLAY_STORE_URL } from '../constants';
import { useRef } from 'react';

export const Home = () => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <div className="mesh-gradient min-h-screen">
      <SEO 
        title={`${APP_NAME} - Premium Government Job Alerts`}
        description={`Experience the future of job hunting with ${APP_NAME}. Fast, reliable, and beautifully designed for the modern job seeker.`}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div 
          style={{ scale: springScale, opacity, y }}
          className="section-padding text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-white/70 tracking-wider uppercase">Trusted by 1M+ Job Seekers</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[1.1] tracking-tight"
          >
            Find Your Future <br />
            <span className="text-accent-gradient">With Precision.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            The most advanced government job notification platform in India. 
            Real-time alerts, qualification-based matching, and a seamless experience.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary group">
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              Download for Android
            </a>
            <button className="btn-glass group">
              Explore Features
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px]" 
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Active Users", value: "1M+", icon: <Users className="text-primary" /> },
              { label: "Job Alerts", value: "5M+", icon: <Zap className="text-accent" /> },
              { label: "States Covered", value: "28", icon: <Globe className="text-blue-400" /> },
              { label: "Success Rate", value: "99%", icon: <ShieldCheck className="text-emerald-400" /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-display font-bold mb-2">{stat.value}</div>
                <div className="text-white/40 text-sm uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="section-padding">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Engineered for <span className="text-accent-gradient">Speed.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 text-xl max-w-2xl mx-auto"
          >
            We've rebuilt the job search experience from the ground up. 
            No fluff, just the data you need, when you need it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Feature */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-2 glass-card group overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 text-primary">
                <Bell size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Instant Notifications</h3>
              <p className="text-white/50 text-lg max-w-md">
                Our proprietary engine scans official gazettes 24/7. 
                Be the first to know when a new opportunity arises.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
          </motion.div>

          {/* Small Feature */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-card group"
          >
            <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-8 text-accent">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Verified Data</h3>
            <p className="text-white/50">
              Every listing is cross-checked with official government sources.
            </p>
          </motion.div>

          {/* Small Feature */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-card group"
          >
            <div className="w-14 h-14 bg-blue-400/20 rounded-2xl flex items-center justify-center mb-8 text-blue-400">
              <Smartphone size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Native UI</h3>
            <p className="text-white/50">
              A buttery smooth experience optimized for all Android devices.
            </p>
          </motion.div>

          {/* Large Feature */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-2 glass-card group relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-400/20 rounded-2xl flex items-center justify-center mb-8 text-emerald-400">
                <Zap size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Smart Filters</h3>
              <p className="text-white/50 text-lg max-w-md">
                Filter by qualification, state, or department. 
                Find exactly what you're looking for in seconds.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl group-hover:bg-emerald-400/10 transition-colors" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card text-center py-20 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to start your <br /> career journey?</h2>
            <p className="text-white/50 text-xl mb-12 max-w-xl mx-auto">
              Join thousands of successful candidates who found their dream job through {APP_NAME}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Download size={20} />
                Get Started for Free
              </a>
            </div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[120px] pointer-events-none" />
        </motion.div>
      </section>
    </div>
  );
};
