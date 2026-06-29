import { useState, useEffect } from 'react';
import { useScrollY } from '../hooks.jsx';

const LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'projects', label: 'Projects' },
  { id: 'fleet', label: 'Fleet' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const y = useScrollY();
  const [active, setActive] = useState('top');
  const [heroH, setHeroH] = useState(window.innerHeight);

  useEffect(() => {
    const measure = () => setHeroH(window.innerHeight);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const marker = window.innerHeight * 0.33;
    let current = 'top';
    for (const { id } of LINKS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (r.top <= marker && r.bottom > marker) {
        current = id;
        break;
      }
    }
    setActive(current);
  }, [y]);

  const scrolled = y > heroH * 0.75;

  return (
    <nav
      className="nav"
      style={
        scrolled
          ? {
              background: 'rgba(236,233,230,0.96)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              color: 'var(--ink)',
              mixBlendMode: 'normal',
              borderBottom: '1px solid rgba(17,17,17,0.08)',
            }
          : {}
      }
    >
      <a href="#top" className="nav__brand" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div>
          <div className="nav__brand-mark">
            APEX<span style={{ color: 'var(--red)' }}>.</span>
          </div>
          <div className="nav__brand-sub">RESTORATION & DEMOLITION</div>
        </div>
      </a>
      <div className="nav__links">
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`nav__link ${active === l.id ? 'is-active' : ''}`}
            style={scrolled ? { color: 'var(--ink)' } : {}}
          >
            <span className="nav__dot" /> {l.label}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="nav__cta"
        style={scrolled ? { background: 'var(--ink)', color: 'var(--bone)' } : {}}
      >
        Get a quote <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: 14 }}>→</span>
      </a>
    </nav>
  );
}
