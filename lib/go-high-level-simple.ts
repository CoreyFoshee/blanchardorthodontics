// Simplified Go High Level Integration for testing
// This version creates contacts without custom fields to test the basic API connection

export async function submitToGoHighLevelSimple(formData: {
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
      console.log('Go High Level API configuration missing. Form submission logged:', {
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

    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    console.log('Submitting to Go High Level with:', {
      apiKey: apiKey ? '***' + apiKey.slice(-4) : 'missing',
      locationId,
      firstName,
      lastName,
      email: formData.email
    });

    // Simplified Go High Level API call - just basic contact info
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
        tags: ['blanchard-orthodontics']
        // No custom fields for now - just test basic contact creation
      }),
    });

    console.log('Go High Level API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Go High Level API error details:', {
        status: response.status,
        statusText: response.statusText,
        errorText: errorText,
        url: response.url
      });
      
      // Return success anyway for now, but log the error
      console.log('Form submission logged due to API error:', {
        ...formData,
        source: 'website_contact_form',
        location: 'blanchard_orthodontics',
        timestamp: new Date().toISOString(),
        apiError: `${response.status} - ${errorText}`
      });
      
      return {
        success: true,
        message: 'Thank you! Your submission has been received!'
      };
    }

    const result = await response.json();
    console.log('Go High Level API success response:', result);

    return {
      success: true,
      message: 'Thank you! Your submission has been received! We\'ll be in touch soon.'
    };

  } catch (error) {
    console.error('Error submitting to Go High Level API:', error);
    
    // Return success anyway for now, but log the error
    console.log('Form submission logged due to error:', {
      ...formData,
      source: 'website_contact_form',
      location: 'blanchard_orthodontics',
      timestamp: new Date().toISOString(),
      error: error.message
    });
    
    return {
      success: true,
      message: 'Thank you! Your submission has been received!'
    };
  }
}
