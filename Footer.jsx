/* Footer.jsx — tech-bar with real brand logos + copyright row */
function Footer() {
  const D = window.PORTFOLIO_DATA;
  const techs = [
    { src: './assets/python.svg',     label: 'Python' },
    { src: './assets/pytorch.svg',    label: 'PyTorch' },
    { src: './assets/tensorflow.svg', label: 'TensorFlow' },
    { src: './assets/pandas.svg',     label: 'Pandas' },
    { src: './assets/mysql.svg',      label: 'SQL' },
    { src: './assets/jupyter.svg',    label: 'Jupyter' },
    { src: './assets/vscode.svg',     label: 'VS Code' },
    { src: './assets/github.svg',     label: 'GitHub', invert: true },
    { src: './assets/linkedin.svg',   label: 'LinkedIn' },
    { src: './assets/aws.svg',        label: 'AWS' },
  ];
  return (
    <React.Fragment>
      <div className="tech-bar">
        <div className="tech-inner">
          {techs.map((t, i) => (
            <div key={i} className={`tl-logo ${t.invert ? 'invert' : ''}`}>
              <img src={t.src} alt={t.label}/>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div className="footer-copy">© 2026 Sangram Lembe · M.Tech Data Engineering · SRM IST Chennai</div>
        <div className="footer-links">
          <a href={D.social.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={D.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={D.social.substack} target="_blank" rel="noreferrer">Substack</a>
          <a href={D.social.medium} target="_blank" rel="noreferrer">Medium</a>
          <a href={`mailto:${D.contactEmail}`}>Email</a>
        </div>
      </footer>
    </React.Fragment>
  );
}
window.Footer = Footer;
