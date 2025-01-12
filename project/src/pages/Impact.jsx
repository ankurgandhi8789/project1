import React from 'react';
import { FiDollarSign, FiThermometer, FiGlobe } from 'react-icons/fi';

const Impact = () => {
  const impacts = [
    {
      title: 'Economic Benefits',
      description: 'Financial advantages of proper e-waste management.',
      benefits: [
        'Job creation in recycling sector',
        'Recovery of valuable materials',
        'Reduced landfill costs',
        'New business opportunities'
      ]
    },
    {
      title: 'Environmental Impact',
      description: 'Positive effects on the environment through proper management.',
      effects: [
        'Reduced carbon emissions',
        'Conservation of resources',
        'Prevention of soil contamination',
        'Protection of ecosystems'
      ]
    },
    {
      title: 'Social Benefits',
      description: 'Community advantages of e-waste management programs.',
      outcomes: [
        'Improved public health',
        'Enhanced digital access',
        'Community engagement',
        'Educational opportunities'
      ]
    }
  ];

  const statistics = [
    {
      icon: <FiDollarSign className="h-8 w-8" />,
      value: '$57B',
      label: 'Annual Market Value',
      description: 'Estimated value of recoverable materials'
    },
    {
      icon: <FiThermometer className="h-8 w-8" />,
      value: '2.5M',
      label: 'Tons CO₂ Reduced',
      description: 'Annual carbon emission reduction'
    },
    {
      icon: <FiGlobe className="h-8 w-8" />,
      value: '50M',
      label: 'Tons Processed',
      description: 'E-waste properly managed annually'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Environmental & Economic Impact</h1>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {statistics.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-green-600 flex justify-center mb-4">{stat.icon}</div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
            <p className="text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Detailed Impact Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {impacts.map((impact, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{impact.title}</h2>
            <p className="text-gray-600 mb-4">{impact.description}</p>
            
            {impact.benefits && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Key Benefits:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {impact.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {impact.effects && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Environmental Effects:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {impact.effects.map((effect, effectIndex) => (
                    <li key={effectIndex}>{effect}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {impact.outcomes && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Social Outcomes:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {impact.outcomes.map((outcome, outcomeIndex) => (
                    <li key={outcomeIndex}>{outcome}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-green-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Make an Impact Today</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join our initiative to create a sustainable future through responsible e-waste management.
          Every device properly recycled contributes to a healthier planet.
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors">
          Join Our Effort
        </button>
      </div>
    </div>
  );
};

export default Impact;