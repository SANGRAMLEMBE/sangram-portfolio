/* ProjectsSection.jsx — 3-col grid of project cards with semantic-colored tags */
function ProjectsSection() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section id="projects" className="sec" data-screen-label="04 Projects">
      <div className="wrap">
        <div className="eyebrow fu">Portfolio</div>
        <h2 className="sh fu">Work<span className="gold-dot">.</span></h2>
        <div className="proj-grid">
          {D.projects.map((p, i) => <ProjectCard key={i} p={p}/>)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({p}) {
  // Render desc with simple **bold** → <strong> swap (gold inline emphasis).
  const renderDesc = (txt) => {
    const parts = txt.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith('**') && part.endsWith('**')
        ? <strong key={i}>{part.slice(2, -2)}</strong>
        : <React.Fragment key={i}>{part}</React.Fragment>
    );
  };
  return (
    <div className="proj-card fu">
      {p.badge ? <div className={`proj-badge ${p.first ? 'first' : ''}`}>{p.badge}</div> : null}
      <div className="proj-title">{p.title}</div>
      <p className="proj-desc">{renderDesc(p.desc)}</p>
      <div className="proj-tags">
        {p.tags.map(([cls, label], j) => (
          <span key={j} className={`ptag ${cls}`}>{label}</span>
        ))}
      </div>
      {p.link ? <a href={p.link} target="_blank" rel="noreferrer" className="proj-link">View Code</a> : null}
    </div>
  );
}
window.ProjectsSection = ProjectsSection;
