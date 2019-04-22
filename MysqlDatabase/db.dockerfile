FROM mysql:5

ENV MYSQL_ROOT_PASSWORD="db_host_2019"

COPY sql/migration-database.sql docker-entrypoint-initdb.d

