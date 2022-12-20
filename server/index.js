const Sequelize = require('sequelize');
const { Users, Posts } = require("./models")


const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routes
const userRouter = require("./routes/Users");
app.use("/users", userRouter);

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

// Posts.belongsTo(Users, {foreignKey: 'userId'})
Users.hasMany(Posts);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Preset table created successfully!');
    
  //   Preset.create({
  //   name: "ffdsfdsfgf",
  //   userId: "fsdfsaasf",
  //   title: "2s fsdfsdf",
  //   discription: "sdsadfdssk",
  // })
  // Images.create({

  //   urlId: "sfsfsdffho",
  //   // PresetId: Preset.id
  // })
  
  })
})

