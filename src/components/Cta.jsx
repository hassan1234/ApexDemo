import { useState } from 'react';

export default function Cta() {
  const [hover, setHover] = useState(false);
  return (
    <section id="contact" className="cta">
      <div className="cta__pre">/ 05 — START A BRIEF</div>
      <h2 className="cta__title">
        Got something
        <br />
        to bring down?
      </h2>
      <a
        href="#"
        className="cta__btn"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={(e) => e.preventDefault()}
      >
        Request a site visit <span className="arrow">{hover ? '→→' : '→'}</span>
      </a>
      <div className="cta__meta">
        <span>info@apexdemolition.com</span>
        <span>(703) APEX-DMV</span>
        <span>24/7 EMERGENCY LINE</span>
      </div>
    </section>
  );
}
