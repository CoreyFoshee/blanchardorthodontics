const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function testSanityService() {
  console.log('🧪 Testing Sanity Service...')
  
  try {
    // Test the exact query used in the service
    console.log('\n📝 Testing getAllArticles query...')
    const articles = await client.fetch(`
      *[_type == "article" && isPublished == true] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        author,
        publishedAt,
        featuredImage,
        isPublished,
        category->{
          _id,
          name,
          slug
        }
      }
    `)
    
    console.log(`✅ Found ${articles.length} articles`)
    
    if (articles.length > 0) {
      console.log('First article:')
      console.log(`  Title: ${articles[0].title}`)
      console.log(`  Slug: ${articles[0].slug?.current}`)
      console.log(`  Published: ${articles[0].isPublished}`)
      console.log(`  Category: ${articles[0].category?.name}`)
      console.log(`  Excerpt: ${typeof articles[0].excerpt}`)
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

testSanityService() 