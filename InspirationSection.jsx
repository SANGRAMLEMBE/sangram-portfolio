/* InspirationSection.jsx — 3 favorite quotes / testimonial-style cards */
function InspirationSection() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section id="inspiration" className="sec" data-screen-label="08 Inspiration">
      <div className="wrap">
        <div className="eyebrow fu">Words That Drive Me</div>
        <h2 className="sh fu">Inspiration<span className="gold-dot">.</span></h2>
        <div className="insp-grid">
          {D.inspiration.map((q, i) => (
            <div className="insp-card fu" key={i}>
              <div className="insp-qq"><span></span><span></span></div>
              {q.sanskrit ? (
                <p className="insp-sanskrit">{q.sanskrit.split('\n').map((line, j) => (
                  <React.Fragment key={j}>{line}{j === 0 ? <br/> : null}</React.Fragment>
                ))}</p>
              ) : null}
              <p className="insp-text">{q.text}</p>
              <div className="insp-person">
                <div className="insp-avatar">{q.init}</div>
                <div>
                  <div className="insp-name"><em>—</em> {q.who}</div>
                  <div className="insp-role">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.InspirationSection = InspirationSection;
