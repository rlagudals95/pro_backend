FROM node:18.18.2

RUN mkdir -p /var/app
WORKDIR /var/app
COPY . .

RUN npm i -g npm@9.8.1
RUN npm install
RUN npm run build

EXPOSE 8080
CMD [ "node", "dist/main.js" ]