import { useState, useEffect, useRef } from 'react';
import { useScrollY } from '../hooks.jsx';
import SectionHead from './SectionHead.jsx';

const SERVICES = [
  {
    n: '01',
    title: 'Commercial',
    desc:
      'Mid-rise office, retail, warehouse. We sequence around live tenants, traffic and trading hours. Crews work nights, weekends, holidays — whatever the site demands.',
    tag: 'DC-READY',
  },
  {
    n: '02',
    title: 'Industrial',
    desc:
      'Factories, plant rooms, federal sites. Heavy steel, contaminated substrates, high-risk lifts. Our supervisors hold every certification the job asks for.',
    tag: 'HIGH-RISK',
  },
  {
    n: '03',
    title: 'Residential',
    desc:
      'Single dwellings to entire blocks. Surveyors, abatement teams and county liaison rolled into one contract. Cleanest neighbor you’ll have.',
    tag: 'COUNTY-LIAISED',
  },
  {
    n: '04',
    title: 'Soft-Strip',
    desc:
      'Pre-demo strip and salvage. Fixtures, fittings, copper, joinery — separated, tagged and routed to the highest-value reuse path available.',
    tag: 'SALVAGE-FIRST',
  },
  {
    n: '05',
    title: 'Abatement',
    desc:
      'Asbestos, lead, mold. Full enclosure builds, negative-pressure setups, air monitoring, third-party clearance. Documented from first cut to clearance certificate.',
    tag: 'EPA / OSHA',
  },
  {
    n: '06',
    title: 'Heritage',
    desc:
      'Sensitive façade retention, partial demolition, archive-grade documentation. Engineers and historic-preservation architects on every brief.',
    tag: 'FAÇADE-RETAINED',
  },
  {
    n: '07',
    title: 'Emergency',
    desc:
      'Fire, storm, structural failure. Mobilized crews on the road inside 90 minutes anywhere in the DMV.',
    tag: '24 / 7',
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const y = useScrollY();
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [sectionHeight, setSectionHeight] = useState('200vh');

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const trackW = trackRef.current.scrollWidth;
      const viewportW = window.innerWidth;
      const viewportH = window.innerHeight;
      const maxShift = Math.max(0, trackW - viewportW + 64);
      const h = viewportH + maxShift;
      setSectionHeight(`${h}px`);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;
    const sec = sectionRef.current;
    const track = trackRef.current;
    const rect = sec.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const total = sec.offsetHeight - window.innerHeight;
    const p = total > 0 ? Math.min(1, Math.max(0, (y - top) / total)) : 0;
    setProgress(p);
    const trackW = track.scrollWidth;
    const viewportW = window.innerWidth;
    const maxShift = Math.max(0, trackW - viewportW + 64);
    track.style.transform = `translate3d(${-p * maxShift}px, 0, 0)`;
    setActiveIdx(Math.min(SERVICES.length - 1, Math.floor(p * SERVICES.length)));
  }, [y, sectionHeight]);

  return (
    <section id="services" ref={sectionRef} className="services" style={{ height: sectionHeight }}>
      <div className="services__pin">
        <div className="services__h">
          <SectionHead
            num="01 / SERVICES — WHAT WE DO"
            title="Built to come"
            strikeWord="down"
            lede="Single dwellings to industrial sites — every job runs through the same disciplined, documented process."
          />
        </div>

        <div className="services__track-wrap">
          <div className="services__track" ref={trackRef}>
            {SERVICES.map((s) => (
              <article key={s.n} className="svc-card">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <div className="svc-card__num">/ {s.n}</div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      letterSpacing: '0.2em',
                      color: 'var(--gray-2)',
                      border: '1px solid var(--line-dark)',
                      padding: '4px 8px',
                    }}
                  >
                    {s.tag}
                  </div>
                </div>
                <div className="svc-card__visual">
                  <span>[ {s.title} site photography ]</span>
                </div>
                <div className="svc-card__title">{s.title}</div>
                <div className="svc-card__desc">{s.desc}</div>
                <div className="svc-card__cta">
                  Read service brief{' '}
                  <span style={{ fontFamily: 'Oswald', fontSize: 16 }}>→</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="services__progress">
          <div
            className="services__progress-fill"
            style={{ width: `${progress * 100}%` }}
          />
          <div className="services__progress-meta">
            <span>
              ◢ Keep scrolling — {activeIdx + 1} / {SERVICES.length}
            </span>
            <span>{SERVICES[activeIdx].title.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
