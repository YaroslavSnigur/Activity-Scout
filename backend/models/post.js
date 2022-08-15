const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uuidv4 = require("uuid4");
const postSchema = new Schema(
  {
    // Author: { type: Schema.Types.ObjectId, ref: "User" },
    Author: String,
    id: { type: String, default: uuidv4 },
    LocationName: String,
    Address: String,
    Fee: Number,
    Description: String,
    img: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
