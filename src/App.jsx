// APEX — main app
import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useScrollY } from './hooks.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Fleet from './components/Fleet.jsx';
import Footer from './components/Footer.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import {
  TweaksPanel,
  TweakSection,
  TweakColor,
  TweakToggle,
  useTweaks,
} from './components/TweaksPanel.jsx';

const DEFAULTS = {
  accent: '#FF2A2A',
  showNoise: true,
  showScrollProgress: true,
};

function HomePage({ t, setTweak }) {
  const y = useScrollY();
  const docH = useRef(1);

  useEffect(() => {
    const recompute = () => {
      docH.current = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    };
    recompute();
    window.addEventListener('resize', recompute);
    return () => window.removeEventListener('resize', recompute);
  }, []);

  const progress = Math.min(1, y / docH.current);

  return (
    <>
      {t.showNoise && <div className="noise" />}
      {t.showScrollProgress && (
        <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      )}
      <Hero />
      <Services />
      <Fleet />
      <Footer />
    </>
  );
}

export default function App() {
  const [t, setTweak] = useTweaks(DEFAULTS, 'apex.tweaks');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.setProperty('--red', t.accent);
  }, [t.accent]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage t={t} setTweak={setTweak} />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand">
          <TweakColor
            label="Accent"
            value={t.accent}
            options={['#FF2A2A', '#FF6B00', '#D7F500', '#00C2FF', '#FFFFFF']}
            onChange={(v) => setTweak('accent', v)}
          />
        </TweakSection>
        <TweakSection label="Scroll FX">
          <TweakToggle
            label="Page scroll progress bar"
            value={t.showScrollProgress}
            onChange={(v) => setTweak('showScrollProgress', v)}
          />
          <TweakToggle
            label="Paper noise overlay"
            value={t.showNoise}
            onChange={(v) => setTweak('showNoise', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}
