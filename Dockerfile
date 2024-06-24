FROM cypress/base:18.16.0

WORKDIR /app

COPY package*.json  .
COPY cypress cypress
COPY cypress.config.ts .

RUN npm install

CMD ["npm", "run", "cy:run"]


