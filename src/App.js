import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          ) : null}
        </ul>
      </nav>
      <Routes>
        {/* Default Rout */}
        <Route exact path="/" element={
          isLoggedIn
            ? <Navigate to="/dashboard" />
            : <Home onLogin={handleLogin} />}>
        </Route>

        <Route path="/login" element={
          isLoggedIn
            ? <Navigate to="/dashboard" />
            : <Login onLogin={handleLogin} />}>
        </Route>

        <Route path="/dashboard" element={
          isLoggedIn
            ? <Dashboard onLogout={handleLogout} />
            : <Navigate to="/" />}>
        </Route>

      </Routes>
    </Router>
  );
};
export default App;
