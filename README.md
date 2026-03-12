# Developer Portfolio v1

A modern, minimalist portfolio website built with Next.js, React, and TypeScript. Designed as a template for developers to showcase their work, experience, and skills.

## 🎯 Features

- **Modern Design** – Clean, professional interface with smooth animations powered by Framer Motion
- **Responsive Layout** – Looks great on desktop, tablet, and mobile devices
- **TypeScript Support** – Fully typed for better development experience
- **Dark Mode Ready** – Built with Tailwind CSS for easy theme customization
- **SEO Friendly** – Next.js App Router with built-in optimizations
- **Fast Performance** – Optimized for Core Web Vitals

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Fork or clone this repository**
   ```bash
   git clone git@github.com:theanadimukt/v1.git
   cd v1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio.

## 🎨 Customization

### Update Your Content

All portfolio content is centralized in `lib/content.ts`. Edit this file to customize:

#### Skills
```typescript
export const skills = [
  "Your Skill 1",
  "Your Skill 2",
  // ...
];
```

#### Work Experience
```typescript
export const jobs: Job[] = [
  {
    company: "Company Name",
    role: "Your Role",
    dates: "Start – End",
    location: "City, Country",
    bullets: ["Achievement 1", "Achievement 2"],
    tech: ["Tech 1", "Tech 2"],
  },
  // ...
];
```

#### Projects
```typescript
export const projects: Project[] = [
  {
    title: "Project Name",
    description: "What you built and why it matters",
    tech: ["Tech 1", "Tech 2"],
    featured: true, // Show prominently on portfolio
    github: "https://github.com/...",
    external: "https://project-url.com", // Optional live link
  },
  // ...
];
```

#### Social Links
```typescript
export const social = [
  {
    name: "GitHub",
    url: "https://github.com/yourprofile",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: "linkedin",
  },
];
```

### Customize Components

Each section is a separate React component in the `components/` directory:
- `Hero.tsx` – Hero section (intro/headline)
- `About.tsx` – About section
- `Experience.tsx` – Work experience timeline
- `Projects.tsx` – Featured projects
- `Contact.tsx` – Call-to-action and contact info
- `Nav.tsx` – Navigation header
- `SectionHeading.tsx` – Reusable section title component

Edit these files to change layout, styling, or behavior.

### Style & Branding

- **Colors & Spacing** – Managed via `globals.css` and Tailwind configuration
- **Fonts** – Currently using the Geist font family (see `app/layout.tsx`)
- **Animations** – Configured with Framer Motion (see individual components)

To customize colors, update the Tailwind config and CSS variables in `globals.css`.

## 📦 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) – React framework for production
- **Language:** [TypeScript](https://www.typescriptlang.org/) – Type-safe JavaScript
- **UI Framework:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) – Utility-first CSS
- **Animations:** [Framer Motion](https://www.framer.com/motion/) – Animation library
- **Linting:** [ESLint 9](https://eslint.org/)

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Run production server
npm run lint     # Run ESLint checks
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com), created by the Next.js team.

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com/new)
3. Vercel auto-detects Next.js and configures build settings
4. Your site is live! 🎉

### Deploy to Other Platforms

You can also deploy to:
- **Netlify** – Works with Next.js via serverless functions
- **Docker** – Build a container image and deploy anywhere
- **Traditional hosting** – Use `npm run build && npm start` (requires Node.js)

### Custom Domain

After deployment, add your custom domain in your hosting provider's dashboard. Update your DNS records to point to your site.

## 📱 Responsive Design

This portfolio is fully responsive and tested on:
- Desktop (1024px+)
- Tablet (768px – 1024px)
- Mobile (320px – 767px)

Test locally using your browser's dev tools.

## 🎓 Use as Template

**Want to create your own portfolio from this template?**

1. Click "Use this template" on GitHub (if available) or fork the repo
2. Clone your new repo locally
3. Update `lib/content.ts` with your information
4. Customize components as needed
5. Deploy to Vercel or your preferred hosting
6. Share your portfolio! 🚀

## 📝 Best Practices

When customizing your portfolio:
- **Keep it concise** – Highlight your best work, not everything
- **Use real data** – Replace all placeholder content with your actual experience
- **Check performance** – Run `npm run build` to catch any issues before deploying
- **Test responsiveness** – Check your portfolio on mobile devices
- **Update regularly** – Keep your skills, projects, and links current

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001  # Use a different port
```

### Module Not Found Errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styling Issues
Ensure `node_modules` is installed and Tailwind CSS is running. Run `npm run dev` to rebuild CSS.

## 📄 License

This project is open source. Feel free to use it as a template for your own portfolio.

## 🤝 Contributing

If you've made improvements to the template, consider:
1. Forking and customizing for your own use
2. Contributing enhancements back to help the community

## 📞 Support

For issues, questions, or feature requests, open an issue on GitHub.

---

**Ready to build your portfolio?** Start by editing `lib/content.ts` and pushing to GitHub!
