import React from "react";
import "./Post.css";
import { FaUserCircle } from "react-icons/fa";

export default function Post() {
  return (
    <section className="postContainer">
      <div className="postUserToken">
        <FaUserCircle size={50} fill="black" />
      </div>
      <p className=""> post</p>
    </section>
  );
}
