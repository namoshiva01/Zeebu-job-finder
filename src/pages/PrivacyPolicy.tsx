import { SEO } from '../components/SEO';
import { APP_NAME } from '../constants';
import { motion } from 'motion/react';

export const PrivacyPolicy = () => {
  return (
    <div className="mesh-gradient min-h-screen pt-24">
      <SEO 
        title={`Privacy Policy - ${APP_NAME}`}
        description={`Privacy policy for ${APP_NAME} mobile application and website.`}
      />

      <section className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-white/40 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="glass-card max-w-4xl mx-auto prose prose-invert prose-slate">
          <p className="text-xl leading-relaxed text-white/60 mb-12">
            At {APP_NAME}, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application and website.
          </p>

          <h2 className="text-3xl font-display font-bold text-white mt-16 mb-8">1. Information We Collect</h2>
          <p className="text-white/50 mb-6">
            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-white/50 mb-12">
            <li>Name, Date of Birth, and Place (for personalized job matching)</li>
            <li>Email address (if provided for support)</li>
            <li>Job preferences and state selection</li>
            <li>Device information (model, OS version)</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-white mt-16 mb-8">2. How We Use Your Information</h2>
          <p className="text-white/50 mb-6">
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-white/50 mb-12">
            <li>Provide personalized job alerts based on your preferences</li>
            <li>Improve our app's performance and user experience</li>
            <li>Send you important updates regarding the service</li>
            <li>Respond to your comments and questions</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-white mt-16 mb-8">3. Data Security</h2>
          <p className="text-white/50 mb-12 leading-relaxed">
            We implement industry-standard security measures to protect your data from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-3xl font-display font-bold text-white mt-16 mb-8">4. Third-Party Services</h2>
          <p className="text-white/50 mb-12 leading-relaxed">
            We may use third-party services like Google Analytics and Firebase to help us analyze usage and provide notifications. These services have their own privacy policies.
          </p>

          <h2 className="text-3xl font-display font-bold text-white mt-16 mb-8">5. Contact Us</h2>
          <p className="text-white/50 mb-12 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at support@zeebu.in.
          </p>
        </div>
      </section>
    </div>
  );
};
