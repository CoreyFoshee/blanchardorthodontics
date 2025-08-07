# Lead Connector API Setup Guide

This guide will help you connect your Blanchard Orthodontics contact forms to your preferred lead connector service.

## 🚀 Quick Start

### 1. Create Environment File
Create a `.env.local` file in your project root:

```bash
# Copy this template
cp .env.example .env.local
```

### 2. Choose Your Lead Connector Service

## 📧 Popular Lead Connector Services

### Option 1: HubSpot (Recommended for Professional Services)

**Setup:**
1. Go to your HubSpot account → Settings → Integrations → API Keys
2. Create a new API key
3. Go to Forms → Create a new form or use existing
4. Get your Portal ID and Form ID

**Environment Variables:**
```bash
HUBSPOT_API_KEY=your_hubspot_api_key_here
HUBSPOT_PORTAL_ID=your_portal_id_here
HUBSPOT_FORM_ID=your_form_id_here
```

**Enable HubSpot Integration:**
Edit `lib/lead-connector.ts` and uncomment the HubSpot section:

```typescript
// In submitToLeadConnector function, replace the generic call with:
try {
  const success = await submitToHubSpot({
    name,
    email,
    phone,
    subject,
    message,
    consent
  });
  
  if (success) {
    return { success: true, message: 'Thank you! Your submission has been received!' };
  } else {
    throw new Error('HubSpot submission failed');
  }
} catch (error) {
  throw new Error('Failed to submit to HubSpot');
}
```

### Option 2: Mailchimp

**Setup:**
1. Go to your Mailchimp account → Account → Extras → API Keys
2. Create a new API key
3. Go to Audience → Settings → Audience name and defaults
4. Get your List ID and Server prefix (e.g., "us1")

**Environment Variables:**
```bash
MAILCHIMP_API_KEY=your_mailchimp_api_key_here
MAILCHIMP_LIST_ID=your_list_id_here
MAILCHIMP_SERVER=us1
```

### Option 3: ConvertKit

**Setup:**
1. Go to your ConvertKit account → Settings → Advanced → API
2. Create a new API key
3. Go to Landing Pages & Forms → Create a new form
4. Get your Form ID

**Environment Variables:**
```bash
CONVERTKIT_API_KEY=your_convertkit_api_key_here
CONVERTKIT_FORM_ID=your_form_id_here
```

### Option 4: Generic REST API

**For any custom lead connector service:**

**Environment Variables:**
```bash
LEAD_CONNECTOR_API_KEY=your_api_key_here
LEAD_CONNECTOR_ENDPOINT=https://your-service.com/api/leads
```

**Custom Integration:**
Edit `lib/lead-connector.ts` and modify the `submitToLeadConnector` function:

```typescript
export async function submitToLeadConnector(formData: Omit<FormSubmission, 'source' | 'location' | 'timestamp'>): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(leadConnectorConfig.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${leadConnectorConfig.apiKey}`,
        // Add any additional headers your service requires
        'X-Custom-Header': 'value'
      },
      body: JSON.stringify({
        // Map form data to your service's expected format
        firstName: formData.name.split(' ')[0],
        lastName: formData.name.split(' ').slice(1).join(' '),
        email: formData.email,
        phone: formData.phone || '',
        subject: formData.subject || '',
        message: formData.message || '',
        consent: formData.consent,
        source: 'website_contact_form',
        location: 'blanchard_orthodontics',
        timestamp: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const result = await response.json();
    
    return {
      success: true,
      message: 'Thank you! Your submission has been received!'
    };

  } catch (error) {
    console.error('Error submitting to lead connector:', error);
    throw new Error('Failed to submit form to lead connector');
  }
}
```

## 🔧 Specific Service Examples

### ActiveCampaign Integration

```typescript
export async function submitToActiveCampaign(formData: Omit<FormSubmission, 'source' | 'location' | 'timestamp'>) {
  const config = {
    apiKey: process.env.ACTIVECAMPAIGN_API_KEY || '',
    account: process.env.ACTIVECAMPAIGN_ACCOUNT || '',
    listId: process.env.ACTIVECAMPAIGN_LIST_ID || ''
  };

  const response = await fetch(`https://${config.account}.api-us1.com/api/3/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Api-Token': config.apiKey
    },
    body: JSON.stringify({
      contact: {
        email: formData.email,
        firstName: formData.name.split(' ')[0],
        lastName: formData.name.split(' ').slice(1).join(' '),
        phone: formData.phone || '',
        fieldValues: [
          { field: '1', value: formData.subject || '' },
          { field: '2', value: formData.message || '' }
        ]
      }
    })
  });

  return response.ok;
}
```

### Salesforce Integration

```typescript
export async function submitToSalesforce(formData: Omit<FormSubmission, 'source' | 'location' | 'timestamp'>) {
  const config = {
    accessToken: process.env.SALESFORCE_ACCESS_TOKEN || '',
    instanceUrl: process.env.SALESFORCE_INSTANCE_URL || ''
  };

  const response = await fetch(`${config.instanceUrl}/services/data/v52.0/sobjects/Lead`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.accessToken}`
    },
    body: JSON.stringify({
      FirstName: formData.name.split(' ')[0],
      LastName: formData.name.split(' ').slice(1).join(' '),
      Email: formData.email,
      Phone: formData.phone || '',
      Company: 'Blanchard Orthodontics',
      LeadSource: 'Website Contact Form',
      Description: `Subject: ${formData.subject || ''}\nMessage: ${formData.message || ''}`
    })
  });

  return response.ok;
}
```

## 🧪 Testing Your Integration

### 1. Test Form Submission
```bash
# Start the development server
npm run dev
```

### 2. Fill out a form and check:
- Browser console for any errors
- Network tab for API calls
- Your lead connector dashboard for new leads

### 3. Debug Mode
Add this to your `.env.local` for detailed logging:
```bash
DEBUG_LEAD_CONNECTOR=true
```

## 🔒 Security Best Practices

1. **Never commit API keys** - Always use environment variables
2. **Use HTTPS** - All API calls should be over secure connections
3. **Validate input** - Server-side validation is already implemented
4. **Rate limiting** - Consider adding rate limiting for production

## 📊 Form Data Mapping

Your forms collect this data:
- **Name** → `firstName` + `lastName`
- **Email** → `email`
- **Phone** → `phone`
- **Subject** → `subject`
- **Message** → `message` (locations page only)
- **Consent** → `consent` (SMS opt-in)

## 🎯 Next Steps

1. **Choose your lead connector service**
2. **Add the required environment variables**
3. **Test the form submission**
4. **Verify leads appear in your dashboard**
5. **Customize success/error messages if needed**

## 🆘 Troubleshooting

### Common Issues:

**"API key not found"**
- Check your `.env.local` file exists
- Verify the environment variable names match exactly
- Restart your development server after adding environment variables

**"Form submission failed"**
- Check the browser console for detailed error messages
- Verify your API endpoint URL is correct
- Ensure your API key has the necessary permissions

**"Leads not appearing in dashboard"**
- Check your lead connector's spam/junk folder
- Verify the form field mapping matches your service's requirements
- Test with a simple API call first

Need help with a specific service? The code includes examples for most popular lead connectors!
