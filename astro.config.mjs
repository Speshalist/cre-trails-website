// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set site to your GitHub Pages URL
  // Replace 'username' with your GitHub username and 'cre-trails-website' with your repo name
  site: 'https://Speshalist.github.io',
  base: '/cre-trails-website',
  
  // Uncomment the lines above and update them after creating your GitHub repository
  // For example, if your GitHub username is 'johndoe' and repo is 'cre-trails':
  // site: 'https://johndoe.github.io',
  // base: '/cre-trails',
  
  server: {
    host: true
  },
  vite: {
    server: {
      host: '0.0.0.0'
    }
  }
});
