import React from 'react';
import { Calendar, ArrowRight, Clock, Heart, Sparkles } from 'lucide-react';

const LatestBlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Timeless Elegance: Spring Wedding Trends",
      excerpt: "Discover the most enchanting bridal styles and floral arrangements that will make your special day unforgettable.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      date: "Nov 25, 2024",
      readTime: "5 min read",
      category: "Trends"
    },
    {
      id: 2,
      title: "Choosing Your Perfect Wedding Gown",
      excerpt: "A comprehensive guide to finding the dress of your dreams that reflects your unique style and personality.",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&h=600&fit=crop",
      date: "Nov 22, 2024",
      readTime: "7 min read",
      category: "Bridal"
    },
    {
      id: 3,
      title: "Royal Wedding Inspirations",
      excerpt: "Get inspired by the most glamorous royal weddings and learn how to incorporate regal elements into your celebration.",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
      date: "Nov 20, 2024",
      readTime: "6 min read",
      category: "Inspiration"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-pink-50 py-20 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Ornamental Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <Sparkles className="w-6 h-6 text-rose-400 animate-pulse" />
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </div>
          </div>
          
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 text-white text-sm font-serif tracking-widest px-6 py-2.5 rounded-full shadow-lg border-2 border-white/50">
              ✦ LATEST STORIES ✦
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-rose-900 mb-6 relative">
            Wedding
            <span className="block bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
              Chronicles
            </span>
            <Heart className="w-8 h-8 text-rose-400 absolute -top-4 -right-4 md:right-1/4 animate-pulse" fill="currentColor" />
          </h1>
          
          <p className="text-rose-800/80 text-lg max-w-2xl mx-auto font-serif italic">
            Crafting memories of love, elegance, and timeless beauty
          </p>
          
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-3">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-300 to-rose-400"></div>
              <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
              <div className="w-32 h-px bg-gradient-to-l from-transparent via-rose-300 to-rose-400"></div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group relative"
              style={{animationDelay: `${index * 150}ms`}}
            >
              {/* Decorative Corner Elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              
              <div className="bg-white rounded-none overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-4 border-rose-100/50">
                {/* Image Container with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-rose-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-rose-200">
                      <span className="text-rose-700 text-xs font-serif font-semibold tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Decorative Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400"></div>
                </div>

                {/* Content */}
                <div className="p-8 bg-gradient-to-b from-white to-rose-50/30">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-rose-900 mb-4 group-hover:text-rose-600 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-rose-800/70 text-sm mb-6 leading-relaxed font-serif">
                    {post.excerpt}
                  </p>

                  {/* Meta Info with Divider */}
                  <div className="flex items-center justify-center gap-6 text-xs text-rose-600/80 mb-6 font-serif">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="w-px h-4 bg-rose-300"></div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="flex justify-center">
                    <button className="flex items-center gap-2 text-rose-600 font-serif font-semibold text-sm group-hover:gap-3 transition-all duration-300 border-b-2 border-rose-300 group-hover:border-rose-500 pb-1">
                      Continue Reading
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Ornamental View All Section */}
        <div className="text-center mt-20">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-rose-400"></div>
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
              </div>
              <div className="w-24 h-px bg-gradient-to-l from-transparent via-rose-300 to-rose-400"></div>
            </div>
          </div>
          
          <button className="relative bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 text-white font-serif font-bold px-12 py-4 rounded-full shadow-2xl hover:shadow-rose-300/50 transform hover:scale-105 transition-all duration-300 border-4 border-white/50 group overflow-hidden">
            <span className="relative z-10 tracking-wider">EXPLORE ALL STORIES</span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogSection;