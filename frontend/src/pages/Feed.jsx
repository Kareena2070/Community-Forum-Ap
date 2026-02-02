import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/posts.api";
import PostCard from "../components/PostCard";

export default function Feed() {
  // Provide a default empty array for posts so UI doesn't crash
  // Also check isError to show a friendly message when the backend is down
  const { data: posts = [], isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading feed...</p>;
  if (isError)
    return (
      <div>
        <p>Error loading posts: {error?.message || "Unknown error"}</p>
        <p>Please make sure the backend is running (http://localhost:3001).</p>
      </div>
    );

  if (posts.length === 0) return <p>No posts yet.</p>;

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
