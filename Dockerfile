FROM ubuntu:20.04
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . ./app
CMD node app.js