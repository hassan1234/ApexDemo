// APEX — main app
import { useState, useEffect, useRef } from 'react';
import { useScrollY } from './hooks.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee, { MiniTicker } from './components/Marquee.jsx';
import Stats from './components/Stats.jsx';
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
  showCursor: true,
  showNoise: true,
  showScrollProgress: true,
  showMarquee: true,
  heroVariant: 'Bold',
  heroVideo: '/assets/hero.mp4',
  heroVideoPoster: '/assets/hero-poster.jpg',
  heroVideoDark: true,
};

export default function App() {
  const [t, setTweak] = useTweaks(DEFAULTS, 'apex.tweaks');
  const y = useScrollY();
  const cursorRef = useRef(null);
  const docH = useRef(1);
  const [hovering, setHovering] = useState(false);

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

  // custom cursor
  useEffect(() => {
    if (!t.showCursor) return;
    const onMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    const onOver = (e) => {
      const t2 = e.target;
      if (!t2 || !t2.closest) return;
      const hov = !!t2.closest('a, button, [data-hover], .svc-card, .proj, .fleet-item, .beforeafter');
      setHovering(hov);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [t.showCursor]);

  const progress = Math.min(1, y / docH.current);

  return (
    <>
      {t.showNoise && <div className="noise" />}
      {t.showScrollProgress && (
        <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      )}
      {t.showCursor && <div ref={cursorRef} className={`cursor-dot ${hovering ? 'hover' : ''}`} />}

      <Nav />
      <Hero
        accent={t.accent}
        videoSrc={t.heroVideo}
        videoPoster={t.heroVideoPoster}
        videoDark={t.heroVideoDark}
      />
      {t.showMarquee && <Marquee />}
      <MiniTicker />
      <Stats />
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
            label="Custom red cursor"
            value={t.showCursor}
            onChange={(v) => setTweak('showCursor', v)}
          />
          <TweakToggle
            label="Paper noise overlay"
            value={t.showNoise}
            onChange={(v) => setTweak('showNoise', v)}
          />
          <TweakToggle
            label="Heavy marquee"
            value={t.showMarquee}
            onChange={(v) => setTweak('showMarquee', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}
