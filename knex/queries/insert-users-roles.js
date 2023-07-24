const knex = require('../config/database');

const query = knex(knex.raw('users_roles (user_id, role_id)')).insert((qb) => {
  qb.select('id')
    .from('users')
    .select((qb) => {
      qb.select('id')
        .from('roles')
        .orderByRaw('rand()')
        .limit(1)
        .as('qualquer');
    });
});

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
