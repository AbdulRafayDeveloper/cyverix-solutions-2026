# Cyverix Solutions - Project Index

This document provides a comprehensive index and architectural overview of the **Cyverix Solutions 2024** codebase.

## 🛠 Tech Stack
- **Framework:** Next.js 16.1.6 (App Router)
- **Styling:** Tailwind CSS v4, Framer Motion (Animations)
- **Icons:** Lucide React
- **Language:** TypeScript
- **Emails:** Nodemailer (for contact form)

---

## 📂 Directory Structure (`src/`)

### 1. `app/` (Routing & Pages)
This directory uses the Next.js App Router. Each folder represents a route.
- `app/layout.tsx` - Root layout wrapper.
- `app/page.tsx` - Main landing page (Home).
- `app/globals.css` - Global styles and Tailwind imports.
- `app/work/page.tsx` - Portfolio / Our Work page.
- `app/privacy-policy/page.tsx` - Privacy Policy page.
- `app/api/contact/route.ts` - Backend API route handling contact form submissions (likely utilizing `nodemailer`).

### 2. `components/` (Reusable UI Components)
Divided into global layout components and page-specific sections.

#### `layout/`
- `Navbar.tsx` - Top navigation bar.
- `Footer.tsx` - Bottom footer section.

#### `sections/`
These are the building blocks of the main pages (primarily the landing page):
- `Hero.tsx` - Main hero section at the top.
- `About.tsx` - Information about the company.
- `Services.tsx` - Services offered by Cyverix.
- `Portfolio.tsx` - Showcase of previous work/projects.
- `TechStack.tsx` - Technologies the company uses.
- `WhyUs.tsx` - Value proposition section.
- `Process.tsx` - How the company works / workflow.
- `Testimonials.tsx` - Client reviews and feedback.
- `Careers.tsx` - Job openings or career information.
- `Contact.tsx` - Contact form UI (connects to `/api/contact`).

### 3. `lib/` (Utilities)
- `utils.ts` - Shared utility functions (e.g., `cn` utility for merging Tailwind classes using `clsx` and `tailwind-merge`).

---

## ⚙️ Configuration Files (Root)
- `package.json` - Dependencies and scripts (`dev`, `build`, `start`, `lint`).
- `tailwind.config.ts` - Tailwind CSS configuration and theme settings.
- `next.config.ts` - Next.js specific configurations.
- `eslint.config.mjs` - ESLint configuration for code linting.
- `tsconfig.json` - TypeScript compiler options.
- `postcss.config.mjs` - PostCSS configuration for Tailwind.

---

## 🚀 Key Workflows
- **Contact Form:** User interacts with `components/sections/Contact.tsx` -> Submits data to `app/api/contact/route.ts` -> Sends email via Nodemailer.
- **Styling & Animations:** The UI is heavily styled using Tailwind CSS and animated with `framer-motion`. Components in `sections/` likely make use of scroll and entrance animations.
