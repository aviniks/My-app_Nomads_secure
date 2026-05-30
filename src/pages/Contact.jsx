import { useEffect } from 'react';
import { Clock3, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';

const faqs = [
  {
    question: 'How can I contact Nomads Secure Group?',
    answer: 'You can contact us through the contact form, email, phone number, or social platforms.',
  },
  {
    question: 'Do you provide consultation services?',
    answer: 'Yes, consultation support is available depending on requirements.',
  },
  {
    question: 'Can I inquire about workshops?',
    answer:
      'Yes, schools, colleges, and organizations can contact us regarding workshops and awareness programs.',
  },
  {
    question: 'How long does it take to receive a response?',
    answer: 'We aim to respond as quickly as possible after receiving inquiries.',
  },
];

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | Nomads Secure Group';

    const description =
      'Contact Nomads Secure Group for Digital Marketing, Cybersecurity, Career Growth, AI Agent Automation solutions, workshops, and consultations.';
    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }

    meta.setAttribute('content', description);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    form.reset();
    alert('Thank you. Your consultation request has been received.');
  };

  return (
    <>
      <section className="page-hero contact-hero">
        <div>
          <span className="eyebrow">Contacts</span>
          <h1>Let’s Build Something Great</h1>
          <p>
            We're here to help businesses, professionals, and learners connect with
            technology-driven solutions. Reach out to us for Digital Marketing,
            Cybersecurity, Career Growth guidance, AI Agent Automation services, or
            workshop inquiries.
          </p>
        </div>
      </section>

      <section className="section contact-layout">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p className="contact-tagline">" Build Brands with AI and Security "</p>
          <div className="contact-methods">
            <a href="tel:+919876543210">
              <span className="contact-method-icon">
                <Phone size={22} />
              </span>
              <span>
                <strong>Phone</strong>
                <small>+91 98765 43210</small>
              </span>
            </a>
            <a href="mailto:info@nomadssecure.com">
              <span className="contact-method-icon">
                <Mail size={22} />
              </span>
              <span>
                <strong>Email</strong>
                <small>info@nomadssecure.com</small>
              </span>
            </a>
            <span>
              <span className="contact-method-icon">
                <MapPin size={22} />
              </span>
              <span>
                <strong>Location</strong>
                <small>India</small>
              </span>
            </span>
            <span>
              <span className="contact-method-icon">
                <Clock3 size={22} />
              </span>
              <span>
                <strong>Hours</strong>
                <small>Mon-Sat, 8:00 AM - 8:00 PM IST</small>
              </span>
            </span>
          </div>
          <div className="social-panel">
            <h3>Follow Us</h3>
            <div className="social-buttons">
              <a href="https://linkedin.com/company/nomads-secure/" target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://www.youtube.com/@NomadsSecure" target="_blank" rel="noreferrer">
                <Youtube size={18} /> YouTube
              </a>
              <a href="https://www.instagram.com/nomadssecure_official" target="_blank" rel="noreferrer">
                <Instagram size={18} /> Instagram
              </a>
            </div>
          </div>
        </div>

        <form className="consultation-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Full Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Phone Number
              <input type="tel" name="phone" placeholder="+91..." required />
            </label>
          </div>
          <label>
            Email Address
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Service Interest
            <select name="service" required defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>Digital Marketing Services</option>
              <option>Cybersecurity Services</option>
              <option>AI Security and Agent</option>
              <option>Career and Training</option>
            </select>
          </label>
          <label>
            Organization / Company
            <input type="text" name="organization" placeholder="Your organization" required />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Share your requirement or consultation goal"
              required
            />
          </label>
          <button className="primary-button form-submit" type="submit">
            Submit Consultation Request
          </button>
        </form>
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq) => (
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
