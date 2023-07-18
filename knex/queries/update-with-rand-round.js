const knex = require('../config/database');

const query = knex('users').update({
  salary: knex.raw('round(rand() * 10000, 2)'),
});

console.log(query.toString());

query
  .then((data) => {
    console.log('Qtd de atualizados:', data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
