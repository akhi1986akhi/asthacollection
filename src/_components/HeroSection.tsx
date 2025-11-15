'use client';

import { Sparkles, ShoppingBag, Tag, Truck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 animate-pulse">
          <Sparkles className="w-6 h-6 text-yellow-300" />
        </div>
        <div className="absolute top-32 right-20 animate-pulse animation-delay-200">
          <Sparkles className="w-4 h-4 text-yellow-200" />
        </div>
        <div className="absolute bottom-40 left-32 animate-pulse animation-delay-400">
          <Sparkles className="w-5 h-5 text-yellow-400" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-semibold">Premium Fashion Boutique</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                Elevate Your
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Style Game
                </span>
              </h1>
              
              <p className="text-xl text-pink-100 max-w-lg">
                Discover the latest trends in ethnic and contemporary fashion. 
                Where tradition meets modern elegance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-white text-purple-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <ShoppingBag className="w-5 h-5" />
                Shop Now
                <div className="absolute inset-0 border-2 border-white rounded-2xl group-hover:animate-pulse"></div>
              </button>
              
              <button className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                Explore Collection
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-white/20 rounded-2xl p-3 inline-block mb-2">
                  <Truck className="w-6 h-6 text-yellow-300" />
                </div>
                <p className="font-semibold text-sm">Free Shipping</p>
                <p className="text-pink-200 text-xs">Above ₹1999</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 rounded-2xl p-3 inline-block mb-2">
                  <Tag className="w-6 h-6 text-yellow-300" />
                </div>
                <p className="font-semibold text-sm">Special Discount</p>
                <p className="text-pink-200 text-xs">First Order</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 rounded-2xl p-3 inline-block mb-2">
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                </div>
                <p className="font-semibold text-sm">Premium Quality</p>
                <p className="text-pink-200 text-xs">Guaranteed</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <ShoppingBag className="w-20 h-20 mx-auto mb-4 opacity-80" />
                  <p className="text-2xl font-bold">New Collection</p>
                  <p className="text-lg">Coming Soon</p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-purple-900 px-4 py-2 rounded-2xl font-bold transform rotate-6 shadow-lg">
                -30% OFF
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-2xl font-bold transform -rotate-6 shadow-lg">
                Trending
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}