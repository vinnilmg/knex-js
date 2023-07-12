require('dotenv').config();

module.exports = {
  client: 'mysql2',
  connection: {
    database: process.env.DATABASE_NAME,
    user: process.env.USER_DB,
    password: process.env.PASSW_DB,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
