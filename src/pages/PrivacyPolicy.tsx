import { SEO } from '../components/SEO';
import { APP_NAME } from '../constants';
import { motion } from 'motion/react';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-32 relative overflow-hidden">
      <SEO 
        title={`Privacy Policy - ${APP_NAME}`}
        description={`Privacy policy for ${APP_NAME} mobile application and website.`}
      />

      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] animate-blob-delayed" />
      </div>

      <section className="section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tighter text-slate-900">
            Privacy <span className="text-vibrant-gradient">Policy.</span>
          </h1>
          <p className="text-slate-400 text-xl font-light">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>
      </section>

      <section className="section-padding relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glass-card max-w-4xl mx-auto prose prose-slate prose-lg"
        >
          <p className="text-2xl leading-relaxed text-slate-500 font-light mb-16">
            At {APP_NAME}, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application and website.
          </p>

          <h2 className="text-4xl font-display font-bold text-slate-900 mt-16 mb-8 tracking-tight">1. Information We Collect</h2>
          <p className="text-slate-500 mb-6 font-light">
            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-slate-500 mb-12 font-light">
            <li>Name, Date of Birth, and Place (for personalized job matching)</li>
            <li>Email address (if provided for support)</li>
            <li>Job preferences and state selection</li>
            <li>Device information (model, OS version)</li>
          </ul>

          <h2 className="text-4xl font-display font-bold text-slate-900 mt-16 mb-8 tracking-tight">2. How We Use Your Information</h2>
          <p className="text-slate-500 mb-6 font-light">
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-slate-500 mb-12 font-light">
            <li>Provide personalized job alerts based on your preferences</li>
            <li>Improve our app's performance and user experience</li>
            <li>Send you important updates regarding the service</li>
            <li>Respond to your comments and questions</li>
          </ul>

          <h2 className="text-4xl font-display font-bold text-slate-900 mt-16 mb-8 tracking-tight">3. Data Security</h2>
          <p className="text-slate-500 mb-12 leading-relaxed font-light">
            We implement industry-standard security measures to protect your data from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-4xl font-display font-bold text-slate-900 mt-16 mb-8 tracking-tight">4. Third-Party Services</h2>
          <p className="text-slate-500 mb-12 leading-relaxed font-light">
            We may use third-party services like Google Analytics and Firebase to help us analyze usage and provide notifications. These services have their own privacy policies.
          </p>

          <h2 className="text-4xl font-display font-bold text-slate-900 mt-16 mb-8 tracking-tight">5. Contact Us</h2>
          <p className="text-slate-500 mb-12 leading-relaxed font-light">
            If you have any questions about this Privacy Policy, please contact us at support@zeebu.app.
          </p>
        </motion.div>
      </section>
    </div>
  );
};
