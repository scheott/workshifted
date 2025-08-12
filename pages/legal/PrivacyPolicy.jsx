import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with back button */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to WorkShifted
            </Link>
            <div className="text-xl font-bold text-blue-600">WorkShifted</div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="py-12 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="text-blue-800 font-semibold mb-2">Your Privacy Matters</h3>
                <p className="text-blue-700 text-sm">
                  WorkShifted is committed to protecting your privacy. We collect only what's necessary to provide 
                  career guidance, never sell your data, and give you control over your information.
                </p>
              </div>

              <h2>Information We Collect</h2>
              <p>
                WorkShifted collects information to provide personalized career guidance and maintain your account. 
                Here's exactly what we collect and why:
              </p>

              <h3>Information You Provide</h3>
              <ul>
                <li><strong>Account Information:</strong> Email address and name for account creation and communication</li>
                <li><strong>Assessment Responses:</strong> Your answers to career skills assessments to provide personalized recommendations</li>
                <li><strong>Location Data:</strong> State or city name (only if you provide it) to show local apprenticeship and training opportunities</li>
                <li><strong>Career Preferences:</strong> Selected career paths and interests to customize your experience</li>
                <li><strong>Payment Information:</strong> Processed securely through Stripe (we never store your credit card details)</li>
              </ul>

              <h3>Information We Automatically Collect</h3>
              <ul>
                <li><strong>Usage Data:</strong> How you navigate and use WorkShifted to improve our service</li>
                <li><strong>Device Information:</strong> Browser type and device info for technical support and compatibility</li>
                <li><strong>Activity Logs:</strong> When you take assessments, view results, or access premium features for progress tracking</li>
                <li><strong>Authentication Data:</strong> Login sessions and security tokens to keep your account secure</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use your information solely to provide and improve WorkShifted's career guidance services:</p>

              <h3>Core Service Functions</h3>
              <ul>
                <li><strong>Personalized Recommendations:</strong> Match you with suitable trade careers based on your assessment responses</li>
                <li><strong>Progress Tracking:</strong> Show your career exploration journey and completed assessments</li>
                <li><strong>Local Opportunities:</strong> Display relevant apprenticeships and training programs in your area</li>
                <li><strong>Account Management:</strong> Maintain your profile, preferences, and premium access status</li>
              </ul>

              <h3>Communication</h3>
              <ul>
                <li><strong>Service Updates:</strong> Important changes to WorkShifted or your account</li>
                <li><strong>Support Responses:</strong> Replies to your questions and technical support requests</li>
                <li><strong>Payment Confirmations:</strong> Receipts and billing information for premium upgrades</li>
                <li><strong>Optional Updates:</strong> Career tips and new features (you can opt out anytime)</li>
              </ul>

              <h3>Service Improvement</h3>
              <ul>
                <li><strong>Analytics:</strong> Understand how users interact with WorkShifted to make improvements (anonymized data only)</li>
                <li><strong>Bug Fixes:</strong> Identify and resolve technical issues</li>
                <li><strong>Feature Development:</strong> Build new tools and resources based on user needs</li>
              </ul>

              <h2>Information Sharing and Disclosure</h2>
              <p>
                <strong>We do NOT sell, rent, or trade your personal information.</strong> Your career data and personal 
                information remain private. We only share information in these limited circumstances:
              </p>

              <h3>Trusted Service Partners</h3>
              <ul>
                <li><strong>Supabase:</strong> Secure database hosting and user authentication</li>
                <li><strong>Stripe:</strong> Payment processing for premium upgrades (they never receive your assessment data)</li>
                <li><strong>Google:</strong> Optional authentication if you choose to sign in with Google</li>
              </ul>
              <p className="text-sm text-gray-600">
                These partners are contractually required to protect your data and can only use it to provide services to WorkShifted.
              </p>

              <h3>Legal Requirements</h3>
              <ul>
                <li>If required by law, court order, or legal process</li>
                <li>To protect WorkShifted's rights and prevent fraud</li>
                <li>In emergencies to protect someone's safety</li>
              </ul>

              <h3>Business Transfers</h3>
              <p>
                If WorkShifted is acquired or merged, your information may transfer to the new owner. 
                We'll notify you 30 days before any such transfer and give you options to delete your data if desired.
              </p>

              <h2>Your Privacy Rights and Choices</h2>
              <p>You have complete control over your data with WorkShifted:</p>

              <h3>Access and Control</h3>
              <ul>
                <li><strong>View Your Data:</strong> Access all information we have about you through your dashboard</li>
                <li><strong>Update Information:</strong> Correct or update your account details and preferences anytime</li>
                <li><strong>Download Your Data:</strong> Request a copy of your assessment results and account information</li>
                <li><strong>Delete Your Account:</strong> Permanently remove your account and all associated data</li>
              </ul>

              <h3>Communication Preferences</h3>
              <ul>
                <li><strong>Opt Out:</strong> Unsubscribe from non-essential emails while keeping important account notifications</li>
                <li><strong>Contact Preferences:</strong> Choose how and when we communicate with you</li>
                <li><strong>Marketing:</strong> Easily opt out of career tips and promotional content</li>
              </ul>

              <h3>Location Data</h3>
              <ul>
                <li><strong>Optional:</strong> Providing your state or city is completely voluntary</li>
                <li><strong>Remove Anytime:</strong> Delete your location data from your profile settings</li>
                <li><strong>No Tracking:</strong> We don't collect precise location or track your movements</li>
              </ul>

              <h2>Data Security and Protection</h2>
              <p>
                We implement robust security measures to protect your information:
              </p>

              <h3>Technical Safeguards</h3>
              <ul>
                <li><strong>Encryption:</strong> All data is encrypted in transit and at rest using industry-standard protocols</li>
                <li><strong>Secure Infrastructure:</strong> Hosted on Supabase's secure, SOC 2 compliant platform</li>
                <li><strong>Access Controls:</strong> Strict limits on who can access your data within our team</li>
                <li><strong>Regular Audits:</strong> Ongoing security reviews and updates to protect against threats</li>
              </ul>

              <h3>Payment Security</h3>
              <ul>
                <li><strong>PCI Compliance:</strong> Stripe handles all payment data with PCI DSS Level 1 certification</li>
                <li><strong>No Storage:</strong> WorkShifted never stores or sees your credit card information</li>
                <li><strong>Secure Processing:</strong> All transactions use secure, encrypted connections</li>
              </ul>

              <h2>Cookies and Tracking</h2>
              <p>
                WorkShifted uses minimal cookies and tracking to provide essential functionality:
              </p>

              <h3>Essential Cookies</h3>
              <ul>
                <li><strong>Authentication:</strong> Keep you logged in securely</li>
                <li><strong>Preferences:</strong> Remember your settings and choices</li>
                <li><strong>Security:</strong> Protect against fraud and unauthorized access</li>
              </ul>

              <h3>No Tracking</h3>
              <ul>
                <li><strong>No Analytics Cookies:</strong> We don't use Google Analytics or similar tracking</li>
                <li><strong>No Advertising:</strong> No cookies for ads or marketing purposes</li>
                <li><strong>No Social Media Pixels:</strong> No Facebook, LinkedIn, or other social tracking</li>
              </ul>

              <h2>Children's Privacy</h2>
              <p>
                WorkShifted is designed for users 13 and older. We do not knowingly collect personal information from 
                children under 13. If you're under 18, please get your parent's or guardian's permission before using WorkShifted.
                If we learn we've collected information from a child under 13, we'll delete it immediately.
              </p>

              <h2>International Users</h2>
              <p>
                WorkShifted is based in the United States, and your information is processed and stored in the US. 
                By using our service, you consent to the transfer and processing of your information in the United States, 
                which may have different privacy laws than your country.
              </p>

              <h2>Data Retention</h2>
              <p>We retain your information only as long as necessary:</p>
              <ul>
                <li><strong>Active Accounts:</strong> While your account is active and for legitimate business purposes</li>
                <li><strong>Deleted Accounts:</strong> Up to 90 days to allow for account recovery, then permanently deleted</li>
                <li><strong>Legal Requirements:</strong> Some data may be retained longer if required by law</li>
                <li><strong>Premium Access:</strong> Assessment results and premium content access maintained indefinitely after purchase</li>
              </ul>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy to reflect changes in our practices or for legal reasons. When we do:
              </p>
              <ul>
                <li>We'll post the updated policy with a new "Last Updated" date</li>
                <li>For significant changes, we'll email you or show a prominent notice</li>
                <li>You'll have 30 days to review changes before they take effect</li>
                <li>Continued use of WorkShifted means you accept the updated policy</li>
              </ul>

              <h2>Contact Us About Privacy</h2>
              <p>
                We're committed to addressing your privacy concerns quickly and transparently. Contact us about privacy matters:
              </p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:weworkshifted@gmail.com" className="text-blue-600 hover:underline">weworkshifted@gmail.com</a></li>
                <li><strong>Subject Line:</strong> Include "Privacy" for faster response</li>
                <li><strong>Response Time:</strong> We respond to privacy inquiries within 48 hours</li>
                <li><strong>Detailed Requests:</strong> For data access or deletion requests, we'll guide you through the process</li>
              </ul>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-8">
                <h3 className="text-green-800 font-semibold mb-2">Privacy Summary</h3>
                <p className="text-green-700 text-sm">
                  <strong>What we collect:</strong> Account info, assessment responses, optional location, usage data<br/>
                  <strong>How we use it:</strong> Provide career guidance, track progress, improve service<br/>
                  <strong>Who we share with:</strong> Only trusted service partners (Stripe, Supabase, Google) - never sold<br/>
                  <strong>Your control:</strong> Access, update, or delete your data anytime
                </p>
              </div>

              <p className="text-sm text-gray-600 mt-8">
                Last updated: August 2025<br/>
                Privacy questions? Contact: <a href="mailto:weworkshifted@gmail.com" className="text-blue-600 hover:underline">weworkshifted@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;