import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Clipboard, Check, ChevronRight, Book, Code, Server, Settings, HelpCircle, ExternalLink, Terminal, Eye } from 'lucide-react';

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
                      onClick={() => copyToClipboard('git clone https://github.com/sentinelops/sentinelops.gitimport React, { useState } from 'react';
import Layout from '../components/Layout';
import { Clipboard, Check, ChevronRight, Book, Code, Server, Settings, HelpCircle, ExternalLink } from 'lucide-react';

const DocumentationPage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  return (
    <Layout title="SentinelOps Documentation - Quick Start Guide">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar Navigation */}
            <div className="lg:w-64 lg:pr-8 lg:border-r lg:border-gray-200 mb-8 lg:mb-0">
              <nav className="sticky top-20">
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Getting Started</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="/docs/quick-start" className="flex items-center text-blue-600 font-medium">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Quick Start
                      </a>
                    </li>
                    <li>
                      <a href="/docs/installation" className="flex items-center text-gray-600 hover:text-blue-600">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Installation
                      </a>
                    </li>
                    <li>
                      <a href="/docs/concepts" className="flex items-center text-gray-600 hover:text-blue-600">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Core Concepts
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Integrations</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="/docs/openai-integration" className="flex items-center text-gray-600 hover:text-blue-600">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        OpenAI
                      </a>
                    </li>
                    <li>
                      <a href="/docs/anthropic-integration" className="flex items-center text-gray-600 hover:text-blue-600">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Anthropic
                      </a>
                    </li>
                    <li>
                      <a href="/docs/langchain-integration" className="flex items-center text-gray-600 hover:text-blue-600">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        LangChain
                      </a>
                    </li>
                    <li>
                      <a href="/docs/huggingface-integration" className="flex items-center text-gray-600 hover:text-blue-600">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Hugging Face
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Features</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="/docs/performance-monitoring" className="flex items-center text-gray-600 hover:text-blue-600">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Performance Monitoring
                      </a>
                    </li>
                    <li>
                      <a href="/docs/hallucination-detection" className="flex items-center text-gray-600 hover:text-blue-600">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Hallucination Detection
                      </a>
                    </li>
                    <li>
                      <a href="/docs/cost-optimization" className="flex items-center text-gray-600 hover:text-blue-600">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Cost Optimization
                      </a>
                    </li>
                    <li>
                      <a href="/docs/anomaly-detection" className="flex items-center text-gray-600 hover:text-blue-600">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Anomaly Detection
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Resources</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="/docs/api-reference" className="flex items-center text-gray-600 hover:text-blue-600">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        API Reference
                      </a>
                    </li>
                    <li>
                      <a href="/docs/examples" className="flex items-center text-gray-600 hover:text-blue-600">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Examples
                      </a>
                    </li>
                    <li>
                      <a href="/docs/faq" className="flex items-center text-gray-600 hover:text-blue-600">
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
              <div className="prose prose-blue max-w-none">
                <div className="flex items-center space-x-2 mb-4">
                  <Book className="h-5 w-5 text-blue-600" />
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
                
                <div className="not-prose bg-gray-50 rounded-lg p-4 border border-gray-200 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <HelpCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-900">Prerequisites</h4>
                      <ul className="mt-2 text-sm text-gray-600">
                        <li>Python 3.8 or higher</li>
                        <li>An existing OpenAI, Anthropic, or other LLM integration</li>
                        <li>A SentinelOps account (sign up for free <a href="/signup" className="text-blue-600 hover:text-blue-800">here</a>)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h2>Step 1: Install the SDK</h2>
                
                <p>
                  Start by installing the SentinelOps Python SDK using pip:
                </p>
                
                <div className="bg-gray-800 rounded-lg overflow-hidden">
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
                
                <h2>Step 2: Get Your API Key</h2>
                
                <p>
                  Log in to your SentinelOps account and navigate to the <a href="/dashboard/settings" className="text-blue-600 hover:text-blue-800">API Settings</a> page. Create a new API key and copy it.
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">Important</h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>
                          Keep your API key secure. Never commit it to version control or share it publicly.
                          We recommend using environment variables to store your API key.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h2>Step 3: Initialize the Monitor</h2>
                
                <p>
                  Initialize the SentinelOps monitor in your Python application. Here's an example using the OpenAI integration:
                </p>
                
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Python</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`import os
from sentinelops import OpenAIMonitor

# Initialize the monitor
monitor = OpenAIMonitor(
    api_key=os.environ.get("SENTINELOPS_API_KEY"),
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

print(response.choices[0].message.content)`, 2)}
                    >
                      {copiedIndex === 2 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">import os
from sentinelops import OpenAIMonitor

# Initialize the monitor
monitor = OpenAIMonitor(
    api_key=os.environ.get("SENTINELOPS_API_KEY"),
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

print(response.choices[0].message.content)</pre>
                  </div>
                </div>
                
                <p>
                  The <code>monitor.chat_completion()</code> method is a drop-in replacement for OpenAI's <code>openai.ChatCompletion.create()</code> that automatically tracks important metrics.
                </p>
                
                <h2>Step 4: Access Your Dashboards</h2>
                
                <p>
                  Once you've integrated SentinelOps and made a few API calls, you can view your metrics in the SentinelOps dashboard. Log in to your account and you'll see data appearing in real-time.
                </p>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                  <img 
                    src="/images/dashboard-example.png" 
                    alt="SentinelOps Dashboard Example" 
                    className="w-full"
                  />
                </div>
                
                <h2>Next Steps</h2>
                
                <p>
                  Congratulations! You've successfully set up SentinelOps to monitor your LLM application. Here are some suggestions for what to explore next:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 not-prose">
                  <a href="/docs/performance-monitoring" className="group rounded-lg border border-gray-200 p-4 hover:border-blue-600 hover:bg-blue-50/50">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-1 rounded-md bg-blue-100 group-hover:bg-blue-200">
                        <Server className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">Performance Monitoring</h3>
                        <p className="mt-1 text-sm text-gray-600">
                          Learn how to track inference time, throughput, and resource utilization.
                        </p>
                      </div>
                    </div>
                  </a>
                  
                  <a href="/docs/hallucination-detection" className="group rounded-lg border border-gray-200 p-4 hover:border-blue-600 hover:bg-blue-50/50">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-1 rounded-md bg-green-100 group-hover:bg-green-200">
                        <Settings className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">Hallucination Detection</h3>
                        <p className="mt-1 text-sm text-gray-600">
                          Set up automated detection of factually incorrect or inconsistent responses.
                        </p>
                      </div>
                    </div>
                  </a>
                  
                  <a href="/docs/cost-optimization" className="group rounded-lg border border-gray-200 p-4 hover:border-blue-600 hover:bg-blue-50/50">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-1 rounded-md bg-purple-100 group-hover:bg-purple-200">
                        <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">Cost Optimization</h3>
                        <p className="mt-1 text-sm text-gray-600">
                          Track token usage and implement strategies to reduce your LLM expenses.
                        </p>
                      </div>
                    </div>
                  </a>
                  
                  <a href="/docs/integrations" className="group rounded-lg border border-gray-200 p-4 hover:border-blue-600 hover:bg-blue-50/50">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-1 rounded-md bg-yellow-100 group-hover:bg-yellow-200">
                        <Code className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">Integrations</h3>
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
                    <a href="https://github.com/sentinelops/sentinelops" className="text-blue-600 hover:text-blue-800 flex items-center" target="_blank" rel="noopener noreferrer">
                      GitHub Repository
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/sentinelops" className="text-blue-600 hover:text-blue-800 flex items-center" target="_blank" rel="noopener noreferrer">
                      Discord Community
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/SentinelOpsAI" className="text-blue-600 hover:text-blue-800 flex items-center" target="_blank" rel="noopener noreferrer">
                      Twitter
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </li>
                </ul>
                
                <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Need help?</h3>
                  <p className="text-gray-600 mb-4">
                    Our team is available to assist you with implementation questions, troubleshooting, or anything else you need.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Contact Support
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