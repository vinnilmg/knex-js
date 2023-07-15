const knex = require('../config/database');

// "Gambiarra" pra gerar um INSERT-SELECT

const query = knex(
  knex.raw('?? (??, ??, ??)', ['profiles', 'bio', 'description', 'user_id'])
).insert((qb) => {
  qb.from('users').select(
    knex.raw('concat("Bio de ", ??)', ['first_name']),
    knex.raw('concat("Description de ", ??, " ", ??)', [
      'first_name',
      'last_name',
    ]),
    'id'
  );
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
