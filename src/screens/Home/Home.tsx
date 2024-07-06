import React from "react";
import "./Home.css";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import Post from "../../components/Post/Post";
export default function HomeScreen() {
  return (
    <div className="homeContainer">
      <ProfileCard />
      <Post />
      <Post />
    </div>
  );
}
