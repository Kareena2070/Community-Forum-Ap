import { Link } from "react-router-dom";
import "../styles/post.css";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-content">
        {post.content.slice(0, 140)}...
      </p>

      <div className="post-meta">
        <span>❤️ {post.likes}</span>
        <span>💬 {post.commentCount}</span>
        <Link to={`/posts/${post.id}`}>Read more →</Link>
      </div>
    </div>
  );
}
