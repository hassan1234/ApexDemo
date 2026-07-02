import { Link } from 'react-router-dom';
import { FadeUp } from '../hooks.jsx';
import Footer from '../components/Footer.jsx';

const PROJECTS = [
  {
    size: 'lg',
    tag: 'DEMOLITION',
    title: 'Commercial Clearance',
    meta: 'WASHINGTON DC / 2025 / 18 STOREYS',
    desc: 'Full structural strip and demolition of an 18-storey commercial tower. Sequenced to protect adjacent live buildings, with 94% material diverted from landfill.',
    img: '/assets/proj-commercial-demo.jpg',
  },
  {
    size: 'md',
    tag: 'RESTORATION',
    title: 'Heritage Façade',
    meta: 'ALEXANDRIA VA / 2024 / GRADE A',
    desc: 'Original limestone repointing and stonework reinstatement on a Grade A listed neoclassical building. Every repair matched to archive specification.',
    img: '/assets/proj-facade-restore.jpg',
  },
  {
    size: 'sm',
    tag: 'DEMOLITION',
    title: 'Interior Demolition',
    meta: 'ARLINGTON VA / 2024',
    desc: 'Full soft-strip and concrete floor removal on a 6-storey office building ahead of redevelopment.',
    img: '/assets/proj-interior-demo.jpg',
  },
  {
    size: 'sm',
    tag: 'RESTORATION',
    title: 'Concrete Restoration',
    meta: 'FAIRFAX VA / 2024',
    desc: 'Structural concrete repair and anti-corrosion treatment across a 400-bay multi-storey car park.',
    img: '/assets/proj-concrete-restore.jpg',
  },
  {
    size: 'sm',
    tag: 'DEMOLITION',
    title: 'Residential Block',
    meta: 'BALTIMORE MD / 2023',
    desc: '12-unit residential row cleared to clean grade ahead of mixed-use development.',
    img: null,
  },
  {
    size: 'wide',
    tag: 'DEMOLITION',
    title: 'I-66 Infrastructure Removal',
    meta: 'FAIRFAX VA / 2023 / 72-HOUR WINDOW',
    desc: 'Overpass bridge section removed inside a 72-hour traffic closure window. Precision sequencing, zero overruns.',
    img: '/assets/proj-aerial-demo.jpg',
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
            A selection of demolition and structural restoration projects across the DMV.
            Each one finished on time, on grade, and fully documented.
          </p>
        </div>

        <div className="projects__grid" style={{ paddingBottom: 80 }}>
          {PROJECTS.map((p, i) => (
            <FadeUp key={i} as="div" className={`proj proj--${p.size}`} delay={i * 60}>
              <div className="proj__img">
                {p.img
                  ? <img src={p.img} alt={p.title} className="proj__photo" />
                  : null}
              </div>
              <div className="proj__overlay">
                <div className="proj__tag">{p.tag}</div>
                <div className="proj__title">{p.title}</div>
                <div className="proj__meta">{p.meta}</div>
                <div className="proj__desc">{p.desc}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
