import { useState, type FormEvent } from 'react';
import { useFadeIn } from '@/hooks';
import { socialLinks } from '@/data';

export function Contact() {
  const { ref: cardRef, isVisible: cardVisible } = useFadeIn();
  const { ref: formRef, isVisible: formVisible } = useFadeIn<HTMLFormElement>();
  const [formMsg, setFormMsg] = useState('');
  const [msgColor, setMsgColor] = useState('var(--muted)');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const message = (formData.get('message') as string)?.trim();

    setMsgColor('var(--muted)');
    setFormMsg('Sending...');

    if (!name || !email || !message) {
      setMsgColor('crimson');
      setFormMsg('Please fill all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMsgColor('crimson');
      setFormMsg('Enter a valid email.');
      return;
    }

    // Simulate async send
    setTimeout(() => {
      form.reset();
      setMsgColor('green');
      setFormMsg('Message sent! I will reply soon.');
      setTimeout(() => setFormMsg(''), 4200);
    }, 900);
  };

  return (
    <section id="contact" className="wrap">
      <h2 className="section-title">Get In Touch</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
        <div ref={cardRef} className={`card fade-in ${cardVisible ? 'in' : ''}`}>
          <strong>Contact</strong>
          <p className="small" style={{ color: 'var(--muted)', marginTop: '0.4rem' }}>
            Open to collaborations, research positions, and freelance work.
            Based in India.
          </p>

          <div
            style={{
              marginTop: '0.8rem',
              display: 'flex',
              gap: '0.6rem',
              flexWrap: 'wrap',
            }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="chip"
                href={link.url}
                target={link.url.startsWith('mailto') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form
          ref={formRef}
          className={`contact card fade-in ${formVisible ? 'in' : ''}`}
          onSubmit={handleSubmit}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.6rem' }}>
            <input name="name" type="text" placeholder="Your name" required />
            <input name="email" type="email" placeholder="Your email" required />
          </div>
          <textarea name="message" rows={5} placeholder="Message (brief)" required />
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
            <button className="btn" type="submit">
              Send Message
            </button>
            <div className="small" style={{ color: msgColor }}>
              {formMsg}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
