exports.up = function (knex) {
  return knex.schema.createTable('profiles', (tabela) => {
    tabela.increments('id').primary();
    tabela.text('bio');
    tabela.text('description');
    tabela.integer('user_id').unique().unsigned();
    tabela
      .foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('profiles');
};
