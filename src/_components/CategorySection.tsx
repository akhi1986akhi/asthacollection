'use client';

import { Heart, Star, Sparkles } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Wedding Collection',
    description: 'Exquisite outfits for your special day',
    image: '/image/thumbnail/collection/wedding-1.webp',
    count: '150+ Items',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    name: 'Designer Sarees',
    description: 'Traditional elegance with modern touch',
    image: '/image/thumbnail/collection/sarees-1.webp',
    count: '200+ Items',
    gradient: 'from-rose-500 to-red-500'
  },
  {
    id: 3,
    name: 'Casual Wear',
    description: 'Comfort meets style everyday',
    image: '/image/thumbnail/collection/casual-1.webp',
    count: '180+ Items',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    name: 'Party Wear',
    description: 'Stand out in every gathering',
    image: '/image/thumbnail/collection/party-1.webp',
    count: '120+ Items',
    gradient: 'from-orange-500 to-yellow-500'
  },
  {
    id: 5,
    name: 'Traditional Kurtas',
    description: 'Ethnic charm for modern women',
    image: '/image/thumbnail/collection/kurta-1.webp',
    count: '160+ Items',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 6,
    name: 'Accessories',
    description: 'Complete your look perfectly',
    image: '/image/thumbnail/collection/accessries-1.webp',
    count: '90+ Items',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

export default function CategorySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg mb-4">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-bold text-gray-700">Collections</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Explore By
            <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections designed to match every occasion and style preference.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Category Image */}

              {category.image?
              
              
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-300"
              />
              :
              
               <div className={`relative h-48 bg-gradient-to-br ${category.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all duration-200">
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              
              }
             

              {/* Category Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {category.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-yellow-700">4.8</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-500">{category.count}</span>
                  <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-xl font-bold text-sm transform group-hover:scale-110 transition-all duration-200">
                    Explore
                  </button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-300 rounded-3xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group relative bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View All Categories
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-300 rounded-2xl group-hover:animate-pulse transition-all duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}