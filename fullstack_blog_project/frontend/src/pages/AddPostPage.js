// frontend/src/pages/AddPostPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const API_BASE_URL = 'http://127.0.0.1:8000'; 

function AddPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); 
  const [message, setMessage] = useState(''); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const formData = new FormData(); 
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.post(`${API_BASE_URL}/api/posts/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      });
      setMessage('Post added successfully!');
      setTitle('');
      setContent('');
      setImage(null); // Clear image input
      // Optionally navigate to homepage or new post's detail page
      navigate('/'); // Navigate to home page after successful submission
    } catch (err) {
      console.error('Error adding post:', err);
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error data:', err.response.data);
        console.error('Error status:', err.response.status);
        console.error('Error headers:', err.response.headers);
        setMessage(`Error: ${err.response.data.detail || JSON.stringify(err.response.data)}`);
      } else if (err.request) {
        // The request was made but no response was received
        console.error('Error request:', err.request);
        setMessage('Error: No response from server. Check if backend is running.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', err.message);
        setMessage(`Error: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Add New Post</h1>
      {message && <p className={message.startsWith('Error') ? 'error-message' : 'success-message'}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            disabled={loading}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image (Optional):</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])} 
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding Post...' : 'Add Post'}
        </button>
      </form>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
}

export default AddPostPage;
