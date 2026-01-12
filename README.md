# CRE Trails Website

A modern, fast static website for the POACRE Trails Committee in Chesapeake Ranch Estates, Lusby, MD.

## 🌲 About

This website showcases the multi-use trail system at Chesapeake Ranch Estates, providing information about trails, rules, volunteer opportunities, and more.

## ✨ Features

- **Interactive Trail Map** - Leaflet.js powered map with color-coded trails
- **Photo Gallery** - Images from the trails and events
- **Volunteer Information** - How to get involved and help maintain the trails
- **Trail Rules & Safety** - Important guidelines for trail users
- **Contact Information** - Easy ways to reach the trails committee
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Fast Loading** - Optimized static site with minimal JavaScript
- **SEO Friendly** - Proper meta tags and semantic HTML

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build/) - Modern static site generator
- **Styling**: Plain CSS with CSS custom properties (variables)
- **JavaScript**: Vanilla JS (no frameworks)
- **Mapping**: [Leaflet.js](https://leafletjs.com/) - Open-source mapping library
- **Hosting**: Optimized for [Cloudflare Pages](https://pages.cloudflare.com/)

## 📁 Project Structure

```
cre-trails-website/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Main layout template
│   ├── pages/
│   │   ├── index.astro           # Home page
│   │   ├── about.astro           # About the committee
│   │   ├── contact.astro         # Contact form and info
│   │   ├── gallery.astro         # Photo gallery
│   │   ├── map.astro             # Interactive trail map
│   │   ├── photos.astro          # Photo albums (alternative)
│   │   ├── rules.astro           # Trail rules and safety
│   │   └── volunteer.astro       # Get involved page
│   └── styles/
│       └── global.css            # Global styles and theme
├── public/
│   └── images/                   # Static images
│       ├── hero-bg.webp          # Hero background
│       ├── trail-map-detailed.webp
│       └── profile-flowers.webp
├── astro.config.mjs              # Astro configuration
├── package.json                  # Dependencies
├── DEPLOYMENT.md                 # Deployment instructions
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Development

The development server runs at `http://localhost:4321/`

Hot reload is enabled - changes to files will automatically refresh the browser.

## 🎨 Customization

### Colors

The color scheme is defined in `src/styles/global.css` using CSS custom properties:

```css
--color-primary: #2d5016;      /* Forest green */
--color-secondary: #4a7c2c;    /* Sage green */
--color-accent: #7cb342;       /* Bright green */
```

Change these values to customize the theme.

### Content

- **Text content**: Edit the `.astro` files in `src/pages/`
- **Navigation**: Update `src/layouts/Layout.astro`
- **Styles**: Modify `src/styles/global.css`

### Images

Add images to `public/images/` and reference them with `/images/filename.jpg`

## 📸 Adding Photos

1. Place images in `public/images/`
2. Use WebP format for best performance
3. Reference in pages: `<img src="/images/your-photo.webp" alt="Description">`

## 🗺️ Updating the Trail Map

The trail map in `src/pages/map.astro` uses sample coordinates. To update with real GPS data:

1. Get GPS coordinates from GPX files or GPS devices
2. Edit the `trails` array in `map.astro`
3. Update coordinates in `[latitude, longitude]` format

Example:
```javascript
{
  name: 'Red Trail',
  color: '#e74c3c',
  coordinates: [
    [38.4126, -76.4580],
    [38.4130, -76.4575],
    // ... more points
  ]
}
```

## 📦 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to Cloudflare Pages.

Quick summary:
1. Push code to GitHub
2. Connect repository to Cloudflare Pages
3. Set build command: `pnpm build`
4. Set output directory: `dist`
5. Deploy!

## 🔧 Maintenance

### Updating Content

1. Edit the relevant `.astro` file
2. Commit changes: `git commit -am "Update content"`
3. Push to GitHub: `git push`
4. Cloudflare Pages will automatically rebuild

### Adding New Pages

1. Create new `.astro` file in `src/pages/`
2. Add link in navigation (`src/layouts/Layout.astro`)
3. Follow the structure of existing pages

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact

**POACRE Trails Committee**
- Phone: (443) 975-4736
- Email: lydia@hotmail.com
- Facebook: [CRE.Trails](https://www.facebook.com/CRE.Trails)
- Address: 424 Clubhouse Drive, Lusby, MD 20657

## 🙏 Acknowledgments

- POACRE Trails Committee for trail maintenance and management
- Volunteers who keep the trails beautiful
- Chesapeake Ranch Estates community
- Photos courtesy of the CRE Trails Facebook page

---

**Built with ❤️ for the CRE Trails community**
