const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function checkExcerptField() {
  console.log('🔍 Checking Excerpt Field...')
  
  try {
    const articles = await client.fetch(`
      *[_type == "article" && isPublished == true] | order(publishedAt desc)[0...3] {
        _id,
        title,
        excerpt
      }
    `)
    
    articles.forEach((article, index) => {
      console.log(`\n📄 Article ${index + 1}: ${article.title}`)
      console.log(`  Excerpt type: ${typeof article.excerpt}`)
      console.log(`  Excerpt value: ${JSON.stringify(article.excerpt, null, 2)}`)
    })

  } catch (error) {
    console.error('❌ Check failed:', error.message)
  }
}

checkExcerptField() 