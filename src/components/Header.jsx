import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { serviceGroups } from '../data/services.js';
import logo from '../../banner/logo.png';

const navItems = [
  { label: 'Home', to: '/home' },
];

const secondaryNavItems = [
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contacts', to: '/contacts' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Link to="/home" className="brand" onClick={() => setIsOpen(false)}>
        <span className="brand-mark">
          <img src={logo} alt="NomadsSecure logo" />
        </span>
        <span>
          <strong>NomadsSecure</strong>
          <small>Secure Growth</small>
        </span>
      </Link>

      <button
        className="icon-button nav-toggle"
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={isOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
        <div className="nav-dropdown">
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? 'active nav-dropdown-trigger' : 'nav-dropdown-trigger')}
          >
            Services <ChevronDown size={15} />
          </NavLink>
          <div className="nav-dropdown-menu">
            {serviceGroups.map((group) => (
              <Link
                key={group.id}
                to={`/services#${group.id}`}
                onClick={() => setIsOpen(false)}
              >
                {group.title}
              </Link>
            ))}
          </div>
        </div>
        {secondaryNavItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
        <Link className="nav-cta" to="/contacts" onClick={() => setIsOpen(false)}>
          Book Consultation
        </Link>
      </nav>
    </header>
  );
}
