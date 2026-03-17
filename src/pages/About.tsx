import { motion } from 'motion/react';
import { Bell, GraduationCap, Calendar, FileText, Search, Target, Heart, Award } from 'lucide-react';
import { SEO } from '../components/SEO';
import { APP_NAME } from '../constants';

export const About = () => {
  return (
    <div className="min-h-screen pt-24">
      <SEO 
        title={`About Us - ${APP_NAME}`}
        description={`${APP_NAME} is a smart mobile application designed to help job seekers easily find the latest government job notifications across India.`}
      />

      <section className="section-padding text-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
            Our Story. <br />
            <span className="text-accent-gradient">Our Mission.</span>
          </h1>
          <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            {APP_NAME} was born out of a simple observation: finding government job notifications 
            shouldn't be a full-time job in itself. We built a platform that brings clarity 
            to the complex world of public sector opportunities.
          </p>
        </div>
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
              icon: <Award className="text-emerald-400" />, 
              title: "Trust", 
              desc: "100% verified data from official government sources. No rumors, just facts." 
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="glass-card text-center"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
              <p className="text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-white/[0.02] border-y border-white/5">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Key Features</h2>
          <p className="text-white/50 text-lg">What makes {APP_NAME} the #1 choice for aspirants.</p>
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
            <div 
              key={i}
              className="glass-card hover:translate-y-[-5px] transition-transform"
            >
              <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center mb-6">
                {v.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{v.title}</h3>
              <p className="text-white/40">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
