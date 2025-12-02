import contactImg from '../assets/contact-hero.jpg';

const Contact = () => {
  return (
    <div className="page-container">

      {/* HERO SECTION */}
      <div className="hero" style={{ backgroundImage: `url(${contactImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1>Contact Us</h1>
        <p>We welcome partnerships, collaborations, and inquiries regarding children’s wellbeing and the Children Act.</p>
      </div>

      {/* CONTACT FORM */}
      <section style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Your Name" required style={{ padding: '0.8rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input type="email" placeholder="Your Email" required style={{ padding: '0.8rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input type="text" placeholder="Subject" style={{ padding: '0.8rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }} />
          <textarea placeholder="Your Message" rows="5" required style={{ padding: '0.8rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
          <button type="submit" style={{ padding: '1rem', backgroundColor: '#0056b3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' }}>Send Message</button>
        </form>
      </section>

      {/* CONTACT INFO */}
      <section style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2>Our Contact Information</h2>
        <p>Email: info@wellbeinginstitute.or.ke</p>
        <p>Phone: +254 700 611139</p>
        <p>Address: Nairobi, Kenya</p>
      </section>

    </div>
  );
};

export default Contact;
