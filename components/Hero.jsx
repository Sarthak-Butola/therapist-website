'use client';

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center">
      <div className="relative w-full max-w-7xl h-[90vh] mx-4 sm:mx-8 overflow-hidden">
        {/* 🎥 Background Video */}
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ✨ Foreground Text */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-8 text-white">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold leading-snug drop-shadow-md">
            Psychological Care for <br />
            Change, Insight, and Well‑Being
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl drop-shadow font-light">
            Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation.
          </p>

          <a
            href="#contact"
            className="mt-8 w-64 h-12 sm:w-72 sm:h-14 bg-[#b9cfcf] text-white text-sm sm:text-base md:text-lg font-semibold rounded-[36px] flex items-center justify-center tracking-wide hover:bg-[#a8bcbc] transition"
          >
            SCHEDULE A CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
}
