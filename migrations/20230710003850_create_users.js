exports.up = function (knex) {
  return knex.schema.createTable('users', (tabela) => {
    tabela.increments('id').primary();
    tabela.string('first_name', 50).notNullable();
    tabela.string('last_name', 100);
    tabela.string('email', 100).notNullable().unique();
    tabela.string('password_hash', 255).notNullable().unique();
    tabela.decimal('salary', 15, 2).notNullable();
    tabela.timestamps(true, true); // Gera created_at e updated_at
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
