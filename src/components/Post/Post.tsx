import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { UserIcon } from "../UserIcon/UserIcon";
import Carousel from "../Carrousel/Carrousel";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import {
  LinkContainer,
  LinkText,
  PostContainer,
  PostContent,
  PostContentBottom,
  PostContentBottomText,
  PostContentDescription,
  PostContentImageContainer,
  PostContentTopNames,
  PostUserName,
  PostUserSubName,
} from "./Post.styles";

interface Props {
  username: string;
  account: string;
  date: string;
  content: string;
  likes: string;
  link?: string;
  comments: string;
  image?: [string];
}

export default function Post({
  username,
  account,
  date,
  content,
  likes,
  link,
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
        {link ? (
          <LinkContainer>
            <Link to={link}>
              <FaGithub size={20} fill="black" />
              <LinkText>Mira Aquí!</LinkText>
            </Link>
          </LinkContainer>
        ) : null}
        {image ? (
          <PostContentImageContainer>
            <Carousel images={image} />
          </PostContentImageContainer>
        ) : null}
        <PostContentBottom>
          <div>
            <FaThumbsUp fill="grey" />
            <PostContentBottomText>{likes} Likes</PostContentBottomText>
          </div>
          <div>
            <FaComments fill="grey" />
            <PostContentBottomText>
              {comments} comentarios
            </PostContentBottomText>
          </div>
        </PostContentBottom>
      </PostContent>
    </PostContainer>
  );
}
