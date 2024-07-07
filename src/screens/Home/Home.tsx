import React from "react";
import "./Home.css";
import Post from "../../components/Post/Post";
import postsData from "../../mocks/postMocks.json";
export default function HomeScreen() {
  return (
    <div className="homeContainer">
      {postsData.map((p, index) => {
        return <Post key={`post${index}`} {...p} />;
      })}
    </div>
  );
}
