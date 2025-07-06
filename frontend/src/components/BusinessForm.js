import React, { useState } from 'react';

function BusinessForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !location) return;
    onSubmit({ name, location });
    setName('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Business Name</label>
        <input
          type="text"
          placeholder="Enter your business name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Location</label>
        <input
          type="text"
          placeholder="Enter the location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition duration-300"
      >
        Get Business Info
      </button>
    </form>
  );
}

export default BusinessForm;
