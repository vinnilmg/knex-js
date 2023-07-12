const knex = require('../config/database');

const data = [
  {
    first_name: 'Maria',
    last_name: 'Helena',
    email: 'mary.hel234@mail.com',
    password_hash: '4_hash',
    salary: 1500,
  },
  {
    first_name: 'Vinicius',
    last_name: 'Lima',
    email: 'vini.lim@mail.com',
    password_hash: '2_hash',
    salary: 1100,
  },
  {
    first_name: 'Matheus',
    last_name: 'Lima',
    email: 'math.123@mail.com',
    password_hash: '3_hash',
    salary: 2500,
  },
];

const insert = knex('users').insert(data);

// Debugs
//console.log(insert.toString());
//console.log(insert.toSQL().toNative());

insert
  .then((data) => {
    console.log('Id inserido:', data);
  })
  .catch((err) => {
    console.log('Erro:', err.message);
  })
  .finally(() => {
    knex.destroy();
  });
