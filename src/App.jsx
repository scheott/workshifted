import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './Auth';
import Assessment from './pages/Assessment';
import Results from './pages/Results'; // Assuming you have this from previous phases
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
import AIJobDisplacementStats from './pages/AIJobDisplacementStats';
import WillAITakeMyJob from './pages/WillAITakeMyJob';
import RecessionProofCareers from './pages/RecessionProofCareers';
import AIvsHumanJobs from './pages/AIvsHumanJobs';





function App() {
  return (
    <Router>
      <div className="App">
        {/* Google Analytics - will track all page views automatically */}
        <GoogleAnalytics />
        <Routes>
          <Route path="/" element={<RedirectIfAuthed><Landing /></RedirectIfAuthed>} />
          <Route path="/auth" element={<RedirectIfAuthed><Auth /></RedirectIfAuthed>} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancel" element={<PaymentCancel />} />
          <Route path="/auth/reset-password" element={<PasswordReset />} />
          <Route path="/ai-job-displacement-statistics" element={<AIJobDisplacementStats />} />
          <Route path="/will-ai-take-my-job-by-industry" element={<WillAITakeMyJob />} />
          <Route path="/recession-proof-careers-2025" element={<RecessionProofCareers />} />
          <Route path="/ai-vs-human-jobs-complete-guide" element={<AIvsHumanJobs />} />
          <Route path="/assessment" element={<PrivateRoute><Assessment /></PrivateRoute>} />
          <Route path="/results" element={<PrivateRoute><Results /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/refund" element={<RefundPolicy />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;