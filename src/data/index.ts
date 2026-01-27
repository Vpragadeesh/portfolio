import type { Project, Skill, Experience, Publication, BlogPost, Stat, SocialLink } from '@/types';

export const stats: Stat[] = [
  { value: 6, label: 'Years coding' },
  { value: 8, label: 'Hackathons' },
  { value: 2, label: 'Publications (in-progress)' },
  { value: 15, label: 'Technologies' },
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Flask', 'Golang'],
  },
  {
    category: 'AI / ML',
    items: ['PyTorch', 'TensorFlow', 'Deep Learning', 'NLP'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Linux', 'NixOS', 'Arch'],
  },
];

export const projects: Project[] = [
  {
    id: 'slm',
    title: 'Small Language Model - Storytelling GPT',
    shortName: 'SLM',
    description:
      'Built a production-ready GPT-based language model with 16 layers trained on 5GB+ dataset using advanced techniques. Developed comprehensive inference system with nucleus sampling, repetition penalty, and interactive story generation.',
    tech: 'Python, PyTorch, Transformers, CUDA, Rich CLI',
    tags: ['Python', 'PyTorch', 'Transformers', 'CUDA'],
    categories: ['ai'],
    githubUrl: '#',
    demoUrl: '#',
    demoLabel: 'Demo',
  },
  {
    id: 'ai-sales',
    title: 'AI Sales Assistant',
    shortName: 'AI Sales',
    description:
      'Developed an AI-powered sales assistant capable of authenticating users via Google OAuth and generating personalized draft emails in Gmail. Integrated Retrieval-Augmented Generation (RAG) for contextual company information retrieval and personalized communication.',
    tech: 'Python, FastAPI, AWS LangChain, Gmail API, RAG',
    tags: ['Python', 'FastAPI', 'LangChain', 'RAG'],
    categories: ['ai', 'web'],
    githubUrl: '#',
    demoUrl: '#',
    demoLabel: 'Live',
  },
  {
    id: 'wifi-hotspot',
    title: 'Enable WiFi Hotspot Together',
    shortName: 'WiFi Hotspot',
    description:
      'Developed a Linux project enabling concurrent WiFi hotspot functionality. Utilized C language scripting and Linux networking utilities to streamline hotspot management.',
    tech: 'Bash, Linux',
    tags: ['Bash', 'Linux', 'C', 'Networking'],
    categories: ['systems'],
    githubUrl: '#',
    demoUrl: '#',
    demoLabel: 'Download',
  },
  {
    id: 'ids',
    title: 'Intrusion Detection System',
    shortName: 'IDS',
    description:
      'Built an IDS using a hybrid approach combining CNN-LSTM, Random Forest, and XGBoost on the NSL-KDD dataset. Implemented multi-GPU training with PyTorch to improve computation efficiency.',
    tech: 'Python, PyTorch, Scikit-learn, CNN-LSTM, Random Forest, XGBoost',
    tags: ['Python', 'PyTorch', 'CNN-LSTM', 'XGBoost'],
    categories: ['ai'],
    githubUrl: '#',
    demoUrl: '#',
    demoLabel: 'Results',
  },
];

export const experiences: Experience[] = [
  {
    title: 'SDG Hackathon Participant',
    period: '2023',
    description:
      'Built ML solutions for social impact challenges focused on sustainability and accessibility.',
  },
  {
    title: 'FOSS Hackathon Winner',
    period: '2023',
    description:
      'Won for technical excellence building a cross-platform vector editor in C++/Rust.',
  },
  {
    title: 'Algorithm & Practice',
    period: 'LeetCode',
    description:
      'Solved 550+ problems to strengthen algorithmic and system design skills.',
  },
];

export const publications: Publication[] = [
  {
    type: 'Review Paper',
    title: 'Advancements in Handwritten Digit and Character Recognition',
    description:
      'A comprehensive review of architectures, datasets, and techniques in handwritten recognition. (In progress)',
    draftUrl: '#',
    repoUrl: '#',
  },
  {
    type: 'Research Notes',
    title: 'Experiments & Benchmarks',
    description:
      'Benchmark logs, reproducible scripts and model cards for the handwritten recognition experiments.',
  },
  {
    type: 'Future Work',
    title: 'Ongoing',
    description: 'More papers and reproducible research to be published soon.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Deep Learning Notes — RNN vs Transformer',
    excerpt:
      'Short excerpt about sequence models, attention and practical considerations for handwriting tasks.',
    url: '#',
  },
  {
    title: 'Optimizing Multi-GPU Training',
    excerpt:
      'Notes on profiling and reducing communication overhead in distributed setups.',
    url: '#',
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'Email', url: 'mailto:pragadeesh@example.com' },
  { label: 'GitHub', url: 'https://github.com/pragadeesh' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/pragadeesh' },
  { label: 'Twitter', url: 'https://twitter.com/pragadeesh' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const typingPhrases = [
  'AI/ML Researcher',
  'Full-Stack Developer',
  'Open Source Contributor',
];
