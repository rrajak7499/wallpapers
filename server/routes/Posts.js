const express = require("express");
const router = express.Router();
const { Posts } = require("../models");



router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});

router.get("/", async (req, res) => {
  const userId = req.params.userId;
  const post = await Posts.findAll({
    where: { UserId: userId, ImageId: imageId },
  });
  res.json(post);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});


module.exports = router;
