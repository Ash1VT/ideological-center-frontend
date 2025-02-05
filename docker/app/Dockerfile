# Build Stage
FROM node:22.11.0-alpine AS build
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
RUN yarn install
COPY . .
RUN yarn build
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]