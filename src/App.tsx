import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/contact';
import News from './pages/blog';
import Footer from './pages/Footer';

const App: React.FC = () => {
  return (
    <>
    <div className="min-h-screen">
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default App;
