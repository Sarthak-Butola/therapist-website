'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Anxiety & Stress Management',
      description:
        'Dr. Blake helps clients identify triggers, develop healthy coping mechanisms, and reduce overwhelming thoughts through evidence-based approaches like CBT and mindfulness.',
      image: '/first.jpg',
    },
    {
      title: 'Relationship Counseling',
      description:
        'Whether navigating conflict, rebuilding trust, or improving communication, Dr. Blake supports individuals and couples seeking healthier, more fulfilling relationships.',
      image: '/second.jpg',
    },
    {
      title: 'Trauma Recovery',
      description:
        'With a trauma-informed approach, Dr. Blake creates a safe space to explore and process difficult experiences, helping clients reclaim a sense of safety and wholeness.',
      image: '/third.jpg',
    },
  ];

  const itemRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

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

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="w-full bg-[#f9f6f2] px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
          Areas of Focus
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-lg flex flex-col items-center text-center px-4"
          >
            <div
              ref={(el) => (itemRefs.current[index * 2] = el)}
              className="w-[22rem] h-[22rem] mb-8 fadeInOnScroll"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={352}
                height={352}
                className="rounded-full object-cover w-full h-full border border-gray-300 shadow"
              />
            </div>
            <div
              ref={(el) => (itemRefs.current[index * 2 + 1] = el)}
              className="fadeInOnScroll"
            >
              <h3 className="text-2xl font-semibold font-serif mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
