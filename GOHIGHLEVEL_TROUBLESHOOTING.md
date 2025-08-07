# Go High Level API Troubleshooting Guide

## 🔍 Current Issue: 401 Unauthorized Error

The 401 error means there's an authentication problem with your Go High Level API key.

## 🛠️ Step-by-Step Fix

### 1. Verify Your API Key

**Get a fresh API key from Go High Level:**
1. Log into your Go High Level account
2. Go to **Settings** → **Integrations** → **API Keys**
3. Delete any existing API keys
4. Create a **new API key**
5. Copy the new key immediately

### 2. Check Your Location ID

**Find your correct Location ID:**
1. Go to **Settings** → **Locations**
2. Find your location in the list
3. Copy the **Location ID** (not the name)
4. It should look like: `1234567890abcdef`

### 3. Update Your Environment Variables

**Edit your `.env.local` file:**
```bash
GOHIGHLEVEL_API_KEY=your_new_api_key_here
GOHIGHLEVEL_LOCATION_ID=your_location_id_here
```

**Important:** 
- No quotes around the values
- No spaces around the `=` sign
- Restart your development server after making changes

### 4. Test the Connection

**Restart your server:**
```bash
npm run dev
```

**Submit a test form** and check the console logs for detailed error information.

## 🔧 Alternative Solutions

### Option 1: Use Webhook Instead of API

If the API continues to fail, switch to webhook integration:

1. **Create a webhook in Go High Level:**
   - Go to **Settings** → **Integrations** → **Webhooks**
   - Click **"Add Webhook"**
   - Set URL to: `https://your-domain.com/api/contact-form`
   - Choose **POST** method

2. **Update environment variables:**
   ```bash
   GOHIGHLEVEL_WEBHOOK_URL=https://your-webhook-url.gohighlevel.com/webhook
   GOHIGHLEVEL_LOCATION_ID=your_location_id_here
   ```

3. **Switch to webhook integration** by editing `src/app/api/contact-form/route.ts`:
   ```typescript
   import { submitToGoHighLevel } from '../../../../lib/go-high-level';
   // Change the function call to:
   const result = await submitToGoHighLevel({...});
   ```

### Option 2: Manual Contact Creation

If both API and webhook fail, the forms will still work and log submissions to the console. You can manually create contacts in Go High Level from the logged data.

## 🧪 Debugging Steps

### 1. Check API Key Format
Your API key should:
- Be a long string of letters and numbers
- Not have any spaces or special characters
- Be copied exactly as shown in Go High Level

### 2. Verify Location ID Format
Your Location ID should:
- Be a string of letters and numbers
- Not be the location name
- Be copied from the Location ID field in Go High Level

### 3. Test API Key Manually
You can test your API key manually using curl:
```bash
curl -X GET "https://rest.gohighlevel.com/v1/contacts/" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

If this returns a 401 error, your API key is invalid.

## 📋 Common Issues & Solutions

### Issue: "API key not found"
**Solution:** Check your `.env.local` file exists and has the correct variable names.

### Issue: "Location ID not found"
**Solution:** Verify you're using the Location ID, not the location name.

### Issue: "401 Unauthorized"
**Solution:** 
1. Generate a new API key
2. Check the key format
3. Ensure the key has proper permissions

### Issue: "403 Forbidden"
**Solution:** Your API key might not have the right permissions. Contact Go High Level support.

## 🆘 Getting Help

### 1. Check Go High Level Documentation
- [Go High Level API Documentation](https://developers.gohighlevel.com/)
- [API Authentication Guide](https://developers.gohighlevel.com/docs/authentication)

### 2. Contact Go High Level Support
- Use their live chat
- Include your API key (first 4 and last 4 characters only)
- Include the error messages from your console

### 3. Test with Postman
You can test the API directly in Postman:
- URL: `https://rest.gohighlevel.com/v1/contacts/`
- Method: POST
- Headers: `Authorization: Bearer YOUR_API_KEY`
- Body: JSON with contact data

## ✅ Success Indicators

When working correctly, you should see:
- ✅ 200 status code in console
- ✅ Contact created in Go High Level dashboard
- ✅ Tag "blanchard-orthodontics" applied
- ✅ Form shows success message

## 🔄 Next Steps

1. **Fix the API key issue** using the steps above
2. **Test with a simple form submission**
3. **Verify contact appears in Go High Level**
4. **Add custom fields** once basic integration works
5. **Set up automations** in Go High Level

The forms will continue to work and log submissions even if the API fails, so you won't lose any leads while troubleshooting!
