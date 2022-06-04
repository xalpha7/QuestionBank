module.exports = {
    HOST: "localhost",
    USER: "anurag",
    PASSWORD: "anurag",
    DB: "questionBank",
    dialect: "mariadb",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}