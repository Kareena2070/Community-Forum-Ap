import { Routes, Route, Navigate } from "react-router-dom";
import Feed from "../pages/Feed";
import PostDetail from "../pages/PostDetail";
import NewPost from "../pages/NewPost";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Redirect root to /feed so '/' has a matching route */}
      <Route path="/" element={<Navigate to="/feed" replace />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/new" element={<NewPost />} />
    </Routes>
  );
}
