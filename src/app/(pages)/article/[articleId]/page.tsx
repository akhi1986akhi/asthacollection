import React from 'react';
import { Calendar, Clock, Heart, Sparkles, ArrowLeft, Share2, Bookmark, User, Tag, ChevronRight } from 'lucide-react';
import { getBlogPostBySlug } from '@/lib/blogs';
const BlogDetailPage = async ({ params }: any) => {
  const { articleId } = await params;
  const blogPost:any = getBlogPostBySlug(articleId) || {
    id: 1,
    title: "Timeless Elegance: Spring Wedding Trends",
    excerpt: "Discover the most enchanting bridal styles and floral arrangements that will make your special day unforgettable.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
    date: "November 25, 2024",
    readTime: "5 min read",
    category: "Trends",
    author: {
      name: "Sarah Chen",
      role: "Wedding Stylist & Planner",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    content: `
      <p class="lead">As the flowers bloom and the world awakens from winter's slumber, spring brings with it a fresh perspective on wedding elegance. This season, we're seeing a beautiful blend of timeless traditions and modern sophistication that creates truly magical celebrations.</p>
      
      <h2>Floral Fantasies Come to Life</h2>
      <p>Spring weddings are synonymous with breathtaking floral arrangements. This year, we're moving beyond traditional bouquets to create immersive floral experiences. Think floral arches that frame your vows, hanging installations that transform reception spaces, and delicate floral accents on everything from your cake to your seating chart.</p>
      
      <p>The color palette for spring 2024 embraces soft, romantic hues. Dusty rose, buttercream yellow, and sage green are taking center stage, often accented with deeper burgundy or navy for contrast. These colors work beautifully with the natural spring landscape and create a cohesive, elegant look.</p>
      
      <h2>Modern Bridal Fashion</h2>
      <p>Bridal fashion this spring is all about personal expression. While classic silhouettes remain popular, we're seeing more brides opt for unique details like detachable sleeves, dramatic capes, and subtle pops of color. The key is finding a balance between timeless elegance and personal style.</p>
      
      <blockquote>
        "Your wedding dress should reflect not just the occasion, but the essence of who you are as a couple. It's about creating a moment that feels authentically yours."
      </blockquote>
      
      <p>For grooms and wedding parties, we're seeing a shift toward more textured fabrics and custom details. Mix-and-match bridesmaid dresses in complementary shades create visual interest while allowing each member of your party to feel comfortable and beautiful.</p>
      
      <h2>Sustainable Celebrations</h2>
      <p>More couples are embracing eco-friendly wedding options that don't compromise on style. From locally sourced flowers to digital invitations and compostable decor, sustainable choices are becoming seamlessly integrated into wedding planning.</p>
      
      <p>Consider partnering with local vendors, choosing seasonal flowers, and opting for rentals over purchases for items you'll only use once. These small choices can make a big impact while creating a celebration that aligns with your values.</p>
    `,
    tags: ["Spring Wedding", "Bridal Fashion", "Floral Design", "Wedding Trends", "Sustainable Weddings"],
    relatedPosts: [
      {
        id: 2,
        title: "Choosing Your Perfect Wedding Gown",
        excerpt: "A comprehensive guide to finding the dress of your dreams.",
        image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=300&fit=crop",
        date: "Nov 22, 2024",
        readTime: "7 min read",
        category: "Bridal"
      },
      {
        id: 3,
        title: "Royal Wedding Inspirations",
        excerpt: "Get inspired by the most glamorous royal weddings.",
        image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop",
        date: "Nov 20, 2024",
        readTime: "6 min read",
        category: "Inspiration"
      },
      {
        id: 4,
        title: "Seasonal Wedding Flowers Guide",
        excerpt: "Learn which flowers bloom in each season for your wedding.",
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
        date: "Nov 15, 2024",
        readTime: "4 min read",
        category: "Floral"
      }
    ]
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-pink-50 py-20 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <button className="flex items-center gap-2 text-rose-600 font-serif font-semibold hover:text-rose-700 transition-colors duration-300 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Stories
          </button>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-none shadow-2xl border-4 border-rose-100/50 overflow-hidden mb-12">
          {/* Featured Image */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent"></div>

            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-rose-200">
                <span className="text-rose-700 text-sm font-serif font-semibold tracking-wider">
                  {blogPost.category}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="absolute top-6 right-6 flex gap-3">
              <button className="bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg border border-rose-200 hover:scale-110 transition-transform duration-300">
                <Bookmark className="w-5 h-5 text-rose-600" />
              </button>
              <button className="bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg border border-rose-200 hover:scale-110 transition-transform duration-300">
                <Share2 className="w-5 h-5 text-rose-600" />
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12">
            {/* Article Header */}
            <header className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                  <Sparkles className="w-5 h-5 text-rose-400" />
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-serif font-bold text-rose-900 mb-6 leading-tight">
                {blogPost.title}
              </h1>

              <p className="text-xl text-rose-800/80 font-serif italic mb-8 max-w-2xl mx-auto leading-relaxed">
                {blogPost.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-rose-600/80 mb-8 font-serif">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-semibold">{blogPost.date}</span>
                </div>
                <div className="w-px h-6 bg-rose-300 hidden sm:block"></div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-semibold">{blogPost.readTime}</span>
                </div>
                <div className="w-px h-6 bg-rose-300 hidden sm:block"></div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5" fill="currentColor" />
                  <span className="text-sm font-semibold">248 Likes</span>
                </div>
              </div>

              {/* Author Card */}
              <div className="bg-rose-50/50 rounded-2xl p-6 max-w-md mx-auto border-2 border-rose-100">
                <div className="flex items-center gap-4">
                  <img
                    src={blogPost.author.image}
                    alt={blogPost.author.name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-rose-900 text-lg">{blogPost.author.name}</h4>
                    <p className="text-rose-600/80 text-sm font-serif">{blogPost.author.role}</p>
                  </div>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none font-serif text-rose-800/90">
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </div>

            {/* Tags */}
            <div className="border-t-2 border-rose-100 pt-8 mt-12">
              <div className="flex items-center gap-3 mb-4">
                <Tag className="w-5 h-5 text-rose-600" />
                <span className="font-serif font-semibold text-rose-900">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {blogPost.tags.map((tag:any, index:any) => (
                  <span
                    key={index}
                    className="bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-serif font-semibold hover:bg-rose-200 transition-colors duration-300 cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Action Section */}
        <div className="bg-white rounded-none shadow-xl border-4 border-rose-100/50 p-8 mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="font-serif font-bold text-rose-900 text-xl mb-2">Enjoyed this story?</h3>
              <p className="text-rose-600/80 font-serif">Share it with other couples planning their special day</p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-3 bg-rose-600 text-white px-6 py-3 rounded-full font-serif font-semibold hover:bg-rose-700 transition-colors duration-300 shadow-lg hover:shadow-rose-300/50">
                <Heart className="w-5 h-5" fill="currentColor" />
                Like Story
              </button>
              <button className="flex items-center gap-3 bg-white text-rose-600 px-6 py-3 rounded-full font-serif font-semibold hover:bg-rose-50 transition-colors duration-300 border-2 border-rose-200 shadow-lg hover:shadow-rose-300/50">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Related Stories */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-rose-400 to-transparent"></div>
            <h2 className="text-2xl font-serif font-bold text-rose-900">Related Stories</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-300 to-rose-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPost.relatedPosts.map((post:any) => (
              <article key={post.id} className="group bg-white rounded-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-4 border-rose-100/50">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg border border-rose-200">
                      <span className="text-rose-700 text-xs font-serif font-semibold tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-rose-900 mb-3 group-hover:text-rose-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-rose-800/70 text-sm mb-4 font-serif line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-rose-600/80 font-serif">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 rounded-none shadow-2xl border-4 border-white/50 p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <Sparkles className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Join Our Wedding Community</h2>
            <p className="text-rose-100 text-lg font-serif mb-6 max-w-md mx-auto">
              Get weekly inspiration, expert tips, and exclusive stories delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full text-rose-900 font-serif focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-rose-600 px-6 py-3 rounded-full font-serif font-semibold hover:bg-rose-50 transition-colors duration-300 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add custom styles for the article content
const styles = `
  .article-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: bold;
    color: #881337;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  .article-content p {
    font-size: 1.125rem;
    line-height: 1.75;
    margin-bottom: 1.5rem;
    color: #881337e6;
  }

  .article-content .lead {
    font-size: 1.25rem;
    font-style: italic;
    color: #881337cc;
    border-left: 4px solid #f472b6;
    padding-left: 1.5rem;
    margin-left: -1.5rem;
  }

  .article-content blockquote {
    border-left: 4px solid #f472b6;
    padding-left: 2rem;
    margin-left: -2rem;
    font-style: italic;
    color: #881337cc;
    background: #fdf2f8;
    padding: 2rem;
    border-radius: 1rem;
    margin: 2rem 0;
  }

  .article-content ul, .article-content ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
  }

  .article-content li {
    margin-bottom: 0.5rem;
    color: #881337e6;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

// Add styles to document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default BlogDetailPage;