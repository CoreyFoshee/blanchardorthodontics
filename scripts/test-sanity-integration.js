const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function testSanityIntegration() {
  console.log('🧪 Testing Sanity Integration...')
  
  try {
    // Test 1: Fetch articles
    console.log('\n📝 Testing articles fetch...')
    const articles = await client.fetch('*[_type == "article" && isPublished == true] | order(publishedAt desc)')
    console.log(`✅ Found ${articles.length} published articles`)
    
    if (articles.length > 0) {
      const firstArticle = articles[0]
      console.log(`   First article: "${firstArticle.title}"`)
      console.log(`   Slug: ${firstArticle.slug?.current}`)
      console.log(`   Author: ${firstArticle.author}`)
      console.log(`   Published: ${firstArticle.publishedAt}`)
    }

    // Test 2: Fetch categories
    console.log('\n📂 Testing categories fetch...')
    const categories = await client.fetch('*[_type == "category"]')
    console.log(`✅ Found ${categories.length} categories`)
    
    if (categories.length > 0) {
      categories.forEach(cat => {
        console.log(`   - ${cat.name} (${cat.slug?.current})`)
      })
    }

    // Test 3: Fetch active info banner
    console.log('\n📢 Testing info banner fetch...')
    const activeBanner = await client.fetch('*[_type == "infoBanner" && isActive == true][0]')
    if (activeBanner) {
      console.log(`✅ Found active info banner: "${activeBanner.text.substring(0, 50)}..."`)
    } else {
      console.log('ℹ️ No active info banner found')
    }

    // Test 4: Fetch team members
    console.log('\n👥 Testing team members fetch...')
    const teamMembers = await client.fetch('*[_type == "teamMember" && isPublished == true]')
    console.log(`✅ Found ${teamMembers.length} published team members`)
    
    if (teamMembers.length > 0) {
      teamMembers.forEach(member => {
        console.log(`   - ${member.name} (${member.title})`)
      })
    }

    // Test 5: Fetch site settings
    console.log('\n⚙️ Testing site settings fetch...')
    const siteSettings = await client.fetch('*[_type == "siteSettings"][0]')
    if (siteSettings) {
      console.log(`✅ Found site settings: ${siteSettings.siteName}`)
    } else {
      console.log('ℹ️ No site settings found')
    }

    console.log('\n🎉 All Sanity integration tests passed!')
    console.log('🌐 Your Next.js app should now be using Sanity data.')
    console.log('📱 Visit http://localhost:3000 to see your updated site.')

  } catch (error) {
    console.error('❌ Sanity integration test failed:', error.message)
    console.log('💡 Make sure your .env.local file has the correct SANITY_API_TOKEN')
  }
}

testSanityIntegration() 