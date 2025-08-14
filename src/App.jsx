// src/App.jsx - Updated with all new SEO pages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './Auth';
import Assessment from './pages/Assessment';
//import Results from './pages/Results';
import UserDashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import AuthCallback from './pages/AuthCallback';
import RedirectIfAuthed from './components/RedirectIfAuthed';
import { PaymentSuccess, PaymentCancel } from './pages/PaymentPages';
import TermsOfService from './pages/legal/TermsOfService';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import Contact from './pages/Contact';
import RefundPolicy from './pages/legal/RefundPolicy';
import PasswordReset from './pages/PasswordReset';
import GoogleAnalytics from './components/GoogleAnalytics';
import PremiumPlan from './pages/PremiumPlan';


// Existing SEO pages
import AIJobDisplacementStats from './pages/AIJobDisplacementStats';
import WillAITakeMyJob from './pages/WillAITakeMyJob';
import AIvsHumanJobs from './pages/AIvsHumanJobs';

// New High-Priority SEO pages
import AICareerRiskAssessment from './pages/AICareerRiskAssessment';
import AIProofCareer from './pages/AIProofCareer';
import JobsAICantReplace from './pages/JobsAICantReplace';

// Role-Specific SEO pages
import AIProofMarketingCareers from './pages/AIProofMarketingCareers';
import AIProofFinanceCareers from './pages/AIProofFinanceCareers';
import AIProofHRCareers from './pages/AIProofHRCareers';
import AIProofSalesCareers from './pages/AIProofSalesCareers';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Google Analytics - will track all page views automatically */}
        <GoogleAnalytics />
        <Routes>
          {/* Main App Routes */}
          <Route path="/" element={<RedirectIfAuthed><Landing /></RedirectIfAuthed>} />
          <Route path="/auth" element={<RedirectIfAuthed><Auth /></RedirectIfAuthed>} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancel" element={<PaymentCancel />} />
          <Route path="/auth/reset-password" element={<PasswordReset />} />
          
          {/* Protected Routes */}
          <Route path="/assessment" element={<PrivateRoute><Assessment /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
          <Route path="/plan" element={<PrivateRoute><PremiumPlan /></PrivateRoute>} />

          {/* Legal Pages */}
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/refund" element={<RefundPolicy />} />
          
          {/* SEO Pages - Tier 1: High-Priority Commercial */}
          <Route path="/ai-career-risk-assessment" element={<AICareerRiskAssessment />} />
          <Route path="/ai-proof-your-career" element={<AIProofCareer />} />
          <Route path="/jobs-ai-cannot-replace" element={<JobsAICantReplace />} />
          
          {/* SEO Pages - Tier 2: Role-Specific */}
          <Route path="/ai-proof-marketing-careers" element={<AIProofMarketingCareers />} />
          <Route path="/ai-proof-finance-careers" element={<AIProofFinanceCareers />} />
          <Route path="/ai-proof-hr-careers" element={<AIProofHRCareers />} />
          <Route path="/ai-proof-sales-careers" element={<AIProofSalesCareers />} />
          
          {/* SEO Pages - Tier 3: Existing Industry/Research */}
          <Route path="/ai-vs-human-jobs-complete-guide" element={<AIvsHumanJobs />} />
          <Route path="/will-ai-take-my-job-by-industry" element={<WillAITakeMyJob />} />
          <Route path="/ai-job-displacement-statistics" element={<AIJobDisplacementStats />} />
          
          {/* Future SEO Pages - Add routes as you create them */}
          {/* 
          <Route path="/career-transition-guide-2025" element={<CareerTransitionGuide />} />
          <Route path="/ai-proof-product-manager-roles" element={<AIProofProductCareers />} />
          <Route path="/ai-proof-design-careers" element={<AIProofDesignCareers />} />
          <Route path="/career-change-at-40" element={<CareerChangeAt40 />} />
          <Route path="/skills-gap-analysis-tool" element={<SkillsGapAnalysis />} />
          <Route path="/ai-tools-career-development" element={<AIToolsCareerDev />} />
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;