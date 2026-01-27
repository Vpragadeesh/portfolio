import { useTypingAnimation, useFadeIn, useCountUp } from '@/hooks';
import { typingPhrases, stats } from '@/data';

function StatItem({ value, label }: { value: number; label: string }) {
  const { count, ref } = useCountUp(value);
  
  return (
    <div className="stat" ref={ref}>
      <div>
        <div className="num">{count}</div>
        <div className="label">{label}</div>
      </div>
    </div>
  );
}

export function Hero() {
  const typedText = useTypingAnimation(typingPhrases);
  const { ref: introRef, isVisible: introVisible } = useFadeIn();
  const { ref: profileRef, isVisible: profileVisible } = useFadeIn();

  return (
    <section id="home" className="wrap">
      <header className="hero">
        <div className="hero-grid">
          <div
            ref={introRef}
            className={`intro fade-in ${introVisible ? 'in' : ''}`}
          >
            <div className="kicker">AI / ML • Full-Stack • Open Source</div>
            <h1>
              Hi, I'm <span className="tagline">Pragadeesh V</span>
            </h1>
            <div className="subtitle">
              <span className="typing">{typedText}</span>
            </div>

            <p className="small" style={{ marginTop: '0.5rem' }}>
              I'm an AI/ML researcher and full-stack developer who builds
              production-grade systems, conducts research in handwritten
              recognition and applied deep learning, and contributes to
              open-source projects.
            </p>

            <div className="cta-row">
              <a className="btn" href="#projects">
                View Projects
              </a>
              <a className="btn secondary" href="resume.pdf" download>
                Download Resume
              </a>
            </div>

            <div className="stats">
              {stats.map((stat) => (
                <StatItem key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          <aside
            ref={profileRef}
            className={`profile fade-in ${profileVisible ? 'in' : ''}`}
          >
            <div className="avatar" aria-hidden="true">
              PV
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '1.05rem' }}>
                Pragadeesh V
              </strong>
              <p className="small">
                AI/ML Researcher • Full-Stack Developer • Open Source Contributor
              </p>
              <div style={{ marginTop: '0.6rem' }} className="badges">
                <span className="badge">Open Source</span>
                <span className="badge">Research</span>
                <span className="badge">Deep Learning</span>
                <span className="badge">Systems</span>
              </div>
            </div>
          </aside>
        </div>
      </header>
    </section>
  );
}
