import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

export default function ContactPage() {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="contact-pg">
        <div className="contact-pg__inner">
          <Link to="/" className="projects-pg__back">← Back</Link>
          <div className="section__num" style={{ marginBottom: 24 }}>05 / CONTACT</div>

          <h1 className="contact-pg__title">
            Let's talk about
            <br />
            <em>your project.</em>
          </h1>

          <p className="contact-pg__lede">
            Whether it's a full demolition, a careful restoration, or anything in between —
            tell us about your site and we'll get back to you within 24 hours.
          </p>

          <div className="contact-pg__grid">
            <div className="contact-pg__info">
              <div className="contact-pg__info-block">
                <div className="contact-pg__info-label">Email</div>
                <a href="mailto:info@apexrdmv.com" className="contact-pg__info-val">
                  info@apexrdmv.com
                </a>
              </div>
              <div className="contact-pg__info-block">
                <div className="contact-pg__info-label">Phone</div>
                <a href="tel:+17034739368" className="contact-pg__info-val">
                  (703) APEX-DMV
                </a>
              </div>
              <div className="contact-pg__info-block">
                <div className="contact-pg__info-label">Emergency</div>
                <div className="contact-pg__info-val">24 / 7 Response Available</div>
              </div>
              <div className="contact-pg__info-block">
                <div className="contact-pg__info-label">Office</div>
                <div className="contact-pg__info-val">
                  2400 Industrial Drive<br />Springfield, VA 22150
                </div>
              </div>
              <div className="contact-pg__info-block">
                <div className="contact-pg__info-label">Licensed In</div>
                <div className="contact-pg__info-val">VA · DC · MD</div>
              </div>
            </div>

            <form className="contact-pg__form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-pg__row">
                <div className="contact-pg__field">
                  <label className="contact-pg__field-label">Name</label>
                  <input type="text" className="contact-pg__input" placeholder="Your name" />
                </div>
                <div className="contact-pg__field">
                  <label className="contact-pg__field-label">Company</label>
                  <input type="text" className="contact-pg__input" placeholder="Company (optional)" />
                </div>
              </div>
              <div className="contact-pg__row">
                <div className="contact-pg__field">
                  <label className="contact-pg__field-label">Email</label>
                  <input type="email" className="contact-pg__input" placeholder="you@company.com" />
                </div>
                <div className="contact-pg__field">
                  <label className="contact-pg__field-label">Phone</label>
                  <input type="tel" className="contact-pg__input" placeholder="(703) 000-0000" />
                </div>
              </div>
              <div className="contact-pg__field">
                <label className="contact-pg__field-label">Project type</label>
                <select className="contact-pg__input contact-pg__select">
                  <option value="">Select a service</option>
                  <option>Structural Restoration</option>
                  <option>Commercial Demolition</option>
                  <option>Industrial Demolition</option>
                  <option>Residential Demolition</option>
                  <option>Soft-Strip &amp; Salvage</option>
                  <option>Abatement</option>
                  <option>Emergency Response</option>
                </select>
              </div>
              <div className="contact-pg__field">
                <label className="contact-pg__field-label">Tell us about your site</label>
                <textarea
                  className="contact-pg__input contact-pg__textarea"
                  placeholder="Location, scope, timeline, any specific requirements..."
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="contact-pg__submit"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Send enquiry {hover ? '→→' : '→'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
