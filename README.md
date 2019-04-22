# Docker Express e Spring

Express, spring and mysql application with docker development environment.

### Install 

Before installing the application, include the twitter API and database settings in the following files:

- ExpressItauApp/config/default.js
- SpringItauApp/src/main/resources/application.properties
- ExpressItauApp/express.dockerfile
- SpringItauApp/spring.dockerfile

```sh
cd docker-express-spring
docker-compose up -d
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
http://localhost:8080/
```
