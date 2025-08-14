// Updated App.jsx - Complete routes with personalized premium features
// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './Auth';
import Assessment from './pages/Assessment';
//import Results from './pages/Results';
import UserDashboard from './pages/Dashboard';
import PremiumPlan from './pages/PremiumPlan';
import PrivateRoute from './components/PrivateRoute';
import AuthCallback from './pages/AuthCallback';
import RedirectIfAuthed from './components/RedirectIfAuthed';
import { PaymentSuccess, PaymentCancel } from './pages/PaymentPages';

// Add the new personalized shell pages
import TemplatesLibrary from './pages/TemplatesLibrary';
import AILeadershipGuide from './pages/AILeadershipGuide';
import SkillsRoadmap from './pages/SkillsRoadmap';
import AIUpdates from './pages/AIUpdates';

// Legal and other pages
import TermsOfService from './pages/legal/TermsOfService';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import Contact from './pages/Contact';
import RefundPolicy from './pages/legal/RefundPolicy';
import PasswordReset from './pages/PasswordReset';
import GoogleAnalytics from './components/GoogleAnalytics';

// SEO pages
import AIJobDisplacementStats from './pages/AIJobDisplacementStats';
import WillAITakeMyJob from './pages/WillAITakeMyJob';
import AIvsHumanJobs from './pages/AIvsHumanJobs';

function App() {
  return (
    <Router>
      <div className="App">
        <GoogleAnalytics />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<RedirectIfAuthed><Landing /></RedirectIfAuthed>} />
          <Route path="/auth" element={<RedirectIfAuthed><Auth /></RedirectIfAuthed>} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancel" element={<PaymentCancel />} />
          <Route path="/auth/reset-password" element={<PasswordReset />} />
          
          {/* Protected Routes - Core App */}
          <Route path="/assessment" element={<PrivateRoute><Assessment /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
          <Route path="/plan" element={<PrivateRoute><PremiumPlan /></PrivateRoute>} />
          
          {/* Protected Routes - New Premium Features */}
          <Route path="/templates" element={<PrivateRoute><TemplatesLibrary /></PrivateRoute>} />
          <Route path="/ai-leadership-guide" element={<PrivateRoute><AILeadershipGuide /></PrivateRoute>} />
          <Route path="/skills-roadmap" element={<PrivateRoute><SkillsRoadmap /></PrivateRoute>} />
          <Route path="/ai-updates" element={<PrivateRoute><AIUpdates /></PrivateRoute>} />

          {/* Legal Pages */}
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/refund" element={<RefundPolicy />} />
          
          {/* SEO Pages */}
          <Route path="/ai-job-displacement-statistics" element={<AIJobDisplacementStats />} />
          <Route path="/will-ai-take-my-job-by-industry" element={<WillAITakeMyJob />} />
          <Route path="/ai-vs-human-jobs-complete-guide" element={<AIvsHumanJobs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;