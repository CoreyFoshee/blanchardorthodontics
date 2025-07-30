const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function testArticleDisplay() {
  console.log('🧪 Testing Article Display Data...')
  
  try {
    const articles = await client.fetch(`
      *[_type == "article" && isPublished == true] | order(publishedAt desc)[0...3] {
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
    
    console.log(`📄 Found ${articles.length} articles`)
    
    articles.forEach((article, index) => {
      console.log(`\n--- Article ${index + 1} ---`)
      console.log(`Title: ${article.title}`)
      console.log(`Slug: ${article.slug?.current}`)
      console.log(`Author: ${article.author}`)
      console.log(`Published: ${article.publishedAt}`)
      console.log(`Category: ${article.category?.name} (${article.category?.slug?.current})`)
      console.log(`Featured Image: ${article.featuredImage ? 'Present' : 'Missing'}`)
      console.log(`Excerpt Type: ${typeof article.excerpt}`)
      console.log(`Excerpt Preview: ${typeof article.excerpt === 'string' ? article.excerpt.substring(0, 100) + '...' : 'Array of blocks'}`)
    })

  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

testArticleDisplay() 