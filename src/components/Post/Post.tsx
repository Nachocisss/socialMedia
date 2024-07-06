import React from "react";
import "./Post.css";
import { FaThumbsUp } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { UserIcon } from "../UserIcon/UserIcon";

export default function Post() {
  return (
    <section className="postContainer">
      <UserIcon />
      <div className="postContent">
        <div className="postContentTop">
          <div className="postContentTopNames">
            <span className="postUserName">John Doe</span>
            <span className="postUserSubName"> @John_Doe</span>
          </div>
          <span className="postUserSubName"> 4 de julio</span>
        </div>
        <span className="postContentDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque
          temporibus enim ipsum delectus, perspiciatis facere assumenda
          laboriosam fugiat pariatur doloremque, laudantium odio ut repudiandae
          ex eum reprehenderit autem. Tempore!
        </span>
        <div className="postContentImageContainer"></div>
        <div className="postContentBottom">
          <div>
            <FaThumbsUp fill="grey" />
            <span className="postContentBottomText">3 Likes</span>
          </div>
          <div>
            <FaComments fill="grey" />
            <span className="postContentBottomText">8 comentarios</span>
          </div>
        </div>
      </div>
    </section>
  );
}
