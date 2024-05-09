FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 6033
EXPOSE 3306

RUN npm run build

CMD [ "npm", "run", "start:dev" ]