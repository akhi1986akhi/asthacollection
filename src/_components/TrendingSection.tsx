'use client';

import { TrendingUp, Heart, Eye, ShoppingCart } from 'lucide-react';

const trendingItems = [
  {
    id: 1,
    name: 'Floral Print Maxi Dress',
    price: '₹3,499',
    originalPrice: '₹4,999',
    discount: '30% OFF',
    image: '/api/placeholder/300/400',
    rating: 4.8,
    reviews: 234,
    likes: 189,
    views: '2.1k',
    tags: ['Bestseller', 'Trending']
  },
  {
    id: 2,
    name: 'Designer Georgette Saree',
    price: '₹6,999',
    originalPrice: '₹9,999',
    discount: '30% OFF',
    image: '/api/placeholder/300/400',
    rating: 4.9,
    reviews: 167,
    likes: 145,
    views: '1.8k',
    tags: ['Popular', 'New']
  },
  {
    id: 3,
    name: 'Embroidered Anarkali',
    price: '₹5,499',
    originalPrice: '₹7,999',
    discount: '31% OFF',
    image: '/api/placeholder/300/400',
    rating: 4.7,
    reviews: 198,
    likes: 167,
    views: '1.9k',
    tags: ['Hot', 'Limited']
  },
  {
    id: 4,
    name: 'Casual Cotton Kurti',
    price: '₹1,299',
    originalPrice: '₹1,999',
    discount: '35% OFF',
    image: '/api/placeholder/300/400',
    rating: 4.6,
    reviews: 312,
    likes: 278,
    views: '3.2k',
    tags: ['Value', 'Trending']
  }
];

export default function TrendingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full px-4 py-2 shadow-lg mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-bold">Hot Right Now</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Trending
            <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              This Week
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what everyone is loving this week. Shop the most popular styles before they're gone!
          </p>
        </div>

        {/* Trending Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-orange-200"
            >
              {/* Product Image */}
              <div className="relative h-60 bg-gradient-to-br from-orange-100 to-red-100 overflow-hidden">
                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Discount Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-red-500 px-2 py-1 rounded-lg text-xs font-bold border-2 border-red-200">
                    {item.discount}
                  </span>
                </div>
                
                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-gray-600" />
                      <span className="font-bold text-gray-700">{item.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3 text-red-500" />
                      <span className="font-bold text-gray-700">{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="font-bold text-gray-700">In Stock</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
                  <button className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transform hover:scale-110 transition-all duration-200">
                    <Heart className="w-5 h-5 text-red-500" />
                  </button>
                  <button className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transform hover:scale-110 transition-all duration-200">
                    <Eye className="w-5 h-5 text-blue-500" />
                  </button>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full p-3 shadow-lg transform hover:scale-110 transition-all duration-200">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300">
                  {item.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < Math.floor(item.rating)
                            ? 'bg-yellow-500'
                            : 'bg-gray-300'
                        }`}
                      ></span>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-700">{item.rating}</span>
                  <span className="text-sm text-gray-500">({item.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-black text-gray-900">{item.price}</span>
                  <span className="text-lg text-gray-500 line-through">{item.originalPrice}</span>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-bold text-sm transform group-hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>

              {/* Hot Indicator */}
              <div className="absolute -top-2 -right-2">
                <div className="relative">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Trending */}
        <div className="text-center mt-12">
          <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
            <TrendingUp className="w-5 h-5" />
            View All Trending Items
            <span className="group-hover:animate-bounce">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}