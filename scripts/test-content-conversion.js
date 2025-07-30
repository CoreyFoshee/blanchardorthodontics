const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

const client = createClient({
  projectId: 'sln6nq50',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Simple version of the conversion function for testing
function convertBlockContentToHTML(blocks) {
  if (!blocks) return ''
  
  // Handle case where content is a single block object
  if (!Array.isArray(blocks)) {
    blocks = [blocks]
  }
  
  return blocks.map((block) => {
    if (block._type === 'block') {
      let html = ''
      
      // Handle different block styles
      if (block.style === 'h1') html += '<h1>'
      else if (block.style === 'h2') html += '<h2>'
      else if (block.style === 'h3') html += '<h3>'
      else if (block.style === 'h4') html += '<h4>'
      else if (block.style === 'h5') html += '<h5>'
      else if (block.style === 'h6') html += '<h6>'
      else if (block.style === 'blockquote') html += '<blockquote>'
      else html += '<p>'
      
      // Process children (text spans)
      if (block.children) {
        block.children.forEach((child) => {
          let text = child.text || ''
          
          // Handle marks (bold, italic, etc.)
          if (child.marks) {
            child.marks.forEach((mark) => {
              if (mark === 'strong') text = `<strong>${text}</strong>`
              else if (mark === 'em') text = `<em>${text}</em>`
              else if (mark === 'underline') text = `<u>${text}</u>`
              else if (mark === 'code') text = `<code>${text}</code>`
            })
          }
          
          html += text
        })
      }
      
      // Close the tag
      if (block.style === 'h1') html += '</h1>'
      else if (block.style === 'h2') html += '</h2>'
      else if (block.style === 'h3') html += '</h3>'
      else if (block.style === 'h4') html += '</h4>'
      else if (block.style === 'h5') html += '</h5>'
      else if (block.style === 'h6') html += '</h6>'
      else if (block.style === 'blockquote') html += '</blockquote>'
      else html += '</p>'
      
      return html
    }
    
    return ''
  }).join('')
}

async function testContentConversion() {
  console.log('🧪 Testing Content Conversion...')
  
  try {
    const article = await client.fetch(`
      *[_type == "article" && isPublished == true] | order(publishedAt desc)[0] {
        _id,
        title,
        slug,
        content
      }
    `)
    
    console.log(`\n--- Article: ${article.title} ---`)
    console.log(`Content Type: ${typeof article.content}`)
    console.log(`Is Array: ${Array.isArray(article.content)}`)
    
    const html = convertBlockContentToHTML(article.content)
    console.log(`\nConverted HTML:`)
    console.log(html)
    
    if (html) {
      console.log(`\n✅ Content conversion successful!`)
    } else {
      console.log(`\n❌ Content conversion failed - no HTML generated`)
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

testContentConversion() 