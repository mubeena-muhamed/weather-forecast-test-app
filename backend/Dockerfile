FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE $VUE_APP_BACKEND_API_PORT

CMD ["yarn", "serve"]
