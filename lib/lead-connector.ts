// Lead Connector Configuration
// Replace this with your actual lead connector service integration

export interface LeadConnectorConfig {
  apiKey: string;
  endpoint: string;
  source: string;
  location: string;
}

export interface FormSubmission {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  consent: boolean;
  source: string;
  location: string;
  timestamp: string;
}

// Default configuration - replace with your actual lead connector details
export const leadConnectorConfig: LeadConnectorConfig = {
  apiKey: process.env.LEAD_CONNECTOR_API_KEY || '',
  endpoint: process.env.LEAD_CONNECTOR_ENDPOINT || '',
  source: 'website_contact_form',
  location: 'blanchard_orthodontics'
};

export async function submitToLeadConnector(formData: Omit<FormSubmission, 'source' | 'location' | 'timestamp'>): Promise<{ success: boolean; message: string }> {
  try {
    // If no lead connector is configured, just log the submission
    if (!leadConnectorConfig.apiKey || !leadConnectorConfig.endpoint) {
      console.log('Lead connector not configured. Form submission logged:', {
        ...formData,
        source: leadConnectorConfig.source,
        location: leadConnectorConfig.location,
        timestamp: new Date().toISOString()
      });
      
      return {
        success: true,
        message: 'Thank you! Your submission has been received!'
      };
    }

    // Example integration with a lead connector service
    // Replace this with your actual lead connector API call
    const response = await fetch(leadConnectorConfig.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${leadConnectorConfig.apiKey}`,
      },
      body: JSON.stringify({
        ...formData,
        source: leadConnectorConfig.source,
        location: leadConnectorConfig.location,
        timestamp: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error(`Lead connector API error: ${response.status}`);
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

// Popular Lead Connector Services Integration Examples:

// Example 1: HubSpot
export async function submitToHubSpot(formData: Omit<FormSubmission, 'source' | 'location' | 'timestamp'>) {
  const hubspotConfig = {
    apiKey: process.env.HUBSPOT_API_KEY || '',
    portalId: process.env.HUBSPOT_PORTAL_ID || '',
    formId: process.env.HUBSPOT_FORM_ID || ''
  };

  if (!hubspotConfig.apiKey || !hubspotConfig.portalId || !hubspotConfig.formId) {
    throw new Error('HubSpot configuration missing');
  }

  const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${hubspotConfig.portalId}/${hubspotConfig.formId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: [
        { name: 'firstname', value: formData.name.split(' ')[0] },
        { name: 'lastname', value: formData.name.split(' ').slice(1).join(' ') },
        { name: 'email', value: formData.email },
        { name: 'phone', value: formData.phone || '' },
        { name: 'subject', value: formData.subject || '' },
        { name: 'message', value: formData.message || '' }
      ],
      context: {
        pageUri: 'https://blanchardorthodontics.com',
        pageName: 'Contact Form'
      }
    }),
  });

  return response.ok;
}

// Example 2: Mailchimp
export async function submitToMailchimp(formData: Omit<FormSubmission, 'source' | 'location' | 'timestamp'>) {
  const mailchimpConfig = {
    apiKey: process.env.MAILCHIMP_API_KEY || '',
    listId: process.env.MAILCHIMP_LIST_ID || '',
    server: process.env.MAILCHIMP_SERVER || ''
  };

  if (!mailchimpConfig.apiKey || !mailchimpConfig.listId || !mailchimpConfig.server) {
    throw new Error('Mailchimp configuration missing');
  }

  const response = await fetch(`https://${mailchimpConfig.server}.api.mailchimp.com/3.0/lists/${mailchimpConfig.listId}/members`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${mailchimpConfig.apiKey}`,
    },
    body: JSON.stringify({
      email_address: formData.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: formData.name.split(' ')[0],
        LNAME: formData.name.split(' ').slice(1).join(' '),
        PHONE: formData.phone || '',
        SUBJECT: formData.subject || '',
        MESSAGE: formData.message || ''
      }
    }),
  });

  return response.ok;
}

// Example 3: ConvertKit
export async function submitToConvertKit(formData: Omit<FormSubmission, 'source' | 'location' | 'timestamp'>) {
  const convertkitConfig = {
    apiKey: process.env.CONVERTKIT_API_KEY || '',
    formId: process.env.CONVERTKIT_FORM_ID || ''
  };

  if (!convertkitConfig.apiKey || !convertkitConfig.formId) {
    throw new Error('ConvertKit configuration missing');
  }

  const response = await fetch(`https://api.convertkit.com/v3/forms/${convertkitConfig.formId}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_key: convertkitConfig.apiKey,
      email: formData.email,
      first_name: formData.name.split(' ')[0],
      fields: {
        last_name: formData.name.split(' ').slice(1).join(' '),
        phone: formData.phone || '',
        subject: formData.subject || '',
        message: formData.message || ''
      }
    }),
  });

  return response.ok;
}
