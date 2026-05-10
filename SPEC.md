# XULASHO Wedding & Event Management - Specification Document

## Project Overview
- **Project Name**: XULASHO Wedding & Event Management
- **Type**: Luxury Brand Website
- **Core Functionality**: Premium wedding and event management services with cinematic UI/UX
- **Target Users**: Somali couples, families planning luxury weddings, event coordinators

## Brand Identity

### Brand Name
XULASHO Wedding & Event Management

### Brand Personality
- Elegant, Romantic, Luxury, Sophisticated, Emotional, Premium, Modern Somali wedding culture

### Visual Direction
- Luxury wedding aesthetic with Black + White + Pink + Soft Gold palette
- Cinematic layouts with soft gradients
- High-end typography with smooth animations
- Large visual storytelling sections
- Premium whitespace with fashion magazine-inspired UI

## Color System

### Primary Palette
```css
--color-primary: #1a1a1a;          /* Rich Black */
--color-secondary: #ffffff;        /* Pure White */
--color-accent: #d4a5a5;           /* Dusty Rose */
--color-gold: #c9a227;             /* Soft Gold */
--color-gold-light: #e8d5b0;       /* Champagne */
--color-rose: #e8b4b8;             /* Soft Pink */
--color-rose-dark: #c98b8f;        /* Deep Rose */
--color-cream: #faf8f5;            /* Warm Cream */
--color-sand: #f5f0e8;             /* Light Sand */
```

### Extended Palette
```css
--color-charcoal: #2d2d2d;
--color-slate: #4a4a4a;
--color-warm-gray: #8b8b8b;
--color-muted: #a0a0a0;
--color-light-gray: #e5e5e5;
--color-border: #e0e0e0;
```

## Typography System

### Font Families
- **Headings**: Playfair Display (elegant serif)
- **Subheadings**: Cormorant Garamond (refined serif)
- **Body**: Poppins (clean modern sans)
- **Accents**: Montserrat (sophisticated sans)

### Typography Scale
```css
--font-hero: 4rem / 5rem;           /* Hero headlines */
--font-h1: 3.5rem;                 /* Page titles */
--font-h2: 2.5rem;                 /* Section titles */
--font-h3: 1.75rem;                /* Subsection titles */
--font-h4: 1.25rem;                /* Card titles */
--font-body-lg: 1.125rem;          /* Large body text */
--font-body: 1rem;                 /* Regular body */
--font-small: 0.875rem;            /* Small text */
--font-caption: 0.75rem;           /* Captions */
```

## Layout Structure

### Responsive Breakpoints
- Mobile: 0-767px
- Tablet: 768-1023px
- Desktop: 1024-1279px
- Large Desktop: 1280px+

### Page Sections
1. Navigation Header (fixed, glassmorphism)
2. Hero Section (fullscreen cinematic)
3. Services Grid
4. Wedding Packages
5. Gallery Showcase
6. About Company
7. Testimonials
8. Booking Form
9. Contact Section
10. Footer

## Component Specifications

### Navigation Header
- Fixed position with glassmorphism effect
- Logo on left, nav links center, CTA button right
- Mobile hamburger menu with slide-in drawer
- Scroll-triggered background opacity change
- Links: Home, Services, Gallery, Packages, About, Contact

### Hero Section
- Full viewport height (100vh)
- Cinematic wedding background image/video
- Gradient overlay (black to transparent)
- Main headline with staggered animation
- Subheadline with fade-in
- Floating glassmorphism CTA buttons
- Scroll indicator with bounce animation

### Service Cards
- Large card format with image
- Elegant hover lift effect
- Icon with gold accent
- Title and description
- Subtle shadow on hover
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile

### Wedding Packages
- Horizontal card layout
- Featured package with gold border and badge
- Price with elegant formatting
- Feature list with checkmarks
- CTA button
- Popular badge for Gold package

### Gallery
- Masonry grid layout
- Lightbox on click
- Category filter tabs
- Video/Image support
- Smooth transitions

### Booking Form
- Multi-step wizard
- Elegant form inputs
- Progress indicator
- WhatsApp confirmation option
- Mobile-optimized

## Animation Specifications

### Hero Animations
- Text stagger: 0.1s delay between lines
- Fade in + slide up: 0.8s ease-out
- Button hover: scale 1.05, 0.3s

### Scroll Animations
- Section reveal: fade up + scale
- Card stagger: 0.1s per card
- Parallax on hero background

### Micro-interactions
- Button hover: subtle lift + glow
- Card hover: elevation + shadow
- Link hover: underline animation
- Input focus: border color transition

## Page Specifications

### 1. Homepage (/)
- Hero section (100vh)
- Intro quote section
- Services preview (6 cards)
- Packages preview (3 cards)
- Gallery preview (6 images)
- Testimonials (3 cards)
- CTA banner
- Footer

### 2. Services (/services)
- Full services grid (12 services)
- Each service expandable
- Related packages link

### 3. Packages (/packages)
- Three package comparison
- Feature list per package
- Booking CTA per package

### 4. Gallery (/gallery)
- Masonry grid
- Filter by category
- Lightbox viewer
- Video support

### 5. About (/about)
- Company story
- Team section
- Values/mission
- Statistics

### 6. Booking (/booking)
- Multi-step form
- Date picker
- Package selector
- Guest count
- Additional requests

### 7. Contact (/contact)
- Contact form
- Map integration placeholder
- Contact info
- WhatsApp CTA

## Technical Stack

### Framework & Tools
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Heroicons
- shadcn/ui components
- React Hook Form

### Structure
```
/app
  /layout.tsx
  /page.tsx
  /services/page.tsx
  /packages/page.tsx
  /gallery/page.tsx
  /about/page.tsx
  /booking/page.tsx
  /contact/page.tsx
/components
  /ui (shadcn components)
  /layout (Header, Footer)
  /home (Hero, Services, etc.)
  /sections (reusable sections)
/lib
  /utils.ts
  /data.ts
/public
  /images
  /videos
```

## Acceptance Criteria

### Visual
- [ ] Hero section is fullscreen with cinematic background
- [ ] Typography is elegant and consistent
- [ ] Color palette creates luxury feel
- [ ] Animations are smooth and premium
- [ ] Mobile layout is thumb-friendly

### Functional
- [ ] Navigation works on all devices
- [ ] All pages are accessible
- [ ] Forms validate correctly
- [ ] Gallery lightbox functions
- [ ] Booking flow completes

### Performance
- [ ] Fast initial load
- [ ] Smooth scrolling
- [ ] Optimized images
- [ ] Mobile-first loading

### UX
- [ ] Emotional storytelling present
- [ ] Trust signals visible
- [ ] Clear CTAs
- [ ] Easy navigation
- [ ] Premium feel throughout