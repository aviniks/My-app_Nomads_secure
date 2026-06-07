import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock3 } from 'lucide-react';
import blogBanner from '../../banner/banner.mp4';

const blogPosts = [
  {
    title: 'Top 10 Cybersecurity Threats in 2025 and How to Defend Against Them',
    category: 'Cybersecurity',
    date: 'Jan 15, 2025',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    excerpt:
      'The threat landscape is evolving rapidly. From AI-powered phishing to supply chain attacks, here is what every business needs to know and do to stay protected.',
  },
  {
    title: 'GEO vs SEO: Why Generative Engine Optimisation is the Future of Search',
    category: 'Digital Marketing',
    date: 'Jan 22, 2025',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    excerpt:
      'As AI search engines reshape how people find information, GEO is becoming essential for brand visibility in the AI era.',
  },
  {
    title: 'How AI Agents are Transforming Business Operations in 2025',
    category: 'AI',
    date: 'Feb 3, 2025',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
    excerpt:
      'Intelligent AI agents are automating customer service, lead generation, reporting, and complex workflows for businesses of all sizes.',
  },
  {
    title: 'Career Growth in the AI Era: Skills Professionals Need Now',
    category: 'Career',
    date: 'Feb 12, 2025',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    excerpt:
      'Career development now requires digital fluency, AI awareness, communication skills, and a clear strategy for long-term professional growth.',
  },
];

const filters = ['All Posts', 'Cybersecurity', 'Digital Marketing', 'AI & Tech', 'Career'];

export default function Blog() {
  const handleSubscribe = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    alert('Thank you for subscribing to NomadsSecure insights.');
  };

  return (
    <>
      <section className="blog-video-hero">
        <video src={blogBanner} autoPlay muted loop playsInline />
        <div className="blog-video-overlay" />
        <div className="blog-video-content">
          <span className="eyebrow">Blog</span>
          <h1>Knowledge Hub</h1>
          <p>
            Expert insights on cybersecurity, AI, digital marketing, and career
            development from the NOMADS Secure team.
          </p>
        </div>
      </section>

      <section className="section blog-post-section">
        <div className="blog-filters" aria-label="Blog categories">
          {filters.map((filter, index) => (
            <button key={filter} type="button" className={index === 0 ? 'active' : undefined}>
              {filter}
            </button>
          ))}
        </div>

        <div className="blog-grid rich">
          {blogPosts.map((post, index) => (
            <article key={post.title} className={index === 0 ? 'blog-card featured' : 'blog-card'}>
              <div className="blog-image-wrap">
                <img src={post.image} alt="" className="blog-image" />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-body">
                <div className="post-meta compact">
                  <span>
                    <CalendarDays size={15} /> {post.date}
                  </span>
                  <span>
                    <Clock3 size={15} /> {post.readTime}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link className="text-link" to="/contacts">
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="subscription-panel">
          <h2>Stay in the Loop</h2>
          <p>
            Get our latest insights on AI, cybersecurity, and digital growth delivered
            to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="subscription-form">
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe →</button>
          </form>
        </section>
      </section>
    </>
  );
}
