import React, { useState } from "react";
import { FaHashtag } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MenuCard from "../../components/LeftMenu/MenuCard/MenuCard";
import { FaRegCirclePlay } from "react-icons/fa6";
import {
  LeftMenuContainer,
  LeftMenuContentContainer,
  LeftMenuItemContainer,
  LeftMenuLogo,
  LeftMenuLogoText,
  LeftMenuOptionsContainer,
  MenuItem,
  MenuItemTitle,
} from "./LeftMenu.styled";

const options = [
  {
    title: "About Me",
    icon: <FaUserCircle size={24} />,
    screen: "./",
  },
  {
    title: "Portafolio",
    icon: <FaHome size={24} />,
    screen: "./Portafolio",
  },
  {
    title: "Chat",
    icon: <FaHashtag size={24} />,
  },
  {
    title: "Try It!",
    icon: <FaRegCirclePlay size={24} />,
  },
];

export default function LeftMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  function onclickHandler(index: number, screen: string) {
    setSelectedIndex(index);
    navigate(screen);
  }

  function optionsRender() {
    return options.map((option, index) => {
      const selected = selectedIndex === index;
      return (
        <LeftMenuItemContainer
          key={`${option.title}-LeftMenu-option`}
          onClick={() => onclickHandler(index, option.screen ?? "")}
        >
          <MenuItem selected={selected}>
            {option.icon}
            <MenuItemTitle>{option.title}</MenuItemTitle>
          </MenuItem>
        </LeftMenuItemContainer>
      );
    });
  }

  return (
    <LeftMenuContainer>
      <div>
        <LeftMenuLogo>
          <LeftMenuLogoText>NachoCisss Dev</LeftMenuLogoText>
        </LeftMenuLogo>
      </div>
      <LeftMenuContentContainer>
        <LeftMenuOptionsContainer>{optionsRender()}</LeftMenuOptionsContainer>
      </LeftMenuContentContainer>
      <div>
        <MenuCard />
      </div>
    </LeftMenuContainer>
  );
}
