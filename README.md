# Landing Page Showcase

Welcome to my Landing Page project, a modern, responsive web application built to engage users with a sleek design and intuitive features. This project demonstrates my expertise in crafting high-performance, user-friendly interfaces using **React**, **Tailwind CSS**, and **Next.js**. View the live demo at [your-landing-page.netlify.app](https://your-landing-page.netlify.app/) (update with actual deployment link).

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contact](#contact)

## About

This landing page is designed to showcase a brand or service with a clean, professional aesthetic. It features a blue gradient background, a newsletter subscription section, and multilingual support, making it ideal for global audiences. Built with a focus on responsiveness and accessibility, this project reflects my skills as a frontend developer with experience in MERN stack applications, including e-commerce platforms and blog systems.

The landing page serves as a portfolio piece to highlight my ability to deliver client-ready solutions, complementing my main portfolio at [mohammed-sobhi.netlify.app](https://mohammed-sobhi.netlify.app/).

## Features

- **Responsive Design**: Mobile-first layout with Tailwind CSS grid and responsive typography (`text-base sm:text-lg`, `text-xl sm:text-2xl`).
- **Dark Theme**: Toggleable light/dark mode with `localStorage` persistence, using Tailwind’s `dark:` variants.
- **Multilingual Support**: Supports English, Arabic (RTL), and Spanish via `next-intl`, with a language switcher.
- **Newsletter Section**: Engaging subscription form with a blue gradient background (`from-blue-500 to-blue-700`) and CSS hover effects.
- **Clean Code**: Modular React components in JavaScript for maintainability.
- **SEO Optimized**: Locale-based routing (`/en`, `/ar`, `/es`) and meta tags for search engine visibility.
- **Contact Integration**: Telegram link ([@moha2000yahoo](https://t.me/moha2000yahoo)) for direct communication.

## Technologies

- **Frontend**: Next.js 14 (App Router), React 19, Tailwind CSS
- **Internationalization**: `next-intl` for multilingual support
- **Deployment**: Netlify
- **Other**: `localStorage` for theme/language persistence, CSS transitions for interactivity

## Setup

To run the landing page locally, follow these steps:

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-landing-page-repo.git
   cd your-landing-page-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file (if needed for API keys, e.g., newsletter backend):
   ```env
   NEXT_PUBLIC_API_URL=http://your-api
   ```
4. Add translation files in `messages/` (e.g., `en.json`, `ar.json`, `es.json`) for multilingual support:
   ```json
   // messages/en.json
   {
     "Newsletter": {
       "title": "Stay Updated",
       "description": "Subscribe to our newsletter for updates and tips!",
       "placeholder": "Enter your email",
       "subscribe": "Subscribe"
     },
     "Landing": {
       "title": "Welcome to Our Brand"
     }
   }
   ```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000/en](http://localhost:3000/en) to view the page.

## Usage

- **Toggle Theme**: Use the theme switcher in the header to switch between light and dark modes.
- **Change Language**: Select English, Arabic, or Spanish via the language switcher (Arabic uses RTL).
- **Subscribe to Newsletter**: Enter an email in the newsletter section and click “Subscribe” (API integration ready).
- **Contact Me**: Click the Telegram link ([@moha2000yahoo](https://t.me/moha2000yahoo)) to connect directly.

## Deployment

The landing page is deployed on Netlify at [your-landing-page.netlify.app](https://your-landing-page.netlify.app/) (update with actual link). To deploy your own version:

1. Push the repository to GitHub.
2. Connect to Netlify via the Netlify dashboard.
3. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Configure environment variables (if any) in Netlify’s dashboard.
5. Deploy, and Netlify will handle automatic scaling and HTTPS.

## Contact

I’m available for freelance opportunities and collaborations. Reach out via:

- **Telegram**: [@moha2000yahoo](https://t.me/moha2000yahoo)
- **Email**: your-email@example.com
- **Portfolio**: [mohammed-sobhi.netlify.app](https://mohammed-sobhi.netlify.app/)

Feel free to explore the code, suggest improvements, or contact me to discuss your next project!

---

**Built with 💻 by Mohammed Sobhi**
