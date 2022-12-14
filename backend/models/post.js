const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uuidv4 = require("uuid4");
const postSchema = new Schema(
  {
    Author: { type: Schema.Types.ObjectId, ref: "User" },
    // Author: String,
    id: { type: String, default: uuidv4 },
    LocationName: { type: String, required: true },
    Address: String,
    Tags: [String],
    Fee: Number,
    Description: String,
    img: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
