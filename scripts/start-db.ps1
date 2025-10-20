# Start PostgreSQL for development
Write-Host "🐘 Starting PostgreSQL database for development..." -ForegroundColor Green

# Create network if it doesn't exist
docker network create next-map-dev-network 2>$null

# Start PostgreSQL container
docker run -d `
  --name next-map-postgres-dev `
  --network next-map-dev-network `
  -e POSTGRES_USER=nextmap `
  -e POSTGRES_PASSWORD=nextmap_password `
  -e POSTGRES_DB=nextmap `
  -p 5432:5432 `
  -v next-map-postgres-dev-data:/var/lib/postgresql/data `
  --restart unless-stopped `
  postgres:15-alpine

Write-Host "✅ PostgreSQL started on localhost:5432" -ForegroundColor Green
Write-Host "📊 Database: nextmap" -ForegroundColor Cyan
Write-Host "👤 User: nextmap" -ForegroundColor Cyan
Write-Host "🔑 Password: nextmap_password" -ForegroundColor Cyan
Write-Host ""
Write-Host "🔗 Connection string:" -ForegroundColor Yellow
Write-Host "DATABASE_URL=postgresql://nextmap:nextmap_password@localhost:5432/nextmap" -ForegroundColor White