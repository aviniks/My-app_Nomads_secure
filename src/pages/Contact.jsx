import { useEffect, useState } from 'react';
import { Clock3, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { supabase } from '../supabaseClient.jsx';

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

const initialFormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  organization: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase
      .from('Contacts')
      .insert([
        {
          Full_Name: formData.name,
          Phone_Number: formData.phone,
          Email: formData.email,
          Service: formData.service,
          Organization: formData.organization,
          Message: formData.message,
        },
      ]);

    setIsSubmitting(false);

    if (error) {
      alert('Something went wrong.');
      console.log(error);
      return;
    }

    alert('Thank you! Your consultation request has been received.');
    setFormData(initialFormData);
  };

  return (
    <>
      <section className="page-hero contact-hero">
        <div>
          <span className="eyebrow">Contacts</span>
          <h1>Let's Build Something Great</h1>
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
            <a href="tel:+918077045216">
              <span className="contact-method-icon">
                <Phone size={22} />
              </span>
              <span>
                <strong>Phone</strong>
                <small>+91 8077045216</small>
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
                <small>Noida, UP, India</small>
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
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                placeholder="+91XXXXXXXXXX"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <label>
            Email Address
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Service Interest
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="" disabled>
                Select a service
              </option>
              <option>Job find</option>
              <option>Resume building and review</option>
              <option>Workshop & webinar</option>
              <option>Performance marketing</option>
              <option>Social Media security audit</option>
              <option>Vibe code audit</option>
              <option>SEO analysis</option>
              <option>Website optimization</option>
              <option>Others</option>
            </select>
          </label>
          <label>
            Organization / Designation
            <input
              type="text"
              name="organization"
              placeholder="Your organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Share your requirement or consultation goal"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button className="primary-button form-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
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
