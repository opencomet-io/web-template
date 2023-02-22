FROM node:19-alpine3.17 AS base

# Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock* ./
COPY docker/.yarnrc.docker.yml ./.yarnrc.yml
COPY .yarn/releases ./.yarn/releases

RUN yarn install --immutable

# Builder
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/.yarn/cache ./.yarn/cache
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN yarn build

# Runner
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3001

ENV PORT=3001

CMD ["node", "server.js"]
