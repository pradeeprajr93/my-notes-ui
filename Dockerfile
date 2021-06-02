# STAGE 1: BUILD
FROM node:14-alpine3.13 AS build
WORKDIR /app
COPY package*json .
RUN npm install
COPY . .
RUN npm run build

# STAGE 2: RUN
FROM nginx:1.21-alpine
COPY --from=build /app/dist/my-notes /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/my-notes/nginx.conf /etc/nginx/conf.d
EXPOSE 80