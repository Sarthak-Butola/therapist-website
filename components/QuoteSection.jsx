'use client';

import { useEffect, useRef } from 'react';

export default function QuoteSection() {
  const quoteRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (quoteRef.current) observer.observe(quoteRef.current);
    if (nameRef.current) observer.observe(nameRef.current);

    return () => {
      if (quoteRef.current) observer.unobserve(quoteRef.current);
      if (nameRef.current) observer.unobserve(nameRef.current);
    };
  }, []);

  return (
    <section className="relative w-full text-center px-6 sm:px-8 py-24 md:py-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/seashore.jpg')`,
          filter: 'brightness(80%)',
        }}
      />

      {/* Overlay Content */}
      <div
        className="relative z-10 mx-auto text-black"
        style={{
          fontFamily: 'Georgia, serif',
          maxWidth: '700px',
        }}
      >
        <p
          ref={quoteRef}
          className="fadeInOnScroll text-2xl md:text-3xl font-normal leading-relaxed mb-4"
        >
          “I have come to believe that caring for myself is not self-indulgent. <br />
          Caring for myself is an act of survival.”
        </p>
        <p
          ref={nameRef}
          className="fadeInOnScroll mt-6 text-base md:text-lg text-gray-800 italic"
        >
          — Audre Lorde
        </p>
      </div>
    </section>
  );
}
