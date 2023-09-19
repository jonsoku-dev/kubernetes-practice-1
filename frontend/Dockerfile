# React 앱 빌드
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Nginx 서버 설정
FROM nginx:1.24.0
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

# docker build cli
# docker build -t react-app:latest .

# docker run cli
# docker run -d -p 3000:3000 react-app:latest
