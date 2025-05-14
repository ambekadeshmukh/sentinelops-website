import React from 'react';
import Layout from './Layout';
import { ArrowRight, BarChart2, Shield, Zap, Code, Activity, Eye, Terminal, PieChart } from 'lucide-react';

const Homepage = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 to-blue-50 border-b border-pink-100 py-20 px-4 sm:px-6 lg:px-8 text-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-800">
                  Full Observability for AI/LLM Systems
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-slate-600">
                  AI systems are black boxes. SentinelOps gives you full visibility.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div className="rounded-full bg-pink-100 p-2 mr-3">
                      <Eye className="w-5 h-5 text-pink-600" />
                    </div>
                    <p className="text-slate-700">Monitor performance, reliability, and quality in real-time</p>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-full bg-blue-100 p-2 mr-3">
                      <BarChart2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-slate-700">Detect anomalies and hallucinations automatically</p>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-full bg-teal-100 p-2 mr-3">
                      <PieChart className="w-5 h-5 text-teal-600" />
                    </div>
                    <p className="text-slate-700">Get actionable insights with data-driven analytics</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="/docs/quick-start" className="bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 font-medium rounded-lg px-6 py-3 text-center flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <a href="https://github.com/sentinelops/sentinelops" className="bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 font-medium rounded-lg px-6 py-3 text-center transition-all duration-200">
                    View on GitHub
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 p-6 rounded-xl shadow-lg">
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/images/SentinelOps-logo.png" 
                      alt="SentinelOps" 
                      className="h-16"
                    />
                  </div>
                  <img 
                    src="/images/dashboard-doodle.png" 
                    alt="SentinelOps Dashboard" 
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Comprehensive LLM Monitoring</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From performance metrics to hallucination detection, SentinelOps provides end-to-end observability for your AI systems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl border border-pink-200 hover:shadow-lg transition-all duration-200 group">
                <div className="p-3 rounded-lg inline-block mb-4 bg-pink-200 group-hover:bg-pink-300 transition-colors">
                  <Zap className="w-6 h-6 text-pink-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Performance Metrics</h3>
                <p className="text-slate-600 mb-4">
                  Track inference time, memory usage, request latency, and throughput with real-time dashboards.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <div className="bg-pink-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    </div>
                    Inference time tracking
                  </li>
                  <li className="flex items-center">
                    <div className="bg-pink-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    </div>
                    Resource utilization monitoring
                  </li>
                  <li className="flex items-center">
                    <div className="bg-pink-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    </div>
                    End-to-end latency measurement
                  </li>
                </ul>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-200 group">
                <div className="p-3 rounded-lg inline-block mb-4 bg-blue-200 group-hover:bg-blue-300 transition-colors">
                  <Activity className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Quality Assurance</h3>
                <p className="text-slate-600 mb-4">
                  Automatically detect hallucinations, inconsistencies, and model drift for more reliable AI.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <div className="bg-blue-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    Hallucination detection
                  </li>
                  <li className="flex items-center">
                    <div className="bg-blue-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    Response consistency monitoring
                  </li>
                  <li className="flex items-center">
                    <div className="bg-blue-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    Model drift indicators
                  </li>
                </ul>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl border border-teal-200 hover:shadow-lg transition-all duration-200 group">
                <div className="p-3 rounded-lg inline-block mb-4 bg-teal-200 group-hover:bg-teal-300 transition-colors">
                  <PieChart className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Usage Analytics</h3>
                <p className="text-slate-600 mb-4">
                  Track token usage, request volumes, and get actionable insights to optimize your LLM applications.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <div className="bg-teal-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    </div>
                    Token usage tracking
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    </div>
                    Application-level attribution
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    </div>
                    Optimization recommendations
                  </li>
                </ul>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-200 group">
                <div className="p-3 rounded-lg inline-block mb-4 bg-purple-200 group-hover:bg-purple-300 transition-colors">
                  <Shield className="w-6 h-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Anomaly Detection</h3>
                <p className="text-slate-600 mb-4">
                  Get alerts for unusual behavior, errors, and potential issues before they impact users.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <div className="bg-purple-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    Real-time anomaly detection
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    Error pattern recognition
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    Customizable alerting rules
                  </li>
                </ul>
              </div>
              
              {/* Feature 5 */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl border border-indigo-200 hover:shadow-lg transition-all duration-200 group">
                <div className="p-3 rounded-lg inline-block mb-4 bg-indigo-200 group-hover:bg-indigo-300 transition-colors">
                  <BarChart2 className="w-6 h-6 text-indigo-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Interactive Dashboards</h3>
                <p className="text-slate-600 mb-4">
                  Beautiful dashboards with real-time updates, historical trends, and deep insights.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <div className="bg-indigo-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    Real-time monitoring
                  </li>
                  <li className="flex items-center">
                    <div className="bg-indigo-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    Historical trend analysis
                  </li>
                  <li className="flex items-center">
                    <div className="bg-indigo-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    Request/response explorer
                  </li>
                </ul>
              </div>
              
              {/* Feature 6 */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-xl border border-emerald-200 hover:shadow-lg transition-all duration-200 group">
                <div className="p-3 rounded-lg inline-block mb-4 bg-emerald-200 group-hover:bg-emerald-300 transition-colors">
                  <Code className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">Easy Integration</h3>
                <p className="text-slate-600 mb-4">
                  Simple SDK for Python with support for all major LLM providers and frameworks.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <div className="bg-emerald-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    </div>
                    Multi-provider support
                  </li>
                  <li className="flex items-center">
                    <div className="bg-emerald-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    </div>
                    Framework integration
                  </li>
                  <li className="flex items-center">
                    <div className="bg-emerald-300 p-1 rounded-full mr-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    </div>
                    Minimal performance impact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections with similar color updates... */}
        
        {/* Open Source Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-700 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Free & Open Source</h2>
                <p className="text-lg mb-6 text-slate-200">
                  SentinelOps is 100% open source and free to use. We believe in transparency and community-driven development.
                </p>
                <ul className="space-y-3 text-slate-200 mb-8">
                  <li className="flex items-start">
                    <div className="rounded-full bg-pink-500 p-1 mr-3 mt-1">
                      <div className="w-4 h-4 text-white flex items-center justify-center">✓</div>
                    </div>
                    <span>MIT licensed - use in any project</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-pink-500 p-1 mr-3 mt-1">
                      <div className="w-4 h-4 text-white flex items-center justify-center">✓</div>
                    </div>
                    <span>Active community of contributors</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-pink-500 p-1 mr-3 mt-1">
                      <div className="w-4 h-4 text-white flex items-center justify-center">✓</div>
                    </div>
                    <span>Regular updates and new features</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="https://github.com/sentinelops/sentinelops" className="bg-white text-slate-800 hover:bg-slate-100 font-medium rounded-lg px-6 py-3 text-center flex items-center justify-center transition-all duration-200">
                    Star on GitHub
                    <span className="ml-2">⭐</span>
                  </a>
                  <a href="/docs/contributing" className="bg-pink-500 text-white hover:bg-pink-600 font-medium rounded-lg px-6 py-3 text-center transition-all duration-200">
                    Contribute
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 max-w-md">
                  <div className="flex items-center mb-4">
                    <svg className="h-8 w-8 text-white mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xl font-semibold">Join Our Community</span>
                  </div>
                  <p className="text-slate-200 mb-4">
                    Help shape the future of LLM observability by contributing to SentinelOps.
                  </p>
                  <div className="bg-slate-700 rounded-lg p-4 mb-4">
                    <code className="text-sm text-slate-200">
                      git clone https://github.com/sentinelops/sentinelops.git<br />
                      cd sentinelops<br />
                      pip install -e .
                    </code>
                  </div>
                  <a href="/docs/contributing" className="text-slate-200 hover:text-white text-sm flex items-center">
                    Learn more about contributing
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-blue-50 border-t border-pink-100">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Ready to gain full visibility into your AI systems?</h2>
            <p className="text-xl mb-8 text-slate-600 max-w-3xl mx-auto">
              Start monitoring your LLMs in minutes with our easy-to-use SDK and powerful dashboards.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/docs/quick-start" className="bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 font-medium rounded-lg px-8 py-3 text-center transition-all duration-200 shadow-md hover:shadow-lg">
                Get Started
              </a>
              <a href="https://github.com/sentinelops/sentinelops" className="bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 font-medium rounded-lg px-8 py-3 text-center transition-all duration-200">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Homepage;