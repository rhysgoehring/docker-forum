const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const knex = require("../db/knex");

const router = express.Router();

/* USER SIGN UP */
router.post("/signup", async (req, res, next) => {
  let token = "";
  let user = {};
  try {
    const { username, password } = req.body;

    // Check if username is taken
    const userQuery = await knex("users").where("username", username);
    if (userQuery.length > 0) {
      return res.json({
        error: "There's already a user using that username, please select a new one",
      });
    }

    // Hash password:
    const hash = await bcrypt.hash(password, 10);

    // Create user:
    const newUser = {
      username,
      password: hash,
    };

    // Add user
    const insertUserArr = await knex("users")
      .returning("*")
      .insert(newUser);
    [user] = insertUserArr;
    delete user.password;
    // Create token
    token = await jwt.sign({ user }, process.env.JWT_KEY);
  } catch (err) {
    console.log("/users/signup error", err);
    next();
  }
  console.log("token", token);
  console.log("user", user);
  return res.json({ token, user });
});

module.exports = router;
