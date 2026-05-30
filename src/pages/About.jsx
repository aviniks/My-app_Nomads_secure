import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Lightbulb, UsersRound } from 'lucide-react';
import AboutHeroCarousel from '../components/AboutHeroCarousel.jsx';

export default function About() {
  return (
    <>
      <AboutHeroCarousel />

      <section id="about-content" className="section split-section">
        <div>
          <span className="eyebrow">Company Objective</span>
          <h2>Secure, innovative, and growth-oriented solutions</h2>
          <p>
            Our organization provides comprehensive IT and digital services, including
            digital marketing, cybersecurity, AI security, and career development
            solutions. We support businesses and institutions in enhancing online
            presence through SEO, social media marketing, website development, and
            data-driven strategies.
          </p>
          <p>
            Our cybersecurity services help protect digital assets through vulnerability
            assessments, penetration testing, and continuous security monitoring. We
            also offer career counselling, skill development programs, and professional
            training to empower individuals and organizations.
          </p>
          <Link className="primary-button" to="/contacts">
            Work With Us <ArrowRight size={18} />
          </Link>
        </div>
        <div className="values-panel">
          <article>
            <Building2 size={26} />
            <h3>Business Focused</h3>
            <p>Solutions aligned with real operations, budgets, and growth priorities.</p>
          </article>
          <article>
            <Lightbulb size={26} />
            <h3>Innovation Ready</h3>
            <p>Modern web, analytics, automation, and AI practices for evolving teams.</p>
          </article>
          <article>
            <UsersRound size={26} />
            <h3>People Centered</h3>
            <p>Training and guidance that improves confidence, capability, and outcomes.</p>
          </article>
        </div>
      </section>
    </>
  );
}
