FROM node:8

#environment web
ENV HOST="localhost"
ENV PORT=8080

#environment mysql database
ENV MYSQL_HOST="db"
ENV MYSQL_PORT="3306"
ENV MYSQL_USER="root"
ENV MYSQL_PASSWORD="db_host_2019"
ENV MYSQL_DATABASE="itauapp"
ENV MYSQL_CHARSET="utf8mb4"

#set wokspace
WORKDIR /usr/www

COPY package*.json ./

RUN npm install && npm list --depth=0

COPY . .

EXPOSE 8080

CMD ["npm","start"]