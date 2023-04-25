# Stage 1
FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .

# manually installing chrome
RUN apk add chromium

# skips puppeteer installing chrome and points to correct binary
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN yarn install
COPY . .

RUN yarn build

# Stage 2
FROM nginx:1.19.0
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html