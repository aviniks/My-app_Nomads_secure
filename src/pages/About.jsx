import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Headphones,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
} from 'lucide-react';

const whyChooseItems = [
  { title: 'Technology-driven solutions', icon: Rocket },
  { title: 'Practical and growth-focused approach', icon: Target },
  { title: 'Continuous learning and innovation', icon: Lightbulb },
  { title: 'Dedicated support', icon: Headphones },
  { title: 'Customized strategies', icon: ShieldCheck },
];

const values = [
  {
    title: 'Integrity',
    text: 'We work with honesty, clarity, and responsibility in every client and learner relationship.',
    icon: ShieldCheck,
  },
  {
    title: 'Innovation',
    text: 'We use modern tools, AI automation, and fresh thinking to solve real business problems.',
    icon: Lightbulb,
  },
  {
    title: 'Security',
    text: 'We keep digital safety at the center of our services, training, and recommendations.',
    icon: ShieldCheck,
  },
  {
    title: 'Learning',
    text: 'We believe continuous learning helps people and organizations adapt with confidence.',
    icon: BookOpen,
  },
  {
    title: 'Growth',
    text: 'We help businesses and professionals build long-term opportunities through focused action.',
    icon: TrendingUp,
  },
];

export default function About() {
  return (
    <>
      <section className="about-hero-banner">
        <div>
          <span className="eyebrow">About Us</span>
          <h1>ABOUT US</h1>
          <h2>NOMADS Secure Group</h2>
          <p>
            NomadsSecure Group provides all solutions in one room with a primary
            niche of security. Your future is in your hands, keep your digital data
            and business secure with us.
          </p>
        </div>
      </section>

      <section id="about-content" className="section about-content-section">
        <div>
          <span className="eyebrow">Who We Are</span>
          <h2>Who We Are</h2>
          <p>
            Nomads Secure Group is a technology-focused company dedicated to helping
            businesses, students, and professionals grow through Digital Marketing,
            Cybersecurity solutions, Career Growth guidance, and AI Agent Automation
            services. We focus on practical solutions that support digital growth,
            security awareness, and innovation.
          </p>
        </div>

        <div>
          <span className="eyebrow">Our Mission</span>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide secure, innovative, and growth-focused solutions
            that help individuals and organizations build a stronger digital future
            through technology, awareness, and modern tools.
          </p>
        </div>

        <div>
          <span className="eyebrow">Our Vision</span>
          <h2>Our Vision</h2>
          <p>
            Our vision is to empower businesses and individuals with knowledge,
            technology, and secure digital solutions that create long-term growth
            opportunities.
          </p>
        </div>

        <div className="about-callout">
          <span className="eyebrow">Why Choose Us</span>
          <h2>Why Choose Us</h2>
          <p>
            Nomads Secure combines security-first thinking, AI-ready execution, and
            practical growth strategy so every solution is useful, measurable, and
            aligned with your goals.
          </p>
          <div className="about-icon-grid">
            {whyChooseItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon size={24} />
                  <h3>{item.title}</h3>
                </article>
              );
            })}
          </div>
          <Link className="primary-button" to="/contacts">
            Work With Us <ArrowRight size={18} />
          </Link>
        </div>

        <div className="about-values">
          <span className="eyebrow">Our Values</span>
          <h2>Our Values</h2>
          <div className="about-value-grid">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title}>
                  <Icon size={24} />
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
