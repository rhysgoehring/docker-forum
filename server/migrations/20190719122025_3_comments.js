/* eslint-disable func-names */


exports.up = function (knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments().primary();
    table.string('commenter').references('username').inTable('users').notNullable();
    table.integer('post_id').references('id').inTable('posts').notNullable();
    table.string('body', 255).notNullable().defaultTo('No body provided for comment');
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('comments');
};
