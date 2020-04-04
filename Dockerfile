FROM node:12-alpine

# app directory
WORKDIR /usr/src/scraper

COPY package*.json ./
RUN npm ci --only=production

COPY ./dist/* ./

EXPOSE 8888
CMD [ "node", "server.js" ]
