FROM tmvdl/node:angular as angular

WORKDIR /app

COPY . .

RUN npm run build

FROM nginx:stable

WORKDIR /usr/share/nginx/html

COPY --from=angular /app/dist .
