import React from 'react';

const Home = () => {
  return (
    <div className="page-container">
      <h1>Welcome to Blogverse</h1>
      <p>Discover amazing stories and insights across various topics.</p>
      <div className="featured-posts">
        <div className="post-card">
          <h2>Featured Post 1</h2>
          <p>This is a sample featured post to test rendering.</p>
        </div>
        <div className="post-card">
          <h2>Featured Post 2</h2>
          <p>Another sample post to ensure everything is working.</p>
        </div>
      </div>
    </div>
  );
};

export default Home; 