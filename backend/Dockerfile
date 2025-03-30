# Usa una imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Expone el puerto en el que correrá el backend
EXPOSE 3000

# Usa variables de entorno desde un archivo .env
ENV NODE_ENV=production

# Comando para iniciar la aplicación
CMD ["node", "index.js"]

