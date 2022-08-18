const Post = require("../models/post");
var uuidv4 = require("uuid4");
const User = require("../models/user");

async function index(req, res) {
  try {
    const posts = await Post.find();
    const filteredPosts = await Post.find({ Tags: "1" });
    res.status(200).json({ success: true, response: posts, filteredPosts });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, response: err });
  }
}

async function create(req, res) {
  const user = await User.findById(req.body.author);
  try {
    const post = await Post.create({
      //   Author: getCurrentUser,
      //id has been generated by UUID automatically
      Author: user,
      id: uuidv4(),
      LocationName: req.body.LocationName,
      Address: req.body.address,
      Tags: req.body.tags,
      Fee: req.body.fee,
      Description: req.body.description,
      //leave blank for img
    });
    res.status(200).json({ success: true, response: post });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, response: err });
  }
}

async function filter(req, res) {
  try {
    console.log(req.query);
    const filteredPosts = await Post.find({ Tags: "1" });
    console.log("find 1------------", filteredPosts);
    res.status(200).json({ success: true, response: filteredPosts });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, response: err });
  }
}

module.exports = {
  index,
  create,
  filter,
};
