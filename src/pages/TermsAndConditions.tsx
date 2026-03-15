import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { APP_NAME } from '../constants';

export const TermsAndConditions = () => {
  const lastUpdated = "March 15, 2026";

  return (
    <div className="bg-white">
      <SEO 
        title={`Terms and Conditions - ${APP_NAME}`}
        description={`Read the terms and conditions for using the ${APP_NAME} platform.`}
      />

      <section className="bg-secondary">
        <div className="section-padding text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Terms and Conditions
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our service.
          </p>
          <p className="text-sm text-slate-500 mt-4">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-padding container-tight">
          <div className="prose prose-slate max-w-none">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing or using the {APP_NAME} website and mobile application, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to all of these terms, do not use our services.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
              <p className="text-slate-600 leading-relaxed">
                {APP_NAME} is an information-sharing platform that provides notifications and details about government job openings in India. We aggregate information from various official government sources, gazettes, and public notifications.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4 font-semibold">
                Disclaimer: {APP_NAME} is NOT a government entity. We are an independent platform and are not affiliated with, authorized by, or endorsed by any government department or agency.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Accuracy of Information</h2>
              <p className="text-slate-600 leading-relaxed">
                While we strive to provide accurate and up-to-date information, we do not guarantee the completeness, reliability, or accuracy of the job listings or notifications. Users are strongly advised to cross-verify all information with the official government websites or gazettes before applying for any position.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. User Responsibilities</h2>
              <p className="text-slate-600 leading-relaxed">
                Users are responsible for their own actions based on the information provided by {APP_NAME}. We are not responsible for any missed deadlines, incorrect applications, or any other issues arising from the use of our platform.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed">
                The design, logo, and proprietary content of {APP_NAME} are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from our platform without express written permission.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                In no event shall {APP_NAME} be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Changes to Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Your continued use of the platform after such changes constitutes your acceptance of the new terms.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at support@zeebu.in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
