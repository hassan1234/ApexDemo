import { useState, useEffect, useRef } from 'react';
import { useScrollY } from '../hooks.jsx';

export default function Hero({ videoSrc, videoPoster, videoDark }) {
  const y = useScrollY();
  const videoRef = useRef(null);
  const [videoOk, setVideoOk] = useState(false);
  const letters = ['A', 'P', 'E', 'X', '.'];
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReveal(true), 200);
    return () => clearTimeout(t);
  }, []);

  const dust = useRef(null);
  useEffect(() => {
    if (!dust.current) return;
    const N = 20;
    dust.current.innerHTML = '';
    for (let i = 0; i < N; i++) {
      const p = document.createElement('div');
      p.className = 'dust-particle';
      const size = 1 + Math.random() * 3;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.dataset.speed = (0.05 + Math.random() * 0.2).toString();
      p.dataset.drift = (Math.random() * 40 - 20).toString();
      dust.current.appendChild(p);
    }
  }, []);

  useEffect(() => {
    if (!dust.current) return;
    const particles = dust.current.querySelectorAll('.dust-particle');
    particles.forEach((p) => {
      const speed = parseFloat(p.dataset.speed);
      const drift = parseFloat(p.dataset.drift);
      p.style.transform = `translate(${y * 0.01 * drift}px, ${y * speed}px)`;
    });
  }, [y]);

  return (
    <header className={`hero ${videoDark ? 'hero--dark' : ''}`} id="top">
      {videoSrc ? (
        <video
          ref={videoRef}
          className={`hero__video ${videoOk ? 'is-ready' : ''}`}
          src={videoSrc}
          poster={videoPoster || undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoOk(true)}
          onError={() => setVideoOk(false)}
        />
      ) : null}
      {!videoSrc || !videoOk ? <div className="hero__video-fallback" /> : null}
      <div className="hero__scrim" />
      <div className="hero__dust" ref={dust} />
      <div className="hero__top">
        <div>
          <span></span>
          <b>Washington DC · Virginia · Maryland</b>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span>EST. 2020</span>
          <b>SITE v3.0 / 2026</b>
        </div>
      </div>

      <div className="hero__title">
        <div className="hero__type" aria-label="APEX.">
          {letters.map((l, i) => (
            <span
              key={i}
              className="hero__letter"
              style={{
                color: l === '.' ? 'var(--red)' : 'var(--bone)',
                transform: reveal
                  ? `translateY(0) rotate(0deg)`
                  : `translateY(${20 + i * 8}vh) rotate(${(i - 2) * 4}deg)`,
                opacity: reveal ? 1 : 0,
                transitionDelay: `${i * 90}ms`,
              }}
            >
              {l}
            </span>
          ))}
        </div>
        <div className="hero__subtitle">
          Restoration &amp; Demolition
        </div>
      </div>

      <div className="hero__bottom hero__bottom--two">
        <div className="hero__tagline">
          Expert restoration.
          <br />
          <em>Precision demolition.</em>
        </div>
        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <div>Scroll to explore</div>
        </div>
      </div>
    </header>
  );
}
