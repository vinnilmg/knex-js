const knex = require('../config/database');

const select = knex('users')
  .select('id', 'first_name', 'email')
  .limit(2)
  .offset(2);

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
