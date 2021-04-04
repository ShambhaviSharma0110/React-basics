import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Post from "./Components/Post";
import Paginate from "./Components/Paginate";

function App() {
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsperPg] = useState(10);

  //request
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
const indexOfLastPost = currentPage * postsperPg;
const indexOfFirstPost = indexOfLastPost - postsperPg;
const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost)

const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="conatainer mt-5">
        <h1 className="text-primary mb-3">My Blog</h1>
        <Post post={currentPosts} loading={loading} />
        <Paginate
        postsperPg={postsperPg}
        totalPosts = {post.length}
        paginate ={paginate}
        />
      </div>
    </>
  );
}

export default App;
