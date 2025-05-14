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
                    <svg 
                      viewBox="0 0 100 100" 
                      className="w-8 h-8"
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      {/* Robot Body */}
                      <rect x="20" y="40" width="60" height="40" rx="4" className="stroke-gray-700" />
                      {/* Robot Head */}
                      <rect x="25" y="20" width="50" height="25" rx="4" className="stroke-gray-700" />
                      {/* Eyes */}
                      <circle cx="35" cy="30" r="3" className="fill-gray-700" />
                      <circle cx="65" cy="30" r="3" className="fill-gray-700" />
                      {/* Mouth */}
                      <rect x="45" y="37" width="10" height="2" className="fill-gray-700" />
                      {/* Dashboard */}
                      <rect x="85" y="25" width="12" height="35" rx="2" className="stroke-gray-700" />
                      <path d="M87 30 L95 35 L87 40" className="stroke-gray-700 fill-none" />
                      <rect x="88" y="45" width="2" height="8" className="fill-gray-700" />
                      <rect x="91" y="47" width="2" height="6" className="fill-gray-700" />
                      <rect x="94" y="49" width="2" height="4" className="fill-gray-700" />
                      {/* Antenna */}
                      <circle cx="50" cy="18" r="2" className="fill-gray-700" />
                      <line x1="50" y1="20" x2="50" y2="15" className="stroke-gray-700" />
                    </svg>
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
              
              {/* Documentation Dropdown */}
              <div className="relative">
                <button 
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  onMouseEnter={() => setDocsDropdownOpen(true)}
                  onMouseLeave={() => setDocsDropdownOpen(false)}
                >
                  Documentation
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
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
                      <Link href="/docs/examples" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                        Examples
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <a 
                href="https://github.com/sentinelops/sentinelops" 
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