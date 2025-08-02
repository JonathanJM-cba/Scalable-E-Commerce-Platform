# Etapa 1: build de TypeScript
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src
RUN npm run build


# Etapa 2: imagen final
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app/dist ./dist
COPY .env ./

EXPOSE 3000

CMD ["node", "dist/index.js"]
