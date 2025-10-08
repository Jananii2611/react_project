import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Crops from './pages/Crops';
import Market from './pages/Market';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="full-bg">
        <Sidebar />
        <main className="mainzone">
          <Header />
          <div className="not-container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/crops" element={<Crops />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/market" element={<Market />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
export default App;
