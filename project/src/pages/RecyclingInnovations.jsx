import React from 'react';

const RecyclingInnovations = () => {
  const technologies = [
    {
      title: 'Advanced Material Recovery',
      description: 'Cutting-edge technologies for extracting valuable materials from e-waste.',
      processes: [
        'Automated sorting systems',
        'Precious metal extraction',
        'Rare earth element recovery',
        'Circuit board processing'
      ]
    },
    {
      title: 'Safe Processing Methods',
      description: 'Worker and environmentally friendly recycling processes.',
      features: [
        'Enclosed processing systems',
        'Air quality monitoring',
        'Protective equipment',
        'Zero-emission goals'
      ]
    },
    {
      title: 'Component Reintegration',
      description: 'Methods for incorporating recycled materials into new products.',
      applications: [
        'Refurbished parts usage',
        'Material purification',
        'Quality testing',
        'Manufacturing integration'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Recycling Innovations</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {technologies.map((tech, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{tech.title}</h2>
            <p className="text-gray-600 mb-4">{tech.description}</p>
            
            {tech.processes && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Key Processes:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {tech.processes.map((process, processIndex) => (
                    <li key={processIndex}>{process}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {tech.features && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Safety Features:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {tech.applications && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Applications:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {tech.applications.map((application, applicationIndex) => (
                    <li key={applicationIndex}>{application}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Process Flow</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            'Collection & Sorting',
            'Dismantling & Separation',
            'Material Processing',
            'Reintegration'
          ].map((step, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-green-600 font-bold text-lg mb-2">Step {index + 1}</div>
              <div className="text-gray-800">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecyclingInnovations;