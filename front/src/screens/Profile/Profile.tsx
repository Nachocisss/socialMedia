import React from "react";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import Post from "../../components/Post/Post";
import { ProfileContainer } from "./Profile.styled";

export default function ProfileScreen() {
  const postContentLorem =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor minima reiciendis, repellendus modi sequi sit ullam impedit laborum quod, ab corrupti itaque sapiente cupiditate necessitatibus nulla eos! Illo, blanditiis minus!";

  const postsData = [
    {
      username: "Username",
      account: "@Username",
      date: "4 de julio",
      content: "Lorem Lorem",
      likes: "4",
      comments: "2",
    },
    {
      username: "Username",
      account: "@Username",
      date: "1 de julio",
      content: postContentLorem,
      likes: "19",
      comments: "20",
    },
    {
      username: "Username",
      account: "@Username",
      date: "1 de julio",
      content: postContentLorem,
      likes: "19",
      comments: "20",
    },
  ];
  return (
    <ProfileContainer>
      <ProfileCard />
      {postsData.map((p, index) => {
        return <Post key={`post${index}`} {...p} />;
      })}
    </ProfileContainer>
  );
}
