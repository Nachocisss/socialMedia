import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import myImage from "../../assets/yo.jpeg";
import {
  FollowersContainer,
  FollowersNumber,
  FollowersText,
  ProfileBackground,
  ProfileCardContainer,
  ProfileDescription,
  ProfileIconsContainer,
  ProfileIconText,
  ProfileImage,
  ProfilePhoto,
  ProfileSubtitle,
  ProfileTitle,
  ProfileTitleContainer,
  ProfileTop,
} from "./ProfileCard.styles";

const FOLLOWERS_NUMBER = 653;
const FOLLOWING_NUMBER = 341;

export function ProfileCard() {
  return (
    <section>
      <ProfileBackground />
      <ProfileCardContainer>
        <ProfileTop>
          <ProfilePhoto>
            <ProfileImage src={myImage} alt={`Image of my`} />
          </ProfilePhoto>
          <ProfileTitleContainer>
            <ProfileTitle>Ignacio Cisternas Núñez </ProfileTitle>
          </ProfileTitleContainer>
          <ProfileIconsContainer>
            <ProfileSubtitle> @Nachocisss</ProfileSubtitle>
            <FaLocationDot fill="black" size={12} />
            <ProfileIconText>Santiago, Chile</ProfileIconText>
            <FaLink fill="black" size={12} />
            <ProfileIconText>
              https://ignacio-cisternas.web.app/
            </ProfileIconText>
          </ProfileIconsContainer>
          <ProfileDescription>
            Software developer with 3 years of expertise in crafting solutions
            that meet client requirements. Committed to continuous improvement
            and delivering high-value work.
          </ProfileDescription>
          <ProfileDescription>
            Recognized for effective communication, dedication to quality, and
            strong teamwork skills, all contributing to successful project
            outcomes. Eager to embrace new challenges for ongoing personal and
            professional growth.
          </ProfileDescription>
          <FollowersContainer>
            <FollowersNumber>{FOLLOWERS_NUMBER}</FollowersNumber>
            <FollowersText>Following</FollowersText>
            <FollowersNumber>{FOLLOWING_NUMBER}</FollowersNumber>
            <FollowersText>Followers</FollowersText>
          </FollowersContainer>
        </ProfileTop>
      </ProfileCardContainer>
    </section>
  );
}
