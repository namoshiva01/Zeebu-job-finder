import { useState, useEffect, useRef } from 'react';
import { Download, Bell, Smartphone, ArrowRight, Zap, Globe, Users, ShieldCheck, Search, CheckCircle2, Star, TrendingUp } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { SEO } from '../components/SEO';
import { APP_NAME, PLAY_STORE_URL } from '../constants';
import { MagneticButton, TiltCard, TextReveal } from '../components/Motion';

// --- Helper Components ---

const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = (totalMiliseconds / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const blobX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const blobY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  return (
    <div className="min-h-screen relative bg-white">
      <SEO 
        title={`${APP_NAME} - Premium Government Job Alerts`}
        description={`Experience the future of job hunting with ${APP_NAME}. Fast, reliable, and beautifully designed for the modern job seeker.`}
      />

      {/* Interactive Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          style={{ x: blobX, y: blobY }}
          className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[120px] opacity-30" 
        />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] animate-blob-delayed" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-success/10 rounded-full blur-[120px] animate-blob-slow" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 mb-10 shadow-sm backdrop-blur-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-slate-600 tracking-[0.2em] uppercase">Trusted by 1M+ Aspirants</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-7xl md:text-[11rem] font-display font-bold mb-10 leading-[0.8] tracking-[-0.06em] text-slate-900">
              <TextReveal text="Find Your Future" />
              <br />
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-vibrant-gradient inline-block"
              >
                With Precision.
              </motion.span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-xl md:text-3xl text-slate-600 max-w-4xl mx-auto mb-16 leading-relaxed font-light"
          >
            The most advanced government job notification platform in India. 
            Real-time alerts, qualification-based matching, and a seamless experience.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href={PLAY_STORE_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary text-base"
            >
              <Download size={20} />
              Download for Android
            </a>
            <button 
              className="btn-secondary text-base"
            >
              Explore Features
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Floating Decorative Elements */}
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] hidden lg:block"
        >
          <div className="w-32 h-32 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-2xl flex items-center justify-center text-primary transform rotate-12">
            <Bell size={48} />
          </div>
        </motion.div>

        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[10%] hidden lg:block"
        >
          <div className="w-40 h-40 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-[2.5rem] shadow-2xl flex items-center justify-center text-accent transform -rotate-12">
            <ShieldCheck size={64} />
          </div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <div className="py-12 bg-slate-900 overflow-hidden relative z-10 shadow-2xl">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-16">
              <span className="text-white/50 text-xs font-bold tracking-[0.4em] uppercase">Latest Updates:</span>
              <span className="text-white text-2xl font-display font-medium flex items-center gap-4">
                <TrendingUp size={20} className="text-primary" />
                UPSC Civil Services 2026 Notification Out
              </span>
              <span className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
              <span className="text-white text-2xl font-display font-medium flex items-center gap-4">
                <Star size={20} className="text-accent" />
                SSC CGL Tier II Results Declared
              </span>
              <span className="w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(124,58,237,0.8)]" />
              <span className="text-white text-2xl font-display font-medium flex items-center gap-4">
                <Zap size={20} className="text-success" />
                Railway Recruitment Board - 50,000+ Vacancies
              </span>
              <span className="w-3 h-3 bg-success rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <section className="relative py-32 border-y border-slate-100 bg-white z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {[
              { label: "Active Users", value: "1M+", icon: <Users className="text-primary" /> },
              { label: "Job Alerts", value: "5M+", icon: <Zap className="text-accent" /> },
              { label: "States Covered", value: "28", icon: <Globe className="text-success" /> },
              { label: "Success Rate", value: "99%", icon: <ShieldCheck className="text-emerald-500" /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
                className="text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  className="flex justify-center mb-6 transition-transform"
                >
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                    {stat.icon}
                  </div>
                </motion.div>
                <div className="text-6xl font-display font-bold mb-4 text-slate-900 tracking-tighter">
                  <Counter value={stat.value} />
                </div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-[0.4em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="section-padding relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary/15 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            Unmatched Performance
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-display font-bold mb-8 text-slate-900 tracking-tight"
          >
            Engineered for <span className="text-vibrant-gradient">Speed.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-2xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            We've rebuilt the job search experience from the ground up. 
            No fluff, just the data you need, when you need it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Large Feature */}
          <TiltCard className="md:col-span-2">
            <div className="glass-card group overflow-hidden relative min-h-[500px] flex flex-col justify-end p-12 h-full">
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center mb-12 text-primary shadow-inner"
                >
                  <Bell size={48} />
                </motion.div>
                <h3 className="text-5xl font-display font-bold mb-8 text-slate-900 tracking-tight">Instant Notifications</h3>
                <p className="text-slate-500 text-2xl max-w-2xl font-light leading-relaxed">
                  Our proprietary engine scans official gazettes 24/7. 
                  Be the first to know when a new opportunity arises with millisecond latency.
                </p>
              </div>
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] group-hover:bg-primary/10 transition-colors duration-700" />
            </div>
          </TiltCard>

          {/* Small Feature */}
          <TiltCard>
            <div className="glass-card group flex flex-col justify-end p-12 h-full">
              <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mb-12 text-accent">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-4xl font-display font-bold mb-6 text-slate-900 tracking-tight">Verified Data</h3>
              <p className="text-slate-500 text-xl font-light leading-relaxed">
                Every listing is cross-checked with official government sources for 100% accuracy.
              </p>
            </div>
          </TiltCard>

          {/* Small Feature */}
          <TiltCard>
            <div className="glass-card group flex flex-col justify-end p-12 h-full">
              <div className="w-20 h-20 bg-success/10 rounded-3xl flex items-center justify-center mb-12 text-success">
                <Smartphone size={40} />
              </div>
              <h3 className="text-4xl font-display font-bold mb-6 text-slate-900 tracking-tight">Native UI</h3>
              <p className="text-slate-500 text-xl font-light leading-relaxed">
                A buttery smooth experience optimized for all Android devices with fluid 120Hz support.
              </p>
            </div>
          </TiltCard>

          {/* Large Feature */}
          <TiltCard className="md:col-span-2">
            <div className="glass-card group relative overflow-hidden min-h-[500px] flex flex-col justify-end p-12 h-full">
              <div className="relative z-10">
                <div className="w-24 h-24 bg-emerald-500/10 rounded-[2rem] flex items-center justify-center mb-12 text-emerald-600">
                  <Zap size={48} />
                </div>
                <h3 className="text-5xl font-display font-bold mb-8 text-slate-900 tracking-tight">Smart Filters</h3>
                <p className="text-slate-500 text-2xl max-w-2xl font-light leading-relaxed">
                  Filter by qualification, state, or department. 
                  Our intelligent matching algorithm finds exactly what you're looking for in seconds.
                </p>
              </div>
              <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-emerald-500/5 rounded-full blur-[150px] group-hover:bg-emerald-500/10 transition-colors duration-700" />
            </div>
          </TiltCard>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-40 relative z-10 overflow-hidden bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 text-slate-900 tracking-tight">How it Works</h2>
            <p className="text-slate-500 text-2xl font-light max-w-2xl mx-auto">Three simple steps to your dream government job.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 hidden md:block -translate-y-1/2 z-0" />
            
            {[
              { 
                title: "Search & Discover", 
                desc: "Browse through thousands of verified listings from all over India.",
                icon: <Search size={32} />,
                color: "bg-primary"
              },
              { 
                title: "Set Alerts", 
                desc: "Get notified instantly when a job matching your profile is posted.",
                icon: <Bell size={32} />,
                color: "bg-accent"
              },
              { 
                title: "Apply Directly", 
                desc: "Access direct application links and official notifications.",
                icon: <CheckCircle2 size={32} />,
                color: "bg-success"
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center text-white shadow-2xl mb-10 relative`}>
                  <div className="absolute -inset-4 border border-slate-200 rounded-full animate-ping opacity-20" />
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-slate-900 font-bold text-lg shadow-md">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-3xl font-display font-bold mb-6 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 text-lg font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="bg-slate-900 rounded-[5rem] p-12 text-center py-40 relative overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.3)]"
        >
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-7xl md:text-[10rem] font-display font-bold mb-12 text-white leading-[0.85] tracking-tighter"
            >
              Ready to start your <br /> career journey?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/80 text-2xl md:text-3xl mb-20 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Join thousands of successful candidates who found their dream job through {APP_NAME}.
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
              <a 
                href={PLAY_STORE_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary text-2xl px-16 py-8 rounded-3xl"
              >
                <Download size={32} />
                Get Started for Free
              </a>
            </div>
          </div>
          
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/30 via-transparent to-accent/30 pointer-events-none" />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 rounded-full blur-[200px] pointer-events-none" 
          />
        </motion.div>
      </section>
    </div>
  );
};
