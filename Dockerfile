FROM  node:lts

EXPOSE 80

RUN npm i -g pm2
RUN pm2 start /root/insg/server/dist/server.js
