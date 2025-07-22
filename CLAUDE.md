# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Joaquim Oliveira & Associados, Sociedade de Advogados, RL** - Professional corporate website for a Portuguese law firm. The website is built with modern HTML5, CSS3, and vanilla JavaScript, focusing on a clean, minimalist, and corporate design.

### Project Details
- **Firm Name:** Joaquim Oliveira & Associados, Sociedade de Advogados, RL
- **Slogan:** "A sua bússola no mundo jurídico"
- **Phone:** +351 213 144 434
- **Email:** geral@joaquimoliveira.pt
- **Language:** Portuguese (Portugal)
- **Target Audience:** Companies (SME and large), public entities, and private clients seeking specialized legal advisory

## Project Structure

```
/advogados/
├── index.html              # Homepage
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet with corporate styling
│   ├── js/
│   │   └── main.js         # JavaScript for animations and interactivity
│   └── img/                # Images directory (placeholder references)
├── pages/
│   ├── about.html          # About the firm page
│   ├── contact.html        # Contact page with forms
│   ├── practice-areas.html # Main practice areas page
│   ├── team.html           # Team members page
│   ├── news.html           # News and publications
│   ├── careers.html        # Careers page
│   └── areas/              # Individual practice area pages
│       ├── corporate.html
│       ├── labor.html
│       ├── real-estate.html
│       ├── intellectual.html
│       └── tax.html
└── .claude/
    └── settings.local.json # Claude permissions
```

## Design System

### Color Palette
- **Primary White:** #FFFFFF
- **Light Gray:** #F5F5F5 (backgrounds)
- **Text Black:** #000000
- **Text Dark Gray:** #333333
- **Corporate Blue:** #003366 (primary accent)
- **Corporate Green:** #004D40 (alternative accent)

### Typography
- **Headings:** Montserrat, Lato, Raleway (sans-serif)
- **Body Text:** Open Sans, Roboto (sans-serif)

### Key Features
- Fully responsive design (mobile-first approach)
- Fixed navigation header with dropdown menus
- Smooth scroll animations and fade-in effects
- Contact forms with JavaScript validation
- Professional grid layouts for content
- Hero sections with call-to-action buttons

## Development Workflow

### Running the Website
Since this is a static HTML website, simply:
1. Open `index.html` in a web browser, or
2. Use a local server (e.g., `python -m http.server` or Live Server extension)

### Adding New Content
- **Practice Areas:** Add new HTML files to `/pages/areas/` and update navigation dropdowns
- **Team Members:** Update team.html with new member cards and photos
- **News Articles:** Add articles to `/pages/news/` directory
- **Styling:** All styles are in `/assets/css/styles.css` using CSS custom properties

### Key Components
- **Navigation:** Fixed header with dropdown menus for practice areas
- **Hero Sections:** Large banner areas with background images and CTAs
- **Grid Layouts:** 3-column responsive grids for cards and content
- **Forms:** Contact forms with client-side validation
- **Footer:** Multi-column footer with site navigation and contact info

## Legal Practice Areas
The website covers these main practice areas:
1. **Direito Societário** (Corporate Law) - Mergers, acquisitions, corporate governance
2. **Direito do Trabalho** (Labor Law) - Employment contracts, HR consulting
3. **Direito Imobiliário** (Real Estate Law) - Property transactions, licensing
4. **Propriedade Intelectual** (Intellectual Property) - Trademarks, patents, licensing
5. **Direito Fiscal** (Tax Law) - Tax planning, tax litigation
6. **Contencioso** (Litigation) - Court representation, arbitration

## Content Guidelines
- All content is in European Portuguese
- Professional, corporate tone throughout
- Focus on expertise, trust, and client service
- SEO-friendly meta descriptions and titles
- Accessibility considerations in HTML structure

## Future Enhancements
- Multi-language support (Portuguese/English)
- CMS integration for news and team management
- Advanced contact form backend processing
- SEO optimization and analytics integration
- Performance optimization for images and assets