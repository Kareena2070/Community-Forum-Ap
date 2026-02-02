import { api } from "./axios";

// Fetch all posts
export async function fetchPosts() {
	const res = await api.get("/posts");
	// json-server returns an array at res.data
	return res.data;
}

// Fetch single post by id (optional helper)
export async function fetchPostById(id) {
	const res = await api.get(`/posts/${id}`);
	return res.data;
}

export default { fetchPosts, fetchPostById };
