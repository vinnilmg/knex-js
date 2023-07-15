const knex = require('../../knex/config/database');

const query = knex(knex.raw('`users` as `u`, `profiles` as `p`'))
  .select(
    'u.id as uid',
    'p.id as pid',
    'p.bio',
    'p.description',
    'u.first_name'
  )
  .where('u.id', '=', knex.raw('??', ['p.user_id']));

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
