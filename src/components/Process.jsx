import { useState, useEffect, useRef } from 'react';
import { useScrollY } from '../hooks.jsx';

const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Survey',
    word: 'MEASURE',
    desc:
      'We walk every site with engineers, asbestos surveyors and waste planners. Every wall, beam and service is logged into a 3D model before a single screw is touched.',
  },
  {
    n: '02',
    title: 'Soft-Strip',
    word: 'SEPARATE',
    desc:
      'Salvage first. Fixtures, fittings, joinery and metals are pulled, sorted and tagged for resale or recycling. The building gets lighter, the stream gets cleaner.',
  },
  {
    n: '03',
    title: 'Structural',
    word: ['TAKE', '/ IT /', 'DOWN'],
    desc:
      'High-reach excavators, telehandlers and crushers — operated by ticketed crews, monitored by site supervisors, dust-suppressed in real time.',
  },
  {
    n: '04',
    title: 'Recycle',
    word: 'CRUSH',
    desc:
      'On-site concrete crushing converts rubble into reusable aggregate. We hit a 94% diversion rate — the rest is tracked to licensed facilities.',
  },
  {
    n: '05',
    title: 'Handover',
    word: 'CLEAN',
    desc:
      'A graded, compacted, photographed site — ready for the next contractor. Full waste manifest, site report and certificate of completion delivered.',
  },
];

const CornerTicks = () => (
  <>
    {[
      { top: 16, left: 16 },
      { top: 16, right: 16 },
      { bottom: 16, left: 16 },
      { bottom: 16, right: 16 },
    ].map((pos, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          ...pos,
          width: 24,
          height: 24,
          borderTop: pos.top !== undefined ? '1px solid var(--red)' : 'none',
          borderBottom: pos.bottom !== undefined ? '1px solid var(--red)' : 'none',
          borderLeft: pos.left !== undefined ? '1px solid var(--red)' : 'none',
          borderRight: pos.right !== undefined ? '1px solid var(--red)' : 'none',
        }}
      />
    ))}
  </>
);

export default function Process() {
  const wrapRef = useRef(null);
  const y = useScrollY();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const total = wrapRef.current.offsetHeight - window.innerHeight;
    const p = Math.min(1, Math.max(0, (y - top) / total));
    const idx = Math.min(PROCESS_STEPS.length - 1, Math.floor(p * PROCESS_STEPS.length));
    setStep(idx);
  }, [y]);

  const current = PROCESS_STEPS[step];

  return (
    <section
      id="process"
      ref={wrapRef}
      className="process"
      style={{ height: `${PROCESS_STEPS.length * 75}vh` }}
    >
      <div className="process__sticky">
        <div className="process__left">
          <div>
            <div className="section__num" style={{ marginBottom: 24 }}>
              02 / PROCESS — HOW WE BRING IT DOWN
            </div>
            <div
              key={current.n}
              className="process__step-num"
              style={{ animation: 'fadeStep 500ms cubic-bezier(0.2,0.8,0.2,1)' }}
            >
              {current.n}
            </div>
            <div className="process__step-title">{current.title}</div>
            <div className="process__step-desc">{current.desc}</div>
          </div>
          <div className="process__indicator">
            {PROCESS_STEPS.map((_, i) => (
              <div key={i} className={`process__indicator-dot ${i <= step ? 'active' : ''}`} />
            ))}
          </div>
        </div>
        <div className="process__right">
          <div className="process__counter">
            Step {step + 1} / {PROCESS_STEPS.length}
          </div>
          <div
            key={Array.isArray(current.word) ? current.word.join(' ') : current.word}
            className="process__bigword"
          >
            {(Array.isArray(current.word) ? current.word : [current.word]).map((line, i) => (
              <div key={i} style={{ display: 'block' }}>
                <span
                  className={Array.isArray(current.word) && i % 2 === 1 ? 'red' : ''}
                  style={{ fontSize: '140px' }}
                >
                  {line}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 32,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.2em',
              color: 'var(--gray-2)',
              textTransform: 'uppercase',
            }}
          >
            ◢◢◢ Phase {current.n}
          </div>
          <CornerTicks />
        </div>
      </div>
    </section>
  );
}
