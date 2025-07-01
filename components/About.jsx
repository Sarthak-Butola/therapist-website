'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const options = { threshold: 0.2 };

    const imageObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShowImage(true);
    }, options);

    const textObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShowText(true);
    }, options);

    if (imageRef.current) imageObserver.observe(imageRef.current);
    if (textRef.current) textObserver.observe(textRef.current);

    return () => {
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
      if (textRef.current) textObserver.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="w-full bg-white pt-16 pb-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-12">
        {/* 📝 Text */}
        <div
          ref={textRef}
          className={`w-full md:w-1/2 text-[#4d4d4d] text-left transition-opacity duration-[1.1s] ease-in-out ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Dr. Serena Blake, PsyD
          </h2>
          <p className="text-lg leading-relaxed">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
            with eight years of experience and over 500 client sessions. She blends evidence-based
            approaches—like cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen relationships, and heal from
            trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom,
            Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>

        {/* 📸 Image */}
        <div
          ref={imageRef}
          className={`w-full md:w-1/2 flex justify-center transition-opacity duration-[1.1s] ease-in-out ${
            showImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
            <Image
              src="/lady-photo.jpg"
              alt="Dr. Serena Blake"
              width={420}
              height={600}
              className="rounded-lg object-cover w-full h-auto shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 flex justify-center">
        <div className="w-14/15 border-b border-black" />
      </div>
    </section>
  );
}
  