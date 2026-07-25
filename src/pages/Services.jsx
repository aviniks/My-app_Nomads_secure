import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { processSteps, serviceGroups } from '../data/services.js';

const serviceFaqs = [
  {
    question: 'What services does your company provide?',
    answer:
      'We offer end-to-end solutions across Cybersecurity, Digital Marketing, AI Automation, and Career Development. Our services include SEO, Social Media Marketing, Website Development, Security Audits, Penetration Testing, AI Agent Development, Business Automation, Career Counseling, Resume Building, Interview Preparation, Corporate Training, and Education Guidance.',
  },
  {
    question: 'How can your cybersecurity services help my business?',
    answer:
      'Our cybersecurity experts help identify and mitigate security risks through Vulnerability Assessments, Penetration Testing, Security Audits, Infrastructure Security, Web Application Security, SIEM/SOC solutions, Data Security, and Security Consulting.',
  },
  {
    question: 'Do you provide customized digital marketing solutions?',
    answer:
      'Yes. We create tailored digital marketing strategies based on your business goals, industry, and target audience to maximize your online growth and ROI.',
  },
  {
    question: 'What AI solutions do you offer for businesses?',
    answer:
      'We help organizations leverage AI through AI Agent Development, Business Process Automation, Agent Security Solutions, and AI Integration Services.',
  },
  {
    question: 'How do you support students and professionals in career growth?',
    answer:
      'We provide career counseling, career assessments, resume audits, interview preparation, skill development programs, job search support, education counseling, and productivity coaching.',
  },
];

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const section = document.querySelector(location.hash);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return (
    <>
      <section className="page-hero services-hero">
        <div>
          <span className="eyebrow">Services</span>
          <h1>End-to-End Digital Solutions</h1>
          <p>
            Explore our full range of digital marketing, cybersecurity, AI agent,
            career development, and training solutions.
          </p>
        </div>
      </section>

      <section id="all-services" className="section services-list">
        {serviceGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article id={group.id} key={group.id} className="service-detail">
              <div className="service-detail-copy">
                <span className="service-icon large">
                  <Icon size={32} />
                </span>
                <h2>{group.title}</h2>
                <p>{group.summary}</p>
                <Link className="primary-button service-consult-button" to="/contacts">
                  Request consultation <ArrowRight size={16} />
                </Link>
              </div>
              <div className="service-detail-list">
                {group.services.map((service) => (
                  <div key={service.name}>
                    <CheckCircle2 size={18} />
                    <span>
                      <strong>{service.name}</strong>
                      <small>{service.description}</small>
                    </span>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <span className="eyebrow">Our Process</span>
          <h2>Simple consultation-led delivery</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="process-card">
                <Icon size={26} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-grid services-faq">
          {serviceFaqs.map((faq) => (
            <article key={faq.question} className="faq-card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

