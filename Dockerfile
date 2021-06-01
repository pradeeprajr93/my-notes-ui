# STAGE 1: BUILD
FROM node:14-alpine3.13 AS build
WORKDIR /app
COPY package*json .
RUN npm install
COPY . .
RUN npm run build

# STAGE 2: RUN
FROM nginx
RUN apt update
RUN apt install -y python3
COPY --from=build /app/dist/my-notes /usr/share/nginx/html
COPY --from=build /app/dist/my-notes/assets/scripts/entrypoint.sh /app/entrypoint.sh
EXPOSE 80
RUN chmod u+x /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]