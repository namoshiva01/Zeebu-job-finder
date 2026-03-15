import { motion } from 'motion/react';
import { Bell, GraduationCap, Calendar, FileText, Search } from 'lucide-react';
import { SEO } from '../components/SEO';
import { APP_NAME } from '../constants';

export const About = () => {
  return (
    <div className="bg-white">
      <SEO 
        title={`About Us - ${APP_NAME}`}
        description={`${APP_NAME} is a smart mobile application designed to help job seekers easily find the latest government job notifications across India.`}
      />

      <section className="bg-secondary">
        <div className="section-padding text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            About {APP_NAME}
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {APP_NAME} is a smart mobile application designed to help job seekers easily find the latest government job notifications across India.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-padding container-tight">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-slate-600 mb-6 leading-relaxed text-lg text-center">
            The app collects and organizes information about central and state government jobs in one place so users can quickly stay updated with new opportunities.
          </p>
          <p className="text-slate-600 mb-6 leading-relaxed text-lg text-center">
            Our goal is to simplify the job search process for students, graduates, and job aspirants by providing accurate and timely government job information.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Bell />, 
                title: "Latest Government Job Notifications", 
                desc: "Get updates about the newest central and state government job openings." 
              },
              { 
                icon: <GraduationCap />, 
                title: "Qualification-Based Job Search", 
                desc: "Find jobs based on your education level such as 10th Pass, 12th Pass, Diploma, Degree, B.Tech, and more." 
              },
              { 
                icon: <Calendar />, 
                title: "Important Dates", 
                desc: "Stay informed about application start dates, last dates, exam schedules, and other important deadlines." 
              },
              { 
                icon: <FileText />, 
                title: "Official Notification Links", 
                desc: "Access official government notification PDFs and application links directly from the app." 
              },
              { 
                icon: <Search />, 
                title: "Easy Search & Filters", 
                desc: "Search and filter jobs by state, qualification, department, and job category." 
              }
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
