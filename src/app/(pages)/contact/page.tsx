'use client';

import { JSX, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HeadphonesIcon as Headphones, Crown, Trophy, Users } from 'lucide-react';

interface ContactMethod {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  value: string;
  color: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods: ContactMethod[] = [
    {
      id: 1,
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+91 9936762093",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Send us an email anytime",
      value: "asthacollection07@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      description: "Come see our store",
      value: "Panwari Road, Near Canal, Gauhaniya, Prayagraj",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      description: "We&apos;re here to help",
      value: "Mon-Sun: 09AM - 09PM",
      color: "from-orange-500 to-red-500"
    }
  ];

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "How can I participate in the lucky draw?",
      answer: "Simply make a purchase above ₹999 and you&apos;ll be automatically entered into our lucky draw program."
    },
    {
      id: 2,
      question: "When are the winners announced?",
      answer: "Winners are announced every Friday at 6 PM on our website and social media channels."
    },
    {
      id: 3,
      question: "How do I claim my prize?",
      answer: "Winners will be contacted directly via phone and email with instructions to claim their prizes."
    },
    {
      id: 4,
      question: "What products can I win?",
      answer: "We offer a variety of prizes including LED TVs, kitchen appliances, watches, and other exciting products."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-12">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <MessageCircle className="w-8 h-8 text-blue-300" />
        </div>
        <div className="absolute top-40 right-20 animate-float animation-delay-1000">
          <Headphones className="w-6 h-6 text-green-200" />
        </div>
        <div className="absolute bottom-40 left-32 animate-float animation-delay-2000">
          <Mail className="w-7 h-7 text-purple-400" />
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border-2 border-green-400/50 mb-6">
            <Headphones className="w-8 h-8 text-green-400 animate-pulse" />
            <h1 className="text-4xl font-black bg-gradient-to-r from-green-400 via-blue-400 to-purple-300 bg-clip-text text-transparent">
              Get In Touch With Us
            </h1>
            <MessageCircle className="w-8 h-8 text-green-400 animate-pulse" />
          </div>
          <p className="text-white/80 text-lg font-medium max-w-2xl mx-auto">
            Have questions about our lucky draw or need assistance? We&apos;re here to help you win amazing products!
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method) => (
            <div key={method.id} className="group">
              <div className={`bg-gradient-to-r ${method.color} rounded-2xl p-6 text-center transform transition-all duration-300 group-hover:scale-105 shadow-2xl border-2 border-white/20`}>
                <div className="w-14 h-14 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                  {method.icon}
                </div>
                <h3 className="text-white font-black text-lg mb-2">{method.title}</h3>
                <p className="text-white/80 text-sm mb-3">{method.description}</p>
                <p className="text-white font-bold text-base">{method.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20">
            <div className="flex items-center gap-3 mb-8">
              <Send className="w-8 h-8 text-yellow-400" />
              <div>
                <h2 className="text-3xl font-black text-white">Send Us a Message</h2>
                <p className="text-white/70">We&apos;ll get back to you within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border-2 border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border-2 border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border-2 border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                  placeholder="What&apos;s this about?"
                />
              </div>
              
              <div>
                <label className="block text-white/80 font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-white/10 border-2 border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-black text-lg py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-white/20 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-yellow-500/30'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                )}
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-green-400" />
              <div>
                <h2 className="text-3xl font-black text-white">Frequently Asked Questions</h2>
                <p className="text-white/70">Quick answers to common questions</p>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="group">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border-2 border-white/10 transition-all duration-300 group-hover:border-green-400/50 group-hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-black text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">{faq.question}</h3>
                        <p className="text-white/70 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 text-center border-2 border-white/10">
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-white font-black text-2xl">500+</div>
                <div className="text-white/70 text-sm">Happy Winners</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 text-center border-2 border-white/10">
                <Crown className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-white font-black text-2xl">50+</div>
                <div className="text-white/70 text-sm">Products Awarded</div>
              </div>
            </div>
          </div>
        </div>

        {/* Map & Location Section */}
        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-8 h-8 text-red-400" />
            <div>
              <h2 className="text-3xl font-black text-white">Visit Our Store</h2>
              <p className="text-white/70">Come see us in person</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border-2 border-white/20">
              <h3 className="text-white font-bold text-xl mb-4">Astha Collection Store</h3>
              <div className="space-y-3 text-white/80">
                <p className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span>123 Business Street, Fort Area, Mumbai, Maharashtra 400001</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>+91 9936762093</span>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span>Monday - Sunday: 09:00 AM - 09:00 PM</span>
                </p>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-500/20 rounded-2xl border-2 border-yellow-400/30">
                <p className="text-yellow-200 text-sm font-medium text-center">
                  🎉 Special Offer: Visit our store to get exclusive lucky draw entries!
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-4 border-2 border-white/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-white/80 font-medium">Interactive Map Coming Soon</p>
                <p className="text-white/60 text-sm">We&apos;re working on adding an interactive map to help you find us easily!</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 shadow-2xl border-4 border-white">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-black text-white mb-4">
              Ready to Win Amazing Products?
            </h3>
            <p className="text-white/90 font-medium mb-6">
              Join thousands of happy customers and get a chance to win exciting prizes with every purchase
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-green-600 font-black text-lg py-4 px-8 rounded-2xl hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Shopping Now!
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
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}