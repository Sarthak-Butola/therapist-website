'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full bg-white pt-16 pb-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-12">
        
        {/* 📝 Text */}
        <div className="w-full md:w-1/2 text-[#4d4d4d] text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Dr. Serena Blake, PsyD
          </h2>
          <p
            className="preFade fadeIn text-lg leading-relaxed"
            style={{
              whiteSpace: 'pre-wrap',
              transitionTimingFunction: 'ease',
              transitionDuration: '0.9s',
              transitionDelay: '0.144s',
            }}
          >
            Finding time and opportunities to care for ourselves can be incredibly challenging in today's busy and demanding world. I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice. Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to their well-being, recognizing that these aspects vary from person to person.
          </p>
        </div>

        {/* 📸 Image */}
        <div className="w-full md:w-1/2 flex justify-center">
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

      {/* ✅ Short Horizontal Divider */}
      <div className="mt-12 flex justify-center">
        <div className="w-3/4 border-b border-black" />
      </div>
    </section>
  );
}
