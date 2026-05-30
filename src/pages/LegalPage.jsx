import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const legalContent = {
  '/privacy-policy': {
    eyebrow: 'Privacy Policy',
    title: 'Privacy Policy',
    text:
      'This page explains how NOMADS Secure collects, uses, and protects consultation requests, contact details, and service-related information shared through the website.',
  },
  '/terms-of-service': {
    eyebrow: 'Terms of Service',
    title: 'Terms of Service',
    text:
      'This page outlines the basic terms for using this website, requesting consultations, and engaging with NOMADS Secure services.',
  },
  '/cookie-policy': {
    eyebrow: 'Cookie Policy',
    title: 'Cookie Policy',
    text:
      'This page explains how cookies and similar technologies may be used to improve website performance, analytics, and user experience.',
  },
};

export default function LegalPage() {
  const location = useLocation();
  const content = useMemo(
    () => legalContent[location.pathname] || legalContent['/privacy-policy'],
    [location.pathname]
  );

  return (
    <>
      <section className="page-hero legal-hero">
        <div>
          <span className="eyebrow">{content.eyebrow}</span>
          <h1>{content.title}</h1>
          <p>{content.text}</p>
        </div>
      </section>

      <section className="section legal-content">
        <h2>Policy Details</h2>
        <p>
          Add your official legal content here before publishing the website. Include
          company details, user rights, data handling practices, service limitations,
          and contact information for legal or privacy questions.
        </p>
      </section>
    </>
  );
}
