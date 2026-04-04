/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Portfolio from './components/Sections/Portfolio';
import Tech from './components/Sections/Tech';
import SectorsAndSolutions from './components/Sections/Sectors';
import ProcessAndReviews from './components/Sections/Process';
import RecruitersAndContact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import Customizer from './components/UI/Customizer';
import MusicPlayer from './components/UI/MusicPlayer';
import Chatbot from './components/UI/Chatbot';
import DynamicBackground from './components/UI/DynamicBackground';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-primary/30 selection:text-primary transition-colors duration-500">
        {/* Dynamic Background */}
        <DynamicBackground />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Tech />
          <SectorsAndSolutions />
          <ProcessAndReviews />
          <RecruitersAndContact />
        </main>

        {/* Footer */}
        <Footer />

        {/* UI Overlays */}
        <Customizer />
        <MusicPlayer />
        <Chatbot />
      </div>
    </AppProvider>
  );
}
