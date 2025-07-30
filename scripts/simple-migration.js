const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

// Initialize Sanity client
const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Sample data to test with
const testData = {
  categories: [
    {
      name: "Braces",
      slug: "braces",
      description: "Information about traditional braces treatment"
    }
  ],
  articles: [
    {
      title: "Test Article",
      slug: "test-article",
      excerpt: "This is a test article for migration",
      content: "This is the content of the test article.",
      author: "Dr. Katelyn Blanchard",
      publishedAt: new Date().toISOString(),
      category: "braces",
      featuredImage: null,
      isPublished: true
    }
  ]
}

async function simpleMigration() {
  console.log('🚀 Starting simple migration test...')
  
  try {
    // Test 1: Create a simple category
    console.log('📂 Creating test category...')
    const categoryDoc = {
      _type: 'category',
      name: testData.categories[0].name,
      slug: {
        _type: 'slug',
        current: testData.categories[0].slug
      },
      description: testData.categories[0].description
    }
    
    const createdCategory = await client.create(categoryDoc)
    console.log('✅ Category created:', createdCategory._id)
    
    // Test 2: Create a simple article
    console.log('📝 Creating test article...')
    const articleDoc = {
      _type: 'article',
      title: testData.articles[0].title,
      slug: {
        _type: 'slug',
        current: testData.articles[0].slug
      },
      excerpt: testData.articles[0].excerpt,
      content: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: testData.articles[0].content
            }
          ]
        }
      ],
      author: testData.articles[0].author,
      publishedAt: testData.articles[0].publishedAt,
      category: {
        _type: 'reference',
        _ref: createdCategory._id
      },
      isPublished: true
    }
    
    const createdArticle = await client.create(articleDoc)
    console.log('✅ Article created:', createdArticle._id)
    
    console.log('\n🎉 Simple migration test successful!')
    console.log('🌐 Check your content at: https://blanchard-orthdontics.sanity.studio/')
    
  } catch (error) {
    console.error('❌ Migration test failed:', error.message)
    
    if (error.message.includes('Insufficient permissions')) {
      console.log('\n💡 The API token still doesn\'t have the right permissions.')
      console.log('   Please check:')
      console.log('   1. Go to https://www.sanity.io/manage/project/sln6nq50')
      console.log('   2. Click "API" in the sidebar')
      console.log('   3. Make sure your token has "Editor" permissions (not "Viewer")')
      console.log('   4. The token should allow "create", "update", and "delete" operations')
    }
  }
}

simpleMigration() 