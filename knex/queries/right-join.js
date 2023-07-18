const knex = require('../../knex/config/database');

const query = knex('users as u')
  .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
  .rightJoin('profiles as p', 'u.id', 'p.user_id')
  .orderBy('p.id', 'desc');

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
