const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function debugFeaturedImages() {
  console.log('🖼️  Debugging Featured Images...')
  
  try {
    const articles = await client.fetch(`
      *[_type == "article" && isPublished == true] | order(publishedAt desc)[0...3] {
        _id,
        title,
        slug,
        featuredImage
      }
    `)
    
    console.log(`📄 Found ${articles.length} articles`)
    
    articles.forEach((article, index) => {
      console.log(`\n--- Article ${index + 1}: ${article.title} ---`)
      console.log(`Featured Image Data:`, JSON.stringify(article.featuredImage, null, 2))
      
      if (article.featuredImage) {
        console.log(`Image Type: ${article.featuredImage._type}`)
        console.log(`Asset ID: ${article.featuredImage.asset?._ref}`)
        console.log(`Asset URL: ${article.featuredImage.asset?.url}`)
      } else {
        console.log(`No featured image`)
      }
    })

  } catch (error) {
    console.error('❌ Debug failed:', error.message)
  }
}

debugFeaturedImages() 