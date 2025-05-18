import React from 'react';
import Layout from '../../components/Layout';
import LLMProviderExamples from '../../components/LLMProviderExamples';

const ProviderExamplesPage = () => {
  return (
    <Layout title="SentinelOps - LLM Provider Integration Examples">
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
                        <span className="h-4 w-4 mr-1">→</span>
                        Quick Start
                      </a>
                    </li>
                    <li>
                      <a href="/docs/installation" className="flex items-center text-gray-600 hover:text-black">
                        <span className="h-4 w-4 mr-1">→</span>
                        Installation
                      </a>
                    </li>
                    <li>
                      <a href="/docs/provider-examples" className="flex items-center text-black font-medium">
                        <span className="h-4 w-4 mr-1">→</span>
                        Provider Examples
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Integrations</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="/docs/openai-integration" className="flex items-center text-gray-600 hover:text-black">
                        <span className="h-4 w-4 mr-1">→</span>
                        OpenAI
                      </a>
                    </li>
                    <li>
                      <a href="/docs/anthropic-integration" className="flex items-center text-gray-600 hover:text-black">
                        <span className="h-4 w-4 mr-1">→</span>
                        Anthropic
                      </a>
                    </li>
                    <li>
                      <a href="/docs/huggingface-integration" className="flex items-center text-gray-600 hover:text-black">
                        <span className="h-4 w-4 mr-1">→</span>
                        HuggingFace
                      </a>
                    </li>
                    <li>
                      <a href="/docs/bedrock-integration" className="flex items-center text-gray-600 hover:text-black">
                        <span className="h-4 w-4 mr-1">→</span>
                        AWS Bedrock
                      </a>
                    </li>
                    <li>
                      <a href="/docs/vertex-integration" className="flex items-center text-gray-600 hover:text-black">
                        <span className="h-4 w-4 mr-1">→</span>
                        Google Vertex AI
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:flex-1 lg:pl-8">
              <h1 className="text-3xl font-bold mb-6">LLM Provider Integration Examples</h1>
              <p className="text-lg text-gray-700 mb-8">
                SentinelOps provides consistent monitoring for all major LLM providers with a simple one-minute integration. 
                Select any provider below to see how easily you can add comprehensive monitoring to your application.
              </p>
              
              <LLMProviderExamples />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProviderExamplesPage;
