FROM node:10-alpine AS alpine

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install --silent

COPY . .

CMD [ "npm", "start" ]
