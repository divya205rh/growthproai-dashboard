import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BusinessForm from './components/BusinessForm';
import BusinessCard from './components/BusinessCard';
import VideoCard from './components/VideoCard';
import videoData from './data/videoData.json';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingHeadline, setLoadingHeadline] = useState(false);

  const handleFormSubmit = async ({ name, location }) => {
  setName(name);
  setLocation(location);
  setLoading(true);

  try {
    const res = await fetch('http://localhost:5000/business-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, location }),
    });

    // Simulate delay for spinner visibility
    await new Promise(resolve => setTimeout(resolve, 500));

    const data = await res.json();
    setBusinessData(data);
  } catch (error) {
    console.error('Error fetching business data:', error);
  } finally {
    setLoading(false);
  }
};


  const regenerateHeadline = async () => {
  setLoadingHeadline(true);
  try {
    const res = await fetch(
      `http://localhost:5000/regenerate-headline?name=${name}&location=${location}`
    );
    const data = await res.json();

    // Artificial delay for spinner visibility
    setTimeout(() => {
      setBusinessData((prev) => ({ ...prev, headline: data.headline }));
      setLoadingHeadline(false);
    }, 500); // 1 second delay
  } catch (error) {
    console.error('Error regenerating headline:', error);
    setLoadingHeadline(false);
  }
};


  return (
    <div className="App scroll-smooth">
      <Header />
      <HeroSection />

      {/* Business Form */}
      <section
          id="form"
          className="py-16 bg-gradient-to-r from-indigo-100 via-white to-blue-100"
        >
          <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
              ✍️ Enter Your Business Details
            </h2>
            <p className="text-center text-gray-600 mb-6">
              We'll fetch your SEO headline, reviews & rating instantly.
            </p>
            <BusinessForm onSubmit={handleFormSubmit} />
          </div>
        </section>



      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center mt-6">
          <div className="w-10 h-10 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
          <p className="ml-4 text-blue-600 font-medium">Loading...</p>
        </div>
      )}

      {/* Business Info Card */}
      {businessData && (
        <BusinessCard
          name={name}
          location={location}
          data={businessData}
          onRegenerate={regenerateHeadline}
          loadingHeadline={loadingHeadline}
        />
      )}

      {/* Features Section */}
      <section id="features" className="py-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            🚀 Key Features to Boost Your Growth
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center">
              <div className="text-indigo-600 text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Blazing Fast Performance</h3>
              <p className="text-gray-600">Built for speed to keep users engaged and satisfied.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center">
              <div className="text-pink-500 text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customizable UI</h3>
              <p className="text-gray-600">Tailor every element to match your brand’s personality.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center">
              <div className="text-green-500 text-5xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Top-Notch Security</h3>
              <p className="text-gray-600">Secure backend powered by best practices and standards.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Videos Section */}
      <section id="videos" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videoData.map((video, index) => (
              <VideoCard
                key={index}
                title={video.title}
                description={video.description}
                thumbnail={video.thumbnail}
                videoUrl={video.videoUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600">Email: support@growthproai.com</p>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} GrowthProAI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
