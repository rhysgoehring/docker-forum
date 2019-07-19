/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('posts')
    .del()
    .then(() => knex('posts').insert([
      {
        title: 'First Post',
        user_id: 1,
        username: 'rhysgoehring',
        content: 'This is the first post ever by user rhysgoehring.',
      },
      {
        title: 'Second Post',
        user_id: 2,
        username: 'user2',
        content: 'This is the second post ever by user2',
      },
    ]))
    .then(() => knex.raw("select setval('posts_id_seq', (select max(id) from posts));"));
};
