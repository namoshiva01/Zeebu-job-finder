import { Download, Bell, Smartphone, ArrowRight, Zap, Globe, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { APP_NAME, PLAY_STORE_URL } from '../constants';

export const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <SEO 
        title={`${APP_NAME} - Premium Government Job Alerts`}
        description={`Experience the future of job hunting with ${APP_NAME}. Fast, reliable, and beautifully designed for the modern job seeker.`}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-slate-600 tracking-wider uppercase">Trusted by 1M+ Job Seekers</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-display font-bold mb-8 leading-[1] tracking-tighter text-slate-900"
          >
            Find Your Future <br />
            <span className="text-vibrant-gradient">With Precision.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            The most advanced government job notification platform in India. 
            Real-time alerts, qualification-based matching, and a seamless experience.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={PLAY_STORE_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              <Download size={20} />
              Download for Android
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-glass"
            >
              Explore Features
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" 
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Active Users", value: "1M+", icon: <Users className="text-primary" /> },
              { label: "Job Alerts", value: "5M+", icon: <Zap className="text-accent" /> },
              { label: "States Covered", value: "28", icon: <Globe className="text-success" /> },
              { label: "Success Rate", value: "99%", icon: <ShieldCheck className="text-emerald-500" /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="flex justify-center mb-4"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl font-display font-bold mb-2 text-slate-900">{stat.value}</div>
                <div className="text-slate-400 text-sm uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-slate-900"
          >
            Engineered for <span className="text-vibrant-gradient">Speed.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-xl max-w-2xl mx-auto"
          >
            We've rebuilt the job search experience from the ground up. 
            No fluff, just the data you need, when you need it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Feature */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="md:col-span-2 glass-card group overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
                <Bell size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 text-slate-900">Instant Notifications</h3>
              <p className="text-slate-500 text-lg max-w-md">
                Our proprietary engine scans official gazettes 24/7. 
                Be the first to know when a new opportunity arises.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Small Feature */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass-card group"
          >
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 text-accent">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">Verified Data</h3>
            <p className="text-slate-500">
              Every listing is cross-checked with official government sources.
            </p>
          </motion.div>

          {/* Small Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass-card group"
          >
            <div className="w-14 h-14 bg-success/10 rounded-2xl flex items-center justify-center mb-8 text-success">
              <Smartphone size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">Native UI</h3>
            <p className="text-slate-500">
              A buttery smooth experience optimized for all Android devices.
            </p>
          </motion.div>

          {/* Large Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="md:col-span-2 glass-card group relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 text-emerald-600">
                <Zap size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 text-slate-900">Smart Filters</h3>
              <p className="text-slate-500 text-lg max-w-md">
                Filter by qualification, state, or department. 
                Find exactly what you're looking for in seconds.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-8 text-center py-20 relative overflow-hidden shadow-2xl shadow-primary/20"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white">Ready to start your <br /> career journey?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-xl mx-auto">
              Join thousands of successful candidates who found their dream job through {APP_NAME}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={PLAY_STORE_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg shadow-xl"
              >
                <Download size={20} />
                Get Started for Free
              </motion.a>
            </div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/10 blur-[120px] pointer-events-none" />
        </motion.div>
      </section>
    </div>
  );
};
