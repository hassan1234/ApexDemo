export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          APEX<sup>®</sup>
        </div>
        <div className="footer__col">
          <h4>HQ</h4>
          <span>2400 Industrial Drive</span>
          <span>Springfield, VA 22150</span>
          <span>Serving DC / VA / MD</span>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <a href="#">info@apexdemolition.com</a>
          <a href="#">careers@apexdemolition.com</a>
          <a href="#">+1 (703) APEX-DMV</a>
        </div>
        <div className="footer__col">
          <h4>Index</h4>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#projects">Projects</a>
          <a href="#fleet">Fleet</a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Apex Demolition LLC</span>
        <span>VA #2705-178042 / DC LIC 420080 / MHIC #142008</span>
        <span>Site v3.0 — Precision is a discipline.</span>
      </div>
    </footer>
  );
}
