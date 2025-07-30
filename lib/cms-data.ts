// CMS Data for Blanchard Orthodontics
// This replaces Webflow's CMS functionality

export interface InfoBanner {
  id: number;
  text: string;
  buttonText: string;
  buttonUrl: string;
  isActive: boolean;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  publishDate: string;
  category: string;
  categorySlug: string;
  featuredImage: string;
  tags: string[];
  isPublished: boolean;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  slug: string;
  title: string;
  bio: string;
  fullBio: string;
  image: string;
  specialties: string[];
  education: string;
  certifications: string[];
  experience: string;
  patients: string;
  phone: string;
  email: string;
  isActive: boolean;
  isPublished: boolean;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
}

export const CMS_DATA = {
  // Info Banners Collection
  infoBanners: [
    {
      id: 1,
      text: "We are proud to announce our new Tyler location and to welcome patients of Charles E. Lane III Orthodontics!",
      buttonText: "", // Empty string to hide the button
      buttonUrl: "https://www.blanchardorthodontics.com/appointments",
      isActive: true
    }
  ],

  // Articles/Blog Posts Collection
  articles: [
    {
      id: 1,
      title: "5 Signs Your Pre-Teen or Teen May Need Braces – Tyler and Jacksonville, TX",
      slug: "5-signs-your-pre-teen-or-teen-may-need-braces",
      excerpt: "As a parent, you want the best for your child—including a **healthy, confident smile**. But how do you know if it's time for braces? Some signs, like crooked teeth, are easy to spot, but others might be more subtle. At **Blanchard Orthodontics**, we help families in **Tyler and Jacksonville, TX**, navigate the world of **pediatric orthodontics** and make the best choices for their child's smile.",
      content: "As a parent, you want the best for your child—including a **healthy, confident smile**. But how do you know if it's time for braces? Some signs, like crooked teeth, are easy to spot, but others might be more subtle. At **Blanchard Orthodontics**, we help families in **Tyler and Jacksonville, TX**, navigate the world of **pediatric orthodontics** and make the best choices for their child's smile.\n\nIf you're wondering whether your pre-teen or teen may need braces, here are **five key signs** to watch for!\n\n### **1. Crowded or Crooked Teeth**\n\nIf your teen's teeth **overlap, twist, or seem crammed together**, it's a sign of crowding. Not only can this affect their smile's appearance, but **crowded teeth can make brushing and flossing much harder**, increasing the risk of cavities and gum disease.\n\nThe good news? **Braces for kids and teens** can help straighten their teeth, making it easier for them to maintain good oral hygiene. At **Blanchard Orthodontics**, we customize treatment plans for teens in **Tyler and Jacksonville, TX**, to ensure they achieve a **beautiful, healthy smile** that lasts a lifetime!\n\n### **2. Gaps Between Teeth**\n\nWhile a little space between teeth is normal, **larger gaps can lead to issues with chewing, speech, and bite alignment**. Some gaps may close naturally over time, but others may require orthodontic treatment to ensure a proper bite and **an even, confident smile**.\n\nIf your teen has noticeable spaces between their teeth, braces or **clear aligners** can help close the gaps and create a more balanced smile. Whether you're searching for **braces near me in Jacksonville or Tyler**, we're here to guide you through the process!\n\n### **3. Bite Issues (Overbite, Underbite, Crossbite, or Open Bite)**\n\nYour teen's **bite alignment** plays a big role in their oral health and overall comfort. If the upper and lower teeth don't fit together properly, it can lead to **difficulty chewing, jaw pain, and even speech issues**. Here are some common bite problems:\n\n- **Overbite:** Upper front teeth stick out too far over the lower teeth.\n- **Underbite:** Lower teeth extend past the upper teeth.\n- **Crossbite:** Some upper teeth sit behind lower teeth when biting down.\n- **Open bite:** The upper and lower teeth don't touch when the mouth is closed.\n\n**Does any of this sound familiar?** If so, it may be time to visit **Blanchard Orthodontics** in **Jacksonville or Tyler, TX**, for an evaluation. The sooner we can identify and correct bite problems, the easier treatment can be!\n\n### **4. Jaw Pain or Clicking Sounds**\n\nIf your pre-teen or teen often **complains of jaw pain, headaches, or hears a clicking sound when they chew**, their **bite alignment may be to blame**. When the teeth and jaws aren't in the right position, it can cause unnecessary strain on the jaw muscles and joints.\n\nIgnoring these issues can lead to **TMJ (temporomandibular joint) problems**, which can cause chronic pain over time. Our team at **Blanchard Orthodontics** in **Tyler and Jacksonville** is here to help relieve discomfort and get their smile (and bite) back on track.\n\n### **5. Difficulty Chewing or Speaking**\n\nDoes your teen struggle to **bite into food** or have trouble pronouncing certain words? This could be due to misaligned teeth or jaw positioning. If **eating, chewing, or speaking feels difficult**, orthodontic treatment can help improve their **oral function, speech, and overall comfort**.\n\nWe love seeing the confidence boost our patients get when they no longer have to **worry about their bite or speech**. Our goal at **Blanchard Orthodontics** is to make sure every teen in **Jacksonville and Tyler, TX**, feels great about their smile!\n\n### **Next Steps: Schedule an Orthodontic Consultation in Jacksonville or Tyler, TX**\n\nIf you've noticed any of these signs in your **pre-teen or teenager**, the best step is to schedule an orthodontic consultation. At **Blanchard Orthodontics**, we'll take a close look at their teeth and bite, answer your questions, and create a **customized plan to help them achieve a healthy, confident smile**.\n\nWhether you're looking for **braces for kids, braces near me, or pediatric orthodontics in Jacksonville or Tyler, TX**, we're here to help!\n\n📞 **Call us today to schedule a consultation in Jacksonville or Tyler, TX!** Let's get started on a smile they'll love for life!",
      author: "Dr. Katelyn Blanchard",
      authorImage: "/images/Author-Icon.svg",
      publishDate: "2025-03-11",
      category: "braces",
      categorySlug: "braces",
      featuredImage: "/images/About-1.webp",
      tags: ["braces"],
      isPublished: true
    },
    {
      id: 2,
      title: "The Smile Decision: Braces vs. Clear Aligners - Mom's Ultimate Guide!",
      slug: "braces-vs-clear-aligners",
      excerpt: "## A Mom's Guide To Making The Right Choice For Your Family\n\nHello, fabulous moms! If you're here, you're likely on a journey to explore orthodontic options for either your teenager or, maybe, yourself. Don't worry; you're in good company. With the experience Dr. Blanchard has gathered over the 1500+ patients she has treated, we can guide you through the exciting world of braces vs. clear aligners comparison, helping you make the right choice for your family.",
      content: "## A Mom's Guide To Making The Right Choice For Your Family\n\nHello, fabulous moms! If you're here, you're likely on a journey to explore orthodontic options for either your teenager or, maybe, yourself. Don't worry; you're in good company. With the experience Dr. Blanchard has gathered over the 1500+ patients she has treated, we can guide you through the exciting world of braces vs. clear aligners comparison, helping you make the right choice for your family.\n\n‍\n\n### Understanding Braces\n\n‍\n\n#### The Basics\n\nLet's start with the classic, tried-and-true braces. These metal or ceramic wonders have been transforming smiles for decades. Picture your teenager embracing a colorful (or clear!) set of braces, turning orthodontic care into a rite of passage.\n\n#### Durability and Effectiveness\n\nOne of the remarkable aspects of braces is their durability. They work wonders in addressing a variety of orthodontic issues, from misalignments to overcrowded teeth. Dr. Blanchard has treated hundreds of kids and adults with braces. Recently, she finished treatment on Natasha. She is a working mom of 3 littles, so VERY busy! However, her dental crowding was affecting her self-esteem at work and in her relationships. After 16 months with ceramic braces and 8 orthodontic appointments, she was a new person! In our Braces vs. Clear Aligners comparison, braces triumphed for Natasha.\n\n‍\n\n### Navigating the Clear Aligner Option\n\n‍\n\n#### A Modern Approach\n\nNow, let's talk about the invisible hero—clear aligners. This option provides a modern twist to orthodontic treatment, offering a discreet alternative to traditional braces.\n\n#### Benefits Galore\n\nThe benefits are aplenty—removability, aesthetic appeal, and a lifestyle-friendly approach. Mario was an adult patient of Dr. Blanchard's that traveled for work. He frequently had to go to West Texas oilfield sites and sometimes at the last minute. It was difficult for him to schedule regular orthodontic adjustments, and if a bracket broke while out of town, he was nowhere near an orthodontist's office that could fix the problem. Clear aligners gave Mario the option to correct his smile without disrupting his work schedule. He was a happy patient! For Mario, clear aligners were the winner in our braces vs. clear aligners comparison.\n\n‍\n\n### Considering Your Teenager's Needs\n\n‍\n\n#### Factors to Ponder\n\nDeciding on the right treatment option for your teenager specifically involves considering various factors. Appearance, comfort, and maintenance are key. Imagine your teen confidently facing school photos with a radiant smile, thanks to braces or clear aligners.\n\n#### Clear Aligners for Teens\n\nClear aligners for teenagers involves a partnership between responsibility and freedom. Colton was a patient that, at the age of 13, we were hesitant to treat with clear aligners. However, after discussing with his mom, we were convinced he would be responsible enough to wear his clear aligners. And boy did he come through. He beat his original treatment time estimate by 6 months and finished with a beautiful result. For the right patient who has the motivation and discipline, clear aligners can be a great option. This was a huge win for clear aligners in our braces vs. clear aligner comparison.\n\n#### Heart-to-Heart Talks\n\nWhen discussing orthodontic options with your teenager, make it a heart-to-heart conversation. Involve them in the decision-making process, and consider their preferences and concerns.  It is highly individualized based on the patient as to which will win out in the braces vs. clear aligner battle for best treatment choice.\n\n‍\n\n### Your Journey to a Perfect Smile\n\n‍\n\n#### Personal Transformations\n\nNow, let's shift our focus to you, mama. Your journey to a perfect smile is equally important. We've had the privilege of witnessing moms undergoing orthodontic treatment, and the transformations go beyond aesthetics. Picture this: a mom confidently smiling during family photos, setting the tone for positive oral health practices.\n\n#### Leading by Example\n\nAs moms, we wear many hats, and our health often takes a back seat. Consider orthodontic treatment not just as a cosmetic choice but as an investment in your overall well-being. Leading by example, you show your children the importance of self-care, instilling valuable lessons that last a lifetime.\n\n‍\n\n### Practical Considerations\n\n‍\n\n#### Weighing the Pros and Cons\n\nLet's dive into the nitty-gritty. Cost, insurance, maintenance—the practical aspects matter. Braces might be a traditional choice, but clear aligners offer its own set of conveniences. Consider your family's lifestyle, budget, and individual needs.\n\n#### Lifestyle Adjustments\n\nEvery choice comes with its adjustments. Braces may require some dietary changes, while clear aligners demand discipline in wearing the aligners consistently throughout the day. It's about finding what aligns best with your family's routine and preferences. The cost difference between braces and clear aligners is typically minimal.  So let your choice be based on your lifestyle and what you think will work best for you!\n\n‍\n\n### Consultation and Professional Guidance\n\n‍\n\n#### Taking the Next Step\n\nReady to take the plunge? Schedule a free consultation with our orthodontist, Dr. Blanchard. It's like a meet-and-greet for your smile. Bring your questions, concerns, and expectations. Dive into the braces vs. clear aligner comparison with a personalized consultation for you and your teenager - two birds with one stone!\n\n#### Professional Advice Matters\n\nOrthodontists are not just smile experts; they're your partners in this transformative journey. Seek professional advice to ensure a tailored approach that suits your family's unique needs.\n\n‍\n\n### Conclusion\n\nBraces or Clear Aligners—both are incredible choices, each with its own charm. Your teenager's smile journey can be a source of pride, and your own transformation is equally significant. Embrace the decision-making process, consider your family's lifestyle, and, most importantly, celebrate the journey toward healthier, happier smiles.",
      author: "Katelyn Blanchard",
      authorImage: "/images/Author-Icon.svg",
      publishDate: "2024-10-26",
      category: "braces",
      categorySlug: "braces",
      featuredImage: "/images/About-2.webp",
      tags: ["braces"],
      isPublished: true
    },
    {
      id: 3,
      title: "The Benefits of Braces for Adults – Tyler and Jacksonville, TX",
      slug: "the-benefits-of-braces-for-adults",
      excerpt: "When most people think of braces, they picture kids getting their smiles straightened. But here at **Blanchard Orthodontics**, we see more adults than ever choosing orthodontic treatment—and for good reason! Whether you've always wanted a straighter smile or need to correct shifting teeth, we offer solutions tailored for adults in **Tyler and Jacksonville, TX**.",
      content: "When most people think of braces, they picture kids getting their smiles straightened. But here at **Blanchard Orthodontics**, we see more adults than ever choosing orthodontic treatment—and for good reason! Whether you've always wanted a straighter smile or need to correct shifting teeth, we offer solutions tailored for adults in **Tyler and Jacksonville, TX**.\n\nIf you've been on the fence about treatment, here are some of the biggest benefits of getting braces as an adult—and how life-changing the results can be!\n\n## **1. A Healthier Smile**\n\nStraight teeth are **easier to clean**, which helps prevent cavities, gum disease, and other oral health issues. When teeth are crooked or crowded, it's harder to brush and floss effectively, allowing plaque and bacteria to build up in those tough-to-reach areas.\n\nWe've had many patients tell us they were shocked by how much easier it was to maintain their oral hygiene once their teeth were properly aligned. **After treatment, you'll feel relieved knowing your smile is not only beautiful but also healthier for years to come!**\n\n## **2. Boosted Confidence**\n\nLet's be honest—**your smile is one of the first things people notice about you**. If you've ever felt self-conscious about your teeth, orthodontic treatment can be truly life-changing. A straighter smile can give you the confidence to speak up in meetings, take photos without hesitation, and feel your best in social situations.\n\nMany of our adult patients tell us that getting braces was one of the best decisions they've ever made—not just for their smile, but for their self-esteem!\n\n## **3. Better Bite Relationship & Comfort**\n\nA misaligned bite (such as an **overbite, underbite, or crossbite**) can lead to difficulty chewing, excessive wear on teeth, and even jaw discomfort. Braces or clear aligners can **correct these issues**, improving both function and long-term oral health.\n\n## **4. Discreet Treatment Options**\n\nWe hear it all the time: \"I'd love to straighten my teeth, but I don't want metal braces as an adult.\" Good news! Modern orthodontics offers **discreet options like clear aligners and ceramic braces**.\n\nIn fact, we recently had a patient who walked into our office convinced that he wasn't a candidate for clear aligners. He had always assumed his case was \"too complicated\" and that braces were his only option. After an evaluation, we were able to tell him—**surprise!**—he was actually a great candidate for clear aligners. He's now several months into his treatment and **loves every minute of it**. He constantly tells us how much his teeth have changed already and how he can't believe he almost didn't go through with it!\n\n**Moral of the story? You might be a better candidate than you think!** If you're unsure, come in for a consultation—we'll walk you through your options.\n\n## **5. A Lasting Transformation**\n\nTeeth naturally shift over time, even if you had braces as a kid. Many adults come to us because they've noticed **new crowding, gaps, or bite issues** developing. **Left untreated, misalignment can lead to excessive wear on your teeth, enamel erosion, and even tooth loss.**\n\nGetting braces as an adult isn't just about how your smile looks today—it's about **protecting your long-term dental health**. Investing in orthodontic treatment now means a **healthier, stronger smile for years to come**.\n\n## **How You'll Feel After Braces: The End Result**\n\nWhen you finish treatment, you'll experience a mix of **excitement, pride, and pure joy**. Seeing your new, straight smile in the mirror makes all the effort worth it. Many of our adult patients tell us they **wish they had done it sooner**!\n\nAnd it's not just about looks—**knowing your teeth are properly aligned, easier to clean, and functioning correctly gives you peace of mind**.\n\n## **It's Never Too Late to Improve Your Smile!**\n\nAt **Blanchard Orthodontics in Tyler and Jacksonville, TX**, we believe **everyone deserves a confident, healthy smile—no matter their age**. Whether you're interested in **traditional braces, clear braces, or clear aligners**, we're here to help you find the best treatment for your needs.\n\n**Take the first step today!** Schedule a consultation at Blanchard Orthodontics in **Jacksonville or Tyler, TX**, and let's get started on the smile you've always wanted!",
      author: "Dr. Katelyn Blanchard",
      authorImage: "/images/Author-Icon.svg",
      publishDate: "2025-03-11",
      category: "braces",
      categorySlug: "braces",
      featuredImage: "/images/About-2.webp",
      tags: ["braces"],
      isPublished: true
    },
    {
      id: 4,
      title: "What is an Orthodontist? The Education, Expertise, and Why It Matters",
      slug: "what-is-an-orthodontist",
      excerpt: "Hi, I'm Dr. Katelyn Blanchard, and I'm proud to serve the communities of Tyler, TX, and Jacksonville, TX, through my practice, Blanchard Orthodontics. One of the most common questions I get is: **What exactly does an orthodontist do, and how is that different from a general dentist?** If you've ever wondered about this—or if you've been searching for \"braces near me\"—this post will clear things up!",
      content: "Hi, I'm Dr. Katelyn Blanchard, and I'm proud to serve the communities of Tyler, TX, and Jacksonville, TX, through my practice, Blanchard Orthodontics. One of the most common questions I get is: **What exactly does an orthodontist do, and how is that different from a general dentist?** If you've ever wondered about this—or if you've been searching for \"braces near me\"—this post will clear things up!\n\n## **What is Orthodontics?**\n\nOrthodontics is a specialized field of dentistry focused on diagnosing, preventing, and treating misaligned teeth and jaws. While many people think orthodontics is just about getting a straighter smile, it's actually about **improving function, bite alignment, and long-term oral health**. A properly aligned bite makes it easier to clean teeth, reduces the risk of excessive wear, and helps prevent jaw issues down the road.\n\n## **What Does It Take to Become an Orthodontist?**\n\nBecoming an orthodontist takes years of advanced training beyond dental school—and getting into an orthodontic residency program is no easy feat. Here's the typical path:\n\n1. **Undergraduate Degree** – First, an aspiring orthodontist completes a bachelor's degree (usually with a focus on sciences).\n2. **Dental School (4 Years)** – Next, they attend an accredited dental school to earn a **Doctor of Dental Surgery (DDS) or Doctor of Dental Medicine (DMD)** degree. This training covers general dentistry, including fillings, crowns, and overall oral health.\n3. **Orthodontic Residency (2-3 Years)** – After dental school, only a small percentage of dentists are accepted into an **orthodontic residency program**, where they receive **specialized training in tooth movement, bite correction, and jaw development**. **Orthodontic residency is one of the most competitive specialties in dentistry**, with only a limited number of spots available each year. To be accepted into a top-tier program, applicants typically must graduate in the **top 5-10% of their dental school class** and have outstanding academic, clinical, and research achievements.\n\nThat means an orthodontist completes **10-11 years of higher education and thousands of hours of specialized training **before ever putting braces on a patient!\n\n## **Orthodontist vs. General Dentist: What's the Difference?**\n\nA **general dentist** is trained in overall oral health, including cavities, cleanings, and extractions. Some dentists offer orthodontic treatments like Invisalign® or even braces. However, **only a trained orthodontist** has the in-depth expertise to **properly diagnose and treat complex alignment and bite issues**.\n\nThink of it like this: If you needed heart surgery, would you go to your primary care doctor or a heart specialist? Orthodontists are the specialists when it comes to **moving teeth safely and effectively**.\n\nIf you're looking for **braces near me in Tyler, TX, or Jacksonville, TX**, it's important to choose an experienced orthodontist who understands the science behind tooth movement.\n\n## **Common Misconceptions About Orthodontic Treatment**\n\nThere's a lot of misinformation out there about orthodontics, so let's clear up a few myths:\n\n- **\"Braces are just for kids.\"** – Not true! We treat patients of all ages, and adult orthodontics is more popular than ever.\n- **\"Straight teeth are just for looks.\"** – A properly aligned bite **prevents long-term dental issues** like excessive wear, TMJ problems, and difficulty cleaning teeth properly.\n- **\"Mail-order aligners work just as well as an orthodontist.\"** – DIY orthodontics can be risky and lead to serious bite problems. **You need an in-person expert** to monitor your progress.\n\n## **Why See an Orthodontist for Braces in Tyler & Jacksonville, TX?**\n\nAt Blanchard Orthodontics, we are **dedicated to providing expert, personalized orthodontic care** in Tyler and Jacksonville, TX. Whether you need **traditional braces, clear braces, or Invisalign®, we offer customized treatment plans to fit your needs**.\n\nIf you're searching for **\"braces near me\"** and want a **trusted orthodontist**, we'd love to meet you! Schedule a consultation today and let's get started on your journey to a confident, healthy smile.",
      author: "Dr. Katelyn Blanchard",
      authorImage: "/images/Author-Icon.svg",
      publishDate: "2025-03-11",
      category: "braces",
      categorySlug: "braces",
      featuredImage: "/images/2024-blanchard-family-photo.webp",
      tags: ["braces"],
      isPublished: true
    }
  ],

  // Categories Collection
  categories: [
    {
      id: 1,
      name: "Braces",
      slug: "braces",
      description: "Content about braces"
    },
    {
      id: 2,
      name: "Dentist",
      slug: "dentist",
      description: "Content about dentist"
    }
  ],

  // Team Members/Orthodontists Collection
  teamMembers: [
    {
      id: 1,
      name: "Dr. Katelyn Blanchard",
      slug: "dr-katelyn-blanchard",
      title: "Orthodontist",
      bio: "An East Texas native, Dr. Blanchard is thrilled to serve patients in Jacksonville, Bullard, Rusk, Tyler, and surrounding areas. Owning and operating her own orthodontic practice has been her dream since she finished orthodontic treatment at 13 years old.",
      fullBio: "Dr. Blanchard is from Longview, Texas and loved every minute of growing up in East Texas. Her educational journey included a business degree from UT Austin, graduating at the top of her dental school class at Texas A&M Baylor College of Dentistry, and a 2 year residency in orthodontics from LSU in New Orleans. Finally, after practicing orthodontics in Oklahoma while her husband finished his schooling, she was able to move with her family back to East Texas in 2021. She and her husband Neil have 3 beautiful children - daughter Blaine and sons Luke and Noah.",
      image: "/images/2024-blanchard-family-photo.webp",
      specialties: ["Orthodontist"],
      education: "• BBA UT Austin<br>• DDS Texas A&M Baylor College of Dentistry<br>• MSD from LSU College of Dentistry",
      certifications: ["Specialty Certificate in Orthodontics"],
      experience: "7+ Years",
      patients: "1500+",
      phone: "(903) 707-6275",
      email: "info@blanchardorthodontics.com",
      isActive: true,
      isPublished: true
    }
  ],

  // Site Settings
  siteSettings: {
    siteName: "Blanchard Orthodontics",
    siteDescription: "Blanchard Orthodontics exists to help you have a smile that you love through braces, retainers, and more.",
    contactEmail: "info@blanchardorthodontics.com",
    contactPhone: "(903) 707-6275"
  }
}; 