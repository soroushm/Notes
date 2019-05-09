FROM node:alpine as react-build

# Bundle APP files
COPY package.json .

RUN yarn install

COPY public public/
COPY scripts scripts/
COPY config config/
COPY src src/
COPY babel.config.js babel.config.js


RUN yarn build

# Show current folder structure in logs
RUN ls -l
RUN rm -rf src

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=react-build /build  /var/www

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
