# Portfolio Website

A professional portfolio website showcasing GitHub projects, Medium blog posts, and personal information.

## Features

- Modern, responsive design with dark mode support
- Dynamic GitHub project cards that parse repository data
- Medium blog integration using RSS feed
- Contact form with validation
- Auto-deployable to Netlify with continuous integration

## Tech Stack

- React.js
- TypeScript
- Tailwind CSS
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm 6.0 or later

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view the website in your browser.

## Configuration

### GitHub Projects

Update the GitHub service configuration in `src/components/ProjectsSection.tsx`:

```typescript
const username = 'yourusername';
const repoNames = ['project1', 'project2', 'project3', 'project4'];
```

### Medium Blog Posts

Update the Medium username in `src/components/BlogSection.tsx`:

```typescript
const mediumUsername = 'yourusername';
```

### Personal Information

Update your personal information in:
- `src/components/HeroSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/ContactSection.tsx`
- `src/components/Footer.tsx`

## Deployment

This project is configured to deploy to Netlify. Connect your GitHub repository to Netlify for continuous deployment.

## License

MIT