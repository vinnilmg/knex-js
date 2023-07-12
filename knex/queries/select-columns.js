const knex = require('../config/database');

// Select com campos específicos e com alias
const select = knex('users as u').select(
  'u.email as uemail',
  'u.first_name as ufirst_name',
  'u.id as uid'
);

select
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  })
  .catch((err) => {
    console.log('Erro:', err.message);
  })
  .finally(() => {
    knex.destroy();
  });
