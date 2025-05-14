import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Clipboard, Check, ChevronRight, Book, GitBranch, Users, Heart, Code, Bug, FileText, Star } from 'lucide-react';

const ContributingPage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  return (
    <Layout title="Contributing to SentinelOps - Open Source Contribution Guide">
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
                      <a href="#ways-to-contribute" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Ways to Contribute
                      </a>
                    </li>
                    <li>
                      <a href="#setting-up" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Setting Up
                      </a>
                    </li>
                    <li>
                      <a href="#code-style" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Code Style
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Development</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#development-workflow" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Development Workflow
                      </a>
                    </li>
                    <li>
                      <a href="#testing" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Testing
                      </a>
                    </li>
                    <li>
                      <a href="#documentation" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Pull Requests</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#pull-request-process" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        PR Process
                      </a>
                    </li>
                    <li>
                      <a href="#review-process" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Review Process
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-sm font-semibold text-black uppercase tracking-wider mb-3">Community</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#community-guidelines" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Community Guidelines
                      </a>
                    </li>
                    <li>
                      <a href="#getting-help" className="flex items-center text-gray-600 hover:text-black">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Getting Help
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
                  <span className="text-sm font-medium text-gray-700">Contributing</span>
                </div>
                
                <h1>Contributing to SentinelOps</h1>
                
                <p className="lead">
                  We welcome contributions from the community! SentinelOps is built by developers, for developers, and every contribution helps make LLM monitoring better for everyone.
                </p>
                
                <div className="not-prose bg-white rounded-lg p-4 border border-gray-200 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Heart className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-black">Thank You!</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Every contribution, no matter how small, is valued and appreciated. Whether it's fixing a typo, reporting a bug, or implementing a major feature, you're helping make SentinelOps better for everyone.
                      </p>
                    </div>
                  </div>
                </div>
                
                <h2 id="ways-to-contribute">Ways to Contribute</h2>
                
                <p>There are many ways to contribute to SentinelOps:</p>
                
                <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      <Code className="h-6 w-6 text-black" />
                      <h3 className="text-lg font-semibold text-black ml-3">Code Contributions</h3>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Fix bugs and issues</li>
                      <li>• Implement new features</li>
                      <li>• Improve performance</li>
                      <li>• Add new LLM provider support</li>
                      <li>• Enhance SDK functionality</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      <FileText className="h-6 w-6 text-black" />
                      <h3 className="text-lg font-semibold text-black ml-3">Documentation</h3>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Improve existing docs</li>
                      <li>• Write tutorials and guides</li>
                      <li>• Create examples</li>
                      <li>• Fix typos and errors</li>
                      <li>• Translate documentation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      <Bug className="h-6 w-6 text-black" />
                      <h3 className="text-lg font-semibold text-black ml-3">Issue Reporting</h3>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Report bugs</li>
                      <li>• Request features</li>
                      <li>• Improve issue templates</li>
                      <li>• Triage existing issues</li>
                      <li>• Test release candidates</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 text-black" />
                      <h3 className="text-lg font-semibold text-black ml-3">Community Support</h3>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Help others in Discord</li>
                      <li>• Answer questions</li>
                      <li>• Share use cases</li>
                      <li>• Write blog posts</li>
                      <li>• Speak at events</li>
                    </ul>
                  </div>
                </div>
                
                <h2 id="setting-up">Setting Up the Development Environment</h2>
                
                <h3>Prerequisites</h3>
                
                <ul>
                  <li>Python 3.8 or higher</li>
                  <li>Node.js 14+ (for frontend development)</li>
                  <li>Docker and Docker Compose</li>
                  <li>Git</li>
                </ul>
                
                <h3>Fork and Clone</h3>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Terminal</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/sentinelops.git
cd sentinelops

# Add the original repository as upstream
git remote add upstream https://github.com/sentinelops/sentinelops.git

# Create a new branch for your feature
git checkout -b feature/your-feature-name`, 1)}
                    >
                      {copiedIndex === 1 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/sentinelops.git
cd sentinelops

# Add the original repository as upstream
git remote add upstream https://github.com/sentinelops/sentinelops.git

# Create a new branch for your feature
git checkout -b feature/your-feature-name`}</pre>
                  </div>
                </div>
                
                <h3>Development Setup</h3>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Terminal</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`# Set up Python development environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install development dependencies
pip install -e ".[dev]"
pip install -r requirements-dev.txt

# Install pre-commit hooks
pre-commit install

# Set up the development infrastructure
cd infrastructure
cp .env.example .env
docker-compose up -d

# Run tests to verify setup
cd ..
pytest tests/`, 2)}
                    >
                      {copiedIndex === 2 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`# Set up Python development environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install development dependencies
pip install -e ".[dev]"
pip install -r requirements-dev.txt

# Install pre-commit hooks
pre-commit install

# Set up the development infrastructure
cd infrastructure
cp .env.example .env
docker-compose up -d

# Run tests to verify setup
cd ..
pytest tests/`}</pre>
                  </div>
                </div>
                
                <h2 id="development-workflow">Development Workflow</h2>
                
                <h3>Making Changes</h3>
                
                <ol>
                  <li><strong>Create a feature branch</strong> from the main branch</li>
                  <li><strong>Make your changes</strong> following our code style guidelines</li>
                  <li><strong>Write tests</strong> for your changes</li>
                  <li><strong>Update documentation</strong> if needed</li>
                  <li><strong>Run tests and linting</strong> before committing</li>
                  <li><strong>Commit your changes</strong> with a descriptive message</li>
                  <li><strong>Push to your fork</strong> and create a pull request</li>
                </ol>
                
                <h3>Running Tests</h3>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Terminal</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`# Run all tests
pytest

# Run tests with coverage
pytest --cov=sentinelops

# Run specific test file
pytest tests/test_openai_monitor.py

# Run tests matching a pattern
pytest -k "test_chat_completion"

# Run integration tests
pytest tests/integration/

# Run linting
flake8 sentinelops/
black --check sentinelops/
isort --check sentinelops/

# Fix formatting
black sentinelops/
isort sentinelops/`, 3)}
                    >
                      {copiedIndex === 3 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`# Run all tests
pytest

# Run tests with coverage
pytest --cov=sentinelops

# Run specific test file
pytest tests/test_openai_monitor.py

# Run tests matching a pattern
pytest -k "test_chat_completion"

# Run integration tests
pytest tests/integration/

# Run linting
flake8 sentinelops/
black --check sentinelops/
isort --check sentinelops/

# Fix formatting
black sentinelops/
isort sentinelops/`}</pre>
                  </div>
                </div>
                
                <h2 id="code-style">Code Style Guidelines</h2>
                
                <h3>Python Code Style</h3>
                
                <ul>
                  <li>Follow <strong>PEP 8</strong> style guidelines</li>
                  <li>Use <strong>Black</strong> for code formatting</li>
                  <li>Use <strong>isort</strong> for import sorting</li>
                  <li>Maximum line length of <strong>88 characters</strong> (Black default)</li>
                  <li>Use type hints for all function parameters and return values</li>
                  <li>Write docstrings for all public functions and classes</li>
                </ul>
                
                <h3>Example Code Style</h3>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Python Example</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`from typing import Dict, List, Optional, Union
import logging

from sentinelops.base import BaseMonitor
from sentinelops.exceptions import SentinelOpsError


class ExampleMonitor(BaseMonitor):
    """Example monitor implementation following code style guidelines.
    
    Args:
        api_key: API key for the LLM provider
        model: Model name to monitor
        application_name: Name of the application using this monitor
        environment: Environment (development, staging, production)
    """
    
    def __init__(
        self,
        api_key: str,
        model: str,
        application_name: str,
        environment: str = "development",
        **kwargs,
    ) -> None:
        super().__init__(
            application_name=application_name,
            environment=environment,
            **kwargs
        )
        self.api_key = api_key
        self.model = model
        self.logger = logging.getLogger(__name__)
    
    async def chat_completion(
        self,
        messages: List[Dict[str, str]],
        temperature: float = 0.7,
        max_tokens: Optional[int] = None,
        metadata: Optional[Dict[str, Union[str, int, float]]] = None,
    ) -> Dict[str, Union[str, int, float]]:
        """Generate a chat completion with monitoring.
        
        Args:
            messages: List of message dictionaries
            temperature: Sampling temperature (0.0 to 2.0)
            max_tokens: Maximum tokens to generate
            metadata: Additional metadata for monitoring
            
        Returns:
            Dictionary containing the response and metadata
            
        Raises:
            SentinelOpsError: If the request fails
        """
        try:
            # Implementation here
            response = await self._make_request(
                messages=messages,
                temperature=temperature,
                max_tokens=max_tokens,
            )
            
            # Log metrics
            await self._log_metrics(response, metadata)
            
            return response
            
        except Exception as e:
            self.logger.error(f"Chat completion failed: {e}")
            raise SentinelOpsError(f"Request failed: {e}") from e`, 4)}
                    >
                      {copiedIndex === 4 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`from typing import Dict, List, Optional, Union
import logging

from sentinelops.base import BaseMonitor
from sentinelops.exceptions import SentinelOpsError


class ExampleMonitor(BaseMonitor):
    """Example monitor implementation following code style guidelines.
    
    Args:
        api_key: API key for the LLM provider
        model: Model name to monitor
        application_name: Name of the application using this monitor
        environment: Environment (development, staging, production)
    """
    
    def __init__(
        self,
        api_key: str,
        model: str,
        application_name: str,
        environment: str = "development",
        **kwargs,
    ) -> None:
        super().__init__(
            application_name=application_name,
            environment=environment,
            **kwargs
        )
        self.api_key = api_key
        self.model = model
        self.logger = logging.getLogger(__name__)
    
    async def chat_completion(
        self,
        messages: List[Dict[str, str]],
        temperature: float = 0.7,
        max_tokens: Optional[int] = None,
        metadata: Optional[Dict[str, Union[str, int, float]]] = None,
    ) -> Dict[str, Union[str, int, float]]:
        """Generate a chat completion with monitoring.
        
        Args:
            messages: List of message dictionaries
            temperature: Sampling temperature (0.0 to 2.0)
            max_tokens: Maximum tokens to generate
            metadata: Additional metadata for monitoring
            
        Returns:
            Dictionary containing the response and metadata
            
        Raises:
            SentinelOpsError: If the request fails
        """
        try:
            # Implementation here
            response = await self._make_request(
                messages=messages,
                temperature=temperature,
                max_tokens=max_tokens,
            )
            
            # Log metrics
            await self._log_metrics(response, metadata)
            
            return response
            
        except Exception as e:
            self.logger.error(f"Chat completion failed: {e}")
            raise SentinelOpsError(f"Request failed: {e}") from e`}</pre>
                  </div>
                </div>
                
                <h3>Commit Message Format</h3>
                
                <p>We follow the <a href="https://www.conventionalcommits.org/">Conventional Commits</a> specification:</p>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">Commit Format</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`type(scope): description

# Examples:
feat(openai): add support for GPT-4 Turbo
fix(anthropic): resolve token counting issue
docs(readme): update installation instructions
test(sdk): add integration tests for batching
refactor(core): simplify monitor initialization
style(format): apply black formatting
ci(github): update Python test matrix
perf(caching): optimize cache lookup performance`, 5)}
                    >
                      {copiedIndex === 5 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`type(scope): description

# Examples:
feat(openai): add support for GPT-4 Turbo
fix(anthropic): resolve token counting issue
docs(readme): update installation instructions
test(sdk): add integration tests for batching
refactor(core): simplify monitor initialization
style(format): apply black formatting
ci(github): update Python test matrix
perf(caching): optimize cache lookup performance`}</pre>
                  </div>
                </div>
                
                <h2 id="testing">Testing Guidelines</h2>
                
                <h3>Test Structure</h3>
                
                <ul>
                  <li><strong>Unit Tests</strong>: Test individual functions and methods</li>
                  <li><strong>Integration Tests</strong>: Test component interactions</li>
                  <li><strong>End-to-End Tests</strong>: Test complete workflows</li>
                  <li><strong>Performance Tests</strong>: Test performance characteristics</li>
                </ul>
                
                <h3>Writing Tests</h3>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">test_example.py</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`import pytest
from unittest.mock import Mock, patch, AsyncMock

from sentinelops.providers.openai import OpenAIMonitor
from sentinelops.exceptions import SentinelOpsError


class TestOpenAIMonitor:
    """Test suite for OpenAI monitor."""
    
    @pytest.fixture
    def monitor(self):
        """Create a monitor instance for testing."""
        return OpenAIMonitor(
            api_key="test-key",
            model="gpt-4",
            application_name="test-app",
            environment="test"
        )
    
    @pytest.fixture
    def mock_response(self):
        """Mock OpenAI API response."""
        return {
            "choices": [
                {
                    "message": {
                        "content": "Test response",
                        "role": "assistant"
                    }
                }
            ],
            "usage": {
                "prompt_tokens": 10,
                "completion_tokens": 20,
                "total_tokens": 30
            }
        }
    
    def test_monitor_initialization(self, monitor):
        """Test monitor initialization."""
        assert monitor.api_key == "test-key"
        assert monitor.model == "gpt-4"
        assert monitor.application_name == "test-app"
        assert monitor.environment == "test"
    
    @pytest.mark.asyncio
    async def test_chat_completion_success(self, monitor, mock_response):
        """Test successful chat completion."""
        with patch.object(monitor, '_make_request', new_callable=AsyncMock) as mock_request:
            mock_request.return_value = mock_response
            
            result = await monitor.chat_completion(
                messages=[{"role": "user", "content": "Hello"}]
            )
            
            assert result == mock_response
            mock_request.assert_called_once()
    
    @pytest.mark.asyncio
    async def test_chat_completion_failure(self, monitor):
        """Test chat completion with API error."""
        with patch.object(monitor, '_make_request', new_callable=AsyncMock) as mock_request:
            mock_request.side_effect = Exception("API Error")
            
            with pytest.raises(SentinelOpsError):
                await monitor.chat_completion(
                    messages=[{"role": "user", "content": "Hello"}]
                )
    
    def test_metadata_extraction(self, monitor, mock_response):
        """Test metadata extraction from response."""
        metadata = monitor._extract_metadata(mock_response)
        
        assert metadata["prompt_tokens"] == 10
        assert metadata["completion_tokens"] == 20
        assert metadata["total_tokens"] == 30
    
    @pytest.mark.parametrize("temperature,expected", [
        (0.0, 0.0),
        (0.7, 0.7),
        (1.0, 1.0),
        (2.0, 2.0),
    ])
    def test_temperature_validation(self, monitor, temperature, expected):
        """Test temperature parameter validation."""
        validated = monitor._validate_temperature(temperature)
        assert validated == expected
    
    def test_temperature_validation_invalid(self, monitor):
        """Test temperature validation with invalid values."""
        with pytest.raises(ValueError):
            monitor._validate_temperature(-0.1)
        
        with pytest.raises(ValueError):
            monitor._validate_temperature(2.1)`, 6)}
                    >
                      {copiedIndex === 6 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`import pytest
from unittest.mock import Mock, patch, AsyncMock

from sentinelops.providers.openai import OpenAIMonitor
from sentinelops.exceptions import SentinelOpsError


class TestOpenAIMonitor:
    """Test suite for OpenAI monitor."""
    
    @pytest.fixture
    def monitor(self):
        """Create a monitor instance for testing."""
        return OpenAIMonitor(
            api_key="test-key",
            model="gpt-4",
            application_name="test-app",
            environment="test"
        )
    
    @pytest.fixture
    def mock_response(self):
        """Mock OpenAI API response."""
        return {
            "choices": [
                {
                    "message": {
                        "content": "Test response",
                        "role": "assistant"
                    }
                }
            ],
            "usage": {
                "prompt_tokens": 10,
                "completion_tokens": 20,
                "total_tokens": 30
            }
        }
    
    def test_monitor_initialization(self, monitor):
        """Test monitor initialization."""
        assert monitor.api_key == "test-key"
        assert monitor.model == "gpt-4"
        assert monitor.application_name == "test-app"
        assert monitor.environment == "test"
    
    @pytest.mark.asyncio
    async def test_chat_completion_success(self, monitor, mock_response):
        """Test successful chat completion."""
        with patch.object(monitor, '_make_request', new_callable=AsyncMock) as mock_request:
            mock_request.return_value = mock_response
            
            result = await monitor.chat_completion(
                messages=[{"role": "user", "content": "Hello"}]
            )
            
            assert result == mock_response
            mock_request.assert_called_once()
    
    @pytest.mark.asyncio
    async def test_chat_completion_failure(self, monitor):
        """Test chat completion with API error."""
        with patch.object(monitor, '_make_request', new_callable=AsyncMock) as mock_request:
            mock_request.side_effect = Exception("API Error")
            
            with pytest.raises(SentinelOpsError):
                await monitor.chat_completion(
                    messages=[{"role": "user", "content": "Hello"}]
                )
    
    def test_metadata_extraction(self, monitor, mock_response):
        """Test metadata extraction from response."""
        metadata = monitor._extract_metadata(mock_response)
        
        assert metadata["prompt_tokens"] == 10
        assert metadata["completion_tokens"] == 20
        assert metadata["total_tokens"] == 30
    
    @pytest.mark.parametrize("temperature,expected", [
        (0.0, 0.0),
        (0.7, 0.7),
        (1.0, 1.0),
        (2.0, 2.0),
    ])
    def test_temperature_validation(self, monitor, temperature, expected):
        """Test temperature parameter validation."""
        validated = monitor._validate_temperature(temperature)
        assert validated == expected
    
    def test_temperature_validation_invalid(self, monitor):
        """Test temperature validation with invalid values."""
        with pytest.raises(ValueError):
            monitor._validate_temperature(-0.1)
        
        with pytest.raises(ValueError):
            monitor._validate_temperature(2.1)`}</pre>
                  </div>
                </div>
                
                <h2 id="pull-request-process">Pull Request Process</h2>
                
                <h3>Before Submitting</h3>
                
                <ol>
                  <li>Ensure your code follows the style guidelines</li>
                  <li>Add tests for your changes</li>
                  <li>Update documentation if needed</li>
                  <li>Run the full test suite</li>
                  <li>Update the changelog (if applicable)</li>
                </ol>
                
                <h3>Pull Request Template</h3>
                
                <div className="bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <span className="text-sm text-gray-400">PR Template</span>
                    <button 
                      className="text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(`## Description
Brief description of the changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## How Has This Been Tested?
Describe the tests that you ran to verify your changes.

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published in downstream modules

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Additional Notes
Any additional notes or context about the PR.`, 7)}
                    >
                      {copiedIndex === 7 ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-100">{`## Description
Brief description of the changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## How Has This Been Tested?
Describe the tests that you ran to verify your changes.

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published in downstream modules

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Additional Notes
Any additional notes or context about the PR.`}</pre>
                  </div>
                </div>
                
                <h2 id="community-guidelines">Community Guidelines</h2>
                
                <h3>Code of Conduct</h3>
                
                <p>
                  We are committed to providing a welcoming and inclusive environment for all contributors. Please read and follow our <a href="https://github.com/sentinelops/sentinelops/blob/main/CODE_OF_CONDUCT.md">Code of Conduct</a>.
                </p>
                
                <h3>Communication</h3>
                
                <ul>
                  <li>Be respectful and constructive in all interactions</li>
                  <li>Use clear and descriptive titles for issues and PRs</li>
                  <li>Provide context and examples when reporting bugs</li>
                  <li>Ask questions if you're unsure about something</li>
                  <li>Help others learn and grow</li>
                </ul>
                
                <h2 id="getting-help">Getting Help</h2>
                
                <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-black mb-3">Discord Community</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Join our Discord server for real-time chat with other contributors and maintainers.
                    </p>
                    <a
                      href="https://discord.gg/sentinelops"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800"
                    >
                      Join Discord
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-black mb-3">GitHub Discussions</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Use GitHub Discussions for longer-form conversations and Q&A.
                    </p>
                    <a
                      href="https://github.com/sentinelops/sentinelops/discussions"
                      className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100"
                    >
                      Start Discussion
                    </a>
                  </div>
                </div>
                
                <h3>Mentorship</h3>
                
                <p>
                  New to open source? We have mentors available to help you get started! Look for the "good first issue" label on GitHub issues, or reach out in Discord.
                </p>
                
                <h2>Recognition</h2>
                
                <p>
                  We believe in recognizing and celebrating our contributors:
                </p>
                
                <ul>
                  <li><strong>Contributors List</strong>: All contributors are listed in our README</li>
                  <li><strong>Release Notes</strong>: Major contributions are highlighted in release notes</li>
                  <li><strong>Special Recognition</strong>: Outstanding contributors may receive special recognition</li>
                  <li><strong>Swag</strong>: Active contributors may receive SentinelOps swag</li>
                </ul>
                
                <div className="not-prose bg-white rounded-lg p-6 border-2 border-black mt-12">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-8 w-8 text-yellow-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-black mb-3">Ready to Get Started?</h3>
                      <p className="text-gray-700 mb-4">
                        Check out our "good first issue" labels on GitHub, join our Discord community, or dive into the codebase. Every contribution matters!
                      </p>
                      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                        <a
                          href="https://github.com/sentinelops/sentinelops/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800"
                        >
                          Find Good First Issues
                        </a>
                        <a
                          href="https://github.com/sentinelops/sentinelops/fork"
                          className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100"
                        >
                          <GitBranch className="h-4 w-4 mr-2" />
                          Fork the Repository
                        </a>
                      </div>
                    </div>
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

export default ContributingPage;