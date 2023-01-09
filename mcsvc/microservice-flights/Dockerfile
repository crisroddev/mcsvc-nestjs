FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

# Copy dits folder into a src folder
COPY ./dist ./src

CMD ["node", "src/main.js"]