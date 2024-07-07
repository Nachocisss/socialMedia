import React from "react";
import "./Post.css";
import { FaThumbsUp } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { UserIcon } from "../UserIcon/UserIcon";

interface Props {
  username: string;
  account: string;
  date: string;
  content: string;
  likes: string;
  comments: string;
  image?: string;
}

export default function Post({
  username,
  account,
  date,
  content,
  likes,
  comments,
  image,
}: Props) {
  console.log(image ?? "");
  return (
    <section className="postContainer">
      <UserIcon />
      <div className="postContent">
        <div className="postContentTop">
          <div className="postContentTopNames">
            <span className="postUserName">{username}</span>
            <span className="postUserSubName"> {account}</span>
          </div>
          <span className="postUserSubName"> {date}</span>
        </div>
        <span className="postContentDescription">{content}</span>
        {image ? <div className="postContentImageContainer"></div> : null}
        <div className="postContentBottom">
          <div>
            <FaThumbsUp fill="grey" />
            <span className="postContentBottomText">{likes} Likes</span>
          </div>
          <div>
            <FaComments fill="grey" />
            <span className="postContentBottomText">
              {comments} comentarios
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
