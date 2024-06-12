import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginWithNavigation from './Components/Login';
import RegisterWithNavigation from './Components/Register';
import LandingPage from './Components/LandingPage';
import PrivateRoute from './Components/PrivateRoute';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginWithNavigation />} />
        <Route path="/register" element={<RegisterWithNavigation />} />
        <Route
          path="/landing"
          element={
            <PrivateRoute>
              <LandingPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<LoginWithNavigation />} /> 
      </Routes>
    </Router>
  );
};

export default App;
