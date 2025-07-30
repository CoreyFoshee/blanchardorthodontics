const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function debugArticleContent() {
  console.log('📄 Debugging Article Content...')
  
  try {
    // Get the first article with content
    const article = await client.fetch(`
      *[_type == "article" && isPublished == true] | order(publishedAt desc)[0] {
        _id,
        title,
        slug,
        content,
        excerpt,
        author,
        publishedAt,
        featuredImage{
          asset->{
            _id,
            url
          }
        }
      }
    `)
    
    console.log(`\n--- Article: ${article.title} ---`)
    console.log(`Slug: ${article.slug?.current}`)
    console.log(`Content Type: ${typeof article.content}`)
    console.log(`Content Length: ${Array.isArray(article.content) ? article.content.length : 'Not an array'}`)
    
    if (Array.isArray(article.content)) {
      console.log(`Content Preview:`, JSON.stringify(article.content[0], null, 2))
    } else {
      console.log(`Content: ${article.content}`)
    }
    
    console.log(`\nExcerpt Type: ${typeof article.excerpt}`)
    if (typeof article.excerpt === 'string') {
      console.log(`Excerpt: ${article.excerpt.substring(0, 100)}...`)
    } else {
      console.log(`Excerpt: Array of ${article.excerpt?.length || 0} blocks`)
    }

  } catch (error) {
    console.error('❌ Debug failed:', error.message)
  }
}

debugArticleContent() 