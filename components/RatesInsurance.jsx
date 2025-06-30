export default function RatesAndInsurance() {
  return (
    <>
      <section className="w-full bg-[#99bebf] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center text-[#1c1c1c]">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-8 tracking-tight leading-snug">
            Rates and Insurance
          </h2>

          <p className="text-lg sm:text-xl mb-2 font-light font-serif leading-relaxed tracking-normal">
            Session Fee – $200
          </p>

          <p className="text-lg sm:text-xl mb-6 font-light font-serif leading-relaxed tracking-normal">
            Psychodiagnostic Evaluation – $225
          </p>

          <p className="text-base sm:text-lg mb-4 font-serif font-light leading-relaxed tracking-normal">
            I accept both private pay and insurance. I am in-network with BCBS and Aetna.
          </p>

          <p className="text-base sm:text-lg font-serif font-light leading-relaxed tracking-normal">
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

        {/* Notice section */}
      <section className="w-full bg-[#f4f1ea] py-24 px-6">
  <div className="max-w-5xl mx-auto text-center">
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
