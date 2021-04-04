import React from "react";

const Post = (post, loading) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
    <ul className="list-group mb-4">
      {post.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
    </div>
  );
  
};

export default Post;
