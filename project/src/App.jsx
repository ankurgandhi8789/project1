import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReuseStrategies from './pages/ReuseStrategies';
import RecyclingInnovations from './pages/RecyclingInnovations';
import Education from './pages/Education';
import Impact from './pages/Impact';
import CreativeApproaches from './pages/CreativeApproaches';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reuse" element={<ReuseStrategies />} />
            <Route path="/recycling" element={<RecyclingInnovations />} />
            <Route path="/education" element={<Education />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/creative" element={<CreativeApproaches />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;