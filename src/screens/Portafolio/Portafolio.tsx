import React from "react";
import Post from "../../components/Post/Post.js";
import PostMocks from "../../mocks/postMocks.js";
import { HomeContainer } from "./Portafolio.styled";

export default function PortafolioScreen() {
  const postMocks = PostMocks();
  return (
    <>
      <HomeContainer>
        {postMocks.map((p, index) => {
          return <Post key={`post${index}`} {...p} />;
        })}
      </HomeContainer>
    </>
  );
}
