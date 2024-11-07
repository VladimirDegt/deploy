FROM node:22-alpine as build

ENV NODE_ENV production

WORKDIR /app

COPY package*.json .

RUN npm ci --only=production

COPY --chown=node:node . .

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist

COPY package*.json .

RUN npm ci --omit=dev

RUN npm install -g serve

EXPOSE 3000

USER node

CMD ["serve", "-s", "dist"]
