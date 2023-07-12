const knex = require('../config/database');

const selectBetween = knex('users')
  .select('id', 'first_name')
  .whereBetween('id', [8, 10])
  .orWhereBetween('id', [1, 3]);

console.log(selectBetween.toString());

selectBetween
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('Erro:', err.message);
  })
  .finally(() => {
    knex.destroy();
  });
