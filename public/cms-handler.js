// CMS Handler for Blanchard Orthodontics
// This replaces Webflow's CMS functionality

class CMSHandler {
  constructor() {
    this.cmsData = null;
    this.init();
  }

  async init() {
    console.log('🚀 Initializing CMS Handler...');
    
    // Hide empty states immediately to prevent "No items found" from showing
    this.hideEmptyStates();
    
    // Load CMS data
    await this.loadCMSData();
    
    // Initialize CMS functionality
    this.setupInfoBanners();
    this.setupTeamMembers();
    this.setupArticles();
    this.handleURLParameters();
    
    console.log('✅ CMS Handler initialized successfully');
  }

  async loadCMSData() {
    try {
      console.log('📥 Loading CMS data...');
      
      // Check if CMS data is already loaded
      if (window.CMS) {
        console.log('✅ CMS data already loaded');
        this.cmsData = window.CMS;
        return;
      }
      
      // Load the CMS data script
      const script = document.createElement('script');
      script.src = 'data/cms-data.js';
      document.head.appendChild(script);
      
      // Wait for the script to load
      await new Promise((resolve) => {
        script.onload = () => {
          console.log('✅ CMS data script loaded');
          resolve();
        };
        script.onerror = (error) => {
          console.error('❌ Error loading CMS data script:', error);
          resolve();
        };
      });
      
      // Access the global CMS object
      this.cmsData = window.CMS;
      console.log('🎯 CMS object:', this.cmsData);
      
      if (!this.cmsData) {
        console.error('❌ CMS object not found after loading script');
      }
    } catch (error) {
      console.error('❌ Error loading CMS data:', error);
    }
  }

  setupInfoBanners() {
    console.log('🔍 Setting up info banners...');
    
    // Check if CMS data is loaded
    if (!this.cmsData) {
      console.log('⏳ CMS data not loaded yet, retrying in 500ms...');
      setTimeout(() => this.setupInfoBanners(), 500);
      return;
    }
    
    // Try to find info banner in different possible structures
    let bannerContainer = document.querySelector('.info-banner');
    let isWrappedInDynList = false;
    
    // If not found directly, check if it's wrapped in w-dyn-list structure
    if (!bannerContainer) {
      const dynList = document.querySelector('.w-dyn-list');
      if (dynList) {
        bannerContainer = dynList.querySelector('.info-banner');
        isWrappedInDynList = true;
        console.log('📦 Found banner wrapped in w-dyn-list structure');
      }
    }

    if (!bannerContainer) {
      console.log('❌ No info banner container found');
      return;
    }

    console.log('✅ Found banner container:', bannerContainer);

    const activeBanner = this.cmsData.getActiveInfoBanner();
    console.log('🎯 Active banner:', activeBanner);
    
    if (activeBanner) {
      // Show banner
      const textElement = bannerContainer.querySelector('.info-banner-text1');
      const buttonElement = bannerContainer.querySelector('.info-banner-button');
      const emptyState = document.querySelector('.info-banner_empty');
      
      console.log('📝 Text element:', textElement);
      console.log('🔘 Button element:', buttonElement);
      
      if (textElement) {
        textElement.textContent = activeBanner.text;
        textElement.classList.remove('w-dyn-bind-empty');
        console.log('✅ Set banner text:', activeBanner.text);
      }
      
      if (buttonElement) {
        buttonElement.textContent = activeBanner.buttonText;
        buttonElement.href = activeBanner.buttonUrl;
        
        // Hide button if buttonText is empty
        if (!activeBanner.buttonText || activeBanner.buttonText.trim() === '') {
          buttonElement.style.setProperty('display', 'none', 'important');
          console.log('✅ Hidden button (empty text)');
        } else {
          // Override CSS that hides the button
          buttonElement.style.setProperty('display', 'inline-block', 'important');
          buttonElement.style.setProperty('visibility', 'visible', 'important');
          buttonElement.style.setProperty('opacity', '1', 'important');
          console.log('✅ Set button:', activeBanner.buttonText, '->', activeBanner.buttonUrl);
        }
      }
      
      if (emptyState) {
        emptyState.style.display = 'none';
        console.log('✅ Hidden empty state');
      }
      
      // Show the banner container
      bannerContainer.style.setProperty('display', 'flex', 'important');
      bannerContainer.style.setProperty('visibility', 'visible', 'important');
      bannerContainer.style.setProperty('opacity', '1', 'important');
      bannerContainer.style.setProperty('position', 'relative', 'important');
      bannerContainer.style.setProperty('z-index', '1000', 'important');
      
      // If wrapped in dyn-list, also show the dyn-item
      if (isWrappedInDynList) {
        const dynItem = bannerContainer.closest('.w-dyn-item');
        if (dynItem) {
          dynItem.style.display = 'block';
          dynItem.style.visibility = 'visible';
          console.log('✅ Showed dyn-item wrapper');
        }
        
        // Also show the w-dyn-items container
        const dynItems = bannerContainer.closest('.w-dyn-items');
        if (dynItems) {
          dynItems.style.display = 'block';
          dynItems.style.visibility = 'visible';
          console.log('✅ Showed w-dyn-items container');
        }
      }
      
      console.log('🎉 Info banner should now be visible!');
    } else {
      console.log('📭 No active banner found, hiding banner completely');
      
      // Hide banner with comprehensive hiding
      bannerContainer.style.setProperty('display', 'none', 'important');
      bannerContainer.style.setProperty('visibility', 'hidden', 'important');
      bannerContainer.style.setProperty('opacity', '0', 'important');
      bannerContainer.style.setProperty('height', '0', 'important');
      bannerContainer.style.setProperty('overflow', 'hidden', 'important');
      bannerContainer.style.setProperty('margin', '0', 'important');
      bannerContainer.style.setProperty('padding', '0', 'important');
      
      // Hide empty state if it exists
      const emptyState = document.querySelector('.info-banner_empty');
      if (emptyState) {
        emptyState.style.setProperty('display', 'none', 'important');
      }
      
      // If wrapped in dyn-list, also hide the dyn-item and dyn-items containers
      if (isWrappedInDynList) {
        const dynItem = bannerContainer.closest('.w-dyn-item');
        if (dynItem) {
          dynItem.style.setProperty('display', 'none', 'important');
          dynItem.style.setProperty('visibility', 'hidden', 'important');
          dynItem.style.setProperty('height', '0', 'important');
        }
        
        const dynItems = bannerContainer.closest('.w-dyn-items');
        if (dynItems) {
          dynItems.style.setProperty('display', 'none', 'important');
          dynItems.style.setProperty('visibility', 'hidden', 'important');
          dynItems.style.setProperty('height', '0', 'important');
        }
        
        // Also hide the w-dyn-list container if it only contains the banner
        const dynList = document.querySelector('.w-dyn-list');
        if (dynList && dynList.children.length === 1) {
          dynList.style.setProperty('display', 'none', 'important');
          dynList.style.setProperty('visibility', 'hidden', 'important');
          dynList.style.setProperty('height', '0', 'important');
        }
      }
      
      console.log('🎉 Info banner completely hidden!');
    }
  }

  setupArticles() {
    console.log('📝 Setting up articles...');
    
    // Check if CMS data is loaded
    if (!this.cmsData) {
      console.log('⏳ CMS data not loaded yet, retrying in 500ms...');
      setTimeout(() => this.setupArticles(), 500);
      return;
    }
    
    // Find article containers - specifically within the blog listing section
    const blogListingSection = document.querySelector('.blog-listing');
    if (!blogListingSection) {
      console.log('❌ No blog listing section found');
      return;
    }
    
    const articles = this.cmsData.getArticles();
    console.log('🎯 Articles:', articles);
    
    if (articles.length > 0) {
      // Get the w-dyn-items container where we'll add the articles
      const dynItemsContainer = blogListingSection.querySelector('.w-dyn-items');
      if (!dynItemsContainer) {
        console.log('❌ No w-dyn-items container found');
        return;
      }
      
      // Clear existing items
      dynItemsContainer.innerHTML = '';
      
      // Create containers for each article
      articles.forEach((article, index) => {
        const container = this.createArticleContainer(article);
        dynItemsContainer.appendChild(container);
        console.log(`✅ Created container for article ${index + 1}:`, article.title);
      });
      
      // Hide empty state if it exists - specifically within the blog listing
      const emptyStates = blogListingSection.querySelectorAll('.w-dyn-empty');
      emptyStates.forEach(emptyState => {
        emptyState.style.display = 'none';
        console.log('✅ Hidden blog empty state:', emptyState);
      });
      
      console.log('🎉 Articles populated successfully!');
    } else {
      console.log('📭 No articles found');
      // Show empty state if it exists - specifically within the blog listing
      const emptyState = blogListingSection.querySelector('.w-dyn-empty');
      if (emptyState) {
        emptyState.style.display = 'block';
      }
    }
  }

  createArticleContainer(article) {
    console.log('📝 Creating container for article:', article.title);
    
    const formattedDate = this.cmsData.formatDate(article.publishDate);
    
    const container = document.createElement('div');
    container.className = 'collection-item-2 w-dyn-item w-col w-col-4';
    container.setAttribute('role', 'listitem');
    
    // Grid layout is handled by CSS
    
    container.innerHTML = `
      <div class="article-item">
        <a href="detail_article.html?slug=${article.slug}" class="w-inline-block">
          <img height="" loading="lazy" src="${article.featuredImage}" alt="${article.title}" class="article-thumbnail-image">
        </a>
        <div class="post-listing-content">
          <div class="article-listing-category">
            <a href="category.html?slug=${article.categorySlug}" class="article-category-link">${article.category}</a>
          </div>
          <a href="detail_article.html?slug=${article.slug}" class="article-title-link w-inline-block">
            <h2 class="article-title">${article.title}</h2>
          </a>
          <div class="article-listing-meta">
            <div class="article-author">
              <img src="images/form-user.svg" loading="lazy" alt="Blog meta user icon" class="author-icon">
              <div class="article-author-name">${article.author}</div>
            </div>
            <div class="article-date">
              <img src="images/blog-calendar.svg" loading="lazy" alt="Blog calendar meta" class="article-date-icon">
              <div class="article-date-text">${formattedDate}</div>
            </div>
          </div>
          <div class="simple-link">
            <a href="detail_article.html?slug=${article.slug}" class="simple-readmore-link">+  Readmore</a>
            <div class="simple-link-underline"></div>
          </div>
        </div>
      </div>
    `;
    
    console.log('✅ Article container created:', article.title);
    return container;
  }

  setupTeamMembers() {
    console.log('👨‍⚕️ Setting up team members...');
    
    // Check if CMS data is loaded
    if (!this.cmsData) {
      console.log('⏳ CMS data not loaded yet, retrying in 500ms...');
      setTimeout(() => this.setupTeamMembers(), 500);
      return;
    }
    
    // Find team member containers
    const teamContainers = document.querySelectorAll('.doctor-item-section');
    
    if (teamContainers.length === 0) {
      console.log('❌ No team member containers found');
      return;
    }

    console.log('✅ Found team containers:', teamContainers.length);

    const teamMembers = this.cmsData.getTeamMembers();
    console.log('🎯 Team members:', teamMembers);
    
    if (teamMembers.length > 0) {
      // Clear existing items and populate with CMS data
      teamContainers.forEach((container, index) => {
        if (index < teamMembers.length) {
          const member = teamMembers[index];
          this.populateTeamMember(container, member);
        }
      });
      
      // Hide empty state if it exists
      const emptyStates = document.querySelectorAll('.w-dyn-empty');
      emptyStates.forEach(emptyState => {
        emptyState.style.display = 'none';
        console.log('✅ Hidden empty state:', emptyState);
      });
      
      console.log('🎉 Team members populated successfully!');
    } else {
      console.log('📭 No team members found');
      // Show empty state if it exists
      const emptyState = document.querySelector('.w-dyn-empty');
      if (emptyState) {
        emptyState.style.display = 'block';
      }
    }
  }

  populateTeamMember(container, member) {
    console.log('👤 Populating team member:', member.name);
    
    // Update image
    const imageElement = container.querySelector('.doctor-listing-image');
    if (imageElement) {
      imageElement.src = member.image;
      imageElement.alt = member.name;
      imageElement.classList.remove('w-dyn-bind-empty');
      console.log('✅ Set image:', member.image);
    }
    
    // Update name
    const nameElement = container.querySelector('.doctor-title');
    if (nameElement) {
      nameElement.textContent = member.name;
      nameElement.classList.remove('w-dyn-bind-empty');
      console.log('✅ Set name:', member.name);
    }
    
    // Update position
    const positionElement = container.querySelector('.doctor-position');
    if (positionElement) {
      positionElement.textContent = member.position;
      positionElement.classList.remove('w-dyn-bind-empty');
      console.log('✅ Set position:', member.position);
    }
    
    // Update bio
    const bioElement = container.querySelector('.doctor-listing-bio');
    if (bioElement) {
      bioElement.textContent = member.bio;
      bioElement.classList.remove('w-dyn-bind-empty');
      console.log('✅ Set bio:', member.bio);
    }
    
    // Update links
    const imageLink = container.querySelector('.doctor-image-link');
    if (imageLink) {
      imageLink.href = `detail_team.html?slug=${member.slug}`;
      console.log('✅ Set image link:', `detail_team.html?slug=${member.slug}`);
    }
    
    const nameLink = container.querySelector('.single-link-block');
    if (nameLink) {
      nameLink.href = `detail_team.html?slug=${member.slug}`;
      console.log('✅ Set name link:', `detail_team.html?slug=${member.slug}`);
    }
    
    const readMoreLink = container.querySelector('.simple-readmore-link');
    if (readMoreLink) {
      readMoreLink.href = `detail_team.html?slug=${member.slug}`;
      console.log('✅ Set read more link:', `detail_team.html?slug=${member.slug}`);
    }
    
    // Update contact links
    const phoneLink = container.querySelector('.contact-link-wrap');
    if (phoneLink && member.phone) {
      phoneLink.href = `tel:${member.phone}`;
    }
    
    const emailLink = container.querySelectorAll('.contact-link-wrap')[1];
    if (emailLink && member.email) {
      emailLink.href = `mailto:${member.email}`;
    }
    
    console.log('✅ Team member populated:', member.name);
  }

  hideEmptyStates() {
    console.log('🚫 Hiding empty states...');
    
    // Hide all empty states immediately
    const emptyStates = document.querySelectorAll('.w-dyn-empty');
    emptyStates.forEach(emptyState => {
      emptyState.style.setProperty('display', 'none', 'important');
      console.log('✅ Hidden empty state:', emptyState);
    });
    
    // Also hide info banner empty state specifically
    const infoBannerEmpty = document.querySelector('.info-banner_empty');
    if (infoBannerEmpty) {
      infoBannerEmpty.style.setProperty('display', 'none', 'important');
      console.log('✅ Hidden info banner empty state');
    }
  }

  handleURLParameters() {
    console.log('🔗 Handling URL parameters...');
    
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    if (slug) {
      console.log('📝 Found slug in URL:', slug);
      
      // Handle team member detail page
      if (window.location.pathname.includes('team-detail.html') || window.location.pathname.includes('detail_team.html')) {
        console.log('🎯 Loading team detail page for slug:', slug);
        this.loadTeamMemberDetail(slug);
      }
      // Handle article detail page
      else if (window.location.pathname.includes('detail_article.html')) {
        console.log('📝 Loading article detail page for slug:', slug);
        this.loadArticleDetail(slug);
      }
    } else {
      console.log('📝 No slug found in URL');
    }
  }

  loadTeamMemberDetail(slug) {
    console.log('👤 Loading team member detail for slug:', slug);
    
    // Check if CMS data is loaded
    if (!this.cmsData) {
      console.log('⏳ CMS data not loaded yet, retrying in 500ms...');
      setTimeout(() => this.loadTeamMemberDetail(slug), 500);
      return;
    }
    
    console.log('🔍 CMS data loaded, searching for member with slug:', slug);
    console.log('🔍 Available team members:', this.cmsData.getTeamMembers().map(m => m.slug));
    
    const member = this.cmsData.getTeamMemberBySlug(slug);
    if (!member) {
      console.error('❌ Team member not found for slug:', slug);
      window.location.href = '404.html';
      return;
    }

    console.log('✅ Found team member:', member.name);

    // Test if we can find the page elements
    const testImage = document.querySelector('.doctor-single-image');
    const testName = document.querySelector('.doctor-single-name');
    const testStats = document.querySelectorAll('.doctor-meta-value');
    const testSpecialty = document.querySelectorAll('.doctor-single-speciality-text');
    console.log('🔍 Test - Image element found:', !!testImage);
    console.log('🔍 Test - Name element found:', !!testName);
    console.log('🔍 Test - Stats elements found:', testStats.length);
    console.log('🔍 Test - Specialty elements found:', testSpecialty.length);

    // Update page title
    document.title = `${member.name} | Blanchard Orthodontics`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = member.bio;
    }

    // Update member image
    const imageElement = document.querySelector('.doctor-single-image');
    if (imageElement) {
      imageElement.src = member.image;
      imageElement.alt = member.name;
      // Remove the w-dyn-bind-empty class to show the content
      imageElement.classList.remove('w-dyn-bind-empty');
      console.log('✅ Set member image:', member.image);
    }

    // Update member name
    const nameElement = document.querySelector('.doctor-single-name');
    if (nameElement) {
      nameElement.textContent = member.name;
      // Remove the w-dyn-bind-empty class to show the content
      nameElement.classList.remove('w-dyn-bind-empty');
      console.log('✅ Set member name:', member.name);
    }

    // Update member position
    const positionElement = document.querySelector('.doctor-member-job');
    if (positionElement) {
      positionElement.textContent = member.position;
      // Remove the w-dyn-bind-empty class to show the content
      positionElement.classList.remove('w-dyn-bind-empty');
      console.log('✅ Set member position:', member.position);
    }

    // Update full bio
    const bioElement = document.querySelector('.full-bio');
    if (bioElement) {
      bioElement.textContent = member.fullBio;
      // Remove the w-dyn-bind-empty class to show the content
      bioElement.classList.remove('w-dyn-bind-empty');
      console.log('✅ Set member bio:', member.fullBio);
    }

    // Update stats section (Experience, Patients, Certification) - using detail_team.html selectors
    const statElements = document.querySelectorAll('.doctor-meta-value');
    if (statElements.length > 0 && member.experience) {
      statElements[0].textContent = member.experience;
      statElements[0].classList.remove('w-dyn-bind-empty');
      console.log('✅ Set member experience:', member.experience);
    }
    if (statElements.length > 1 && member.patients) {
      statElements[1].textContent = member.patients;
      statElements[1].classList.remove('w-dyn-bind-empty');
      console.log('✅ Set member patients:', member.patients);
    }
    if (statElements.length > 2 && member.certifications && member.certifications.length > 0) {
      statElements[2].textContent = member.certifications[0];
      statElements[2].classList.remove('w-dyn-bind-empty');
      console.log('✅ Set member certification:', member.certifications[0]);
    }

    // Update specialty section (Speciality, Degrees only)
    const specialtyElements = document.querySelectorAll('.doctor-single-speciality-text');
    if (specialtyElements.length > 0) {
      specialtyElements[0].textContent = member.specialties ? member.specialties[0] : 'Orthodontist';
      specialtyElements[0].classList.remove('w-dyn-bind-empty');
      console.log('✅ Set member specialty:', member.specialties ? member.specialties[0] : 'Orthodontist');
    }
    if (specialtyElements.length > 1 && member.education) {
      specialtyElements[1].innerHTML = member.education;
      specialtyElements[1].classList.remove('w-dyn-bind-empty');
      console.log('✅ Set member education:', member.education);
    }

    // Update contact links (phone and email)
    const phoneLink = document.querySelector('.doctor-quicklinks .contact-link-wrap');
    if (phoneLink && member.phone) {
      phoneLink.href = `tel:${member.phone}`;
      console.log('✅ Set phone link:', member.phone);
    }
    
    const emailLink = document.querySelectorAll('.doctor-quicklinks .contact-link-wrap')[1];
    if (emailLink && member.email) {
      emailLink.href = `mailto:${member.email}`;
      console.log('✅ Set email link:', member.email);
    }

    console.log('🎉 Team member detail page populated successfully!');
  }

  loadArticleDetail(slug) {
    console.log('📝 Loading article detail for slug:', slug);
    
    // Check if CMS data is loaded
    if (!this.cmsData) {
      console.log('⏳ CMS data not loaded yet, retrying in 500ms...');
      setTimeout(() => this.loadArticleDetail(slug), 500);
      return;
    }
    
    console.log('🔍 CMS data loaded, searching for article with slug:', slug);
    console.log('🔍 Available articles:', this.cmsData.getArticles().map(a => a.slug));
    
    const article = this.cmsData.getArticleBySlug(slug);
    if (!article) {
      console.error('❌ Article not found for slug:', slug);
      window.location.href = '404.html';
      return;
    }

    console.log('✅ Found article:', article.title);

    // Update page title
    document.title = `${article.title} | Blanchard Orthodontics`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = article.excerpt;
    }

    // Update featured image
    const imageElement = document.querySelector('.article-main-image');
    if (imageElement) {
      imageElement.src = article.featuredImage;
      imageElement.alt = article.title;
      imageElement.classList.remove('w-dyn-bind-empty');
      console.log('✅ Set article image:', article.featuredImage);
    }

    // Update article title
    const titleElement = document.querySelector('.banner-title-text');
    if (titleElement) {
      titleElement.textContent = article.title;
      titleElement.classList.remove('w-dyn-bind-empty');
      console.log('✅ Set article title:', article.title);
    }

    // Update article content
    const contentElement = document.querySelector('.article-single-wrap');
    if (contentElement) {
      const formattedContent = this.convertMarkdownToHTML(article.content);
      contentElement.innerHTML = formattedContent;
      contentElement.classList.remove('w-dyn-bind-empty');
      console.log('✅ Set article content with formatting');
    }

    // Update author
    const authorElement = document.querySelector('.article-author-name');
    if (authorElement) {
      authorElement.textContent = article.author;
      authorElement.classList.remove('w-dyn-bind-empty');
      console.log('✅ Set article author:', article.author);
    }

    // Update publish date
    const dateElement = document.querySelector('.article-date-text');
    if (dateElement) {
      const formattedDate = this.cmsData.formatDate(article.publishDate);
      dateElement.textContent = formattedDate;
      dateElement.classList.remove('w-dyn-bind-empty');
      console.log('✅ Set article date:', formattedDate);
    }

    console.log('🎉 Article detail page populated successfully!');
  }

  convertMarkdownToHTML(markdown) {
    if (!markdown) return '';
    
    let html = markdown;
    
    // First, handle special characters and formatting
    html = html.replace(/‍/g, ''); // Remove zero-width characters
    
    // Convert **bold** to <strong>bold</strong> (handle nested formatting)
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert *italic* to <em>italic</em> (but not if it's part of a list)
    html = html.replace(/(?<!\n)\*(.*?)\*(?!\n)/g, '<em>$1</em>');
    
    // Convert #### headings to <h4>headings</h4>
    html = html.replace(/^#### (.*$)/gm, '<h4>$1</h4>');
    
    // Convert ### headings to <h3>headings</h3>
    html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    
    // Convert ## headings to <h2>headings</h2>
    html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    
    // Convert # headings to <h1>headings</h1>
    html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    
    // Handle bullet points and lists
    html = html.replace(/^• (.*$)/gm, '<li>$1</li>');
    html = html.replace(/^- (.*$)/gm, '<li>$1</li>');
    
    // Wrap consecutive list items in <ul> tags
    html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
    
    // Clean up multiple <ul> tags
    html = html.replace(/<\/ul>\s*<ul>/g, '');
    
    // Handle paragraphs - split by double line breaks
    const paragraphs = html.split(/\n\n+/);
    html = paragraphs.map(paragraph => {
      paragraph = paragraph.trim();
      if (!paragraph) return '';
      
      // If it's already a heading, list, or contains HTML tags, don't wrap in p tags
      if (paragraph.startsWith('<h') || paragraph.startsWith('<ul>') || paragraph.startsWith('<li>') || paragraph.includes('<')) {
        return paragraph;
      }
      
      // Convert single line breaks to <br> tags within paragraphs
      paragraph = paragraph.replace(/\n/g, '<br>');
      
      return `<p>${paragraph}</p>`;
    }).join('');
    
    // Clean up any empty paragraphs
    html = html.replace(/<p><\/p>/g, '');
    html = html.replace(/<p>\s*<\/p>/g, '');
    
    // Clean up any double <br> tags
    html = html.replace(/<br><br>/g, '<br>');
    
    return html;
  }
}

// Initialize CMS Handler when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CMSHandler();
}); 