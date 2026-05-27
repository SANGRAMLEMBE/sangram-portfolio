/* AchievementsSection.jsx — 3-col grid with medal-color left stripe */
function AchievementsSection() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section id="achievements" className="sec" data-screen-label="05 Achievements">
      <div className="wrap">
        <div className="eyebrow fu">Recognition</div>
        <h2 className="sh fu">Achievements<span className="gold-dot">.</span></h2>
        <div className="ach-grid">
          {D.achievements.map((a, i) => (
            <div key={i} className={`ach-card ${a.cardCls || ''} fu`}>
              <div className={`ach-badge ${a.badgeCls}`}>{a.badge}</div>
              <div className="ach-title">{a.title}</div>
              <div className="ach-org">{a.org}</div>
              <div className="ach-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.AchievementsSection = AchievementsSection;
