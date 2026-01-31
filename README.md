# Next.js Static Export Template for QuantCDN

A Next.js 14 static site template with App Router, configured for deployment to QuantCDN.

[![Deploy to QuantCDN](https://www.quantcdn.io/img/quant-deploy-btn-sml.svg)](https://dashboard.quantcdn.io/projects/add/jamstack?template=nextjs)

## Features

- **Next.js 14** - Latest version with App Router
- **Static Export** - Pre-rendered HTML for blazing-fast performance
- **React Server Components** - Modern React architecture
- **TypeScript** - Full type safety
- **Automated Deployment** - GitHub Actions workflow for CI/CD

## Quick Start

1. Clone this repository
2. Install dependencies: `npm install`
3. Run locally: `npm run dev`
4. Visit `http://localhost:3000`

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml       # Automated deployment workflow
├── src/
│   └── app/
│       ├── layout.tsx       # Root layout
│       └── page.tsx         # Home page
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
├── package.json
└── README.md
```

## Deployment

This template includes a GitHub Actions workflow that automatically:
1. Builds your Next.js site on every push to `main`
2. Deploys the static files to QuantCDN
3. Purges the CDN cache for instant updates

### Environment Variables

The following are automatically configured by QuantCDN:
- `QUANT_CUSTOMER` - Your Quant customer ID (repository variable)
- `QUANT_PROJECT` - Your Quant project ID (repository variable)
- `QUANT_TOKEN` - Your Quant API token (secret)

## Customization

### Adding Pages

Create new pages in `src/app/`:

```bash
mkdir src/app/about
touch src/app/about/page.tsx
```

### Static Export Configuration

This template uses `output: 'export'` in `next.config.js` for static generation. Note that some Next.js features require a server and won't work with static export:

- API Routes
- Dynamic routes without `generateStaticParams`
- Image Optimization (use `unoptimized: true`)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Quant Documentation](https://docs.quantcdn.io/)
