/* App.jsx — composes the portfolio + handles fade-up + scroll progress + custom cursor */
function App() {
  React.useEffect(() => {
    // ---- Fade-up observer ----
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fu').forEach(el => io.observe(el));

    // ---- Scroll progress bar ----
    const prog = document.getElementById('prog');
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      if (prog) prog.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ---- Custom cursor (gold dot + lagged ring) ----
    const cur = document.getElementById('cur');
    const ring = document.getElementById('cur-ring');
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf = 0;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (cur) cur.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring) ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    // ---- Hover affordance on interactive elements ----
    const hoverables = document.querySelectorAll('a, button, .pill, .gem-card, .proj-card, .ach-card, .cert-card, .skill-cat, .tl-card, .insp-card, .tl-logo, input, textarea');
    const onEnter = () => document.body.classList.add('cur-hover');
    const onLeave = () => document.body.classList.remove('cur-hover');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <React.Fragment>
      <div className="floral"></div>
      <div className="prog" id="prog"></div>
      <div id="cur"></div>
      <div id="cur-ring"></div>
      <Nav/>
      <Hero/>
      <AboutSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      <AchievementsSection/>
      <SkillsSection/>
      <CertificationsSection/>
      <InspirationSection/>
      <ContactSection/>
      <Footer/>
    </React.Fragment>
  );
}
window.App = App;
