'use client';

import { Star, Quote, Heart } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    comment: 'The quality of the sarees is exceptional! I received so many compliments at my brother\'s wedding. Astha Collection never disappoints!',
    image: '/api/placeholder/100/100',
    purchase: 'Banarasi Silk Saree',
    verified: true
  },
  {
    id: 2,
    name: 'Anjali Patel',
    location: 'Delhi',
    rating: 5,
    comment: 'Absolutely in love with my new lehenga! The fitting was perfect and the embroidery is breathtaking. Will definitely shop again!',
    image: '/api/placeholder/100/100',
    purchase: 'Designer Lehenga',
    verified: true
  },
  {
    id: 3,
    name: 'Riya Mehta',
    location: 'Bangalore',
    rating: 4,
    comment: 'Great collection and amazing customer service. The delivery was fast and the packaging was beautiful. Highly recommended!',
    image: '/api/placeholder/100/100',
    purchase: 'Anarkali Suit',
    verified: true
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    location: 'Hyderabad',
    rating: 5,
    comment: 'The fabric quality is superb and the designs are so unique. I\'ve bought multiple outfits and each one is better than the last!',
    image: '/api/placeholder/100/100',
    purchase: 'Kurti Set',
    verified: true
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-4 py-2 shadow-lg mb-4">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-bold">Customer Love</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            What Our
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our lovely customers have to say about their shopping experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-3xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-12 h-12 rounded-2xl flex items-center justify-center">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-bold text-gray-700">{testimonial.rating}.0</span>
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-bold">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    <p className="text-blue-600 text-sm font-semibold">{testimonial.purchase}</p>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-black text-gray-900 mb-2">10K+</div>
            <div className="text-gray-600 font-semibold">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-gray-900 mb-2">4.8/5</div>
            <div className="text-gray-600 font-semibold">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-gray-900 mb-2">5K+</div>
            <div className="text-gray-600 font-semibold">Products Sold</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-gray-900 mb-2">98%</div>
            <div className="text-gray-600 font-semibold">Recommend Us</div>
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
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}