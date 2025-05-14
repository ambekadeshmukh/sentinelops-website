import React, { useState } from 'react';
import Layout from './Layout';
import { Clipboard, Check, ChevronRight, Book, Code, Terminal, Bot, FileText, ShoppingCart, Heart, GraduationCap } from 'lucide-react';

const ExamplesPage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  return (
    <Layout title="SentinelOps Examples - Code Samples and Use Cases">
      <div className="bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar Navigation */}
            <div className="lg:w-64 lg:pr-8 lg:border-r lg:border-gray-200 mb-8 lg:mb-0">
              <nav className="sticky top-20">
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Quick Examples</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#basic-openai" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Basic OpenAI
                      </a>
                    </li>
                    <li>
                      <a href="#anthropic-claude" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Anthropic Claude
                      </a>
                    </li>
                    <li>
                      <a href="#multi-provider" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Multi-Provider
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Framework Examples</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#langchain" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        LangChain
                      </a>
                    </li>
                    <li>
                      <a href="#llamaindex" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        LlamaIndex
                      </a>
                    </li>
                    <li>
                      <a href="#custom-framework" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Custom Framework
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Use Case Examples</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#chatbot" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Customer Support Bot
                      </a>
                    </li>
                    <li>
                      <a href="#content-generation" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Content Generation
                      </a>
                    </li>
                    <li>
                      <a href="#ecommerce" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        E-commerce Assistant
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Advanced Examples</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#batching" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Batching & Caching
                      </a>
                    </li>
                    <li>
                      <a href="#cost-optimization" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Cost Optimization
                      </a>
                    </li>
                    <li>
                      <a href="#error-handling" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Error Handling
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
                  <span className="text-sm text-gray-500">Resources</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">Examples</span>
                </div>
                
                <h1>Code Examples</h1>
                
                <p className="lead">
                  Practical examples showing how to integrate SentinelOps monitoring into various LLM applications and use cases.
                </p>
                
                <h2 id="basic-openai">Basic OpenAI Integration</h2>
                
                <p>
                  The simplest way to get started with SentinelOps is to monitor your OpenAI API calls:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">basic_openai.py</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`from sentinelops.providers.openai import OpenAIMonitor
import os

# Initialize the monitor
monitor = OpenAIMonitor(
    api_key=os.getenv("OPENAI_API_KEY"),
    model="gpt-4",
    application_name="my-app",
    environment="production"
)

# Use the monitor for chat completion
def ask_question(question):
    response = monitor.chat_completion(
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": question}
        ],
        temperature=0.7,
        max_tokens=150
    )
    return response.choices[0].message.content

# Example usage
if __name__ == "__main__":
    answer = ask_question("What is the capital of France?")
    print(f"Answer: {answer}")`, 1)}
                    >
                      {copiedIndex === 1 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`from sentinelops.providers.openai import OpenAIMonitor
import os

# Initialize the monitor
monitor = OpenAIMonitor(
    api_key=os.getenv("OPENAI_API_KEY"),
    model="gpt-4",
    application_name="my-app",
    environment="production"
)

# Use the monitor for chat completion
def ask_question(question):
    response = monitor.chat_completion(
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": question}
        ],
        temperature=0.7,
        max_tokens=150
    )
    return response.choices[0].message.content

# Example usage
if __name__ == "__main__":
    answer = ask_question("What is the capital of France?")
    print(f"Answer: {answer}")`}</pre>
                  </div>
                </div>
                
                <h2 id="anthropic-claude">Anthropic Claude Integration</h2>
                
                <p>
                  Monitoring Anthropic's Claude models:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">anthropic_example.py</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`from sentinelops.providers.anthropic import AnthropicMonitor
import os

# Initialize the monitor
monitor = AnthropicMonitor(
    api_key=os.getenv("ANTHROPIC_API_KEY"),
    model="claude-3-opus-20240229",
    application_name="claude-assistant",
    environment="production"
)

# Creative writing assistant
def generate_story(prompt, max_tokens=2000):
    response = monitor.messages(
        messages=[
            {
                "role": "user",
                "content": f"Write a creative short story based on this prompt: {prompt}"
            }
        ],
        max_tokens=max_tokens,
        temperature=0.8
    )
    return response.content[0].text

# Example usage
story_prompt = "A robot discovers it can feel emotions for the first time"
story = generate_story(story_prompt)
print(f"Generated story: {story[:200]}...")`, 2)}
                    >
                      {copiedIndex === 2 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`from sentinelops.providers.anthropic import AnthropicMonitor
import os

# Initialize the monitor
monitor = AnthropicMonitor(
    api_key=os.getenv("ANTHROPIC_API_KEY"),
    model="claude-3-opus-20240229",
    application_name="claude-assistant",
    environment="production"
)

# Creative writing assistant
def generate_story(prompt, max_tokens=2000):
    response = monitor.messages(
        messages=[
            {
                "role": "user",
                "content": f"Write a creative short story based on this prompt: {prompt}"
            }
        ],
        max_tokens=max_tokens,
        temperature=0.8
    )
    return response.content[0].text

# Example usage
story_prompt = "A robot discovers it can feel emotions for the first time"
story = generate_story(story_prompt)
print(f"Generated story: {story[:200]}...")`}</pre>
                  </div>
                </div>
                
                <h2 id="multi-provider">Multi-Provider Setup</h2>
                
                <p>
                  Using multiple LLM providers with SentinelOps monitoring:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">multi_provider.py</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`from sentinelops.providers.openai import OpenAIMonitor
from sentinelops.providers.anthropic import AnthropicMonitor
from sentinelops.providers.huggingface import HuggingFaceMonitor
import os

class MultiLLMAssistant:
    def __init__(self):
        # Initialize monitors for different providers
        self.openai_monitor = OpenAIMonitor(
            api_key=os.getenv("OPENAI_API_KEY"),
            model="gpt-4",
            application_name="multi-llm-assistant",
            environment="production"
        )
        
        self.anthropic_monitor = AnthropicMonitor(
            api_key=os.getenv("ANTHROPIC_API_KEY"),
            model="claude-3-sonnet-20240229",
            application_name="multi-llm-assistant",
            environment="production"
        )
        
        self.hf_monitor = HuggingFaceMonitor(
            api_key=os.getenv("HUGGINGFACE_API_KEY"),
            model="mistralai/Mistral-7B-Instruct-v0.1",
            application_name="multi-llm-assistant",
            environment="production"
        )
    
    def get_creative_response(self, prompt):
        """Use Claude for creative tasks"""
        return self.anthropic_monitor.messages(
            messages=[{"role": "user", "content": prompt}],
            max_tokens=1500,
            temperature=0.9
        ).content[0].text
    
    def get_analytical_response(self, prompt):
        """Use GPT-4 for analytical tasks"""
        return self.openai_monitor.chat_completion(
            messages=[
                {"role": "system", "content": "You are an analytical assistant."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.3,
            max_tokens=1000
        ).choices[0].message.content
    
    def get_fast_response(self, prompt):
        """Use HuggingFace for quick responses"""
        return self.hf_monitor.text_generation(
            prompt=f"Answer briefly: {prompt}",
            max_new_tokens=200,
            temperature=0.7
        )[0]['generated_text']

# Example usage
assistant = MultiLLMAssistant()

# Creative task
creative_output = assistant.get_creative_response(
    "Write a poem about artificial intelligence"
)

# Analytical task
analysis = assistant.get_analytical_response(
    "Analyze the pros and cons of remote work"
)

# Quick response
quick_answer = assistant.get_fast_response(
    "What is machine learning?"
)

print(f"Creative: {creative_output[:100]}...")
print(f"Analysis: {analysis[:100]}...")
print(f"Quick: {quick_answer[:100]}...")`, 3)}
                    >
                      {copiedIndex === 3 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`from sentinelops.providers.openai import OpenAIMonitor
from sentinelops.providers.anthropic import AnthropicMonitor
from sentinelops.providers.huggingface import HuggingFaceMonitor
import os

class MultiLLMAssistant:
    def __init__(self):
        # Initialize monitors for different providers
        self.openai_monitor = OpenAIMonitor(
            api_key=os.getenv("OPENAI_API_KEY"),
            model="gpt-4",
            application_name="multi-llm-assistant",
            environment="production"
        )
        
        self.anthropic_monitor = AnthropicMonitor(
            api_key=os.getenv("ANTHROPIC_API_KEY"),
            model="claude-3-sonnet-20240229",
            application_name="multi-llm-assistant",
            environment="production"
        )
        
        self.hf_monitor = HuggingFaceMonitor(
            api_key=os.getenv("HUGGINGFACE_API_KEY"),
            model="mistralai/Mistral-7B-Instruct-v0.1",
            application_name="multi-llm-assistant",
            environment="production"
        )
    
    def get_creative_response(self, prompt):
        """Use Claude for creative tasks"""
        return self.anthropic_monitor.messages(
            messages=[{"role": "user", "content": prompt}],
            max_tokens=1500,
            temperature=0.9
        ).content[0].text
    
    def get_analytical_response(self, prompt):
        """Use GPT-4 for analytical tasks"""
        return self.openai_monitor.chat_completion(
            messages=[
                {"role": "system", "content": "You are an analytical assistant."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.3,
            max_tokens=1000
        ).choices[0].message.content
    
    def get_fast_response(self, prompt):
        """Use HuggingFace for quick responses"""
        return self.hf_monitor.text_generation(
            prompt=f"Answer briefly: {prompt}",
            max_new_tokens=200,
            temperature=0.7
        )[0]['generated_text']

# Example usage
assistant = MultiLLMAssistant()

# Creative task
creative_output = assistant.get_creative_response(
    "Write a poem about artificial intelligence"
)

# Analytical task
analysis = assistant.get_analytical_response(
    "Analyze the pros and cons of remote work"
)

# Quick response
quick_answer = assistant.get_fast_response(
    "What is machine learning?"
)

print(f"Creative: {creative_output[:100]}...")
print(f"Analysis: {analysis[:100]}...")
print(f"Quick: {quick_answer[:100]}...")`}</pre>
                  </div>
                </div>
                
                <h2 id="langchain">LangChain Integration</h2>
                
                <p>
                  Monitoring LangChain applications with SentinelOps:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">langchain_example.py</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`from sentinelops.integrations.langchain import MonitoredChatModel
from sentinelops.providers.openai import OpenAIMonitor
from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
import os

# Create SentinelOps monitor
monitor = OpenAIMonitor(
    api_key=os.getenv("OPENAI_API_KEY"),
    model="gpt-4",
    application_name="langchain-qa-system",
    environment="production"
)

# Create monitored LangChain model
chat_model = MonitoredChatModel(
    chat_model=ChatOpenAI(
        model_name="gpt-4",
        temperature=0.7
    ),
    monitor=monitor
)

# Create a chain for question answering
qa_prompt = PromptTemplate(
    input_variables=["context", "question"],
    template="""Based on the following context, answer the question as accurately as possible.

Context: {context}

Question: {question}

Answer:"""
)

qa_chain = LLMChain(llm=chat_model, prompt=qa_prompt)

# Example usage
def answer_with_context(context, question):
    # Add custom metadata for better tracking
    metadata = {
        "feature": "qa_system",
        "context_length": len(context),
        "question_type": "factual"
    }
    
    # Run the chain with metadata
    response = qa_chain.run(
        context=context,
        question=question,
        metadata=metadata
    )
    return response

# Test the system
context = """
SentinelOps is an open-source observability platform for LLM applications.
It provides comprehensive monitoring, including performance metrics, cost tracking,
hallucination detection, and quality assurance features.
"""

question = "What is SentinelOps and what features does it provide?"
answer = answer_with_context(context, question)
print(f"Answer: {answer}")`, 4)}
                    >
                      {copiedIndex === 4 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`from sentinelops.integrations.langchain import MonitoredChatModel
from sentinelops.providers.openai import OpenAIMonitor
from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
import os

# Create SentinelOps monitor
monitor = OpenAIMonitor(
    api_key=os.getenv("OPENAI_API_KEY"),
    model="gpt-4",
    application_name="langchain-qa-system",
    environment="production"
)

# Create monitored LangChain model
chat_model = MonitoredChatModel(
    chat_model=ChatOpenAI(
        model_name="gpt-4",
        temperature=0.7
    ),
    monitor=monitor
)

# Create a chain for question answering
qa_prompt = PromptTemplate(
    input_variables=["context", "question"],
    template="""Based on the following context, answer the question as accurately as possible.

Context: {context}

Question: {question}

Answer:"""
)

qa_chain = LLMChain(llm=chat_model, prompt=qa_prompt)

# Example usage
def answer_with_context(context, question):
    # Add custom metadata for better tracking
    metadata = {
        "feature": "qa_system",
        "context_length": len(context),
        "question_type": "factual"
    }
    
    # Run the chain with metadata
    response = qa_chain.run(
        context=context,
        question=question,
        metadata=metadata
    )
    return response

# Test the system
context = """
SentinelOps is an open-source observability platform for LLM applications.
It provides comprehensive monitoring, including performance metrics, cost tracking,
hallucination detection, and quality assurance features.
"""

question = "What is SentinelOps and what features does it provide?"
answer = answer_with_context(context, question)
print(f"Answer: {answer}")`}</pre>
                  </div>
                </div>
                
                <h2 id="llamaindex">LlamaIndex Integration</h2>
                
                <p>
                  Monitoring LlamaIndex applications:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">llamaindex_example.py</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`from sentinelops.integrations.llamaindex import monitor_llamaindex
from sentinelops.providers.openai import OpenAIMonitor
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.llms.openai import OpenAI
from llama_index.core.node_parser import SentenceSplitter
import os

# Create SentinelOps monitor
monitor = OpenAIMonitor(
    api_key=os.getenv("OPENAI_API_KEY"),
    model="gpt-4",
    application_name="llamaindex-document-qa",
    environment="production"
)

# Create and monitor the LLM
llm = OpenAI(model="gpt-4", temperature=0.1)
monitored_llm = monitor_llamaindex(llm, monitor)

# Load and index documents
def create_index_from_documents(docs_path):
    # Load documents
    documents = SimpleDirectoryReader(docs_path).load_data()
    
    # Create node parser
    node_parser = SentenceSplitter(chunk_size=512, chunk_overlap=20)
    
    # Create index with monitored LLM
    index = VectorStoreIndex.from_documents(
        documents,
        llm=monitored_llm,
        node_parser=node_parser
    )
    
    return index

# Create a query engine with monitoring
def create_query_engine(index):
    query_engine = index.as_query_engine(
        llm=monitored_llm,
        similarity_top_k=3,
        response_mode="tree_summarize"
    )
    return query_engine

# Example usage
def query_documents(docs_path, question):
    # Create index
    index = create_index_from_documents(docs_path)
    
    # Create query engine
    query_engine = create_query_engine(index)
    
    # Query with metadata
    metadata = {
        "query_type": "document_search",
        "similarity_top_k": 3,
        "response_mode": "tree_summarize"
    }
    
    # Add metadata to the query
    response = query_engine.query(question)
    
    # Add metadata manually (if not supported by integration)
    if hasattr(monitor, 'add_metadata'):
        monitor.add_metadata(metadata)
    
    return response

# Example usage
# docs_path = "./documents"  # Path to your documents
# question = "What are the key features of the product?"
# response = query_documents(docs_path, question)
# print(f"Response: {response}")`, 5)}
                    >
                      {copiedIndex === 5 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`from sentinelops.integrations.llamaindex import monitor_llamaindex
from sentinelops.providers.openai import OpenAIMonitor
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.llms.openai import OpenAI
from llama_index.core.node_parser import SentenceSplitter
import os

# Create SentinelOps monitor
monitor = OpenAIMonitor(
    api_key=os.getenv("OPENAI_API_KEY"),
    model="gpt-4",
    application_name="llamaindex-document-qa",
    environment="production"
)

# Create and monitor the LLM
llm = OpenAI(model="gpt-4", temperature=0.1)
monitored_llm = monitor_llamaindex(llm, monitor)

# Load and index documents
def create_index_from_documents(docs_path):
    # Load documents
    documents = SimpleDirectoryReader(docs_path).load_data()
    
    # Create node parser
    node_parser = SentenceSplitter(chunk_size=512, chunk_overlap=20)
    
    # Create index with monitored LLM
    index = VectorStoreIndex.from_documents(
        documents,
        llm=monitored_llm,
        node_parser=node_parser
    )
    
    return index

# Create a query engine with monitoring
def create_query_engine(index):
    query_engine = index.as_query_engine(
        llm=monitored_llm,
        similarity_top_k=3,
        response_mode="tree_summarize"
    )
    return query_engine

# Example usage
def query_documents(docs_path, question):
    # Create index
    index = create_index_from_documents(docs_path)
    
    # Create query engine
    query_engine = create_query_engine(index)
    
    # Query with metadata
    metadata = {
        "query_type": "document_search",
        "similarity_top_k": 3,
        "response_mode": "tree_summarize"
    }
    
    # Add metadata to the query
    response = query_engine.query(question)
    
    # Add metadata manually (if not supported by integration)
    if hasattr(monitor, 'add_metadata'):
        monitor.add_metadata(metadata)
    
    return response

# Example usage
# docs_path = "./documents"  # Path to your documents
# question = "What are the key features of the product?"
# response = query_documents(docs_path, question)
# print(f"Response: {response}")`}</pre>
                  </div>
                </div>
                
                {/* Use Case Examples Section */}
                <h2>Use Case Examples</h2>
                
                <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <Bot className="h-8 w-8 text-black" />
                      <h3 className="text-lg font-semibold text-black ml-3">Customer Support Bot</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Monitor a customer support chatbot that handles multiple conversation threads and escalates complex issues.
                    </p>
                    <a href="#chatbot" className="text-black text-sm font-medium hover:underline">
                      View Example →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <FileText className="h-8 w-8 text-black" />
                      <h3 className="text-lg font-semibold text-black ml-3">Content Generation</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Track performance and costs of a content generation system for marketing campaigns.
                    </p>
                    <a href="#content-generation" className="text-black text-sm font-medium hover:underline">
                      View Example →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <ShoppingCart className="h-8 w-8 text-black" />
                      <h3 className="text-lg font-semibold text-black ml-3">E-commerce Assistant</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Monitor product recommendations and search functionality in an e-commerce platform.
                    </p>
                    <a href="#ecommerce" className="text-black text-sm font-medium hover:underline">
                      View Example →
                    </a>
                  </div>
                </div>
                
                <h2 id="chatbot">Customer Support Bot Example</h2>
                
                <p>
                  A comprehensive customer support bot with conversation management and escalation:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">customer_support_bot.py</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`from sentinelops.providers.openai import OpenAIMonitor
from datetime import datetime
import json
import os

class CustomerSupportBot:
    def __init__(self):
        self.monitor = OpenAIMonitor(
            api_key=os.getenv("OPENAI_API_KEY"),
            model="gpt-4",
            application_name="customer-support-bot",
            environment="production"
        )
        
        self.system_prompt = """You are a helpful customer support assistant for TechCorp.
        You can help with:
        - Product information and troubleshooting
        - Account issues and billing questions
        - Order status and returns
        
        If you cannot resolve an issue, politely suggest escalating to a human agent.
        Always be professional, empathetic, and helpful."""
        
        self.conversations = {}
    
    def start_conversation(self, user_id, initial_message):
        """Start a new conversation"""
        conversation_id = f"conv_{user_id}_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        
        self.conversations[conversation_id] = {
            "user_id": user_id,
            "messages": [
                {"role": "system", "content": self.system_prompt},
                {"role": "user", "content": initial_message}
            ],
            "start_time": datetime.now(),
            "escalated": False
        }
        
        # Get initial response
        response = self._get_ai_response(conversation_id, initial_message)
        
        return conversation_id, response
    
    def continue_conversation(self, conversation_id, user_message):
        """Continue an existing conversation"""
        if conversation_id not in self.conversations:
            return "Conversation not found. Please start a new conversation."
        
        conversation = self.conversations[conversation_id]
        conversation["messages"].append({"role": "user", "content": user_message})
        
        # Check if escalation is needed
        if self._should_escalate(user_message):
            conversation["escalated"] = True
            return self._escalate_to_human(conversation_id)
        
        return self._get_ai_response(conversation_id, user_message)
    
    def _get_ai_response(self, conversation_id, user_message):
        """Get AI response with monitoring"""
        conversation = self.conversations[conversation_id]
        
        # Prepare metadata for monitoring
        metadata = {
            "conversation_id": conversation_id,
            "user_id": conversation["user_id"],
            "message_count": len(conversation["messages"]),
            "escalated": conversation["escalated"],
            "intent": self._classify_intent(user_message),
            "urgency": self._assess_urgency(user_message)
        }
        
        # Get response from AI
        response = self.monitor.chat_completion(
            messages=conversation["messages"],
            temperature=0.7,
            max_tokens=300,
            metadata=metadata
        )
        
        # Add AI response to conversation
        ai_message = response.choices[0].message.content
        conversation["messages"].append({"role": "assistant", "content": ai_message})
        
        return ai_message
    
    def _classify_intent(self, message):
        """Classify user intent for better monitoring"""
        message_lower = message.lower()
        
        if any(word in message_lower for word in ["bill", "payment", "charge", "refund"]):
            return "billing"
        elif any(word in message_lower for word in ["order", "delivery", "shipping", "tracking"]):
            return "order_inquiry"
        elif any(word in message_lower for word in ["bug", "error", "problem", "not working"]):
            return "technical_support"
        elif any(word in message_lower for word in ["cancel", "return", "exchange"]):
            return "returns"
        else:
            return "general_inquiry"
    
    def _assess_urgency(self, message):
        """Assess message urgency"""
        urgent_keywords = ["urgent", "emergency", "asap", "critical", "broken", "down"]
        if any(word in message.lower() for word in urgent_keywords):
            return "high"
        return "normal"
    
    def _should_escalate(self, message):
        """Determine if conversation should be escalated"""
        escalation_keywords = [
            "speak to human", "human agent", "manager", "supervisor",
            "escalate", "not satisfied", "complaint", "frustrated"
        ]
        return any(keyword in message.lower() for keyword in escalation_keywords)
    
    def _escalate_to_human(self, conversation_id):
        """Handle escalation to human agent"""
        metadata = {
            "conversation_id": conversation_id,
            "action": "escalated_to_human",
            "reason": "user_request"
        }
        
        # Log escalation with SentinelOps
        self.monitor.chat_completion(
            messages=[
                {"role": "system", "content": "Log escalation event"},
                {"role": "user", "content": f"Conversation {conversation_id} escalated"}
            ],
            metadata=metadata,
            max_tokens=1
        )
        
        return "I'm connecting you with a human agent who can better assist you. Please hold while I transfer your conversation."
    
    def get_conversation_summary(self, conversation_id):
        """Get conversation summary for handoff"""
        if conversation_id not in self.conversations:
            return None
        
        conversation = self.conversations[conversation_id]
        
        # Create summary for human agent
        summary_prompt = f"""
        Summarize this customer support conversation for handoff to a human agent:
        
        Messages: {json.dumps(conversation['messages'][1:], indent=2)}
        
        Provide:
        1. Customer issue summary
        2. Actions taken
        3. Current status
        4. Recommended next steps
        """
        
        summary_response = self.monitor.chat_completion(
            messages=[{"role": "user", "content": summary_prompt}],
            temperature=0.3,
            max_tokens=500,
            metadata={
                "conversation_id": conversation_id,
                "action": "generate_handoff_summary"
            }
        )
        
        return summary_response.choices[0].message.content

# Example usage
if __name__ == "__main__":
    bot = CustomerSupportBot()
    
    # Start a conversation
    conv_id, response = bot.start_conversation(
        user_id="user_123",
        initial_message="Hi, I haven't received my order yet. It was supposed to arrive yesterday."
    )
    
    print(f"Bot: {response}")
    
    # Continue conversation
    response = bot.continue_conversation(
        conv_id,
        "This is really frustrating. I need to speak to a human agent."
    )
    
    print(f"Bot: {response}")
    
    # Get summary if escalated
    if bot.conversations[conv_id]["escalated"]:
        summary = bot.get_conversation_summary(conv_id)
        print(f"Handoff Summary: {summary}")`, 6)}
                    >
                      {copiedIndex === 6 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`from sentinelops.providers.openai import OpenAIMonitor
from datetime import datetime
import json
import os

class CustomerSupportBot:
    def __init__(self):
        self.monitor = OpenAIMonitor(
            api_key=os.getenv("OPENAI_API_KEY"),
            model="gpt-4",
            application_name="customer-support-bot",
            environment="production"
        )
        
        self.system_prompt = """You are a helpful customer support assistant for TechCorp.
        You can help with:
        - Product information and troubleshooting
        - Account issues and billing questions
        - Order status and returns
        
        If you cannot resolve an issue, politely suggest escalating to a human agent.
        Always be professional, empathetic, and helpful."""
        
        self.conversations = {}
    
    def start_conversation(self, user_id, initial_message):
        """Start a new conversation"""
        conversation_id = f"conv_{user_id}_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        
        self.conversations[conversation_id] = {
            "user_id": user_id,
            "messages": [
                {"role": "system", "content": self.system_prompt},
                {"role": "user", "content": initial_message}
            ],
            "start_time": datetime.now(),
            "escalated": False
        }
        
        # Get initial response
        response = self._get_ai_response(conversation_id, initial_message)
        
        return conversation_id, response
    
    def continue_conversation(self, conversation_id, user_message):
        """Continue an existing conversation"""
        if conversation_id not in self.conversations:
            return "Conversation not found. Please start a new conversation."
        
        conversation = self.conversations[conversation_id]
        conversation["messages"].append({"role": "user", "content": user_message})
        
        # Check if escalation is needed
        if self._should_escalate(user_message):
            conversation["escalated"] = True
            return self._escalate_to_human(conversation_id)
        
        return self._get_ai_response(conversation_id, user_message)
    
    def _get_ai_response(self, conversation_id, user_message):
        """Get AI response with monitoring"""
        conversation = self.conversations[conversation_id]
        
        # Prepare metadata for monitoring
        metadata = {
            "conversation_id": conversation_id,
            "user_id": conversation["user_id"],
            "message_count": len(conversation["messages"]),
            "escalated": conversation["escalated"],
            "intent": self._classify_intent(user_message),
            "urgency": self._assess_urgency(user_message)
        }
        
        # Get response from AI
        response = self.monitor.chat_completion(
            messages=conversation["messages"],
            temperature=0.7,
            max_tokens=300,
            metadata=metadata
        )
        
        # Add AI response to conversation
        ai_message = response.choices[0].message.content
        conversation["messages"].append({"role": "assistant", "content": ai_message})
        
        return ai_message
    
    def _classify_intent(self, message):
        """Classify user intent for better monitoring"""
        message_lower = message.lower()
        
        if any(word in message_lower for word in ["bill", "payment", "charge", "refund"]):
            return "billing"
        elif any(word in message_lower for word in ["order", "delivery", "shipping", "tracking"]):
            return "order_inquiry"
        elif any(word in message_lower for word in ["bug", "error", "problem", "not working"]):
            return "technical_support"
        elif any(word in message_lower for word in ["cancel", "return", "exchange"]):
            return "returns"
        else:
            return "general_inquiry"
    
    def _assess_urgency(self, message):
        """Assess message urgency"""
        urgent_keywords = ["urgent", "emergency", "asap", "critical", "broken", "down"]
        if any(word in message.lower() for word in urgent_keywords):
            return "high"
        return "normal"
    
    def _should_escalate(self, message):
        """Determine if conversation should be escalated"""
        escalation_keywords = [
            "speak to human", "human agent", "manager", "supervisor",
            "escalate", "not satisfied", "complaint", "frustrated"
        ]
        return any(keyword in message.lower() for keyword in escalation_keywords)
    
    def _escalate_to_human(self, conversation_id):
        """Handle escalation to human agent"""
        metadata = {
            "conversation_id": conversation_id,
            "action": "escalated_to_human",
            "reason": "user_request"
        }
        
        # Log escalation with SentinelOps
        self.monitor.chat_completion(
            messages=[
                {"role": "system", "content": "Log escalation event"},
                {"role": "user", "content": f"Conversation {conversation_id} escalated"}
            ],
            metadata=metadata,
            max_tokens=1
        )
        
        return "I'm connecting you with a human agent who can better assist you. Please hold while I transfer your conversation."
    
    def get_conversation_summary(self, conversation_id):
        """Get conversation summary for handoff"""
        if conversation_id not in self.conversations:
            return None
        
        conversation = self.conversations[conversation_id]
        
        # Create summary for human agent
        summary_prompt = f"""
        Summarize this customer support conversation for handoff to a human agent:
        
        Messages: {json.dumps(conversation['messages'][1:], indent=2)}
        
        Provide:
        1. Customer issue summary
        2. Actions taken
        3. Current status
        4. Recommended next steps
        """
        
        summary_response = self.monitor.chat_completion(
            messages=[{"role": "user", "content": summary_prompt}],
            temperature=0.3,
            max_tokens=500,
            metadata={
                "conversation_id": conversation_id,
                "action": "generate_handoff_summary"
            }
        )
        
        return summary_response.choices[0].message.content

# Example usage
if __name__ == "__main__":
    bot = CustomerSupportBot()
    
    # Start a conversation
    conv_id, response = bot.start_conversation(
        user_id="user_123",
        initial_message="Hi, I haven't received my order yet. It was supposed to arrive yesterday."
    )
    
    print(f"Bot: {response}")
    
    # Continue conversation
    response = bot.continue_conversation(
        conv_id,
        "This is really frustrating. I need to speak to a human agent."
    )
    
    print(f"Bot: {response}")
    
    # Get summary if escalated
    if bot.conversations[conv_id]["escalated"]:
        summary = bot.get_conversation_summary(conv_id)
        print(f"Handoff Summary: {summary}")`}</pre>
                  </div>
                </div>
                
                <h2 id="batching">Batching and Caching Example</h2>
                
                <p>
                  Optimize performance and costs using batching and caching:
                </p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">optimization_example.py</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`from sentinelops.providers.openai import OpenAIMonitor
import asyncio
import time
import os

class OptimizedLLMService:
    def __init__(self):
        # Initialize monitor with batching and caching enabled
        self.monitor = OpenAIMonitor(
            api_key=os.getenv("OPENAI_API_KEY"),
            model="gpt-3.5-turbo",
            application_name="optimized-service",
            environment="production",
            
            # Enable batching for high-volume scenarios
            enable_batching=True,
            batch_size=20,
            flush_interval=2.0,  # Flush every 2 seconds
            
            # Enable caching for repeated queries
            enable_caching=True,
            cache_ttl=3600,      # Cache for 1 hour
            cache_max_size=1000, # Store up to 1000 responses
            disk_cache=True,     # Persist cache to disk
            cache_dir="./llm_cache"
        )
    
    async def process_batch_requests(self, requests):
        """Process multiple requests efficiently"""
        tasks = []
        
        for i, request in enumerate(requests):
            # Add metadata to track batch processing
            metadata = {
                "batch_id": f"batch_{int(time.time())}",
                "request_index": i,
                "total_requests": len(requests),
                "request_type": request.get("type", "general")
            }
            
            # Create async task for each request
            task = self._process_single_request(request, metadata)
            tasks.append(task)
        
        # Process all requests concurrently
        results = await asyncio.gather(*tasks, return_exceptions=True)
        
        # Manually flush batch if needed
        self.monitor.batch_processor.flush()
        
        return results
    
    async def _process_single_request(self, request, metadata):
        """Process a single request with monitoring"""
        try:
            # Prepare messages
            messages = [
                {"role": "system", "content": request.get("system_prompt", "You are a helpful assistant.")},
                {"role": "user", "content": request["prompt"]}
            ]
            
            # Make request with monitoring
            response = await self.monitor.async_chat_completion(
                messages=messages,
                temperature=request.get("temperature", 0.7),
                max_tokens=request.get("max_tokens", 150),
                metadata=metadata
            )
            
            return {
                "success": True,
                "response": response.choices[0].message.content,
                "metadata": metadata
            }
            
        except Exception as e:
            return {
                "success": False,
                "error": str(e),
                "metadata": metadata
            }
    
    def generate_with_caching(self, prompt, use_cache=True):
        """Generate response with caching optimization"""
        # Metadata for cache analysis
        metadata = {
            "use_cache": use_cache,
            "prompt_hash": hash(prompt) % 10000,  # Simple hash for tracking
            "cache_strategy": "enabled" if use_cache else "disabled"
        }
        
        start_time = time.time()
        
        response = self.monitor.chat_completion(
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
            max_tokens=200,
            metadata=metadata
        )
        
        end_time = time.time()
        response_time = end_time - start_time
        
        # Check if response was cached (simplified logic)
        was_cached = response_time < 0.5  # Assume cached if very fast
        
        # Update metadata with cache info
        metadata.update({
            "was_cached": was_cached,
            "response_time": response_time
        })
        
        return {
            "response": response.choices[0].message.content,
            "was_cached": was_cached,
            "response_time": response_time
        }
    
    def cost_optimization_example(self):
        """Demonstrate cost optimization techniques"""
        # Use different models for different tasks
        simple_tasks = [
            "What is 2+2?",
            "What day is today?",
            "Hello, how are you?"
        ]
        
        complex_tasks = [
            "Explain quantum computing in detail",
            "Write a comprehensive business plan for a tech startup",
            "Analyze the pros and cons of different machine learning algorithms"
        ]
        
        # Process simple tasks with faster, cheaper model
        simple_monitor = OpenAIMonitor(
            api_key=os.getenv("OPENAI_API_KEY"),
            model="gpt-3.5-turbo",  # Cheaper model for simple tasks
            application_name="cost-optimized-simple",
            environment="production"
        )
        
        # Process complex tasks with more powerful model
        complex_monitor = OpenAIMonitor(
            api_key=os.getenv("OPENAI_API_KEY"),
            model="gpt-4",  # More expensive but better for complex tasks
            application_name="cost-optimized-complex",
            environment="production"
        )
        
        simple_results = []
        complex_results = []
        
        # Process simple tasks
        for task in simple_tasks:
            result = simple_monitor.chat_completion(
                messages=[{"role": "user", "content": task}],
                temperature=0.3,
                max_tokens=50,  # Limit tokens for simple responses
                metadata={"task_type": "simple", "optimization": "cost_aware"}
            )
            simple_results.append(result.choices[0].message.content)
        
        # Process complex tasks
        for task in complex_tasks:
            result = complex_monitor.chat_completion(
                messages=[{"role": "user", "content": task}],
                temperature=0.7,
                max_tokens=500,  # Allow more tokens for complex responses
                metadata={"task_type": "complex", "optimization": "cost_aware"}
            )
            complex_results.append(result.choices[0].message.content)
        
        return simple_results, complex_results

# Example usage
async def main():
    service = OptimizedLLMService()
    
    # Example 1: Batch processing
    requests = [
        {"prompt": "Explain AI in one sentence", "type": "explanation"},
        {"prompt": "What is machine learning?", "type": "definition"},
        {"prompt": "How do neural networks work?", "type": "technical"},
        {"prompt": "What are the benefits of automation?", "type": "analysis"}
    ]
    
    print("Processing batch requests...")
    batch_results = await service.process_batch_requests(requests)
    print(f"Processed {len(batch_results)} requests")
    
    # Example 2: Caching demonstration
    print("\\nDemonstrating caching...")
    
    # First request (not cached)
    result1 = service.generate_with_caching("What is artificial intelligence?")
    print(f"First request - Cached: {result1['was_cached']}, Time: {result1['response_time']:.3f}s")
    
    # Second request (should be cached)
    result2 = service.generate_with_caching("What is artificial intelligence?")
    print(f"Second request - Cached: {result2['was_cached']}, Time: {result2['response_time']:.3f}s")
    
    # Example 3: Cost optimization
    print("\\nDemonstrating cost optimization...")
    simple_results, complex_results = service.cost_optimization_example()
    print(f"Processed {len(simple_results)} simple tasks and {len(complex_results)} complex tasks")

if __name__ == "__main__":
    asyncio.run(main())`, 7)}
                    >
                      {copiedIndex === 7 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`from sentinelops.providers.openai import OpenAIMonitor
import asyncio
import time
import os

class OptimizedLLMService:
    def __init__(self):
        # Initialize monitor with batching and caching enabled
        self.monitor = OpenAIMonitor(
            api_key=os.getenv("OPENAI_API_KEY"),
            model="gpt-3.5-turbo",
            application_name="optimized-service",
            environment="production",
            
            # Enable batching for high-volume scenarios
            enable_batching=True,
            batch_size=20,
            flush_interval=2.0,  # Flush every 2 seconds
            
            # Enable caching for repeated queries
            enable_caching=True,
            cache_ttl=3600,      # Cache for 1 hour
            cache_max_size=1000, # Store up to 1000 responses
            disk_cache=True,     # Persist cache to disk
            cache_dir="./llm_cache"
        )
    
    async def process_batch_requests(self, requests):
        """Process multiple requests efficiently"""
        tasks = []
        
        for i, request in enumerate(requests):
            # Add metadata to track batch processing
            metadata = {
                "batch_id": f"batch_{int(time.time())}",
                "request_index": i,
                "total_requests": len(requests),
                "request_type": request.get("type", "general")
            }
            
            # Create async task for each request
            task = self._process_single_request(request, metadata)
            tasks.append(task)
        
        # Process all requests concurrently
        results = await asyncio.gather(*tasks, return_exceptions=True)
        
        # Manually flush batch if needed
        self.monitor.batch_processor.flush()
        
        return results
    
    async def _process_single_request(self, request, metadata):
        """Process a single request with monitoring"""
        try:
            # Prepare messages
            messages = [
                {"role": "system", "content": request.get("system_prompt", "You are a helpful assistant.")},
                {"role": "user", "content": request["prompt"]}
            ]
            
            # Make request with monitoring
            response = await self.monitor.async_chat_completion(
                messages=messages,
                temperature=request.get("temperature", 0.7),
                max_tokens=request.get("max_tokens", 150),
                metadata=metadata
            )
            
            return {
                "success": True,
                "response": response.choices[0].message.content,
                "metadata": metadata
            }
            
        except Exception as e:
            return {
                "success": False,
                "error": str(e),
                "metadata": metadata
            }
    
    def generate_with_caching(self, prompt, use_cache=True):
        """Generate response with caching optimization"""
        # Metadata for cache analysis
        metadata = {
            "use_cache": use_cache,
            "prompt_hash": hash(prompt) % 10000,  # Simple hash for tracking
            "cache_strategy": "enabled" if use_cache else "disabled"
        }
        
        start_time = time.time()
        
        response = self.monitor.chat_completion(
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
            max_tokens=200,
            metadata=metadata
        )
        
        end_time = time.time()
        response_time = end_time - start_time
        
        # Check if response was cached (simplified logic)
        was_cached = response_time < 0.5  # Assume cached if very fast
        
        # Update metadata with cache info
        metadata.update({
            "was_cached": was_cached,
            "response_time": response_time
        })
        
        return {
            "response": response.choices[0].message.content,
            "was_cached": was_cached,
            "response_time": response_time
        }
    
    def cost_optimization_example(self):
        """Demonstrate cost optimization techniques"""
        # Use different models for different tasks
        simple_tasks = [
            "What is 2+2?",
            "What day is today?",
            "Hello, how are you?"
        ]
        
        complex_tasks = [
            "Explain quantum computing in detail",
            "Write a comprehensive business plan for a tech startup",
            "Analyze the pros and cons of different machine learning algorithms"
        ]
        
        # Process simple tasks with faster, cheaper model
        simple_monitor = OpenAIMonitor(
            api_key=os.getenv("OPENAI_API_KEY"),
            model="gpt-3.5-turbo",  # Cheaper model for simple tasks
            application_name="cost-optimized-simple",
            environment="production"
        )
        
        # Process complex tasks with more powerful model
        complex_monitor = OpenAIMonitor(
            api_key=os.getenv("OPENAI_API_KEY"),
            model="gpt-4",  # More expensive but better for complex tasks
            application_name="cost-optimized-complex",
            environment="production"
        )
        
        simple_results = []
        complex_results = []
        
        # Process simple tasks
        for task in simple_tasks:
            result = simple_monitor.chat_completion(
                messages=[{"role": "user", "content": task}],
                temperature=0.3,
                max_tokens=50,  # Limit tokens for simple responses
                metadata={"task_type": "simple", "optimization": "cost_aware"}
            )
            simple_results.append(result.choices[0].message.content)
        
        # Process complex tasks
        for task in complex_tasks:
            result = complex_monitor.chat_completion(
                messages=[{"role": "user", "content": task}],
                temperature=0.7,
                max_tokens=500,  # Allow more tokens for complex responses
                metadata={"task_type": "complex", "optimization": "cost_aware"}
            )
            complex_results.append(result.choices[0].message.content)
        
        return simple_results, complex_results

# Example usage
async def main():
    service = OptimizedLLMService()
    
    # Example 1: Batch processing
    requests = [
        {"prompt": "Explain AI in one sentence", "type": "explanation"},
        {"prompt": "What is machine learning?", "type": "definition"},
        {"prompt": "How do neural networks work?", "type": "technical"},
        {"prompt": "What are the benefits of automation?", "type": "analysis"}
    ]
    
    print("Processing batch requests...")
    batch_results = await service.process_batch_requests(requests)
    print(f"Processed {len(batch_results)} requests")
    
    # Example 2: Caching demonstration
    print("\\nDemonstrating caching...")
    
    # First request (not cached)
    result1 = service.generate_with_caching("What is artificial intelligence?")
    print(f"First request - Cached: {result1['was_cached']}, Time: {result1['response_time']:.3f}s")
    
    # Second request (should be cached)
    result2 = service.generate_with_caching("What is artificial intelligence?")
    print(f"Second request - Cached: {result2['was_cached']}, Time: {result2['response_time']:.3f}s")
    
    # Example 3: Cost optimization
    print("\\nDemonstrating cost optimization...")
    simple_results, complex_results = service.cost_optimization_example()
    print(f"Processed {len(simple_results)} simple tasks and {len(complex_results)} complex tasks")

if __name__ == "__main__":
    asyncio.run(main())`}</pre>
                  </div>
                </div>
                
                <h2>Repository and Resources</h2>
                
                <p>
                  Find more examples and contribute your own:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 not-prose">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-black mb-3">GitHub Examples Repository</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Browse our comprehensive collection of examples covering different providers, frameworks, and use cases.
                    </p>
                    <a
                      href="https://github.com/sentinelops/sentinelops/tree/main/examples"
                      className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100"
                    >
                      View Examples
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-black mb-3">Community Examples</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Share your own examples and learn from community contributions.
                    </p>
                    <a
                      href="/docs/contributing"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800"
                    >
                      Contribute
                    </a>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-white rounded-lg border-2 border-black">
                  <h3 className="text-lg font-semibold text-black mb-3">Need Help with Your Use Case?</h3>
                  <p className="text-gray-700 mb-4">
                    Can't find an example for your specific use case? Join our community or check out our comprehensive SDK documentation.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <a
                      href="/docs/sdk-usage"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800"
                    >
                      SDK Documentation
                    </a>
                    <a
                      href="https://discord.gg/sentinelops"
                      className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100"
                    >
                      Join Discord
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

export default ExamplesPage;