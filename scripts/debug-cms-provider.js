require('dotenv').config({ path: '.env.local' });

const { createClient } = require('@sanity/client');

// Initialize Sanity client
const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function debugCMSProvider() {
  console.log('🔍 Debugging CMS Provider...');
  
  try {
    console.log('📡 Testing getActiveInfoBanner...');
    const activeBanner = await client.fetch('*[_type == "infoBanner" && isActive == true][0]');
    console.log('✅ Active Banner:', activeBanner);
    
    console.log('\n📡 Testing getArticles...');
    const articles = await client.fetch('*[_type == "article"] | order(publishedAt desc)');
    console.log('✅ Articles count:', articles.length);
    
    console.log('\n📡 Testing getTeamMembers...');
    const teamMembers = await client.fetch('*[_type == "teamMember"]');
    console.log('✅ Team Members count:', teamMembers.length);
    
    console.log('\n📡 Testing getCategories...');
    const categories = await client.fetch('*[_type == "category"]');
    console.log('✅ Categories count:', categories.length);
    
    console.log('\n📡 Testing getSiteSettings...');
    const siteSettings = await client.fetch('*[_type == "siteSettings"][0]');
    console.log('✅ Site Settings:', siteSettings);
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

debugCMSProvider(); 