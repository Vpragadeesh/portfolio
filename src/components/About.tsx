import { useFadeIn } from '@/hooks';

export function About() {
  const { ref: ref1, isVisible: visible1 } = useFadeIn();
  const { ref: ref2, isVisible: visible2 } = useFadeIn();
  const { ref: ref3, isVisible: visible3 } = useFadeIn();

  return (
    <section id="about" className="wrap">
      <h2 className="section-title">About Me</h2>
      <div className="cards">
        <div ref={ref1} className={`card fade-in ${visible1 ? 'in' : ''}`}>
          <div className="meta">Background</div>
          <h3 style={{ marginTop: '0.25rem' }}>Who I am</h3>
          <p style={{ color: 'var(--muted)', marginTop: '0.6rem' }}>
            I research and build applied deep learning systems — from handwritten
            recognition models to production-ready AI assistants. I'm passionate
            about reproducible research, performance optimization on GPUs, and
            open-source tooling. I enjoy systems programming (C++, Rust), backend
            services (Go, Python), and modern frontend stacks.
          </p>
        </div>

        <div ref={ref2} className={`card fade-in ${visible2 ? 'in' : ''}`}>
          <div className="meta">Research & Interests</div>
          <h3 style={{ marginTop: '0.25rem' }}>Focus Areas</h3>
          <p style={{ color: 'var(--muted)', marginTop: '0.6rem' }}>
            Handwritten recognition, sequence modeling, efficient large-scale
            training, retrieval-augmented generation, and responsible AI. I
            publish reviews and experiment results, and maintain reproducible
            codebases in PyTorch and TensorFlow.
          </p>
        </div>

        <div ref={ref3} className={`card fade-in ${visible3 ? 'in' : ''}`}>
          <div className="meta">Quick Highlights</div>
          <h3 style={{ marginTop: '0.25rem' }}>Skills & Stats</h3>
          <div style={{ marginTop: '0.6rem' }} className="badges">
            <span className="badge">Python</span>
            <span className="badge">PyTorch</span>
            <span className="badge">React</span>
            <span className="badge">Go</span>
            <span className="badge">C++ / Rust</span>
            <span className="badge">Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
}
