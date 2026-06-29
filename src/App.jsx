// APEX — main app
import { useState, useEffect, useRef } from 'react';
import { useScrollY } from './hooks.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Projects from './components/Projects.jsx';
import Fleet from './components/Fleet.jsx';
import Cta from './components/Cta.jsx';
import Footer from './components/Footer.jsx';
import {
  TweaksPanel,
  TweakSection,
  TweakColor,
  TweakText,
  TweakToggle,
  useTweaks,
} from './components/TweaksPanel.jsx';

const DEFAULTS = {
  accent: '#FF2A2A',
  showNoise: true,
  showScrollProgress: true,
  heroVideo: '',
  heroVideoPoster: '',
  heroVideoDark: false,
};

export default function App() {
  const [t, setTweak] = useTweaks(DEFAULTS, 'apex.tweaks');
  const y = useScrollY();
  const docH = useRef(1);

  useEffect(() => {
    document.documentElement.style.setProperty('--red', t.accent);
  }, [t.accent]);

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

      <Nav />
      <Hero
        videoSrc={t.heroVideo}
        videoPoster={t.heroVideoPoster}
        videoDark={t.heroVideoDark}
      />
      <Services />
      <Process />
      <Projects />
      <Fleet />
      <Cta />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand">
          <TweakColor
            label="Accent"
            value={t.accent}
            options={['#FF2A2A', '#FF6B00', '#D7F500', '#00C2FF', '#FFFFFF']}
            onChange={(v) => setTweak('accent', v)}
          />
        </TweakSection>
        <TweakSection label="Hero">
          <TweakText
            label="Video URL (mp4/webm)"
            value={t.heroVideo}
            onChange={(v) => setTweak('heroVideo', v)}
            placeholder="/assets/hero.mp4"
          />
          <TweakToggle
            label="Dark scrim (for light video)"
            value={t.heroVideoDark}
            onChange={(v) => setTweak('heroVideoDark', v)}
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
