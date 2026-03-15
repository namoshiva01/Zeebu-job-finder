import { Download, Bell, Smartphone, ArrowRight, Zap, Globe, Users, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/SEO';
import { APP_NAME, PLAY_STORE_URL } from '../constants';

export const Home = () => {
  return (
    <div className="min-h-screen relative bg-[#050505]">
      <h1 style={{color: "red", fontSize: "60px", textAlign: "center"}}>
TEST HOME COMPONENT
</h1>
      <div className="bg-mesh" />
      <SEO 
        title={`${APP_NAME} - Premium Government Job Alerts`}
        description={`Experience the future of job hunting with ${APP_NAME}. Fast, reliable, and beautifully designed for the modern job seeker.`}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
            <span className="text-sm font-medium text-white/70 tracking-wider uppercase">Trusted by 1M+ Job Seekers</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-[1.1] tracking-tight text-white">
            Find Your Future <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066FF] to-[#00F0FF]">With Precision.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            The most advanced government job notification platform in India. 
            Real-time alerts, qualification-based matching, and a seamless experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Download size={20} />
              Download for Android
            </a>
            <button className="btn-glass">
              Explore Features
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Active Users", value: "1M+", icon: <Users className="text-[#0066FF]" /> },
              { label: "Job Alerts", value: "5M+", icon: <Zap className="text-[#00F0FF]" /> },
              { label: "States Covered", value: "28", icon: <Globe className="text-blue-400" /> },
              { label: "Success Rate", value: "99%", icon: <ShieldCheck className="text-emerald-400" /> },
            ].map((stat, i) => (
              <div 
                key={i}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-display font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-white/40 text-sm uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            Engineered for <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066FF] to-[#00F0FF]">Speed.</span>
          </h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            We've rebuilt the job search experience from the ground up. 
            No fluff, just the data you need, when you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Feature */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group overflow-hidden relative">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#0066FF]/20 rounded-2xl flex items-center justify-center mb-8 text-[#0066FF]">
                <Bell size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 text-white">Instant Notifications</h3>
              <p className="text-white/50 text-lg max-w-md">
                Our proprietary engine scans official gazettes 24/7. 
                Be the first to know when a new opportunity arises.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/10 rounded-full blur-3xl" />
          </div>

          {/* Small Feature */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group">
            <div className="w-14 h-14 bg-[#00F0FF]/20 rounded-2xl flex items-center justify-center mb-8 text-[#00F0FF]">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-white">Verified Data</h3>
            <p className="text-white/50">
              Every listing is cross-checked with official government sources.
            </p>
          </div>

          {/* Small Feature */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group">
            <div className="w-14 h-14 bg-blue-400/20 rounded-2xl flex items-center justify-center mb-8 text-blue-400">
              <Smartphone size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-white">Native UI</h3>
            <p className="text-white/50">
              A buttery smooth experience optimized for all Android devices.
            </p>
          </div>

          {/* Large Feature */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-400/20 rounded-2xl flex items-center justify-center mb-8 text-emerald-400">
                <Zap size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 text-white">Smart Filters</h3>
              <p className="text-white/50 text-lg max-w-md">
                Filter by qualification, state, or department. 
                Find exactly what you're looking for in seconds.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto relative">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center py-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">Ready to start your <br /> career journey?</h2>
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0066FF]/10 blur-[120px] pointer-events-none" />
        </div>
      </section>
    </div>
  );
};
