FROM node:10.9-alpine

COPY front/package.json /home/node/app/package.json

WORKDIR /home/node/app

ENV NODE_PATH src/

RUN npm install --loglevel warn

COPY front /home/node/app
