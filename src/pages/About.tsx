import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Bell, GraduationCap, Calendar, FileText, Search, Target, Heart, Award, Zap, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { APP_NAME } from '../constants';
import { TiltCard, TextReveal } from '../components/Motion';

export const About = () => {
  const { scrollYProgress } = useScroll();
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="min-h-screen relative pt-32 overflow-hidden">
      <SEO 
        title={`About Us - ${APP_NAME}`}
        description={`Learn about the mission and vision behind ${APP_NAME}, India's most trusted government job alert platform.`}
      />

      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          style={{ y: blob1Y }}
          className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-blob" 
        />
        <motion.div 
          style={{ y: blob2Y }}
          className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] animate-blob-delayed" 
        />
      </div>

      {/* Hero Section */}
      <section className="section-padding relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-primary/15 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8"
          >
            Our Mission
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-7xl md:text-9xl font-display font-bold mb-10 text-slate-900 tracking-tighter leading-[0.9]"
          >
            <TextReveal text="Empowering" /> <br />
            <TextReveal text="Millions." className="text-vibrant-gradient" />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-4xl text-slate-600 font-light leading-relaxed"
          >
            We believe that every aspirant deserves a fair chance at success. 
            Our mission is to bridge the gap between opportunities and talent through technology.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
          >
            <h2 className="text-5xl font-display font-bold mb-8 text-slate-900 tracking-tight">The Story Behind {APP_NAME}</h2>
            <div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed">
              <p>
                Founded in 2024, {APP_NAME} started with a simple observation: government job seekers were overwhelmed by fragmented information and slow notifications.
              </p>
              <p>
                We set out to build a platform that wasn't just functional, but beautiful and incredibly fast. A platform that respects the user's time and ambition.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-[4rem] flex items-center justify-center p-12">
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-white rounded-[3rem] shadow-2xl flex items-center justify-center text-primary"
              >
                <Target size={120} />
              </motion.div>
            </div>
            {/* Floating badges */}
            <motion.div 
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100"
            >
              <Users className="text-accent" size={32} />
            </motion.div>
            <motion.div 
              animate={{ x: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100"
            >
              <Zap className="text-success" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-display font-bold mb-20 text-center text-slate-900 tracking-tight"
        >
          Our Core <span className="text-vibrant-gradient">Values.</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Speed First", 
              desc: "In the world of job alerts, every second counts. We optimize for millisecond delivery.",
              icon: <Zap className="text-primary" />,
              color: "bg-primary/10"
            },
            { 
              title: "Absolute Integrity", 
              desc: "We only provide verified information from official government sources. No rumors.",
              icon: <ShieldCheck className="text-accent" />,
              color: "bg-accent/10"
            },
            { 
              title: "User Centric", 
              desc: "Every feature we build is designed to make the aspirant's journey smoother and easier.",
              icon: <Users className="text-success" />,
              color: "bg-success/10"
            }
          ].map((v, i) => (
            <TiltCard key={i} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: "spring" }}
                className="glass-card group h-full"
              >
                <div className={`w-16 h-16 ${v.color} rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:rotate-12`}>
                  {v.icon}
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 text-slate-900 tracking-tight">{v.title}</h3>
                <p className="text-slate-600 text-lg font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding relative z-10 bg-slate-50/50 border-y border-slate-100">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl font-display font-bold mb-6 text-slate-900 tracking-tight"
          >
            Key <span className="text-vibrant-gradient">Features.</span>
          </motion.h2>
          <p className="text-slate-600 text-2xl font-light">What makes {APP_NAME} the #1 choice for aspirants.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              icon: <Bell />, 
              title: "Instant Notifications", 
              desc: "Get updates about the newest central and state government job openings." 
            },
            { 
              icon: <GraduationCap />, 
              title: "Qualification Matching", 
              desc: "Find jobs based on your education level from 10th Pass to B.Tech." 
            },
            { 
              icon: <Calendar />, 
              title: "Smart Deadlines", 
              desc: "Stay informed about application start dates, last dates, and exam schedules." 
            },
            { 
              icon: <FileText />, 
              title: "Official Docs", 
              desc: "Access official notification PDFs and application links directly." 
            },
            { 
              icon: <Search />, 
              title: "Advanced Search", 
              desc: "Filter jobs by state, qualification, department, and category." 
            },
            { 
              icon: <Award />, 
              title: "Verified Sources", 
              desc: "Every listing is cross-checked with official government portals." 
            }
          ].map((v, i) => (
            <TiltCard key={i} className="h-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card flex flex-col items-start h-full"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-slate-900 tracking-tight">{v.title}</h3>
                <p className="text-slate-600 text-lg font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </section>
    </div>
  );
};
