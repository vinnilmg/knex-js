const knex = require('../../knex/config/database');

const ID_DELETE = 11;

const selectSQL = knex('users').where({ id: ID_DELETE });
const deleteSQL = knex('users').delete().where({ id: ID_DELETE });

console.log(selectSQL.toString());
console.log(deleteSQL.toString());

selectSQL
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

deleteSQL
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
