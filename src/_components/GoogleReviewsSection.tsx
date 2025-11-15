'use client';

import { Star, MapPin, Calendar, ExternalLink } from 'lucide-react';

const googleReviews = [
  {
    id: 1,
    name: 'Neha Gupta',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Best place for ethnic wear in the city! The collection is amazing and the staff is very helpful. Loved my shopping experience!',
    location: 'Local Guide',
    photos: 3,
    helpful: 12
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    rating: 5,
    date: '1 month ago',
    comment: 'Bought a saree for my wife\'s birthday. She absolutely loved it! Quality is top-notch and delivery was super fast.',
    location: 'Local Guide',
    photos: 1,
    helpful: 8
  },
  {
    id: 3,
    name: 'Meera Joshi',
    rating: 4,
    date: '3 weeks ago',
    comment: 'Great variety of designer wear. Prices are reasonable for the quality. Will visit again for festival shopping.',
    location: 'Local Guide',
    photos: 2,
    helpful: 5
  },
  {
    id: 4,
    name: 'Arun Singh',
    rating: 5,
    date: '2 months ago',
    comment: 'Excellent customer service! Helped me choose the perfect outfit for a wedding. The fitting was perfect!',
    location: 'Local Guide',
    photos: 0,
    helpful: 15
  }
];

export default function GoogleReviewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full px-4 py-2 shadow-lg mb-4">
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-500 text-xs font-bold">G</span>
            </div>
            <span className="text-sm font-bold">Google Reviews</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Rated
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              4.8/5 on Google
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Astha Collection for their fashion needs.
          </p>
        </div>

        {/* Google Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {googleReviews.map((review) => (
            <div
              key={review.id}
              className="group bg-white rounded-3xl shadow-xl p-6 border-2 border-transparent hover:border-green-200 transition-all duration-300 cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-3 h-3 text-gray-500" />
                      <span className="text-sm text-gray-600">{review.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Google Stars */}
                <div className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'text-green-500 fill-green-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Review Content */}
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed">"{review.comment}"</p>
              </div>

              {/* Review Meta */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{review.date}</span>
                  </div>
                  
                  {review.photos > 0 && (
                    <div className="flex items-center gap-1">
                      <span>📷</span>
                      <span>{review.photos} photo{review.photos > 1 ? 's' : ''}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-1">
                  <span>👍</span>
                  <span>{review.helpful} helpful</span>
                </div>
              </div>

              {/* Google Badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                  <span>Google</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 text-center border-2 border-green-100">
          <h3 className="text-2xl font-black text-gray-900 mb-4">
            Love Our Collection?
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Share your experience with others and help them discover the best in fashion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span>Write a Google Review</span>
              <ExternalLink className="w-5 h-5" />
            </button>
            <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-500 hover:text-white transition-all duration-300">
              Visit Our Store
            </button>
          </div>
        </div>

        {/* Google Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-5xl font-black text-green-600 mb-2">4.8</div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-green-500 fill-green-500"
                />
              ))}
            </div>
            <div className="text-gray-600 font-semibold">Google Rating</div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-black text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 font-semibold">Reviews</div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-black text-purple-600 mb-2">95%</div>
            <div className="text-gray-600 font-semibold">Positive Feedback</div>
          </div>
        </div>
      </div>
    </section>
  );
}