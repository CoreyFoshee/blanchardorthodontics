const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

// Initialize Sanity client
const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // You'll need to set this
  useCdn: false,
})

// Import your existing data - using a different approach for TypeScript files
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

// Evaluate the CMS_DATA object (this is safe since it's our own file)
const CMS_DATA = eval('(' + cmsDataMatch[1] + ')')

async function migrateToSanity() {
  console.log('🚀 Starting migration to Sanity...')

  try {
    // 1. Migrate Categories
    console.log('📂 Migrating categories...')
    const categoryMap = {} // Store category IDs for reference
    
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
      categoryMap[category.slug] = createdCategory._id
      console.log(`✅ Created category: ${category.name} (ID: ${createdCategory._id})`)
    }

    // 2. Migrate Articles
    console.log('📝 Migrating articles...')
    for (const article of CMS_DATA.articles) {
      // Find the category reference
      const categoryId = categoryMap[article.category]
      
      // Convert excerpt to Portable Text array
      const excerptBlocks = [
        {
          _key: `excerpt-${article.slug}`,
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: `excerpt-text-${article.slug}`,
              _type: 'span',
              text: article.excerpt || 'Excerpt coming soon...'
            }
          ]
        }
      ]

      // Convert content to Portable Text array
      const contentBlocks = [
        {
          _key: `content-${article.slug}`,
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: `content-text-${article.slug}`,
              _type: 'span',
              text: article.content || 'Content coming soon...'
            }
          ]
        }
      ]

      const articleDoc = {
        _type: 'article',
        title: article.title,
        slug: {
          _type: 'slug',
          current: article.slug
        },
        excerpt: excerptBlocks,
        content: contentBlocks,
        author: article.author,
        publishedAt: article.publishedAt || new Date().toISOString(),
        category: categoryId ? {
          _type: 'reference',
          _ref: categoryId
        } : null,
        featuredImage: null, // Will be updated later with proper image uploads
        isPublished: true
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
        image: null, // Will be updated later with proper image uploads
        phone: member.phone || '',
        email: member.email || '',
        isActive: member.isActive !== false,
        isPublished: true
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
      contactPhone: CMS_DATA.siteSettings.contactPhone || '',
      address: CMS_DATA.siteSettings.address || '',
      socialMedia: {
        facebook: CMS_DATA.siteSettings.socialMedia?.facebook || '',
        twitter: CMS_DATA.siteSettings.socialMedia?.twitter || '',
        instagram: CMS_DATA.siteSettings.socialMedia?.instagram || '',
        linkedin: CMS_DATA.siteSettings.socialMedia?.linkedin || ''
      },
      officeHours: {
        monday: CMS_DATA.siteSettings.officeHours?.monday || '',
        tuesday: CMS_DATA.siteSettings.officeHours?.tuesday || '',
        wednesday: CMS_DATA.siteSettings.officeHours?.wednesday || '',
        thursday: CMS_DATA.siteSettings.officeHours?.thursday || '',
        friday: CMS_DATA.siteSettings.officeHours?.friday || '',
        saturday: CMS_DATA.siteSettings.officeHours?.saturday || '',
        sunday: CMS_DATA.siteSettings.officeHours?.sunday || ''
      }
    }
    
    await client.create(settingsDoc)
    console.log('✅ Created site settings')

    console.log('🎉 Migration completed successfully!')
    console.log('📊 You can now view your content at: https://blanchard-orthdontics.sanity.studio/')

  } catch (error) {
    console.error('❌ Migration failed:', error)
  }
}

// Run the migration
migrateToSanity() 