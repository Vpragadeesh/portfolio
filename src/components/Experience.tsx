import { useFadeIn } from '@/hooks';
import { experiences } from '@/data';

function TimelineItem({
  title,
  period,
  description,
}: {
  title: string;
  period: string;
  description: string;
}) {
  const { ref, isVisible } = useFadeIn();

  return (
    <div ref={ref} className={`timeline-item fade-in ${isVisible ? 'in' : ''}`}>
      <div className="timeline-dot" aria-hidden="true"></div>
      <div className="timeline-body">
        <strong>{title}</strong>
        <div className="small">{period}</div>
        <p className="small" style={{ marginTop: '0.4rem', color: 'var(--muted)' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="wrap">
      <h2 className="section-title">Experience & Achievements</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <TimelineItem
            key={exp.title}
            title={exp.title}
            period={exp.period}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
}
