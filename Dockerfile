FROM node:10
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000

ENV PORT 49160
CMD ["node", "app.js"]

