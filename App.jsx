/* App.jsx — portfolio shell */
function App() {
  const galaxy = React.useRef(null);

  React.useEffect(() => {
    const cv = galaxy.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let W, H, animId, t = 0;

    const stars = Array.from({ length: 320 }, (_, i) => ({
      x: 0, y: 0,
      r: i < 200 ? Math.random() * 0.8 + 0.2          // far: tiny
        : i < 270 ? Math.random() * 1.2 + 0.7          // mid
        :           Math.random() * 1.6 + 1.0,          // near: larger
      op: Math.random() * 0.7 + 0.2,
      dy: i < 200 ? Math.random() * 0.12 + 0.03
        : i < 270 ? Math.random() * 0.22 + 0.10
        :           Math.random() * 0.40 + 0.18,
      tw: Math.random() * Math.PI * 2,
    }));

    const nebulae = [
      { cx: 0.15, cy: 0.10, rx: 0.32, c: 'rgba(55,18,130,0.18)' },
      { cx: 0.80, cy: 0.28, rx: 0.28, c: 'rgba(38,12,100,0.15)' },
      { cx: 0.42, cy: 0.55, rx: 0.38, c: 'rgba(65,22,145,0.16)' },
      { cx: 0.08, cy: 0.78, rx: 0.24, c: 'rgba(45,15,110,0.13)' },
      { cx: 0.88, cy: 0.72, rx: 0.30, c: 'rgba(50,16,120,0.15)' },
    ];

    const init = () => {
      W = cv.width  = window.innerWidth;
      H = cv.height = window.innerHeight;
      stars.forEach(s => { s.x = Math.random() * W; s.y = Math.random() * H; });
    };

    const draw = () => {
      t++;
      ctx.clearRect(0, 0, W, H);

      nebulae.forEach(n => {
        const g = ctx.createRadialGradient(n.cx*W, n.cy*H, 0, n.cx*W, n.cy*H, n.rx*W);
        g.addColorStop(0, n.c); g.addColorStop(1, 'transparent');
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      });

      stars.forEach(s => {
        s.y -= s.dy;
        if (s.y < -s.r) { s.y = H + s.r; s.x = Math.random() * W; }
        const tw = 0.65 + 0.35 * Math.sin(t * 0.025 + s.tw);
        const alpha = s.op * tw;
        if (s.r > 1.2) {
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5);
          glow.addColorStop(0, `rgba(200,215,255,${(alpha * 0.28).toFixed(3)})`);
          glow.addColorStop(1, 'transparent');
          ctx.fillStyle = glow;
          ctx.fillRect(s.x - s.r*5, s.y - s.r*5, s.r*10, s.r*10);
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(215,225,255,${alpha.toFixed(3)})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener('resize', init);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', init); };
  }, []);

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
      <canvas ref={galaxy} style={{position:'fixed',inset:0,width:'100%',height:'100%',zIndex:-1,pointerEvents:'none'}}/>
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
