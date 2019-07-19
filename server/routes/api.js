const express = require('express');

const router = express.Router();
const index = require('./index');
const users = require('./users');
const posts = require('./posts');

router.use('/', index);
router.use('/users', users);
router.use('/posts', posts);

module.exports = router;
