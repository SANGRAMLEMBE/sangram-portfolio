/* Nav.jsx — sticky glass-blur nav bar */
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo"><em>Sangram Lembe</em> | AI Engineer</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#achievements">Awards</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
window.Nav = Nav;
