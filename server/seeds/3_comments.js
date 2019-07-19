/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('comments')
    .del()
    .then(() => knex('comments').insert([
      {
        commenter: 'rhysgoehring',
        post_id: 1,
        body: 'Is anyone else ever going to join this site and comment on this?',
      },
      {
        commenter: 'user2',
        post_id: 1,
        body: "I'm looking into it",
      },
      {
        commenter: 'rhysgoehring',
        post_id: 2,
        body: 'Nice post.',
      },
      {
        commenter: 'user2',
        post_id: 2,
        body: 'Thanks rhysgoehring',
      },
    ]))
    .then(() => knex.raw("select setval('comments_id_seq', (select max(id) from comments));"));
};
