import React from 'react';
import { FaRocket, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center mb-3 sm:mb-4">
              <FaRocket className="text-2xl sm:text-3xl text-indigo-600 mr-2 animate-pulse" />
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-700">StartupSpark</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 max-w-xs">
              Igniting startup growth with innovative tools and strategies.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://twitter.com" className="text-gray-600 hover:text-indigo-500 transition-transform transform hover:scale-110">
                <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-indigo-500 transition-transform transform hover:scale-110">
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-indigo-500 transition-transform transform hover:scale-110">
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://github.com" className="text-gray-600 hover:text-indigo-500 transition-transform transform hover:scale-110">
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-base sm:text-lg font-semibold text-indigo-700 mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="/about" className="text-gray-600 hover:text-indigo-500 transition hover:underline">About Us</a></li>
              <li><a href="/team" className="text-gray-600 hover:text-indigo-500 transition hover:underline">Our Team</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-indigo-500 transition hover:underline">Careers</a></li>
              <li><a href="/press" className="text-gray-600 hover:text-indigo-500 transition hover:underline">Press</a></li>
              <li><a href="/partners" className="text-gray-600 hover:text-indigo-500 transition hover:underline">Partners</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-base sm:text-lg font-semibold text-indigo-700 mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="/blog" className="text-gray-600 hover:text-indigo-500 transition hover:underline">Blog</a></li>
              <li><a href="/guides" className="text-gray-600 hover:text-indigo-500 transition hover:underline">Growth Guides</a></li>
              <li><a href="/webinars" className="text-gray-600 hover:text-indigo-500 transition hover:underline">Webinars</a></li>
              <li><a href="/tools" className="text-gray-600 hover:text-indigo-500 transition hover:underline">Free Tools</a></li>
              <li><a href="/case-studies" className="text-gray-600 hover:text-indigo-500 transition hover:underline">Case Studies</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-base sm:text-lg font-semibold text-indigo-700 mb-3 sm:mb-4">Stay Connected</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 max-w-xs text-center sm:text-left">
              Subscribe to our newsletter for growth tips and updates!
            </p>
            <div className="flex w-full max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-600 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="px-3 sm:px-4 py-2 bg-indigo-600 text-white text-xs sm:text-sm font-medium rounded-r-md hover:bg-indigo-700 transition">
                <MdEmail className="inline-block mr-1 w-4 h-4 sm:w-5 sm:h-5" /> Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center sm:text-left">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            © {new Date().getFullYear()} StartupSpark. All rights reserved. | 
            <a href="/privacy" className="text-gray-600 hover:text-indigo-500 transition hover:underline mx-1 sm:mx-2">Privacy Policy</a> |
            <a href="/terms" className="text-gray-600 hover:text-indigo-500 transition hover:underline mx-1 sm:mx-2">Terms of Service</a> |
            <a href="/sitemap" className="text-gray-600 hover:text-indigo-500 transition hover:underline mx-1 sm:mx-2">Sitemap</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;