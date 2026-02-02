import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/axios";
import { useState, useRef } from "react";
import "../styles/newPost.css";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newPost) => api.post("/posts", newPost),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      setTitle("");
      setContent("");
      inputRef.current.focus();
    },
  });

  return (
    <div className="new-post-container">
      <h2 className="new-post-title">Create a New Post</h2>

      <form
        className="new-post-form"
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate({
            title,
            content,
            authorId: 1,
            likes: 0,
            likedBy: [],
            commentCount: 0,
            views: 0,
          });
        }}
      >
        <input
          ref={inputRef}
          className="new-post-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          required
        />

        <textarea
          className="new-post-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post here..."
          required
        />

        <button className="new-post-button" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}
