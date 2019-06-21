FROM  node:10

WORKDIR /root/insg

COPY package*.json ./
COPY server/dist ./

RUN npm install

EXPOSE 80
CMD ["node" "./dist/server.js"]
