const knex = require('../config/database');

const select = knex('users')
  .select('id', 'first_name')
  .whereIn('id', [1, 8, 10]);

console.log(select.toString());

select
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('Erro:', err.message);
  })
  .finally(() => {
    knex.destroy();
  });
