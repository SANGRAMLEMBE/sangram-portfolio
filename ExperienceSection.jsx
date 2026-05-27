/* ExperienceSection.jsx — alternating timeline with center rail */
function ExperienceSection() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section id="experience" className="sec" data-screen-label="03 Experience">
      <div className="wrap">
        <div className="sec-center">
          <div className="eyebrow fu">Career</div>
          <h2 className="sh fu">Experience<span className="gold-dot">.</span></h2>
        </div>
        <div className="tl-wrap">
          <div className="tl-line"></div>
          {D.experience.map((item, i) => (
            <div className="tl-item fu" key={i}>
              {item.side === 'left' ? (
                <React.Fragment>
                  <div className="tl-card-wrap" style={{gridColumn: 1}}>
                    <TimelineCard item={item}/>
                  </div>
                  <TimelineNode item={item}/>
                  <div style={{gridColumn: 3}}></div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div style={{gridColumn: 1}}></div>
                  <TimelineNode item={item}/>
                  <div className="tl-card-wrap" style={{gridColumn: 3}}>
                    <TimelineCard item={item}/>
                  </div>
                </React.Fragment>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineNode({item}) {
  return (
    <div className="tl-center" style={{gridColumn: 2}}>
      <div className="tl-node">{item.icon}</div>
      <div className="tl-date">{item.date.split('\n').map((l, j) => (
        <React.Fragment key={j}>{l}{j === 0 && item.date.includes('\n') ? <br/> : null}</React.Fragment>
      ))}</div>
    </div>
  );
}
function TimelineCard({item}) {
  return (
    <div className="tl-card">
      <div className="tl-role">{item.role}</div>
      <div className="tl-co">{item.co}</div>
      <ul className="tl-ul">
        {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
      </ul>
    </div>
  );
}
window.ExperienceSection = ExperienceSection;
