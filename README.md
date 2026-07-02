# Hind Alaa Fathy — Premium Portfolio Website

A state-of-the-art, interactive portfolio website for **Hind Alaa Fathy**, Software Engineer & Flutter Developer. Designed with a striking, dark cyberpunk-futuristic aesthetic, fluid physics-based motion, and highly detailed interactive mockups of mobile applications.

---

## 🚀 Key Features

- **Interactive Cyberpunk Hero**: Displays a premium, custom-designed 3D avatar representing a young Muslim woman Software Engineer, accented with modern glowing neon effects, smooth floating motion, and subtle mouse-parallax tracking.
- **Responsive 2-Column Layout**: Structured elegantly with a 55% text content and 45% avatar split on desktop, transitioning seamlessly to a stacked centered column on mobile and tablets.
- **Dynamic Projects Showcase**: Featuring deep, interactive device mockups (such as a Flutter-based Point-of-Sale app with interactive menus, order sheets, and tax/total calculations).
- **Academic & Career Timeline**: Structured layouts detailing Hind's journey as an MSc Student in Software Development with AI at Queen's University, Canada.
- **Skills & Certifications**: Grid systems categorized by language, framework, and tool with detailed proficiency level meters.
- **Fluid & Responsive UI**: Built with utility-first Tailwind CSS 4, customizable glow filters, physics-based animations, and complete cross-browser responsiveness.

---

## 🛠️ Technologies Used

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Motion (Framer Motion)](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
├── assets/                  # Media assets (videos, static resources)
├── src/
│   ├── assets/              # App assets (avatar illustration, etc.)
│   ├── components/          # Modular UI components
│   │   ├── About.tsx        # Personal narrative section
│   │   ├── Contact.tsx      # Contact form and touchpoints
│   │   ├── DeviceMockup.tsx # Interactive mobile app simulation mockup
│   │   ├── Hero.tsx         # Premium intro section (with the avatar)
│   │   ├── Projects.tsx     # List of curated applications & mockups
│   │   └── ...              # Other supporting sections (Skills, Footers)
│   ├── App.tsx              # Application entry point
│   ├── data.ts              # Centralized data store (personal details, projects, skills)
│   ├── types.ts             # TypeScript interface and enum declarations
│   └── main.tsx             # React bootstrap file
├── vercel.json              # Vercel SPA routing configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies and build scripts
```

---

## 💻 Local Development

Follow these steps to run the portfolio on your local machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18+) and [npm](https://www.npmjs.com/) installed.

### 2. Installation
Clone your repository (or unpack the ZIP) and install the dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port specified in your console).

### 4. Build for Production
Generate the optimized, static production build inside the `dist/` folder:
```bash
npm run build
```

---

## ☁️ Deployment Instructions

This project is fully optimized and configured for seamless deployment to **GitHub** and **Vercel**.

### Part 1: Uploading to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of premium portfolio"
   ```
2. **Create a Repository** on [GitHub](https://github.com/).
3. **Link and Push** your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git branch -M main
   git push -u origin main
   ```

*Note: The `.gitignore` file is pre-configured to exclude large system files and logs. You can safely keep or ignore `metadata.json` as it is only utilized for the Google AI Studio cloud development environment.*

---

### Part 2: Deploying to Vercel

The repository contains a custom-designed `vercel.json` file. This guarantees that modern routing fallback works flawlessly (no `404` errors on refreshes or deep links).

1. Sign up/Log in to the [Vercel Dashboard](https://vercel.com/).
2. Click **Add New** > **Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect the **Vite** configuration. Leave the default settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your live portfolio will be ready in under a minute!
