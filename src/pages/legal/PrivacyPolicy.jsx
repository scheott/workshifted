// src/pages/legal/PrivacyPolicy.jsx - Updated for AI Career Evolution Pivot
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
                  AI career risk assessments and evolution guidance, never sell your data, and give you control over your information.
                </p>
              </div>

              <h2>Information We Collect</h2>
              <p>
                WorkShifted collects information to provide personalized AI career risk assessments and maintain your account.
              </p>

              <h3>Account Information</h3>
              <ul>
                <li><strong>Basic details:</strong> Email address, name, and account preferences</li>
                <li><strong>Authentication:</strong> Encrypted login credentials or Google OAuth data</li>
                <li><strong>Optional location:</strong> State or city (only if you choose to provide it for localized guidance)</li>
                <li><strong>Contact preferences:</strong> Communication settings and frequency choices</li>
              </ul>

              <h3>AI Risk Assessment Data</h3>
              <ul>
                <li><strong>Career information:</strong> Current role, industry, and professional background</li>
                <li><strong>Task analysis:</strong> Daily activities, automation vulnerability responses</li>
                <li><strong>Skills assessment:</strong> Technical abilities, AI tool familiarity, and learning preferences</li>
                <li><strong>Risk factors:</strong> Routine vs. creative work breakdown, interpersonal interaction levels</li>
                <li><strong>Goals and concerns:</strong> Career evolution priorities and AI-related concerns</li>
              </ul>

              <h3>Platform Usage Data</h3>
              <ul>
                <li><strong>Activity tracking:</strong> Pages visited, features used, and time spent in different sections</li>
                <li><strong>Progress monitoring:</strong> Assessment completion status and premium feature engagement</li>
                <li><strong>Technical data:</strong> Browser type, device information, and basic analytics</li>
                <li><strong>Support interactions:</strong> Help requests, bug reports, and customer service communications</li>
              </ul>

              <h3>Payment Information</h3>
              <ul>
                <li><strong>Stripe processing:</strong> WorkShifted never stores or sees your credit card information</li>
                <li><strong>Transaction records:</strong> Purchase date, amount, and payment status for premium access</li>
                <li><strong>Secure processing:</strong> All transactions use secure, encrypted connections</li>
              </ul>

              <h2>How We Use Your Information</h2>

              <h3>AI Career Risk Assessment</h3>
              <ul>
                <li><strong>Risk calculation:</strong> Analyze your responses to generate personalized automation risk scores</li>
                <li><strong>Trend analysis:</strong> Compare your role vulnerability against industry benchmarks</li>
                <li><strong>Personalized guidance:</strong> Create tailored AI-resistance strategies for your specific situation</li>
                <li><strong>Progress tracking:</strong> Monitor your skill development and plan implementation</li>
              </ul>

              <h3>Service Delivery</h3>
              <ul>
                <li><strong>Platform access:</strong> Maintain your account and deliver premium features</li>
                <li><strong>Content personalization:</strong> Customize recommendations based on your industry and role</li>
                <li><strong>Feature improvement:</strong> Enhance assessment accuracy and guidance quality</li>
                <li><strong>Technical support:</strong> Resolve issues and answer questions about the platform</li>
              </ul>

              <h3>Communication</h3>
              <ul>
                <li><strong>Essential updates:</strong> Account changes, payment confirmations, and service notifications</li>
                <li><strong>AI trend alerts:</strong> Industry-specific automation developments affecting your career</li>
                <li><strong>Educational content:</strong> Optional AI career evolution tips and strategy updates</li>
                <li><strong>Support responses:</strong> Replies to your questions and technical assistance requests</li>
              </ul>

              <h3>Service Improvement</h3>
              <ul>
                <li><strong>Analytics:</strong> Understand platform usage to improve AI assessment accuracy (anonymized data only)</li>
                <li><strong>Feature development:</strong> Build new tools based on user needs and career evolution trends</li>
                <li><strong>Quality assurance:</strong> Identify and resolve technical issues</li>
                <li><strong>Research:</strong> Improve AI risk prediction models and career evolution strategies</li>
              </ul>

              <h2>Information Sharing and Disclosure</h2>
              <p>
                <strong>We do NOT sell, rent, or trade your personal information.</strong> Your AI career assessment data and personal 
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

              <h2>Your Data Rights and Control</h2>
              
              <h3>Access and Updates</h3>
              <ul>
                <li><strong>View your data:</strong> Access all information we have about you through your account dashboard</li>
                <li><strong>Update information:</strong> Edit your profile, assessment responses, and preferences anytime</li>
                <li><strong>Download data:</strong> Request a copy of your AI assessment results and account data</li>
                <li><strong>Correct errors:</strong> Update any inaccurate information in your profile</li>
              </ul>

              <h3>Privacy Controls</h3>
              <ul>
                <li><strong>Communication preferences:</strong> Choose which emails and notifications you receive</li>
                <li><strong>Data retention:</strong> Control how long we keep your assessment data</li>
                <li><strong>Sharing options:</strong> Decide whether your anonymized data can be used for research</li>
                <li><strong>Account deletion:</strong> Permanently delete your account and all associated data</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement robust security measures to protect your AI career assessment data:
              </p>
              <ul>
                <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                <li><strong>Access controls:</strong> Strict limits on who can view your information</li>
                <li><strong>Regular audits:</strong> Ongoing security assessments and improvements</li>
                <li><strong>Incident response:</strong> Immediate notification if any security issues occur</li>
              </ul>

              <h2>Cookies and Tracking</h2>
              <p>
                WorkShifted uses minimal cookies and tracking to provide essential functionality:
              </p>

              <h3>Essential Cookies</h3>
              <ul>
                <li><strong>Authentication:</strong> Keep you logged in securely</li>
                <li><strong>Preferences:</strong> Remember your AI assessment progress and settings</li>
                <li><strong>Security:</strong> Protect against fraud and unauthorized access</li>
              </ul>

              <h3>No Tracking</h3>
              <ul>
                <li><strong>No analytics cookies:</strong> We don't use Google Analytics or similar tracking</li>
                <li><strong>No advertising:</strong> No cookies for ads or marketing purposes</li>
                <li><strong>No social media pixels:</strong> No Facebook, LinkedIn, or other social tracking</li>
              </ul>

              <h2>Children's Privacy</h2>
              <p>
                WorkShifted is designed for working professionals and users 18 and older. We do not knowingly collect 
                personal information from children under 18. If we learn we've collected information from someone under 18, 
                we'll delete it immediately.
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
                <li><strong>Active accounts:</strong> While your account is active and for legitimate business purposes</li>
                <li><strong>Deleted accounts:</strong> Up to 90 days to allow for account recovery, then permanently deleted</li>
                <li><strong>Legal requirements:</strong> Some data may be retained longer if required by law</li>
                <li><strong>Premium access:</strong> AI assessment results and premium content access maintained indefinitely after purchase</li>
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
                <li><strong>Subject line:</strong> Include "Privacy" for faster response</li>
                <li><strong>Response time:</strong> We respond to privacy inquiries within 48 hours</li>
                <li><strong>Detailed requests:</strong> For data access or deletion requests, we'll guide you through the process</li>
              </ul>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-8">
                <h3 className="text-green-800 font-semibold mb-2">Privacy Summary</h3>
                <p className="text-green-700 text-sm">
                  <strong>What we collect:</strong> Account info, AI risk assessment responses, optional location, usage data<br/>
                  <strong>How we use it:</strong> Provide career evolution guidance, track progress, improve AI risk assessments<br/>
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