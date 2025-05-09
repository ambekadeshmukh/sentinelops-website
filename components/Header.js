import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Github } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [docsDropdownOpen, setDocsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img
                  className="h-10 w-auto"
                  src="/images/SentinelOps-logo.png"
                  alt="SentinelOps"
                />
              </Link>
            </div>
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              {/* Features Dropdown */}
              <div className="relative">
                <button 
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-black"
                  onMouseEnter={() => setProductDropdownOpen(true)}
                  onMouseLeave={() => setProductDropdownOpen(false)}
                >
                  Features
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {productDropdownOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    onMouseEnter={() => setProductDropdownOpen(true)}
                    onMouseLeave={() => setProductDropdownOpen(false)}
                  >
                    <div className="py-1">
                      <Link href="/features" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        All Features
                      </Link>
                      <Link href="/features/performance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Performance Monitoring
                      </Link>
                      <Link href="/features/quality" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Quality Assurance
                      </Link>
                      <Link href="/features/integrations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Integrations
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Documentation Dropdown */}
              <div className="relative">
                <button 
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-black"
                  onMouseEnter={() => setDocsDropdownOpen(true)}
                  onMouseLeave={() => setDocsDropdownOpen(false)}
                >
                  Documentation
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {docsDropdownOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    onMouseEnter={() => setDocsDropdownOpen(true)}
                    onMouseLeave={() => setDocsDropdownOpen(false)}
                  >
                    <div className="py-1">
                      <Link href="/docs/quick-start" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Quick Start
                      </Link>
                      <Link href="/docs/sdk-usage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        SDK Usage
                      </Link>
                      <Link href="/docs/installation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Installation
                      </Link>
                      <Link href="/docs/api-reference" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        API Reference
                      </Link>
                      <Link href="/docs/examples" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Examples
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/blog" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-black">
                Blog
              </Link>
              
              <Link href="https://github.com/sentinelops/sentinelops" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-black">
                GitHub
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            <Link
              href="/docs/quick-start"
              className="ml-8 inline-flex items-center justify-center white-space-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800"
            >
              Get Started
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <div className="mobile-dropdown">
              <button className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 w-full text-left flex justify-between items-center" onClick={() => setProductDropdownOpen(!productDropdownOpen)}>
                Features
                <ChevronDown className="h-4 w-4" />
              </button>
              {productDropdownOpen && (
                <div className="pl-6">
                  <Link href="/features" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300">
                    All Features
                  </Link>
                  <Link href="/features/performance" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300">
                    Performance Monitoring
                  </Link>
                  <Link href="/features/quality" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300">
                    Quality Assurance
                  </Link>
                  <Link href="/features/integrations" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300">
                    Integrations
                  </Link>
                </div>
              )}
            </div>

            <div className="mobile-dropdown">
              <button className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 w-full text-left flex justify-between items-center" onClick={() => setDocsDropdownOpen(!docsDropdownOpen)}>
                Documentation
                <ChevronDown className="h-4 w-4" />
              </button>
              {docsDropdownOpen && (
                <div className="pl-6">
                  <Link href="/docs/quick-start" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300">
                    Quick Start
                  </Link>
                  <Link href="/docs/sdk-usage" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300">
                    SDK Usage
                  </Link>
                  <Link href="/docs/installation" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300">
                    Installation
                  </Link>
                  <Link href="/docs/api-reference" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300">
                    API Reference
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300">
              Blog
            </Link>
            
            <Link href="https://github.com/sentinelops/sentinelops" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300">
              GitHub
            </Link>
            
            <Link href="/docs/quick-start" className="block pl-3 pr-4 py-2 border-l-4 border-black text-base font-medium text-black bg-gray-50">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;