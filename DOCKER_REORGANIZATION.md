# Docker Files Reorganization Summary

## What Changed

All Docker-related files have been moved to the `/docker` directory to improve project organization:

### Files Moved:

- `Dockerfile` → `docker/Dockerfile`
- `Dockerfile.dev` → `docker/Dockerfile.dev`
- `docker-compose.yml` → `docker/docker-compose.yml`
- `docker-compose.dev.yml` → `docker/docker-compose.dev.yml`
- `docker-compose.override.yml` → `docker/docker-compose.override.yml`

### Updated Configuration:

- Docker Compose files now use `context: ..` and `dockerfile: docker/Dockerfile`
- Volume mounts updated to use `..:/app` instead of `.:/app`
- Postgres init volume path updated to `./postgres/init`

### Updated Scripts:

- `scripts/docker-dev.sh` - Updated to use new paths
- `scripts/docker-prod.sh` - Updated to use new paths
- `scripts/start-dev.sh` - Updated to use new docker-compose path

### Documentation Updated:

- `README.md` - Updated file structure and command examples
- All docker commands now reference the new file locations

## How to Use

### Development:

```bash
# From project root
./scripts/docker-dev.sh
# or
docker compose -f docker/docker-compose.dev.yml up --build
```

### Production:

```bash
# From project root
./scripts/docker-prod.sh
# or
docker compose -f docker/docker-compose.yml up --build
```

### Manual Build:

```bash
# Production image
docker build -f docker/Dockerfile -t next-map .

# Development image
docker build -f docker/Dockerfile.dev -t next-map:dev .
```

## Benefits:

- ✅ Cleaner project root directory
- ✅ All Docker files organized in one location
- ✅ Easier to find and maintain Docker configurations
- ✅ Follows common project organization practices
- ✅ Maintains full functionality

## File Structure:

```
next-map/
├── .dockerignore           # Files excluded from build
├── .env.docker.example     # Environment template
└── docker/                 # All Docker-related files
    ├── Dockerfile          # Production multi-stage build
    ├── Dockerfile.dev      # Development with hot reload
    ├── docker-compose.yml  # Main services configuration
    ├── docker-compose.dev.yml # Development overrides
    ├── docker-compose.override.yml # Override configuration
    └── postgres/
        └── init/
            └── 01-init.sh  # Database initialization
```
