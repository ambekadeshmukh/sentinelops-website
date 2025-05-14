import React from 'react';
import Layout from '../../../components/Layout';
import { Zap, CheckCircle, ArrowRight, Clock, Activity, BarChart2 } from 'lucide-react';

const PerformanceFeatures = () => {
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
                    <BarChart2 className="w-8 h-8" />
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
                    <CheckCircle className="w-8 h-8" />
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

        {/* Features Detail */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Real-time Latency Tracking</h3>
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

export default PerformanceFeatures;