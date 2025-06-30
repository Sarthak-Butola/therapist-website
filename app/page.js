import Hero from '../components/Hero';
import About from '../components/About';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import RatesInsurance from '@/components/RatesInsurance';
import QuoteSection from '@/components/QuoteSection';
import Footer from '@/components/Footer';
import TherapyIntro from '@/components/TherapyIntro';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <TherapyIntro/>
      <Services />
      <FAQ />
      <Contact />
      <RatesInsurance />
      <QuoteSection />
      <Footer />
    </main>
  );
}
