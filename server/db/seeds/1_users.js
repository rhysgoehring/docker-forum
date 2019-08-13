/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(() => knex("users").insert([
      {
        username: "rhysgoehring",
        password: "$2a$10$WtDiFdi94o87pTte1pluX.TTeDZ50p3.VioeUIQsz9mBQsXEECM.K",
      },
      {
        username: "user",
        password: "password",
      },
    ]))
    .then(() => knex.raw("select setval('users_id_seq', (select max(id) from users));"));
};
