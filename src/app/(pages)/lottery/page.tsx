'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { UserData } from '@/types';
import { Sparkles, Gift, Award, Star } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState<UserData>({
    fullName: '',
    contactNo: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: UserData) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.fullName.trim() && formData.contactNo.trim()) {
      // Store in memory instead of sessionStorage
      router.push('/check-lottery');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Stars */}
        <div className="absolute top-10 left-10 animate-pulse">
          <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
        </div>
        <div className="absolute top-32 right-20 animate-pulse animation-delay-200">
          <Star className="w-4 h-4 text-yellow-200 fill-yellow-200" />
        </div>
        <div className="absolute bottom-40 left-32 animate-pulse animation-delay-400">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute top-1/2 right-10 animate-pulse animation-delay-600">
          <Star className="w-7 h-7 text-yellow-300 fill-yellow-300" />
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Sparkle Effects */}
        <div className="absolute top-20 right-1/3 animate-ping">
          <Sparkles className="w-8 h-8 text-yellow-200 opacity-60" />
        </div>
        <div className="absolute bottom-32 right-1/4 animate-ping animation-delay-1000">
          <Sparkles className="w-6 h-6 text-pink-200 opacity-60" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          {/* Brand Logo & Header */}
          <div className="text-center mb-8 space-y-6">
            {/* Logo Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 border-4 border-yellow-400">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur-xl opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 p-4 rounded-full">
                    <Gift className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 bg-clip-text text-transparent mb-2">
                Astha Collection
              </h1>
              <p className="text-pink-600 font-bold text-lg">Premium Fashion Boutique</p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-gray-600 font-semibold">Since 2020</span>
                <Sparkles className="w-5 h-5 text-yellow-500" />
              </div>
            </div>

            {/* Lucky Draw Banner */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-md opacity-50"></div>
              <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-3xl shadow-2xl p-6 border-4 border-white">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Award className="w-8 h-8 text-white animate-bounce" />
                  <h2 className="text-3xl font-black text-white">Lucky Draw!</h2>
                  <Award className="w-8 h-8 text-white animate-bounce animation-delay-200" />
                </div>
                <p className="text-white font-bold text-lg">Win Exclusive Discounts</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-white fill-white" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-lg opacity-30"></div>
            <div className="relative bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border-2 border-white/50">
              <div className="text-center mb-6">
                <p className="text-gray-700 font-semibold text-lg">Enter Your Details Below</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Sparkles className="w-5 h-5 text-pink-500" />
                  <span className="text-sm text-pink-600 font-medium">You could be our next winner!</span>
                  <Sparkles className="w-5 h-5 text-pink-500" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-800 flex items-center gap-2">
                    <span className="text-pink-600">✦</span> Full Name
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 pl-12 border-2 border-pink-300 rounded-2xl focus:ring-4 focus:ring-pink-400 focus:border-pink-500 transition-all duration-200 bg-pink-50 font-medium text-gray-800 placeholder-gray-400"
                      placeholder="Enter your full name"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">
                      👤
                    </div>
                  </div>
                </div>

                {/* Contact Number Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-800 flex items-center gap-2">
                    <span className="text-pink-600">✦</span> Contact Number
                  </label>
                  <div className="relative group">
                    <input
                      type="tel"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 pl-12 border-2 border-purple-300 rounded-2xl focus:ring-4 focus:ring-purple-400 focus:border-purple-500 transition-all duration-200 bg-purple-50 font-medium text-gray-800 placeholder-gray-400"
                      placeholder="Enter your contact number"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">
                      📱
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="relative w-full group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-pink-500 via-rose-600 to-purple-700 text-white py-5 px-6 rounded-2xl font-black text-xl shadow-xl transform group-hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 border-2 border-white/30">
                    <Sparkles className="w-6 h-6 animate-spin" />
                    <span>Check Your Luck!</span>
                    <Gift className="w-6 h-6 animate-bounce" />
                  </div>
                </button>
              </form>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t-2 border-pink-200">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span className="text-green-500">✓</span>
                    <span className="font-semibold">Verified</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">🔒</span>
                    <span className="font-semibold">Secure</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-pink-500">❤️</span>
                    <span className="font-semibold">Trusted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-6 bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
            <p className="text-white font-semibold text-sm drop-shadow-lg">
              ✨ Discover the Latest Fashion Trends at Astha Collection ✨
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}