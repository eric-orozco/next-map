# Use the official Node.js runtime as the base image
FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

# Install additional system dependencies
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    postgresql-client \
    && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Install pnpm globally
RUN npm install -g pnpm@9.12.3

# Set the working directory
WORKDIR /workspaces

# Copy package files first for better Docker layer caching
COPY package*.json pnpm-lock.yaml* ./

# Install dependencies (this will be cached if package files don't change)
RUN pnpm install --frozen-lockfile || pnpm install

# Expose the ports the app runs on
EXPOSE 3000 5555

# Default command - keep container running
CMD ["sleep", "infinity"]