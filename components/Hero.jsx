'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#f5f2e9] flex items-center justify-center">
      <div className="relative w-full h-screen mx-4 sm:mx-8 lg:mx-16 overflow-hidden bg-[#f5f2e9] mt-10">
        {/* 🎥 Background Video */}
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* 🌑 Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-10" />

        {/* ✨ Foreground Content */}
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 text-white">
          <h1
            ref={headingRef}
            className="fadeInOnScroll font-serif text-3xl sm:text-4xl md:text-6xl font-bold leading-snug drop-shadow-md"
          >
            Psychological Care for <br />
            Change, Insight, and Well‑Being
          </h1>

          <p
            ref={paragraphRef}
            className="fadeInOnScroll mt-4 text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl drop-shadow font-light"
          >
            Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation.
          </p>

          <a
            ref={buttonRef}
            href="#contact"
            className="fadeInOnScroll mt-8 inline-block bg-[#a7c2c2] text-white text-[0.875rem] sm:text-base uppercase 
                       font-light tracking-[0.1em] px-12 sm:px-16 py-4 sm:py-5 rounded-full 
                       transition duration-300 hover:opacity-70"
            style={{
              fontFamily: `'Inter', sans-serif`,
              letterSpacing: '0.08em',
            }}
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
  