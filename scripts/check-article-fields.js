const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function checkArticleFields() {
  console.log('🔍 Checking Article Fields...')
  
  try {
    // Get the first article with all fields
    const article = await client.fetch('*[_type == "article"][0]')
    
    if (article) {
      console.log('📄 First article raw data:')
      console.log(JSON.stringify(article, null, 2))
      
      console.log('\n📋 Field summary:')
      console.log(`  _id: ${article._id}`)
      console.log(`  title: ${article.title}`)
      console.log(`  slug: ${JSON.stringify(article.slug)}`)
      console.log(`  isPublished: ${article.isPublished}`)
      console.log(`  publishedAt: ${article.publishedAt}`)
      console.log(`  author: ${article.author}`)
      console.log(`  category: ${JSON.stringify(article.category)}`)
      console.log(`  excerpt: ${JSON.stringify(article.excerpt)}`)
      console.log(`  content: ${article.content ? 'present' : 'missing'}`)
      console.log(`  featuredImage: ${article.featuredImage ? 'present' : 'missing'}`)
    } else {
      console.log('❌ No articles found')
    }

  } catch (error) {
    console.error('❌ Check failed:', error.message)
  }
}

checkArticleFields() 