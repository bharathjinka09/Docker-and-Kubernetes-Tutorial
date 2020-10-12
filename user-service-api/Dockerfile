FROM node:12.19.0-alpine
WORKDIR /app 
ADD package*.json ./ 
RUN npm install
ADD . .
CMD node index.js
