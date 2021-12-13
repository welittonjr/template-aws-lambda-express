
FROM node:16-alpine

LABEL maintainer=""
LABEL contributors=""

RUN mkdir -p /app

WORKDIR /app

COPY package.json ./

COPY . ./

EXPOSE 3000
EXPOSE 5000

CMD ["sleep", "infinity"]
