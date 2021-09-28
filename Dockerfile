
FROM node:14-alpine

RUN mkdir -p /app

WORKDIR /app

#  install app dependencies
COPY package.json ./
COPY package-lock.json ./

# python and g++ are mandatory due to Shards-Dashboard
RUN apk --no-cache --virtual build-dependencies add \
    python \
    musl-dev \
    make \
    g++ \
    && apk del build-dependencies

# add app
COPY . ./

RUN npm config set cache /app/.npm-cache --global
RUN npm install -g serverless
RUN npm install

EXPOSE 3000
EXPOSE 5000

CMD ["npm", "run", "start:dev"]