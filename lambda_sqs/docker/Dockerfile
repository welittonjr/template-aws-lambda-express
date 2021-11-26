
FROM node:16-alpine

LABEL maintainer="wellington Junior <wndrj7@gmail.com>"
LABEL contributors=""

RUN mkdir -p /app

WORKDIR /app

COPY package.json ./

COPY . ./

RUN npm install

EXPOSE 3000
EXPOSE 5000

CMD ["npm", "run", "start:dev"]
