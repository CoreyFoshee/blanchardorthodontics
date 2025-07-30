# Blanchard Orthodontics - Next.js + Sanity CMS

A modern, responsive website for Blanchard Orthodontics built with Next.js 14, React, and Sanity CMS.

## 🚀 Features

- **Next.js 14** with App Router
- **React 18** with TypeScript
- **Sanity CMS** for content management
- **Responsive Design** with Webflow CSS
- **SEO Optimized** with metadata
- **Performance Optimized** with image optimization

## 📁 Project Structure

```
blanchard-orthodontics-next/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── article/        # Blog page
│   │   ├── locations/      # Locations page
│   │   ├── service/        # Services page
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable React components
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   └── styles/            # CSS files
├── lib/
│   └── sanity.config.ts   # Sanity CMS configuration
├── public/               # Static assets
│   ├── images/          # Image files
│   └── fonts/           # Font files
└── package.json
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### 3. Sanity CMS Setup

1. **Create a Sanity Project:**
   ```bash
   npm create sanity@latest
   ```

2. **Configure your Sanity Studio:**
   - Choose your project name
   - Select "Clean project with no predefined schemas"
   - Choose your preferred dataset

3. **Get your Project ID:**
   - Go to [sanity.io/manage](https://sanity.io/manage)
   - Select your project
   - Copy the Project ID

4. **Create API Token:**
   - In your Sanity project settings
   - Go to API section
   - Create a new token with read permissions

### 4. Sanity Schema Setup

Create the following content types in your Sanity Studio:

#### Post Schema (for blog)
```javascript
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    }
  ]
}
```

#### Service Schema
```javascript
export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    }
  ]
}
```

### 5. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

## 🎨 Customization

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Import and use the Header/Footer components from layout

### Styling

- Main styles are in `src/styles/blanchard-orthodontics.webflow.css`
- Component-specific styles can be added as CSS modules
- Global styles in `src/app/globals.css`

### Content Management

- Blog posts: Manage through Sanity Studio
- Services: Update through Sanity Studio
- Static content: Edit directly in the component files

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📝 Content Types

### Blog Posts
- Title, slug, excerpt
- Main image with hotspot
- Rich text body content
- Author and categories

### Services
- Title, description
- Main image
- Rich text content
- Order for display

### Locations
- Name, address, phone, email
- Hours of operation
- Map URL
- Location image

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting (recommended)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary to Blanchard Orthodontics.

## 🆘 Support

For technical support or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review the [Sanity documentation](https://www.sanity.io/docs)
- Contact the development team

---

**Built with ❤️ for Blanchard Orthodontics**
