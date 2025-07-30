const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

// Initialize Sanity client
const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function testConnection() {
  console.log('🔍 Testing Sanity connection...')
  
  try {
    // Test 1: Check if we can connect with a simple query
    console.log('📡 Testing basic connection...')
    const result = await client.fetch('*[_type == "article"][0...1]')
    console.log('✅ Connection successful!')
    
    // Test 2: Check what content types exist
    console.log('📋 Checking available content types...')
    const allDocs = await client.fetch('*[_type in ["article", "category", "teamMember", "infoBanner", "siteSettings"]]')
    
    const typeCounts = {}
    allDocs.forEach(item => {
      typeCounts[item._type] = (typeCounts[item._type] || 0) + 1
    })
    
    console.log('📊 Content found:')
    Object.entries(typeCounts).forEach(([type, count]) => {
      console.log(`   ${type}: ${count} items`)
    })
    
    if (Object.keys(typeCounts).length === 0) {
      console.log('📝 No content found yet - this is normal for a new project!')
    }
    
    console.log('\n🎉 All tests passed! Your Sanity connection is working perfectly.')
    console.log('🌐 You can now access your studio at: https://blanchard-orthdontics.sanity.studio/')
    
  } catch (error) {
    console.error('❌ Connection test failed:', error.message)
    
    if (error.message && error.message.includes('Unauthorized')) {
      console.log('💡 This usually means your API token is incorrect or has wrong permissions.')
      console.log('   Make sure your token starts with "sk" and has "Editor" permissions.')
    } else if (error.message && error.message.includes('Project not found')) {
      console.log('💡 This means the project ID is incorrect.')
    } else {
      console.log('💡 Error details:', error)
    }
  }
}

testConnection() 