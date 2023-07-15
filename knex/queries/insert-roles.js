const knex = require('../config/database');

const data = [
  { name: 'POST' },
  { name: 'PUT' },
  { name: 'DELETE' },
  { name: 'GET' },
  { name: 'PATCH' },
];

const insert = knex('roles').insert(data);

insert
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
