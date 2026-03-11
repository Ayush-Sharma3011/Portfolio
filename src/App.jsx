import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DetailedSkills from './pages/DetailedSkills';
import DetailedAbout from './pages/DetailedAbout';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<DetailedSkills />} />
          <Route path="/about" element={<DetailedAbout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
