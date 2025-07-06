import React from 'react';

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 text-center px-6">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Welcome to <span className="text-yellow-300">GrowthPro AI</span>
      </h1>
      <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
        Your personalized business dashboard to track growth, SEO visibility, and local performance.
      </p>
      <a
        href="#form"
        className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
      >
        🚀 Get Started
      </a>
    </section>
  );
}

export default HeroSection;
