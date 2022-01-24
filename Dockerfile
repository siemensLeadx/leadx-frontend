# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:12.18.3 as build
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install

COPY ./ /app/
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:latest
COPY --from=build /app/build/ /usr/share/nginx/html
