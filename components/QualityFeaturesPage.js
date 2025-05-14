import React from 'react';
import Layout from '../../components/Layout';
import { 
  Shield, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  Brain,
  Search,
  BarChart2,
  TrendingUp,
  ArrowRight,
  Target,
  Star,
  FileSearch
} from 'lucide-react';

const QualityFeaturesPage = () => {
  return (
    <Layout title="Quality Assurance Features - SentinelOps">
      <div className="bg-[#FDFDFD]">
        {/* Hero Section */}
        <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-white/10 border border-white/20">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">
                Quality Assurance
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ensure the reliability and accuracy of your LLM outputs with advanced quality monitoring, hallucination detection, and content verification.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Comprehensive Quality Monitoring
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Detect and prevent quality issues before they impact your users.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Brain className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Hallucination Detection</h3>
                <p className="text-gray-600 text-sm">
                  Automatically identify when models generate inaccurate or fabricated information
                </p>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <FileSearch className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Content Verification</h3>
                <p className="text-gray-600 text-sm">
                  Verify factual accuracy against reliable sources and knowledge bases
                </p>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <BarChart2 className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Quality Scoring</h3>
                <p className="text-gray-600 text-sm">
                  Multi-dimensional quality assessment with automated scoring
                </p>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Drift Detection</h3>
                <p className="text-gray-600 text-sm">
                  Monitor quality degradation and model drift over time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Feature 1: Hallucination Detection */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white mr-4">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">Advanced Hallucination Detection</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Protect your applications from AI hallucinations with our multi-layered detection system. We use semantic analysis, factual verification, and consistency checking to identify potentially false information.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Real-time hallucination detection during inference</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Semantic consistency analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Factual verification against knowledge sources</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Confidence scoring for each response</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="/images/hallucination-detection-dashboard.png" 
                  alt="Hallucination Detection Dashboard" 
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
                  src="/images/quality-scoring-system.png" 
                  alt="Quality Scoring System" 
                  className="rounded-lg border border-gray-200 shadow-md"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white mr-4">
                    <Star className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">Multi-Dimensional Quality Scoring</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Evaluate LLM outputs across multiple quality dimensions including relevance, coherence, factual accuracy, and helpfulness. Our proprietary scoring system provides comprehensive quality assessment.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Relevance to user query</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Content coherence and readability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Factual accuracy verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Completeness and helpfulness</span>
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
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">Model Drift Detection</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Monitor your model's performance over time to detect degradation or drift. Get early warnings when quality metrics decline so you can take corrective action before users are affected.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Statistical drift detection algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Quality baseline establishment and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Automated alerts for quality degradation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Historical trend analysis</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="/images/model-drift-monitoring.png" 
                  alt="Model Drift Detection" 
                  className="rounded-lg border border-gray-200 shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quality Analysis Tools */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Advanced Quality Analysis Tools
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Deep dive into quality issues with powerful analysis and debugging tools.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-black ml-3">Response Explorer</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Search and analyze specific responses that triggered quality alerts. Understand patterns and root causes of quality issues.
                </p>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-black ml-3">Context Analysis</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Analyze how context affects response quality. Identify prompts and contexts that lead to higher quality outputs.
                </p>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <BarChart2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-black ml-3">Quality Benchmarking</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Compare quality metrics across different models, prompts, and time periods to identify best practices and improvements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Alerts and Monitoring */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Proactive Quality Monitoring
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Stay ahead of quality issues with intelligent alerts and continuous monitoring.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Smart Alerting</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Customizable quality thresholds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Multi-channel notifications (email, Slack, PagerDuty)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Smart alert aggregation to reduce noise</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold text-black mb-4">Continuous Monitoring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">24/7 quality monitoring across all models</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Automated quality reports and summaries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Historical quality trend analysis</span>
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <img 
                  src="/images/quality-alerts-dashboard.png" 
                  alt="Quality Alerts Dashboard" 
                  className="rounded-lg border border-gray-200 shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quality Improvement Recommendations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                AI-Powered Quality Improvement
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Get actionable recommendations to improve your LLM output quality.
              </p>
            </div>
            
            <div className="bg-black rounded-lg p-8 text-white">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Intelligent Recommendations</h3>
                  <p className="text-gray-300 mb-6">
                    Our AI analyzes your quality patterns and provides specific, actionable recommendations to improve output quality.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Prompt engineering suggestions</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Model selection optimization</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Context optimization recommendations</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Quality threshold fine-tuning</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="text-gray-400 text-sm mb-2">Quality Recommendation</div>
                  <div className="text-green-400 text-sm">
                    <div className="mb-2">
                      <span className="text-yellow-400">⚠️</span> <strong>Hallucination Rate: 12%</strong>
                    </div>
                    <div className="text-gray-300 text-xs">
                      Recommendation: Add factual grounding to your prompts.<br/>
                      Suggested prompt modification:<br/>
                      <span className="text-blue-400">"Base your response only on the provided context..."</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Seamless Quality Integration
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Deploy quality monitoring with minimal changes to your existing LLM workflows.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-4">Easy Setup</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Single SDK for all quality features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Automatic quality scoring activation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Configurable quality thresholds</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-4">Enterprise Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Custom quality models for your domain</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Integration with existing QA workflows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Advanced analytics and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ensure High-Quality LLM Outputs</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Protect your applications from hallucinations and quality issues with comprehensive quality monitoring.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/docs/quick-start" className="bg-white text-black hover:bg-gray-200 font-medium rounded-lg px-8 py-3 text-center inline-flex items-center justify-center">
                Start Quality Monitoring
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

export default QualityFeaturesPage;