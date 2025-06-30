'use client';

export default function TherapyIntro() {
  return (
    <section className="bg-[#f5f2e9] text-center px-6 py-20 border-b border-gray-400">
      <div className="max-w-5xl mx-auto space-y-6" style={{ fontFamily: 'Georgia, serif' }}>
        <h2 className="text-3xl md:text-4xl font-normal text-[#2e2e2e] leading-snug">
          Therapy can be a space where you invest in yourself—
          <br />
          one of the highest forms of self-care.
        </h2>
        <p className="text-base md:text-lg text-[#2e2e2e] leading-relaxed">
          You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma,
          grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships.
          Whatever the source of your stress, you don’t have to face it alone. Therapy offers you the time and space
          to work toward wellness and peace.
        </p>
      </div>
    </section>
  );
}
