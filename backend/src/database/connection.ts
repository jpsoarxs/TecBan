import knex from 'knex';
require('dotenv/config')

const connection = knex({
  client: 'pg',
  connection: async () => {
    return {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME,
      charset: 'utf8'
    };
  }
});

export default connection;