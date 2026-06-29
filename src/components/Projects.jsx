import { FadeUp } from '../hooks.jsx';
import SectionHead from './SectionHead.jsx';
import BeforeAfter from './BeforeAfter.jsx';

const PROJECTS = [
  {
    tag: 'COMMERCIAL',
    title: 'K Street Tower 14',
    meta: 'WASHINGTON DC / 2025 / 22 STORIES',
    size: 'lg',
    img: '/assets/proj-kstreet.jpg',
  },
  {
    tag: 'RESIDENTIAL',
    title: 'Georgetown Row House',
    meta: 'WASHINGTON DC / 2025 / 8 DWELLINGS',
    size: 'md',
    img: '/assets/proj-georgetown.jpg',
  },
  {
    tag: 'INDUSTRIAL',
    title: 'Sparrows Point Mill',
    meta: 'BALTIMORE MD / 2024 / 38,000 sq ft',
    size: 'sm',
    img: '/assets/proj-sparrows.jpg',
  },
  {
    tag: 'HERITAGE',
    title: 'Federal Façade Retain',
    meta: 'ALEXANDRIA VA / 2024 / GRADE A',
    size: 'sm',
    img: '/assets/proj-federal.jpg',
  },
  {
    tag: 'EMERGENCY',
    title: 'Post-Storm Structural',
    meta: 'ARLINGTON VA / 2024 / 6-DAY MOBILIZE',
    size: 'sm',
    img: '/assets/proj-storm.jpg',
  },
  {
    tag: 'INFRASTRUCTURE',
    title: 'I-66 Overpass Removal',
    meta: 'FAIRFAX VA / 2023 / 72-HOUR WINDOW',
    size: 'wide',
    img: '/assets/proj-i66.jpg',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div style={{ padding: '0 32px', marginBottom: 80 }}>
        <SectionHead
          num="03 / SELECTED WORK"
          title="Sites we've"
          strikeWord="cleared"
          lede="Six projects from a roster of two hundred. Each one different. Each one finished on time, under budget and on a clean grade."
        />
      </div>

      <div className="projects__grid">
        {PROJECTS.map((p, i) => (
          <FadeUp key={i} as="div" className={`proj proj--${p.size}`} delay={i * 80}>
            <div className="proj__img">
              <img src={p.img} alt={p.title} className="proj__photo" />
            </div>
            <div className="proj__overlay">
              <div className="proj__tag">{p.tag}</div>
              <div className="proj__title">{p.title}</div>
              <div className="proj__meta">{p.meta}</div>
            </div>
          </FadeUp>
        ))}
      </div>

      <BeforeAfter />
    </section>
  );
}
