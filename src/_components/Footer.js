'use client';

import { Crown, Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter, Heart, Gift,Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Try Your Luck', href: '/lottery' },
    { name: 'Winners Gallery', href: '/winners' },
    { name: 'Our Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/asthacollection', color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/asthacollection', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/asthacollection', color: 'hover:text-sky-500' },
  ];

  const storeInfo = [
    { icon: Clock, text: '10:00 AM - 9:00 PM', subtext: 'Monday to Sunday' },
    { icon: MapPin, text: 'Main Market, City Center', subtext: 'Your City - 123456' },
    { icon: Phone, text: '+91 99367 62093', subtext: 'Call for inquiry' },
    { icon: Mail, text: 'asthacollection@gmail.com', subtext: 'Email us anytime' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900 text-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sparkle Effects */}
        <div className="absolute top-10 left-10 animate-pulse">
          <Gift className="w-8 h-8 text-yellow-300 opacity-20" />
        </div>
        <div className="absolute top-32 right-20 animate-pulse animation-delay-1000">
          <Gift className="w-6 h-6 text-pink-300 opacity-20" />
        </div>
        <div className="absolute bottom-40 left-32 animate-pulse animation-delay-2000">
          <Gift className="w-7 h-7 text-rose-300 opacity-20" />
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur-md opacity-70"></div>
                <div className="relative bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 p-3 rounded-full">
                  <Crown className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                    Astha
                  </span>
                  <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                    {" "}Collection
                  </span>
                </h2>
                <p className="text-sm text-pink-200 font-semibold tracking-wider">
                  PREMIUM FASHION BOUTIQUE
                </p>
              </div>
            </div>
            
            <p className="text-pink-100 mb-6 leading-relaxed">
              Discover the latest fashion trends and exclusive collections at Astha Collection. 
              Your one-stop destination for premium clothing and accessories since 2020.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-black text-yellow-300 mb-6 flex items-center gap-2">
              <span>Quick Links</span>
              <Heart className="w-4 h-4 fill-yellow-300" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-pink-100 hover:text-yellow-300 transition-colors duration-300 font-medium flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-black text-yellow-300 mb-6 flex items-center gap-2">
              <span>Store Info</span>
              <MapPin className="w-4 h-4" />
            </h3>
            <div className="space-y-4">
              {storeInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 group-hover:bg-yellow-400 group-hover:text-purple-900 transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.text}</p>
                      <p className="text-pink-200 text-xs">{item.subtext}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lucky Draw Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-black text-yellow-300 mb-6 flex items-center gap-2">
              <span>Lucky Draw</span>
              <Gift className="w-4 h-4 fill-yellow-300" />
            </h3>
            
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-400/30 mb-4">
              <div className="text-center">
                <div className="text-2xl mb-2">🎁</div>
                <h4 className="font-black text-white text-lg mb-2">Win Amazing Prizes!</h4>
                <p className="text-yellow-100 text-sm mb-4">
                  Participate in our daily lucky draw and win exclusive discounts & gifts
                </p>
                <a
                  href="/lottery"
                  className="inline-flex items-center gap-2 bg-white text-purple-900 font-black py-3 px-6 rounded-2xl hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Sparkles className="w-4 h-4" />
                  Try Your Luck
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-pink-200 text-sm">
              <span>© {currentYear} Astha Collection. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span>Crafted with <Heart className="w-4 h-4 fill-pink-400 inline" /> for our valued customers</span>
            </div>
            
            <div className="flex items-center gap-6 text-xs text-pink-200">
              <a href="/privacy-policy" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
              <a href="/return-policy" className="hover:text-yellow-300 transition-colors">Return Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button for Mobile */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <a
          href="tel:+919936762093"
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-300"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </a>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
}