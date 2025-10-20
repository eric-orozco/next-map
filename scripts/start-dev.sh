#!/bin/bash
# Development container startup script

echo "🚀 Starting Next Map Development Environment..."

# Copy environment file if it doesn't exist
if [ ! -f .env.docker ]; then
    echo "📝 Creating .env.docker from template..."
    cp .env.docker.example .env.docker
    echo "⚠️  Please edit .env.docker with your settings before continuing!"
    exit 1
fi

echo "✅ Environment configured"
echo "🐳 Starting development containers..."

# Start with development compose
docker compose -f docker/docker-compose.dev.yml up -d

echo "🎉 Development environment ready!"
echo "📱 App: http://localhost:3000"
echo "🗄️  Database: localhost:5432"
echo ""
echo "Next steps:"
echo "1. Open VS Code"
echo "2. Press Ctrl+Shift+P"
echo "3. Run: 'Dev Containers: Reopen in Container'"