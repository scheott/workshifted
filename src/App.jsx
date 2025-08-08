import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './Auth';
import Assessment from './pages/Assessment';
import Results from './pages/Results'; // Assuming you have this from previous phases
import UserDashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import AuthCallback from './pages/AuthCallback';
import RedirectIfAuthed from './components/RedirectIfAuthed';
import { PaymentSuccess, PaymentCancel } from './pages/PaymentPages';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RedirectIfAuthed><Landing /></RedirectIfAuthed>} />
          <Route path="/auth" element={<RedirectIfAuthed><Auth /></RedirectIfAuthed>} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancel" element={<PaymentCancel />} />

          <Route path="/assessment" element={<PrivateRoute><Assessment /></PrivateRoute>} />
          <Route path="/results" element={<PrivateRoute><Results /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;