import React from 'react';
import Link from 'next/link';
import { Github, ExternalLink, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              {/* Robot Logo */}
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <img src="/images/robot-logo.png" alt="SentinelOps Logo" className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">SentinelOps</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Complete observability for AI/LLM systems. Monitor, analyze, and optimize your AI applications with real-time insights.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/ambekadeshmukh/sentinelops"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/sentinelops"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@sentinelops.ai"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/docs/quick-start" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Quick Start
                </Link>
              </li>
              <li>
                <Link href="/docs/installation" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Installation
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/ambekadeshmukh/sentinelops/releases" 
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Releases
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Documentation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Documentation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/docs/sdk-usage" className="text-sm text-gray-400 hover:text-white transition-colors">
                  SDK Usage
                </Link>
              </li>
              <li>
                <Link href="/docs/api-reference" className="text-sm text-gray-400 hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/docs/examples" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/docs/contributing" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contributing
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/ambekadeshmukh/sentinelops" 
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/sentinelops" 
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/ambekadeshmukh/sentinelops/discussions" 
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discussions
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/ambekadeshmukh/sentinelops/issues" 
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Report Issues
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>&copy; {new Date().getFullYear()} SentinelOps. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                Open Source
              </span>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-400">
              Built with ❤️ for the LLM community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;