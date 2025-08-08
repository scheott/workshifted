// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './Auth';
import Assessment from './pages/Assessment';
import PrivateRoute from './components/PrivateRoute';
import Results from './pages/Results';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

        <Route
          path="/assessment"
          element={
            <PrivateRoute>
              <Assessment />
            </PrivateRoute>
          }
        />

        <Route
          path="/results"
          element={
            <PrivateRoute>
              <Results />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}