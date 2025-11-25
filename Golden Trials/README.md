# 🏆 The Golden Trials

A modern, responsive website for **The Golden Trials** event, built with React and Vite. This project showcases event information, workshops, partners, and more.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)

## 📖 About

The Golden Trials is an event website developed by **ESMS-CSE**. It provides visitors with comprehensive information about the event including the agenda, workshops, partners, FAQs, and contact information.

## ✨ Features

- 🏠 **Home** - Landing page with event highlights
- 📝 **About** - Information about the event
- 📅 **Agenda** - Event schedule and timeline
- 🎓 **Workshops** - Details about available workshops
- 🤝 **Partners** - Showcase of event partners and sponsors
- ❓ **FAQ** - Frequently asked questions
- 📧 **Contact Us** - Contact form and information

## 🛠️ Tech Stack

- **React** v19.2.0 - UI Library
- **Vite** v7.2.4 - Build Tool & Dev Server
- **Tailwind CSS** v4.1.17 - Utility-first CSS Framework
- **ESLint** - Code Linting

## 📁 Project Structure

```
Golden Trials/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, and other assets
│   ├── components/        # React components
│   │   ├── About/         # About section
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Agenda/        # Agenda/Schedule section
│   │   │   ├── Agenda.jsx
│   │   │   └── Agenda.css
│   │   ├── ContactUs/     # Contact form section
│   │   │   ├── ContactUs.jsx
│   │   │   └── ContactUs.css
│   │   ├── FAQ/           # FAQ section
│   │   │   ├── FAQ.jsx
│   │   │   └── FAQ.css
│   │   ├── Home/          # Home/Hero section
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Partners/      # Partners section
│   │   │   ├── Partners.jsx
│   │   │   └── Partners.css
│   │   └── Workshops/     # Workshops section
│   │       ├── Workshops.jsx
│   │       └── Workshops.css
│   ├── App.jsx            # Main App component
│   ├── App.css            # App-level styles
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SIDHoussem/ESMS-CSE--THE-GOLDEN-TRIALS.git
   ```

2. Navigate to the project directory:

   ```bash
   cd "ESMS-CSE--THE-GOLDEN-TRIALS/Golden Trials"
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build for production                     |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint for code linting              |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
