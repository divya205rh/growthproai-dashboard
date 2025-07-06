import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="w-10 h-10 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
      <p className="ml-4 text-blue-600 font-medium">Loading...</p>
    </div>
  );
};

export default Spinner;
