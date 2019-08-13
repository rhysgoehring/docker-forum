/* eslint-disable func-names */

exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments().primary();
    table
      .string('username', 255)
      .unique()
      .notNullable();
    table.string('password', 25).notNullable();
    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo(knex.raw('now()'));
    table
      .timestamp('updated_at')
      .notNullable()
      .defaultTo(knex.raw('now()'));
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
