import { useTheme } from '@/hooks';
import { navLinks } from '@/data';

export function Nav() {
  const { toggleTheme } = useTheme();

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        <div className="brand">Pragadeesh V</div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <button className="btn-ghost" onClick={toggleTheme} title="Toggle theme">
            Toggle
          </button>
        </div>
      </div>
    </nav>
  );
}
