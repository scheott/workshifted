// src/components/Footer.jsx - Themed footer matching your blue/green brand
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="text-base font-bold text-blue-400 mb-2">WorkShifted</div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Helping professionals evolve their careers to work alongside AI with personalized risk assessments and evolution roadmaps.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-white mb-2 text-sm">Quick Links</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium text-white mb-2 text-sm">Legal</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-300 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-medium text-white mb-2 text-sm">Support</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <a href="mailto:weworkshifted@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  weworkshifted@gmail.com
                </a>
              </li>
              <li>
                <span className="text-gray-400">
                  Response time: 24 hours
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  Mon-Fri, 9 AM - 5 PM EST
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 pt-3 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs text-gray-400">
              &copy; 2025 WorkShifted. All rights reserved.
            </div>
            <div className="mt-2 md:mt-0 text-xs text-gray-500">
              Educational guidance only. Individual results may vary.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;