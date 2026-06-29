import { Link } from 'react-router-dom';
import ComparisonSlider from '../components/ComparisonSlider.jsx';
import Footer from '../components/Footer.jsx';

const PROJECTS = [
  {
    label: 'Kitchen Renovation',
    sublabel: 'Full demolition & luxury fit-out — Springfield, VA / 2025',
    before: '/assets/proj-kitchen-before.jpg',
    after: '/assets/proj-kitchen-after.jpg',
  },
  {
    label: 'Bathroom Overhaul',
    sublabel: 'Strip to substrate & premium tile restoration — Arlington, VA / 2024',
    before: '/assets/proj-bathroom-before.jpg',
    after: '/assets/proj-bathroom-after.jpg',
  },
  {
    label: 'Open-Plan Living Room',
    sublabel: 'Load-bearing wall removal & open-plan conversion — Washington DC / 2025',
    before: '/assets/proj-living-before.jpg',
    after: '/assets/proj-living-after.jpg',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <div className="projects-pg">
        <div className="projects-pg__head">
          <Link to="/" className="projects-pg__back">← Back</Link>
          <div className="section__num" style={{ marginBottom: 12 }}>03 / SELECTED WORK</div>
          <h1 className="projects-pg__title">Our Projects</h1>
          <p className="projects-pg__lede">
            Each project starts with careful demolition and ends with precision craftsmanship.
            Drag the handle to compare before and after.
          </p>
        </div>

        <div className="projects-pg__list">
          {PROJECTS.map((p, i) => (
            <ComparisonSlider
              key={i}
              label={p.label}
              sublabel={p.sublabel}
              beforeSrc={p.before}
              afterSrc={p.after}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
