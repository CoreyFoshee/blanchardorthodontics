// Test script for Go High Level API integration
// Run this to test your API connection

const testFormSubmission = async () => {
  try {
    console.log('🧪 Testing Go High Level API integration...');
    
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '(555) 123-4567',
      subject: 'Test Form Submission',
      message: 'This is a test message from the website form.',
      consent: true
    };

    console.log('📤 Sending test data:', testData);

    const response = await fetch('http://localhost:3000/api/contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    
    console.log('📥 Response status:', response.status);
    console.log('📥 Response data:', result);

    if (response.ok) {
      console.log('✅ Test successful! Check your Go High Level dashboard for the new contact.');
      console.log('🏷️  Contact should have tags: blanchard-orthodontics');
    } else {
      console.log('❌ Test failed:', result.error);
    }

  } catch (error) {
    console.error('❌ Test error:', error.message);
  }
};

// Run the test
testFormSubmission();
