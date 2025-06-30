'use client';

import { useEffect, useRef } from 'react';

export default function RatesAndInsurance() {
  const sectionRef = useRef(null);
  const noticeRef = useRef(null);

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

    const targets = sectionRef.current?.querySelectorAll('.fadeInOnScroll');
    targets?.forEach(el => observer.observe(el));
    if (noticeRef.current) observer.observe(noticeRef.current);

    return () => {
      targets?.forEach(el => observer.unobserve(el));
      if (noticeRef.current) observer.unobserve(noticeRef.current);
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="w-full bg-[#99bebf] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center text-[#1c1c1c] space-y-6">
          <h2 className="fadeInOnScroll text-3xl sm:text-4xl font-serif font-semibold tracking-tight leading-snug">
            Rates and Insurance
          </h2>

          <p className="fadeInOnScroll text-lg sm:text-xl font-light font-serif leading-relaxed tracking-normal">
            Session Fee – $200
          </p>

          <p className="fadeInOnScroll text-lg sm:text-xl font-light font-serif leading-relaxed tracking-normal">
            Psychodiagnostic Evaluation – $225
          </p>

          <p className="fadeInOnScroll text-base sm:text-lg font-serif font-light leading-relaxed tracking-normal">
            I accept both private pay and insurance. I am in-network with BCBS and Aetna.
          </p>

          <p className="fadeInOnScroll text-base sm:text-lg font-serif font-light leading-relaxed tracking-normal">
            For out-of-network plans, I’ve partnered with Mentaya using{' '}
            <a
              href="https://app.mentaya.com/p/provider-match?provider=65afdee4bb1f2a0001432658"
              className="underline hover:text-[#2e2e2e] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              this tool
            </a>{' '}
            to help you check your eligibility for reimbursement for my services.
          </p>
        </div>
      </section>

      {/* ❗ Notice section with fade-in */}
      <section className="w-full bg-[#f4f1ea] py-24 px-6">
        <div
          ref={noticeRef}
          className="fadeInOnScroll max-w-5xl mx-auto text-center"
        >
          <p
            className="text-xl sm:text-[1.625rem] font-serif font-semibold mx-1"
            style={{ color: '#2c2c2c', lineHeight: '1.8' }}
          >
            Unable to accept new clients at this time.
          </p>
        </div>
      </section>
    </>
  );
}
