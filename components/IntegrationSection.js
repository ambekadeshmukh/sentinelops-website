import React from 'react';
import { Code, Check, ArrowRight } from 'lucide-react';

const IntegrationSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
            Simple Integration
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            One-Minute Integration for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Any LLM Provider</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Add comprehensive monitoring to your AI application with minimal code changes. SentinelOps works with all major LLM providers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Code Example Side */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gray-900 p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm">monitoring.py</span>
              </div>
              <pre className="text-gray-100 text-sm overflow-x-auto">
                <code>{`# Install SentinelOps
pip install sentinelops

# Import and use with your existing OpenAI code
from sentinelops import OpenAIMonitor

# Initialize the monitor
monitor = OpenAIMonitor(
    api_key="your-openai-api-key",
    application_name="my-app"
)

# Make API calls as usual - monitoring happens automatically
response = monitor.chat_completion(
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello, how are you?"}
    ]
)

# That's it! Your LLM calls are now being monitored`}</code>
              </pre>
            </div>
          </div>

          {/* Benefits Side */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Monitoring with a Single Line of Code
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="ml-3 text-gray-700">
                  <span className="font-medium">Drop-in replacement</span> for standard LLM clients
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="ml-3 text-gray-700">
                  <span className="font-medium">No infrastructure changes</span> required to get started
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="ml-3 text-gray-700">
                  <span className="font-medium">Immediate insights</span> into costs, performance, and quality
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="ml-3 text-gray-700">
                  <span className="font-medium">Automatic metrics collection</span> with minimal performance impact
                </p>
              </li>
            </ul>
            
            <div className="mt-8">
              <a href="/docs/quick-start" className="inline-flex items-center font-medium text-pink-600 hover:text-pink-800 transition-colors">
                See the quick start guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Supported Providers */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Supports All Major LLM Providers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col items-center">
              <div className="h-12 w-12 mb-3 flex items-center justify-center">
                <img src="/images/providers/openai.svg" alt="OpenAI" className="h-10" />
              </div>
              <span className="text-gray-800 font-medium">OpenAI</span>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col items-center">
              <div className="h-12 w-12 mb-3 flex items-center justify-center">
                <img src="/images/providers/anthropic.svg" alt="Anthropic" className="h-10" />
              </div>
              <span className="text-gray-800 font-medium">Anthropic</span>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col items-center">
              <div className="h-12 w-12 mb-3 flex items-center justify-center">
                <img src="/images/providers/huggingface-color.svg" alt="HuggingFace" className="h-10" />
              </div>
              <span className="text-gray-800 font-medium">HuggingFace</span>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col items-center">
              <div className="h-12 w-12 mb-3 flex items-center justify-center">
                <img src="/images/providers/bedrock-color.svg" alt="AWS Bedrock" className="h-10" />
              </div>
              <span className="text-gray-800 font-medium">AWS Bedrock</span>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col items-center">
              <div className="h-12 w-12 mb-3 flex items-center justify-center">
                <img src="/images/providers/azureai-color.svg" alt="Azure OpenAI" className="h-10" />
              </div>
              <span className="text-gray-800 font-medium">Azure OpenAI</span>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col items-center">
              <div className="h-12 w-12 mb-3 flex items-center justify-center">
                <img src="/images/providers/vertexai-color.svg" alt="Google Vertex AI" className="h-10" />
              </div>
              <span className="text-gray-800 font-medium">Google Vertex AI</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/docs/quick-start"
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 font-medium rounded-lg px-6 py-3 transition-all duration-200"
          >
            Start Monitoring in Minutes
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
