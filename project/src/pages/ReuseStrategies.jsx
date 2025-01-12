import React from 'react';

const ReuseStrategies = () => {
  const strategies = [
    {
      title: 'Device Refurbishment',
      description: 'Professional restoration of outdated devices to extend their lifecycle.',
      steps: [
        'Technical assessment',
        'Hardware repairs',
        'Software updates',
        'Quality testing',
        'Redistribution'
      ]
    },
    {
      title: 'Trade-in Programs',
      description: 'Incentivized programs for consumers to responsibly dispose of old devices.',
      benefits: [
        'Immediate value for consumers',
        'Guaranteed proper disposal',
        'Reduced environmental impact',
        'Support for circular economy'
      ]
    },
    {
      title: 'Corporate Partnerships',
      description: 'Business collaborations to promote large-scale e-waste reuse.',
      initiatives: [
        'Employee device buyback programs',
        'Corporate responsibility initiatives',
        'Inter-business device sharing',
        'Donation programs for schools'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Reuse Strategies</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {strategies.map((strategy, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{strategy.title}</h2>
            <p className="text-gray-600 mb-4">{strategy.description}</p>
            
            {strategy.steps && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Process:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {strategy.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {strategy.benefits && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Benefits:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {strategy.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {strategy.initiatives && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Key Initiatives:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {strategy.initiatives.map((initiative, initiativeIndex) => (
                    <li key={initiativeIndex}>{initiative}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h2>
        <p className="text-gray-600 mb-6">
          Whether you're an individual looking to donate devices or a business wanting to implement
          a reuse program, we can help you make a difference.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ReuseStrategies;