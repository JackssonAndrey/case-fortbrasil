FROM node:14.16.0

WORKDIR /usr/app

COPY package.json ./

RUN yarn 

COPY . . 

EXPOSE 3333

CMD ["yarn", "dev"]