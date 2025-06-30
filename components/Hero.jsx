'use client';

export default function Hero() {
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

        {/* 🌑 Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black opacity-50 z-10" />

        {/* ✨ Foreground Content */}
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 text-white">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold leading-snug drop-shadow-md">
            Psychological Care for <br />
            Change, Insight, and Well‑Being
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl drop-shadow font-light">
            Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation.
          </p>

          <a
            href="#contact"
            className="mt-8 bg-[#b9cfcf] text-white text-sm sm:text-base md:text-lg font-semibold rounded-full px-8 py-3 sm:px-10 sm:py-3.5 tracking-wide hover:bg-[#a8bcbc] transition"
          >
            SCHEDULE A CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
}
