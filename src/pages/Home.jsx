import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import ServiceCard from '../components/ServiceCard.jsx';
import { highlights, serviceGroups, stats } from '../data/services.js';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Founder, EduTech Institute',
    quote:
      'Their team helped us modernize our website, improve social reach, and create a clear digital growth plan.',
  },
  {
    name: 'Rahul Mehta',
    role: 'Operations Head, Retail Brand',
    quote:
      'The security assessment gave us practical fixes and confidence before launching our e-commerce platform.',
  },
  {
    name: 'Ananya Verma',
    role: 'Training Coordinator',
    quote:
      'The career guidance and interview preparation sessions were structured, motivating, and very useful for our students.',
  },
];

const whyChooseUs = [
  {
    title: 'AI-Powered Solutions',
    text: 'We leverage cutting-edge AI agents and automation to give you a competitive edge.',
  },
  {
    title: 'Security-First Approach',
    text: 'Every deliverable is built with security baked in, not bolted on afterward.',
  },
  {
    title: 'End-to-End Digital Growth',
    text: 'From SEO to performance ads, we drive real traffic and real revenue.',
  },
  {
    title: 'Expert Mentorship & Training',
    text: 'We empower your team with skills, knowledge, and career direction.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow">NOMADS Secure Group</span>
          <h1>Transforming Business with AI-Driven Security & Growth</h1>
          <p>
            From cybersecurity consulting to digital marketing & AI automation, we
            deliver innovative solutions that protect, scale & elevate your business
            globally.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/contacts">
              Book Consultation <ArrowRight size={18} />
            </Link>
            <Link className="secondary-button" to="/services">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Company highlights">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">What We Do</span>
          <h2>Everything your business needs to thrive</h2>
          <p>
            NOMADS Secure Group Pvt. Ltd. helps businesses grow securely through
            Cybersecurity Audits, Digital Marketing Solutions, AI Automation, and AI
            Agent Development. We also support students and professionals with career
            guidance, job hunt assistance, skill development, and education counseling.
            Our goal is to create smarter businesses, stronger careers, and a safer
            digital future.
          </p>
        </div>
        <div className="service-grid">
          {serviceGroups.map((group) => (
            <ServiceCard key={group.id} group={group} />
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <span className="eyebrow">Why Choose Us</span>
          <h2>AI-powered strategy with security at the core</h2>
          <p>
            At NOMADS Secure, we combine AI-powered tools with cybersecurity
            expertise and digital marketing mastery to deliver measurable, secure,
            and scalable results.
          </p>
          <div className="check-list">
            {whyChooseUs.map((item) => (
              <span key={item.title}>
                <CheckCircle2 size={18} />
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </span>
            ))}
          </div>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="highlight-tile">
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="testimonial-section">
        <div className="section-heading">
          <span className="eyebrow">Testimonials</span>
          <h2>What Our Clients Say</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <Quote size={28} />
              <p>{testimonial.quote}</p>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <span className="eyebrow">Ready to begin?</span>
          <h2>Get a consultation for your business or institution.</h2>
        </div>
        <Link className="primary-button" to="/contacts">
          Contact Us <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
