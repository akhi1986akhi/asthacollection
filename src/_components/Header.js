'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Crown, Gift, Sparkles, Menu, X, Home, Trophy, Phone } from 'lucide-react';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Home, current: pathname === '/' },
    { name: 'Try Luck', href: '/lottery', icon: Sparkles, current: pathname === '/lottery' },
    { name: 'Winners', href: '/winners', icon: Trophy, current: pathname === '/winners' },
    { name: 'Products', href: '/products', icon: Gift, current: pathname === '/products' },
    { name: 'Contact', href: '/contact', icon: Phone, current: pathname === '/contact' },
  ];

  return (
    <header className="relative z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-bold">
          <div className="flex items-center gap-4">
            <span>🎉 Lucky Draw Live!</span>
            <span className="hidden md:inline">Win Amazing Prizes</span>
          </div>
          <div className="flex items-center gap-4">
            <span>📞 +91 9936762093</span>
            <span className="hidden md:inline">🏪 Since 2020</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white/95 backdrop-blur-md border-b-2 border-purple-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Brand */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => router.push('/')}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 p-3 rounded-full">
                  <Crown className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                    Astha
                  </span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {" "}Collection
                  </span>
                </h1>
                <p className="text-xs text-gray-600 font-semibold tracking-wider">
                  PREMIUM FASHION BOUTIQUE
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => router.push(item.href)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-bold transition-all duration-300 ${
                      item.current
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transform scale-105'
                        : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600 hover:scale-105'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </button>
                );
              })}
              
              {/* Special Lottery Button */}
              <button
                onClick={() => router.push('/lottery')}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ml-2 border-2 border-yellow-300"
              >
                <Sparkles className="w-5 h-5" />
                <span>Try Luck</span>
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-purple-100 shadow-2xl">
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      router.push(item.href);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-4 rounded-2xl font-bold transition-all duration-300 ${
                      item.current
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </button>
                );
              })}
              
              {/* Mobile Lottery Button */}
              <button
                onClick={() => {
                  router.push('/lottery');
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black rounded-2xl shadow-lg mt-4 border-2 border-yellow-300"
              >
                <Sparkles className="w-5 h-5" />
                <span>Try Your Luck Now!</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}