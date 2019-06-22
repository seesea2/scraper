FROM  node:10

RUN mkdir /root/insg 
RUN mkdir /root/dist

WORKDIR /root/insg
COPY package*.json ./
COPY dist ./dist

# RUN npm install
RUN npm ci --only=production

EXPOSE 80 443
CMD [ "npm", "start" ]
