import React from "react";
import { UserIcon } from "../../../components/UserIcon/UserIcon";
import { FaGear } from "react-icons/fa6";
import "./MenuCard.css";
function MenuCard() {
  return (
    <div className="leftMenuMyProfileContainer">
      <UserIcon />
      <div className="leftMenuMyProfiletextContainer">
        <span className="leftMenuMyProfileTitle">Username</span>
        <span className="leftMenuMyProfileSubtitle">@Username43</span>
      </div>
      <div className="leftMenuMyProfileGearContainer">
        <FaGear fill="black" size={25} />
      </div>
    </div>
  );
}

export default MenuCard;
