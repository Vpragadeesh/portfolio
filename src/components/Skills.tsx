import { useFadeIn } from '@/hooks';
import { skills } from '@/data';

export function Skills() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="skills" className="wrap">
      <h2 className="section-title">Skills</h2>
      <div
        ref={ref}
        className={`card fade-in ${isVisible ? 'in' : ''}`}
        style={{ display: 'grid', gap: '1rem' }}
      >
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {skills.map((skill) => (
            <div key={skill.category} style={{ flex: 1, minWidth: '220px' }}>
              <div className="meta">{skill.category}</div>
              <div className="badges" style={{ marginTop: '0.5rem' }}>
                {skill.items.map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
