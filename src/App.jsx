import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import Skills from './components/Skills';
import ArchitectureSpotlight from './components/ArchitectureSpotlight';
import Projects from './components/Projects';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Dynamic Background Noise and Ambient Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-sky-600/10 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main>
          <Hero onNotify={showNotification} />
          <StatsBanner />
          <Skills />
          <ArchitectureSpotlight />
          <Projects onNotify={showNotification} />
          <EducationCertifications />
          <Contact onNotify={showNotification} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast Alerts */}
        {toastMessage && (
          <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        )}
      </div>
    </div>
  );
}
