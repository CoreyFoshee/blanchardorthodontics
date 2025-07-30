const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function testImageUrls() {
  console.log('🖼️  Testing Image URL Resolution...')
  
  try {
    const articles = await client.fetch(`
      *[_type == "article" && isPublished == true] | order(publishedAt desc)[0...3] {
        _id,
        title,
        slug,
        featuredImage{
          asset->{
            _id,
            url
          }
        }
      }
    `)
    
    console.log(`📄 Found ${articles.length} articles`)
    
    articles.forEach((article, index) => {
      console.log(`\n--- Article ${index + 1}: ${article.title} ---`)
      
      if (article.featuredImage && article.featuredImage.asset) {
        console.log(`✅ Image URL: ${article.featuredImage.asset.url}`)
        console.log(`✅ Asset ID: ${article.featuredImage.asset._id}`)
      } else {
        console.log(`❌ No featured image`)
      }
    })

  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

testImageUrls() 