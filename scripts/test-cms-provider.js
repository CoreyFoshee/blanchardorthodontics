const sanityCMSService = require('../lib/sanity-cms-service.ts')

async function testCMSProvider() {
  console.log('🧪 Testing CMS Provider Methods...')
  
  try {
    // Test 1: Get articles
    console.log('\n📝 Testing getArticles()...')
    const articles = await sanityCMSService.getArticles()
    console.log(`✅ Found ${articles.length} articles`)
    
    if (articles.length > 0) {
      console.log('First article:')
      console.log(`  Title: ${articles[0].title}`)
      console.log(`  Slug: ${articles[0].slug?.current}`)
      console.log(`  Published: ${articles[0].isPublished}`)
      console.log(`  Category: ${articles[0].category?.name}`)
    }

    // Test 2: Get categories
    console.log('\n📂 Testing getCategories()...')
    const categories = await sanityCMSService.getCategories()
    console.log(`✅ Found ${categories.length} categories`)
    
    if (categories.length > 0) {
      categories.forEach(cat => {
        console.log(`  - ${cat.name} (${cat.slug?.current})`)
      })
    }

    // Test 3: Get active info banner
    console.log('\n📢 Testing getActiveInfoBanner()...')
    const activeBanner = await sanityCMSService.getActiveInfoBanner()
    if (activeBanner) {
      console.log(`✅ Found active banner: "${activeBanner.text.substring(0, 50)}..."`)
    } else {
      console.log('ℹ️ No active banner found')
    }

    // Test 4: Get team members
    console.log('\n👥 Testing getTeamMembers()...')
    const teamMembers = await sanityCMSService.getTeamMembers()
    console.log(`✅ Found ${teamMembers.length} team members`)
    
    if (teamMembers.length > 0) {
      teamMembers.forEach(member => {
        console.log(`  - ${member.name} (${member.title})`)
      })
    }

    // Test 5: Get site settings
    console.log('\n⚙️ Testing getSiteSettings()...')
    const siteSettings = await sanityCMSService.getSiteSettings()
    if (siteSettings) {
      console.log(`✅ Found site settings: ${siteSettings.siteName}`)
    } else {
      console.log('ℹ️ No site settings found')
    }

    console.log('\n🎉 All CMS Provider tests passed!')

  } catch (error) {
    console.error('❌ CMS Provider test failed:', error.message)
  }
}

testCMSProvider() 