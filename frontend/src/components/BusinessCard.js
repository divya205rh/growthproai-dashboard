import React from 'react';

function BusinessCard({ name, location, data, onRegenerate, loadingHeadline }) {
  return (
    <section className="py-10 px-4">
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 text-center transition transform hover:scale-105 duration-300">
        <h3 className="text-2xl font-bold text-indigo-700 mb-2">
          {name} - {location}
        </h3>
        <p className="text-lg text-yellow-500 font-semibold">⭐ {data.rating} rating</p>
        <p className="text-gray-600 mb-4">{data.reviews} reviews</p>

        <p className="italic text-gray-700 bg-gray-100 rounded-md p-3 shadow-sm">
          {data.headline}
        </p>

        <button
          onClick={onRegenerate}
          className="mt-6 bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition duration-300 disabled:opacity-60"
          disabled={loadingHeadline}
        >
          {loadingHeadline ? (
            <div className="flex justify-center items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Generating...</span>
            </div>
          ) : (
            'Regenerate SEO Headline'
          )}
        </button>
      </div>
    </section>
  );
}

export default BusinessCard;
