import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer'; // Fixed: go up two levels

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none">
              
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing, registering for, or using WorkShifted ("Service"), you agree to be bound by these Terms of Service ("Terms"). 
                If you do not agree to these Terms, do not use our Service.
              </p>

              <h2>2. Eligibility</h2>
              <p>
                You must be at least 13 years old to use WorkShifted. If you are under 18, you represent that you have your parent's 
                or guardian's permission to use this Service. By using WorkShifted, you represent and warrant that you have the legal 
                capacity to enter into these Terms.
              </p>

              <h2>3. Service Description</h2>
              <p>
                WorkShifted provides educational career guidance, skills assessments, and training resource recommendations to help users 
                explore skilled trade careers. Our Service includes:
              </p>
              <ul>
                <li>Free skills assessments and basic career matching</li>
                <li>Premium career transition plans and detailed guidance (one-time $29 payment)</li>
                <li>Course recommendations and apprenticeship opportunity information</li>
                <li>Educational content about skilled trades</li>
              </ul>
              <p>
                <strong>Important:</strong> WorkShifted provides educational guidance only. We do not guarantee employment, specific salary outcomes, 
                job placement, or career success. Individual results vary based on many factors including market conditions, personal effort, 
                qualifications, and economic factors beyond our control.
              </p>

              <h2>4. User Accounts and Data</h2>
              <p>To use certain features, you must create an account. You agree to:</p>
              <ul>
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and update your information to keep it accurate and current</li>
                <li>Maintain the security and confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
              
              <h3>Data We Collect</h3>
              <p>When you use WorkShifted, we may collect:</p>
              <ul>
                <li>Account information (email, name, authentication data)</li>
                <li>Assessment responses and career preferences</li>
                <li>Usage data and activity within the platform</li>
                <li>Location information only if you voluntarily provide a state or city</li>
                <li>Payment information (processed securely through Stripe)</li>
              </ul>

              <h2>5. Payment Terms</h2>
              <p>
                WorkShifted offers both free and premium features. Premium features require a one-time payment of $29. 
                Payment terms include:
              </p>
              <ul>
                <li><strong>One-time payment:</strong> Premium access is a single $29 charge, not a recurring subscription</li>
                <li><strong>Payment processing:</strong> Payments are processed securely through Stripe</li>
                <li><strong>Refunds:</strong> Available within 30 days of purchase as outlined in our Refund Policy</li>
                <li><strong>Lifetime access:</strong> Premium features remain accessible indefinitely after purchase</li>
                <li><strong>No auto-renewal:</strong> Your payment will not automatically renew or be charged again</li>
              </ul>

              <h2>6. Acceptable Use</h2>
              <p>You agree to use WorkShifted only for lawful purposes. You will not:</p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Upload malicious code or attempt to hack the platform</li>
                <li>Create fake accounts or impersonate others</li>
                <li>Share your account credentials with others</li>
                <li>Use the Service to spam, harass, or harm others</li>
                <li>Attempt to reverse engineer or copy our assessments</li>
                <li>Use automated tools to scrape or download content</li>
              </ul>

              <h2>7. Intellectual Property</h2>
              <p>
                WorkShifted and its content are protected by copyright, trademark, and other laws. This includes:
              </p>
              <ul>
                <li><strong>Our content:</strong> Skills assessments, career guidance materials, and platform design are owned by WorkShifted</li>
                <li><strong>Third-party content:</strong> We may link to external courses, programs, and resources owned by third parties</li>
                <li><strong>Your data:</strong> You retain ownership of your personal information and assessment responses</li>
                <li><strong>Limited license:</strong> We grant you a limited, non-transferable license to use our Service for personal career exploration</li>
              </ul>

              <h2>8. Third-Party Services</h2>
              <p>
                WorkShifted integrates with and links to third-party services including:
              </p>
              <ul>
                <li>Google (for authentication)</li>
                <li>Stripe (for payment processing)</li>
                <li>External educational platforms and course providers</li>
                <li>Apprenticeship programs and job boards</li>
              </ul>
              <p>
                We are not responsible for the availability, content, or practices of these third-party services. 
                Your use of third-party services is subject to their respective terms and policies.
              </p>

              <h2>9. Disclaimers and Limitations</h2>
              <p>
                WorkShifted is provided "as is" without warranties of any kind. We specifically disclaim:
              </p>
              <ul>
                <li><strong>Employment outcomes:</strong> We do not guarantee job placement, interviews, or hiring</li>
                <li><strong>Salary expectations:</strong> Salary information is educational and not guaranteed</li>
                <li><strong>Market conditions:</strong> Trade job availability varies by location and economic factors</li>
                <li><strong>Third-party accuracy:</strong> We cannot guarantee the accuracy of external course or program information</li>
                <li><strong>Continuous availability:</strong> Service may be interrupted for maintenance or technical issues</li>
              </ul>

              <h2>10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, WorkShifted and its team are not liable for any:
              </p>
              <ul>
                <li>Career decisions made based on our guidance</li>
                <li>Financial losses from career changes or training investments</li>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of income, profits, or business opportunities</li>
                <li>Issues with third-party services or programs</li>
              </ul>
              <p>
                Our total liability is limited to the amount you paid for premium features (maximum $29).
              </p>

              <h2>11. Account Termination</h2>
              <p>
                Either party may terminate your account:
              </p>
              <ul>
                <li><strong>By you:</strong> Delete your account at any time through your dashboard</li>
                <li><strong>By us:</strong> For violation of these Terms, fraudulent activity, or extended inactivity</li>
                <li><strong>Data retention:</strong> We may retain your data for legal compliance and service improvement</li>
                <li><strong>Premium access:</strong> Termination does not automatically entitle you to a refund</li>
              </ul>

              <h2>12. Privacy</h2>
              <p>
                Your privacy is important to us. Our collection and use of personal information is governed by our 
                Privacy Policy, which is incorporated into these Terms by reference.
              </p>

              <h2>13. Changes to Terms</h2>
              <p>
                We may update these Terms periodically. When we do:
              </p>
              <ul>
                <li>We'll update the "Last Updated" date</li>
                <li>For significant changes, we'll notify users via email or platform notice</li>
                <li>Continued use after changes constitutes acceptance of new Terms</li>
                <li>If you disagree with changes, stop using the Service</li>
              </ul>

              <h2>14. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the jurisdiction where WorkShifted operates. 
                Any disputes will be resolved in the appropriate courts of that jurisdiction.
              </p>

              <h2>15. Contact Information</h2>
              <p>
                Questions about these Terms? Contact us at{' '}
                <a href="mailto:weworkshifted@gmail.com" className="text-blue-600 hover:underline">
                  weworkshifted@gmail.com
                </a>. 
                We typically respond within 24 hours during business days (Monday-Friday, 9 AM - 5 PM EST).
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
                <h3 className="text-blue-800 font-semibold mb-2">Quick Summary</h3>
                <p className="text-blue-700 text-sm">
                  WorkShifted provides educational career guidance for skilled trades. We offer free assessments and 
                  premium features for $29 (one-time). We don't guarantee job outcomes. Use our Service responsibly 
                  and contact us with questions.
                </p>
              </div>

              <p className="text-sm text-gray-600 mt-8">
                Last updated: August 2025<br/>
                Contact: <a href="mailto:weworkshifted@gmail.com" className="text-blue-600 hover:underline">weworkshifted@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer at bottom */}
      <Footer />
    </div>
  );
};

export default TermsOfService;