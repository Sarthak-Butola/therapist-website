'use client';

export default function QuoteSection() {
  return (
    <section className="relative w-full text-center px-6 sm:px-8 py-24 md:py-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/seashore.jpg')`,
          filter: 'brightness(85%)',
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
        <p className="text-2xl md:text-3xl font-normal leading-relaxed mb-4">
          “I have come to believe that caring for myself is not self-indulgent. <br />
          Caring for myself is an act of survival.”
        </p>
        <p className="mt-6 text-base md:text-lg text-gray-800 italic">— Audre Lorde</p>
      </div>
    </section>
  );
}
