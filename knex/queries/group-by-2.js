const knex = require('../config/database');

const query = knex('users as u')
  .select('u.first_name')
  .count('u.id as total')
  .leftJoin('profiles as p', 'p.user_id', 'u.id')
  .whereIn('u.id', [1, 6, 8, 10, 22])
  .groupBy('u.first_name')
  .orderBy('total', 'desc')
  .limit(5);

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
