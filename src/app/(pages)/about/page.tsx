'use client';

import { JSX } from 'react';
import { Crown, Trophy, Users, Target, Heart, Sparkles, Star, MapPin, Award, ShoppingBag, Shield, Truck } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  description: string;
}

interface ValueCard {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

interface ServiceArea {
  id: number;
  name: string;
  icon: JSX.Element;
  description: string;
}

export default function AboutPage() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Brijendra Kumar Kushwaha",
      role: "Founder & CEO",
      avatar: "👑",
      description: "Visionary entrepreneur with a passion for bringing premium fashion to rural India"
    },
    {
      id: 2,
      name: "Anjali Kushwaha",
      role: "Head of Operations",
      avatar: "💼",
      description: "Ensuring smooth operations across all our store locations"
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      role: "Fashion Curator",
      avatar: "👔",
      description: "Expert in selecting the latest trends for our customers"
    },
    {
      id: 4,
      name: "Priya Singh",
      role: "Customer Experience",
      avatar: "⭐",
      description: "Dedicated to making every shopping experience memorable"
    }
  ];

  const coreValues: ValueCard[] = [
    {
      id: 1,
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do. Their satisfaction is our ultimate goal.",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 2,
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Premium quality clothing that lasts, ensuring value for every rupee spent.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      icon: <Target className="w-8 h-8" />,
      title: "Affordable Luxury",
      description: "Making premium fashion accessible to everyone in our communities.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      icon: <Truck className="w-8 h-8" />,
      title: "Community Focus",
      description: "Deeply rooted in local communities, understanding and serving their unique needs.",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const serviceAreas: ServiceArea[] = [
    {
      id: 1,
      name: "Gauhniya",
      icon: <MapPin className="w-6 h-6" />,
      description: "Our flagship location serving the vibrant community of Gauhniya"
    },
    {
      id: 2,
      name: "Karchhana",
      icon: <MapPin className="w-6 h-6" />,
      description: "Bringing premium fashion to the heart of Karchhana"
    },
    {
      id: 3,
      name: "Jasra",
      icon: <MapPin className="w-6 h-6" />,
      description: "Serving the fashion needs of Jasra with quality and style"
    },
    {
      id: 4,
      name: "Zari",
      icon: <MapPin className="w-6 h-6" />,
      description: "Our newest location, expanding our reach to Zari"
    }
  ];

  const milestones = [
    { year: "2020", event: "Founded Astha Collection in Gauhniya", icon: "🚀" },
    { year: "2021", event: "Expanded to Karchhana & Jasra", icon: "📈" },
    { year: "2022", event: "Launched Lucky Draw Program", icon: "🎯" },
    { year: "2023", event: "Opened Zari Branch & 500+ Winners", icon: "🏆" },
    { year: "2024", event: "1000+ Happy Customers Served", icon: "👑" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-12">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Crown className="w-8 h-8 text-yellow-300" />
        </div>
        <div className="absolute top-40 right-20 animate-float animation-delay-1000">
          <Sparkles className="w-6 h-6 text-blue-200" />
        </div>
        <div className="absolute bottom-40 left-32 animate-float animation-delay-2000">
          <Award className="w-7 h-7 text-green-400" />
        </div>
        <div className="absolute top-1/2 right-32 animate-float animation-delay-3000">
          <Star className="w-5 h-5 text-pink-300" />
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border-2 border-yellow-400/50 mb-6">
            <Crown className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h1 className="text-4xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              About Astha Collection
            </h1>
            <Trophy className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-white/80 text-lg font-medium max-w-2xl mx-auto">
            Revolutionizing fashion in rural India since 2020 - Bringing premium clothing to your doorstep
          </p>
        </div>

        {/* Founder Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <Crown className="w-8 h-8 text-yellow-400" />
              <div>
                <h2 className="text-3xl font-black text-white">Our Founder&apos;s Vision</h2>
                <p className="text-white/70">The journey behind Astha Collection</p>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-4xl shadow-2xl border-4 border-white">
                👑
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Brijendra Kumar Kushwaha</h3>
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-1 px-4 rounded-full text-sm inline-block mb-4">
                Founder & CEO
              </div>
            </div>

            <div className="space-y-4 text-white/80">
              <p className="text-lg leading-relaxed">
                &quot;In 2020, I envisioned creating a fashion destination that would bring premium quality clothing to the heart of rural India. Growing up in these communities, I understood the need for affordable yet stylish clothing for all occasions.&quot;
              </p>
              <p className="leading-relaxed">
                Astha Collection was born from this vision - to provide our communities in Gauhniya, Karchhana, Jasra, and Zari with access to the latest fashion trends without compromising on quality or breaking the bank.
              </p>
              <p className="leading-relaxed">
                Our unique lucky draw program is our way of giving back to the community that has supported us from day one. Every purchase brings not just quality clothing, but also the excitement of winning amazing products.&quot;
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Milestones */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-white/20">
              <h3 className="text-2xl font-black text-white mb-6 text-center">Our Journey</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-black text-sm">
                      {milestone.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-yellow-400 font-bold text-lg">{milestone.year}</div>
                      <div className="text-white/80 text-sm">{milestone.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 text-center border-2 border-white/20">
                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-white font-black text-2xl">1000+</div>
                <div className="text-white/90 text-sm">Happy Customers</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-4 text-center border-2 border-white/20">
                <Trophy className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-white font-black text-2xl">500+</div>
                <div className="text-white/90 text-sm">Lucky Winners</div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-8 h-8 text-red-400" />
            <div>
              <h2 className="text-3xl font-black text-white">Areas We Serve</h2>
              <p className="text-white/70">Bringing fashion closer to you</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area) => (
              <div key={area.id} className="group">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border-2 border-white/10 transition-all duration-300 group-hover:scale-105 group-hover:border-yellow-400/50">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center text-white">
                    {area.icon}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{area.name}</h3>
                  <p className="text-white/70 text-sm">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Our Core Values</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Astha Collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <div key={value.id} className="group">
                <div className={`bg-gradient-to-r ${value.color} rounded-2xl p-6 text-center transform transition-all duration-300 group-hover:scale-105 shadow-2xl border-2 border-white/20 h-full`}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-white font-black text-xl mb-3">{value.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <ShoppingBag className="w-8 h-8 text-green-400" />
            <div>
              <h2 className="text-3xl font-black text-white">What We Offer</h2>
              <p className="text-white/70">Premium clothing for every occasion</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border-2 border-white/10 transition-all duration-300 group-hover:scale-105 group-hover:border-purple-400/50">
                <div className="text-4xl mb-4">👔</div>
                <h3 className="text-white font-bold text-xl mb-3">Formal Wear</h3>
                <p className="text-white/70 text-sm">
                  Elegant suits, shirts, and formal attire for professional settings and special events
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border-2 border-white/10 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400/50">
                <div className="text-4xl mb-4">👕</div>
                <h3 className="text-white font-bold text-xl mb-3">Casual Wear</h3>
                <p className="text-white/70 text-sm">
                  Comfortable and stylish everyday clothing perfect for family gatherings and outings
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border-2 border-white/10 transition-all duration-300 group-hover:scale-105 group-hover:border-green-400/50">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-white font-bold text-xl mb-3">Festive Collection</h3>
                <p className="text-white/70 text-sm">
                  Traditional and festive wear for weddings, festivals, and cultural celebrations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Meet Our Team</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              The passionate individuals dedicated to serving you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border-2 border-white/10 transition-all duration-300 group-hover:scale-105 group-hover:border-yellow-400/50">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center text-2xl shadow-lg border-2 border-white">
                    {member.avatar}
                  </div>
                  <h3 className="text-white font-black text-lg mb-2">{member.name}</h3>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold py-1 px-3 rounded-full mb-3 inline-block">
                    {member.role}
                  </div>
                  <p className="text-white/70 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 shadow-2xl border-4 border-white">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-black text-white mb-4">
              Join the Astha Collection Family
            </h3>
            <p className="text-white/90 font-medium mb-6">
              Experience premium fashion with exciting lucky draw opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 font-black text-lg py-4 px-8 rounded-2xl hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl">
                Visit Our Store
              </button>
              <button className="bg-transparent border-2 border-white text-white font-black text-lg py-4 px-8 rounded-2xl hover:scale-105 transform transition-all duration-200 hover:bg-white/10">
                View Winners Gallery
              </button>
            </div>
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
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}