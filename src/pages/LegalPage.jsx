import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const legalContent = {
  '/privacy-policy': {
    eyebrow: 'Privacy Policy',
    title: 'Privacy Policy',
    intro:
      'NomadsSecure Group Pvt Ltd is committed to protecting your privacy and safeguarding your personal information.',
    updated: 'Last Updated: June 2026',
    sections: [
      {
        heading: '1. Introduction',
        paragraphs: [
          'NomadsSecure Group Pvt Ltd ("NomadsSecure", "Company", "we", "our", or "us") is committed to protecting your privacy and safeguarding your personal information.',
          'This Privacy Policy explains how we collect, use, process, store, and protect information collected through our website, nomadssecure.com, and through our cybersecurity, artificial intelligence, digital marketing, technology consulting, website development, and training services.',
          'By accessing our website or using our services, you agree to the practices described in this Privacy Policy.',
        ],
      },
      {
        heading: '2. Company Information',
        bullets: [
          'Company Name: NomadsSecure Group Pvt Ltd',
          'Registered Office: Noida, Uttar Pradesh, India',
          'Website: nomadssecure.com',
          'Email: info@nomadssecure.com',
        ],
      },
      {
        heading: '3. Information We Collect',
        paragraphs: ['Information you provide may include:'],
        bullets: [
          'Full name',
          'Email address',
          'Phone number',
          'Company name',
          'Job title',
          'Business requirements',
          'Training registration details',
          'Information submitted through contact forms',
          'Information submitted through newsletter subscriptions',
          'Any documents, resumes, project requirements, or messages shared with us',
        ],
        extra: [
          {
            subtitle: 'Automatically Collected Information',
            bullets: [
              'IP address',
              'Browser type and version',
              'Device information',
              'Operating system',
              'Website usage data',
              'Referral sources',
              'Pages visited',
              'Date and time of access',
            ],
          },
          {
            subtitle: 'Analytics and Marketing Data',
            paragraphs: [
              'We may use Google Analytics, Google Ads, and LinkedIn Insight Tag. These services may collect information about your interaction with our website to help us improve our services and marketing activities.',
            ],
          },
        ],
      },
      {
        heading: '4. How We Use Your Information',
        bullets: [
          'Respond to inquiries and requests',
          'Provide cybersecurity, AI, consulting, training, and digital marketing services',
          'Process training registrations',
          'Deliver newsletters and updates',
          'Improve website functionality',
          'Analyze website performance',
          'Conduct internal business operations',
          'Communicate regarding services and support',
          'Prevent fraud, abuse, and security threats',
          'Comply with legal obligations',
        ],
      },
      {
        heading: '5. Legal Basis for Processing',
        bullets: [
          'Your consent',
          'Performance of a contract',
          'Compliance with legal obligations',
          'Legitimate business interests',
        ],
      },
      {
        heading: '6. Newsletter Communications',
        paragraphs: [
          'If you subscribe to our newsletter, we may send cybersecurity insights, AI developments, training programs, digital marketing trends, and company announcements.',
          'You may unsubscribe at any time using the unsubscribe link included in our communications.',
        ],
      },
      {
        heading: '7. Training Registrations',
        paragraphs: [
          'When registering for training programs, workshops, webinars, or certification courses, we may collect information necessary to manage registrations, deliver course materials, issue certificates, provide training support, and maintain attendance records.',
        ],
      },
      {
        heading: '8. Sharing of Information',
        paragraphs: ['We do not sell, rent, or trade personal information. We may share information with:'],
        bullets: [
          'Professional advisors',
          'Cloud hosting providers',
          'Analytics providers',
          'Marketing service providers',
          'Training delivery partners',
          'Government authorities when required by law',
        ],
      },
      {
        heading: '9. Data Security',
        paragraphs: [
          'We implement appropriate technical and organizational measures to protect information against unauthorized access, data loss, misuse, alteration, and disclosure.',
          'However, no online transmission or storage method can be guaranteed to be completely secure.',
        ],
      },
      {
        heading: '10. Data Retention',
        paragraphs: [
          'We retain personal information only for as long as necessary to deliver services, fulfill legal obligations, resolve disputes, and maintain business records.',
          'When information is no longer required, it is securely deleted or anonymized.',
        ],
      },
      {
        heading: '11. Third-Party Services',
        paragraphs: [
          'Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of external websites. Users should review the privacy policies of those websites before sharing information.',
        ],
      },
      {
        heading: '12. Your Rights',
        paragraphs: ['Depending on applicable laws, you may have the right to:'],
        bullets: [
          'Access your information',
          'Correct inaccurate information',
          'Request deletion of information',
          'Restrict processing',
          'Object to processing',
          'Withdraw consent',
          'Request a copy of your personal data',
        ],
      },
      {
        heading: "13. Children's Privacy",
        paragraphs: [
          'NomadsSecure Group Pvt Ltd provides educational resources, cybersecurity awareness content, career guidance, technology insights, and training-related information that may be accessed by individuals under the age of 18 years.',
          'Children may browse publicly available content on our website for educational and informational purposes. However, we do not knowingly collect personal information from children under the age of 13 without the consent of a parent or legal guardian.',
          'For participants under the age of 18 registering for paid training programs, certification courses, workshops, mentorship programs, or consulting-related activities, parental or guardian consent may be required where applicable by law.',
          'If you believe that a child has provided personal information without appropriate consent, please contact us at info@nomadssecure.com.',
        ],
      },
      {
        heading: '14. International Data Transfers',
        paragraphs: [
          'Some of our service providers may process information outside India. Where such transfers occur, we take reasonable steps to ensure appropriate safeguards are implemented.',
        ],
      },
      {
        heading: '15. Changes to This Privacy Policy',
        paragraphs: [
          'We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated revision date. Continued use of our website after changes become effective constitutes acceptance of the revised policy.',
        ],
      },
      {
        heading: '16. Contact Us',
        bullets: [
          'NomadsSecure Group Pvt Ltd',
          'Noida, Uttar Pradesh, India',
          'Email: info@nomadssecure.com',
          'Website: nomadssecure.com',
        ],
      },
    ],
  },
  '/terms-of-service': {
    eyebrow: 'Terms of Service',
    title: 'Terms of Service',
    intro:
      'These terms govern access to and use of the NOMADS Secure website, services, educational resources, and related offerings.',
    updated: 'Last Updated: June 2026',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        paragraphs: [
          'Welcome to NomadsSecure Group Pvt Ltd ("NomadsSecure", "Company", "we", "our", or "us"). These Terms of Service govern your access to and use of our website, services, educational resources, cybersecurity solutions, AI services, digital marketing services, consulting services, training programs, and related offerings available through nomadssecure.com.',
          'By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you should discontinue use of our website and services.',
        ],
      },
      {
        heading: '2. Company Information',
        bullets: [
          'Company Name: NomadsSecure Group Pvt Ltd',
          'Registered Office: Noida, Uttar Pradesh, India',
          'Website: nomadssecure.com',
          'Email: info@nomadssecure.com',
        ],
      },
      {
        heading: '3. Services Offered',
        paragraphs: ['NomadsSecure may provide services including but not limited to:'],
        bullets: [
          'Cybersecurity Consulting',
          'Security Assessments',
          'Vulnerability Assessments',
          'Security Awareness Training',
          'Artificial Intelligence Solutions',
          'AI Automation Services',
          'Digital Marketing Services',
          'Website Development',
          'Technology Consulting',
          'Professional Training Programs',
          'Workshops and Educational Content',
          'Career Guidance and Mentorship',
        ],
        extra: [{ paragraphs: ['We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.'] }],
      },
      {
        heading: '4. User Responsibilities',
        bullets: [
          'Provide accurate information',
          'Do not use the website for unlawful activities',
          'Do not attempt unauthorized access to our systems',
          'Do not interfere with website operations',
          'Do not distribute malware or harmful code',
          'Do not copy, reproduce, or exploit our content without authorization',
        ],
      },
      {
        heading: '5. Educational Content Disclaimer',
        paragraphs: [
          'Our website may provide cybersecurity guidance, educational materials, training resources, career advice, industry insights, and AI or technology information.',
          'Such information is provided for educational and informational purposes only. We do not guarantee employment, certification success, business growth, or specific outcomes. Individual results may vary.',
        ],
      },
      {
        heading: '6. Training and Certification Programs',
        paragraphs: [
          'For training services, registration may be required, attendance records may be maintained, certificates may be issued upon successful completion, participation requirements may vary by program, and fees will be communicated before enrollment where applicable.',
          'NomadsSecure reserves the right to deny, suspend, or terminate participation in any training program for misconduct, policy violations, or disruptive behavior.',
        ],
      },
      {
        heading: '7. Intellectual Property Rights',
        paragraphs: [
          'Unless otherwise stated, all content on this website is owned by or licensed to NomadsSecure Group Pvt Ltd, including logos, branding, website design, training materials, documentation, graphics, videos, articles, educational resources, software, and code.',
          'You may not copy, reproduce, modify, distribute, publish, sell, or license any content without prior written permission.',
        ],
      },
      {
        heading: '8. User-Submitted Content',
        paragraphs: [
          'Information submitted through contact forms, training registrations, consultation requests, feedback forms, or surveys must not contain illegal content, malware, offensive material, intellectual property violations, or false or misleading information.',
          'You grant NomadsSecure a limited right to use submitted information solely for providing services and responding to requests.',
        ],
      },
      {
        heading: '9. Cybersecurity Services Disclaimer',
        paragraphs: [
          'Cybersecurity services are provided on a best-effort basis. While we strive to identify security risks and vulnerabilities, we do not guarantee complete security, prevention of all cyberattacks, elimination of all vulnerabilities, regulatory compliance, or continuous protection against future threats.',
          'Cybersecurity is a shared responsibility, and clients remain responsible for implementing recommended controls.',
        ],
      },
      {
        heading: '10. AI Services Disclaimer',
        paragraphs: [
          'Our services may utilize Artificial Intelligence technologies. AI-generated outputs may contain inaccuracies, incomplete information, or unintended results.',
          'Clients should independently verify AI-generated recommendations before relying upon them for business, legal, financial, medical, security, or operational decisions.',
        ],
      },
      {
        heading: '11. Digital Marketing Disclaimer',
        paragraphs: [
          'Marketing results depend on numerous factors beyond our control, including market conditions, competition, advertising budgets, customer behavior, and platform algorithm changes.',
          'We do not guarantee search engine rankings, lead generation volume, revenue increases, website traffic levels, or advertising performance.',
        ],
      },
      {
        heading: '12. Third-Party Services',
        paragraphs: [
          'Our website may contain links to third-party websites, platforms, tools, or services. We do not control and are not responsible for third-party content, policies, security practices, or service availability. Use of third-party services is at your own risk.',
        ],
      },
      {
        heading: '13. Privacy',
        paragraphs: [
          'Your use of our website is also governed by our Privacy Policy and Cookie Policy. By using our services, you acknowledge that you have reviewed and understood those policies.',
        ],
      },
      {
        heading: '14. Limitation of Liability',
        paragraphs: [
          'To the fullest extent permitted by applicable law, NomadsSecure Group Pvt Ltd, its directors, employees, consultants, partners, and affiliates shall not be liable for direct, indirect, incidental, or consequential damages, business interruption, data loss, revenue loss, loss of profits, cybersecurity incidents, or service interruptions arising from use of our website, services, content, or recommendations.',
        ],
      },
      {
        heading: '15. Indemnification',
        paragraphs: [
          'You agree to defend, indemnify, and hold harmless NomadsSecure Group Pvt Ltd and its representatives from any claims, liabilities, damages, losses, or expenses resulting from violation of these Terms, misuse of services, violation of laws, or infringement of third-party rights.',
        ],
      },
      {
        heading: '16. Website Availability',
        paragraphs: [
          'We strive to maintain website availability but do not guarantee uninterrupted access. We reserve the right to perform maintenance, update systems, modify website features, or restrict access when necessary without prior notice.',
        ],
      },
      {
        heading: '17. Termination',
        paragraphs: [
          'We may suspend or terminate access to our website or services if these Terms are violated, fraudulent activity is detected, security concerns arise, or action is required by law.',
        ],
      },
      {
        heading: '18. Governing Law',
        paragraphs: [
          'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in Noida, Uttar Pradesh, India.',
        ],
      },
      {
        heading: '19. Changes to Terms',
        paragraphs: [
          'We may revise these Terms from time to time. Updated versions will be published on this page with the revised effective date. Continued use of our website after updates constitutes acceptance of the revised Terms.',
        ],
      },
      {
        heading: '20. Contact Information',
        bullets: [
          'NomadsSecure Group Pvt Ltd',
          'Noida, Uttar Pradesh, India',
          'Email: info@nomadssecure.com',
          'Website: nomadssecure.com',
        ],
      },
    ],
  },
  '/cookie-policy': {
    eyebrow: 'Cookie Policy',
    title: 'Cookie Policy',
    intro:
      'This Cookie Policy explains how NomadsSecure Group Pvt Ltd uses cookies and similar technologies on our website.',
    updated: 'Last Updated: June 2026',
    sections: [
      {
        heading: '1. Introduction',
        paragraphs: [
          'This Cookie Policy explains how NomadsSecure Group Pvt Ltd ("NomadsSecure", "we", "our", or "us") uses cookies and similar technologies on our website, nomadssecure.com.',
          'This policy should be read together with our Privacy Policy, which explains how we collect, use, and protect personal information.',
          'By continuing to use our website, you agree to the use of cookies in accordance with this Cookie Policy.',
        ],
      },
      {
        heading: '2. What Are Cookies?',
        paragraphs: [
          'Cookies are small text files stored on your computer, smartphone, tablet, or other device when you visit a website.',
          'Cookies help websites function efficiently, remember user preferences, improve website performance, and provide insights into how visitors interact with the website.',
          'Cookies do not typically contain information that directly identifies an individual, but they may be linked to information you voluntarily provide.',
        ],
      },
      {
        heading: '3. Why We Use Cookies',
        bullets: [
          'Ensure proper website functionality',
          'Improve website performance and user experience',
          'Understand visitor behavior and website usage',
          'Analyze traffic patterns',
          'Measure marketing effectiveness',
          'Remember user preferences',
          'Improve cybersecurity and website security',
          'Enhance website content and services',
        ],
      },
      {
        heading: '4. Types of Cookies We Use',
        extra: [
          {
            subtitle: 'Essential Cookies',
            paragraphs: [
              'These cookies are necessary for the operation of our website and cannot be disabled through our systems. They help with website navigation, security features, form submissions, load balancing, and session management.',
              'Without these cookies, certain parts of the website may not function correctly.',
            ],
          },
          {
            subtitle: 'Functional Cookies',
            paragraphs: [
              'Functional cookies allow us to remember your preferences and settings to provide a more personalized experience, including language preferences, user interface settings, previously selected options, and form information retention.',
            ],
          },
          {
            subtitle: 'Analytics Cookies',
            paragraphs: [
              'Analytics cookies help us understand how visitors interact with our website. They may collect pages visited, time spent on pages, navigation patterns, device and browser information, and website performance metrics.',
              'We use this information to improve our website, services, educational content, and user experience.',
            ],
          },
          {
            subtitle: 'Advertising and Marketing Cookies',
            paragraphs: [
              'Marketing cookies help us understand the effectiveness of our advertising campaigns and improve our marketing efforts. They may track website visits from advertisements, campaign performance, and engagement with marketing content.',
            ],
          },
        ],
      },
      {
        heading: '5. Third-Party Services That May Use Cookies',
        paragraphs: ['Our website may use cookies from trusted third-party service providers, including:'],
        bullets: [
          'Google Analytics - used to analyze website traffic, visitor behavior, and website performance',
          'Google Ads - used to measure advertising performance and improve marketing campaigns',
          'LinkedIn Insight Tag - used to measure engagement from LinkedIn campaigns and understand visitor interactions with our website',
        ],
      },
      {
        heading: '6. Educational Content and Student Visitors',
        paragraphs: [
          'NomadsSecure provides educational content, cybersecurity awareness resources, technology guidance, career insights, and training-related information that may be accessed by students and young learners.',
          'Cookies used on our website are intended to improve website functionality, learning experiences, security, and performance and are not designed to knowingly collect personal information from children without appropriate consent where required by law.',
        ],
      },
      {
        heading: '7. Managing Cookies',
        paragraphs: ['Most web browsers allow users to manage cookie preferences. You can:'],
        bullets: [
          'View stored cookies',
          'Delete existing cookies',
          'Block cookies',
          'Configure browser settings to notify you when cookies are used',
        ],
        extra: [
          {
            paragraphs: [
              'Please note that disabling certain cookies may affect website functionality and your overall user experience. Helpful browser support resources include Google Chrome, Mozilla Firefox, Microsoft Edge, and Apple Safari.',
            ],
          },
        ],
      },
      {
        heading: '8. Do Not Track Signals',
        paragraphs: [
          'Some browsers offer a "Do Not Track" feature. Because there is currently no universally accepted standard for responding to DNT signals, our website may continue to operate normally regardless of such settings.',
        ],
      },
      {
        heading: '9. Updates to This Cookie Policy',
        paragraphs: [
          'We may update this Cookie Policy from time to time to reflect changes in technology, applicable laws, our services, or website functionality. The updated version will be posted on this page with a revised "Last Updated" date.',
        ],
      },
      {
        heading: '10. Contact Us',
        bullets: [
          'NomadsSecure Group Pvt Ltd',
          'Noida, Uttar Pradesh, India',
          'Email: info@nomadssecure.com',
          'Website: nomadssecure.com',
        ],
      },
    ],
  },
};

function SectionBlock({ section }) {
  return (
    <article className="legal-section">
      <h2>{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.bullets ? (
        <ul>
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.extra?.map((item) => (
        <div className="legal-subsection" key={item.subtitle || item.paragraphs?.[0]}>
          {item.subtitle ? <h3>{item.subtitle}</h3> : null}
          {item.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {item.bullets ? (
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </article>
  );
}

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
          <p>{content.intro}</p>
          <p className="legal-updated">{content.updated}</p>
        </div>
      </section>

      <section className="section legal-content">
        <div className="legal-text-panel">
          {content.sections.map((section) => (
            <SectionBlock key={section.heading} section={section} />
          ))}
        </div>
      </section>
    </>
  );
}
