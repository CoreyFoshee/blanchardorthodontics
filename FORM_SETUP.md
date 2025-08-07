# Form Integration Setup Guide

The contact forms on the Blanchard Orthodontics website are now fully functional and ready to integrate with your lead connector service. The forms maintain the exact same layout and styling as the original Webflow site.

## ✅ What's Been Implemented

1. **Functional Contact Forms** - Both home page and locations page forms are working
2. **Exact Layout Preservation** - All styling, icons, and structure maintained
3. **Form Validation** - Required fields and consent checkbox validation
4. **Success/Error Handling** - Proper user feedback for form submissions
5. **Lead Connector Ready** - API endpoint ready for your lead connector integration

## 🔧 Lead Connector Integration

### Option 1: Generic Lead Connector (Recommended)

Add these environment variables to your `.env.local` file:

```bash
LEAD_CONNECTOR_API_KEY=your_api_key_here
LEAD_CONNECTOR_ENDPOINT=https://your-lead-connector-service.com/api/submit
```

### Option 2: Popular Lead Connector Services

The system includes pre-built integrations for popular services:

#### HubSpot Integration
```bash
HUBSPOT_API_KEY=your_hubspot_api_key
HUBSPOT_PORTAL_ID=your_portal_id
HUBSPOT_FORM_ID=your_form_id
```

#### Mailchimp Integration
```bash
MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_LIST_ID=your_list_id
MAILCHIMP_SERVER=us1  # Your server prefix
```

#### ConvertKit Integration
```bash
CONVERTKIT_API_KEY=your_convertkit_api_key
CONVERTKIT_FORM_ID=your_form_id
```

## 📝 Form Fields

Both forms collect the following information:

- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Subject** (optional)
- **Message** (optional - locations page only)
- **Consent** (required - SMS opt-in)

## 🎨 Form Variants

### Home Page Form
- Simpler layout with 4 fields in a grid
- No message textarea
- Used in the appointment form section

### Locations Page Form
- Detailed layout with icons
- Includes message textarea
- Used in the contact form section

## 🔄 How to Customize

### 1. Modify Lead Connector Integration

Edit `lib/lead-connector.ts` to integrate with your specific lead connector service:

```typescript
// Replace the submitToLeadConnector function with your specific integration
export async function submitToLeadConnector(formData) {
  // Your lead connector API call here
  const response = await fetch('YOUR_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.YOUR_API_KEY}`
    },
    body: JSON.stringify({
      // Map form data to your lead connector's expected format
      firstName: formData.name.split(' ')[0],
      lastName: formData.name.split(' ').slice(1).join(' '),
      email: formData.email,
      phone: formData.phone,
      // ... other fields
    })
  });
  
  return response.ok;
}
```

### 2. Add Custom Validation

Modify the `ContactForm.tsx` component to add custom validation rules:

```typescript
const validateForm = () => {
  // Add your custom validation logic here
  if (formData.phone && !isValidPhone(formData.phone)) {
    setErrorMessage('Please enter a valid phone number');
    return false;
  }
  return true;
};
```

### 3. Customize Success/Error Messages

Update the success and error messages in the `ContactForm.tsx` component:

```typescript
{submitStatus === 'success' && (
  <div className="appointment-success-message w-form-done">
    <div>Your custom success message here!</div>
  </div>
)}
```

## 🚀 Testing the Forms

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Test form submissions:**
   - Go to the home page and fill out the contact form
   - Go to the locations page and fill out the detailed contact form
   - Check the browser console for form submission logs
   - Verify success/error messages appear correctly

3. **Check API endpoint:**
   - Form submissions are sent to `/api/contact-form`
   - Check the server logs for form data

## 🔒 Security Considerations

- Form validation is performed both client-side and server-side
- API keys are stored in environment variables
- CORS is properly configured for the API routes
- Input sanitization is handled automatically by Next.js

## 📞 Support

If you need help integrating with a specific lead connector service, the code includes examples for:
- HubSpot
- Mailchimp  
- ConvertKit
- Generic REST API integration

Simply uncomment and configure the appropriate integration in `lib/lead-connector.ts`.

## 🎯 Next Steps

1. Choose your lead connector service
2. Add the required environment variables
3. Test the form submissions
4. Verify leads are being received in your lead connector
5. Customize success/error messages as needed

The forms are now ready to capture leads and integrate with your preferred lead connector service while maintaining the exact same professional appearance as the original site!
