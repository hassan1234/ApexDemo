import { useState, useEffect, useRef } from 'react';

const LETTERS = ['A', 'P', 'E', 'X', '.'];

export default function Hero() {
  const [reveal, setReveal] = useState(false);
  const [videoOk, setVideoOk] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setReveal(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="hero--cf" id="top">
      {/* Static image shown while video loads (or if video fails) */}
      <div className={`hero__cf-bg hero__cf-before ${videoOk ? 'hero__cf-bg--hidden' : ''}`} />

      {/* Video background */}
      <video
        ref={videoRef}
        className={`hero__cf-video ${videoOk ? 'is-ready' : ''}`}
        src="/assets/hero.mp4"
        poster="/assets/hero-before.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setVideoOk(true)}
        onError={() => setVideoOk(false)}
      />

      {/* Scrim */}
      <div className="hero__cf-scrim" />

      {/* APEX logo — centred */}
      <div className="hero__cf-logo">
        <div className="hero__cf-type" aria-label="APEX.">
          {LETTERS.map((l, i) => (
            <span
              key={i}
              className="hero__cf-letter"
              style={{
                color: l === '.' ? 'var(--red)' : 'var(--bone)',
                transform: reveal
                  ? 'translateY(0) rotate(0deg)'
                  : `translateY(${20 + i * 8}vh) rotate(${(i - 2) * 4}deg)`,
                opacity: reveal ? 1 : 0,
                transitionDelay: `${i * 90}ms`,
              }}
            >
              {l}
            </span>
          ))}
        </div>
        <div className="hero__cf-subtitle">Restoration &amp; Demolition</div>
      </div>

      {/* Bottom bar */}
      <div className="hero__cf-bottom">
        <a href="#contact" className="hero__cf-btn">
          Schedule Site Consultation <span>→</span>
        </a>
      </div>
    </header>
  );
}
