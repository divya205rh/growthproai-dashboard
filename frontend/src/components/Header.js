import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">GrowthPro AI</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-600 font-medium">
            <li><a href="#features" className="hover:text-gray-900">Features</a></li>
            <li><a href="#videos" className="hover:text-gray-900">Videos</a></li>
            <li><a href="#form" className="hover:text-gray-900">Get Started</a></li>
            <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
