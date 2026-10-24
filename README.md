# Professional Portfolio - Janlier Rojas Santana

Mid-Level Developer specialized in Python, web technologies and artificial intelligence.

## 🚀 Technologies

- **Frontend**: React 18, TypeScript, Vite 6
- **Languages**: TypeScript, JavaScript, HTML/CSS, Python
- **Frameworks and Tools**: Git/GitHub, VS Code, React
- **Databases**: SQL (SQLite)

## 📁 Projects

- **Pure Music Lovers Web** - Music community website (React)
- **The Courtyard of Delights** - Artisanal ice cream shop landing page (React)

## 🗂️ Project structure

The application lives inside [`code/`](code) and follows a feature-based layout:

```text
code/
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript strict configuration
├── vite.config.js        # Vite configuration
├── public/
│   ├── icons/            # Social, contact and project icons
│   └── images/           # Static images
└── src/
    ├── main.tsx          # App entry point
    ├── App.tsx           # Root component
    ├── components/       # One folder per component (TSX + CSS)
    │   ├── Navbar/
    │   ├── Profile/
    │   └── ...
    ├── hooks/            # Custom hooks (scroll, reveal, typewriter)
    ├── styles/           # Global and responsive styles
    ├── data/             # Typed content data
    └── utils/            # Shared helpers
```

## 🛠️ Development

```bash
# Clone repository
git clone https://github.com/JanterInsight/professional-portfolio.git

# Install dependencies
cd code
npm install

# Run development server
npm run dev

# Type-check the TypeScript code
npm run typecheck

# Build for production
npm run build
```

## 🌐 Deployment

This project is configured for automatic deployment to **GitHub Pages** using GitHub Actions.

### How it works

1. Every push to the `main` branch triggers the GitHub Actions workflow
2. The workflow builds the project and deploys it to GitHub Pages
3. The site will be available at: `https://janterinsight.github.io/professional-portfolio/`

### Manual deployment

You can also manually trigger the deployment from the **Actions** tab in GitHub.

## 📄 License

MIT License - Copyright (c) 2026 Janlier Rojas Santana