import React from "react";
import "./ProfileCard.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import myImage from "../../assets/yo.jpeg";

const FOLLOWERS_NUMBER = 653;
const FOLLOWING_NUMBER = 341;

export function ProfileCard() {
  return (
    <section>
      <div className="profileBackground"></div>
      <div className="profileCardContainer">
        <div className="profileTop">
          <div className="profilePhoto">
            <img className="profileImage" src={myImage} alt={`Image of my`} />
          </div>
          <h2>Ignacio Cisternas</h2>
          <span className="profileSubtitle"> @Nachocisss</span>
          <div className="profileIconsContainer">
            <FaLocationDot fill="black" size={12} />
            <span className="profileIconText">Santiago, Chile</span>
            <FaLink fill="black" size={12} />
            <span className="profileIconText">
              https://ignacio-cisternas.web.app/
            </span>
          </div>
          <span className="profileDescription">
            Software developer with 3 years of expertise in crafting solutions
            that meet client requirements. Committed to continuous improvement
            and delivering high-value work. Recognized for effective
            communication, dedication to quality, and strong teamwork skills,
            all contributing to successful project outcomes. Eager to embrace
            new challenges for ongoing personal and professional growth.
          </span>
          <div className="followersContainer">
            <span className="followersNumber">{FOLLOWERS_NUMBER}</span>
            <span className="followersText">Following</span>
            <span className="followersNumber">{FOLLOWING_NUMBER}</span>
            <span className="followersText">Followers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
