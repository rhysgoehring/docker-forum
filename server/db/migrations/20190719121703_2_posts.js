/* eslint-disable func-names */

exports.up = function (knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments().primary();
    table.string('title', 255).notNullable();
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
    table
      .string('username')
      .references('username')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
    table
      .string('content', 500)
      .notNullable()
      .defaultTo('User did not provide content for this post');
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
  return knex.schema.dropTable('posts');
};
