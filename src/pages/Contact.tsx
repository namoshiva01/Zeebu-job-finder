import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';
import { APP_NAME } from '../constants';
import { useState, FormEvent } from 'react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24">
      <SEO 
        title={`Contact Us - ${APP_NAME}`}
        description={`Have questions or feedback about ${APP_NAME}? Get in touch with our support team.`}
      />

      <section className="section-padding text-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
            Let's <span className="text-accent-gradient">Connect.</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Have a question or want to partner with us? Our team is ready to help you navigate 
            the future of job discovery.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-display font-bold mb-12">Contact Details</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white/5 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2">Email Us</h4>
                  <p className="text-white/40 text-lg">support@zeebu.in</p>
                  <p className="text-white/20 text-sm mt-2 italic">Response time: &lt; 24 hours</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white/5 text-accent rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                  <MessageSquare size={28} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2">Feedback</h4>
                  <p className="text-white/40 text-lg">We value your input. Help us build the best platform for aspirants.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white/5 text-emerald-400 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2">Location</h4>
                  <p className="text-white/40 text-lg">Digital First, India.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 glass-card border-primary/20 bg-primary/5">
              <h4 className="font-display font-bold text-xl mb-4 text-primary">Note for Aspirants</h4>
              <p className="text-white/50 leading-relaxed">
                Zeebu is an information platform. We do not provide jobs directly and we are not 
                affiliated with any government department. For real-time alerts, please use our mobile app.
              </p>
            </div>
          </div>

          <div className="glass-card p-10">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/30">
                  <Send size={36} />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Message Sent!</h3>
                <p className="text-white/40 text-lg">Thank you for reaching out. We'll get back to you soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-primary font-bold hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-white/60 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-white/60 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-white/60 uppercase tracking-widest">Message</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-5 text-lg font-bold">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
