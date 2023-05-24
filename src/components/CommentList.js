import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function CommentList() {
  const router = useRouter();
  const { data } = useSWR("/api/comments");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <li>
      {data.map((comment) => (
        <li key={comment._id}>
          <button type="button" onClick={() => router.push(`/${comment._id}`)}>
            {comment.name}
          </button>
        </li>
      ))}
    </li>
  );
}
