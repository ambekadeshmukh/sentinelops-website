import React, { useState } from 'react';
import { Clipboard, Check, Code, ArrowRight } from 'lucide-react';

const QuickStartGuide = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // One-minute integration code sample
  const quickIntegrationCode = `# Install SentinelOps
pip install sentinelops

# Import and use with your existing OpenAI code
from sentinelops import OpenAIMonitor

# Initialize the monitor (replaces standard OpenAI client)
monitor = OpenAIMonitor(
    api_key="your-openai-api-key",  # Or use os.environ.get("OPENAI_API_KEY")
    application_name="my-app"
)

# Make API calls as usual - monitoring happens automatically
response = monitor.chat_completion(
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What are the key benefits of LLM monitoring?"}
    ]
)

print(response.choices[0].message.content)

# That's it! Your LLM calls are now being monitored`;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">SentinelOps Quick Start Guide</h1>
      
      <div className="mb-10">
        <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg border border-pink-100 mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            One-Minute Integration
          </h2>
          <p className="text-gray-700 mb-4">
            Get started with SentinelOps in just one minute with this simple integration example. Add comprehensive monitoring to your LLM application with minimal code changes.
          </p>
          
          <div className="relative">
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-gray-400 text-sm">Python</span>
                <button
                  onClick={() => copyToClipboard(quickIntegrationCode, 'quick-integration')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {copiedIndex === 'quick-integration' ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Clipboard className="w-4 h-4" />
                  )}
                </button>
              </div>
              <pre className="text-gray-100 overflow-x-auto text-sm">
                <code>{quickIntegrationCode}</code>
              </pre>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">What You Get Immediately</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center text-blue-600 mb-2">
              <Code className="w-5 h-5 mr-2" />
              <h3 className="font-medium">Cost Tracking</h3>
            </div>
            <p className="text-gray-600">See exactly what each LLM call costs in real-time</p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center text-green-600 mb-2">
              <Code className="w-5 h-5 mr-2" />
              <h3 className="font-medium">Performance Metrics</h3>
            </div>
            <p className="text-gray-600">Monitor latency, tokens used, and request volume</p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center text-red-600 mb-2">
              <Code className="w-5 h-5 mr-2" />
              <h3 className="font-medium">Error Detection</h3>
            </div>
            <p className="text-gray-600">Identify and troubleshoot failed requests</p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center text-purple-600 mb-2">
              <Code className="w-5 h-5 mr-2" />
              <h3 className="font-medium">Quality Assessment</h3>
            </div>
            <p className="text-gray-600">Track hallucinations and output quality</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Supported LLM Providers</h2>
        <p className="text-gray-700 mb-4">
          SentinelOps works with all major LLM providers with identical ease of integration:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-medium mb-2">OpenAI</h3>
            <code className="text-sm bg-gray-100 p-2 rounded block text-gray-800">
              from sentinelops import OpenAIMonitor
            </code>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-medium mb-2">Anthropic</h3>
            <code className="text-sm bg-gray-100 p-2 rounded block text-gray-800">
              from sentinelops import AnthropicMonitor
            </code>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-medium mb-2">HuggingFace</h3>
            <code className="text-sm bg-gray-100 p-2 rounded block text-gray-800">
              from sentinelops import HuggingFaceMonitor
            </code>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-medium mb-2">AWS Bedrock</h3>
            <code className="text-sm bg-gray-100 p-2 rounded block text-gray-800">
              from sentinelops import BedrockMonitor
            </code>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-medium mb-2">Azure OpenAI</h3>
            <code className="text-sm bg-gray-100 p-2 rounded block text-gray-800">
              from sentinelops import AzureOpenAIMonitor
            </code>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-medium mb-2">Google Vertex AI</h3>
            <code className="text-sm bg-gray-100 p-2 rounded block text-gray-800">
              from sentinelops import VertexAIMonitor
            </code>
          </div>
        </div>
        
        <div className="flex justify-center">
          <a href="/docs/installation" className="inline-flex items-center bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 font-medium rounded-lg px-6 py-3 transition-all duration-200">
            Continue to Installation Guide
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickStartGuide;
