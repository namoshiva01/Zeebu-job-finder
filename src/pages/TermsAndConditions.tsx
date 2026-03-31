import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { APP_NAME } from '../constants';

export const TermsAndConditions = () => {
  const lastUpdated = "March 15, 2026";

  return (
    <div className="min-h-screen pt-32 relative overflow-hidden">
      <SEO 
        title={`Terms and Conditions - ${APP_NAME}`}
        description={`Read the terms and conditions for using the ${APP_NAME} platform.`}
      />

      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[15%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[15%] right-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px] animate-blob-delayed" />
      </div>

      <section className="section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tighter text-slate-900">
            Terms & <span className="text-vibrant-gradient">Conditions.</span>
          </h1>
          <p className="text-slate-500 text-xl font-light mb-4">Please read these terms carefully before using our platform.</p>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Last Updated: {lastUpdated}</p>
        </motion.div>
      </section>

      <section className="section-padding relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glass-card max-w-4xl mx-auto prose prose-slate prose-lg"
        >
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">1. Acceptance of Terms</h2>
            <p className="text-slate-500 leading-relaxed text-xl font-light">
              By accessing or using the {APP_NAME} website and mobile application, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to all of these terms, do not use our services.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">2. Description of Service</h2>
            <p className="text-slate-500 leading-relaxed text-xl font-light mb-8">
              {APP_NAME} is an information-sharing platform that provides notifications and details about government job openings in India. We aggregate information from various official government sources, gazettes, and public notifications.
            </p>
            <div className="p-8 bg-primary/5 border border-primary/10 rounded-3xl">
              <p className="text-primary font-bold italic leading-relaxed">
                Disclaimer: {APP_NAME} is NOT a government entity. We are an independent platform and are not affiliated with, authorized by, or endorsed by any government department or agency.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">3. Accuracy of Information</h2>
            <p className="text-slate-500 leading-relaxed text-xl font-light">
              While we strive to provide accurate and up-to-date information, we do not guarantee the completeness, reliability, or accuracy of the job listings or notifications. Users are strongly advised to cross-verify all information with the official government websites or gazettes before applying for any position.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">4. User Responsibilities</h2>
            <p className="text-slate-500 leading-relaxed text-xl font-light">
              Users are responsible for their own actions based on the information provided by {APP_NAME}. We are not responsible for any missed deadlines, incorrect applications, or any other issues arising from the use of our platform.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">5. Intellectual Property</h2>
            <p className="text-slate-500 leading-relaxed text-xl font-light">
              The design, logo, and proprietary content of {APP_NAME} are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from our platform without express written permission.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">6. Limitation of Liability</h2>
            <p className="text-slate-500 leading-relaxed text-xl font-light">
              In no event shall {APP_NAME} be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services, even if we have been advised of the possibility of such damages.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">7. Changes to Terms</h2>
            <p className="text-slate-500 leading-relaxed text-xl font-light">
              We reserve the right to modify these Terms and Conditions at any time. Your continued use of the platform after such changes constitutes your acceptance of the new terms.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">8. Contact Us</h2>
            <p className="text-slate-500 leading-relaxed text-xl font-light">
              If you have any questions about these Terms and Conditions, please contact us at support@zeebu.app.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
