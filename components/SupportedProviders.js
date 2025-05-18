import React from 'react';
import { CheckCircle } from 'lucide-react';

const SupportedProviders = () => {
  const providers = [
    { name: 'OpenAI', code: 'from sentinelops import OpenAIMonitor', logo: '/images/providers/openai.svg' },
    { name: 'Anthropic', code: 'from sentinelops import AnthropicMonitor', logo: '/images/providers/anthropic.svg' },
    { name: 'HuggingFace', code: 'from sentinelops import HuggingFaceMonitor', logo: '/images/providers/huggingface-color.svg' },
    { name: 'AWS Bedrock', code: 'from sentinelops import BedrockMonitor', logo: '/images/providers/bedrock-color.svg' },
    { name: 'Azure OpenAI', code: 'from sentinelops import AzureOpenAIMonitor', logo: '/images/providers/azureai-color.svg' },
    { name: 'Google Vertex AI', code: 'from sentinelops import VertexAIMonitor', logo: '/images/providers/vertexai-color.svg' }
  ];

  const benefits = [
    'One-minute integration with any LLM provider',
    'Drop-in replacement for standard LLM clients',
    'No infrastructure changes required to start',
    'Works with all major LLM providers using the same API pattern',
    'Immediate insights into costs, performance, and quality'
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 text-lg font-semibold">
            Complete Integration
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
            One API for All LLM Providers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SentinelOps provides consistent monitoring across all major LLM providers with identical ease of integration
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Provider Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {providers.map((provider, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-full flex items-center justify-center mb-3">
                  <img src={provider.logo} alt={provider.name} className="h-10 object-contain" />
                </div>
                <h3 className="font-medium mb-2 text-center text-gray-900">{provider.name}</h3>
                <div className="bg-gray-50 p-2 rounded-md">
                  <code className="text-sm text-purple-600">{provider.code}</code>
                </div>
              </div>
            ))}
          </div>
          
          {/* Benefits */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Effortless Monitoring
            </h3>
            <ul className="space-y-3">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-gray-700">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedProviders;
