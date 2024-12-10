# Usar imagen oficial de Nginx
FROM nginx:alpine

# Copiar el archivo index.html al contenedor
COPY index.html /usr/share/nginx/html/index.html

# Exponer el puerto 86 para acceder a la web
EXPOSE 86
