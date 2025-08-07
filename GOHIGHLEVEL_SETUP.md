# Go High Level Integration Setup

This guide will help you connect your Blanchard Orthodontics contact forms directly to Go High Level.

## 🚀 Quick Setup

### Option 1: Webhook Integration (Recommended)

1. **Create a Webhook in Go High Level:**
   - Log into your Go High Level account
   - Go to **Settings** → **Integrations** → **Webhooks**
   - Click **"Add Webhook"**
   - Set the webhook URL to: `https://your-domain.com/api/contact-form`
   - Choose **POST** method
   - Select the events you want to trigger (Contact Created, etc.)

2. **Add Environment Variables:**
   Create a `.env.local` file in your project root:
   ```bash
   GOHIGHLEVEL_WEBHOOK_URL=https://your-webhook-url.gohighlevel.com/webhook
   GOHIGHLEVEL_LOCATION_ID=your_location_id_here
   GOHIGHLEVEL_CALENDAR_ID=your_calendar_id_here
   GOHIGHLEVEL_FUNNEL_ID=your_funnel_id_here
   GOHIGHLEVEL_CAMPAIGN_ID=your_campaign_id_here
   ```

### Option 2: Direct API Integration

1. **Get Your API Key:**
   - Log into your Go High Level account
   - Go to **Settings** → **Integrations** → **API Keys**
   - Create a new API key
   - Copy the API key

2. **Get Your Location ID:**
   - Go to **Settings** → **Locations**
   - Find your location and copy the Location ID

3. **Add Environment Variables:**
   ```bash
   GOHIGHLEVEL_API_KEY=your_api_key_here
   GOHIGHLEVEL_LOCATION_ID=your_location_id_here
   GOHIGHLEVEL_CONTACT_TAGS=blanchard-orthodontics,website-lead,orthodontics
   ```

## 📋 Form Data Mapping

Your contact forms will send this data to Go High Level:

| Form Field | Go High Level Field | Required |
|------------|-------------------|----------|
| Name | firstName + lastName | ✅ |
| Email | email | ✅ |
| Phone | phone | ❌ |
| Subject | subject (custom field) | ❌ |
| Message | message (custom field) | ❌ |
| Consent | consent (custom field) | ✅ |
| Tags | tags | ✅ (Auto-added: blanchard-orthodontics) |

## 🔧 Advanced Configuration

### Contact Tags Setup

Every contact will automatically receive these tags:
- **blanchard-orthodontics** (default)
- **website-lead** (optional)
- **orthodontics** (optional)

You can customize tags by setting the `GOHIGHLEVEL_CONTACT_TAGS` environment variable:
```bash
GOHIGHLEVEL_CONTACT_TAGS=blanchard-orthodontics,website-lead,orthodontics,consultation-request
```

### Custom Fields Setup

In Go High Level, create these custom fields for better lead tracking:

1. **Subject** - Text field
2. **Message** - Text area field  
3. **Source** - Text field (auto-filled: "Website Contact Form")
4. **Consent** - Yes/No field
5. **UTM Source** - Text field
6. **UTM Medium** - Text field
7. **UTM Campaign** - Text field

### Funnel Integration

To automatically add leads to a specific funnel:

1. Get your Funnel ID from Go High Level
2. Add it to your environment variables:
   ```bash
   GOHIGHLEVEL_FUNNEL_ID=your_funnel_id_here
   ```

### Calendar Integration

To automatically schedule consultations:

1. Get your Calendar ID from Go High Level
2. Add it to your environment variables:
   ```bash
   GOHIGHLEVEL_CALENDAR_ID=your_calendar_id_here
   ```

## 🧪 Testing Your Integration

### 1. Test Form Submission
```bash
# Start your development server
npm run dev
```

### 2. Fill out a contact form and check:
- Browser console for submission logs
- Go High Level dashboard for new contacts
- Check if custom fields are populated correctly

### 3. Verify Webhook Delivery
- Check Go High Level webhook logs
- Look for successful POST requests to your endpoint
- Verify contact data is received correctly

## 📊 Lead Flow

When someone submits a form:

1. **Form Submission** → Your website
2. **Data Processing** → Split name, format data
3. **Go High Level Submission** → Via webhook or API
4. **Contact Creation** → New contact in Go High Level
5. **Automation Trigger** → Your Go High Level automations
6. **Follow-up** → Email sequences, SMS, etc.

## 🎯 Recommended Go High Level Setup

### 1. Create a Lead Capture Funnel
- Landing page with your contact form
- Thank you page
- Follow-up email sequence
- SMS notifications

### 2. Set Up Automation
- Welcome email sequence
- Consultation scheduling
- Follow-up reminders
- Review request emails

### 3. Configure SMS Opt-in
- Use the consent field to trigger SMS campaigns
- Set up appointment reminders
- Configure review request SMS

## 🔒 Security & Best Practices

1. **Webhook Security:**
   - Use HTTPS for all webhook URLs
   - Consider adding webhook signature verification
   - Monitor webhook delivery logs

2. **Data Privacy:**
   - Ensure consent checkbox is working
   - Follow GDPR/CCPA compliance
   - Implement proper data retention policies

3. **Error Handling:**
   - Monitor failed submissions
   - Set up alerts for webhook failures
   - Implement retry logic for failed API calls

## 🆘 Troubleshooting

### Common Issues:

**"Webhook not receiving data"**
- Check your webhook URL is correct
- Verify the webhook is active in Go High Level
- Check server logs for errors

**"Contact not created in Go High Level"**
- Verify API key has correct permissions
- Check Location ID is correct
- Ensure all required fields are provided

**"Custom fields not populated"**
- Verify custom field names match exactly
- Check field types in Go High Level
- Ensure data is being sent in correct format

### Debug Mode
Add this to your `.env.local` for detailed logging:
```bash
DEBUG_LEAD_CONNECTOR=true
```

## 📞 Support

If you need help with Go High Level specific features:
1. Check Go High Level documentation
2. Contact Go High Level support
3. Review webhook/API logs for errors

Your forms are now ready to capture leads and send them directly to Go High Level! 🎉
