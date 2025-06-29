import Hero from '../components/Hero';
import About from '../components/About';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
    </main>
  );
}
