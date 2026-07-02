const SERVICES = [
  {
    n: '01',
    title: 'Structural Restoration',
    desc:
      'Repair and reinstatement of damaged structural elements — beams, columns, load-bearing walls, and foundations — back to their original structural integrity. Engineered solutions, fully documented.',
    tag: 'STRUCTURAL',
  },
  {
    n: '02',
    title: 'Heritage & Façade Restoration',
    desc:
      'Careful preservation of historic buildings. Original masonry repointing, stonework repair, period feature reinstatement, and partial demolition without disturbing retained elements. Archive-grade documentation throughout.',
    tag: 'HERITAGE-GRADE',
  },
  {
    n: '03',
    title: 'Disaster Restoration',
    desc:
      'Storm, fire, flood — we stabilise the structure, strip the damaged material, and restore affected areas to pre-incident condition. Full insurance documentation and third-party sign-off provided.',
    tag: 'EMERGENCY',
  },
  {
    n: '04',
    title: 'Concrete & Masonry Restoration',
    desc:
      'Spalled concrete repair, carbonation treatment, crack injection, and anti-corrosion coating. Bridges, car parks, commercial slabs, and retaining walls restored to original specification.',
    tag: 'STRUCTURAL',
  },
  {
    n: '05',
    title: 'Commercial Demolition',
    desc:
      'Mid-rise office, retail, warehouse. We sequence around live tenants, traffic, and trading hours. Crews work nights, weekends, holidays — whatever the site demands.',
    tag: 'DC-READY',
  },
  {
    n: '06',
    title: 'Residential Demolition',
    desc:
      'Single dwellings to entire rows. Wall removals, full knockdowns, abatement. Surveyors, county liaison, and waste planning all under one contract.',
    tag: 'COUNTY-LIAISED',
  },
  {
    n: '07',
    title: 'Emergency Response',
    desc:
      'Fire, storm, structural failure. Mobilised crews on the road inside 90 minutes anywhere in the DMV. 24 / 7, 365 days a year.',
    tag: '24 / 7',
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <div className="services__head">
          <div className="services__eyebrow">01 / SERVICES — WHAT WE DO</div>
          <p className="services__lede">
            Precise demolition and expert structural restoration — returning buildings to their original integrity, or clearing the site for what comes next.
          </p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <article key={s.n} className="svc-card">
              <div className="svc-card__header">
                <div className="svc-card__num">/ {s.n}</div>
                <div className="svc-card__tag">{s.tag}</div>
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
    </section>
  );
}
