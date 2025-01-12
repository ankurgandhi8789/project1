import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Dedicated to promoting sustainable e-waste management through education,
              innovation, and community engagement.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/reuse" className="text-gray-400 hover:text-white">
                  Reuse Strategies
                </Link>
              </li>
              <li>
                <Link to="/recycling" className="text-gray-400 hover:text-white">
                  Recycling
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-400 hover:text-white">
                  Education
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <FiMail className="mr-2" />
                info@ewaste.com
              </li>
              <li className="flex items-center text-gray-400">
                <FiPhone className="mr-2" />
                (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <FiMapPin className="mr-2" />
                123 Green Street
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} E-Waste Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;