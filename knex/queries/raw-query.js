const knex = require('../config/database');

const query = `
INSERT INTO users(first_name, last_name, email, password_hash, salary) 
VALUES ('teste1', 'teste2', 'myemail4@email.com', '123dasdsad', 10000.0);
`;

// query RAW
knex
  .raw(query)
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    knex.destroy();
  });
