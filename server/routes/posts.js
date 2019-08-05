const express = require('express');

const router = express.Router();
const knex = require('../knex.js');

router.get('/', async (req, res) => {
  try {
    const posts = await knex('posts').returning('*');
    return res.json(posts);
  } catch (err) {
    console.log('get posts error', err);
    return err;
  }
});

module.exports = router;
