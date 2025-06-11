// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import AddPostPage from './pages/AddPostPage';
import './App.css'; // Your main app CSS

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            Blog
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add-post" className="nav-links">
                Add New Post
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="/add-post" element={<AddPostPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;