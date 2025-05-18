import React, { useState } from 'react';
import Layout from './Layout';
import { Clipboard, Check, ArrowRight } from 'lucide-react';

const LLMProviderExamples = () => {
  const [activeTab, setActiveTab] = useState('openai');
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const providers = [
    {
      id: 'openai',
      name: 'OpenAI',
      description: 'Drop-in replacement for the OpenAI client with automatic monitoring.',
      code: `# Install SentinelOps with OpenAI support
pip install "sentinelops[openai]"

# Import the OpenAI monitor
from sentinelops import OpenAIMonitor

# Initialize the monitor (replaces standard OpenAI client)
monitor = OpenAIMonitor(
    api_key="your-openai-api-key",  # Or use os.environ.get("OPENAI_API_KEY")
    application_name="my-app"
)

# Make API calls as usual - monitoring happens automatically
response = monitor.chat_completion(
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What are the key benefits of LLM monitoring?"}
    ]
)

print(response.choices[0].message.content)
`
    },
    {
      id: 'anthropic',
      name: 'Anthropic',
      description: 'Seamless monitoring for Claude and other Anthropic models.',
      code: `# Install SentinelOps with Anthropic support
pip install "sentinelops[anthropic]"

# Import the Anthropic monitor
from sentinelops import AnthropicMonitor

# Initialize the monitor
monitor = AnthropicMonitor(
    api_key="your-anthropic-api-key",
    application_name="my-app"
)

# Make Claude API calls with monitoring
response = monitor.completion(
    prompt="\\n\\nHuman: What are the key benefits of LLM monitoring?\\n\\nAssistant:",
    max_tokens_to_sample=300
)

print(response.completion)
`
    },
    {
      id: 'bedrock',
      name: 'AWS Bedrock',
      description: 'Monitor any model available through AWS Bedrock.',
      code: `# Install SentinelOps with AWS support
pip install "sentinelops[aws]"

# Import the Bedrock monitor
from sentinelops import BedrockMonitor
import boto3

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
        "prompt": "\\n\\nHuman: What are the key benefits of LLM monitoring?\\n\\nAssistant:",
        "max_tokens_to_sample": 300
    })
)

print(json.loads(response["body"].read())["completion"])
`
    },
    {
      id: 'huggingface',
      name: 'HuggingFace',
      description: 'Monitor models from HuggingFace Hub or your own hosted models.',
      code: `# Install SentinelOps with HuggingFace support
pip install "sentinelops[huggingface]"

# Import the HuggingFace monitor
from sentinelops import HuggingFaceMonitor

# Initialize the monitor
monitor = HuggingFaceMonitor(
    api_key="your-huggingface-api-key",
    application_name="my-app"
)

# Make API calls with monitoring
response = monitor.text_generation(
    model="mistralai/Mistral-7B-Instruct-v0.2",
    inputs="What are the key benefits of LLM monitoring?"
)

print(response[0]["generated_text"])
`
    },
    {
      id: 'azure',
      name: 'Azure OpenAI',
      description: 'Comprehensive monitoring for Azure-hosted OpenAI models.',
      code: `# Install SentinelOps with Azure support
pip install "sentinelops[azure]"

# Import the Azure OpenAI monitor
from sentinelops import AzureOpenAIMonitor

# Initialize the monitor
monitor = AzureOpenAIMonitor(
    api_key="your-azure-api-key",
    endpoint="https://your-resource.openai.azure.com",
    api_version="2023-05-15",
    application_name="my-app"
)

# Make API calls with monitoring
response = monitor.chat_completion(
    deployment_name="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What are the key benefits of LLM monitoring?"}
    ]
)

print(response.choices[0].message.content)
`
    },
    {
      id: 'vertex',
      name: 'Google Vertex AI',
      description: 'Monitor Google\'s PaLM, Gemini, and other Vertex AI models.',
      code: `# Install SentinelOps with Google Cloud support
pip install "sentinelops[gcp]"

# Import the Vertex AI monitor
from sentinelops import VertexAIMonitor

# Initialize the monitor
monitor = VertexAIMonitor(
    project_id="your-gcp-project-id",
    location="us-central1",
    application_name="my-app"
)

# Make API calls with monitoring
response = monitor.generate_content(
    model="gemini-pro",
    contents="What are the key benefits of LLM monitoring?"
)

print(response.text)
`
    }
  ];

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Integration Examples for All LLM Providers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SentinelOps offers consistent monitoring across all major LLM providers with a simple, unified API
          </p>
        </div>

        {/* Provider Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {providers.map(provider => (
              <button
                key={provider.id}
                onClick={() => setActiveTab(provider.id)}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === provider.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {provider.name}
              </button>
            ))}
          </div>
        </div>

        {/* Code Examples */}
        {providers.map(provider => (
          <div key={provider.id} className={activeTab === provider.id ? 'block' : 'hidden'}>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{provider.name}</h3>
              <p className="text-gray-600 mb-4">{provider.description}</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg mb-8">
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 text-sm mr-4">integration.py</span>
                  <button
                    onClick={() => copyToClipboard(provider.code, provider.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedIndex === provider.id ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Clipboard className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              <pre className="p-4 overflow-x-auto text-gray-100 text-sm">
                <code>{provider.code}</code>
              </pre>
            </div>
            
            <div className="flex justify-center">
              <a href="/docs/quick-start" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
                View complete documentation
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LLMProviderExamples;
