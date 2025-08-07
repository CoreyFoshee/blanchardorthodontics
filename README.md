# Blanchard Orthodontics - Next.js Website

A modern, responsive website for Blanchard Orthodontics built with Next.js 14, featuring dynamic content management through Sanity CMS and integrated contact forms with Go High Level.

## 🚀 Features

- **Modern Next.js 14** with App Router
- **Sanity CMS Integration** for dynamic content management
- **Go High Level Webhook Integration** for contact form submissions
- **Responsive Design** with Webflow-migrated styling
- **SEO Optimized** with proper meta tags and structured data
- **Contact Form Integration** with automatic contact tagging
- **Blog/Article System** with categories and featured images
- **Team Member Profiles** with detailed information
- **Location Pages** with contact information

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **CMS:** Sanity.io
- **Styling:** CSS (migrated from Webflow)
- **Lead Management:** Go High Level (Webhook Integration)
- **Deployment:** Vercel/Netlify ready

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Sanity account
- Go High Level account

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd blanchard-orthodontics-next
npm install
```

### 2. Environment Setup

Copy the environment template and configure your services:

```bash
cp env.template .env.local
```

**Required Environment Variables:**

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token

# Go High Level Webhook (Primary)
GOHIGHLEVEL_WEBHOOK_URL=https://your-webhook-url.gohighlevel.com/webhook
GOHIGHLEVEL_LOCATION_ID=your_location_id
GOHIGHLEVEL_CONTACT_TAGS=blanchard-orthodontics,website-lead

# Optional Go High Level Configuration
GOHIGHLEVEL_CALENDAR_ID=your_calendar_id
GOHIGHLEVEL_FUNNEL_ID=your_funnel_id
GOHIGHLEVEL_CAMPAIGN_ID=your_campaign_id
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

## 📝 Content Management

### Sanity Studio

Access the CMS at `/sanity-studio` or run separately:

```bash
cd sanity-studio
npm run dev
```

### Content Types

- **Articles:** Blog posts with categories and featured images
- **Categories:** Article categorization
- **Team Members:** Staff profiles with photos and details
- **Info Banners:** Promotional content blocks
- **Site Settings:** Global configuration

## 🔗 Go High Level Integration

The website integrates with Go High Level via webhooks for contact form submissions:

### Features
- ✅ **Automatic contact creation** from form submissions
- ✅ **Contact tagging** with "blanchard-orthodontics"
- ✅ **Form data capture** (name, email, phone, subject, message)
- ✅ **Consent tracking** for SMS communications
- ✅ **UTM tracking** for marketing attribution

### Setup
1. Create a webhook in Go High Level
2. Add the webhook URL to your `.env.local`
3. Test form submissions
4. Verify contacts appear in Go High Level dashboard

## 🎨 Customization

### Styling
- CSS files are in `src/styles/` and `public/css/`
- Main styles: `blanchard-orthodontics.webflow.css`
- Responsive design with mobile-first approach

### Components
- `ContactForm`: Reusable contact form component
- `CMSProvider`: Context provider for CMS data
- `Footer`: Site footer component

## 📱 Pages

- **Home** (`/`): Main landing page with contact form
- **About** (`/about`): Practice information
- **Services** (`/service`): Treatment options
- **Locations** (`/locations`): Office locations with contact form
- **Team** (`/orthodontists`): Staff profiles
- **Blog** (`/article`): Articles and news
- **Appointments** (`/appointments`): Scheduling information

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
# Deploy the .next folder
```

### Environment Variables

Make sure to set all environment variables in your deployment platform.

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### File Structure

```
src/
├── app/             # Next.js App Router pages
├── components/      # React components
├── styles/          # CSS files
└── lib/            # Utility functions and configurations
```

## 📊 Analytics & Tracking

- Form submissions are logged for debugging
- UTM parameters are captured and sent to Go High Level
- Contact tagging for segmentation

## 🛡️ Security

- Environment variables for sensitive data
- Form validation on client and server
- CORS protection for API routes
- Input sanitization

## 📞 Support

For technical support or questions about the integration:
- Check the browser console for error messages
- Verify environment variables are set correctly
- Test webhook connectivity with the provided test scripts

## 📄 License

This project is proprietary to Blanchard Orthodontics.

---

**Built with ❤️ for Blanchard Orthodontics**
