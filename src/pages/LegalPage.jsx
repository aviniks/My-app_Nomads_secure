import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import privacyPolicyPdf from '../../banner/Privacy Policy.pdf';
import termsOfServicePdf from '../../banner/Terms of Service.pdf';
import cookiePolicyPdf from '../../banner/Cookie Policy.pdf';

const legalContent = {
  '/privacy-policy': {
    eyebrow: 'Privacy Policy',
    title: 'Privacy Policy',
    text:
      'Learn how NOMADS Secure collects, uses, stores, and protects information shared through consultation requests, forms, and service conversations.',
    pdf: privacyPolicyPdf,
    cta: 'Open Privacy Policy',
  },
  '/terms-of-service': {
    eyebrow: 'Terms of Service',
    title: 'Terms of Service',
    text:
      'Review the terms for using this website, requesting consultations, and engaging with NOMADS Secure services and resources.',
    pdf: termsOfServicePdf,
    cta: 'Open Terms of Service',
  },
  '/cookie-policy': {
    eyebrow: 'Cookie Policy',
    title: 'Cookie Policy',
    text:
      'Understand how cookies and similar technologies may support website functionality, analytics, performance, and user experience.',
    pdf: cookiePolicyPdf,
    cta: 'Open Cookie Policy',
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
        <div className="legal-document-head">
          <div>
            <span className="eyebrow">Official Document</span>
            <h2>{content.title}</h2>
            <p>
              The policy below is loaded from the official PDF kept with the website
              resources. You can read it here or open it in a new tab.
            </p>
          </div>
          <a className="primary-button" href={content.pdf} target="_blank" rel="noreferrer">
            {content.cta}
          </a>
        </div>
        <div className="policy-document">
          <iframe src={content.pdf} title={`${content.title} PDF`} />
        </div>
      </section>
    </>
  );
}
