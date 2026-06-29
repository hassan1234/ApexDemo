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

  return (
    <nav className="nav">
      <a href="#top" className="nav__brand" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div>
          <div className="nav__brand-mark">
            APEX<span style={{ color: 'var(--red)' }}>.</span>
          </div>
          <div className="nav__brand-sub">RESTORATION & DEMOLITION / DMV</div>
        </div>
      </a>
      <div className="nav__links">
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`nav__link ${active === l.id ? 'is-active' : ''}`}
          >
            <span className="nav__dot" /> {l.label}
          </a>
        ))}
      </div>
      <a href="#contact" className="nav__cta">
        Get a quote <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: 14 }}>→</span>
      </a>
    </nav>
  );
}
