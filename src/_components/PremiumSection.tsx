'use client';

import { Crown, Star, Shield, Truck, Sparkles, Award, Heart } from 'lucide-react';

const premiumItems = [
  {
    id: 1,
    name: 'Designer Banarasi Saree',
    price: '₹12,999',
    originalPrice: '₹18,999',
    discount: '32% OFF',
    image: '/image/thumbnail/premium/banarsi-sarees.webp',
    rating: 4.9,
    reviews: 127,
    badge: 'Exclusive',
    features: ['Pure Silk', 'Zari Work', 'Handcrafted']
  },
  {
    id: 2,
    name: 'Bridal Lehenga Set',
    price: '₹25,999',
    originalPrice: '₹35,999',
    discount: '28% OFF',
    image: '/image/thumbnail/premium/bridal-lehnga.avif',
    rating: 4.8,
    reviews: 89,
    badge: 'Luxury',
    features: ['Kundan Work', 'Heavy Embroidery', 'Custom Fit']
  },
  {
    id: 3,
    name: 'Designer Anarkali Suit',
    price: '₹8,999',
    originalPrice: '₹12,999',
    discount: '31% OFF',
    image: '/image/thumbnail/premium/anarkali.webp',
    rating: 4.7,
    reviews: 156,
    badge: 'Premium',
    features: ['Chiffon Fabric', 'Stone Work', 'Floor Length']
  },
  {
    id: 4,
    name: 'Handcrafted Kurti Set',
    price: '₹5,999',
    originalPrice: '₹8,499',
    discount: '29% OFF',
    image: '/image/thumbnail/premium/hand-crafted.webp',
    rating: 4.6,
    reviews: 203,
    badge: 'Artisanal',
    features: ['Hand Block Print', 'Cotton Silk', 'Comfort Fit']
  }
];

export default function PremiumSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-black rounded-full px-6 py-3 shadow-2xl mb-6 animate-shimmer">
            <Crown className="w-5 h-5" />
            <span className="text-sm font-black tracking-wider">EXCLUSIVE LUXURY</span>
            <Sparkles className="w-5 h-5" />
          </div>

          <h2 className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 mb-6 tracking-tight drop-shadow-2xl">
            Premium
            <span className="block mt-2 bg-gradient-to-r from-purple-300 via-pink-200 to-purple-300 bg-clip-text">
              Collection
            </span>
          </h2>

          <p className="text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
            Discover our most exquisite pieces crafted with premium materials and exceptional attention to detail.
          </p>
        </div>

        {/* Premium Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-6 text-center border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 rounded-3xl transition-all duration-500"></div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-400 to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Crown className="w-8 h-8 text-slate-900" />
              </div>
              <h4 className="font-black text-white mb-2 text-lg">Premium Quality</h4>
              <p className="text-sm text-purple-200">Luxury Materials</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-xl rounded-3xl p-6 text-center border border-pink-400/30 hover:border-pink-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-rose-500/0 group-hover:from-pink-500/20 group-hover:to-rose-500/20 rounded-3xl transition-all duration-500"></div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-400 to-rose-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-black text-white mb-2 text-lg">Exclusive Designs</h4>
              <p className="text-sm text-pink-200">Limited Edition</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl rounded-3xl p-6 text-center border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 rounded-3xl transition-all duration-500"></div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-black text-white mb-2 text-lg">Quality Assurance</h4>
              <p className="text-sm text-emerald-200">1 Year Warranty</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-xl rounded-3xl p-6 text-center border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 rounded-3xl transition-all duration-500"></div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-black text-white mb-2 text-lg">Free Delivery</h4>
              <p className="text-sm text-blue-200">Pan India</p>
            </div>
          </div>
        </div>

        {/* Premium Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {premiumItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/10 group-hover:to-purple-500/20 transition-all duration-500 z-0"></div>

              {/* Product Image */}
              {/* Product Image */}
              <div className="relative h-72 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-amber-400/20 overflow-hidden">
                {/* Thumbnail Image */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  /* Fallback gradient background when no image */
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-amber-500/30 flex items-center justify-center">
                    <span className="text-white/60 text-sm font-medium">Premium Item</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-black px-4 py-2 rounded-full text-xs font-black shadow-lg backdrop-blur-sm flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {item.badge}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-2 rounded-xl text-xs font-black shadow-lg backdrop-blur-sm">
                    {item.discount}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4 z-10 bg-black/80 backdrop-blur-md rounded-2xl px-4 py-2 flex items-center gap-2 border border-amber-400/30">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-sm font-black text-white">{item.rating}</span>
                  <span className="text-xs text-gray-300">({item.reviews})</span>
                </div>

                {/* Wishlist Icon */}
                <div className="absolute bottom-4 right-4 z-10 bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-red-500 transition-all duration-300 cursor-pointer group/heart">
                  <Heart className="w-5 h-5 text-white group-hover/heart:fill-white transition-all" />
                </div>
              </div>

              {/* Product Content */}
              <div className="relative z-10 p-6">
                <h3 className="font-black text-white text-xl mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:via-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                  {item.name}
                </h3>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-500/30 text-purple-100 px-3 py-1 rounded-xl text-xs font-bold backdrop-blur-sm border border-purple-400/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-black bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
                    {item.price}
                  </span>
                  <span className="text-lg text-gray-400 line-through">{item.originalPrice}</span>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white py-4 rounded-2xl font-black text-sm transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 border border-purple-400/30 relative overflow-hidden">
                  <span className="relative z-10">Add to Cart</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black font-black">
                    Add to Cart
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-black px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              View All Premium Collection
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-black">
              View All Premium Collection
              <span className="ml-2">→</span>
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 3s ease infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}