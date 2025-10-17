# Vercel Deployment Guide for Next Map

## 🚀 Quick Deploy (Recommended)

The fastest way to deploy your Next.js app with full SSR support:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (will prompt for setup)
vercel --prod
```

This will:
- Auto-detect your Next.js project
- Set up the project on Vercel
- Deploy with full SSR, API routes, and optimizations
- Give you a production URL

## 🔧 GitHub Actions Integration (Optional)

For automatic deployments on every push, set up GitHub secrets:

### Step 1: Get Vercel Project Info

```bash
# Link your local project to Vercel
vercel link

# This creates .vercel/project.json with your project details
cat .vercel/project.json
```

### Step 2: Get Vercel Token

1. Go to [Vercel Dashboard](https://vercel.com/account/tokens)
2. Create a new token
3. Copy the token value

### Step 3: Add GitHub Secrets

Go to your GitHub repo → Settings → Secrets and variables → Actions

Add these secrets:
- `VERCEL_TOKEN`: Your Vercel token from step 2
- `VERCEL_ORG_ID`: From `.vercel/project.json` (orgId field)
- `VERCEL_PROJECT_ID`: From `.vercel/project.json` (projectId field)

### Step 4: Enable Automatic Deployments

Once secrets are added, GitHub Actions will automatically:
- Deploy preview environments for pull requests
- Deploy to production on pushes to main branch

## 🌐 Vercel Features for Next.js

### ✅ What You Get:
- **Server-Side Rendering (SSR)**: Full dynamic rendering
- **API Routes**: Backend endpoints work seamlessly
- **Edge Functions**: Ultra-fast serverless functions
- **Image Optimization**: Automatic image optimization
- **Automatic HTTPS**: Free SSL certificates
- **Global CDN**: Fast worldwide delivery
- **Preview Deployments**: Every PR gets a preview URL
- **Analytics**: Performance monitoring (free tier)

### 📊 Free Tier Limits:
- 100 GB bandwidth/month
- 100 GB-hours serverless function execution
- 1,000 edge middleware invocations/day
- Unlimited static requests

## 🔧 Project Configuration

Your `next.config.ts` is already optimized for Vercel with:
- Security headers
- Turbopack support
- Performance optimizations

## 🚀 Deploy Now

```bash
# One command to deploy
npx vercel --prod
```

Your app will be available at: `https://your-project.vercel.app`

## 🔍 Troubleshooting

### Build Errors
- Check the build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify dependencies are in `package.json`

### Performance Issues
- Use Vercel Analytics to identify bottlenecks
- Check serverless function cold starts
- Optimize images and assets

## 📚 Additional Resources

- [Vercel Next.js Documentation](https://vercel.com/docs/frameworks/nextjs)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)