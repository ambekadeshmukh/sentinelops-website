import React from 'react';
import Layout from '../components/Layout';
import { 
  BarChart2, 
  Shield, 
  Zap, 
  AlertTriangle, 
  PieChart, 
  Code, 
  Clock, 
  ChartPie, 
  Database, 
  Activity,
  Terminal,
  ArrowRight
} from 'lucide-react';

const FeaturesPage = () => {
  try {
    return (
      <>
        {/* Loading state */}
        <div className="hidden">
          <div className="animate-pulse">
            <div className="bg-gray-200 rounded-lg p-6 max-w-7xl mx-auto">
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
            </div>
          </div>
        </div>
        
        <Layout title="SentinelOps Features - Comprehensive LLM Monitoring">
          {/* Hero Section */}
          <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Comprehensive LLM Monitoring Features
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  From performance metrics to hallucination detection, SentinelOps gives you complete visibility into your AI systems.
                </p>
              </div>
            </div>
          </section>

          {/* Feature Categories */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFDFD]">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Performance Monitoring */}
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="p-3 rounded-full inline-block mb-4 border-2 border-black doodle-box">
                    <Zap className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-black">Performance Monitoring</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive tracking of inference time, throughput, and resource utilization across all your LLM systems.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>End-to-end request latency tracking</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Memory usage and CPU/GPU utilization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Request volume and throughput metrics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Percentile-based performance analysis</span>
                    </li>
                  </ul>
                </div>

                {/* Quality Assurance */}
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="p-3 rounded-full inline-block mb-4 border-2 border-black doodle-box">
                    <Shield className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-black">Quality Assurance</h3>
                  <p className="text-gray-700 mb-4">
                    Advanced detection of hallucinations, inconsistencies, and model drift to ensure reliable AI outputs.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Automated hallucination detection</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Response quality assessment</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Model drift indicators and alerts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Consistency comparison over time</span>
                    </li>
                  </ul>
                </div>

                {/* Usage Analytics */}
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="p-3 rounded-full inline-block mb-4 border-2 border-black doodle-box">
                    <PieChart className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-black">Usage Analytics</h3>
                  <p className="text-gray-700 mb-4">
                    Track token usage, request volumes, and get actionable insights to optimize your LLM applications.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Token usage breakdown by request</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Real-time usage tracking by model</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Attribution by application/feature</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Smart optimization recommendations</span>
                    </li>
                  </ul>
                </div>

                {/* Anomaly Detection */}
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="p-3 rounded-full inline-block mb-4 border-2 border-black doodle-box">
                    <AlertTriangle className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-black">Anomaly Detection</h3>
                  <p className="text-gray-700 mb-4">
                    Catch issues before they impact users with intelligent anomaly detection and alerting.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Real-time detection of outlier behaviors</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>ML-based pattern recognition</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Customizable alerting thresholds</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Integration with PagerDuty, Slack, etc.</span>
                    </li>
                  </ul>
                </div>

                {/* Interactive Dashboards */}
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="p-3 rounded-full inline-block mb-4 border-2 border-black doodle-box">
                    <BarChart2 className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-black">Interactive Dashboards</h3>
                  <p className="text-gray-700 mb-4">
                    Beautiful, customizable dashboards that provide real-time insights into your AI operations.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Real-time data visualization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Historical trend analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Customizable metrics and charts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Role-based access control</span>
                    </li>
                  </ul>
                </div>

                {/* Easy Integration */}
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="p-3 rounded-full inline-block mb-4 border-2 border-black doodle-box">
                    <Code className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-black">Easy Integration</h3>
                  <p className="text-gray-700 mb-4">
                    Simple SDK for Python with minimal setup and support for all major LLM providers.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Simple Python SDK installation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Support for all major LLM providers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>Framework integrations (LangChain, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full border border-black w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">✓</div>
                      <span>API and batch processing support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Feature Showcase */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-black mb-4">
                  Deeper Insights, Better AI
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  SentinelOps provides the most comprehensive toolset for monitoring and optimizing your LLM systems.
                </p>
              </div>

              {/* Feature Detail 1 */}
              <div className="mb-20">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <div className="text-black font-semibold mb-2">Performance Monitoring</div>
                    <h3 className="text-3xl font-bold mb-4 text-black">Full Visibility Into LLM Performance</h3>
                    <p className="text-gray-700 mb-6">
                      Observe every aspect of your AI systems' performance with detailed metrics and analysis. From token processing speed to memory usage, SentinelOps gives you the data you need to optimize your models.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="border-2 border-black p-1 rounded-full mr-3 mt-1">
                          <Clock className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black">Response Time Tracking</h4>
                          <p className="text-gray-700">Monitor response times by model, endpoint, and application for full visibility into bottlenecks.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="border-2 border-black p-1 rounded-full mr-3 mt-1">
                          <ChartPie className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black">Throughput Analytics</h4>
                          <p className="text-gray-700">Track requests per minute, tokens processed, and concurrent request handling across your systems.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="border-2 border-black p-1 rounded-full mr-3 mt-1">
                          <Database className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black">Resource Utilization</h4>
                          <p className="text-gray-700">Monitor memory usage, CPU/GPU utilization, and other system resources to prevent bottlenecks.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src="/images/performance-dashboard-doodle.png" 
                      alt="Performance Dashboard" 
                      className="rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>

              {/* Feature Detail 2 */}
              <div className="mb-20">
                <div className="md:flex items-center flex-row-reverse">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                    <div className="text-black font-semibold mb-2">Quality Assurance</div>
                    <h3 className="text-3xl font-bold mb-4 text-black">Detect Hallucinations & Quality Issues</h3>
                    <p className="text-gray-700 mb-6">
                      SentinelOps uses advanced techniques to automatically detect hallucinations, inconsistencies, and other quality issues in LLM outputs, helping you deliver more reliable AI.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="border-2 border-black p-1 rounded-full mr-3 mt-1">
                          <Shield className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black">Hallucination Detection</h4>
                          <p className="text-gray-700">Automatically identify when your models generate factually incorrect or inconsistent information.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="border-2 border-black p-1 rounded-full mr-3 mt-1">
                          <Activity className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black">Output Consistency Tracking</h4>
                          <p className="text-gray-700">Monitor and compare responses over time to identify inconsistencies and variation in output quality.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="border-2 border-black p-1 rounded-full mr-3 mt-1">
                          <BarChart2 className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black">Quality Scoring</h4>
                          <p className="text-gray-700">Evaluate LLM outputs against multiple quality dimensions with our proprietary scoring system.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src="/images/quality-dashboard-doodle.png" 
                      alt="Quality Assurance Dashboard" 
                      className="rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>

              {/* Feature Detail 3 */}
              <div>
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <div className="text-black font-semibold mb-2">Usage Analytics</div>
                    <h3 className="text-3xl font-bold mb-4 text-black">Optimize Your LLM Usage</h3>
                    <p className="text-gray-700 mb-6">
                      Get complete visibility into your LLM usage with detailed breakdowns by model, application, and feature. Identify optimization opportunities to improve performance and efficiency.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="border-2 border-black p-1 rounded-full mr-3 mt-1">
                          <Terminal className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black">Token Usage Analytics</h4>
                          <p className="text-gray-700">Track prompt and completion token usage across all your models and applications.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="border-2 border-black p-1 rounded-full mr-3 mt-1">
                          <ChartPie className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black">Usage Attribution</h4>
                          <p className="text-gray-700">Attribute usage to specific applications, features, and user segments for better planning.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="border-2 border-black p-1 rounded-full mr-3 mt-1">
                          <Zap className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black">Optimization Recommendations</h4>
                          <p className="text-gray-700">Get actionable insights to improve efficiency through prompt engineering, caching, and model switching.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src="/images/usage-dashboard-doodle.png" 
                      alt="Usage Analytics Dashboard" 
                      className="rounded-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Open Source Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">100% Open Source</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
                SentinelOps is completely free and open source under the MIT license. Join our community of contributors and help shape the future of LLM monitoring.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="https://github.com/sentinelops/sentinelops" className="bg-white text-black hover:bg-gray-200 font-medium rounded-lg px-8 py-3 text-center inline-flex items-center justify-center">
                  View on GitHub
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a href="/docs/contributing" className="bg-gray-800 text-white hover:bg-gray-700 font-medium rounded-lg px-8 py-3 text-center">
                  Contribute
                </a>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  } catch (error) {
    console.error('Error in FeaturesPage:', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Error Loading Features</h2>
          <p className="text-gray-600">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }
};

export default FeaturesPage;