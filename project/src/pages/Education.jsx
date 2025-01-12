import React from 'react';
import { FiUsers, FiTrendingUp, FiTarget } from 'react-icons/fi';

const Education = () => {
  const initiatives = [
    {
      title: 'Community Workshops',
      description: 'Interactive sessions teaching proper e-waste disposal and recycling practices.',
      activities: [
        'Hands-on recycling demonstrations',
        'Device repair workshops',
        'Environmental impact awareness',
        'Best practices training'
      ]
    },
    {
      title: 'School Programs',
      description: 'Educational programs designed for students to learn about e-waste management.',
      curriculum: [
        'Environmental science integration',
        'Practical recycling projects',
        'Technology lifecycle education',
        'Student-led initiatives'
      ]
    },
    {
      title: 'Public Awareness',
      description: 'Campaigns to promote responsible e-waste disposal in communities.',
      campaigns: [
        'Social media outreach',
        'Local event participation',
        'Information distribution',
        'Success story sharing'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Education & Awareness</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {initiatives.map((initiative, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{initiative.title}</h2>
            <p className="text-gray-600 mb-4">{initiative.description}</p>
            
            {initiative.activities && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Activities:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {initiative.activities.map((activity, activityIndex) => (
                    <li key={activityIndex}>{activity}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {initiative.curriculum && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Curriculum:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {initiative.curriculum.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {initiative.campaigns && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Campaigns:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {initiative.campaigns.map((campaign, campaignIndex) => (
                    <li key={campaignIndex}>{campaign}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Involved in Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <FiUsers className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Become a Volunteer</h3>
            <p className="text-gray-600">Help spread awareness about e-waste management in your community.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <FiTrendingUp className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Host a Workshop</h3>
            <p className="text-gray-600">Organize educational sessions in your school or organization.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <FiTarget className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Support Our Mission</h3>
            <p className="text-gray-600">Partner with us to create educational materials and programs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;