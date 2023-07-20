const knex = require('../config/database');

const query = knex('users')
  .select('first_name')
  .count('id as total')
  .groupBy('first_name')
  .orderBy('total', 'desc');

console.log(query.toString());

query
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
