module.exports = {

    server: {

        hostname: process.env.HOSTNAME || "0.0.0.0",
        port: process.env.PORT || 8080
    },
    database: {

        connectionLimit: 10,
        host: process.env.MYSQL_HOST || "0.0.0.0",
        port: process.env.MYSQL_PORT || 3306,
        user: process.env.MYSQL_USER || "root",
        password: process.env.MYSQL_PASSWORD || "",
        database: process.env.MYSQL_DATABASE || "itauapp",
        charset: process.env.MYSQL_CHARSET || "utf8mb4"
    },
    twitter: {

        consumer_key: "",
        consumer_secret: "",
        access_token: "",
        access_token_secret: "",
        timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
        strictSSL: false,     // optional - requires SSL certificates to be valid.
    },
};
