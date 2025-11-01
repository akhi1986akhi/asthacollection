'use client';

import { JSX, useState } from 'react';
import { Crown, Trophy, Award, Users, Tv, Watch, Zap, Home } from 'lucide-react';

interface Winner {
  id: number;
  name: string;
  prize: string;
  date: string;
  avatar: string;
  discount: string;
  productType: string;
  productImage: string;
  lotteryNumber: string;
}

interface ProductCategory {
  id: string;
  name: string;
  icon: JSX.Element;
  winners: Winner[];
  color: string;
}

export default function WinnersSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const [winners] = useState<Winner[]>([
    {
      id: 1,
      name: "Priya Sharma",
      prize: "LED TV 43\"",
      date: "2024-01-15",
      avatar: "👩‍💼",
      discount: "Grand Prize",
      productType: "tv",
      productImage: "📺",
      lotteryNumber: "L123456"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      prize: "Mixer Grinder",
      date: "2024-01-14",
      avatar: "👨‍💻",
      discount: "Kitchen Appliance",
      productType: "mixer",
      productImage: "🔌",
      lotteryNumber: "L789012"
    },
    {
      id: 3,
      name: "Anita Patel",
      prize: "Iron Press",
      date: "2024-01-13",
      avatar: "👩‍🎨",
      discount: "Home Essential",
      productType: "iron",
      productImage: "🔥",
      lotteryNumber: "L345678"
    },
    {
      id: 4,
      name: "Sanjay Mehta",
      prize: "Premium Wrist Watch",
      date: "2024-01-12",
      avatar: "👨‍🏫",
      discount: "Luxury Accessory",
      productType: "watch",
      productImage: "⌚",
      lotteryNumber: "L901234"
    },
    {
      id: 5,
      name: "Neha Gupta",
      prize: "Mixer Grinder",
      date: "2024-01-11",
      avatar: "👩‍🍳",
      discount: "Kitchen Appliance",
      productType: "mixer",
      productImage: "🔌",
      lotteryNumber: "WIN500"
    },
    {
      id: 6,
      name: "Amit Singh",
      prize: "Iron Press",
      date: "2024-01-10",
      avatar: "👨‍🔬",
      discount: "Home Essential",
      productType: "iron",
      productImage: "🔥",
      lotteryNumber: "WIN1000"
    },
    {
      id: 7,
      name: "Sneha Reddy",
      prize: "LED TV 32\"",
      date: "2024-01-09",
      avatar: "👩‍🎓",
      discount: "Entertainment",
      productType: "tv",
      productImage: "📺",
      lotteryNumber: "TV2024"
    },
    {
      id: 8,
      name: "Rajesh Nair",
      prize: "Smart Watch",
      date: "2024-01-08",
      avatar: "👨‍💼",
      discount: "Tech Gadget",
      productType: "watch",
      productImage: "⌚",
      lotteryNumber: "SW123"
    }
  ]);

  const productCategories: ProductCategory[] = [
    {
      id: 'all',
      name: 'All Winners',
      icon: <Trophy className="w-5 h-5" />,
      winners: winners,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'tv',
      name: 'TV Winners',
      icon: <Tv className="w-5 h-5" />,
      winners: winners.filter(w => w.productType === 'tv'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'mixer',
      name: 'Mixer Winners',
      icon: <Zap className="w-5 h-5" />,
      winners: winners.filter(w => w.productType === 'mixer'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'iron',
      name: 'Iron Winners',
      icon: <Home className="w-5 h-5" />,
      winners: winners.filter(w => w.productType === 'iron'),
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'watch',
      name: 'Watch Winners',
      icon: <Watch className="w-5 h-5" />,
      winners: winners.filter(w => w.productType === 'watch'),
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  const featuredWinners = winners.slice(0, 3);
  const currentCategory = productCategories.find(cat => cat.id === activeCategory);
  const displayedWinners = currentCategory ? currentCategory.winners : winners;

  const getProductStats = (productType: string) => {
    const productWinners = winners.filter(w => w.productType === productType);
    return {
      count: productWinners.length,
      latestWinner: productWinners[0]?.name || 'None yet'
    };
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-12">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Trophy className="w-8 h-8 text-yellow-300" />
        </div>
        <div className="absolute top-40 right-20 animate-float animation-delay-1000">
          <Crown className="w-6 h-6 text-yellow-200" />
        </div>
        <div className="absolute bottom-40 left-32 animate-float animation-delay-2000">
          <Award className="w-7 h-7 text-yellow-400" />
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border-2 border-yellow-400/50 mb-6">
            <Crown className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h1 className="text-4xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Product Winners Gallery
            </h1>
            <Trophy className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-white/80 text-lg font-medium max-w-2xl mx-auto">
            Discover our lucky customers who won amazing products from Astha Collection
          </p>
        </div>

        {/* Product Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {productCategories.slice(1).map((category) => {
            const stats = getProductStats(category.id);
            return (
              <div key={category.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
                <div className="text-3xl mb-2">{category.winners[0]?.productImage}</div>
                <h3 className="text-white font-bold text-sm mb-1">{category.name}</h3>
                <p className="text-yellow-300 font-black text-xl">{stats.count} Winners</p>
                <p className="text-white/70 text-xs">Latest: {stats.latestWinner}</p>
              </div>
            );
          })}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {productCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:scale-105'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                {category.winners.length}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Winners - Top 3 */}
        {activeCategory === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredWinners.map((winner, index) => (
              <div key={winner.id} className="relative group">
                <div 
                  className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-6 rounded-full blur-md ${
                    index === 0 ? 'bg-yellow-500/40' : 
                    index === 1 ? 'bg-gray-400/40' : 'bg-orange-500/40'
                  }`}
                ></div>
                
                <div className={`relative bg-white/95 backdrop-blur-md rounded-3xl p-6 text-center transform transition-all duration-300 group-hover:scale-105 border-4 ${
                  index === 0 ? 'border-yellow-400 shadow-2xl shadow-yellow-500/30' : 
                  index === 1 ? 'border-gray-400 shadow-xl shadow-gray-500/20' : 
                  'border-orange-400 shadow-xl shadow-orange-500/20'
                }`}>
                  {/* Rank Badge */}
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg ${
                    index === 0 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 
                    index === 1 ? 'bg-gradient-to-r from-gray-500 to-gray-700' : 
                    'bg-gradient-to-r from-orange-500 to-red-500'
                  }`}>
                    {index + 1}
                  </div>

                  {/* Product Image */}
                  <div className="text-6xl mb-4">{winner.productImage}</div>

                  {/* Avatar */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center text-2xl shadow-2xl border-4 border-white">
                      {winner.avatar}
                    </div>
                    {index === 0 && (
                      <Crown className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500 fill-yellow-500 animate-bounce" />
                    )}
                  </div>

                  {/* Winner Info */}
                  <h3 className="text-xl font-black text-gray-800 mb-2">
                    {winner.name}
                  </h3>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-sm py-2 px-4 rounded-xl mb-3">
                    {winner.prize}
                  </div>
                  <p className="text-gray-600 text-sm font-medium mb-2">
                    Lottery: {winner.lotteryNumber}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {new Date(winner.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Winners Grid */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-yellow-400" />
              <div>
                <h2 className="text-3xl font-black text-white">
                  {currentCategory?.name} 
                </h2>
                <p className="text-white/70">
                  {displayedWinners.length} lucky winner{displayedWinners.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl">{currentCategory?.winners[0]?.productImage}</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedWinners.map((winner) => (
              <div key={winner.id} className="group">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 transform transition-all duration-300 group-hover:scale-105 border-2 border-white/50 shadow-lg">
                  {/* Product Header */}
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{winner.productImage}</div>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-sm py-1 px-3 rounded-full">
                      {winner.prize}
                    </div>
                  </div>

                  {/* Winner Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center text-xl shadow-md border-2 border-white">
                      {winner.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-gray-800 text-lg mb-1">
                        {winner.name}
                      </h4>
                      <p className="text-gray-600 text-xs font-medium">
                        Ticket: {winner.lotteryNumber}
                      </p>
                    </div>
                  </div>

                  {/* Date & Status */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">
                      {new Date(winner.date).toLocaleDateString('en-IN')}
                    </span>
                    <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                      Awarded
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {displayedWinners.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-black text-white mb-2">No Winners Yet</h3>
              <p className="text-white/70">Be the first to win this amazing product!</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 shadow-2xl border-4 border-white">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-2xl font-black text-white mb-4">
              Want to Be Our Next Winner?
            </h3>
            <p className="text-white/90 font-medium mb-6">
              Participate in our lucky draw and win amazing products
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-orange-600 font-black text-lg py-4 px-8 rounded-2xl hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Try Your Luck Now!
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}