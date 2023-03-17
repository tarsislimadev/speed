# FROM tmvdl/node:angular as angular

FROM node:10.13

RUN npm i @angular/cli 

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

ENTRYPOINT npm start

# FROM nginx:stable

# WORKDIR /usr/share/nginx/html

# COPY --from=angular /app/dist .
