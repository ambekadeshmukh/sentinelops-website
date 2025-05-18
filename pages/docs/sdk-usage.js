// pages/docs/sdk-usage.js
import React from 'react';
import Layout from '../../components/Layout';
import { Clipboard, Check, ChevronRight, Book, Terminal, Code, Package, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SDKUsagePage = () => {
  const [copiedIndex, setCopiedIndex] = React.useState(null);
  
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  return (
    <Layout title="SentinelOps SDK Usage Guide">
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
                      <a href="/docs/installation" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Installation
                      </a>
                    </li>
                    <li>
                      <a href="/docs/sdk-usage" className="flex items-center text-black font-medium">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        SDK Usage
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Integrations</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#openai-usage" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        OpenAI
                      </a>
                    </li>
                    <li>
                      <a href="#anthropic-usage" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Anthropic
                      </a>
                    </li>
                    <li>
                      <a href="#bedrock-usage" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        AWS Bedrock
                      </a>
                    </li>
                    <li>
                      <a href="/docs/examples" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        More Examples
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            
            {/* Main Content */}
            <div className="lg:flex-1 lg:pl-8">
              <div className="prose prose-blue max-w-none">
                <h1 className="text-3xl font-bold mb-6">SDK Usage Guide</h1>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
                  <p className="text-blue-700">
                    Before using the SDK, make sure to <Link href="/docs/installation#sdk-installation" className="text-blue-600 hover:underline">install SentinelOps Python SDK</Link>.
                  </p>
                </div>
                
                <h2 id="setup">Setup & Configuration</h2>
                
                <p>
                  After installing the SDK, you'll need to initialize it with your API key and application name:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden mb-6">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Python</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`from sentinelops import SentinelOps

# Initialize the SDK
sentinel = SentinelOps(
    api_key="your-api-key-here",
    application_name="my-application"
)`, 1)}
                    >
                      {copiedIndex === 1 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`from sentinelops import SentinelOps

# Initialize the SDK
sentinel = SentinelOps(
    api_key="your-api-key-here",
    application_name="my-application"
)`}</pre>
                  </div>
                </div>
                
                <h2 id="openai-usage">Using with OpenAI</h2>
                
                <p>
                  SentinelOps provides a drop-in replacement for the OpenAI client that automatically monitors all your API calls:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden mb-6">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Python</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`from sentinelops import OpenAIMonitor

# Initialize the monitor
monitor = OpenAIMonitor(
    api_key="your-openai-api-key",
    application_name="my-app"
)

# Make API calls as usual - monitoring happens automatically
response = monitor.chat_completion(
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What is LLM monitoring?"}
    ]
)

print(response.choices[0].message.content)`, 2)}
                    >
                      {copiedIndex === 2 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`from sentinelops import OpenAIMonitor

# Initialize the monitor
monitor = OpenAIMonitor(
    api_key="your-openai-api-key",
    application_name="my-app"
)

# Make API calls as usual - monitoring happens automatically
response = monitor.chat_completion(
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What is LLM monitoring?"}
    ]
)

print(response.choices[0].message.content)`}</pre>
                  </div>
                </div>
                
                <h2 id="anthropic-usage">Using with Anthropic</h2>
                
                <p>
                  SentinelOps also provides seamless integration with Anthropic's Claude models:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden mb-6">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Python</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`from sentinelops import AnthropicMonitor

# Initialize the monitor
monitor = AnthropicMonitor(
    api_key="your-anthropic-api-key",
    application_name="my-app"
)

# Make Claude API calls with monitoring
response = monitor.completion(
    prompt="\\n\\nHuman: What is LLM monitoring?\\n\\nAssistant:",
    max_tokens_to_sample=300
)

print(response.completion)`, 3)}
                    >
                      {copiedIndex === 3 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`from sentinelops import AnthropicMonitor

# Initialize the monitor
monitor = AnthropicMonitor(
    api_key="your-anthropic-api-key",
    application_name="my-app"
)

# Make Claude API calls with monitoring
response = monitor.completion(
    prompt="\\n\\nHuman: What is LLM monitoring?\\n\\nAssistant:",
    max_tokens_to_sample=300
)

print(response.completion)`}</pre>
                  </div>
                </div>
                
                <h2 id="bedrock-usage">Using with AWS Bedrock</h2>
                
                <p>
                  For AWS Bedrock users, SentinelOps integrates with the boto3 client:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden mb-6">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Python</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`from sentinelops import BedrockMonitor
import boto3
import json

# Initialize the Bedrock client
bedrock_client = boto3.client('bedrock-runtime')

# Initialize the monitor with the client
monitor = BedrockMonitor(
    client=bedrock_client,
    application_name="my-app"
)

# Make API calls with monitoring
response = monitor.invoke_model(
    modelId="anthropic.claude-v2",
    body=json.dumps({
        "prompt": "\\n\\nHuman: What is LLM monitoring?\\n\\nAssistant:",
        "max_tokens_to_sample": 300
    })
)

print(json.loads(response["body"].read())["completion"])`, 4)}
                    >
                      {copiedIndex === 4 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`from sentinelops import BedrockMonitor
import boto3
import json

# Initialize the Bedrock client
bedrock_client = boto3.client('bedrock-runtime')

# Initialize the monitor with the client
monitor = BedrockMonitor(
    client=bedrock_client,
    application_name="my-app"
)

# Make API calls with monitoring
response = monitor.invoke_model(
    modelId="anthropic.claude-v2",
    body=json.dumps({
        "prompt": "\\n\\nHuman: What is LLM monitoring?\\n\\nAssistant:",
        "max_tokens_to_sample": 300
    })
)

print(json.loads(response["body"].read())["completion"])`}</pre>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 mb-8 bg-gray-50">
                  <h3 className="text-lg font-medium mb-3">Need more examples?</h3>
                  <p className="mb-4">
                    Check out our <Link href="/docs/examples" className="text-blue-600 hover:underline">Use Cases</Link> page for examples with all major LLM providers.
                  </p>
                  <Link href="/docs/examples" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                    View all examples
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SDKUsagePage;
