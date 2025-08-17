// src/App.jsx - Fixed with proper SEO and canonical tags
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the SEO component
import SEOHelmet from './components/SEOHelmet';

// Core pages
import Landing from './pages/Landing';
import Auth from './Auth';
import Assessment from './pages/Assessment';
import UserDashboard from './pages/Dashboard';

// Premium features pages
import PremiumPlan from './pages/PremiumPlan';
import TemplatesLibrary from './pages/TemplatesLibrary';
import AILeadershipGuide from './pages/AILeadershipGuide';
import SkillsRoadmap from './pages/SkillsRoadmap';
import AIUpdates from './pages/AIUpdates';
import AITools from './pages/AITools';

// Auth and payment pages
import AuthCallback from './pages/AuthCallback';
import PasswordReset from './pages/PasswordReset';
import { PaymentSuccess, PaymentCancel } from './pages/PaymentPages';

// Legal pages
import TermsOfService from './pages/legal/TermsOfService';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import RefundPolicy from './pages/legal/RefundPolicy';
import Contact from './pages/Contact';

// SEO and marketing pages
import AIJobDisplacementStats from './pages/AIJobDisplacementStats';
import WillAITakeMyJob from './pages/WillAITakeMyJob';
import AIvsHumanJobs from './pages/AIvsHumanJobs';

// AIProof Career Pages
import AIProofMarketingCareers from './pages/AIProofMarketingCareers';
import AIProofFinanceCareers from './pages/AIProofFinanceCareers';
import AIProofSalesCareers from './pages/AIProofSalesCareers';
import AIProofHRCareers from './pages/AIProofHRCareers';
import AssessmentSignup from './pages/AssessmentSignup';

// Components
import PrivateRoute from './components/PrivateRoute';
import RedirectIfAuthed from './components/RedirectIfAuthed';
import GoogleAnalytics from './components/GoogleAnalytics';

function App() {
  return (
    <Router>
      <div className="App">
        <GoogleAnalytics />
        
        <Routes>
          {/* Homepage - Fixed canonical */}
          <Route path="/" element={
            <RedirectIfAuthed>
              <SEOHelmet 
                title="WorkShifted - AI Career Evolution | Don't Get Replaced, Get AI-Augmented"
                description="Don't let AI replace you - learn to lead it. Get your personalized AI-resistance roadmap and become irreplaceable in your career with WorkShifted's AI evolution assessment."
                canonical="https://getworkshifted.com"
              />
              <Landing />
            </RedirectIfAuthed>
          } />
          
          {/* Auth pages - noindex to prevent duplicate content */}
          <Route path="/auth" element={
            <RedirectIfAuthed>
              <SEOHelmet 
                title="Sign In | WorkShifted"
                description="Sign in to access your AI career evolution assessment and personalized roadmap."
                noindex={true}
              />
              <Auth />
            </RedirectIfAuthed>
          } />
          
          <Route path="/auth/callback" element={
            <>
              <SEOHelmet noindex={true} />
              <AuthCallback />
            </>
          } />
          
          <Route path="/auth/reset-password" element={
            <>
              <SEOHelmet 
                title="Reset Password | WorkShifted"
                noindex={true}
              />
              <PasswordReset />
            </>
          } />
          
          {/* Payment pages - noindex */}
          <Route path="/payment/success" element={
            <>
              <SEOHelmet 
                title="Payment Successful | WorkShifted"
                noindex={true}
              />
              <PaymentSuccess />
            </>
          } />
          
          <Route path="/payment/cancel" element={
            <>
              <SEOHelmet 
                title="Payment Cancelled | WorkShifted"
                noindex={true}
              />
              <PaymentCancel />
            </>
          } />
          
          {/* Assessment pages - Consolidate similar URLs */}
          <Route path="/ai-career-risk-assessment" element={
            <RedirectIfAuthed>
              <SEOHelmet 
                title="AI Career Risk Assessment | WorkShifted"
                description="Take our free AI career risk assessment to discover how vulnerable your job is to AI automation and get your personalized evolution roadmap."
                canonical="https://getworkshifted.com/ai-career-risk-assessment"
              />
              <Assessment />
            </RedirectIfAuthed>
          } />

          <Route path="/assessment" element={
            <RedirectIfAuthed>
              <SEOHelmet 
                title="AI Career Risk Assessment | WorkShifted"
                description="Take our free AI career risk assessment to discover how vulnerable your job is to AI automation and get your personalized evolution roadmap."
                canonical="https://getworkshifted.com/assessment"
              />
              <Assessment />
            </RedirectIfAuthed>
          } />

          <Route path="/assessment-signup" element={
            <RedirectIfAuthed>
              <SEOHelmet 
                title="Complete Your Assessment | WorkShifted"
                description="Complete your AI career risk assessment signup to get your personalized roadmap."
                canonical="https://getworkshifted.com/assessment-signup"
              />
              <AssessmentSignup />
            </RedirectIfAuthed>
          } />
          
          {/* Redirect duplicate assessment URLs to canonical version */}
          <Route path="/ai-proof-your-career" element={
            <RedirectIfAuthed>
              <SEOHelmet 
                title="AI Career Risk Assessment | WorkShifted"
                canonical="https://getworkshifted.com/ai-career-risk-assessment"
              />
              <Assessment />
            </RedirectIfAuthed>
          } />
          
          {/* SEO Pages with unique, valuable content */}
          <Route path="/ai-job-displacement-statistics" element={
            <>
              <SEOHelmet 
                title="AI Job Displacement Statistics 2025 | Latest Data & Trends"
                description="Comprehensive analysis of AI job displacement statistics, industry trends, and which careers are most at risk from AI automation in 2025."
                canonical="https://getworkshifted.com/ai-job-displacement-statistics"
              />
              <AIJobDisplacementStats />
            </>
          } />
          
          <Route path="/will-ai-take-my-job-by-industry" element={
            <>
              <SEOHelmet 
                title="Will AI Take My Job? Industry-by-Industry Analysis 2025"
                description="Find out if AI will take your job with our detailed industry analysis. See automation risk by profession and learn how to future-proof your career."
                canonical="https://getworkshifted.com/will-ai-take-my-job-by-industry"
              />
              <WillAITakeMyJob />
            </>
          } />
          
          <Route path="/ai-vs-human-jobs-complete-guide" element={
            <>
              <SEOHelmet 
                title="AI vs Human Jobs: Complete Guide to the Future of Work 2025"
                description="Complete guide to AI vs human jobs. Learn which roles are AI-resistant, how to adapt your career, and strategies to stay competitive in the AI era."
                canonical="https://getworkshifted.com/ai-vs-human-jobs-complete-guide"
              />
              <AIvsHumanJobs />
            </>
          } />
          
          {/* Career-specific pages with unique content */}
          <Route path="/ai-proof-marketing-careers" element={
            <>
              <SEOHelmet 
                title="AI-Proof Marketing Careers: Future-Ready Roles & Skills 2025"
                description="Discover AI-resistant marketing careers, essential skills for marketing professionals, and how to evolve your marketing career in the AI age."
                canonical="https://getworkshifted.com/ai-proof-marketing-careers"
              />
              <AIProofMarketingCareers />
            </>
          } />
          
          <Route path="/ai-proof-finance-careers" element={
            <>
              <SEOHelmet 
                title="AI-Proof Finance Careers: Future-Ready Financial Roles 2025"
                description="Explore AI-resistant finance careers, key skills for financial professionals, and strategies to future-proof your finance career against AI automation."
                canonical="https://getworkshifted.com/ai-proof-finance-careers"
              />
              <AIProofFinanceCareers />
            </>
          } />
          
          <Route path="/ai-proof-sales-careers" element={
            <>
              <SEOHelmet 
                title="AI-Proof Sales Careers: Future-Ready Sales Roles & Skills 2025"
                description="Discover AI-resistant sales careers, essential sales skills for the AI era, and how to evolve your sales career to stay competitive."
                canonical="https://getworkshifted.com/ai-proof-sales-careers"
              />
              <AIProofSalesCareers />
            </>
          } />
          
          <Route path="/ai-proof-hr-careers" element={
            <>
              <SEOHelmet 
                title="AI-Proof HR Careers: Future-Ready Human Resources Roles 2025"
                description="Explore AI-resistant HR careers, key human resources skills for the AI age, and strategies to future-proof your HR career."
                canonical="https://getworkshifted.com/ai-proof-hr-careers"
              />
              <AIProofHRCareers />
            </>
          } />
          
          {/* Protected routes */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <SEOHelmet 
                title="Dashboard | WorkShifted"
                noindex={true}
              />
              <UserDashboard />
            </PrivateRoute>
          } />
          <Route path="/templates" element={
            <PrivateRoute>
              <SEOHelmet 
                title="Templates Library | WorkShifted"
                noindex={true}
              />
              <TemplatesLibrary />
            </PrivateRoute>
          } />

          <Route path="/ai-leadership-guide" element={
            <PrivateRoute>
              <SEOHelmet 
                title="AI Leadership Guide | WorkShifted"
                noindex={true}
              />
              <AILeadershipGuide />
            </PrivateRoute>
          } />

          <Route path="/skills-roadmap" element={
            <PrivateRoute>
              <SEOHelmet 
                title="Skills Roadmap | WorkShifted"
                noindex={true}
              />
              <SkillsRoadmap />
            </PrivateRoute>
          } />

          <Route path="/ai-updates" element={
            <PrivateRoute>
              <SEOHelmet 
                title="AI Updates | WorkShifted"
                noindex={true}
              />
              <AIUpdates />
            </PrivateRoute>
          } />

          <Route path="/ai-tools-database" element={
            <PrivateRoute>
              <SEOHelmet 
                title="AI Tools | WorkShifted"
                noindex={true}
              />
              <AITools />
            </PrivateRoute>
          } />
          
          <Route path="/plan" element={
            <PrivateRoute>
              <SEOHelmet 
                title="Premium Plan | WorkShifted"
                noindex={true}
              />
              <PremiumPlan />
            </PrivateRoute>
          } />
          
          {/* Legal pages */}
          <Route path="/terms-of-service" element={
            <>
              <SEOHelmet 
                title="Terms of Service | WorkShifted"
                description="Terms of service for WorkShifted AI career evolution platform."
                canonical="https://getworkshifted.com/terms-of-service"
              />
              <TermsOfService />
            </>
          } />
          
          <Route path="/privacy-policy" element={
            <>
              <SEOHelmet 
                title="Privacy Policy | WorkShifted"
                description="Privacy policy for WorkShifted AI career evolution platform."
                canonical="https://getworkshifted.com/privacy-policy"
              />
              <PrivacyPolicy />
            </>
          } />
          
          <Route path="/refund-policy" element={
            <>
              <SEOHelmet 
                title="Refund Policy | WorkShifted"
                description="Refund policy for WorkShifted premium services."
                canonical="https://getworkshifted.com/refund-policy"
              />
              <RefundPolicy />
            </>
          } />
          
          <Route path="/contact" element={
            <>
              <SEOHelmet 
                title="Contact Us | WorkShifted"
                description="Get in touch with WorkShifted for support, questions, or partnership opportunities."
                canonical="https://getworkshifted.com/contact"
              />
              <Contact />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;