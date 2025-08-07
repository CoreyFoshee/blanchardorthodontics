# Production Deployment Checklist

## ✅ **Pre-Deployment Checklist**

### **Code Quality**
- [x] Debug information removed from forms
- [x] Console logs cleaned up
- [x] Test files removed
- [x] Debug routes removed
- [x] Build completes successfully
- [x] No TypeScript errors

### **Environment Configuration**
- [x] `.env.local` configured with production values
- [x] Go High Level webhook URL set
- [x] Sanity CMS credentials configured
- [x] Contact tags configured
- [x] Debug mode set to false

### **Functionality Testing**
- [x] Contact forms working on home page
- [x] Contact forms working on locations page
- [x] Go High Level webhook receiving data
- [x] Contacts being created in Go High Level
- [x] Contact tagging working
- [x] Form validation working
- [x] Success/error messages displaying correctly

### **Content Management**
- [x] Sanity Studio accessible
- [x] Articles displaying correctly
- [x] Team member profiles working
- [x] Categories functioning
- [x] Images loading properly

### **Performance**
- [x] Build size optimized
- [x] Images optimized
- [x] CSS minified
- [x] JavaScript bundled efficiently

## 🚀 **Deployment Steps**

### **1. Choose Deployment Platform**

#### **Option A: Vercel (Recommended)**
```bash
npm install -g vercel
vercel --prod
```

#### **Option B: Netlify**
```bash
npm run build
# Deploy the .next folder
```

#### **Option C: Other Platforms**
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

### **2. Environment Variables**

Set these in your deployment platform:

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=sln6nq50
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token

# Go High Level Webhook
GOHIGHLEVEL_WEBHOOK_URL=https://your-webhook-url.gohighlevel.com/webhook
GOHIGHLEVEL_LOCATION_ID=your_location_id
GOHIGHLEVEL_CONTACT_TAGS=blanchard-orthodontics,website-lead

# Optional
GOHIGHLEVEL_CALENDAR_ID=your_calendar_id
GOHIGHLEVEL_FUNNEL_ID=your_funnel_id
GOHIGHLEVEL_CAMPAIGN_ID=your_campaign_id
```

### **3. Domain Configuration**

- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] DNS records updated
- [ ] Redirects configured (if needed)

### **4. Go High Level Webhook Update**

Update your webhook URL in Go High Level to point to your production domain:

```
https://your-domain.com/api/contact-form
```

## 🧪 **Post-Deployment Testing**

### **Functionality Tests**
- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Contact forms submit successfully
- [ ] Go High Level receives webhook data
- [ ] Contacts appear in Go High Level dashboard
- [ ] Contact tagging works
- [ ] Mobile responsiveness
- [ ] Page load speeds acceptable

### **Content Tests**
- [ ] Articles display correctly
- [ ] Team member profiles load
- [ ] Images display properly
- [ ] CMS content updates reflect on site

### **Form Tests**
- [ ] Form validation works
- [ ] Required fields enforced
- [ ] Success messages display
- [ ] Error handling works
- [ ] Data sent to Go High Level correctly

## 📊 **Monitoring Setup**

### **Analytics**
- [ ] Google Analytics configured (if needed)
- [ ] Form submission tracking
- [ ] Error monitoring setup

### **Performance Monitoring**
- [ ] Core Web Vitals monitoring
- [ ] Page load time tracking
- [ ] Error rate monitoring

## 🔧 **Maintenance**

### **Regular Tasks**
- [ ] Monitor form submissions
- [ ] Check Go High Level integration
- [ ] Update content via Sanity Studio
- [ ] Monitor error logs
- [ ] Performance optimization

### **Backup Strategy**
- [ ] Code repository backed up
- [ ] Environment variables documented
- [ ] Content backup strategy
- [ ] Database backup (if applicable)

## 🆘 **Support Documentation**

### **For Content Managers**
- [ ] Sanity Studio access instructions
- [ ] Content update procedures
- [ ] Image upload guidelines

### **For Technical Support**
- [ ] Environment variable documentation
- [ ] Webhook troubleshooting guide
- [ ] Common error solutions
- [ ] Contact information for issues

## ✅ **Final Verification**

Before going live:
- [ ] All forms tested in production
- [ ] Go High Level integration verified
- [ ] Content reviewed and approved
- [ ] Performance benchmarks met
- [ ] Security measures in place
- [ ] Backup procedures tested

---

**Status: Ready for Production** ✅

**Last Updated:** August 7, 2025
**Version:** 1.0.0
