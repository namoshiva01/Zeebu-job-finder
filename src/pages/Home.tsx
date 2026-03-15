import { motion } from 'motion/react';
import { Download, ShieldCheck, Bell, Search, Zap, MapPin } from 'lucide-react';
import { PLAY_STORE_URL, APP_NAME } from '../constants';
import { SEO } from '../components/SEO';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <SEO 
        title={`${APP_NAME} - Personalized Govt Job Alerts (State & Central)`}
        description={`Get tailored govt job alerts by entering your Name, DOB, and Place. Access State and Central jobs with one-click notification downloads and full details.`}
        keywords="Govt Jobs India, Personalized Job Alerts, State Govt Jobs, Central Govt Jobs, Sarkari Naukri App, Govt Job Finder"
      />

      {/* Hero Section */}
      <section className="relative bg-white pt-8 pb-12 md:pt-24 md:pb-32">
        <div className="section-padding flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6 border border-blue-100 mx-auto">
              <ShieldCheck size={16} />
              Trusted by 1M+ Job Seekers
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Your <span className="text-primary">Personalized</span> Govt Job Hub
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Enter your Name, DOB, and Place to unlock a tailored feed of State and Central government jobs. Get one-click notification downloads and all the details you need instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
                <Download size={20} />
                Get It Now
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500 italic">
              *For the latest government jobs, please download our Android app.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need for Your Job Search</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{APP_NAME} simplifies the complex world of government notifications into a personalized, easy-to-use experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="text-primary" />, title: "Personalized Discovery", desc: "Just enter your Name, DOB, and Place to see jobs that match your specific eligibility and location." },
              { icon: <Search className="text-primary" />, title: "State & Central Jobs", desc: "Access a comprehensive database of both State and Central government opportunities in one place." },
              { icon: <Download className="text-primary" />, title: "One-Click Downloads", desc: "Download official job notifications and gazettes with a single tap directly to your device." },
              { icon: <Bell className="text-primary" />, title: "Detailed Insights", desc: "View number of posts, last dates, and eligibility criteria clearly for every single listing." },
              { icon: <MapPin className="text-primary" />, title: "Hyper-Local Alerts", desc: "Never miss a job in your district or state with our intelligent location-based filtering." },
              { icon: <ShieldCheck className="text-primary" />, title: "Verified Information", desc: "Every job detail is cross-checked with official sources to ensure you get 100% accurate data." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Why Use Our App Section */}
      <section className="bg-slate-900 text-white">
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The AI Advantage</h2>
            <div className="space-y-6">
              {[
                { title: "Smart Profile Scoring", desc: `${APP_NAME} AI scores your profile against job requirements, helping you focus on the right opportunities.` },
                { title: "Next-Gen Notification Engine", desc: "Our proprietary AI engine processes 10,000+ sources daily to bring you alerts faster than any other app." },
                { title: "Intelligent Career Pathing", desc: "Not sure where to apply? Our AI suggests career paths based on current government hiring trends." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-1">
                    <ShieldCheck size={14} className="text-slate-900" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
            <div className="text-center mb-8">
              <div className="text-accent text-5xl font-bold mb-2">100%</div>
              <div className="text-xl font-medium">Free to Use</div>
            </div>
            <p className="text-slate-300 text-center mb-8">
              We believe every job seeker deserves equal opportunity. Our app is and will always be free for everyone.
            </p>
            <a href={PLAY_STORE_URL} className="btn-accent w-full py-4 text-lg">
              <Download size={20} />
              Get It Now
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How {APP_NAME} Works?</h2>
            <p className="text-slate-600">Your journey to a government career starts here.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -z-10"></div>
            
            {[
              { step: "01", title: "Setup Your Profile", desc: "Enter your Name, DOB, and Place to help us find the right jobs for you." },
              { step: "02", title: "Explore State & Central", desc: "Browse through a filtered list of jobs based on your eligibility and location." },
              { step: "03", title: "Download & Apply", desc: "Get full details and download official notifications with just one click." }
            ].map((item, idx) => (
              <div key={idx} className="text-center bg-white px-4">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg border-4 border-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Users Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul Sharma", role: "Banking Aspirant", text: "This app is a lifesaver. I used to miss so many bank exams, but now I get alerts for everything instantly." },
              { name: "Priya Patel", role: "UPSC Candidate", text: "The state-wise filter is amazing. I can focus on Gujarat govt jobs without any clutter. Highly recommended!" },
              { name: "Amit Kumar", role: "Railway Job Seeker", text: "Fastest notifications I've seen. The interface is clean and doesn't show any annoying ads." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-accent mb-4">
                  {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white">
        <div className="section-padding container-tight">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "Is this app free?", a: `Yes, ${APP_NAME} is completely free to download and use. We don't charge any fees for job information.` },
              { q: "How do I see job details?", a: "Once you click on an eligible job, all details like number of posts, last date, and eligibility will be clearly visible." },
              { q: "Can I download official notifications?", a: `Yes! ${APP_NAME} provides a one-click notification download feature for all job listings.` },
              { q: "Which jobs are covered?", a: "We cover all State and Central government jobs across India, updated in real-time." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Banner */}
      <section>
        <div className="section-padding">
          <div className="bg-primary rounded-3xl md:rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Find Your Dream Job?</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Join over 1 million job seekers who are already using Govt Job Finder to advance their careers.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={PLAY_STORE_URL} className="btn-accent text-lg px-10 py-4">
                  <Download size={20} />
                  Get It Now
                </a>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Download Button */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white border-t border-slate-200 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <a href={PLAY_STORE_URL} className="btn-primary w-full py-3">
          <Download size={18} />
          Get It Now
        </a>
      </div>
    </div>
  );
};
