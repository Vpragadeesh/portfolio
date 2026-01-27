import { useFadeIn } from '@/hooks';
import { blogPosts } from '@/data';

function BlogCard({
  title,
  excerpt,
  url,
}: {
  title: string;
  excerpt: string;
  url: string;
}) {
  const { ref, isVisible } = useFadeIn();

  return (
    <article ref={ref} className={`card fade-in ${isVisible ? 'in' : ''}`}>
      <h3 style={{ margin: '0 0 0.4rem' }}>{title}</h3>
      <p className="small" style={{ color: 'var(--muted)' }}>
        {excerpt}
      </p>
      <div style={{ marginTop: '0.6rem' }}>
        <a className="link-btn ghost" href={url}>
          Read More
        </a>
      </div>
    </article>
  );
}

export function Blog() {
  return (
    <section id="blog" className="wrap">
      <h2 className="section-title">Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.title}
            title={post.title}
            excerpt={post.excerpt}
            url={post.url}
          />
        ))}
      </div>
    </section>
  );
}
