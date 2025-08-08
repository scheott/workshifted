import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './Auth';
import Assessment from './pages/Assessment';
import Results from './pages/Results'; // Assuming you have this from previous phases
import UserDashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/assessment" element={
            <PrivateRoute>
              <Assessment />
            </PrivateRoute>
          } />
          <Route path="/results" element={
            <PrivateRoute>
              <Results />
            </PrivateRoute>
          } />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;