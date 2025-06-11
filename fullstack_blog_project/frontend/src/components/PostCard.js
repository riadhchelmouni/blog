// frontend/src/components/PostCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'http://127.0.0.1:8000'; // <--- ENSURE THIS MATCHES YOUR DJANGO SERVER URL

function PostCard({ post }) {
  const summary = post.content.substring(0, 100) + (post.content.length > 100 ? '...' : '');

  return (
    <Link to={`/posts/${post.id}`} className="post-card">
      {post.image && (
        // Correctly concatenate base URL with the image path from Django
        <img src={post.image} alt={post.title} />
      )}
      <h3>{post.title}</h3>
      <p>{summary}</p>
    </Link>
  );
}

export default PostCard;