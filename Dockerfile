FROM node:7.3.0
ADD . /code
WORKDIR /code
RUN npm install
