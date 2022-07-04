FROM node:16
WORKDIR /usr/src/app

RUN apt-get update && apt-get upgrade -y && apt install sudo tasksel -y
COPY package*.json ./
RUN sudo npm install -g nodemon
RUN npm install

COPY . .
