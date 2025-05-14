import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Clipboard, Check, ChevronRight, Book, Terminal, Download, Package, Server, Settings } from 'lucide-react';

const InstallationPage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
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
                
                <p>
                  For development environments with all optional dependencies:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Terminal</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard('pip install "sentinelops[all]"', 2)}
                    >
                      {copiedIndex === 2 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">pip install "sentinelops[all]"</pre>
                  </div>
                </div>
                
                <h2 id="docker-compose">Docker Compose Setup (Recommended for Development)</h2>
                
                <p>
                  For local development and testing, Docker Compose is the fastest way to get started:
                </p>
                
                <h3>Quick Setup</h3>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Terminal</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`# Clone the repository
git clone https://github.com/sentinelops/sentinelops.git
cd sentinelops

# Run the quick deployment script
./infrastructure/scripts/quick-deploy.sh`, 3)}
                    >
                      {copiedIndex === 3 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`# Clone the repository
git clone https://github.com/sentinelops/sentinelops.git
cd sentinelops

# Run the quick deployment script
./infrastructure/scripts/quick-deploy.sh`}</pre>
                  </div>
                </div>
                
                <p>
                  This script will automatically:
                </p>
                
                <ul>
                  <li>Check prerequisites</li>
                  <li>Set up environment variables</li>
                  <li>Create configuration files</li>
                  <li>Start all services with Docker Compose</li>
                  <li>Perform health checks</li>
                </ul>
                
                <h3>Manual Setup</h3>
                
                <p>
                  If you prefer manual setup:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Terminal</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`# Clone and configure
git clone https://github.com/sentinelops/sentinelops.git
cd sentinelops
cp infrastructure/.env.example infrastructure/.env

# Edit configuration
vim infrastructure/.env

# Start services
cd infrastructure
docker-compose up -d

# Check status
docker-compose ps`, 4)}
                    >
                      {copiedIndex === 4 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`# Clone and configure
git clone https://github.com/sentinelops/sentinelops.git
cd sentinelops
cp infrastructure/.env.example infrastructure/.env

# Edit configuration
vim infrastructure/.env

# Start services
cd infrastructure
docker-compose up -d

# Check status
docker-compose ps`}</pre>
                  </div>
                </div>
                
                <h3>Access Services</h3>
                
                <p>
                  Once deployed, you can access:
                </p>
                
                <ul>
                  <li><strong>Dashboard:</strong> <a href="http://localhost:3000">http://localhost:3000</a></li>
                  <li><strong>API:</strong> <a href="http://localhost:8000">http://localhost:8000</a></li>
                  <li><strong>Prometheus:</strong> <a href="http://localhost:9090">http://localhost:9090</a></li>
                </ul>
                
                <h2 id="kubernetes">Kubernetes Deployment (Production)</h2>
                
                <p>
                  For production environments, Kubernetes is the recommended deployment platform.
                </p>
                
                <h3>Prerequisites</h3>
                
                <ul>
                  <li>Kubernetes cluster (v1.22+)</li>
                  <li>Helm 3.0+</li>
                  <li>kubectl configured for your cluster</li>
                  <li>Storage class for persistent volumes</li>
                  <li>Load balancer or ingress controller</li>
                </ul>
                
                <h3>Installation with Helm</h3>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Terminal</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`# Add SentinelOps Helm repository
helm repo add sentinelops https://charts.sentinelops.io
helm repo update

# Create values file
cp values.yaml.example my-values.yaml
# Edit my-values.yaml with your configuration

# Install SentinelOps
helm install sentinelops sentinelops/sentinelops \\
  --namespace monitoring \\
  --create-namespace \\
  --values my-values.yaml

# Verify installation
kubectl get pods -n monitoring`, 5)}
                    >
                      {copiedIndex === 5 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`# Add SentinelOps Helm repository
helm repo add sentinelops https://charts.sentinelops.io
helm repo update

# Create values file
cp values.yaml.example my-values.yaml
# Edit my-values.yaml with your configuration

# Install SentinelOps
helm install sentinelops sentinelops/sentinelops \\
  --namespace monitoring \\
  --create-namespace \\
  --values my-values.yaml

# Verify installation
kubectl get pods -n monitoring`}</pre>
                  </div>
                </div>
                
                <h3>High Availability Configuration</h3>
                
                <p>
                  For production deployments, ensure high availability:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">values.yaml</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`global:
  highAvailability: true
  
api:
  replicas: 3
  
database:
  replicas: 3
  
kafka:
  replicas: 3
  
prometheus:
  replicas: 2`, 6)}
                    >
                      {copiedIndex === 6 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`global:
  highAvailability: true
  
api:
  replicas: 3
  
database:
  replicas: 3
  
kafka:
  replicas: 3
  
prometheus:
  replicas: 2`}</pre>
                  </div>
                </div>
                
                <h2 id="aws">AWS Deployment</h2>
                
                <p>
                  Deploy SentinelOps on AWS using our CloudFormation template:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Terminal</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`# Navigate to AWS directory
cd infrastructure/aws

# Run deployment script
./deploy.sh

# Follow the interactive prompts for:
# - Stack name
# - AWS Region
# - Instance type
# - Key pair name
# - Security settings`, 7)}
                    >
                      {copiedIndex === 7 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`# Navigate to AWS directory
cd infrastructure/aws

# Run deployment script
./deploy.sh

# Follow the interactive prompts for:
# - Stack name
# - AWS Region
# - Instance type
# - Key pair name
# - Security settings`}</pre>
                  </div>
                </div>
                
                <h2 id="javascript-sdk">JavaScript SDK (Beta)</h2>
                
                <p>
                  Install the JavaScript SDK for Node.js applications:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Terminal</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard('npm install @sentinelops/js-sdk', 8)}
                    >
                      {copiedIndex === 8 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">npm install @sentinelops/js-sdk</pre>
                  </div>
                </div>
                
                <h2>Environment Configuration</h2>
                
                <p>
                  Configure environment variables for your deployment:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">.env</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`# Database Configuration
POSTGRES_USER=sentinelopsuser
POSTGRES_PASSWORD=your-secure-password
POSTGRES_DB=sentinelops
POSTGRES_PORT=5432

# API Configuration
API_PORT=8000
JWT_SECRET=your-jwt-secret-key

# Frontend Configuration
FRONTEND_PORT=3000
API_URL=http://localhost:8000

# Monitoring
PROMETHEUS_PORT=9090
ENABLE_HALLUCINATION_DETECTION=true
ENABLE_COST_OPTIMIZATION=true

# Retention Settings
METRIC_RETENTION_DAYS=90
RAW_DATA_RETENTION_DAYS=30`, 9)}
                    >
                      {copiedIndex === 9 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`# Database Configuration
POSTGRES_USER=sentinelopsuser
POSTGRES_PASSWORD=your-secure-password
POSTGRES_DB=sentinelops
POSTGRES_PORT=5432

# API Configuration
API_PORT=8000
JWT_SECRET=your-jwt-secret-key

# Frontend Configuration
FRONTEND_PORT=3000
API_URL=http://localhost:8000

# Monitoring
PROMETHEUS_PORT=9090
ENABLE_HALLUCINATION_DETECTION=true
ENABLE_COST_OPTIMIZATION=true

# Retention Settings
METRIC_RETENTION_DAYS=90
RAW_DATA_RETENTION_DAYS=30`}</pre>
                  </div>
                </div>
                
                <h2>Verification</h2>
                
                <p>
                  Verify your installation by checking service health:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Terminal</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`# Check API health
curl http://localhost:8000/health

# Check services (Docker Compose)
docker-compose ps

# Check services (Kubernetes)
kubectl get pods -n monitoring`, 10)}
                    >
                      {copiedIndex === 10 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`# Check API health
curl http://localhost:8000/health

# Check services (Docker Compose)
docker-compose ps

# Check services (Kubernetes)
kubectl get pods -n monitoring`}</pre>
                  </div>
                </div>
                
                <h2>Troubleshooting</h2>
                
                <h3>Common Issues</h3>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-black">Services Not Starting</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Check if ports are already in use and verify environment variables are correctly set.
                    </p>
                    <div className="mt-2">
                      <pre className="text-xs bg-gray-50 p-2 rounded">netstat -tuln | grep 8000</pre>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-black">Database Connection Issues</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Verify PostgreSQL is running and credentials are correct.
                    </p>
                    <div className="mt-2">
                      <pre className="text-xs bg-gray-50 p-2 rounded">docker-compose logs postgres</pre>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-black">Insufficient Resources</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Ensure your system meets the minimum requirements. Consider increasing allocated resources.
                    </p>
                  </div>
                </div>
                
                <h2>Next Steps</h2>
                
                <p>
                  After installing SentinelOps:
                </p>
                
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
                
                <div className="mt-12 p-6 bg-white rounded-lg border-2 border-black">
                  <h3 className="text-lg font-semibold text-black mb-3">Need Help?</h3>
                  <p className="text-gray-700 mb-4">
                    If you run into any issues during installation, check our troubleshooting guide or reach out to the community.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <a
                      href="https://github.com/sentinelops/sentinelops/issues"
                      className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100"
                    >
                      GitHub Issues
                    </a>
                    <a
                      href="https://discord.gg/sentinelops"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800"
                    >
                      Join Discord
                    </a>
                  </div>
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