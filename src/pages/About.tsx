import { motion } from 'motion/react';
import { Bell, GraduationCap, Calendar, FileText, Search, Target, Heart, Award } from 'lucide-react';
import { SEO } from '../components/SEO';
import { APP_NAME } from '../constants';

export const About = () => {
  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">
      <SEO 
        title={`About Us - ${APP_NAME}`}
        description={`${APP_NAME} is a smart mobile application designed to help job seekers easily find the latest government job notifications across India.`}
      />

      <section className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-9xl font-display font-bold mb-8 tracking-tighter leading-[1] text-slate-900">
            Our Story. <br />
            <span className="text-vibrant-gradient">Our Mission.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            {APP_NAME} was born out of a simple observation: finding government job notifications 
            shouldn't be a full-time job in itself. We built a platform that brings clarity 
            to the complex world of public sector opportunities.
          </p>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Target className="text-primary" />, 
              title: "Precision", 
              desc: "We filter through thousands of notifications to bring you only what matters to you." 
            },
            { 
              icon: <Heart className="text-accent" />, 
              title: "User First", 
              desc: "Every feature we build is designed to make your job search smoother and faster." 
            },
            { 
              icon: <Award className="text-success" />, 
              title: "Trust", 
              desc: "100% verified data from official government sources. No rumors, just facts." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card text-center"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-slate-50/50 border-y border-slate-100">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-bold mb-6 text-slate-900"
          >
            Key <span className="text-vibrant-gradient">Features</span>
          </motion.h2>
          <p className="text-slate-500 text-lg">What makes {APP_NAME} the #1 choice for aspirants.</p>
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
            }
          ].map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                {v.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-slate-900">{v.title}</h3>
              <p className="text-slate-500">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
