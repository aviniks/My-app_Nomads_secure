import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { serviceGroups } from '../data/services.js';
import logo from '../../banner/logo.png';

const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link to="/home" className="brand footer-brand">
            <span className="brand-mark">
              <img src={logo} alt="NomadsSecure logo" />
            </span>
            <span>
              <strong>NomadsSecure</strong>
              <small>Secure Growth</small>
            </span>
          </Link>
          <p>
            NOMADS Secure Group Pvt. Ltd. helps businesses grow securely through
            cybersecurity audits, digital marketing, AI automation, and career growth
            solutions.
          </p>
        </div>

        <div>
          <h3>Services</h3>
          {serviceGroups.map((group) => (
            <Link key={group.id} to={`/services#${group.id}`}>
              {group.title}
            </Link>
          ))}
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/home" onClick={scrollToTop}>Home</Link>
          <Link to="/services" onClick={scrollToTop}>Services</Link>
          <Link to="/about" onClick={scrollToTop}>About</Link>
          <Link to="/blog" onClick={scrollToTop}>Blog</Link>
          <Link to="/contacts" onClick={scrollToTop}>Contacts</Link>
          <Link to="/privacy-policy" onClick={scrollToTop}>Privacy Policy</Link>
          <Link to="/terms-of-service" onClick={scrollToTop}>Terms of Service</Link>
          <Link to="/cookie-policy" onClick={scrollToTop}>Cookie Policy</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <p className="footer-contact">
            <Phone size={16} /> +91 8077045216
          </p>
          <p className="footer-contact">
            <Mail size={16} /> info@nomadssecure.com
          </p>
          <p className="footer-contact">
            <MapPin size={16} /> Noida, UP, India
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 NomadsSecure. All rights reserved.</span>
      </div>
    </footer>
  );
}

