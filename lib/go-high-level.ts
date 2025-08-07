// Go High Level Integration
// This handles form submissions to Go High Level via webhooks

export interface GoHighLevelConfig {
  webhookUrl: string;
  locationId?: string;
  calendarId?: string;
  funnelId?: string;
  campaignId?: string;
}

export interface GoHighLevelFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  source: string;
  location: string;
  consent: boolean;
}

// Get configuration at runtime
export const getGoHighLevelConfig = (): GoHighLevelConfig => {
  return {
    webhookUrl: process.env.GOHIGHLEVEL_WEBHOOK_URL || '',
    locationId: process.env.GOHIGHLEVEL_LOCATION_ID || '',
    calendarId: process.env.GOHIGHLEVEL_CALENDAR_ID || '',
    funnelId: process.env.GOHIGHLEVEL_FUNNEL_ID || '',
    campaignId: process.env.GOHIGHLEVEL_CAMPAIGN_ID || ''
  };
};

// Get tags from environment variable or use default
export const getContactTags = (): string[] => {
  const tagsFromEnv = process.env.GOHIGHLEVEL_CONTACT_TAGS;
  if (tagsFromEnv) {
    return tagsFromEnv.split(',').map(tag => tag.trim());
  }
  return ['blanchard-orthodontics']; // Default tag
};

export async function submitToGoHighLevel(formData: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  consent: boolean;
}): Promise<{ success: boolean; message: string }> {
  try {
    const config = getGoHighLevelConfig();
    
    if (!config.webhookUrl) {
      console.log('Go High Level webhook URL not configured. Form submission logged:', {
        ...formData,
        source: 'website_contact_form',
        location: 'blanchard_orthodontics',
        timestamp: new Date().toISOString()
      });
      
      return {
        success: true,
        message: 'Thank you! Your submission has been received!'
      };
    }

    // Split name into first and last name
    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Prepare data for Go High Level webhook
    const goHighLevelData = {
      firstName,
      lastName,
      email: formData.email,
      phone: formData.phone || '',
      subject: formData.subject || 'Website Contact Form',
      message: formData.message || '',
      source: 'Website Contact Form',
      location: 'Blanchard Orthodontics',
      consent: formData.consent,
      // Add tags to the contact
      tags: getContactTags(),
      // Go High Level specific fields
      locationId: config.locationId,
      calendarId: config.calendarId,
      funnelId: config.funnelId,
      campaignId: config.campaignId,
      // Additional metadata
      timestamp: new Date().toISOString(),
      utm_source: 'website',
      utm_medium: 'contact_form',
      utm_campaign: 'orthodontics_consultation'
    };

    console.log('Submitting to Go High Level:', goHighLevelData);

    // Submit to Go High Level webhook
    const response = await fetch(config.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Blanchard-Orthodontics-Website/1.0'
      },
      body: JSON.stringify(goHighLevelData),
    });

    if (!response.ok) {
      console.error('Go High Level webhook error:', response.status, response.statusText);
      throw new Error(`Go High Level webhook error: ${response.status}`);
    }

    const result = await response.text();
    console.log('Go High Level webhook response:', result);

    return {
      success: true,
      message: 'Thank you! Your submission has been received! We\'ll be in touch soon.'
    };

  } catch (error) {
    console.error('Error submitting to Go High Level:', error);
    throw new Error('Failed to submit form to Go High Level');
  }
}

// Alternative: Direct API integration (if you have API access)
export async function submitToGoHighLevelAPI(formData: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  consent: boolean;
}): Promise<{ success: boolean; message: string }> {
  try {
    const apiKey = process.env.GOHIGHLEVEL_API_KEY;
    const locationId = process.env.GOHIGHLEVEL_LOCATION_ID;

    if (!apiKey || !locationId) {
      throw new Error('Go High Level API configuration missing');
    }

    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Go High Level API endpoint for creating contacts
    const response = await fetch(`https://rest.gohighlevel.com/v1/contacts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        locationId,
        firstName,
        lastName,
        email: formData.email,
        phone: formData.phone || '',
        // Add tags to the contact
        tags: getContactTags(),
        // Custom fields - Go High Level uses customField with field IDs
        customField: {
          // You'll need to replace these with your actual custom field IDs from Go High Level
          // To find these: Go to Go High Level → Settings → Custom Fields → Copy the field IDs
          "1": formData.subject || 'Website Contact Form', // Subject field
          "2": formData.message || '', // Message field
          "3": 'Website Contact Form', // Source field
          "4": formData.consent ? 'Yes' : 'No' // Consent field
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Go High Level API error details:', {
        status: response.status,
        statusText: response.statusText,
        errorText: errorText
      });
      throw new Error(`Go High Level API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('Go High Level API response:', result);

    return {
      success: true,
      message: 'Thank you! Your submission has been received! We\'ll be in touch soon.'
    };

  } catch (error) {
    console.error('Error submitting to Go High Level API:', error);
    throw new Error('Failed to submit form to Go High Level');
  }
}
