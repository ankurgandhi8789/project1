import React from 'react';
import { Link } from 'react-router-dom';
import { FiBox, FiRefreshCw, FiBook, FiTrendingUp, FiBriefcase } from 'react-icons/fi';

const Home = () => {
  const features = [
    {
      icon: <FiBox className="h-8 w-8" />,
      title: 'Recycling Innovations',
      description: 'Advanced technologies for efficient material recovery and sustainable processing.',
      link: '/recycling'
    },
    {
      icon: <FiRefreshCw className="h-8 w-8" />,
      title: 'Reuse Strategies',
      description: 'Programs and platforms for extending device lifecycles through refurbishment.',
      link: '/reuse'
    },
    {
      icon: <FiBook className="h-8 w-8" />,
      title: 'Education',
      description: 'Raising awareness about e-waste impact and promoting responsible disposal.',
      link: '/education'
    },
    {
      icon: <FiTrendingUp className="h-8 w-8" />,
      title: 'Environmental Impact',
      description: 'Understanding the benefits of proper e-waste management.',
      link: '/impact'
    },
    {
      icon: <FiBriefcase className="h-8 w-8" />,
      title: 'Creative Solutions',
      description: 'Innovative approaches to e-waste upcycling and smart collection systems.',
      link: '/creative'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Sustainable E-Waste Management
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Join us in creating a sustainable future through responsible electronic waste management,
              recycling, and reuse initiatives.
            </p>
            <div className="mt-10">
              <Link
                to="/recycling"
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-green-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start your journey towards responsible e-waste management today.
          </p>
          <Link
            to="/education"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;