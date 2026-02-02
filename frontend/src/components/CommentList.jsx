// import "../styles/comments.css";

// export default function CommentList({ postId }) {
//   // query logic same as before

//   return (
//     <div className="comments">
//       <h3>Comments</h3>
//       {comments.map((c) => (
//         <div key={c.id} className="comment">
//           <p className="comment-author">
//             {c.author.displayName}
//           </p>
//           <p className="comment-text">{c.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";
import "../styles/comments.css";

export default function CommentList({ postId }) {
  const {
    data: comments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const res = await api.get(`/comments?postId=${postId}`);
      return res.data;
    },
  });

  if (isLoading) return <p>Loading comments...</p>;
  if (isError) return <p>Failed to load comments 😢</p>;

  return (
    <div className="comments">
      <h3>Comments</h3>

      {comments.length === 0 && <p>No comments yet</p>}

      {comments.map((c) => (
        <div key={c.id} className="comment">
          <p className="comment-author">
            {c.author?.displayName || "Anonymous"}
          </p>
          <p className="comment-text">{c.content}</p>
          <small>❤️ {c.likes}</small>
        </div>
      ))}
    </div>
  );
}
