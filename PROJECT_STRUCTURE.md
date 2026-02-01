# Linux Helper - Project Structure

## File Organization

```
linux-helper/
├── app/
│   ├── layout.tsx              # Root layout with AdSense script
│   ├── globals.css             # Green/white theme & Tailwind config
│   ├── page.tsx                # Landing page
│   ├── installation/
│   │   └── page.tsx            # Installation guide
│   ├── terminal/
│   │   └── page.tsx            # Terminal & shell basics
│   ├── errors/
│   │   └── page.tsx            # Error reference with search
│   ├── troubleshooting/
│   │   └── page.tsx            # Troubleshooting checklist
│   ├── privacy/
│   │   └── page.tsx            # Privacy policy
│   ├── cookies/
│   │   └── page.tsx            # Cookies policy
│   ├── adsense/
│   │   └── page.tsx            # About AdSense
│   ├── about/
│   │   └── page.tsx            # About page
│   └── contact/
│       └── page.tsx            # Contact form
├── public/
│   ├── ads.txt                 # AdSense ad network file
│   └── robots.txt              # Search engine crawl rules
├── components/
│   └── ui/                     # shadcn/ui components (pre-included)
├── hooks/
│   └── use-mobile.tsx          # Mobile detection hook
├── lib/
│   └── utils.ts                # Utility functions
├── SETUP_GUIDE.md              # Deployment & setup instructions
├── PROJECT_STRUCTURE.md        # This file
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
└── next.config.mjs             # Next.js configuration
```

## Pages & Routes

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Landing page with navigation |
| `/installation` | `app/installation/page.tsx` | Installation guide |
| `/terminal` | `app/terminal/page.tsx` | Terminal & shell basics |
| `/errors` | `app/errors/page.tsx` | Error reference & search |
| `/troubleshooting` | `app/troubleshooting/page.tsx` | Troubleshooting checklist |
| `/privacy` | `app/privacy/page.tsx` | Privacy policy |
| `/cookies` | `app/cookies/page.tsx` | Cookies policy |
| `/adsense` | `app/adsense/page.tsx` | About AdSense |
| `/about` | `app/about/page.tsx` | About us |
| `/contact` | `app/contact/page.tsx` | Contact form |

## Key Features

### 1. Landing Page (`/`)
- Hero section with CTA
- Feature cards for all guides
- About section with AdSense info
- Responsive navigation (mobile + desktop)
- Footer with links to all pages

### 2. Installation Guide (`/installation`)
- APT (Ubuntu/Debian) instructions
- YUM/DNF (Fedora) instructions
- Pacman (Arch) instructions
- Source installation guide
- Environment variables setup
- Verification steps
- Permissions & sudo guide

### 3. Terminal Guide (`/terminal`)
- Shell overview (Bash, Zsh, Fish)
- Navigation commands
- File operations
- File permissions & chmod/chown
- Redirects & pipelines
- Variables & command substitution
- Wildcards & globbing
- Shell safety tips

### 4. Error Reference (`/errors`)
- Searchable error database
- 10+ common Linux errors
- Each error includes:
  - Meaning explanation
  - Common causes
  - Step-by-step solutions
  - Real examples
- Real-time search filtering

### 5. Troubleshooting Checklist (`/troubleshooting`)
- 10-step troubleshooting process
- Interactive checkbox system
- Commands for each step
- Safety warnings
- Quick reference patterns
- Safety tips

### 6. Policy Pages
- **Privacy Policy**: Google Analytics, AdSense, cookies
- **Cookies Policy**: Cookie types, management, opt-out
- **AdSense Policy**: How ads work, opt-out options, compliance
- **About**: Mission, approach, target audience, funding
- **Contact**: Email, feedback, contact form, FAQ

## Components Used

### UI Components (shadcn/ui)
- Button
- Card
- Input (used in contact form)
- Textarea (used in contact form)
- Select (used in contact form)

### Icons (lucide-react)
- Menu, X (navigation)
- Terminal, BookOpen, AlertCircle, CheckCircle
- ChevronDown (accordion)
- Copy (code blocks)
- Search (error search)
- Mail, MessageSquare (contact)
- Target, Users (about page)

### Custom Components
- CodeBlock (with copy functionality)
- Accordion (collapsible sections)
- Interactive checklist (troubleshooting)
- Search filter (error reference)

## Color Theme

**Primary Green:** oklch(0.4 0.15 142.5) - Main brand color  
**Secondary Green:** oklch(0.5 0.12 142.5) - Accent color  
**Accent Green:** oklch(0.35 0.18 142.5) - Highlight color  
**White/Light:** oklch(0.98 0.01 142.5) - Background  
**Dark:** oklch(0.15 0.02 142.5) - Text  

Dark mode variants provided for all colors.

## AdSense Integration

### Files Involved
- `app/layout.tsx` - AdSense script tag
- `public/ads.txt` - Ad network authorization
- `app/adsense/page.tsx` - AdSense policy page
- `app/privacy/page.tsx` - Privacy policy with AdSense info
- `app/cookies/page.tsx` - Cookies policy with Google info

### Before Deployment
1. Replace `ca-pub-xxxxxxxxxxxxxxxx` in layout.tsx
2. Update `pub-0000000000000000` in ads.txt
3. Verify privacy & cookies policies match your requirements
4. Test ad loading in preview before going live

## Metadata & SEO

**Home Page:**
- Title: "Linux Helper - Installation & Troubleshooting Guide"
- Description: "Comprehensive Linux installation, terminal, and troubleshooting guide for developers..."
- Keywords: Linux, Ubuntu, Fedora, terminal, troubleshooting

**All Pages:**
- Proper heading hierarchy (h1 > h2 > h3)
- Meta descriptions
- Open Graph tags
- Responsive viewport

## Performance Features

- ✅ Next.js 16 with Turbopack
- ✅ Code splitting per page
- ✅ Static generation where applicable
- ✅ Optimized font loading
- ✅ CSS compression with Tailwind v4
- ✅ Image lazy loading
- ✅ Vercel Analytics integration

## Mobile Responsiveness

- Mobile-first design
- Responsive breakpoints: sm, md, lg
- Hamburger menu on mobile
- Touch-friendly buttons & inputs
- Flexible grid layouts
- Readable font sizes on all devices

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

### Core
- react 19.x
- next 16.x
- typescript 5.x

### UI & Styling
- tailwindcss 4.x
- @tailwindcss/typography
- lucide-react (icons)
- shadcn/ui (components)

### Analytics
- @vercel/analytics

## Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## Environment Variables

### Required for Google Analytics (optional)
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### AdSense (manual update in code)
- Replace Publisher ID in `/app/layout.tsx`
- Update ads.txt file in `/public/`

## Future Enhancement Ideas

- [ ] Add more Linux distributions
- [ ] Include video tutorials
- [ ] Create downloadable cheat sheets
- [ ] Add command-line interactive tools
- [ ] Build a search across all pages
- [ ] Add user comments/ratings per guide
- [ ] Create newsletter signup
- [ ] Add related articles section
- [ ] Include performance monitoring
- [ ] A/B test ad placements

## Maintenance Checklist

- [ ] Update guides monthly with new content
- [ ] Monitor AdSense performance
- [ ] Check for broken links
- [ ] Update dependencies quarterly
- [ ] Review analytics for popular pages
- [ ] Fix user-reported errors
- [ ] Test mobile experience regularly
- [ ] Monitor SEO rankings

---

**Project Status:** ✅ Complete and ready for deployment
