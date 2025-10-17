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

### Step 1: Deploy Manually First

```bash
# Deploy to create Vercel project
vercel --prod

# This will create .vercel/project.json automatically
```

### Step 2: Get Vercel Token

1. Go to [Vercel Dashboard](https://vercel.com/account/tokens)
2. Create a new token with appropriate scopes
3. Copy the token value

### Step 3: Add GitHub Secret

Go to your GitHub repo → Settings → Secrets and variables → Actions

Add this secret:
- `VERCEL_TOKEN`: Your Vercel token from step 2

**Note**: With the new official approach, you only need the `VERCEL_TOKEN`. The project information is automatically pulled from Vercel during deployment.

### Step 4: Enable Automatic Deployments

Once the `VERCEL_TOKEN` secret is added, GitHub Actions will automatically:
- **Preview Deployments**: Every pull request gets a unique preview URL
- **Production Deployments**: Pushes to main branch deploy to production
- **Environment Sync**: Vercel environment variables are automatically pulled
- **Optimized Builds**: Uses Vercel's build system for maximum performance

### New GitHub Actions Workflow Benefits

✅ **Official Vercel CLI**: Uses `vercel` command directly (not third-party actions)
✅ **Better Environment Handling**: Automatic environment variable sync
✅ **Improved Reliability**: Direct integration with Vercel's deployment system
✅ **Enhanced PR Comments**: Rich preview deployment information
✅ **Proper Build Optimization**: Uses Vercel's native build process

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