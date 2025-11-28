'use client';

import { Users, Sparkles, TrendingUp, Heart, Star } from 'lucide-react';

const ageGroups = [
  {
    id: 1,
    name: 'Gen Z Vibes',
    age: '13-19',
    description: 'Bold, expressive & unapologetically you',
    image: '/image/collection/1.avif',
    styles: ['Streetwear', 'Party Ready', 'Campus Cool'],
    color: 'from-fuchsia-500 via-pink-500 to-rose-500',
    icon: '🌟'
  },
  {
    id: 2,
    name: 'Millennial Chic',
    age: '20-30',
    description: 'Effortlessly stylish with a modern edge',
    image: '/api/placeholder/300/300',
    styles: ['Work Mode', 'Date Night', 'Weekend Vibes'],
    color: 'from-violet-500 via-purple-500 to-fuchsia-500',
    icon: '✨'
  },
  {
    id: 3,
    name: 'Power & Poise',
    age: '31-45',
    description: 'Sophisticated elegance meets confidence',
    image: '/api/placeholder/300/300',
    styles: ['Executive', 'Evening Glam', 'Smart Casual'],
    color: 'from-blue-500 via-indigo-500 to-purple-500',
    icon: '👑'
  },
  {
    id: 4,
    name: 'Timeless Grace',
    age: '45+',
    description: 'Classic beauty with contemporary comfort',
    image: '/api/placeholder/300/300',
    styles: ['Heritage', 'Refined Luxury', 'Elegant Ease'],
    color: 'from-emerald-500 via-teal-500 to-cyan-500',
    icon: '💎'
  }
];

export default function AgeGroupSection() {
  return (
    <section className="relative py-24 bg-pink-100 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full px-6 py-3 shadow-xl mb-6 backdrop-blur-sm">
            <Users className="w-5 h-5" />
            <span className="text-sm font-black tracking-wide">CURATED FOR YOU</span>
            <Heart className="w-5 h-5" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Fashion That
            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mt-2">
              Grows With You
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From your first statement piece to timeless classics — discover collections designed for every chapter of your style journey.
          </p>
        </div>

        {/* Age Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ageGroups.map((group, index) => (
            <div
              key={group.id}
              className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 hover:-rotate-1 transition-all duration-500 cursor-pointer border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Header with Icon */}
              <div className={`relative bg-gradient-to-br ${group.color} p-8 text-white overflow-hidden`}>
                {/* Background Pattern */}
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full animate-twinkle"
                      style={{
                        left: `${(i * 5 + 10) % 100}%`,
                        top: `${(i * 7 + 15) % 100}%`,
                        animationDelay: `${(i * 0.3) % 3}s`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl mb-4 animate-bounce-slow">{group.icon}</div>
                  <h3 className="text-2xl font-black mb-2 leading-tight">{group.name}</h3>
                  <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold mb-3">
                    Ages {group.age}
                  </div>
                  <p className="text-white/95 text-sm font-medium leading-relaxed">{group.description}</p>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                {/* Style Tags */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-pink-500" />
                    <h4 className="text-sm font-black text-gray-700 uppercase tracking-wide">Trending Styles</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.styles.map((style, styleIndex) => (
                      <span
                        key={styleIndex}
                        className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all duration-300"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features with Icons */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-700 bg-pink-50 rounded-xl p-2">
                    <div className="bg-pink-200 rounded-lg p-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-pink-600" />
                    </div>
                    <span className="font-semibold">Age-Perfect Designs</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700 bg-purple-50 rounded-xl p-2">
                    <div className="bg-purple-200 rounded-lg p-1.5">
                      <Star className="w-3.5 h-3.5 text-purple-600" />
                    </div>
                    <span className="font-semibold">Premium Comfort</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700 bg-indigo-50 rounded-xl p-2">
                    <div className="bg-indigo-200 rounded-lg p-1.5">
                      <Heart className="w-3.5 h-3.5 text-indigo-600" />
                    </div>
                    <span className="font-semibold">Style Curated</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${group.color} text-white py-4 rounded-2xl font-black text-sm transform transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 relative overflow-hidden group/btn`}>
                  <span className="relative z-10">Shop Collection</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center shadow-lg border border-gray-200 z-20">
                <span className={`bg-gradient-to-r ${group.color} bg-clip-text text-transparent text-lg font-black`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-[2.5rem] p-12 shadow-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-bold">PERSONALIZED JUST FOR YOU</span>
            </div>

            <h3 className="text-4xl font-black text-white mb-4">
              Find Your Perfect Style Match
            </h3>
            <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Answer a few quick questions and let us curate a personalized collection that celebrates your unique style and preferences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-white text-purple-600 px-8 py-5 rounded-2xl font-black text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                Take Style Quiz
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>

              <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-white/30 transition-all duration-300">
                Browse All Collections
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}