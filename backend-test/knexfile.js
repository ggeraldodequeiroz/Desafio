module.exports = {
    client: "mysql2",
    connection: {
        database: "db_desafio",
        user: "root",
        password: ""
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: "knex_migrations"
    }
}