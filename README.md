# Therapist Portfolio Website – Dr. Serena Blake

A responsive, elegant, and mobile-friendly therapist website built as part of the Grow My Therapy internship assignment. This project closely mirrors a reference design provided in the assignment and includes modern UI features like smooth scroll-triggered animations and clean layout structure.

## 🌐 Live Demo

👉 [Click to Visit Live Site](https://therapist-website-weld.vercel.app)

## 📁 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: `IntersectionObserver` for scroll-triggered fade-in effects
- **Hosting**: Vercel (Frontend)

## 💡 Features

- Clean Hero section with background video and CTA
- About, Services, FAQ, and Contact sections
- Scroll-triggered fade-in animations on all major content
- Responsive layout across mobile, tablet, and desktop devices
- Custom styled form validation for contact section
- Text content and styling kept close to the reference site
- Semantic HTML and accessibility considerations

## 🧠 Highlights

- Used IntersectionObserver API to animate text/image elements on scroll.
- Manually fine-tuned layout for 1024×600 tablet view (common breakpoint missed by default).
- Fonts match closely with the original reference (Georgia & Lora).
- Optimized all image sizes per device for best visual alignment.
- Tested thoroughly on both desktop and mobile resolutions.

## 📌 To Run Locally

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
