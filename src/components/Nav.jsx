import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollY } from '../hooks.jsx';

const ANCHOR_LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'fleet', label: 'Fleet' },
];

export default function Nav() {
  const y = useScrollY();
  const location = useLocation();
  const [heroH, setHeroH] = useState(window.innerHeight);
  const [active, setActive] = useState('top');

  useEffect(() => {
    const measure = () => setHeroH(window.innerHeight);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Only track anchor sections on the home page
  useEffect(() => {
    if (location.pathname !== '/') return;
    const marker = window.innerHeight * 0.33;
    let current = 'top';
    for (const { id } of ANCHOR_LINKS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (r.top <= marker && r.bottom > marker) {
        current = id;
        break;
      }
    }
    setActive(current);
  }, [y, location.pathname]);

  const onHome = location.pathname === '/';
  const scrolled = onHome ? y > heroH * 0.75 : true;

  const navStyle = scrolled
    ? {
        background: 'rgba(236,233,230,0.96)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        color: 'var(--ink)',
        mixBlendMode: 'normal',
        borderBottom: '1px solid rgba(17,17,17,0.08)',
      }
    : {};

  const linkColor = scrolled ? { color: 'var(--ink)' } : {};

  return (
    <nav className="nav" style={navStyle}>
      <Link to="/" className="nav__brand" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div>
          <div className="nav__brand-mark">
            APEX<span style={{ color: 'var(--red)' }}>.</span>
          </div>
          <div className="nav__brand-sub">DEMOLITION & RESTORATION</div>
        </div>
      </Link>

      <div className="nav__links">
        {/* Anchor links (home only) */}
        {ANCHOR_LINKS.map((l) => (
          <a
            key={l.id}
            href={onHome ? `#${l.id}` : `/#${l.id}`}
            className={`nav__link ${active === l.id ? 'is-active' : ''}`}
            style={linkColor}
          >
            <span className="nav__dot" /> {l.label}
          </a>
        ))}

        {/* Page links */}
        <Link
          to="/projects"
          className={`nav__link ${location.pathname === '/projects' ? 'is-active' : ''}`}
          style={linkColor}
        >
          <span className="nav__dot" /> Projects
        </Link>
        <Link
          to="/contact"
          className={`nav__link ${location.pathname === '/contact' ? 'is-active' : ''}`}
          style={linkColor}
        >
          <span className="nav__dot" /> Contact
        </Link>
      </div>

      <Link
        to="/contact"
        className="nav__cta"
        style={scrolled ? { background: 'var(--ink)', color: 'var(--bone)' } : {}}
      >
        Get a quote <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: 14 }}>→</span>
      </Link>
    </nav>
  );
}
