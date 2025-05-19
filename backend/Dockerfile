# Usa una imagen ligera de Node.js
FROM node:18-alpine

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copia archivos package.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto donde corre el backend
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
