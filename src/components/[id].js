import Comment from "./Comment";
import dbConnect from "../../../db/connect";

/* export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const comments = await Comment.find();
    return response.status(200).json(comments);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
} */

//Alternative:

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const comment = await Comment.findById(id);

    if (!comment) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(comment);
  }
}
