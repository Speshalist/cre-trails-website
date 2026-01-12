# GitHub Pages Deployment Guide

This guide will walk you through deploying your CRE Trails website to GitHub Pages with automatic builds.

## What You'll Get

- **Free hosting** at `https://yourusername.github.io/cre-trails-website`
- **Automatic deployment** - Push code to GitHub and it automatically builds and deploys
- **Custom domain support** - Use your own domain (optional)
- **Free SSL certificate** - HTTPS automatically enabled
- **Version control** - Full Git history of all changes

## Prerequisites

- A GitHub account (free) - Sign up at https://github.com/join
- Git installed on your computer
- The `cre-trails-website` folder (you already have this!)

## Step 1: Create GitHub Repository

### 1.1 Create New Repository

1. Go to https://github.com/new
2. Fill in the details:
   - **Repository name**: `cre-trails-website` (or any name you prefer)
   - **Description**: "Website for POACRE Trails in Chesapeake Ranch Estates"
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - **DO NOT** check "Initialize with README" (we already have code)
3. Click **"Create repository"**

### 1.2 Note Your Repository Details

After creating, you'll see a page with commands. Note your repository URL:
```
https://github.com/YOUR_USERNAME/cre-trails-website
```

## Step 2: Update Astro Configuration

Before pushing to GitHub, you need to update the Astro config with your repository name.

### 2.1 Edit astro.config.mjs

Open `astro.config.mjs` and uncomment/update these lines:

```javascript
// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Replace 'username' with YOUR GitHub username
  site: 'https://username.github.io',
  // Replace 'cre-trails-website' with YOUR repository name
  base: '/cre-trails-website',
  
  server: {
    host: true
  },
  vite: {
    server: {
      host: '0.0.0.0'
    }
  }
});
```

**Example:** If your GitHub username is `johndoe` and repo is `cre-trails`:
```javascript
site: 'https://johndoe.github.io',
base: '/cre-trails',
```

### 2.2 Commit the Change

```bash
cd cre-trails-website
git add astro.config.mjs
git commit -m "Configure for GitHub Pages"
```

## Step 3: Push to GitHub

### 3.1 Add Remote Repository

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/cre-trails-website.git
```

### 3.2 Push Your Code

```bash
git push -u origin main
```

You may be prompted to log in to GitHub. Use your GitHub credentials.

**Note:** If you're using two-factor authentication, you'll need to use a Personal Access Token instead of your password. See: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

## Step 4: Enable GitHub Pages

### 4.1 Go to Repository Settings

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/cre-trails-website`
2. Click **"Settings"** tab (top right)
3. Click **"Pages"** in the left sidebar

### 4.2 Configure GitHub Pages

Under "Build and deployment":

1. **Source**: Select **"GitHub Actions"**
   - This tells GitHub to use the workflow file we created

That's it! GitHub will now automatically build and deploy your site.

### 4.3 Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 1-2 minutes)
4. Once complete, your site is live!

## Step 5: Access Your Website

Your website will be available at:
```
https://YOUR_USERNAME.github.io/cre-trails-website
```

For example: `https://johndoe.github.io/cre-trails-website`

## Making Updates

To update your website in the future:

### 5.1 Make Changes Locally

Edit any files in the `cre-trails-website` folder.

### 5.2 Commit and Push

```bash
cd cre-trails-website
git add .
git commit -m "Description of your changes"
git push
```

### 5.3 Automatic Deployment

GitHub will automatically:
1. Detect the push
2. Run the build workflow
3. Deploy the updated site
4. Usually takes 1-2 minutes

Check the "Actions" tab to see the deployment progress.

## Custom Domain (Optional)

If you want to use your own domain (like `cretrails.org`):

### 6.1 Add Domain to GitHub

1. Go to repository **Settings** → **Pages**
2. Under "Custom domain", enter your domain: `cretrails.org`
3. Click **Save**

### 6.2 Configure DNS

Add these DNS records with your domain registrar:

**For apex domain (cretrails.org):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain (www.cretrails.org):**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### 6.3 Update Astro Config

Update `astro.config.mjs`:
```javascript
site: 'https://cretrails.org',
base: '/',  // Change to '/' for custom domain
```

Commit and push the change.

### 6.4 Wait for DNS

DNS changes can take 24-48 hours to propagate. GitHub will automatically provision an SSL certificate once DNS is configured.

## Troubleshooting

### Build Fails

**Check the Actions tab** for error messages:
1. Go to **Actions** tab
2. Click on the failed workflow
3. Click on the failed job to see error details

**Common issues:**
- Syntax errors in code
- Missing dependencies
- Incorrect base path in config

### Site Not Loading

**Check these:**
1. Is the workflow completed successfully? (Actions tab)
2. Is GitHub Pages enabled? (Settings → Pages)
3. Is the correct branch selected? (should be "GitHub Actions")
4. Did you update the `base` path in `astro.config.mjs`?

### Images Not Loading

**Make sure:**
1. Images are in `public/images/` folder
2. You're using the correct base path in image URLs
3. File names match exactly (case-sensitive)

### 404 Errors on Page Refresh

This is normal for GitHub Pages with client-side routing. The site should still work when navigating from the home page.

## File Structure

Here's what was set up for you:

```
cre-trails-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow (automatic deployment)
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── *.astro             # All your pages
│   └── styles/
│       └── global.css
├── public/
│   └── images/                 # Photos from Facebook
├── astro.config.mjs            # Updated for GitHub Pages
├── package.json
└── README.md
```

## GitHub Actions Workflow

The `.github/workflows/deploy.yml` file automatically:

1. **Triggers** on every push to the `main` branch
2. **Installs** Node.js and pnpm
3. **Installs** dependencies (`pnpm install`)
4. **Builds** the site (`pnpm build`)
5. **Deploys** to GitHub Pages

You don't need to do anything - it's completely automatic!

## Monitoring

### View Deployments

1. Go to **Actions** tab to see all deployments
2. Each push creates a new deployment
3. Green checkmark = successful deployment
4. Red X = failed deployment (click to see why)

### View Site Analytics

GitHub Pages doesn't include analytics by default, but you can add:
- Google Analytics (free)
- Cloudflare Analytics (if using custom domain)
- Simple Analytics (privacy-focused)

## Cost

**Completely Free!**
- ✅ Unlimited bandwidth
- ✅ Unlimited builds
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ No credit card required

## Comparison: GitHub Pages vs Cloudflare Pages

| Feature | GitHub Pages | Cloudflare Pages |
|---------|--------------|------------------|
| Cost | Free | Free |
| Setup | Simpler | Slightly more complex |
| Speed | Fast | Faster (global CDN) |
| Build time | ~1-2 min | ~30-60 sec |
| Custom domain | Yes | Yes |
| SSL | Free | Free |
| Analytics | No (add separately) | Yes (built-in) |
| Redirects | Limited | Full support |

**For this project, GitHub Pages is perfect!** It's simpler and more than fast enough for a community trails website.

## Support Resources

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **GitHub Actions Docs**: https://docs.github.com/en/actions
- **Astro Docs**: https://docs.astro.build/en/guides/deploy/github/
- **Git Basics**: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics

## Quick Reference Commands

```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub (triggers deployment)
git push

# View commit history
git log

# Pull latest changes (if editing from multiple computers)
git pull
```

## Next Steps

1. ✅ Create GitHub repository
2. ✅ Update `astro.config.mjs` with your username and repo name
3. ✅ Push code to GitHub
4. ✅ Enable GitHub Pages (select "GitHub Actions" as source)
5. ✅ Wait for deployment to complete
6. ✅ Visit your site!

---

**Your website will be live at:**
```
https://YOUR_USERNAME.github.io/cre-trails-website
```

**Questions?** Check the troubleshooting section or the support resources above.

**Happy trails! 🌲**
