FROM node:12

# Create app directory
WORKDIR /usr/src/insg.xyz

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 8080

CMD [ "node", "dist/server.js" ]
