FROM node:13.6.0-alpine as server

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /usr/src/app
COPY ./api/package.json .

RUN yarn install --production

COPY api/src src
COPY api/api-db.json api-db.json

CMD ["yarn", "start"]
