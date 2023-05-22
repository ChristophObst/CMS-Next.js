import Comment from "./Comment";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const comments = await Comment.find();
    return response.status(200).json(comments);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
