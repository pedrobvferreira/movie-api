FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Expose the port the app runs on
EXPOSE 3000
EXPOSE 3308
EXPOSE 8080

RUN npm run build

CMD [ "npm", "run", "start:dev" ]