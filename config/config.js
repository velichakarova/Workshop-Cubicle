const config = {
    development:{
        PORT:5000,
        DB_CONNECTION:'mongodb://localhost/cubicle',
        SALT_ROUND:10,
        SECRET:'shyshko',
        COOKIE_NAME: 'USER_SESSION',
    },
    production:{
        PORT:80,
        DB_CONNECTION:'mongodb cloud',
        SALT_ROUND:10,
        SECRET:'shyshkokoko',
        COOKIE_NAME: 'USER_SESSION',

    }

}

module.exports = config[process.env.NODE_ENV.trim()]