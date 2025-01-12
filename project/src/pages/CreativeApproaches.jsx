import React from 'react';
import { FiBox, FiTool, FiAward } from 'react-icons/fi';

const CreativeApproaches = () => {
  const projects = [
    {
      title: 'Artistic Upcycling',
      description: 'Transform e-waste into beautiful art pieces and functional items.',
      examples: [
        'Circuit board jewelry',
        'Computer part sculptures',
        'Electronic component installations',
        'Interactive art displays'
      ]
    },
    {
      title: 'Smart Collection Systems',
      description: 'Innovative solutions for efficient e-waste collection and sorting.',
      features: [
        'IoT-enabled bins',
        'Mobile collection apps',
        'Automated sorting systems',
        'Reward programs'
      ]
    },
    {
      title: 'Educational Projects',
      description: 'Creative ways to teach about e-waste through hands-on projects.',
      activities: [
        'DIY repair workshops',
        'Upcycling competitions',
        'Tech transformation challenges',
        'Community art projects'
      ]
    }
  ];

  const showcase = [
    {
      icon: <FiBox className="h-8 w-8" />,
      title: 'Featured Projects',
      description: 'Explore our gallery of transformed e-waste projects'
    },
    {
      icon: <FiTool className="h-8 w-8" />,
      title: 'DIY Guides',
      description: 'Step-by-step tutorials for creative e-waste projects'
    },
    {
      icon: <FiAward className="h-8 w-8" />,
      title: 'Innovation Awards',
      description: 'Recognition for outstanding creative solutions'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Creative Approaches</h1>

      {/* Showcase Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {showcase.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-green-600 flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            {project.examples && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Creative Examples:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {project.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex}>{example}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.features && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.activities && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Activities:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {project.activities.map((activity, activityIndex) => (
                    <li key={activityIndex}>{activity}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Submit Project Section */}
      <div className="bg-green-50 rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Creative Project</h2>
          <p className="text-gray-600 mb-6">
            Have you created something amazing from e-waste? Share your project with our community
            and inspire others to think creatively about e-waste solutions.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors">
            Submit Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreativeApproaches;