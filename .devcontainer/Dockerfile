# Standalone development container
FROM node:20-alpine

# Install system dependencies
RUN apk add --no-cache \
    libc6-compat \
    curl \
    git \
    bash \
    postgresql-client \
    ca-certificates

# Enable corepack for pnpm
RUN corepack enable

# Create app directory and set ownership
WORKDIR /app
RUN chown node:node /app

# Switch to node user for installations
USER node

# Copy package files with correct ownership
COPY --chown=node:node package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy prisma schema
COPY --chown=node:node prisma ./prisma/

# Generate Prisma client
RUN pnpm db:generate

# Expose port
EXPOSE 3000

# Default command - start development server
CMD ["tail", "-f", "/dev/null"]