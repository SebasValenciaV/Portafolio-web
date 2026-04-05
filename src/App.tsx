/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Dashboard from './components/Sections/Dashboard';
import Portfolio from './components/Sections/Portfolio';
import Tech from './components/Sections/Tech';
import SectorsAndSolutions from './components/Sections/Sectors';
import ProcessAndReviews from './components/Sections/Process';
import RecruitersAndContact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import Customizer from './components/UI/Customizer';
import MusicPlayer from './components/UI/MusicPlayer';
import DynamicBackground from './components/UI/DynamicBackground';
import WhatsAppButton from './components/UI/WhatsAppButton';
import LocalChatbot from './components/UI/LocalChatbot';
import FuturisticSection from './components/UI/FuturisticSection';
import GameFloatingButton from './components/UI/GameFloatingButton';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen transition-colors duration-500">
        {/* Dynamic Background */}
        <DynamicBackground />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <FuturisticSection id="home"><Hero /></FuturisticSection>
          <FuturisticSection id="about" className="-mt-12 relative z-10"><About /></FuturisticSection>
          <FuturisticSection id="dashboard" className="-mt-12 relative z-20"><Dashboard /></FuturisticSection>
          <FuturisticSection id="portfolio" className="-mt-12 relative z-10"><Portfolio /></FuturisticSection>
          <FuturisticSection id="tech" className="-mt-12 relative z-20"><Tech /></FuturisticSection>
          <FuturisticSection id="sectors" className="-mt-12 relative z-10"><SectorsAndSolutions /></FuturisticSection>
          <FuturisticSection id="process" className="-mt-12 relative z-20"><ProcessAndReviews /></FuturisticSection>
          <FuturisticSection id="contact" className="-mt-12 relative z-10"><RecruitersAndContact /></FuturisticSection>
        </main>

        {/* Footer */}
        <Footer />

        {/* UI Overlays */}
        <Customizer />
        <MusicPlayer />
        <LocalChatbot />
        <WhatsAppButton />
        <GameFloatingButton />
      </div>
    </AppProvider>
  );
}
