module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'db_projeto',
            dialect: 'mysql',
            user: 'root',
            password: 'alpooandradebruno'
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }

}