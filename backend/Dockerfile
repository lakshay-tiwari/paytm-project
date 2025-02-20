FROM node:20-alpine

WORKDIR /app/be

COPY package* .

RUN npm install 

COPY . .

EXPOSE 3000

CMD [ "node" , "src/index.js"]