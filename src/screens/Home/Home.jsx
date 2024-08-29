import React from "react";
import "./Home.css";
import Post from "../../components/Post/Post";
import PostMocks from "../../mocks/postMocks.jsx";

export default function HomeScreen() {
  const postMocks = PostMocks();
  return (
    <div className="homeContainer">
      {postMocks.map((p, index) => {
        return <Post key={`post${index}`} {...p} />;
      })}
    </div>
  );
}
