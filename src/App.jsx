// src/App.jsx - Complete routing with ALL pages properly linked
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

// AIProof Career Pages - All the missing ones you mentioned!
import AIProofMarketingCareers from './pages/AIProofMarketingCareers';
import AIProofFinanceCareers from './pages/AIProofFinanceCareers';
import AIProofSalesCareers from './pages/AIProofSalesCareers';
import AIProofHRCareers from './pages/AIProofHRCareers';
// import AIProofDataCareers from './pages/AIProofDataCareers';
// import AIProofContentCareers from './pages/AIProofContentCareers';
// import AIProofEngineeringCareers from './pages/AIProofEngineeringCareers';
// import AIProofProjectManagerCareers from './pages/AIProofProjectManagerCareers';
// import AIProofOperationsCareers from './pages/AIProofOperationsCareers';
// import AIProofConsultantCareers from './pages/AIProofConsultantCareers';
import AssessmentSignup from './pages/AssessmentSignup';
// Components
import PrivateRoute from './components/PrivateRoute';
import RedirectIfAuthed from './components/RedirectIfAuthed';
import GoogleAnalytics from './components/GoogleAnalytics';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Google Analytics - tracks all page views automatically */}
        <GoogleAnalytics />
        
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<RedirectIfAuthed><Landing /></RedirectIfAuthed>} />
          <Route path="/auth" element={<RedirectIfAuthed><Auth /></RedirectIfAuthed>} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/auth/reset-password" element={<PasswordReset />} />
          
          {/* Payment Routes */}
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancel" element={<PaymentCancel />} />
          
          {/* SEO Pages - Public */}
          <Route path="/ai-job-displacement-statistics" element={<AIJobDisplacementStats />} />
          <Route path="/will-ai-take-my-job-by-industry" element={<WillAITakeMyJob />} />
          <Route path="/ai-vs-human-jobs-complete-guide" element={<AIvsHumanJobs />} />
          
          {/* Main Assessment Pages - Referenced in LandingHeader */}
          <Route path="/ai-career-risk-assessment" element={<RedirectIfAuthed><Assessment /></RedirectIfAuthed>} />
          <Route path="/ai-proof-your-career" element={<RedirectIfAuthed><Landing /></RedirectIfAuthed>} />
          
          {/* AIProof Career Pages - Public SEO Pages (matching LandingHeader routes) */}
          <Route path="/ai-proof-marketing-careers" element={<AIProofMarketingCareers />} />
          <Route path="/ai-proof-finance-careers" element={<AIProofFinanceCareers />} />
          <Route path="/ai-proof-sales-careers" element={<AIProofSalesCareers />} />
          <Route path="/ai-proof-hr-careers" element={<AIProofHRCareers />} />
          {/* <Route path="/ai-proof-data-careers" element={<AIProofDataCareers />} />
          <Route path="/ai-proof-content-careers" element={<AIProofContentCareers />} />
          <Route path="/ai-proof-engineering-careers" element={<AIProofEngineeringCareers />} />
          <Route path="/ai-proof-project-manager-careers" element={<AIProofProjectManagerCareers />} />
          <Route path="/ai-proof-operations-careers" element={<AIProofOperationsCareers />} />
          <Route path="/ai-proof-consultant-careers" element={<AIProofConsultantCareers />} /> */}
          
          {/* Legal Pages - Public */}
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/refund" element={<RefundPolicy />} />
          
          {/* Protected Routes - Core App */}
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/assessment-signup" element={<AssessmentSignup />} />

          <Route path="/dashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
          
          {/* Protected Routes - Premium Features */}
          <Route path="/plan" element={<PrivateRoute><PremiumPlan /></PrivateRoute>} />
          <Route path="/templates" element={<PrivateRoute><TemplatesLibrary /></PrivateRoute>} />
          <Route path="/ai-leadership-guide" element={<PrivateRoute><AILeadershipGuide /></PrivateRoute>} />
          <Route path="/skills-roadmap" element={<PrivateRoute><SkillsRoadmap /></PrivateRoute>} />
          <Route path="/ai-updates" element={<PrivateRoute><AIUpdates /></PrivateRoute>} />
          <Route path="/ai-tools-database" element={<PrivateRoute><AITools /></PrivateRoute>} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;