const knex = require('../config/database');

const updateSQL = knex.from('users').where('id', '=', 22);
console.log(updateSQL.toString());

updateSQL
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

updateSQL.update({
  first_name: 'Vinicius',
  last_name: 'de Lima Gomes',
  salary: 5643.22,
  email: 'viniboy.email@mail.com',
});

console.log(updateSQL.toString());

updateSQL
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
