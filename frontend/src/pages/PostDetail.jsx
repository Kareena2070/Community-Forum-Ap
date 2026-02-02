// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { api } from "../api/axios";
// import { lazy, Suspense } from "react";

// const CommentList = lazy(() => import("../components/CommentList"));

// export default function PostDetail() {
//   const { id } = useParams();

//   const { data: post, isLoading } = useQuery({
//     queryKey: ["post", id],
//     queryFn: async () => {
//       const res = await api.get(`/posts/${id}`);
//       return res.data;
//     },
//   });

//   if (isLoading) return <p>Loading post...</p>;

//   return (
//     <>
//       <h1>{post.title}</h1>
//       <p>{post.content}</p>

//       <Suspense fallback={<p>Loading comments...</p>}>
//         <CommentList postId={id} />
//       </Suspense>
//     </>
//   );
// }

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";
import { lazy, Suspense } from "react";

const CommentList = lazy(() => import("../components/CommentList"));

export default function PostDetail() {
  const { id } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const res = await api.get(`/posts/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <p>Loading post...</p>;

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <Suspense fallback={<p>Loading comments...</p>}>
        <CommentList postId={id} />
      </Suspense>
    </>
  );
}
