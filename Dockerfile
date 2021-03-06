FROM hypriot/rpi-node:latest

MAINTAINER Jordan Crawford <jordan@crawford.kiwi>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Setup packages
COPY package.json /usr/src/app/
RUN npm install

# Setup the app
COPY . /usr/src/app

ENTRYPOINT ["node", "client.js"]
EXPOSE 3000
