# 🎯 Sanity CMS Setup Guide

Your Sanity Studio is now deployed and ready to use! Here's how to complete the setup:

## 📋 **What's Already Done**

✅ Sanity Studio deployed to: **https://blanchard-orthdontics.sanity.studio/**  
✅ All content schemas created (Articles, Categories, Team Members, Info Banners, Site Settings)  
✅ Next.js integration files created  
✅ Migration script prepared  

## 🔑 **Step 1: Get Your API Token**

1. Go to [https://www.sanity.io/manage/project/sln6nq50](https://www.sanity.io/manage/project/sln6nq50)
2. Click on **"API"** in the left sidebar
3. Click **"Add API token"**
4. Name it something like "Blanchard Website Token"
5. Select **"Editor"** permissions
6. Copy the token (it starts with `sk...`)

## 🌍 **Step 2: Set Environment Variables**

Create a `.env.local` file in your project root:

```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=sln6nq50
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk_your_token_here
```

## 📊 **Step 3: Access Your Sanity Studio**

1. Open your browser and go to: **https://blanchard-orthodontics.sanity.studio/**
2. Sign in with your Sanity account
3. You'll see all your content types:
   - **Articles** - Blog posts
   - **Categories** - Article categories
   - **Team Members** - Staff profiles
   - **Info Banners** - Site announcements
   - **Site Settings** - General site configuration

## 🚀 **Step 4: Migrate Your Existing Content**

Run the migration script to move your current content to Sanity:

```bash
# Make sure you have your API token in .env.local first
node scripts/migrate-to-sanity.js
```

## 🔄 **Step 5: Update Your Next.js App**

You'll need to update your components to use the new Sanity service. Here are the key files to update:

### Update CMSProvider
```typescript
// src/components/CMSProvider.tsx
import sanityCMSService from '../../lib/sanity-cms-service'
// ... update to use async methods
```

### Update Article Pages
```typescript
// src/app/article/page.tsx
// src/app/article/[slug]/page.tsx
// ... update to use sanityCMSService.getArticles() etc.
```

## 🎨 **Step 6: Content Management Features**

### **Info Banners**
- Toggle banners on/off with the `isActive` field
- Only one banner can be active at a time
- Add button text and URL for call-to-action

### **Articles**
- Rich text editor for content
- Image uploads with hotspot editing
- Category assignment
- Publish/unpublish with `isPublished` field
- SEO-friendly slugs

### **Team Members**
- Profile image uploads
- Contact information
- Active/inactive status
- Publish control

### **Categories**
- Organize articles
- SEO descriptions
- Automatic slug generation

## 🔧 **Troubleshooting**

### **Studio Not Loading**
- Check your internet connection
- Try refreshing the page
- Verify you're signed into the correct Sanity account

### **Migration Errors**
- Ensure your API token has write permissions
- Check that `.env.local` is in the project root
- Verify the token starts with `sk...`

### **Next.js Integration Issues**
- Make sure environment variables are set
- Check browser console for errors
- Verify Sanity client configuration

### **AWS Amplify Deployment Issues**
- Ensure `output: 'standalone'` is set in `next.config.js`:
  ```javascript
  // next.config.js
  module.exports = {
    output: 'standalone',
    // any other config...
  };
  ```
- Verify `amplify.yml` uses `baseDirectory: .next/standalone`
- Check that all environment variables are set in Amplify console

## 📞 **Need Help?**

- **Sanity Documentation**: https://www.sanity.io/docs
- **Sanity Community**: https://www.sanity.io/community
- **Project URL**: https://blanchard-orthodontics.sanity.studio/

## 🎉 **You're All Set!**

Your Sanity CMS is now ready to use. You can:
- ✅ Add new blog posts
- ✅ Toggle info banners on/off
- ✅ Manage team members
- ✅ Update categories
- ✅ Configure site settings

All through the beautiful Sanity Studio interface! 