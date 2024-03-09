const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    // title: { type: Schema.Types.ObjectId, ref: "User", required: true },
    // image: { type: String, required: true },
    stories: { type: String, required: true },
    // characters: [{ type: String, required: true }],
    // likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    // comments: [
    //   {
    //     text: String,
    //     postedBy: { type: Schema.Types.ObjectId, ref: "User" },
    //     createdAt: { type: Date, default: Date.now },
    //   },
    // ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);