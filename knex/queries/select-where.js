const knex = require('../config/database');

const select = knex('users')
  .select('id', 'first_name', 'last_name')
  .where({ first_name: 'Matheus' })
  .andWhere({ last_name: 'Helena' })
  .orWhere('first_name', '=', 'Maria');

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
