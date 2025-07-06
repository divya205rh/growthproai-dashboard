import React from 'react';

function VideoCard({ title, description, thumbnail, videoUrl }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      </a>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Watch Video
      </a>
    </div>
  );
}

export default VideoCard;
