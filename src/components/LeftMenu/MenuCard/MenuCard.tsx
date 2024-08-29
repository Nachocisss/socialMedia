import React from "react";
import { UserIcon } from "../../../components/UserIcon/UserIcon";
import { FaGear } from "react-icons/fa6";
import {
  LeftMenuMyProfileContainer,
  LeftMenuMyProfiletextContainer,
  LeftMenuMyProfileTitle,
  LeftMenuMyProfileSubtitle,
  LeftMenuMyProfileGearContainer,
} from "./MenuCard.styles";

function MenuCard() {
  return (
    <LeftMenuMyProfileContainer>
      <UserIcon />
      <LeftMenuMyProfiletextContainer>
        <LeftMenuMyProfileTitle>Username</LeftMenuMyProfileTitle>
        <LeftMenuMyProfileSubtitle>@Username43</LeftMenuMyProfileSubtitle>
      </LeftMenuMyProfiletextContainer>
      <LeftMenuMyProfileGearContainer>
        <FaGear fill="black" size={25} />
      </LeftMenuMyProfileGearContainer>
    </LeftMenuMyProfileContainer>
  );
}

export default MenuCard;
