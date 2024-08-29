import React from "react";
import "./Portafolio.css";
import Post from "../../components/Post/Post.js";
import PostMocks from "../../mocks/postMocks.js";
import Carousel from "../../components/Carrousel/Carrousel.js";

export default function PortafolioScreen() {
  const postMocks = PostMocks();

  return (
    <>
      <div className="homeContainer">
        {postMocks.map((p, index) => {
          return <Post key={`post${index}`} {...p} />;
        })}
      </div>
    </>
  );
}
