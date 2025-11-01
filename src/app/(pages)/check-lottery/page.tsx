'use client';

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { UserData } from '@/types';
import { Sparkles, Gift, Trophy, ArrowLeft, Ticket, Star, Crown } from 'lucide-react';

export default function CheckLottery() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [serialNo, setSerialNo] = useState<string>('');

  useEffect(() => {
    // In a real app, get user data from state management or props
    // For demo, using mock data
    setUserData({
      fullName: 'Guest User',
      contactNo: '1234567890'
    });
  }, [router]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (serialNo.trim()) {
      router.push(`/result?serial=${encodeURIComponent(serialNo)}`);
    }
  };

  const handleSerialNoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSerialNo(e.target.value.toUpperCase());
  };

  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900 flex items-center justify-center">
        <div className="text-white text-2xl font-bold flex items-center gap-3">
          <Sparkles className="w-8 h-8 animate-spin" />
          Loading...
        </div>
      </div>
    );
  }

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
        
        {/* Trophy Elements */}
        <div className="absolute top-20 right-1/3 animate-bounce">
          <Trophy className="w-10 h-10 text-yellow-300 opacity-40" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-bounce animation-delay-1000">
          <Crown className="w-12 h-12 text-yellow-400 opacity-40" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-lg w-full">
          {/* Brand Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center gap-3 bg-white/95 backdrop-blur-md rounded-full px-8 py-4 shadow-2xl border-2 border-yellow-400 mb-6">
              <Gift className="w-8 h-8 text-pink-600" />
              <h1 className="text-2xl font-black bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 bg-clip-text text-transparent">
                Astha Collection
              </h1>
            </div>
          </div>

          {/* Welcome Card */}
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-md opacity-50"></div>
              <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-3xl shadow-2xl p-6 border-4 border-white">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-white" />
                      <p className="text-white font-bold text-sm">Welcome Back!</p>
                    </div>
                    <h2 className="text-2xl font-black text-white mb-1">
                      {userData.fullName}
                    </h2>
                    <p className="text-white/90 font-semibold flex items-center gap-2">
                      <span className="text-xl">📱</span>
                      {userData.contactNo}
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <Trophy className="w-12 h-12 text-white animate-bounce" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Form Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-lg opacity-30"></div>
            <div className="relative bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border-2 border-white/50">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl px-6 py-3 mb-4">
                  <Ticket className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-black text-gray-800">Enter Your Ticket</h3>
                  <Ticket className="w-6 h-6 text-pink-600" />
                </div>
                <p className="text-gray-600 font-semibold">Check if you're our lucky winner!</p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-center">
                    <span className="text-lg font-black text-gray-800 flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                      Lottery Serial Number
                      <Sparkles className="w-5 h-5 text-pink-600" />
                    </span>
                    <span className="text-sm text-gray-500 font-medium mt-1 block">
                      Found on your purchase receipt
                    </span>
                  </label>
                  
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative">
                      <input
                        type="text"
                        value={serialNo}
                        onChange={handleSerialNoChange}
                        required
                        className="w-full px-6 py-5 text-center text-2xl font-black tracking-widest border-4 border-purple-300 rounded-2xl focus:ring-4 focus:ring-purple-400 focus:border-purple-500 transition-all duration-200 bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800 placeholder-gray-400 uppercase"
                        placeholder="L123456"
                        maxLength={10}
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl">
                        🎫
                      </div>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">💡</div>
                      <div>
                        <p className="text-sm font-bold text-gray-700 mb-1">Where to find it?</p>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Your lottery serial number is printed at the bottom of your purchase receipt. It starts with 'L' followed by numbers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="relative w-full group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-700 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-purple-500 via-pink-600 to-rose-700 text-white py-5 px-6 rounded-2xl font-black text-xl shadow-xl transform group-hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 border-2 border-white/30">
                    <Trophy className="w-6 h-6 animate-bounce" />
                    <span>Check Winning Status</span>
                    <Sparkles className="w-6 h-6 animate-spin" />
                  </div>
                </button>
              </form>

              {/* Back Button */}
              <button
                onClick={() => router.push('/')}
                className="w-full mt-4 bg-white border-2 border-purple-300 text-purple-700 py-4 px-6 rounded-2xl font-bold text-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 hover:bg-purple-50"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to User Info</span>
              </button>

              {/* Trust Indicator */}
              <div className="mt-6 pt-6 border-t-2 border-pink-200">
                <div className="flex items-center justify-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-green-600 font-bold">
                    <span>✓</span>
                    <span>Verified Entry</span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-600 font-bold">
                    <span>🔒</span>
                    <span>Secure Check</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
            <p className="text-white font-bold text-sm drop-shadow-lg flex items-center justify-center gap-2">
              <Gift className="w-4 h-4" />
              Good Luck from Astha Collection
              <Sparkles className="w-4 h-4" />
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