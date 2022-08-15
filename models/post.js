const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    Author: { type: Schema.Types.ObjectId, ref: "User" },
    id: String,
    LocationName: { String, required: true },
    Address: { String, required: true },
    Tags: [String],
    Fee: { Number, required: true },
    Description: { String, required: true },
    // Photos:
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
