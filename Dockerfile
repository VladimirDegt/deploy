FROM node:22-alpine as build

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist

COPY package*.json .

RUN npm ci --omit=dev

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist"]
