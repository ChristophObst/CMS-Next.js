import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  /*  reviews: { type: [Schema.Types.ObjectId], ref: "Review" }, */
});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
