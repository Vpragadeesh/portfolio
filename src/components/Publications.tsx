import { useFadeIn } from '@/hooks';
import { publications } from '@/data';

function PublicationCard({
  type,
  title,
  description,
  draftUrl,
  repoUrl,
}: {
  type: string;
  title: string;
  description: string;
  draftUrl?: string;
  repoUrl?: string;
}) {
  const { ref, isVisible } = useFadeIn();

  return (
    <div ref={ref} className={`card fade-in ${isVisible ? 'in' : ''}`}>
      <div className="meta">{type}</div>
      <h3 style={{ marginTop: '0.25rem' }}>{title}</h3>
      <p style={{ color: 'var(--muted)', marginTop: '0.6rem' }}>{description}</p>
      {(draftUrl || repoUrl) && (
        <div style={{ marginTop: '0.6rem' }}>
          {draftUrl && (
            <a className="link-btn ghost" href={draftUrl} target="_blank" rel="noopener noreferrer">
              Read Draft
            </a>
          )}{' '}
          {repoUrl && (
            <a className="link-btn" href={repoUrl} target="_blank" rel="noopener noreferrer">
              Repo
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export function Publications() {
  return (
    <section id="publications" className="wrap">
      <h2 className="section-title">Publications & Research</h2>
      <div className="cards">
        {publications.map((pub) => (
          <PublicationCard
            key={pub.title}
            type={pub.type}
            title={pub.title}
            description={pub.description}
            draftUrl={pub.draftUrl}
            repoUrl={pub.repoUrl}
          />
        ))}
      </div>
    </section>
  );
}
