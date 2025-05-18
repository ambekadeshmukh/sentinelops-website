import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Github, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [docsDropdownOpen, setDocsDropdownOpen] = useState(false);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setDocsDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" onClick={closeMenus}>
                <div className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                  {/* Robot Logo */}
                  <div className="w-10 h-10 bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center">
                    <img src="/images/robot-logo.png" alt="SentinelOps Logo" className="w-8 h-8" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">SentinelOps</span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <Link href="/features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Features
              </Link>
              
              <Link href="/docs/examples" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Use Cases
              </Link>
              
              {/* Documentation Dropdown */}
              <div className="relative">
                <Link href="/docs/quick-start" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  onMouseEnter={() => setDocsDropdownOpen(true)}
                >
                  Documentation
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                {docsDropdownOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    onMouseEnter={() => setDocsDropdownOpen(true)}
                    onMouseLeave={() => setDocsDropdownOpen(false)}
                  >
                    <div className="py-1">
                      <Link href="/docs/quick-start" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                        Quick Start
                      </Link>
                      <Link href="/docs/installation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                        Installation
                      </Link>
                      <Link href="/docs/sdk-usage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                        SDK Usage
                      </Link>
                      <Link href="/docs/api-reference" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                        API Reference
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <a 
                href="https://github.com/ambekadeshmukh/sentinelops" 
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-1" />
                GitHub
              </a>
            </nav>
          </div>
          
          {/* CTA and Mobile Menu */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link
                href="/docs/quick-start"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-pink-600 hover:to-pink-700 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <Link 
              href="/features" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              onClick={closeMenus}
            >
              Features
            </Link>
            
            <div className="space-y-1">
              <div className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 border-b border-gray-100">
                Documentation
              </div>
              <Link 
                href="/docs/quick-start" 
                className="block pl-6 pr-4 py-2 text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                onClick={closeMenus}
              >
                Quick Start
              </Link>
              <Link 
                href="/docs/installation" 
                className="block pl-6 pr-4 py-2 text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                onClick={closeMenus}
              >
                Installation
              </Link>
              <Link 
                href="/docs/sdk-usage" 
                className="block pl-6 pr-4 py-2 text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                onClick={closeMenus}
              >
                SDK Usage
              </Link>
              <Link 
                href="/docs/api-reference" 
                className="block pl-6 pr-4 py-2 text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                onClick={closeMenus}
              >
                API Reference
              </Link>
              <Link 
                href="/docs/examples" 
                className="block pl-6 pr-4 py-2 text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                onClick={closeMenus}
              >
                Examples
              </Link>
            </div>
            
            <a 
              href="https://github.com/sentinelops/sentinelops"
              className="flex items-center pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenus}
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
            
            <div className="px-3 pt-4">
              <Link
                href="/docs/quick-start"
                className="block w-full text-center rounded-md bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:from-pink-600 hover:to-pink-700 transition-all duration-200"
                onClick={closeMenus}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;