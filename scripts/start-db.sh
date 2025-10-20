#!/bin/bash
# Start PostgreSQL for development

echo "🐘 Starting PostgreSQL database for development..."

# Create network if it doesn't exist
docker network create next-map-dev-network 2>/dev/null || true

# Start PostgreSQL container
docker run -d \
  --name next-map-postgres-dev \
  --network next-map-dev-network \
  -e POSTGRES_USER=nextmap \
  -e POSTGRES_PASSWORD=nextmap_password \
  -e POSTGRES_DB=nextmap \
  -p 5432:5432 \
  -v next-map-postgres-dev-data:/var/lib/postgresql/data \
  --restart unless-stopped \
  postgres:15-alpine

echo "✅ PostgreSQL started on localhost:5432"
echo "📊 Database: nextmap"
echo "👤 User: nextmap"
echo "🔑 Password: nextmap_password"
echo ""
echo "🔗 Connection string:"
echo "DATABASE_URL=postgresql://nextmap:nextmap_password@localhost:5432/nextmap"