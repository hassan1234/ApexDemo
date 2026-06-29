const SERVICES = [
  {
    n: '01',
    title: 'Structural Restoration',
    desc:
      'Façade retention, partial demolition and heritage preservation. Engineers and historic-preservation architects on every brief — documents every phase, archive-grade.',
    tag: 'HERITAGE-GRADE',
  },
  {
    n: '02',
    title: 'Commercial',
    desc:
      'Mid-rise office, retail, warehouse. We sequence around live tenants, traffic and trading hours. Crews work nights, weekends, holidays — whatever the site demands.',
    tag: 'DC-READY',
  },
  {
    n: '03',
    title: 'Industrial',
    desc:
      'Factories, plant rooms, federal sites. Heavy steel, contaminated substrates, high-risk lifts. Our supervisors hold every certification the job asks for.',
    tag: 'HIGH-RISK',
  },
  {
    n: '04',
    title: 'Residential',
    desc:
      "Single dwellings to entire blocks. Surveyors, abatement teams and county liaison rolled into one contract. Cleanest neighbour you'll have.",
    tag: 'COUNTY-LIAISED',
  },
  {
    n: '05',
    title: 'Soft-Strip',
    desc:
      'Pre-demo strip and salvage. Fixtures, fittings, copper, joinery — separated, tagged and routed to the highest-value reuse path available.',
    tag: 'SALVAGE-FIRST',
  },
  {
    n: '06',
    title: 'Abatement',
    desc:
      'Asbestos, lead, mold. Full enclosure builds, negative-pressure setups, air monitoring, third-party clearance. Documented from first cut to clearance certificate.',
    tag: 'EPA / OSHA',
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
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <div className="services__head">
          <div className="services__eyebrow">01 / SERVICES — WHAT WE DO</div>
          <p className="services__lede">From careful restoration to full demolition — tailored to every client, every brief.</p>
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
