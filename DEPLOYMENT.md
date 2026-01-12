# CRE Trails Website - Deployment Guide

This guide will help you deploy the CRE Trails website to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier works perfectly)
- A GitHub account (or GitLab/Bitbucket)
- Git installed on your computer

## Step 1: Push to GitHub

First, you'll need to push your website code to a GitHub repository.

### Initialize Git Repository (if not already done)

```bash
cd cre-trails-website
git init
git add .
git commit -m "Initial commit - CRE Trails website"
```

### Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., "cre-trails-website")
3. Don't initialize with README (we already have code)

### Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/cre-trails-website.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Cloudflare Pages

### Connect Repository

1. Log in to your Cloudflare dashboard: https://dash.cloudflare.com/
2. Click on "Workers & Pages" in the left sidebar
3. Click "Create application"
4. Select the "Pages" tab
5. Click "Connect to Git"
6. Authorize Cloudflare to access your GitHub account
7. Select your "cre-trails-website" repository

### Configure Build Settings

Use these settings for your Astro site:

- **Production branch**: `main`
- **Build command**: `pnpm build`
- **Build output directory**: `dist`
- **Root directory**: (leave empty)

### Environment Variables

No environment variables are needed for this static site.

### Deploy

1. Click "Save and Deploy"
2. Cloudflare will build and deploy your site
3. This usually takes 1-2 minutes
4. You'll get a URL like: `https://cre-trails-website.pages.dev`

## Step 3: Custom Domain (Optional)

If you want to use a custom domain like `cretrails.org`:

1. In your Cloudflare Pages project, go to "Custom domains"
2. Click "Set up a custom domain"
3. Enter your domain name
4. Follow the instructions to:
   - Add your domain to Cloudflare (if not already)
   - Update DNS records (Cloudflare does this automatically)
5. SSL certificate will be provisioned automatically (free!)

## Step 4: Future Updates

To update your website:

1. Make changes to your local files
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. Cloudflare Pages will automatically rebuild and deploy!

## Build Details

- **Framework**: Astro 5.16.9
- **Package Manager**: pnpm
- **Node Version**: 22.x (automatically detected)
- **Build Time**: ~30 seconds
- **Output**: Static HTML/CSS/JS files

## Site Structure

```
cre-trails-website/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Main layout with nav/footer
│   ├── pages/
│   │   ├── index.astro           # Home page
│   │   ├── about.astro           # About page
│   │   ├── contact.astro         # Contact page
│   │   ├── gallery.astro         # Photo gallery
│   │   ├── map.astro             # Interactive trail map
│   │   ├── rules.astro           # Rules & safety
│   │   └── volunteer.astro       # Get involved
│   └── styles/
│       └── global.css            # Global styles
├── public/
│   └── images/                   # Photos from Facebook
│       ├── hero-bg.webp
│       ├── trail-map-detailed.webp
│       └── profile-flowers.webp
└── dist/                         # Built files (generated)
```

## Updating Content

### Adding New Photos

1. Add images to `public/images/`
2. Reference them in your pages: `/images/your-photo.jpg`
3. Commit and push to deploy

### Editing Pages

1. Edit `.astro` files in `src/pages/`
2. Use HTML and Astro syntax
3. Styles are in `src/styles/global.css`
4. Commit and push to deploy

### Updating Trail Map

The trail map uses Leaflet.js with sample coordinates. To update with real GPS data:

1. Edit `src/pages/map.astro`
2. Update the `trails` array with actual GPS coordinates
3. You can get coordinates from GPX files or GPS devices

## Performance

Your site will be:
- ✅ Served from Cloudflare's global CDN (fast worldwide)
- ✅ Automatically cached
- ✅ HTTPS enabled by default
- ✅ Optimized images (WebP format)
- ✅ Minimal JavaScript (only for interactive features)

## Cost

**$0/month** - Cloudflare Pages free tier includes:
- Unlimited bandwidth
- Unlimited requests
- 500 builds per month (more than enough)
- Free SSL certificate
- Custom domain support

## Support

If you need help:
- Cloudflare Pages docs: https://developers.cloudflare.com/pages/
- Astro docs: https://docs.astro.build/
- Leaflet docs: https://leafletjs.com/

## Maintenance

### Regular Updates

- Update trail photos seasonally
- Add event photos to the gallery
- Update volunteer opportunities
- Keep contact information current

### Monitoring

Check your Cloudflare dashboard for:
- Site analytics (page views, visitors)
- Build history
- Any deployment errors

## Troubleshooting

### Build Fails

- Check the build log in Cloudflare dashboard
- Ensure all dependencies are in `package.json`
- Verify build command is `pnpm build`

### Images Not Loading

- Make sure images are in `public/images/`
- Use absolute paths: `/images/photo.jpg`
- Check file extensions match (case-sensitive)

### Map Not Working

- Verify Leaflet CSS is loaded in layout
- Check browser console for JavaScript errors
- Ensure coordinates are valid lat/lng values

## Next Steps

1. **Deploy the site** following the steps above
2. **Test thoroughly** on mobile and desktop
3. **Share the URL** with the trails committee
4. **Gather feedback** and make improvements
5. **Set up custom domain** if desired
6. **Update regularly** with new photos and content

---

**Your website is ready to go live! 🚀**
