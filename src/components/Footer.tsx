import { navLinks } from '@/data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="wrap">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.6rem',
        }}
      >
        <div className="footer-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
          © {year} Pragadeesh V. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
