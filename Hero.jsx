/* Hero.jsx — name + tagline + stats + CTAs + scroll hint */
function Hero() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section id="home" data-screen-label="01 Hero">
      <div className="hero-particles"></div>
      <div className="hero-line"></div>
      <div className="hero-content">
        <div className="hero-dot"></div>
        <h1 className="hero-h1">
          Hi, I'm<br/>
          <span className="gold">{D.name.first} {D.name.last}</span>
        </h1>
        <p className="hero-sub">{D.subtitle}</p>
        <p className="hero-tagline">{D.tagline}</p>

        <div className="hero-stats">
          {D.stats.map((s, i) => (
            <div className="hstat" key={i}>
              <span className="hstat-val">{s.val}</span>
              <span className="hstat-lbl">{s.lbl}</span>
            </div>
          ))}
        </div>

        <div className="hero-btns">
          <a href="#projects" className="btn-p">View Work</a>
          <a href="Sangram_Lembe_Resume.pdf" target="_blank" rel="noreferrer" className="btn-o">Resume</a>
          <a href={D.social.github} target="_blank" rel="noreferrer" className="btn-o">GitHub</a>
          <a href="#contact" className="btn-o">Contact Me</a>
        </div>
      </div>
      <div className="scroll-hint">
        <div className="scroll-mouse"><div className="scroll-ball"></div></div>
      </div>
    </section>
  );
}
window.Hero = Hero;
