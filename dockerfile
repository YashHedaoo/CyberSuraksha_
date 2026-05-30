# ──────────────────────────────────────────────────────────────
# Stage 1 — deps
# Install only production + dev dependencies for building
# ──────────────────────────────────────────────────────────────
FROM node:20-alpine AS deps

# Install libc compat for Alpine (required by some native npm packages)
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy lockfile + manifests first (layer cache – only reinstall when these change)
COPY package.json package-lock.json* ./

RUN npm ci


# ──────────────────────────────────────────────────────────────
# Stage 2 — builder
# Build the Next.js application
# ──────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy installed node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the source
COPY . .

# Supabase public keys are needed at build time (NEXT_PUBLIC_* are inlined)
# Pass them as build args from CI/CD or your .env.production file
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY

ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build


# ──────────────────────────────────────────────────────────────
# Stage 3 — runner  (final, minimal image)
# Only the compiled output + production runtime – no dev tools,
# no source code, no build cache
# ──────────────────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Copy only what Next.js needs to run
# (no /public folder in this project — remove this line if you add one later)

# next build outputs a standalone bundle when output: 'standalone' is set
# in next.config.mjs (recommended – see note below)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# server.js is created by the standalone output
CMD ["node", "server.js"]