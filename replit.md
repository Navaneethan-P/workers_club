# LANKOR Community

## Overview
LANKOR is a student-talent discovery platform - a practical alternative to LinkedIn focused entirely on skills, projects, and team-based work. It bridges the gap between students and companies, especially IT/tech recruiters who want real skill proof, not vague resumes.

Founded by **Navaneethan P**.

## Current State
- **Status**: Beautiful landing page + Workers page with modern design
- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 7.2.6
- **Styling**: Tailwind CSS with LinkedIn blue theme
- **Port**: 5000 (configured for Replit environment)

## Recent Changes (Dec 4, 2024)
- Updated color scheme to LinkedIn blue (#0A66C2, #0077B5, #00A0DC)
- Added animated floating background shapes and particles
- Added founder's LinkedIn profile photo
- Enhanced features section with 6 cards and highlight badges
- Created **Workers Page** with:
  - Location-based search
  - Tech/Non-tech filtering
  - Skill search
  - Worker cards with ratings, availability, hourly rates
- Improved "How It Works" section
- Enhanced profile card preview
- Better animations (float, morph, pulse, wave)

## Project Structure
```
/
├── src/
│   ├── App.tsx           # Main app with Home + Workers pages
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Tailwind + animations + LinkedIn theme
│   ├── components/       # Reusable components (to be added)
│   ├── pages/            # Page components (to be added)
│   ├── lib/              # Utility functions (to be added)
│   └── hooks/            # Custom React hooks (to be added)
├── index.html
├── vite.config.ts        # Vite config (port 5000, allowedHosts)
├── tailwind.config.js    # Tailwind with custom colors
├── postcss.config.js     # PostCSS configuration
└── package.json
```

## Development
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview**: `npm run preview`
- **Lint**: `npm run lint`

## Design System
- **Primary Color**: LinkedIn Blue (#0A66C2)
- **Gradient**: #0A66C2 → #0077B5 → #00A0DC
- **Animations**: Float, float-reverse, morph, pulse-glow, wave, particle
- **Font**: System fonts with antialiased rendering
- **Border Radius**: 0.75rem (12px)

## Pages
### Home Page
- Hero section with gradient text
- Stats cards (500+ Students, 200+ Projects, 50+ Teams, 30+ Companies)
- Features section (6 cards with highlights)
- How It Works (3 steps)
- Sample profile card
- Roles grid (10 tech roles)
- Benefits section (Students, HRs, Colleges)
- Founder section with photo and contact links
- CTA section

### Workers Page (NEW)
- Search by skills or role
- Filter by location
- Filter by type (Tech/Non-tech/All)
- Worker cards showing:
  - Name, role, location
  - Availability status
  - Hourly rate
  - Rating
  - Skills tags
  - Contact/View Profile buttons

## Contact (Founder)
- **WhatsApp**: +91 63829 32703
- **LinkedIn**: linkedin.com/in/navaneethan-p
- **Email**: navaneethan2005.official@gmail.com

## Next Steps
The following features are planned:
- OTP-only authentication system
- Student registration & profile building
- Browse & discover talent pages
- Project verification workflow
- Team-up system
- Admin panel
- Email notifications
- Database integration (PostgreSQL)
