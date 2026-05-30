# NomadsSecure Website

React website for an IT service consultancy firm offering digital marketing,
cybersecurity, AI agent, and career training services.

## Pages

- `/home` - Homepage with banner, service links, highlights, testimonials, and CTA
- `/services` - Full service page with linked sections
- `/services#digital-marketing` - Digital Marketing Services
- `/services#cybersecurity` - Cybersecurity Services
- `/services#ai-security-agent` - AI Security and Agent
- `/services#career-training` - Career and Training
- `/about` - Company objective and values
- `/blog` - Blog page with articles and resource topics
- `/contacts` - Consultation form and contact details
- `/privacy-policy` - Privacy policy placeholder page
- `/terms-of-service` - Terms of service placeholder page
- `/cookie-policy` - Cookie policy placeholder page

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open this URL in the browser:

```text
http://localhost:5173/home
```

If that page is blank or the port is already busy, run:

```bash
npm run dev -- --host 0.0.0.0 --port 5174
```

Then open:

```text
http://localhost:5174/home
```

Do not open `index.html` directly by double-clicking it. React pages need the
development server above so routes like `/home`, `/services`, and `/contacts`
can load correctly.

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customize

- Company name and contact details:
  - `src/components/Header.jsx`
  - `src/components/Footer.jsx`
  - `src/pages/Contact.jsx`
- Service categories and service lists:
  - `src/data/services.js`
- Home page testimonials:
  - `src/pages/Home.jsx`
- Blog articles:
  - `src/pages/Blog.jsx`
- Colors and layout:
  - `src/styles.css`

## Notes

The consultation form currently shows a success message in the browser. To receive
real form submissions, connect the form to a backend service, email API, CRM, or a
form provider such as Formspree, Netlify Forms, or your own server endpoint.
