  // import Hero from '../components/Hero';

  // export default function HomePage() {
  //   return (
  //     <main>
  //       <Hero />
  //     </main>
  //   );
  // }


  import Hero from '../components/Hero';
import About from '../components/About';
import Services from '@/components/Services';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services  />
    </main>
  );
}
