const knex = require('../../knex/config/database');

const query = knex.raw(
  `
  delete p, u from users u
  inner join profiles p
  on p.user_id = u.id
  where u.first_name = ? and p.bio like ?;
`,
  ['Vini', '%Vini']
);

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
