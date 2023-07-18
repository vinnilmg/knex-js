const knex = require('../config/database');

const query = knex('users as u')
  .join('profiles as p', 'p.user_id', 'u.id')
  .update({
    'p.bio': knex.raw('CONCAT(p.bio, " Atualizado..")'),
  })
  .where('u.first_name', '=', 'Alpheu');

console.log(query.toString());

query
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
