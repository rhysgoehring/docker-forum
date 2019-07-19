/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(() => knex('users').insert([
      {
        username: 'rhysgoehring',
        password: 'password',
      },
      {
        username: 'user2',
        password: 'password',
      },
    ]))
    .then(() => knex.raw("select setval('users_id_seq', (select max(id) from users));"));
};
