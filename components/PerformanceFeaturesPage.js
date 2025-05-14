import React from 'react';
import Layout from '../../components/Layout';
import { 
  Zap, 
  Clock, 
  ChartPie, 
  Gauge, 
  TrendingUp, 
  Activity, 
  BarChart2, 
  Target,
  CheckCircle,
  ArrowRight,
  Download,
  AlertTriangle
} from 'lucide-react';

const PerformanceFeaturesPage = () => {
  return (
    <Layout title="Performance Monitoring Features - SentinelOps">
      <div className="bg-[#FDFDFD]">
        {/* Hero Section */}
        <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-white/10 border border-white/20">
                  <Zap className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">
                Performance Monitoring
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get complete visibility into your LLM performance with real-time metrics, latency tracking, and throughput analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Key Metrics Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Essential Performance Metrics
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Track the metrics that matter most for your LLM applications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Clock className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Response Time</h3>
                <p className="text-gray-600 text-sm">
                  End-to-end latency from request to response completion
                </p>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Throughput</h3>
                <p className="text-gray-600 text-sm">
                  Requests per minute and tokens processed per second
                </p>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Activity className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Resource Usage</h3>
                <p className="text-gray-600 text-sm">
                  Memory consumption, CPU and GPU utilization tracking
                </p>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Target className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Success Rate</h3>
                <p className="text-gray-600 text-sm">
                  Request success rate and error pattern analysis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Feature 1: Real-time Latency Tracking */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white mr-4">
                    <Gauge className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">Real-time Latency Tracking</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Monitor response times with millisecond precision. Track P50, P95, and P99 percentiles to understand your application's latency distribution and identify bottlenecks.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">End-to-end request latency measurement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Inference time breakdown by model</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Network latency and processing time separation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Percentile-based performance analysis</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="/images/latency-tracking-dashboard.png" 
                  alt="Real-time Latency Tracking Dashboard" 
                  className="rounded-lg border border-gray-200 shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img 
                  src="/images/throughput-analytics.png" 
                  alt="Throughput Analytics Dashboard" 
                  className="rounded-lg border border-gray-200 shadow-md"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white mr-4">
                    <ChartPie className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">Throughput Analytics</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Understand your system's capacity with detailed throughput metrics. Track requests per minute, tokens processed, and concurrent request handling across different models and applications.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Requests per minute tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Token processing rate analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Concurrent request monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Peak usage pattern identification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white mr-4">
                    <BarChart2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">Resource Utilization</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Monitor system resources to optimize performance and costs. Track memory usage, CPU utilization, and GPU performance across your LLM infrastructure.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Memory usage per request</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">CPU/GPU utilization tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Resource bottleneck identification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Scaling recommendations</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="/images/resource-utilization.png" 
                  alt="Resource Utilization Monitoring" 
                  className="rounded-lg border border-gray-200 shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Performance Optimization Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Performance Optimization Features
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Not just monitoring - get actionable insights to improve your LLM performance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-black ml-3">Bottleneck Detection</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Automatically identify performance bottlenecks in your LLM pipeline with AI-powered analysis and actionable recommendations.
                </p>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-black ml-3">Optimization Suggestions</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Receive personalized optimization recommendations based on your usage patterns, including prompt engineering tips and model selection advice.
                </p>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <BarChart2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-black ml-3">Performance Benchmarking</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Compare your performance against industry benchmarks and track improvements over time with detailed performance scoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real-time Dashboards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Comprehensive Performance Dashboards
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Visualize your performance data with intuitive, customizable dashboards.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Real-time Overview</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Live performance metrics with instant updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Customizable alerts for performance thresholds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Historical trend analysis</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold text-black mb-4">Detailed Analytics</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Drill-down capabilities for detailed investigation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Multi-dimensional filtering and segmentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Exportable reports and visualizations</span>
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <img 
                  src="/images/performance-dashboard-overview.png" 
                  alt="Performance Dashboard Overview" 
                  className="rounded-lg border border-gray-200 shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Integration and Setup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Easy Integration
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Start monitoring performance in minutes with our simple SDK integration.
              </p>
            </div>
            
            <div className="bg-black rounded-lg p-8 text-white">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Quick Setup</h3>
                  <p className="text-gray-300 mb-6">
                    Add just a few lines of code to start monitoring your LLM performance. Our SDK automatically captures all the metrics you need.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Zero configuration required</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Minimal performance overhead (&lt;10ms)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Support for all major LLM providers</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="text-gray-400 text-sm mb-2">Python</div>
                  <pre className="text-green-400 text-sm">
{`from sentinelops import OpenAIMonitor

monitor = OpenAIMonitor(
    api_key="your-key",
    model="gpt-4",
    application_name="my-app"
)

# That's it! Performance monitoring is active`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your LLM Performance?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Get complete visibility into your LLM performance and start optimizing today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/docs/quick-start" className="bg-white text-black hover:bg-gray-200 font-medium rounded-lg px-8 py-3 text-center inline-flex items-center justify-center">
                Start Monitoring
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="/docs/examples" className="bg-gray-800 text-white hover:bg-gray-700 font-medium rounded-lg px-8 py-3 text-center">
                View Examples
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PerformanceFeaturesPage;