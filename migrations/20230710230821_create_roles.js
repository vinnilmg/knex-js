exports.up = function (knex) {
  return knex.schema.createTable('roles', (tabela) => {
    tabela.increments('id').primary();
    tabela.string('name', 150).notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('roles');
};
