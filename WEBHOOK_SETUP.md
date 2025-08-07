# Go High Level Webhook Setup Guide

## 🚀 **Quick Setup (Recommended)**

Webhooks are more reliable than direct API integration and easier to set up.

### **Step 1: Create Webhook in Go High Level**

1. **Login to Go High Level**
2. **Go to Settings** → **Integrations** → **Webhooks**
3. **Click "Add Webhook"**
4. **Configure the webhook:**
   - **Name:** `Blanchard Orthodontics Contact Form`
   - **URL:** `https://your-domain.com/api/contact-form` (we'll update this)
   - **Events:** Select `Contact Created` or `Contact Updated`
   - **Method:** `POST`
   - **Status:** `Active`

### **Step 2: Update Your Environment File**

**Edit your `.env.local` file:**
```bash
# Go High Level Webhook (Primary)
GOHIGHLEVEL_WEBHOOK_URL=https://your-webhook-url.gohighlevel.com/webhook

# Optional: Additional configuration
GOHIGHLEVEL_LOCATION_ID=your_location_id_here
GOHIGHLEVEL_CALENDAR_ID=your_calendar_id_here
GOHIGHLEVEL_FUNNEL_ID=your_funnel_id_here
GOHIGHLEVEL_CAMPAIGN_ID=your_campaign_id_here

# Contact Tags
GOHIGHLEVEL_CONTACT_TAGS=blanchard-orthodontics,website-lead
```

### **Step 3: Test the Webhook**

1. **Submit a test form on your website**
2. **Check the browser console for logs**
3. **Verify the contact appears in Go High Level**

## 🔧 **Webhook URL Options**

### **Option A: Use Your Domain (Recommended)**
```
https://your-domain.com/api/contact-form
```

### **Option B: Use ngrok for Local Testing**
1. **Install ngrok:** `npm install -g ngrok`
2. **Start your Next.js app:** `npm run dev`
3. **In another terminal:** `ngrok http 3000`
4. **Use the ngrok URL:** `https://abc123.ngrok.io/api/contact-form`

### **Option C: Use Vercel/Netlify**
If deployed to Vercel or Netlify, use your production URL:
```
https://your-app.vercel.app/api/contact-form
```

## 📊 **What Data Gets Sent**

The webhook will send this data to Go High Level:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "555-123-4567",
  "subject": "Consultation Request",
  "message": "I'm interested in braces",
  "source": "Website Contact Form",
  "location": "Blanchard Orthodontics",
  "consent": true,
  "tags": ["blanchard-orthodontics"],
  "timestamp": "2025-01-07T10:30:00.000Z",
  "utm_source": "website",
  "utm_medium": "contact_form",
  "utm_campaign": "orthodontics_consultation"
}
```

## 🏷️ **Contact Tagging**

Every contact will automatically be tagged with:
- `blanchard-orthodontics` (default)
- Any additional tags you specify in `GOHIGHLEVEL_CONTACT_TAGS`

## 🔍 **Troubleshooting**

### **Webhook Not Receiving Data**
1. **Check the webhook URL is correct**
2. **Verify the webhook is active in Go High Level**
3. **Check browser console for errors**
4. **Test with a simple form submission**

### **Contact Not Appearing in Go High Level**
1. **Check webhook logs in Go High Level**
2. **Verify the webhook URL is accessible**
3. **Check if your domain allows POST requests**

### **Testing Locally**
Use ngrok to expose your local server:
```bash
npm run dev
# In another terminal:
ngrok http 3000
# Use the ngrok URL in your webhook
```

## ✅ **Success Indicators**

When working correctly, you should see:
1. **Form submits successfully on website**
2. **Console shows "Go High Level webhook success"**
3. **Contact appears in Go High Level dashboard**
4. **Contact has the correct tags**

## 🎯 **Next Steps**

1. **Set up your webhook URL**
2. **Update your `.env.local` file**
3. **Test with a form submission**
4. **Verify contact appears in Go High Level**
5. **Set up any additional automation in Go High Level**

---

**Need help?** Check the browser console for detailed error messages and logs.
