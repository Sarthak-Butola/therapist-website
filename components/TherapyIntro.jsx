'use client';

import { useEffect, useRef, useState } from 'react';

export default function TherapyIntro() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [paragraphVisible, setParagraphVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.target === headingRef.current && entry.isIntersecting) {
            setHeadingVisible(true);
          }
          if (entry.target === paragraphRef.current && entry.isIntersecting) {
            setParagraphVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
    };
  }, []);

  return (
    <section className="bg-[#f5f2e9] text-center px-6 py-20 border-b border-gray-400">
      <div className="max-w-5xl mx-auto space-y-6" style={{ fontFamily: 'Georgia, serif' }}>
        <h2
          ref={headingRef}
          className={`text-3xl md:text-4xl font-normal text-[#2e2e2e] leading-snug fadeInOnScroll ${
            headingVisible ? 'visible' : ''
          }`}
        >
          Therapy can be a space where you invest in yourself—<br />
          one of the highest forms of self-care.
        </h2>

        <p
          ref={paragraphRef}
          className={`text-base md:text-lg text-[#2e2e2e] leading-relaxed fadeInOnScroll ${
            paragraphVisible ? 'visible' : ''
          }`}
        >
          You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma,
          grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships.
          Whatever the source of your stress, you don’t have to face it alone. Therapy offers you the time and space
          to work toward wellness and peace.
        </p>
      </div>
    </section>
  );
}
