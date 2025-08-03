# ----------- FASE 1: BUILDER (compilación de TypeScript) -----------
FROM node:20 as builder

WORKDIR /app

# Copiamos solo lo necesario para instalar dependencias
COPY ./package*.json ./
RUN npm install

# Copiamos el resto del código
COPY tsconfig.json ./
COPY src ./src

# Compilamos TypeScript
RUN npm run build


#Imagen final
FROM node:20-alpine

#Carpeta raíz
WORKDIR /app

COPY ./package*.json ./
RUN npm install --only=production

COPY --from=builder /app/dist /dist
COPY env ./

EXPOSE 3001

CMD [ "npm", "start" ]
