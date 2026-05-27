/* AboutSection.jsx — overview paragraph + 4 expertise gems */
function AboutSection() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section id="about" className="sec" data-screen-label="02 About">
      <div className="wrap">
        <div className="eyebrow fu">Introduction</div>
        <h2 className="sh fu">Overview<span className="gold-dot">.</span></h2>
        <p className="about-body fu">{D.about}</p>
        <div className="gem-grid">
          {D.gems.map((g, i) => (
            <div className="gem-card fu" key={i}>
              <span className="gem-icon">{g.icon}</span>
              <div className="gem-title">{g.title}</div>
              <div className="gem-sub">{g.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.AboutSection = AboutSection;
