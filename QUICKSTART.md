# Quick Start - Deploy to GitHub Pages

Follow these steps to get your website live in under 10 minutes!

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `cre-trails-website`
3. Make it **Public**
4. **Don't** initialize with README
5. Click "Create repository"

## Step 2: Update Configuration

Edit `astro.config.mjs` and update these lines with YOUR info:

```javascript
site: 'https://YOUR_USERNAME.github.io',
base: '/cre-trails-website',
```

Then save and commit:
```bash
git add astro.config.mjs
git commit -m "Configure for GitHub Pages"
```

## Step 3: Push to GitHub

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/cre-trails-website.git
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. Done!

## Step 5: Wait & Visit

1. Go to **Actions** tab
2. Wait for deployment to finish (~2 minutes)
3. Visit: `https://YOUR_USERNAME.github.io/cre-trails-website`

---

**That's it!** Your website is now live and will auto-deploy on every push.

For detailed instructions, see [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)
