import React from 'react';
import Layout from '../../components/Layout';
import { 
  Code, 
  Zap, 
  CheckCircle, 
  Puzzle,
  Cloud,
  Cog,
  ArrowRight,
  Link,
  GitBranch,
  Database,
  Layers,
  Globe
} from 'lucide-react';

const IntegrationsFeaturesPage = () => {
  return (
    <Layout title="Integration Features - SentinelOps">
      <div className="bg-[#FDFDFD]">
        {/* Hero Section */}
        <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-white/10 border border-white/20">
                  <Puzzle className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">
                Seamless Integrations
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect SentinelOps with your entire LLM stack. Support for all major providers, frameworks, and infrastructure tools.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Complete Integration Ecosystem
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Monitor and optimize across your entire AI/LLM workflow.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Globe className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">LLM Providers</h3>
                <p className="text-gray-600 text-sm">
                  OpenAI, Anthropic, HuggingFace, AWS Bedrock, Azure OpenAI, and more
                </p>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Layers className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">AI Frameworks</h3>
                <p className="text-gray-600 text-sm">
                  LangChain, LlamaIndex, Haystack, Semantic Kernel, and custom frameworks
                </p>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Cloud className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Cloud Platforms</h3>
                <p className="text-gray-600 text-sm">
                  AWS, Azure, GCP, Kubernetes, Docker, and serverless deployments
                </p>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Database className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Data & Tools</h3>
                <p className="text-gray-600 text-sm">
                  Vector databases, monitoring tools, alert systems, and analytics platforms
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LLM Provider Integrations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                LLM Provider Integrations
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Unified monitoring across all major LLM providers with provider-specific optimizations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <img src="/images/providers/openai-logo.png" alt="OpenAI" className="h-8 w-8 mr-3" />
                  <h3 className="text-lg font-semibold text-black">OpenAI</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• GPT-4, GPT-3.5 Turbo, GPT-4 Turbo</li>
                  <li>• Chat completions and text completions</li>
                  <li>• Embeddings API support</li>
                  <li>• Function calling monitoring</li>
                  <li>• Fine-tuned models support</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <img src="/images/providers/anthropic-logo.png" alt="Anthropic" className="h-8 w-8 mr-3" />
                  <h3 className="text-lg font-semibold text-black">Anthropic</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Claude 3 (Opus, Sonnet, Haiku)</li>
                  <li>• Claude 2 and Claude Instant</li>
                  <li>• Messages API integration</li>
                  <li>• Complex reasoning monitoring</li>
                  <li>• Constitutional AI tracking</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <img src="/images/providers/aws-logo.png" alt="AWS Bedrock" className="h-8 w-8 mr-3" />
                  <h3 className="text-lg font-semibold text-black">AWS Bedrock</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Amazon Titan models</li>
                  <li>• Anthropic Claude on Bedrock</li>
                  <li>• AI21 Jurassic models</li>
                  <li>• Cohere Command and Embed</li>
                  <li>• Custom model endpoints</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <img src="/images/providers/azure-logo.png" alt="Azure OpenAI" className="h-8 w-8 mr-3" />
                  <h3 className="text-lg font-semibold text-black">Azure OpenAI</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• GPT models on Azure</li>
                  <li>• Custom deployment monitoring</li>
                  <li>• Azure-specific metrics</li>
                  <li>• Regional deployment tracking</li>
                  <li>• Enterprise security compliance</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <img src="/images/providers/huggingface-logo.png" alt="HuggingFace" className="h-8 w-8 mr-3" />
                  <h3 className="text-lg font-semibold text-black">HuggingFace</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Inference API monitoring</li>
                  <li>• Custom model deployments</li>
                  <li>• Transformer models tracking</li>
                  <li>• Spaces application monitoring</li>
                  <li>• AutoTrain integration</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <img src="/images/providers/google-logo.png" alt="Google Vertex AI" className="h-8 w-8 mr-3" />
                  <h3 className="text-lg font-semibold text-black">Google Vertex AI</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Gemini Pro and Ultra models</li>
                  <li>• PaLM API integration</li>
                  <li>• Custom model endpoints</li>
                  <li>• Multi-modal model support</li>
                  <li>• Enterprise AI features</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Framework Integrations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white mr-4">
                    <GitBranch className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">AI Framework Integration</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Seamlessly integrate with popular AI frameworks to monitor complex workflows, chains, and agents. Get deep insights into multi-step LLM processes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">LangChain chains and agents monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">LlamaIndex query engine tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Haystack pipeline monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Semantic Kernel plan execution</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="text-gray-400 text-sm mb-2">LangChain Integration</div>
                <pre className="text-gray-100 text-sm">
{`from sentinelops.integrations.langchain import MonitoredChatModel
from langchain.chat_models import ChatOpenAI

# Wrap your LangChain model
chat_model = MonitoredChatModel(
    chat_model=ChatOpenAI(),
    monitor=sentinelops_monitor
)

# Use in chains as normal
chain = LLMChain(llm=chat_model, prompt=prompt)
result = chain.run(input_text)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Integrations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="text-gray-400 text-sm mb-2">Kubernetes Deployment</div>
                  <pre className="text-gray-100 text-sm">
{`# Install via Helm
helm repo add sentinelops https://charts.sentinelops.io
helm install sentinelops sentinelops/sentinelops

# Or use our operator
kubectl apply -f sentinelops-operator.yaml`}
                  </pre>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white mr-4">
                    <Cloud className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">Infrastructure Integration</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Deploy SentinelOps on any infrastructure. Native support for cloud platforms, container orchestration, and serverless environments.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Kubernetes operator and Helm charts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Docker Compose for development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">AWS, Azure, GCP native deployments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Serverless and edge computing support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Monitoring and Alerting Integrations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Monitoring Ecosystem Integration
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Integrate with your existing monitoring stack for unified observability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Link className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-black ml-3">Prometheus Integration</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Export SentinelOps metrics to Prometheus for unified monitoring and alerting.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Native Prometheus exporter</li>
                  <li>• Custom metric labels</li>
                  <li>• Federation support</li>
                </ul>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Cog className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-black ml-3">Grafana Dashboards</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Pre-built Grafana dashboards and data source plugins for visualization.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Ready-to-use dashboards</li>
                  <li>• Custom panel plugins</li>
                  <li>• Templated queries</li>
                </ul>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-black ml-3">Alert Management</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Connect to PagerDuty, Slack, email, and custom webhooks for alerting.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Multi-channel alerts</li>
                  <li>• Alert aggregation</li>
                  <li>• Custom webhook support</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-black ml-3">Data Export</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Export data to data warehouses, lakes, and analytics platforms.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• BigQuery, Snowflake, Redshift</li>
                  <li>• S3, GCS export</li>
                  <li>• Real-time streaming</li>
                </ul>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-black ml-3">OpenTelemetry</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Native OpenTelemetry support for traces, metrics, and logs.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• OTLP protocol support</li>
                  <li>• Distributed tracing</li>
                  <li>• Semantic conventions</li>
                </ul>
              </div>
              
              <div className="bg-[#FDFDFD] p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-black text-white">
                    <Link className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-black ml-3">API Integration</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  RESTful APIs for custom integrations and third-party tools.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• REST and GraphQL APIs</li>
                  <li>• Webhooks and callbacks</li>
                  <li>• SDK for custom integrations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Development Tools Integration */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Development Workflow Integration
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Integrate monitoring into your development and deployment workflows.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-4">CI/CD Integration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">GitHub Actions and GitLab CI integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Automated performance regression detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Quality gates for deployments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Automated testing with monitoring</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-4">IDE and Development</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">VS Code extension for monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Jupyter notebook integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Local development monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Command-line tools and scripts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Integration Support */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Custom Integration Support
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Build custom integrations for your specific needs with our extensible architecture.
              </p>
            </div>
            
            <div className="bg-black rounded-lg p-8 text-white">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Extensible Architecture</h3>
                  <p className="text-gray-300 mb-6">
                    SentinelOps is built with extensibility in mind. Create custom providers, processors, and exporters to fit your unique requirements.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Plugin architecture for custom providers</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Custom metric processors</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Webhook and event system</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>SDK for building integrations</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="text-gray-400 text-sm mb-2">Custom Provider Example</div>
                  <pre className="text-gray-100 text-sm">
{`from sentinelops.base import BaseProvider

class CustomLLMProvider(BaseProvider):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        
    async def chat_completion(self, **kwargs):
        # Custom implementation
        response = await self.api_call(**kwargs)
        return self.format_response(response)
        
    def extract_metrics(self, response):
        # Extract custom metrics
        return {
            "custom_metric": response.get("value"),
            "tokens": response.get("token_count")
        }`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started with Integrations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Get Started with Integrations
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Choose your integration approach and start monitoring in minutes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-black text-white">
                    <Zap className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-4">Quick Start</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Get up and running with our most popular integrations in under 5 minutes.
                </p>
                <a 
                  href="/docs/quick-start" 
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800"
                >
                  Start Now
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-black text-white">
                    <Code className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-4">View Examples</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Browse our collection of integration examples and code samples.
                </p>
                <a 
                  href="/docs/examples" 
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100"
                >
                  Browse Examples
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-black text-white">
                    <Puzzle className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-4">Custom Integration</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Need a custom integration? Contact us for enterprise support and consulting.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Integrate SentinelOps?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Start monitoring your LLM applications with seamless integrations across your entire stack.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/docs/quick-start" className="bg-white text-black hover:bg-gray-200 font-medium rounded-lg px-8 py-3 text-center inline-flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="/docs/integrations" className="bg-gray-800 text-white hover:bg-gray-700 font-medium rounded-lg px-8 py-3 text-center">
                View All Integrations
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IntegrationsFeaturesPage;