const knex = require('../config/database');

const query = `
INSERT INTO users(first_name, last_name, email, password_hash, salary) 
VALUES 
('Vini', 'Gomes', 'myemail5@email.com', '123_hash', 1200.0),
('Alpheu', 'TOP', 'myemail10@email.com', '456_hash', 5400.0),
('Daniboy', 'Lima', 'myemail11@email.com', '789_hash', 1122.0);
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
