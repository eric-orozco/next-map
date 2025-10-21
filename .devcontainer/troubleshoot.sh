#!/bin/bash

# Dev Container Troubleshooting Script
echo "🔧 Dev Container Troubleshooting..."
echo "=================================="

# Check Docker
echo "📦 Checking Docker..."
if command -v docker &> /dev/null; then
    echo "✅ Docker is installed"
    docker --version
    if docker ps &> /dev/null; then
        echo "✅ Docker is running"
    else
        echo "❌ Docker is not running. Please start Docker Desktop."
        exit 1
    fi
else
    echo "❌ Docker is not installed. Please install Docker Desktop."
    exit 1
fi

echo ""

# Check VS Code Dev Containers extension
echo "🔌 Checking VS Code Dev Containers extension..."
if code --list-extensions | grep -q "ms-vscode-remote.remote-containers"; then
    echo "✅ Dev Containers extension is installed"
else
    echo "❌ Dev Containers extension is not installed."
    echo "Please install it from: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"
fi

echo ""

# Check devcontainer.json syntax
echo "📝 Checking devcontainer.json syntax..."
if command -v jq &> /dev/null; then
    if jq empty .devcontainer/devcontainer.json 2>/dev/null; then
        echo "✅ devcontainer.json has valid JSON syntax"
    else
        echo "❌ devcontainer.json has invalid JSON syntax"
        echo "Please check for syntax errors in the file"
    fi
else
    echo "⚠️  jq not available, skipping JSON validation"
fi

echo ""

# Check if we're in the right directory
if [ -f "package.json" ] && [ -f ".devcontainer/devcontainer.json" ]; then
    echo "✅ Found package.json and devcontainer.json"
else
    echo "❌ Missing required files. Make sure you're in the project root directory."
    exit 1
fi

echo ""
echo "🚀 Troubleshooting complete!"
echo ""
echo "📋 Next steps to try:"
echo "1. In VS Code, press Cmd+Shift+P"
echo "2. Type 'Dev Containers: Rebuild Container'"
echo "3. If that fails, try 'Dev Containers: Rebuild Container Without Cache'"
echo "4. Check Docker Desktop for any error messages"
echo "5. Ensure you have enough disk space (at least 5GB free)"
echo ""
echo "💡 Common solutions:"
echo "- Restart Docker Desktop"
echo "- Clear Docker cache: docker system prune"
echo "- Update VS Code and the Dev Containers extension"
echo "- Check that your project folder is accessible to Docker"