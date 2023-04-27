FROM nginx:1.19.0
WORKDIR /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY build /usr/share/nginx/html