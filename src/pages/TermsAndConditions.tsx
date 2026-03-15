import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { APP_NAME } from '../constants';

export const TermsAndConditions = () => {
  const lastUpdated = "March 15, 2026";

  return (
    <div className="mesh-gradient min-h-screen pt-24">
      <SEO 
        title={`Terms and Conditions - ${APP_NAME}`}
        description={`Read the terms and conditions for using the ${APP_NAME} platform.`}
      />

      <section className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">Terms & Conditions</h1>
          <p className="text-white/40 text-lg">Please read these terms carefully before using our platform.</p>
          <p className="text-white/20 text-sm mt-4">Last Updated: {lastUpdated}</p>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="glass-card max-w-4xl mx-auto prose prose-invert prose-slate">
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-6">1. Acceptance of Terms</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              By accessing or using the {APP_NAME} website and mobile application, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to all of these terms, do not use our services.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-6">2. Description of Service</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              {APP_NAME} is an information-sharing platform that provides notifications and details about government job openings in India. We aggregate information from various official government sources, gazettes, and public notifications.
            </p>
            <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-2xl">
              <p className="text-primary font-bold italic">
                Disclaimer: {APP_NAME} is NOT a government entity. We are an independent platform and are not affiliated with, authorized by, or endorsed by any government department or agency.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-6">3. Accuracy of Information</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              While we strive to provide accurate and up-to-date information, we do not guarantee the completeness, reliability, or accuracy of the job listings or notifications. Users are strongly advised to cross-verify all information with the official government websites or gazettes before applying for any position.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-6">4. User Responsibilities</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              Users are responsible for their own actions based on the information provided by {APP_NAME}. We are not responsible for any missed deadlines, incorrect applications, or any other issues arising from the use of our platform.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-6">5. Intellectual Property</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              The design, logo, and proprietary content of {APP_NAME} are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from our platform without express written permission.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-6">6. Limitation of Liability</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              In no event shall {APP_NAME} be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services, even if we have been advised of the possibility of such damages.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-6">7. Changes to Terms</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              We reserve the right to modify these Terms and Conditions at any time. Your continued use of the platform after such changes constitutes your acceptance of the new terms.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-6">8. Contact Us</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              If you have any questions about these Terms and Conditions, please contact us at support@zeebu.in.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
