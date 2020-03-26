
exports.up = function (knex) {
  return knex.schema.createTable('lies', function (table) {
    table.increments();
    table.string('resumo').notNullable();
    table.string('descricao').notNullable();
    table.string('pontos').defaultTo(0)
    table.string('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('lies')
};
