import SectionHead from './SectionHead.jsx';
import { FadeUp } from '../hooks.jsx';

const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Survey & Planning',
    desc:
      'We walk every site with engineers, asbestos surveyors and waste planners. Every wall, beam and service is logged into a 3D model before a single screw is touched.',
  },
  {
    n: '02',
    title: 'Soft-Strip & Salvage',
    desc:
      'Salvage first. Fixtures, fittings, joinery and metals are pulled, sorted and tagged for resale or recycling. The building gets lighter, the stream gets cleaner.',
  },
  {
    n: '03',
    title: 'Restoration or Structural Work',
    desc:
      'Careful heritage restoration, façade retention, or high-reach demolition — operated by ticketed crews, monitored by site supervisors, dust-suppressed in real time.',
  },
  {
    n: '04',
    title: 'Recycle & Clear',
    desc:
      'On-site concrete crushing converts rubble into reusable aggregate. We hit a 94% diversion rate — the rest is tracked to licensed facilities.',
  },
  {
    n: '05',
    title: 'Handover',
    desc:
      'A graded, compacted, photographed site ready for the next contractor. Full waste manifest, site report and certificate of completion delivered.',
  },
];

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="process__inner">
        <SectionHead
          num="02 / PROCESS — HOW WE WORK"
          title="The"
          strikeWord="process"
          lede="Restoration or demolition — every job follows the same five-step discipline."
        />
        <div className="process__list">
          {PROCESS_STEPS.map((s, i) => (
            <FadeUp key={s.n} className="process__row" delay={i * 80}>
              <div className="process__row-num">{s.n}</div>
              <div className="process__row-body">
                <div className="process__row-title">{s.title}</div>
                <div className="process__row-desc">{s.desc}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
