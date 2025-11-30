"use client";
import React, { useState } from 'react';
import { Calendar, ArrowRight, Clock, Heart, Sparkles, Search, Filter, ChevronDown } from 'lucide-react';
import { getAllBlogPosts } from '@/lib/blogs'
import Link from 'next/link';
const BlogListingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const blogPosts = getAllBlogPosts();

  const categories = ['All', 'Trends', 'Bridal', 'Inspiration', 'Venues', 'Floral', 'Planning', 'Photography', 'Traditions'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <section className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-pink-50 py-20 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Ornamental Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <Sparkles className="w-6 h-6 text-rose-400 animate-pulse" />
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </div>
          </div>

          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 text-white text-sm font-serif tracking-widest px-6 py-2.5 rounded-full shadow-lg border-2 border-white/50">
              ✦ WEDDING WISDOM ✦
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-serif font-bold text-rose-900 mb-6 relative">
            Wedding
            <span className="block bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
              Journal
            </span>
            <Heart className="w-8 h-8 text-rose-400 absolute -top-4 -right-4 md:right-1/4 animate-pulse" fill="currentColor" />
          </h1>

          <p className="text-rose-800/80 text-lg max-w-2xl mx-auto font-serif italic">
            Your ultimate guide to planning the wedding of your dreams
          </p>

          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-3">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-300 to-rose-400"></div>
              <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
              <div className="w-32 h-px bg-gradient-to-l from-transparent via-rose-300 to-rose-400"></div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-4 border-rose-100/50">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-rose-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search wedding inspiration..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-rose-50/50 border-2 border-rose-200 rounded-xl focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all duration-300 font-serif text-rose-800 placeholder-rose-400/60"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-rose-400 w-4 h-4 z-10" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-rose-50/50 border-2 border-rose-200 rounded-xl pl-12 pr-10 py-4 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all duration-300 font-serif text-rose-800 cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="text-rose-800">
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-rose-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'All' && searchQuery === '' && (
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-gradient-to-r from-rose-400 to-transparent"></div>
              <h2 className="text-2xl font-serif font-bold text-rose-900">Featured Stories</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-300 to-rose-400"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Link href={`/article/${post.slug}`} key={post.id}>
                  <article className="group relative">
                    <div className="bg-white rounded-none overflow-hidden shadow-2xl hover:shadow-rose-300/50 transition-all duration-500 transform hover:-translate-y-2 border-4 border-rose-100/50">
                      <div className="relative h-80 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-transparent to-transparent"></div>
                        <div className="absolute top-6 right-6">
                          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-rose-200">
                            <span className="text-rose-700 text-xs font-serif font-semibold tracking-wider">
                              Featured
                            </span>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-rose-100 transition-colors duration-300">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-4 text-rose-100 text-sm font-serif">
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
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Blog Posts Grid */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-rose-400 to-transparent"></div>
            <h2 className="text-2xl font-serif font-bold text-rose-900">
              {selectedCategory === 'All' ? 'All Stories' : `${selectedCategory} Stories`}
              <span className="text-rose-600 ml-2">({filteredPosts.length})</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-300 to-rose-400"></div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border-4 border-rose-100/50">
                <Sparkles className="w-16 h-16 text-rose-400 mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold text-rose-900 mb-4">No Stories Found</h3>
                <p className="text-rose-800/70 font-serif max-w-md mx-auto">
                  We couldn't find any wedding stories matching your search. Try different keywords or browse all categories.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link href={`/article/${post.slug}`} key={post.id}>
                <article  className="group relative">
                  {/* Decorative Corner Elements */}
                  <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                  <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

                  <div className="bg-white rounded-none overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-4 border-rose-100/50 h-full flex flex-col">
                    {/* Image Container with Overlay */}
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-rose-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Floating Category Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-rose-200">
                          <span className="text-rose-700 text-xs font-serif font-semibold tracking-wider">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Decorative Bottom Border */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-gradient-to-b from-white to-rose-50/30 flex-1 flex flex-col">
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-rose-900 mb-3 group-hover:text-rose-600 transition-colors duration-300 leading-tight flex-1">
                        {post.title}
                      </h3>

                      <p className="text-rose-800/70 text-sm mb-4 leading-relaxed font-serif line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Meta Info with Divider */}
                      <div className="flex items-center justify-center gap-4 text-xs text-rose-600/80 mb-4 font-serif mt-auto">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="w-px h-3 bg-rose-300"></div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <div className="flex justify-center">
                        <button className="flex items-center gap-2 text-rose-600 font-serif font-semibold text-sm group-hover:gap-3 transition-all duration-300 border-b-2 border-rose-300 group-hover:border-rose-500 pb-1">
                          Read Story
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Load More Section */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-16">
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
              <span className="relative z-10 tracking-wider">LOAD MORE STORIES</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogListingPage;