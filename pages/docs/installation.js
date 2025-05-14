// pages/docs/installation.js
import React from 'react';
import Layout from '../../components/Layout';
import { Clipboard, Check, ChevronRight, Book, Terminal, Download, Package, Server, Settings } from 'lucide-react';

const InstallationPage = () => {
  const [copiedIndex, setCopiedIndex] = React.useState(null);
  
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  return (
    <Layout title="SentinelOps Installation Guide">
      <div className="bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar Navigation */}
            <div className="lg:w-64 lg:pr-8 lg:border-r lg:border-gray-200 mb-8 lg:mb-0">
              <nav className="sticky top-20">
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Getting Started</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="/docs/quick-start" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Quick Start
                      </a>
                    </li>
                    <li>
                      <a href="/docs/installation" className="flex items-center text-black font-medium">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Installation
                      </a>
                    </li>
                    <li>
                      <a href="/docs/concepts" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Core Concepts
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Deployment</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#docker-compose" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Docker Compose
                      </a>
                    </li>
                    <li>
                      <a href="#kubernetes" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Kubernetes
                      </a>
                    </li>
                    <li>
                      <a href="#aws" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        AWS Deployment
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">SDK Setup</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#sdk-installation" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Python SDK
                      </a>
                    </li>
                    <li>
                      <a href="#javascript-sdk" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        JavaScript SDK
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            
            {/* Main Content */}
            <div className="lg:flex-1 lg:pl-8">
              <div className="prose prose-black max-w-none">
                <div className="flex items-center space-x-2 mb-4">
                  <Book className="h-5 w-5 text-black" />
                  <span className="text-sm text-gray-500">Documentation</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">Getting Started</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">Installation</span>
                </div>
                
                <h1>Installation Guide</h1>
                
                <p className="lead">
                  Choose your preferred installation method to get SentinelOps running in your environment.
                </p>
                
                {/* Prerequisites */}
                <div className="not-prose bg-white rounded-lg p-4 border border-gray-200 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Package className="h-5 w-5 text-black" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-black">Prerequisites</h4>
                      <ul className="mt-2 text-sm text-gray-600">
                        <li>• Python 3.8 or higher</li>
                        <li>• Docker Engine 20.10+ or Kubernetes 1.19+</li>
                        <li>• 4GB RAM minimum (8GB recommended)</li>
                        <li>• 20GB storage minimum (50GB recommended)</li>
                        <li>• Git for source code management</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h2 id="sdk-installation">Python SDK Installation</h2>
                
                <p>
                  Install the SentinelOps Python SDK using pip:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Terminal</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard('pip install sentinelops', 1)}
                    >
                      {copiedIndex === 1 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">pip install sentinelops</pre>
                  </div>
                </div>
                
                <h2 id="docker-compose">Docker Compose Setup</h2>
                
                <p>
                  For local development and testing:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Terminal</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`git clone https://github.com/sentinelops/sentinelops.git
cd sentinelops
./infrastructure/scripts/quick-deploy.sh`, 2)}
                    >
                      {copiedIndex === 2 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`git clone https://github.com/sentinelops/sentinelops.git
cd sentinelops
./infrastructure/scripts/quick-deploy.sh`}</pre>
                  </div>
                </div>
                
                <h2 id="kubernetes">Kubernetes Deployment</h2>
                
                <p>
                  For production environments:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Terminal</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`helm repo add sentinelops https://charts.sentinelops.io
helm install sentinelops sentinelops/sentinelops --namespace monitoring --create-namespace`, 3)}
                    >
                      {copiedIndex === 3 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`helm repo add sentinelops https://charts.sentinelops.io
helm install sentinelops sentinelops/sentinelops --namespace monitoring --create-namespace`}</pre>
                  </div>
                </div>
                
                <h2>Next Steps</h2>
                
                <div className="not-prose grid md:grid-cols-2 gap-4 mt-6">
                  <a href="/docs/quick-start" className="group border border-gray-200 rounded-lg p-4 hover:border-black hover:shadow-md transition-all">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-black text-white">
                          <Terminal className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-black group-hover:text-black">Quick Start Guide</h3>
                        <p className="mt-1 text-sm text-gray-600">
                          Get started with monitoring your first LLM application.
                        </p>
                      </div>
                    </div>
                  </a>
                  
                  <a href="/docs/sdk-usage" className="group border border-gray-200 rounded-lg p-4 hover:border-black hover:shadow-md transition-all">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-black text-white">
                          <Book className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-black group-hover:text-black">SDK Usage</h3>
                        <p className="mt-1 text-sm text-gray-600">
                          Learn how to integrate SentinelOps SDK in your applications.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InstallationPage;