const knex = require('../config/database');

const query = knex('users')
  .max('salary as max_salary')
  .min('salary as min_salary')
  .avg('salary as avg_salary')
  .sum('salary as sum_salary')
  .count('salary as count_salary');

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
