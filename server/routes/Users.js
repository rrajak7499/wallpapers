const express = require("express");
const router = express.Router();
const { Users, Posts } = require("../models");
const db = require("../models");
const post = db.Post;

// router.get("/", async (req, res) => {
//     const  listOfUsers = await Users.findAll();
//     res.json(listOfUsers);
// });

router.get("/", async (req, res) => {
  const listOfUsers = await Users.findAll({
    include: [
      {
        model: Posts,
      },
    ],
  });
  res.json(listOfUsers);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await Users.findOne({
    include: Posts,
    where: { id: id },
  });
  res.json(user);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Users.create(post);
  res.json(post);
});

module.exports = router;
