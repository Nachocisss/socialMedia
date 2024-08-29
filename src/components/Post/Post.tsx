import React from "react";
import "./Post.css";
import { FaThumbsUp } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { UserIcon } from "../UserIcon/UserIcon";
import {
  PostContainer,
  PostContent,
  PostContentBottomText,
  PostContentDescription,
  PostContentImageContainer,
  PostContentTopNames,
  PostImage,
  PostUserName,
  PostUserSubName,
} from "./Post.styles";

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
  return (
    <PostContainer>
      <UserIcon />
      <PostContent>
        <div>
          <PostContentTopNames>
            <PostUserName>{username}</PostUserName>
            <PostUserSubName> {account}</PostUserSubName>
          </PostContentTopNames>
          <PostUserSubName> {date}</PostUserSubName>
        </div>
        <PostContentDescription>{content}</PostContentDescription>
        {image ? (
          <PostContentImageContainer>
            <PostImage
              src={image}
              alt={`Image of post made by ${username} on ${date}`}
            />
          </PostContentImageContainer>
        ) : null}
        <div className="postContentBottom">
          <div>
            <FaThumbsUp fill="grey" />
            <PostContentBottomText>{likes} Images</PostContentBottomText>
          </div>
          <div>
            <FaComments fill="grey" />
            <PostContentBottomText>
              {comments} comentarios
            </PostContentBottomText>
          </div>
        </div>
      </PostContent>
    </PostContainer>
  );
}
