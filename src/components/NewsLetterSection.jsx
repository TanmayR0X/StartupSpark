import React from "react";

const NewsLetterSection = () => {
  return (
 <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl overflow-hidden shadow-2xl transform -skew-y-3">
    <div className="relative md:px-20 px-6 py-12 md:py-16 transform skew-y-3">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-t from-purple-800/50 to-transparent hidden md:block"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side */}
        <div className="md:w-1/2 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Subscribe for updates</h1>
          <p className="text-lg text-gray-200">Stay updated with the latest news, tips, and exclusive offers. Subscribe to our newsletter and never miss out!</p>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="px-6 py-3 border-blue-400 border-2 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default NewsLetterSection;
