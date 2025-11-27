import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
            <li><Link to="/policy-reports" className="footer-link">Policy Reports</Link></li>
          </ul>
        </div>

        {/* PARTNER INFO */}
        <div className="footer-section">
          <h3>Partner With Us</h3>
          <p>Email: <a href="mailto:info@wellbeinginstitute.or.ke" className="footer-link">info@wellbeinginstitute.or.ke</a></p>
          <p>Phone: <a href="tel:+254700611139" className="footer-link">+254700611139</a></p>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The Wellbeing Institute. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
