import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServiceCard({ group }) {
  const Icon = group.icon;

  return (
    <article className={`service-card ${group.accent}`}>
      <div className="service-card-head">
        <span className="service-icon">
          <Icon size={26} />
        </span>
        <h3>{group.title}</h3>
      </div>
      <p>{group.summary}</p>
      <ul>
        {group.services.slice(0, 5).map((service) => (
          <li key={service.name}>
            <CheckCircle2 size={16} />
            {service.name}
          </li>
        ))}
      </ul>
      <Link to={`/services#${group.id}`} className="text-link">
        Explore service <ArrowRight size={16} />
      </Link>
    </article>
  );
}
