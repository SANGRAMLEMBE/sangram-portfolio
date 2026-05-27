/* CertificationsSection.jsx — 4-col grid with top gold stripe */
function CertificationsSection() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section id="certifications" className="sec" data-screen-label="07 Credentials">
      <div className="wrap">
        <div className="eyebrow fu">Credentials</div>
        <h2 className="sh fu">Certifications<span className="gold-dot">.</span></h2>
        <div className="cert-grid">
          {D.certifications.map((c, i) => (
            <div className="cert-card fu" key={i}>
              <div className="cert-iss">{c.iss}</div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-meta">{c.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.CertificationsSection = CertificationsSection;
