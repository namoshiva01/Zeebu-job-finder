import { SEO } from '../components/SEO';
import { APP_NAME } from '../constants';

export const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      <SEO 
        title={`Privacy Policy - ${APP_NAME}`}
        description={`Privacy policy for ${APP_NAME} mobile application and website.`}
      />

      <section className="bg-secondary py-12">
        <div className="section-padding text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="text-slate-600 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-padding max-w-4xl mx-auto prose prose-slate">
          <p className="text-lg leading-relaxed text-slate-600 mb-8">
            At {APP_NAME}, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application and website.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. Information We Collect</h2>
          <p className="text-slate-600 mb-4">
            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-8">
            <li>Name, Date of Birth, and Place (for personalized job matching)</li>
            <li>Email address (if provided for support)</li>
            <li>Job preferences and state selection</li>
            <li>Device information (model, OS version)</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. How We Use Your Information</h2>
          <p className="text-slate-600 mb-4">
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-8">
            <li>Provide personalized job alerts based on your preferences</li>
            <li>Improve our app's performance and user experience</li>
            <li>Send you important updates regarding the service</li>
            <li>Respond to your comments and questions</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. Data Security</h2>
          <p className="text-slate-600 mb-8">
            We implement industry-standard security measures to protect your data from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">4. Third-Party Services</h2>
          <p className="text-slate-600 mb-8">
            We may use third-party services like Google Analytics and Firebase to help us analyze usage and provide notifications. These services have their own privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">5. Contact Us</h2>
          <p className="text-slate-600 mb-8">
            If you have any questions about this Privacy Policy, please contact us at support@govtjobfinder.in.
          </p>
        </div>
      </section>
    </div>
  );
};
