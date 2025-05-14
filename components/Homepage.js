import React from 'react';
import Layout from './Layout';
import { ArrowRight, BarChart2, Shield, Zap, Code, Activity, Eye, Terminal, PieChart, CheckCircle, ExternalLink, Github, Star, Play } from 'lucide-react';

const Homepage = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="mb-10 lg:mb-0">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">
                    🔥 100% Open Source
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    MIT License
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Observability</span> for AI Systems
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  Monitor, analyze, and optimize your LLM applications with real-time insights, cost tracking, and quality assurance.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="rounded-full bg-green-100 p-2 mr-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-gray-700 font-medium">Track performance across all major LLM providers</p>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-full bg-blue-100 p-2 mr-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-gray-700 font-medium">Detect hallucinations and quality issues automatically</p>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-full bg-purple-100 p-2 mr-3">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-gray-700 font-medium">Optimize costs with actionable recommendations</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="/docs/quick-start" 
                    className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 font-medium rounded-lg px-8 py-3 text-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Get Started Free
                  </a>
                  <a 
                    href="https://github.com/sentinelops/sentinelops" 
                    className="inline-flex items-center justify-center bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium rounded-lg px-8 py-3 text-center transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 w-5 h-5" />
                    Star on GitHub
                  </a>
                </div>
                
                <div className="flex items-center space-x-6 mt-8 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    <span>2.3k+ stars</span>
                  </div>
                  <div>No credit card required</div>
                  <div>Deploy in minutes</div>
                </div>
              </div>
              
              {/* Hero Visual */}
              <div className="relative">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                  {/* Dashboard Mock */}
                  <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-4">SentinelOps Dashboard</span>
                  </div>
                  <div className="p-6">
                    {/* Logo in center */}
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 bg-gray-50 rounded-2xl border-2 border-gray-200 flex items-center justify-center">
                        <svg 
                          viewBox="0 0 100 100" 
                          className="w-16 h-16"
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
                    </div>
                    
                    {/* Mock Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                        <div className="text-blue-700 text-sm font-medium">Response Time</div>
                        <div className="text-2xl font-bold text-blue-900">127ms</div>
                        <div className="text-blue-600 text-xs">↓ 23% from yesterday</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                        <div className="text-green-700 text-sm font-medium">Cost Savings</div>
                        <div className="text-2xl font-bold text-green-900">42%</div>
                        <div className="text-green-600 text-xs">↑ $1,247 saved</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                        <div className="text-purple-700 text-sm font-medium">Quality Score</div>
                        <div className="text-2xl font-bold text-purple-900">9.2/10</div>
                        <div className="text-purple-600 text-xs">↑ 0.3 improvement</div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                        <div className="text-orange-700 text-sm font-medium">Requests</div>
                        <div className="text-2xl font-bold text-orange-900">12.5k</div>
                        <div className="text-orange-600 text-xs">Today</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-gray-200">
                  <BarChart2 className="w-6 h-6 text-gray-700" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg border border-gray-200">
                  <Shield className="w-6 h-6 text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Code Example */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get started in seconds
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Add just a few lines of code to start monitoring your LLM applications
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
              <div className="text-sm text-gray-400 mb-4">Installation & Setup</div>
              <pre className="text-green-400 text-sm">
{`# Install SentinelOps
pip install sentinelops

# Monitor your OpenAI calls
from sentinelops import OpenAIMonitor

monitor = OpenAIMonitor(
    model="gpt-4",
    application_name="my-app"
)

response = monitor.chat_completion(
    messages=[{"role": "user", "content": "Hello!"}]
)

# That's it! 🚀 Your LLM is now monitored`}
              </pre>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Everything you need for LLM observability
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From performance metrics to cost optimization, SentinelOps provides comprehensive monitoring for your AI systems
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Performance Monitoring */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 group">
                <div className="p-3 rounded-lg inline-block mb-4 bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  <Zap className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Performance Metrics</h3>
                <p className="text-gray-600 mb-4">
                  Track response times, throughput, token usage, and resource utilization in real-time.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    End-to-end latency tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Resource utilization monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Percentile-based analysis
                  </li>
                </ul>
              </div>
              
              {/* Quality Assurance */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 group">
                <div className="p-3 rounded-lg inline-block mb-4 bg-purple-100 group-hover:bg-purple-200 transition-colors">
                  <Shield className="w-6 h-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality Assurance</h3>
                <p className="text-gray-600 mb-4">
                  Automatically detect hallucinations, inconsistencies, and quality issues in LLM outputs.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Hallucination detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Output consistency tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Quality scoring system
                  </li>
                </ul>
              </div>
              
              {/* Cost Optimization */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 group">
                <div className="p-3 rounded-lg inline-block mb-4 bg-green-100 group-hover:bg-green-200 transition-colors">
                  <PieChart className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Cost Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Track API costs, analyze token usage, and get recommendations to reduce expenses.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time cost tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Optimization recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Budget alerts & controls
                  </li>
                </ul>
              </div>
              
              {/* Interactive Dashboards */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 group">
                <div className="p-3 rounded-lg inline-block mb-4 bg-orange-100 group-hover:bg-orange-200 transition-colors">
                  <BarChart2 className="w-6 h-6 text-orange-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Interactive Dashboards</h3>
                <p className="text-gray-600 mb-4">
                  Visualize your data with beautiful, customizable dashboards and real-time updates.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time visualization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom dashboard builder
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Historical trend analysis
                  </li>
                </ul>
              </div>
              
              {/* Anomaly Detection */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 group">
                <div className="p-3 rounded-lg inline-block mb-4 bg-red-100 group-hover:bg-red-200 transition-colors">
                  <Activity className="w-6 h-6 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Anomaly Detection</h3>
                <p className="text-gray-600 mb-4">
                  Get alerted to unusual patterns and potential issues before they impact users.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    ML-based detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Smart alerting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Multi-channel notifications
                  </li>
                </ul>
              </div>
              
              {/* Easy Integration */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 group">
                <div className="p-3 rounded-lg inline-block mb-4 bg-indigo-100 group-hover:bg-indigo-200 transition-colors">
                  <Code className="w-6 h-6 text-indigo-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Easy Integration</h3>
                <p className="text-gray-600 mb-4">
                  Simple SDK integration with all major LLM providers and AI frameworks.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Multi-provider support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Framework integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Minimal performance impact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Providers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Works with all major LLM providers
              </h2>
              <p className="text-xl text-gray-600">
                Monitor your entire AI stack, regardless of which providers you use
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {['OpenAI', 'Anthropic', 'HuggingFace', 'AWS Bedrock', 'Google Vertex', 'Cohere'].map((provider) => (
                <div key={provider} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                  <div className="text-sm font-medium text-gray-700">{provider}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Source Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold mb-4">100% Open Source</h2>
                <p className="text-lg mb-6 text-gray-300">
                  SentinelOps is completely free and open source under the MIT license. Deploy it anywhere, modify it as needed, and contribute to the community.
                </p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                    <span>Free to use in commercial environments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                    <span>Self-hosted deployment options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                    <span>Active community of contributors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                    <span>No vendor lock-in</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="https://github.com/sentinelops/sentinelops" 
                    className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 font-medium rounded-lg px-6 py-3 text-center transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 w-5 h-5" />
                    View on GitHub
                  </a>
                  <a 
                    href="/docs/contributing" 
                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium rounded-lg px-6 py-3 text-center transition-all duration-200"
                  >
                    Contribute
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <Terminal className="w-6 h-6 text-gray-400 mr-3" />
                    <span className="text-gray-300 font-medium">Quick Deploy</span>
                  </div>
                  <pre className="text-gray-300 text-sm">
{`# Clone and deploy with Docker Compose
git clone https://github.com/sentinelops/sentinelops.git
cd sentinelops
./infrastructure/scripts/quick-deploy.sh

# Access at http://localhost:3000`}
                  </pre>
                  <div className="mt-4 text-xs text-gray-400">
                    ⚡ Deploys in under 2 minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to gain complete visibility into your AI systems?
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
              Start monitoring your LLM applications in minutes. Deploy for free and start optimizing your AI systems today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/docs/quick-start" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 font-medium rounded-lg px-8 py-3 text-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Play className="mr-2 w-5 h-5" />
                Get Started Free
              </a>
              <a 
                href="/docs/examples" 
                className="inline-flex items-center justify-center bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium rounded-lg px-8 py-3 text-center transition-all duration-200"
              >
                <Eye className="mr-2 w-5 h-5" />
                View Examples
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              No signup required • Deploy in 2 minutes • 100% open source
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Homepage;