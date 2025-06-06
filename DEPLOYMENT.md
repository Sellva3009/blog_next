# Deployment Guide

## Prerequisites
1. A hosting provider (Vercel, Netlify, or any other Next.js compatible host)
2. MongoDB database (MongoDB Atlas recommended)
3. Google OAuth credentials (if using Google authentication)

## Environment Variables
Create a `.env.production` file with the following variables:
```
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-nextauth-secret
MONGODB_URI=your-mongodb-uri
GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret
```

## Deployment Steps

### 1. Vercel Deployment (Recommended)
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Set environment variables in Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add all variables from `.env.production`

### 2. Netlify Deployment
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy:
   ```bash
   netlify deploy
   ```

4. Set environment variables in Netlify dashboard:
   - Go to Site Settings > Build & Deploy > Environment
   - Add all variables from `.env.production`

### 3. Traditional Hosting
1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start npm --name "next-app" -- start
   ```

## Database Setup
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Set up database access (user and password)
4. Set up network access (IP whitelist)
5. Get your connection string and add it to environment variables

## Domain Setup
1. Purchase a domain name
2. Configure DNS settings:
   - Add A record pointing to your hosting provider
   - Add CNAME record for www subdomain
3. Set up SSL certificate (usually automatic with Vercel/Netlify)

## Post-Deployment Checklist
- [ ] Verify all environment variables are set
- [ ] Test authentication flows
- [ ] Check database connections
- [ ] Verify API endpoints
- [ ] Test responsive design
- [ ] Check SEO meta tags
- [ ] Verify image optimization
- [ ] Test form submissions
- [ ] Check error handling

## Monitoring
1. Set up error tracking (e.g., Sentry)
2. Configure logging
3. Set up performance monitoring
4. Configure backup strategy

## Maintenance
1. Regular security updates
2. Database backups
3. Performance monitoring
4. Error log review
5. SSL certificate renewal 