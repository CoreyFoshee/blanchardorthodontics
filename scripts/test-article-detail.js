const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function testArticleDetail() {
  console.log('📄 Testing Article Detail Data...')
  
  try {
    // Get the first article's slug
    const firstArticle = await client.fetch(`
      *[_type == "article" && isPublished == true] | order(publishedAt desc)[0] {
        slug
      }
    `)
    
    if (!firstArticle) {
      console.log('❌ No articles found')
      return
    }
    
    const slug = firstArticle.slug.current
    console.log(`Testing with slug: ${slug}`)
    
    // Get the full article detail
    const article = await client.fetch(`
      *[_type == "article" && slug.current == $slug && isPublished == true][0] {
        _id,
        title,
        slug,
        excerpt,
        content,
        author,
        publishedAt,
        featuredImage{
          asset->{
            _id,
            url
          }
        },
        isPublished,
        category->{
          _id,
          name,
          slug
        }
      }
    `, { slug })
    
    if (!article) {
      console.log('❌ Article not found')
      return
    }
    
    console.log(`\n--- Article Detail: ${article.title} ---`)
    console.log(`Slug: ${article.slug?.current}`)
    console.log(`Author: ${article.author}`)
    console.log(`Published: ${article.publishedAt}`)
    console.log(`Category: ${article.category?.name}`)
    console.log(`Content Type: ${typeof article.content}`)
    console.log(`Content Length: ${Array.isArray(article.content) ? article.content.length : 'Not an array'}`)
    console.log(`Featured Image: ${article.featuredImage?.asset?.url ? 'Present' : 'Missing'}`)
    
    if (article.content) {
      console.log(`Content Preview:`, JSON.stringify(article.content[0], null, 2))
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

testArticleDetail() 