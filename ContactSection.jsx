/* ContactSection.jsx — real FormSubmit integration, no backend needed */
function ContactSection() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section id="contact" data-screen-label="09 Contact">
      <div className="contact-left">
        <div className="eyebrow fu">I Would Love to Hear From You</div>
        <h2 className="sh fu">Contact<span className="gold-dot">.</span></h2>
        <p style={{color:'#9999bb', fontSize:'.92rem', maxWidth:'440px', lineHeight:1.7, marginTop:'.4rem'}}>
          Open to research collaborations, ML engineering roles, and hackathon teams.
          Best reach: <a href={`mailto:${D.contactEmail}`} style={{color:'#c9a96e', fontWeight:700}}>{D.contactEmail}</a>.
        </p>
        <form
          className="contact-form"
          action={`https://formsubmit.co/${D.contactEmail}`}
          method="POST"
        >
          {/* FormSubmit configuration — these hidden fields control the email it sends */}
          <input type="hidden" name="_subject" value="New portfolio contact · sangram-lembe.dev"/>
          <input type="hidden" name="_template" value="table"/>
          <input type="hidden" name="_captcha" value="false"/>
          <input type="hidden" name="_next" value={window.location.href + '?sent=1'}/>
          <input type="text" name="_honey" style={{display:'none'}}/>

          <div className="form-group">
            <label className="form-lbl">Your Name</label>
            <input className="form-inp" name="name" placeholder="Jane Doe" required/>
          </div>
          <div className="form-group">
            <label className="form-lbl">Your Email</label>
            <input className="form-inp" name="email" type="email" placeholder="jane@company.com" required/>
          </div>
          <div className="form-group">
            <label className="form-lbl">Your Message</label>
            <textarea className="form-ta" name="message" placeholder="Tell me about your project, role, or hackathon…" required></textarea>
          </div>
          <button type="submit" className="btn-send">Send Message</button>
        </form>
        {new URLSearchParams(window.location.search).get('sent') === '1' ? (
          <div style={{marginTop:'1rem', padding:'.75rem 1rem', background:'rgba(201,169,110,.15)', border:'1px solid #c9a96e', borderRadius:8, color:'#c9a96e', fontFamily:'DM Mono, monospace', fontSize:'.78rem'}}>
            ✓ Message sent. I'll reply within 24h.
          </div>
        ) : null}
      </div>
      <div className="contact-right">
        <div className="globe-wrap">
          <div className="globe-orbit"></div>
          <div className="globe"></div>
        </div>
      </div>
    </section>
  );
}
window.ContactSection = ContactSection;
