import { CountUp, FadeUp } from '../hooks.jsx';

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__grid">
        <FadeUp className="stat" delay={0}>
          <div className="stat__num">
            <CountUp to={240} suffix="+" />
          </div>
          <div className="stat__label">Demolition projects since 2020</div>
        </FadeUp>
        <FadeUp className="stat" delay={120}>
          <div className="stat__num">
            <CountUp to={94} suffix="%" />
          </div>
          <div className="stat__label">Material diverted from landfill</div>
        </FadeUp>
        <FadeUp className="stat" delay={240}>
          <div className="stat__num">
            <CountUp to={68} suffix="kt" />
          </div>
          <div className="stat__label">Concrete crushed &amp; recycled on-site</div>
        </FadeUp>
        <FadeUp className="stat" delay={360}>
          <div className="stat__num">
            <CountUp to={24} suffix="/7" />
          </div>
          <div className="stat__label">Emergency response across the DMV</div>
        </FadeUp>
      </div>
    </section>
  );
}
