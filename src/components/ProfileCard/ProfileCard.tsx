import React from "react";
import "./ProfileCard.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const FOLLOWERS_NUMBER = 653;
const FOLLOWING_NUMBER = 341;

export function ProfileCard() {
  return (
    <section>
      <div className="profileBackground"></div>
      <div className="profileCardContainer">
        <div className="profileTop">
          <div className="profilePhoto">
            <FaUserCircle fill="black" size={150} />
          </div>
          <h2>Username</h2>
          <span className="profileSubtitle"> @Usename</span>

          <div className="profileIconsContainer">
            <FaLocationDot fill="black" size={12} />
            <span className="profileIconText">Santiago, Chile</span>
            <FaLink fill="black" size={12} />
            <span className="profileIconText">www.mysite.com</span>
          </div>
          <span className="profileDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quod repudiandae vero quos eum quas tempore deleniti veritatis unde,
            aperiam odit explicabo. At culpa quaerat officiis a, fuga veniam
            dolore?
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
