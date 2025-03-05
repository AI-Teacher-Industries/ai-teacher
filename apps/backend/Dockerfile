FROM oven/bun:1 as base

WORKDIR /app

# Install dependencies
FROM base as deps
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Build the app
FROM deps as builder
COPY . .
RUN bun run build

# Production image
FROM base as runner
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["bun", "run", "start"]