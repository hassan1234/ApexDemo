import { Link } from 'react-router-dom';
import ComparisonSlider from '../components/ComparisonSlider.jsx';
import Footer from '../components/Footer.jsx';

const PROJECTS = [
  {
    label: 'Heritage Façade Restoration',
    sublabel: 'Original masonry repointing & stonework reinstatement — Alexandria, VA / 2025',
    before: null,
    after: null,
  },
  {
    label: 'Post-Storm Structural Restoration',
    sublabel: 'Stabilisation & structural reinstatement to pre-incident condition — Arlington, VA / 2024',
    before: null,
    after: null,
  },
  {
    label: 'Commercial Interior Demolition',
    sublabel: 'Full soft-strip & structural clearance — Washington DC / 2025',
    before: null,
    after: null,
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
            A selection of demolition and restoration projects across the DMV.
            Drag the handle to compare site conditions before and after our work.
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
