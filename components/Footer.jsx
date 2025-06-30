'use client';

import { useEffect, useRef } from 'react';

export default function Footer() {
  const fadeRefs = useRef([]);

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

    fadeRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      fadeRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <footer className="bg-[#f5f2e9] text-center py-12 px-4 text-[#2e2e2e]">
      <div className="space-y-4" style={{ fontFamily: 'Georgia, serif' }}>
        <h2
          ref={(el) => (fadeRefs.current[0] = el)}
          className="fadeInOnScroll text-2xl md:text-3xl font-normal"
        >
          Dr. Serena Blake, PsyD, Clinical Psychologist
        </h2>

        <p ref={(el) => (fadeRefs.current[1] = el)} className="fadeInOnScroll">
          <a href="mailto:serena@blakepsychology.com" className="underline hover:text-gray-700">
            serena@blakepsychology.com
          </a>
        </p>

        <p ref={(el) => (fadeRefs.current[2] = el)} className="fadeInOnScroll">
          Phone: <a href="tel:3235550192" className="underline">(323) 555-0192</a>
        </p>

        <p ref={(el) => (fadeRefs.current[3] = el)} className="fadeInOnScroll">
          1287 Maplewood Drive, Los Angeles, CA 90026
        </p>

        <p ref={(el) => (fadeRefs.current[4] = el)} className="fadeInOnScroll">
          <strong>Office Hours:</strong><br />
          In-person: Tue & Thu, 10 AM–6 PM<br />
          Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
        </p>

        <p ref={(el) => (fadeRefs.current[5] = el)} className="fadeInOnScroll">
          8 years of practice · 500+ sessions
        </p>

        <div
          ref={(el) => (fadeRefs.current[6] = el)}
          className="fadeInOnScroll space-x-4"
        >
          <a href="#" className="underline hover:text-gray-700">Home</a>
          <a href="#" className="underline hover:text-gray-700">Privacy Policy</a>
          <a href="#" className="underline hover:text-gray-700">Good Faith Estimate</a>
        </div>

        <div
          ref={(el) => (fadeRefs.current[7] = el)}
          className="fadeInOnScroll pt-8"
        >
          <a href="#" className="underline text-lg hover:text-gray-700">Client Portal</a>
        </div>

        <p
          ref={(el) => (fadeRefs.current[8] = el)}
          className="fadeInOnScroll text-sm pt-8 text-gray-700"
        >
          © 2025 Dr. Serena Blake. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
