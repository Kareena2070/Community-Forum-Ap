import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./styles/layout.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="navbar">
          <h2>Community Forum</h2>
          <div>
            <a href="/feed">Feed</a>
            <a href="/new">New Post</a>
          </div>
        </nav>

        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
