ARG DOCKER_REGISTRY=""
FROM ${DOCKER_REGISTRY}node:18-alpine as builder

WORKDIR /app
COPY package*.json ./

RUN npm i --omit=optional --legacy-peer-deps


# COPY public/ public/
# COPY scripts/removeSourcemaps.js scripts/
# COPY tsconfig.json ./
# COPY docker-compose-dev.yml ./
COPY . .


COPY src/ src/

# ARG BASE_URL

# ENV BASE_URL ${BASE_URL: -https://api.garamaleki.ir/graphql/}

RUN npm run build

LABEL org.opencontainers.image.title="gsmblog"                                  \
    org.opencontainers.image.description="gsmblog." \
    org.opencontainers.image.url="https://strapi.garamaleki.ir/"                                \
    org.opencontainers.image.source="https://hamgit.ir/gsm-tech/front-b2b"     \
    org.opencontainers.image.revision="$COMMIT_ID"                                   \
    org.opencontainers.image.version="$PROJECT_VERSION"                              \
    org.opencontainers.image.authors="rahmat rahman rahim"           

