import contactImg from '../assets/contact-hero.jpg';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">

      {/* HERO SECTION */}
      <div className="contact-hero" style={{ backgroundImage: `url(${contactImg})` }}>
        <h1>Contact Us</h1>
        <p>We welcome partnerships, collaborations, and inquiries regarding children’s wellbeing and the Children Act.</p>
      </div>

      {/* CONTACT FORM */}
      <section className="contact-form-wrapper">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* CONTACT INFO */}
      <section className="contact-info">
        <h2>Our Contact Information</h2>
        <p>Email: info@wellbeinginstitute.or.ke</p>
        <p>Phone: +254 700 611139</p>
        <p>Address: Nairobi, Kenya</p>
      </section>

    </div>
  );
};

export default Contact;
