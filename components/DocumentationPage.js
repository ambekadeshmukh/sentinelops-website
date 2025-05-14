import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Clipboard, Check, ChevronRight, Book, Code, Server, Settings, HelpCircle, ExternalLink, Terminal, Eye, ChartPie } from 'lucide-react';

const DocumentationPage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  return (
    <Layout title="SentinelOps Documentation - Quick Start Guide">
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
                      <a href="/docs/quick-start" className="flex items-center text-black font-medium">
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
                      <a href="/docs/concepts" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Core Concepts
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Integrations</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="/docs/openai-integration" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        OpenAI
                      </a>
                    </li>
                    <li>
                      <a href="/docs/anthropic-integration" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Anthropic
                      </a>
                    </li>
                    <li>
                      <a href="/docs/langchain-integration" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        LangChain
                      </a>
                    </li>
                    <li>
                      <a href="/docs/huggingface-integration" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Hugging Face
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Features</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="/docs/performance-monitoring" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Performance Monitoring
                      </a>
                    </li>
                    <li>
                      <a href="/docs/hallucination-detection" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Hallucination Detection
                      </a>
                    </li>
                    <li>
                      <a href="/docs/usage-analytics" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Usage Analytics
                      </a>
                    </li>
                    <li>
                      <a href="/docs/anomaly-detection" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Anomaly Detection
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Resources</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="/docs/api-reference" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        API Reference
                      </a>
                    </li>
                    <li>
                      <a href="/docs/examples" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Examples
                      </a>
                    </li>
                    <li>
                      <a href="/docs/faq" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        FAQ
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
                  <span className="text-sm font-medium text-gray-700">Quick Start</span>
                </div>
                
                <h1>Quick Start Guide</h1>
                
                <p className="lead">
                  Get started with SentinelOps in minutes. This guide will walk you through setting up the SDK, configuring your first monitor, and viewing your dashboards.
                </p>
                
                <div className="not-prose bg-white rounded-lg p-4 border border-gray-200 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <HelpCircle className="h-5 w-5 text-black" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-black">Prerequisites</h4>
                      <ul className="mt-2 text-sm text-gray-600">
                        <li>Python 3.8 or higher</li>
                        <li>An existing OpenAI, Anthropic, or other LLM integration</li>
                        <li>Git (for installation)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h2>Step 1: Install the SDK</h2>
                
                <p>
                  Start by installing the SentinelOps Python SDK using pip:
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
                  Alternatively, you can install from the source:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Terminal</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard('git clone https://github.com/sentinelops/sentinelops.git\ncd sentinelops\npip install -e .', 2)}
                    >
                      {copiedIndex === 2 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">git clone https://github.com/sentinelops/sentinelops.git
cd sentinelops
pip install -e .</pre>
                  </div>
                </div>
                
                <h2>Step 2: Initialize the Monitor</h2>
                
                <p>
                  Initialize the SentinelOps monitor in your Python application. Here's an example using the OpenAI integration:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Python</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`import os
from sentinelops import OpenAIMonitor

# Initialize the monitor
monitor = OpenAIMonitor(
    application_name="my-application",
    environment="production"
)

# Use the monitor to make OpenAI calls
response = monitor.chat_completion(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Tell me about machine learning."}
    ]
)

print(response.choices[0].message.content)`, 3)}
                    >
                      {copiedIndex === 3 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`import os
from sentinelops import OpenAIMonitor

# Initialize the monitor
monitor = OpenAIMonitor(
    application_name="my-application",
    environment="production"
)

# Use the monitor to make OpenAI calls
response = monitor.chat_completion(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Tell me about machine learning."}
    ]
)

print(response.choices[0].message.content)`}</pre>
                  </div>
                
                <p>
                  The <code>monitor.chat_completion()</code> method is a drop-in replacement for OpenAI's <code>openai.ChatCompletion.create()</code> that automatically tracks important metrics.
                </p>
                
                <h2>Step 3: Access Your Dashboards</h2>
                
                <p>
                  Once you've integrated SentinelOps and made a few API calls, you can run the dashboard server to visualize your metrics in real-time.
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden mb-4">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Terminal</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard('sentinelops start-dashboard', 4)}
                    >
                      {copiedIndex === 4 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">sentinelops start-dashboard</pre>
                  </div>
                </div>
                
                <p>
                  This will start a local dashboard server at <code>http://localhost:8000</code> where you can view your monitoring data.
                </p>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                  <img 
                    src="/images/dashboard-doodle.png" 
                    alt="SentinelOps Dashboard Example" 
                    className="w-full"
                  />
                </div>
                
                <h2>Using With Anthropic</h2>
                
                <p>
                  SentinelOps also supports Anthropic's Claude models. Here's how to use it:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Python</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`from sentinelops import AnthropicMonitor

# Initialize the monitor
monitor = AnthropicMonitor(
    application_name="my-application",
    environment="production"
)

# Use the monitor to make Anthropic calls
response = monitor.messages(
    model="claude-3-opus-20240229",
    messages=[
        {
            "role": "user",
            "content": "Hello, Claude!"
        }
    ]
)

print(response["content"][0]["text"])`, 5)}
                    >
                      {copiedIndex === 5 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">from sentinelops import AnthropicMonitor

# Initialize the monitor
monitor = AnthropicMonitor(
    application_name="my-application",
    environment="production"
)

# Use the monitor to make Anthropic calls
response = monitor.messages(
    model="claude-3-opus-20240229",
    messages=[
        {
            "role": "user",
            "content": "Hello, Claude!"
        }
    ]
)

print(response["content"][0]["text"])</pre>
                  </div>
                </div>
                      <div className="ml-3">
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-black group-hover:text-black">Integrations</h3>
                        <p className="mt-1 text-sm text-gray-600">
                          Explore our integrations with other LLM providers and frameworks.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                
                <h2>Community and Support</h2>
                
                <p>
                  If you need help or want to connect with other SentinelOps users, check out our community resources:
                </p>
                
                <ul>
                  <li>
                    <a href="https://github.com/sentinelops/sentinelops" className="text-black hover:text-gray-700 flex items-center" target="_blank" rel="noopener noreferrer">
                      GitHub Repository
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/sentinelops" className="text-black hover:text-gray-700 flex items-center" target="_blank" rel="noopener noreferrer">
                      Discord Community
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/SentinelOpsAI" className="text-black hover:text-gray-700 flex items-center" target="_blank" rel="noopener noreferrer">
                      Twitter
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </li>
                </ul>
                
                <div className="mt-12 p-6 bg-white rounded-lg border-2 border-black">
                  <h3 className="text-lg font-semibold text-black mb-3">Contributing to SentinelOps</h3>
                  <p className="text-gray-700 mb-4">
                    SentinelOps is an open source project and we welcome contributions of all kinds. Whether you're fixing bugs, adding features, or improving documentation, we'd love your help!
                  </p>
                  <a
                    href="/docs/contributing"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800"
                  >
                    Learn How to Contribute
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

export default DocumentationPage;