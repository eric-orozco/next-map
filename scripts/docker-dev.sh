#!/bin/sh
# Development Docker Compose script
# Run the application in development mode with hot reloading

cd "$(dirname "$0")/.."
docker compose -f docker/docker-compose.dev.yml up --build "$@"