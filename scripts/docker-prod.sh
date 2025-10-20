#!/bin/sh
# Production Docker Compose script
# Run the application in production mode

cd "$(dirname "$0")/.."
docker compose -f docker/docker-compose.yml up --build "$@"