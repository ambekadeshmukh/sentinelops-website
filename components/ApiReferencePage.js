import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Clipboard, Check, ChevronRight, Book, Code, Server, Database, Bell, Activity } from 'lucide-react';

const ApiReferencePage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  return (
    <Layout title="SentinelOps API Reference">
      <div className="bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar Navigation */}
            <div className="lg:w-64 lg:pr-8 lg:border-r lg:border-gray-200 mb-8 lg:mb-0">
              <nav className="sticky top-20">
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Authentication</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#authentication" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        API Keys
                      </a>
                    </li>
                    <li>
                      <a href="#auth-token" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Bearer Token
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Endpoints</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#metrics" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Metrics
                      </a>
                    </li>
                    <li>
                      <a href="#requests" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Requests
                      </a>
                    </li>
                    <li>
                      <a href="#anomalies" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Anomalies
                      </a>
                    </li>
                    <li>
                      <a href="#alerts" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Alerts
                      </a>
                    </li>
                    <li>
                      <a href="#system" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        System
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Resources</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#examples" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Code Examples
                      </a>
                    </li>
                    <li>
                      <a href="#webhooks" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Webhooks
                      </a>
                    </li>
                    <li>
                      <a href="#errors" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Error Codes
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
                  <span className="text-sm text-gray-500">API</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">Reference</span>
                </div>
                
                <h1>API Reference</h1>
                
                <p className="lead">
                  The SentinelOps REST API allows you to programmatically access monitoring data, configure alerts, and integrate with other systems.
                </p>
                
                {/* Base URL */}
                <div className="not-prose bg-white rounded-lg p-4 border border-gray-200 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Server className="h-5 w-5 text-black" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-black">Base URL</h4>
                      <code className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded mt-1 inline-block">
                        https://your-sentinelops-deployment/api/v1
                      </code>
                    </div>
                  </div>
                </div>
                
                <h2 id="authentication">Authentication</h2>
                
                <p>
                  All API requests require authentication. SentinelOps supports two authentication methods:
                </p>
                
                <h3>API Key Authentication</h3>
                
                <p>
                  Include your API key in the <code>X-API-Key</code> header:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">HTTP Header</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard('X-API-Key: your-api-key-here', 1)}
                    >
                      {copiedIndex === 1 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">X-API-Key: your-api-key-here</pre>
                  </div>
                </div>
                
                <h3 id="auth-token">Bearer Token Authentication</h3>
                
                <p>
                  Include a JWT token in the <code>Authorization</code> header:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">HTTP Header</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard('Authorization: Bearer your-token-here', 2)}
                    >
                      {copiedIndex === 2 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">Authorization: Bearer your-token-here</pre>
                  </div>
                </div>
                
                <h3>Obtaining a Token</h3>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">POST /auth/token</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`curl -X POST https://your-sentinelops-deployment/api/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "your-username",
    "password": "your-password"
  }'`, 3)}
                    >
                      {copiedIndex === 3 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`curl -X POST https://your-sentinelops-deployment/api/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "your-username",
    "password": "your-password"
  }'`}</pre>
                  </div>
                </div>
                
                <h2>Response Format</h2>
                
                <p>
                  All API responses are in JSON format with a standard structure:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Success Response</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`{
  "status": "success",
  "data": {
    // Response data here
  },
  "message": null
}`, 4)}
                    >
                      {copiedIndex === 4 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`{
  "status": "success",
  "data": {
    // Response data here
  },
  "message": null
}`}</pre>
                  </div>
                </div>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Error Response</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`{
  "status": "error",
  "data": null,
  "message": "Error message describing what went wrong"
}`, 5)}
                    >
                      {copiedIndex === 5 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`{
  "status": "error",
  "data": null,
  "message": "Error message describing what went wrong"
}`}</pre>
                  </div>
                </div>
                
                <h2 id="metrics">Metrics Endpoints</h2>
                
                <h3>GET /metrics/summary</h3>
                
                <p>
                  Get a summary of key metrics for your LLM applications.
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">cURL Example</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`curl -X GET "https://your-api/api/v1/metrics/summary?start_time=2023-12-01T00:00:00Z&end_time=2023-12-31T23:59:59Z" \\
  -H "X-API-Key: your-api-key"`, 6)}
                    >
                      {copiedIndex === 6 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`curl -X GET "https://your-api/api/v1/metrics/summary?start_time=2023-12-01T00:00:00Z&end_time=2023-12-31T23:59:59Z" \\
  -H "X-API-Key: your-api-key"`}</pre>
                  </div>
                </div>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Response</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`{
  "status": "success",
  "data": {
    "request_count": 12500,
    "error_count": 45,
    "error_rate": 0.0036,
    "avg_latency_ms": 1250.5,
    "p95_latency_ms": 2345.7,
    "total_tokens": 1456789,
    "prompt_tokens": 345678,
    "completion_tokens": 1111111,
    "estimated_cost_usd": 125.45,
    "hallucination_rate": 0.023
  }
}`, 7)}
                    >
                      {copiedIndex === 7 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`{
  "status": "success",
  "data": {
    "request_count": 12500,
    "error_count": 45,
    "error_rate": 0.0036,
    "avg_latency_ms": 1250.5,
    "p95_latency_ms": 2345.7,
    "total_tokens": 1456789,
    "prompt_tokens": 345678,
    "completion_tokens": 1111111,
    "estimated_cost_usd": 125.45,
    "hallucination_rate": 0.023
  }
}`}</pre>
                  </div>
                </div>
                
                <h4>Query Parameters</h4>
                
                <table className="table-auto w-full text-sm border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Parameter</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><code>start_time</code></td>
                      <td className="border border-gray-300 px-4 py-2">string</td>
                      <td className="border border-gray-300 px-4 py-2">Start time (ISO 8601 format)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><code>end_time</code></td>
                      <td className="border border-gray-300 px-4 py-2">string</td>
                      <td className="border border-gray-300 px-4 py-2">End time (ISO 8601 format)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><code>provider</code></td>
                      <td className="border border-gray-300 px-4 py-2">string</td>
                      <td className="border border-gray-300 px-4 py-2">Filter by LLM provider</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><code>model</code></td>
                      <td className="border border-gray-300 px-4 py-2">string</td>
                      <td className="border border-gray-300 px-4 py-2">Filter by model name</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><code>application</code></td>
                      <td className="border border-gray-300 px-4 py-2">string</td>
                      <td className="border border-gray-300 px-4 py-2">Filter by application name</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><code>environment</code></td>
                      <td className="border border-gray-300 px-4 py-2">string</td>
                      <td className="border border-gray-300 px-4 py-2">Filter by environment</td>
                    </tr>
                  </tbody>
                </table>
                
                <h3>POST /metrics/query</h3>
                
                <p>
                  Query time-series metrics with custom filters.
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Request Body</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`{
  "metrics": ["request_count", "avg_latency_ms", "error_rate"],
  "filters": {
    "provider": "openai",
    "model": "gpt-4",
    "application": "support-bot",
    "environment": "production"
  },
  "time_range": {
    "start": "2023-12-01T00:00:00Z",
    "end": "2023-12-31T23:59:59Z",
    "interval": "1d"
  },
  "group_by": ["model", "application"]
}`, 8)}
                    >
                      {copiedIndex === 8 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`{
  "metrics": ["request_count", "avg_latency_ms", "error_rate"],
  "filters": {
    "provider": "openai",
    "model": "gpt-4",
    "application": "support-bot",
    "environment": "production"
  },
  "time_range": {
    "start": "2023-12-01T00:00:00Z",
    "end": "2023-12-31T23:59:59Z",
    "interval": "1d"
  },
  "group_by": ["model", "application"]
}`}</pre>
                  </div>
                </div>
                
                <h2 id="requests">Requests Endpoints</h2>
                
                <h3>GET /requests</h3>
                
                <p>
                  Get a list of recent requests with optional filtering.
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">cURL Example</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`curl -X GET "https://your-api/api/v1/requests?limit=50&provider=openai" \\
  -H "X-API-Key: your-api-key"`, 9)}
                    >
                      {copiedIndex === 9 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`curl -X GET "https://your-api/api/v1/requests?limit=50&provider=openai" \\
  -H "X-API-Key: your-api-key"`}</pre>
                  </div>
                </div>
                
                <h3>GET /requests/{request_id}</h3>
                
                <p>
                  Get detailed information for a specific request.
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">cURL Example</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`curl -X GET "https://your-api/api/v1/requests/r1-123e4567-e89b-12d3-a456-426614174000" \\
  -H "X-API-Key: your-api-key"`, 10)}
                    >
                      {copiedIndex === 10 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`curl -X GET "https://your-api/api/v1/requests/r1-123e4567-e89b-12d3-a456-426614174000" \\
  -H "X-API-Key: your-api-key"`}</pre>
                  </div>
                </div>
                
                <h2 id="anomalies">Anomalies Endpoints</h2>
                
                <h3>GET /anomalies</h3>
                
                <p>
                  Get detected anomalies with filtering options.
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">cURL Example</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`curl -X GET "https://your-api/api/v1/anomalies?severity=high&resolved=false" \\
  -H "X-API-Key: your-api-key"`, 11)}
                    >
                      {copiedIndex === 11 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`curl -X GET "https://your-api/api/v1/anomalies?severity=high&resolved=false" \\
  -H "X-API-Key: your-api-key"`}</pre>
                  </div>
                </div>
                
                <h3>POST /anomalies/{anomaly_id}/resolve</h3>
                
                <p>
                  Mark an anomaly as resolved.
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Request Body</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`{
  "resolution_note": "Fixed by restarting the API proxy server"
}`, 12)}
                    >
                      {copiedIndex === 12 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`{
  "resolution_note": "Fixed by restarting the API proxy server"
}`}</pre>
                  </div>
                </div>
                
                <h2 id="alerts">Alerts Endpoints</h2>
                
                <h3>GET /alerts/configs</h3>
                
                <p>
                  Get alert configurations.
                </p>
                
                <h3>POST /alerts/configs</h3>
                
                <p>
                  Create a new alert configuration.
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Request Body</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`{
  "name": "High Latency Alert",
  "description": "Alert when P95 latency exceeds threshold",
  "enabled": true,
  "alert_type": "performance",
  "severity": "high",
  "thresholds": [
    {
      "metric": "p95_latency_ms",
      "operator": ">",
      "value": 2000,
      "duration_minutes": 5
    }
  ],
  "filters": {
    "provider": "openai",
    "model": "gpt-4",
    "environment": "production"
  },
  "notify_emails": [
    "alerts@example.com"
  ]
}`, 13)}
                    >
                      {copiedIndex === 13 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`{
  "name": "High Latency Alert",
  "description": "Alert when P95 latency exceeds threshold",
  "enabled": true,
  "alert_type": "performance",
  "severity": "high",
  "thresholds": [
    {
      "metric": "p95_latency_ms",
      "operator": ">",
      "value": 2000,
      "duration_minutes": 5
    }
  ],
  "filters": {
    "provider": "openai",
    "model": "gpt-4",
    "environment": "production"
  },
  "notify_emails": [
    "alerts@example.com"
  ]
}`}</pre>
                  </div>
                </div>
                
                <h2 id="system">System Endpoints</h2>
                
                <h3>GET /system/health</h3>
                
                <p>
                  Check the health of the SentinelOps system.
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Response</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`{
  "status": "success",
  "data": {
    "version": "1.2.3",
    "components": {
      "api": {
        "status": "healthy",
        "version": "1.2.3"
      },
      "database": {
        "status": "healthy",
        "latency_ms": 5
      },
      "message_queue": {
        "status": "healthy",
        "pending_messages": 23
      },
      "time_series_db": {
        "status": "healthy",
        "latency_ms": 8
      }
    },
    "uptime_seconds": 345600
  }
}`, 14)}
                    >
                      {copiedIndex === 14 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`{
  "status": "success",
  "data": {
    "version": "1.2.3",
    "components": {
      "api": {
        "status": "healthy",
        "version": "1.2.3"
      },
      "database": {
        "status": "healthy",
        "latency_ms": 5
      },
      "message_queue": {
        "status": "healthy",
        "pending_messages": 23
      },
      "time_series_db": {
        "status": "healthy",
        "latency_ms": 8
      }
    },
    "uptime_seconds": 345600
  }
}`}</pre>
                  </div>
                </div>
                
                <h2 id="webhooks">Webhooks</h2>
                
                <p>
                  SentinelOps can send webhook notifications for various events. Configure webhooks through the API or dashboard.
                </p>
                
                <h3>Example Webhook Payload</h3>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Webhook Payload</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`{
  "event_type": "alert_triggered",
  "timestamp": "2023-12-15T14:00:00Z",
  "data": {
    "alert_id": "alert-123e4567-e89b-12d3-a456-426614174000",
    "alert_name": "High Latency Alert",
    "severity": "high",
    "metric_value": 2500,
    "threshold_value": 2000,
    "details": {
      "provider": "openai",
      "model": "gpt-4",
      "environment": "production"
    }
  }
}`, 15)}
                    >
                      {copiedIndex === 15 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`{
  "event_type": "alert_triggered",
  "timestamp": "2023-12-15T14:00:00Z",
  "data": {
    "alert_id": "alert-123e4567-e89b-12d3-a456-426614174000",
    "alert_name": "High Latency Alert",
    "severity": "high",
    "metric_value": 2500,
    "threshold_value": 2000,
    "details": {
      "provider": "openai",
      "model": "gpt-4",
      "environment": "production"
    }
  }
}`}</pre>
                  </div>
                </div>
                
                <h2 id="errors">Error Codes</h2>
                
                <p>
                  SentinelOps API uses standard HTTP status codes:
                </p>
                
                <table className="table-auto w-full text-sm border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Status Code</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><code>200 OK</code></td>
                      <td className="border border-gray-300 px-4 py-2">Request succeeded</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><code>400 Bad Request</code></td>
                      <td className="border border-gray-300 px-4 py-2">Invalid request parameters</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><code>401 Unauthorized</code></td>
                      <td className="border border-gray-300 px-4 py-2">Authentication failed</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><code>403 Forbidden</code></td>
                      <td className="border border-gray-300 px-4 py-2">Permission denied</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><code>404 Not Found</code></td>
                      <td className="border border-gray-300 px-4 py-2">Resource not found</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><code>429 Too Many Requests</code></td>
                      <td className="border border-gray-300 px-4 py-2">Rate limit exceeded</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><code>500 Internal Server Error</code></td>
                      <td className="border border-gray-300 px-4 py-2">Server error</td>
                    </tr>
                  </tbody>
                </table>
                
                <h2 id="examples">Code Examples</h2>
                
                <h3>Python</h3>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Python Example</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`import requests

# Get metrics summary
response = requests.get(
    "https://your-api/api/v1/metrics/summary",
    headers={"X-API-Key": "your-api-key"},
    params={
        "start_time": "2023-12-01T00:00:00Z",
        "end_time": "2023-12-31T23:59:59Z",
        "provider": "openai"
    }
)

if response.status_code == 200:
    data = response.json()
    print(f"Total requests: {data['data']['request_count']}")
    print(f"Error rate: {data['data']['error_rate']:.2%}")
else:
    print(f"Error: {response.status_code} - {response.text}")`, 16)}
                    >
                      {copiedIndex === 16 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`import requests

# Get metrics summary
response = requests.get(
    "https://your-api/api/v1/metrics/summary",
    headers={"X-API-Key": "your-api-key"},
    params={
        "start_time": "2023-12-01T00:00:00Z",
        "end_time": "2023-12-31T23:59:59Z",
        "provider": "openai"
    }
)

if response.status_code == 200:
    data = response.json()
    print(f"Total requests: {data['data']['request_count']}")
    print(f"Error rate: {data['data']['error_rate']:.2%}")
else:
    print(f"Error: {response.status_code} - {response.text}")`}</pre>
                  </div>
                </div>
                
                <h3>JavaScript</h3>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">JavaScript Example</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`// Create alert configuration
const alertConfig = {
  name: "Cost Spike Alert",
  description: "Alert when hourly cost exceeds threshold",
  enabled: true,
  alert_type: "cost",
  severity: "medium",
  thresholds: [{
    metric: "hourly_cost_usd",
    operator: ">",
    value: 50,
    duration_minutes: 10
  }],
  filters: {
    environment: "production"
  },
  notify_emails: ["alerts@example.com"]
};

fetch("https://your-api/api/v1/alerts/configs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": "your-api-key"
  },
  body: JSON.stringify(alertConfig)
})
.then(response => response.json())
.then(data => {
  if (data.status === "success") {
    console.log("Alert created:", data.data.id);
  } else {
    console.error("Error:", data.message);
  }
});`, 17)}
                    >
                      {copiedIndex === 17 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`// Create alert configuration
const alertConfig = {
  name: "Cost Spike Alert",
  description: "Alert when hourly cost exceeds threshold",
  enabled: true,
  alert_type: "cost",
  severity: "medium",
  thresholds: [{
    metric: "hourly_cost_usd",
    operator: ">",
    value: 50,
    duration_minutes: 10
  }],
  filters: {
    environment: "production"
  },
  notify_emails: ["alerts@example.com"]
};

fetch("https://your-api/api/v1/alerts/configs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": "your-api-key"
  },
  body: JSON.stringify(alertConfig)
})
.then(response => response.json())
.then(data => {
  if (data.status === "success") {
    console.log("Alert created:", data.data.id);
  } else {
    console.error("Error:", data.message);
  }
});`}</pre>
                  </div>
                </div>
                
                <h2>Rate Limiting</h2>
                
                <p>
                  API requests are subject to rate limiting:
                </p>
                
                <ul>
                  <li>100 requests per minute per API key</li>
                  <li>1000 requests per hour per API key</li>
                </ul>
                
                <p>
                  Rate limit information is included in response headers:
                </p>
                
                <ul>
                  <li><code>X-Rate-Limit-Limit</code>: Total requests allowed in the period</li>
                  <li><code>X-Rate-Limit-Remaining</code>: Remaining requests in the current period</li>
                  <li><code>X-Rate-Limit-Reset</code>: Time in seconds until the limit resets</li>
                </ul>
                
                <div className="mt-12 p-6 bg-white rounded-lg border-2 border-black">
                  <h3 className="text-lg font-semibold text-black mb-3">Need More Information?</h3>
                  <p className="text-gray-700 mb-4">
                    Explore our SDK documentation for programmatic access or check out our examples repository.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <a
                      href="/docs/sdk-usage"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800"
                    >
                      SDK Documentation
                    </a>
                    <a
                      href="/docs/examples"
                      className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100"
                    >
                      View Examples
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApiReferencePage;