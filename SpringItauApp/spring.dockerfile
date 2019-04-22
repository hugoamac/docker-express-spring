FROM openjdk:8

#environment spring
ENV SPRING_PROFILES_ACTIVE=docker

#environment mysql database
ENV MYSQL_HOST="db"
ENV MYSQL_PORT="3306"
ENV MYSQL_USER="root"
ENV MYSQL_PASSWORD="db_host_2019"
ENV MYSQL_DATABASE="itauapp"

COPY target/itauapp.jar itauapp.jar

EXPOSE 8085

ENTRYPOINT ["java","-jar","itauapp.jar"]