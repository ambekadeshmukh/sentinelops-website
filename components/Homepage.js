import React from 'react';
import { ArrowRight, BarChart2, Shield, Zap, Code, Activity, Eye, Terminal, PieChart } from 'lucide-react';

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#FDFDFD] border-b border-gray-200 py-20 px-4 sm:px-6 lg:px-8 text-black">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Full Observability for AI/LLM Systems
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700">
                AI systems are black boxes. SentinelOps gives you full visibility.
              </p>
              <div className="space-y-2 mb-8">
                <div className="flex items-center">
                  <div className="rounded-full bg-gray-200 p-1 mr-3">
                    <Eye className="w-4 h-4" />
                  </div>
                  <p>Monitor performance, reliability, and quality in real-time</p>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full bg-gray-200 p-1 mr-3">
                    <BarChart2 className="w-4 h-4" />
                  </div>
                  <p>Detect anomalies and hallucinations automatically</p>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full bg-gray-200 p-1 mr-3">
                    <PieChart className="w-4 h-4" />
                  </div>
                  <p>Get actionable insights with data-driven analytics</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="/docs/quick-start" className="bg-black text-white hover:bg-gray-800 font-medium rounded-lg px-6 py-3 text-center flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a href="https://github.com/sentinelops/sentinelops" className="bg-white border border-gray-300 text-black hover:bg-gray-100 font-medium rounded-lg px-6 py-3 text-center">
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md">
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
            <h2 className="text-3xl font-bold text-black mb-4">Comprehensive LLM Monitoring</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From performance metrics to hallucination detection, SentinelOps provides end-to-end observability for your AI systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#FDFDFD] p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="p-2 rounded-lg inline-block mb-4 border-2 border-black doodle-box">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Performance Metrics</h3>
              <p className="text-gray-700 mb-4">
                Track inference time, memory usage, request latency, and throughput with real-time dashboards.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Inference time tracking
                </li>
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Resource utilization monitoring
                </li>
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  End-to-end latency measurement
                </li>
              </ul>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-[#FDFDFD] p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="p-2 rounded-lg inline-block mb-4 border-2 border-black doodle-box">
                <Activity className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Quality Assurance</h3>
              <p className="text-gray-700 mb-4">
                Automatically detect hallucinations, inconsistencies, and model drift for more reliable AI.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Hallucination detection
                </li>
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Response consistency monitoring
                </li>
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Model drift indicators
                </li>
              </ul>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-[#FDFDFD] p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="p-2 rounded-lg inline-block mb-4 border-2 border-black doodle-box">
                <PieChart className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Usage Analytics</h3>
              <p className="text-gray-700 mb-4">
                Track token usage, request volumes, and get actionable insights to optimize your LLM applications.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Token usage tracking
                </li>
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Application-level attribution
                </li>
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Optimization recommendations
                </li>
              </ul>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-[#FDFDFD] p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="p-2 rounded-lg inline-block mb-4 border-2 border-black doodle-box">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Anomaly Detection</h3>
              <p className="text-gray-700 mb-4">
                Get alerts for unusual behavior, errors, and potential issues before they impact users.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Real-time anomaly detection
                </li>
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Error pattern recognition
                </li>
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Customizable alerting rules
                </li>
              </ul>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-[#FDFDFD] p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="p-2 rounded-lg inline-block mb-4 border-2 border-black doodle-box">
                <BarChart2 className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Interactive Dashboards</h3>
              <p className="text-gray-700 mb-4">
                Minimalist dashboards with real-time updates, historical trends, and deep insights.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Real-time monitoring
                </li>
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Historical trend analysis
                </li>
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Request/response explorer
                </li>
              </ul>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-[#FDFDFD] p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="p-2 rounded-lg inline-block mb-4 border-2 border-black doodle-box">
                <Code className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Easy Integration</h3>
              <p className="text-gray-700 mb-4">
                Simple SDK for Python with support for all major LLM providers and frameworks.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Multi-provider support
                </li>
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Framework integration
                </li>
                <li className="flex items-center">
                  <div className="bg-gray-200 p-1 rounded-full mr-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  Minimal performance impact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">How SentinelOps Works</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              SentinelOps provides end-to-end visibility with a lightweight SDK and powerful backend.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300"></div>
            
            {/* Step 1 */}
            <div className="relative md:flex items-center mb-12">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-xl font-semibold text-black mb-2">1. Instrument Your Application</h3>
                <p className="text-gray-700">
                  Add our lightweight SDK to your Python application with just a few lines of code.
                  Works with OpenAI, Anthropic, Hugging Face, and more.
                </p>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-black rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">
                1
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
                    {`# Install the SDK
pip install sentinelops

from sentinelops import OpenAIMonitor

monitor = OpenAIMonitor(
    model="gpt-4",
    application_name="my-app"
)

response = monitor.chat_completion(
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)`}
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative md:flex items-center mb-12">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <img 
                    src="/images/data-processor-doodle.png" 
                    alt="Data Processing" 
                    className="rounded mx-auto"
                  />
                </div>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-black rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">
                2
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-xl font-semibold text-black mb-2">2. Real-time Data Processing</h3>
                <p className="text-gray-700">
                  Your metrics, logs, and traces are processed in real-time by our advanced stream processor.
                  We automatically detect anomalies, hallucinations, and optimization opportunities.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-xl font-semibold text-black mb-2">3. Visualize and Alert</h3>
                <p className="text-gray-700">
                  Access minimalist dashboards, set up alerts, and gain actionable insights for your AI systems.
                  Track performance, reliability, and quality metrics all in one place.
                </p>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-black rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">
                3
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <img 
                    src="/images/dashboard-doodle.png" 
                    alt="SentinelOps Dashboard" 
                    className="rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Provider Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Works With All Major LLM Providers</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              SentinelOps provides unified monitoring across all your AI/LLM systems.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="bg-[#FDFDFD] p-6 rounded-lg border border-gray-200 flex items-center justify-center">
              <img src="/images/providers/openai-logo-bw.svg" alt="OpenAI" className="h-12" />
            </div>
            <div className="bg-[#FDFDFD] p-6 rounded-lg border border-gray-200 flex items-center justify-center">
              <img src="/images/providers/anthropic-logo-bw.svg" alt="Anthropic" className="h-12" />
            </div>
            <div className="bg-[#FDFDFD] p-6 rounded-lg border border-gray-200 flex items-center justify-center">
              <img src="/images/providers/huggingface-logo-bw.svg" alt="Hugging Face" className="h-12" />
            </div>
            <div className="bg-[#FDFDFD] p-6 rounded-lg border border-gray-200 flex items-center justify-center">
              <img src="/images/providers/cohere-logo-bw.svg" alt="Cohere" className="h-12" />
            </div>
            <div className="bg-[#FDFDFD] p-6 rounded-lg border border-gray-200 flex items-center justify-center">
              <img src="/images/providers/aws-logo-bw.svg" alt="AWS Bedrock" className="h-12" />
            </div>
            <div className="bg-[#FDFDFD] p-6 rounded-lg border border-gray-200 flex items-center justify-center">
              <img src="/images/providers/azure-logo-bw.svg" alt="Azure OpenAI" className="h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Free & Open Source</h2>
              <p className="text-lg mb-6 text-gray-300">
                SentinelOps is 100% open source and free to use. We believe in transparency and community-driven development.
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-start">
                  <div className="rounded-full bg-gray-800 p-1 mr-3 mt-1">
                    <div className="w-4 h-4 text-white flex items-center justify-center">✓</div>
                  </div>
                  <span>MIT licensed - use in any project</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-gray-800 p-1 mr-3 mt-1">
                    <div className="w-4 h-4 text-white flex items-center justify-center">✓</div>
                  </div>
                  <span>Active community of contributors</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-gray-800 p-1 mr-3 mt-1">
                    <div className="w-4 h-4 text-white flex items-center justify-center">✓</div>
                  </div>
                  <span>Regular updates and new features</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="https://github.com/sentinelops/sentinelops" className="bg-white text-black hover:bg-gray-200 font-medium rounded-lg px-6 py-3 text-center flex items-center justify-center">
                  Star on GitHub
                  <span className="ml-2">⭐</span>
                </a>
                <a href="/docs/contributing" className="bg-gray-800 text-white hover:bg-gray-700 font-medium rounded-lg px-6 py-3 text-center">
                  Contribute
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 max-w-md">
                <div className="flex items-center mb-4">
                  <svg className="h-8 w-8 text-white mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl font-semibold">Join Our Community</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Help shape the future of LLM observability by contributing to SentinelOps.
                </p>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <code className="text-sm text-gray-300">
                    git clone https://github.com/sentinelops/sentinelops.git<br />
                    cd sentinelops<br />
                    pip install -e .
                  </code>
                </div>
                <a href="/docs/contributing" className="text-gray-300 hover:text-white text-sm flex items-center">
                  Learn more about contributing
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFDFD] border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Ready to gain full visibility into your AI systems?</h2>
          <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
            Start monitoring your LLMs in minutes with our easy-to-use SDK and powerful dashboards.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/docs/quick-start" className="bg-black text-white hover:bg-gray-800 font-medium rounded-lg px-8 py-3 text-center">
              Get Started
            </a>
            <a href="https://github.com/sentinelops/sentinelops" className="bg-white border border-gray-300 text-black hover:bg-gray-100 font-medium rounded-lg px-8 py-3 text-center">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;