import { ThemeProvider } from '@/hooks';
import {
  Nav,
  Hero,
  Skills,
  Projects,
  Experience,
  Publications,
  Blog,
  Contact,
  About,
  Footer,
} from '@/components';

function App() {
  return (
    <ThemeProvider>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Publications />
        <Blog />
        <Contact />
        <About />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
