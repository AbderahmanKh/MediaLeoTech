import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/contact';
import News from './pages/blog';
import Footer from './components/Footer';
import { WhatsAppButton } from './pages/compon/whatsappBotton';

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
    <WhatsAppButton phoneNumber="1234567890" message="Hello, I have a question about your services." />
    <Footer />
    </>
  );
};

export default App;
