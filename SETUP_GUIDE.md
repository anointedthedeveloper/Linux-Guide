# Linux Helper - Setup & Deployment Guide

## Project Overview

Linux Helper is a comprehensive Linux installation, command-line, and troubleshooting guide designed for Google AdSense monetization and production deployment.

## Features Included

✅ Professional landing page with navigation  
✅ Installation guide (APT, YUM/DNF, Pacman, Source)  
✅ Terminal & shell basics guide  
✅ Searchable error reference with 10+ common Linux errors  
✅ Interactive troubleshooting checklist  
✅ Privacy Policy, Cookies Policy, AdSense Policy  
✅ About page and contact form  
✅ Green and white theme optimized for developers  
✅ Mobile-responsive design  
✅ SEO-friendly metadata  
✅ Google AdSense integration  
✅ ads.txt and robots.txt files  

## Before Deployment

### 1. Update Google AdSense Information

**In `/app/layout.tsx`:**
- Replace `ca-pub-xxxxxxxxxxxxxxxx` with your actual Google AdSense Publisher ID
- Update the Google Site Verification meta tag if needed

**In `/public/ads.txt`:**
- Replace `pub-0000000000000000` with your AdSense Publisher ID
- Update partner IDs if you use additional ad networks
- Ensure the file is placed at: `https://yourdomain.com/ads.txt`

### 2. Update Contact Information

**In `/app/contact/page.tsx`:**
- Update email addresses (currently placeholders):
  - `contact@linuxhelper.dev`
  - `feedback@linuxhelper.dev`
  - `support@linuxhelper.dev`

### 3. Custom Branding

**In `/app/page.tsx` and all pages:**
- Update company name from "Linux Helper" to your brand
- Update copyright information
- Customize color scheme if desired (see globals.css)

### 4. Analytics Setup

The layout includes Vercel Analytics. To add Google Analytics:
```typescript
// In /app/layout.tsx, add after the AdSense script:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```
Replace `GA_ID` with your Google Analytics tracking ID.

## Environment Variables

For deployment to Vercel, set these environment variables in your project settings:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Deployment Steps

### Option 1: Deploy to Vercel (Recommended)

1. **Connect your GitHub repository:**
   - Push code to GitHub
   - Go to vercel.com and import the repository

2. **Configure project:**
   - Framework: Next.js 16
   - Node version: 18.x or higher
   - Build command: `npm run build`
   - Output directory: `.next`

3. **Add environment variables:**
   - Set any custom environment variables in Vercel Settings

4. **Deploy:**
   - Vercel will automatically build and deploy on push

### Option 2: Self-Hosted

1. **Build the project:**
   ```bash
   npm install
   npm run build
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Configure reverse proxy:**
   - Use Nginx or Apache as reverse proxy
   - Point domain to Node.js port (default: 3000)

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test responsive design on mobile
- [ ] Check Google AdSense approval status
- [ ] Verify ads.txt is accessible at `domain.com/ads.txt`
- [ ] Test contact form functionality
- [ ] Verify all links work
- [ ] Check metadata/SEO tags
- [ ] Set up Google Search Console
- [ ] Submit sitemap to search engines
- [ ] Monitor analytics for traffic

## AdSense Compliance

To ensure AdSense approval:

✅ **Original Content:** All guides are original and educational  
✅ **No Prohibited Content:** Site doesn't contain:
   - Hateful or violent content
   - Deceptive practices
   - Copyright violations
   - Malware or phishing
   - Adult content

✅ **Quality Standards:**
   - Clear navigation
   - Professional design
   - Fast loading times
   - Mobile-friendly

✅ **Privacy Compliance:**
   - Privacy Policy: ✓ Included
   - Cookies Policy: ✓ Included
   - ads.txt: ✓ Included
   - robots.txt: ✓ Included

## Customization Guide

### Change Color Scheme

Edit `/app/globals.css` to modify the green and white theme:

```css
:root {
  --primary: oklch(0.4 0.15 142.5);     /* Main green color */
  --secondary: oklch(0.5 0.12 142.5);   /* Secondary green */
  --accent: oklch(0.35 0.18 142.5);     /* Accent green */
  --background: oklch(0.98 0.01 142.5); /* Light background */
  --foreground: oklch(0.15 0.02 142.5); /* Dark text */
}
```

### Add New Guides

1. Create new file: `/app/your-guide/page.tsx`
2. Copy structure from existing guides (e.g., `/app/installation/page.tsx`)
3. Add navigation link in footer and homepage
4. Update metadata

### Modify Ad Placement

Ads can be added using Google AdSense script tags within components:
```tsx
<ins 
  className="adsbygoogle"
  data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
  data-ad-slot="xxxxxxxxxx"
></ins>
```

## Troubleshooting

### AdSense Script Not Loading
- Verify Publisher ID is correct
- Check that domain is approved by Google
- Ensure HTTPS is enabled
- Wait 24-48 hours for new sites

### Styling Issues
- Clear browser cache
- Run `npm run build` again
- Check that Tailwind CSS is properly configured

### Contact Form Not Working
- This is a frontend form; you'll need a backend service
- Options: Formspree, EmailJS, custom API
- Update `handleSubmit` in `/app/contact/page.tsx`

## Performance Optimization

- Next.js Image optimization (automatic)
- CSS compression (automatic with Tailwind v4)
- Code splitting per page
- Static generation where possible
- Consider adding caching headers in vercel.json

## Monitoring & Maintenance

1. **Monitor AdSense:**
   - Check approval status
   - Monitor earnings and CTR
   - Review ad quality

2. **Update Content:**
   - Fix broken links
   - Update outdated commands
   - Add new Linux distributions/techniques

3. **Security:**
   - Keep dependencies updated: `npm update`
   - Monitor for vulnerabilities: `npm audit`
   - Update Next.js regularly

## Support & Resources

- Next.js Documentation: https://nextjs.org
- Tailwind CSS: https://tailwindcss.com
- Google AdSense Policies: https://support.google.com/adsense
- ads.txt Specification: https://iabtechlab.com/ads-txt/

## License & Legal

Ensure you have appropriate licenses for:
- Any images or icons used
- Third-party components
- Fonts and typography

## Next Steps

1. Set up your Google AdSense account
2. Deploy to Vercel or your hosting provider
3. Submit to Google Search Console
4. Monitor analytics and optimize content
5. Engage with community feedback
6. Add more guides based on user requests

---

**Good luck launching Linux Helper! This comprehensive resource will help many developers master Linux.**
