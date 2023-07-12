exports.up = function (knex) {
  return knex.schema.createTable('users_roles', (tabela) => {
    tabela.integer('user_id').unsigned();
    tabela
      .foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tabela.integer('role_id').unsigned();
    tabela
      .foreign('role_id')
      .references('roles.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tabela.primary(['user_id', 'role_id']); // PK composta
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users_roles');
};
