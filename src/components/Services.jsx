const SERVICES = [
  {
    n: '01',
    title: 'Kitchen Restoration',
    desc:
      'Full kitchen gut and rebuild. We strip everything back to bare walls and floors, then restore with premium finishes — handleless cabinetry, stone countertops, luxury tile. One contractor, start to finish.',
    tag: 'RESTORATION',
  },
  {
    n: '02',
    title: 'Bathroom Restoration',
    desc:
      "Strip to concrete, re-waterproof, and restore. Bespoke tile layouts, floating vanities, frameless glass, heated floors. We handle every trade so you don't have to.",
    tag: 'RESTORATION',
  },
  {
    n: '03',
    title: 'Interior Restoration',
    desc:
      'Heritage plasterwork, original timber, façade retention. Careful deconstruction, expert repair, and like-new reinstatement — all to preservation-grade standards.',
    tag: 'HERITAGE-GRADE',
  },
  {
    n: '04',
    title: 'Commercial Demolition',
    desc:
      'Mid-rise office, retail, warehouse. We sequence around live tenants, trading hours, and traffic. Crews work nights, weekends, holidays — whatever the site demands.',
    tag: 'DC-READY',
  },
  {
    n: '05',
    title: 'Residential Demolition',
    desc:
      'Single dwellings to entire rows. Wall removals, open-plan conversions, full knockdowns. Surveyors, abatement teams, and county liaison all under one contract.',
    tag: 'COUNTY-LIAISED',
  },
  {
    n: '06',
    title: 'Industrial & Hazmat',
    desc:
      'Factories, plant rooms, federal sites. Full asbestos and lead abatement with EPA documentation, negative-pressure setups, and third-party clearance certificates.',
    tag: 'EPA / OSHA',
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
            From precise demolition to full luxury restoration — every scope, every scale, one team.
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
