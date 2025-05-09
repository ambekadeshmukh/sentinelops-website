// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { GitHub, Twitter, Slack, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <img
              className="h-10 w-auto"
              src="/images/SentinelOps-logo-white.png"
              alt="SentinelOps"
            />
            <p className="mt-4 text-sm text-gray-400">
              Full observability for AI/LLM systems.
              <br />
              Metrics, logs, insights — built for DevOps.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/sentinelops/sentinelops"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/SentinelOpsAI"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/sentinelops"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Slack className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@sentinelops.com"
                className="text-gray-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/features" className="text-base text-gray-400 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-base text-gray-400 hover:text-white">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-base text-gray-400 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-base text-gray-400 hover:text-white">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-base text-gray-400 hover:text-white">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/docs/quick-start" className="text-base text-gray-400 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-base text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs/examples" className="text-base text-gray-400 hover:text-white">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="/docs/api-reference" className="text-base text-gray-400 hover:text-white">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/sentinelops" className="text-base text-gray-400 hover:text-white">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-base text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-base text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-base text-gray-400 hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-base text-gray-400 hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} SentinelOps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;