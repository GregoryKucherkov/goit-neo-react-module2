import { useState, useEffect } from "react";
import "./App.css";
import Paginator from "./Paginator/Paginator";
import Post from "./Post/Post.jsx";
import posts from "../posts.json";

export default function App() {
  const [curPost, setCurPost] = useState(1);

  const handlePrev = () => {
    if (curPost === 1) return;

    setCurPost(curPost - 1);
  };

  const handleNext = () => {
    if (curPost === posts.length) return;
    setCurPost(curPost + 1);
  };

  // get from local storage, async option
  useEffect(() => {
    const page = window.localStorage.getItem("curPost");
    if (page !== null) {
      setCurPost(JSON.parse(page));
    }
  }, []);

  //save to local storage
  useEffect(() => {
    window.localStorage.setItem("curPost", curPost);
  }, [curPost]);

  return (
    <div>
      <Paginator prev={handlePrev} next={handleNext}>
        {curPost} / {posts.length}
      </Paginator>
      <Post post={posts[curPost - 1]} />
    </div>
  );
}
