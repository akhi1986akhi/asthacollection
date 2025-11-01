'use client';

import { useEffect, useState, MouseEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { UserData, LotteryResult, WinningNumbersMap } from '@/types';
import { Sparkles, Gift, Trophy, Star, PartyPopper, Heart, Ticket, RotateCcw, UserPlus } from 'lucide-react';

// Mock winning numbers database with products
const WINNING_NUMBERS: WinningNumbersMap = {
  'L123456': { prize: 'LED TV 43"', drawDate: '2024-01-15', productType: 'tv' },
  'L789012': { prize: 'Mixer Grinder', drawDate: '2024-01-10', productType: 'mixer' },
  'L345678': { prize: 'Iron Press', drawDate: '2024-01-05', productType: 'iron' },
  'L901234': { prize: 'Premium Wrist Watch', drawDate: '2024-01-01', productType: 'watch' },
  'WIN500': { prize: 'Mixer Grinder', drawDate: '2024-01-20', productType: 'mixer' },
  'WIN1000': { prize: 'Iron Press', drawDate: '2024-01-20', productType: 'iron' }
};

// Product images mapping
const PRODUCT_IMAGES: { [key: string]: string } = {
  'tv': '📺',
  'mixer': '🔌',
  'iron': '🔥',
  'watch': '⌚'
};

export default function Result() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [result, setResult] = useState<LotteryResult | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const serialNo = searchParams.get('serial');

  useEffect(() => {
    // Mock user data for demo
    setUserData({
      fullName: 'Guest User',
      contactNo: '1234567890'
    });

    if (!serialNo) {
      router.push('/check-lottery');
      return;
    }

    // Check if serial number is a winner
    const winningInfo = WINNING_NUMBERS[serialNo.toUpperCase()];
    if (winningInfo) {
      setResult({
        isWinner: true,
        message: 'Congratulations! You Won!',
        prize: winningInfo.prize,
        drawDate: winningInfo.drawDate,
        serialNo: serialNo.toUpperCase(),
        productType: winningInfo.productType
      });
      setShowConfetti(true);
    } else {
      setResult({
        isWinner: false,
        message: 'Better Luck Next Time!',
        serialNo: serialNo.toUpperCase()
      });
    }
  }, [serialNo, router]);

  const handleCheckAnother = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/check-lottery');
  };

  const handleNewUser = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/');
  };

  if (!userData || !result) {
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
        
        {/* Confetti Effect for Winners */}
        {result.isWinner && showConfetti && (
          <>
            <div className="absolute top-0 left-1/4 animate-fall">
              <PartyPopper className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="absolute top-0 right-1/4 animate-fall animation-delay-200">
              <Trophy className="w-8 h-8 text-yellow-300" />
            </div>
            <div className="absolute top-0 left-1/2 animate-fall animation-delay-400">
              <Gift className="w-8 h-8 text-pink-400" />
            </div>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          {/* Brand Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center gap-3 bg-white/95 backdrop-blur-md rounded-full px-8 py-4 shadow-2xl border-2 border-yellow-400">
              <Gift className="w-8 h-8 text-pink-600" />
              <h1 className="text-2xl font-black bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 bg-clip-text text-transparent">
                Astha Collection
              </h1>
            </div>
          </div>

          {/* User Info Bar */}
          <div className="mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👤</span>
                  <span className="font-bold">{userData.fullName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ticket className="w-5 h-5" />
                  <span className="font-bold">{result.serialNo}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Result Card */}
          {result.isWinner ? (
            <div className="relative mb-6">
              {/* Winner Card */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-3xl shadow-2xl border-4 border-white overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-300 via-white to-yellow-300"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-300 via-white to-yellow-300"></div>
                
                <div className="p-10 text-center relative">
                  {/* Animated Product Image */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-50"></div>
                      <div className="relative bg-white/30 backdrop-blur-sm rounded-full p-8 animate-bounce">
                        <div className="text-9xl">
                          {PRODUCT_IMAGES[result.productType || 'watch']}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Winner Message */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <Sparkles className="w-8 h-8 text-white animate-spin" />
                      <h2 className="text-5xl font-black text-white drop-shadow-lg">
                        {result.message}
                      </h2>
                      <Sparkles className="w-8 h-8 text-white animate-spin" />
                    </div>

                    {/* Prize Product */}
                    <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/50">
                      <p className="text-white font-bold text-lg mb-3 flex items-center justify-center gap-2">
                        <Gift className="w-6 h-6" />
                        Your Prize
                      </p>
                      <div className="text-6xl font-black text-white drop-shadow-2xl mb-4">
                        {result.prize}
                      </div>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/40">
                        <Trophy className="w-5 h-5 text-white" />
                        <span className="text-white font-bold text-sm">Premium Quality Product</span>
                      </div>
                    </div>

                    {/* Draw Date */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/40">
                      <span className="text-2xl">📅</span>
                      <span className="text-white font-bold">
                        Draw Date: {new Date(result.drawDate!).toLocaleDateString('en-IN', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center justify-center gap-2 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-8 h-8 text-white fill-white animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Celebration Message */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-2xl px-8 py-4 shadow-xl border-2 border-yellow-400">
                  <PartyPopper className="w-6 h-6 text-pink-600" />
                  <p className="text-gray-800 font-black text-lg">
                    Visit our store to claim your prize!
                  </p>
                  <Gift className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative mb-6">
              {/* Non-Winner Card */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-lg opacity-30"></div>
              <div className="relative bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 text-center border-2 border-white/50">
                {/* Sad Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-full p-8">
                    <div className="text-8xl">😔</div>
                  </div>
                </div>

                {/* Message */}
                <h2 className="text-4xl font-black text-gray-800 mb-4">
                  {result.message}
                </h2>
                
                <p className="text-xl text-gray-600 font-semibold mb-6 leading-relaxed">
                  Don't worry! Every ticket is a step closer to winning.<br/>
                  Try again with another lottery ticket.
                </p>

                {/* Encouragement Box */}
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Heart className="w-6 h-6 text-pink-600" />
                    <p className="text-gray-800 font-bold text-lg">Keep Trying!</p>
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <p className="text-gray-700 font-medium">
                    Every purchase gives you another chance to win amazing prizes at Astha Collection!
                  </p>
                </div>

                {/* Stars */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-purple-400 fill-purple-400" />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-4">
            {/* Check Another Button */}
            <button
              onClick={handleCheckAnother}
              className="relative w-full group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-700 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-purple-500 via-pink-600 to-rose-700 text-white py-5 px-6 rounded-2xl font-black text-xl shadow-xl transform group-hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 border-2 border-white/30">
                <RotateCcw className="w-6 h-6" />
                <span>Check Another Lottery</span>
                <Ticket className="w-6 h-6" />
              </div>
            </button>

            {/* New User Button */}
            <button
              onClick={handleNewUser}
              className="w-full bg-white/95 backdrop-blur-md border-2 border-purple-300 text-purple-700 py-5 px-6 rounded-2xl font-bold text-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 hover:bg-purple-50"
            >
              <UserPlus className="w-5 h-5" />
              <span>New User Entry</span>
            </button>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
            <p className="text-white font-bold text-sm drop-shadow-lg flex items-center justify-center gap-2">
              <Gift className="w-4 h-4" />
              Thank you for choosing Astha Collection
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
        
        @keyframes fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-fall {
          animation: fall 3s ease-in infinite;
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