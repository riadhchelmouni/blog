// frontend/src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

const API_BASE_URL = 'http://127.0.0.1:8000'; // Your Django backend URL

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/posts/`);
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts. Please try again later.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="container">Loading posts...</div>;
  }

  if (error) {
    return <div className="container error-message">{error}</div>;
  }

  return (
    <div className="container">
      <h1>All Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available yet. Why not add one?</p>
      ) : (
        <div className="post-list">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;