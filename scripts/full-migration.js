const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

// Initialize Sanity client (same as working simple migration)
const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Import your existing data
const fs = require('fs')
const path = require('path')

// Read the TypeScript file and extract the data
const cmsDataPath = path.join(__dirname, '../lib/cms-data.ts')
const cmsDataContent = fs.readFileSync(cmsDataPath, 'utf8')

// Extract the CMS_DATA object using regex
const cmsDataMatch = cmsDataContent.match(/export const CMS_DATA = ({[\s\S]*?});/)
if (!cmsDataMatch) {
  throw new Error('Could not find CMS_DATA in the file')
}

// Evaluate the CMS_DATA object
const CMS_DATA = eval('(' + cmsDataMatch[1] + ')')

async function fullMigration() {
  console.log('🚀 Starting full migration to Sanity...')
  
  try {
    // 1. Migrate Categories
    console.log('📂 Migrating categories...')
    const categoryRefs = {}
    
    for (const category of CMS_DATA.categories) {
      const categoryDoc = {
        _type: 'category',
        name: category.name,
        slug: {
          _type: 'slug',
          current: category.slug
        },
        description: category.description || ''
      }
      
      const createdCategory = await client.create(categoryDoc)
      categoryRefs[category.slug] = createdCategory._id
      console.log(`✅ Created category: ${category.name}`)
    }

    // 2. Migrate Articles
    console.log('📝 Migrating articles...')
    for (const article of CMS_DATA.articles) {
      const articleDoc = {
        _type: 'article',
        title: article.title,
        slug: {
          _type: 'slug',
          current: article.slug
        },
        excerpt: article.excerpt,
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: article.content || 'Content coming soon...'
              }
            ]
          }
        ],
        author: article.author,
        publishedAt: article.publishDate || new Date().toISOString(),
        category: categoryRefs[article.category] ? {
          _type: 'reference',
          _ref: categoryRefs[article.category]
        } : null,
        isPublished: article.isPublished !== false
      }
      
      await client.create(articleDoc)
      console.log(`✅ Created article: ${article.title}`)
    }

    // 3. Migrate Team Members
    console.log('👥 Migrating team members...')
    for (const member of CMS_DATA.teamMembers) {
      const memberDoc = {
        _type: 'teamMember',
        name: member.name,
        slug: {
          _type: 'slug',
          current: member.slug
        },
        title: member.title,
        bio: member.bio,
        isActive: member.isActive !== false,
        isPublished: member.isPublished !== false,
        phone: member.phone || '',
        email: member.email || ''
      }
      
      await client.create(memberDoc)
      console.log(`✅ Created team member: ${member.name}`)
    }

    // 4. Migrate Info Banners
    console.log('📢 Migrating info banners...')
    for (const banner of CMS_DATA.infoBanners) {
      const bannerDoc = {
        _type: 'infoBanner',
        text: banner.text,
        buttonText: banner.buttonText || '',
        buttonUrl: banner.buttonUrl || '',
        isActive: banner.isActive || false
      }
      
      await client.create(bannerDoc)
      console.log(`✅ Created info banner: ${banner.text.substring(0, 50)}...`)
    }

    // 5. Migrate Site Settings
    console.log('⚙️ Migrating site settings...')
    const settingsDoc = {
      _type: 'siteSettings',
      siteName: CMS_DATA.siteSettings.siteName || 'Blanchard Orthodontics',
      siteDescription: CMS_DATA.siteSettings.siteDescription || '',
      contactEmail: CMS_DATA.siteSettings.contactEmail || '',
      contactPhone: CMS_DATA.siteSettings.contactPhone || ''
    }
    
    await client.create(settingsDoc)
    console.log('✅ Created site settings')

    console.log('\n🎉 Full migration completed successfully!')
    console.log('📊 You can now view your content at: https://blanchard-orthdontics.sanity.studio/')

  } catch (error) {
    console.error('❌ Migration failed:', error.message)
    
    if (error.message.includes('Insufficient permissions')) {
      console.log('\n💡 The API token doesn\'t have the right permissions.')
      console.log('   Please check your token has "Editor" permissions.')
    }
  }
}

fullMigration() 