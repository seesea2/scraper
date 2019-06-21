FROM  node:10

RUN mkdir /root/insg 

WORKDIR /root/insg
COPY package*.json ./
COPY dist ./

# RUN npm install
RUN npm ci --only=production

EXPOSE 80 443
CMD [ "node", "server.js" ]
