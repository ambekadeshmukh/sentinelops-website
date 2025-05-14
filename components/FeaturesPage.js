import React from 'react';
import Layout from './Layout';
import { 
  BarChart2, 
  Shield, 
  Zap, 
  AlertTriangle, 
  PieChart, 
  Code, 
  Clock, 
  Activity,
  Database,
  Eye,
  Terminal,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  Search,
  Bell
} from 'lucide-react';

const FeaturesPage = () => {
  return (
    <Layout title="SentinelOps Features - Comprehensive LLM Monitoring">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Complete LLM <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Observability</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From performance metrics to hallucination detection, SentinelOps gives you complete visibility into your AI systems with powerful monitoring capabilities.
            </p>
            <div className="flex justify-center">
              <a href="#core-features" className="inline-flex items-center bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 font-medium rounded-lg px-6 py-3 transition-all duration-200">
                Explore Features
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section id="core-features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Core Monitoring Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to monitor, analyze, and optimize your LLM applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Performance Monitoring */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 group">
              <div className="p-3 rounded-lg inline-block mb-4 bg-blue-100 group-hover:bg-blue-200 transition-colors">
                <Zap className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Performance Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive tracking of inference time, throughput, and resource utilization across all your LLM systems.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>End-to-end request latency tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Memory and CPU/GPU utilization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Request volume and throughput metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Percentile-based performance analysis</span>
                </li>
              </ul>
            </div>

            {/* Quality Assurance */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 group">
              <div className="p-3 rounded-lg inline-block mb-4 bg-purple-100 group-hover:bg-purple-200 transition-colors">
                <Shield className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Quality Assurance</h3>
              <p className="text-gray-600 mb-4">
                Advanced detection of hallucinations, inconsistencies, and model drift to ensure reliable AI outputs.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Automated hallucination detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Response quality assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Model drift indicators and alerts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Consistency comparison over time</span>
                </li>
              </ul>
            </div>

            {/* Cost Analytics */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 group">
              <div className="p-3 rounded-lg inline-block mb-4 bg-green-100 group-hover:bg-green-200 transition-colors">
                <PieChart className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Cost Analytics</h3>
              <p className="text-gray-600 mb-4">
                Track token usage, request volumes, and get actionable insights to optimize your LLM applications.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Token usage breakdown by request</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Real-time cost tracking by model</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Attribution by application/feature</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Smart optimization recommendations</span>
                </li>
              </ul>
            </div>

            {/* Anomaly Detection */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 group">
              <div className="p-3 rounded-lg inline-block mb-4 bg-red-100 group-hover:bg-red-200 transition-colors">
                <AlertTriangle className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Anomaly Detection</h3>
              <p className="text-gray-600 mb-4">
                Catch issues before they impact users with intelligent anomaly detection and alerting.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Real-time detection of outlier behaviors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>ML-based pattern recognition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Customizable alerting thresholds</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Integration with PagerDuty, Slack, etc.</span>
                </li>
              </ul>
            </div>

            {/* Interactive Dashboards */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 group">
              <div className="p-3 rounded-lg inline-block mb-4 bg-orange-100 group-hover:bg-orange-200 transition-colors">
                <BarChart2 className="w-8 h-8 text-orange-700" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Interactive Dashboards</h3>
              <p className="text-gray-600 mb-4">
                Beautiful, customizable dashboards that provide real-time insights into your AI operations.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Real-time data visualization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Historical trend analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Customizable metrics and charts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Role-based access control</span>
                </li>
              </ul>
            </div>

            {/* Easy Integration */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 group">
              <div className="p-3 rounded-lg inline-block mb-4 bg-indigo-100 group-hover:bg-indigo-200 transition-colors">
                <Code className="w-8 h-8 text-indigo-700" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Easy Integration</h3>
              <p className="text-gray-600 mb-4">
                Simple SDK for Python with minimal setup and support for all major LLM providers.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>One-line Python integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Support for all major providers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Framework integrations (LangChain, etc.)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Minimal performance overhead (&lt;10ms)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Feature Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Deeper Insights, Better AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SentinelOps provides advanced capabilities to help you understand and optimize your LLM systems
            </p>
          </div>

          {/* Performance Deep Dive */}
          <div className="mb-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mb-8 lg:mb-0">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-blue-100 mr-4">
                    <Clock className="w-8 h-8 text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Full Performance Visibility</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Observe every aspect of your AI systems' performance with detailed metrics and analysis. From token processing speed to memory usage, SentinelOps gives you the data you need to optimize your models.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-blue-100 mr-3 mt-1">
                      <Clock className="w-4 h-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Response Time Tracking</h4>
                      <p className="text-gray-600">Monitor response times by model, endpoint, and application for full visibility into bottlenecks.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-blue-100 mr-3 mt-1">
                      <TrendingUp className="w-4 h-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Throughput Analytics</h4>
                      <p className="text-gray-600">Track requests per minute, tokens processed, and concurrent request handling across your systems.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-blue-100 mr-3 mt-1">
                      <Database className="w-4 h-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Resource Utilization</h4>
                      <p className="text-gray-600">Monitor memory usage, CPU/GPU utilization, and other system resources to prevent bottlenecks.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <div className="text-sm text-gray-500 mb-4">Performance Dashboard Preview</div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Avg Response Time</span>
                    <span className="text-xl font-bold text-blue-700">142ms</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Throughput</span>
                    <span className="text-xl font-bold text-green-700">1.2k/min</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">P95 Latency</span>
                    <span className="text-xl font-bold text-purple-700">290ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Assurance Deep Dive */}
          <div className="mb-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <div className="text-sm text-gray-500 mb-4">Quality Analysis</div>
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Hallucination Rate</span>
                      <span className="text-xl font-bold text-red-700">2.1%</span>
                    </div>
                    <div className="text-xs text-red-600 mt-1">↓ 1.2% from last week</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Quality Score</span>
                      <span className="text-xl font-bold text-green-700">9.2/10</span>
                    </div>
                    <div className="text-xs text-green-600 mt-1">↑ 0.3 improvement</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Consistency Rate</span>
                      <span className="text-xl font-bold text-blue-700">94.8%</span>
                    </div>
                    <div className="text-xs text-blue-600 mt-1">Stable</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-purple-100 mr-4">
                    <Shield className="w-8 h-8 text-purple-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Quality & Hallucination Detection</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  SentinelOps uses advanced techniques to automatically detect hallucinations, inconsistencies, and other quality issues in LLM outputs, helping you deliver more reliable AI.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-purple-100 mr-3 mt-1">
                      <Shield className="w-4 h-4 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Hallucination Detection</h4>
                      <p className="text-gray-600">Automatically identify when your models generate factually incorrect or inconsistent information.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-purple-100 mr-3 mt-1">
                      <Activity className="w-4 h-4 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Output Consistency Tracking</h4>
                      <p className="text-gray-600">Monitor and compare responses over time to identify inconsistencies and variation in output quality.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-purple-100 mr-3 mt-1">
                      <BarChart2 className="w-4 h-4 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Scoring</h4>
                      <p className="text-gray-600">Evaluate LLM outputs against multiple quality dimensions with our proprietary scoring system.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cost Optimization */}
          <div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mb-8 lg:mb-0">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-green-100 mr-4">
                    <PieChart className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Cost Optimization</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Get complete visibility into your LLM usage with detailed breakdowns by model, application, and feature. Identify optimization opportunities to improve performance and efficiency.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-green-100 mr-3 mt-1">
                      <Terminal className="w-4 h-4 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Token Usage Analytics</h4>
                      <p className="text-gray-600">Track prompt and completion token usage across all your models and applications.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-green-100 mr-3 mt-1">
                      <Target className="w-4 h-4 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Usage Attribution</h4>
                      <p className="text-gray-600">Attribute usage to specific applications, features, and user segments for better planning.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-green-100 mr-3 mt-1">
                      <Zap className="w-4 h-4 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Optimization Recommendations</h4>
                      <p className="text-gray-600">Get actionable insights to improve efficiency through prompt engineering, caching, and model switching.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <div className="text-sm text-gray-500 mb-4">Cost Breakdown</div>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Monthly Spend</span>
                      <span className="text-xl font-bold text-green-700">$1,247</span>
                    </div>
                    <div className="text-xs text-green-600 mt-1">↓ 28% from last month</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Top Model: GPT-4</span>
                    <div className="text-xl font-bold text-blue-700">$642 (51%)</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">Optimization Potential</span>
                    <div className="text-xl font-bold text-purple-700">$312/mo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Analytics Tools */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Analytics Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep dive into your LLM usage with powerful analysis and debugging tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Search className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 ml-3">Request Explorer</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Search and analyze specific requests that triggered alerts. Understand patterns and root causes of issues with full context.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-purple-100">
                  <Target className="w-6 h-6 text-purple-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 ml-3">Context Analysis</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Analyze how context affects response quality. Identify prompts and contexts that lead to higher quality outputs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-green-100">
                  <BarChart2 className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 ml-3">Quality Benchmarking</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Compare quality metrics across different models, prompts, and time periods to identify best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Seamless Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deploy SentinelOps with minimal changes to your existing LLM workflows
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Setup</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Single line SDK integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Automatic quality scoring activation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Configurable monitoring thresholds</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Zero downtime deployment</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Ready</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Support for all major LLM providers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Framework integrations (LangChain, LlamaIndex)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Self-hosted deployment options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Advanced security and compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to start monitoring?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Get complete visibility into your LLM applications with SentinelOps. Deploy in minutes and start optimizing today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/docs/quick-start" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 font-medium rounded-lg px-8 py-3 text-center transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="/docs/examples" 
              className="inline-flex items-center justify-center bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium rounded-lg px-8 py-3 text-center transition-all duration-200"
            >
              <Eye className="mr-2 w-4 h-4" />
              View Examples
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeaturesPage;