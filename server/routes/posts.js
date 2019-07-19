const express = require('express');

const router = express.Router();
const knex = require('../knex.js');

router.get('/', async (req, res) => {
  const posts = await knex('posts').returning('*');
  return res.json(posts);
});

module.exports = router;
