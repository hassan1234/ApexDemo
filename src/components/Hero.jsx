import { useState, useEffect } from 'react';

// Crossfade timing
// 0s      → hold "before" for 4s
// 4s      → fade to "after" over 2s (CSS transition)
// 6s      → hold "after" for 4s
// 10s     → fade back to "before" over 2s
// 12s     → repeat

export default function Hero() {
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    let timeout;
    const schedule = (delay) => {
      timeout = setTimeout(() => {
        setShowAfter((prev) => !prev);
        schedule(6000); // 4s hold + 2s already in CSS transition
      }, delay);
    };
    schedule(4000); // initial hold before first crossfade
    return () => clearTimeout(timeout);
  }, []);

  return (
    <header className="hero hero--cf" id="top">
      {/* Background: before layer (always underneath) */}
      <div className="hero__cf-bg hero__cf-before" />

      {/* Background: after layer (fades in/out on top) */}
      <div className={`hero__cf-bg hero__cf-after ${showAfter ? 'is-visible' : ''}`} />

      {/* Dark scrim for text legibility */}
      <div className="hero__cf-scrim" />

      {/* State indicator pill */}
      <div className="hero__cf-indicator">
        <span className={!showAfter ? 'is-on' : ''}>BEFORE</span>
        <span className="hero__cf-indicator-sep" />
        <span className={showAfter ? 'is-on' : ''}>AFTER</span>
      </div>

      {/* Main content */}
      <div className="hero__cf-content">
        <p className="hero__cf-eyebrow">Apex Restoration &amp; Demolition — DMV</p>
        <h1 className="hero__cf-headline">
          Smart Demolition.<br />
          <em>Flawless Restoration.</em>
        </h1>
        <p className="hero__cf-sub">
          We clear the old with precision to build your perfect canvas.
        </p>
        <a href="#contact" className="hero__cf-btn">
          Schedule Site Consultation <span>→</span>
        </a>
      </div>
    </header>
  );
}
