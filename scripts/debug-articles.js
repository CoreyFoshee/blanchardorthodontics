const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function debugArticles() {
  console.log('🔍 Debugging Articles Data...')
  
  try {
    // Test 1: Get all articles (including unpublished)
    console.log('\n📝 All articles (including unpublished):')
    const allArticles = await client.fetch('*[_type == "article"] | order(publishedAt desc)')
    console.log(`Found ${allArticles.length} total articles`)
    
    allArticles.forEach((article, index) => {
      console.log(`  ${index + 1}. "${article.title}"`)
      console.log(`     Slug: ${article.slug?.current}`)
      console.log(`     Published: ${article.isPublished}`)
      console.log(`     Published At: ${article.publishedAt}`)
      console.log(`     Category: ${article.category?.name}`)
      console.log('')
    })

    // Test 2: Get only published articles
    console.log('\n📝 Published articles only:')
    const publishedArticles = await client.fetch('*[_type == "article" && isPublished == true] | order(publishedAt desc)')
    console.log(`Found ${publishedArticles.length} published articles`)
    
    publishedArticles.forEach((article, index) => {
      console.log(`  ${index + 1}. "${article.title}"`)
      console.log(`     Slug: ${article.slug?.current}`)
      console.log(`     Published: ${article.isPublished}`)
      console.log(`     Published At: ${article.publishedAt}`)
      console.log(`     Category: ${article.category?.name}`)
      console.log('')
    })

    // Test 3: Check the exact query used in the app
    console.log('\n📝 Testing the exact query from sanity.config.ts:')
    const appQueryArticles = await client.fetch(`
      *[_type == "article" && isPublished == true] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        author,
        publishedAt,
        featuredImage,
        category->{
          name,
          slug
        }
      }
    `)
    console.log(`Found ${appQueryArticles.length} articles with app query`)
    
    if (appQueryArticles.length > 0) {
      console.log('First article structure:')
      console.log(JSON.stringify(appQueryArticles[0], null, 2))
    }

  } catch (error) {
    console.error('❌ Debug failed:', error.message)
  }
}

debugArticles() 