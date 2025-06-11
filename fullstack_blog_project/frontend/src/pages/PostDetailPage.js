// frontend/src/pages/PostDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000'; 

function PostDetailPage() {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/posts/${id}/`);
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to load post. It might not exist.");
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]); // Re-fetch when ID changes

  if (loading) {
    return <div className="container">Loading post...</div>;
  }

  if (error) {
    return <div className="container error-message">{error}</div>;
  }

  if (!post) {
    return <div className="container">Post not found.</div>;
  }

  return (
    <div className="container post-detail">
      <h1>{post.title}</h1>
      {post.image && (
        <img src={`${API_BASE_URL}/media/${post.image}`} alt={post.title} />
      )}
      <p>{post.content}</p>
      <p><em>Created: {new Date(post.created_at).toLocaleString()}</em></p>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
}

export default PostDetailPage;
