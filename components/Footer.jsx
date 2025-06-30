'use client';

export default function Footer() {
  return (
    <footer className="bg-[#f5f2e9] text-center py-12 px-4 text-[#2e2e2e]">
      <div className="space-y-4" style={{ fontFamily: 'Georgia, serif' }}>
        <h2 className="text-2xl md:text-3xl font-normal">
          Dr. Serena Blake, PsyD, Clinical Psychologist
        </h2>

        <p>
          <a href="mailto:serena@blakepsychology.com" className="underline hover:text-gray-700">
            serena@blakepsychology.com
          </a>
        </p>

        <p>
          Phone: <a href="tel:3235550192" className="underline">(323) 555-0192</a>
        </p>

        <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>

        <p>
          <strong>Office Hours:</strong><br />
          In-person: Tue & Thu, 10 AM–6 PM<br />
          Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
        </p>

        <p>8 years of practice · 500+ sessions</p>

        <div className="space-x-4">
          <a href="#" className="underline hover:text-gray-700">Home</a>
          <a href="#" className="underline hover:text-gray-700">Privacy Policy</a>
          <a href="#" className="underline hover:text-gray-700">Good Faith Estimate</a>
        </div>

        <div className="pt-8">
          <a href="#" className="underline text-lg hover:text-gray-700">Client Portal</a>
        </div>

        <p className="text-sm pt-8 text-gray-700">
          © 2025 Dr. Serena Blake. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
