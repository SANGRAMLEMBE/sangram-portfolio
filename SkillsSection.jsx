/* SkillsSection.jsx — 3-col grid of categories, each with neutral pill chips */
function SkillsSection() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section id="skills" className="sec" data-screen-label="06 Skills">
      <div className="wrap">
        <div className="eyebrow fu">Expertise</div>
        <h2 className="sh fu">Technical Skills<span className="gold-dot">.</span></h2>
        <div className="skill-grid">
          {D.skills.map((c, i) => (
            <div className="skill-cat fu" key={i}>
              <div className="skill-cat-h">{c.h}</div>
              <div className="pills">
                {c.items.map((it, j) => <span className="pill" key={j}>{it}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.SkillsSection = SkillsSection;
