/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex("posts")
    .del()
    .then(() => knex("posts").insert([
      {
        title: "First Post",
        user_id: 1,
        username: "rhysgoehring",
        content: "This is the first post ever by user rhysgoehring.",
      },
      {
        title: "Second Post",
        user_id: 2,
        username: "user",
        content: "This is the second post ever by user",
      },
    ]))
    .then(() => knex.raw("select setval('posts_id_seq', (select max(id) from posts));"));
};
