import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  TopMenuContainer,
  TopMenuContentContainer,
  TopMenuItemContainer,
  TopMenuLogo,
  TopMenuLogoText,
  TopMenuOptionsContainer,
  MenuItem,
  MenuItemTitle,
} from "./TopMenu.styled";

const options = [
  {
    title: "About Me",
    icon: <FaUserCircle size={24} />,
    screen: "./",
  },
  {
    title: "Portfolio",
    icon: <FaUserCircle size={24} />,
    screen: "./portafolio",
  },
];

export default function TopMenu() {
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
        <TopMenuItemContainer
          key={`${option.title}-TopMenu-option`}
          onClick={() => onclickHandler(index, option.screen ?? "")}
        >
          <MenuItem selected={selected}>
            {option.icon}
            <MenuItemTitle>{option.title}</MenuItemTitle>
          </MenuItem>
        </TopMenuItemContainer>
      );
    });
  }

  return (
    <TopMenuContainer>
      <TopMenuLogo>
        <TopMenuLogoText>NachoCisss Dev</TopMenuLogoText>
      </TopMenuLogo>
      <TopMenuContentContainer>
        <TopMenuOptionsContainer>{optionsRender()}</TopMenuOptionsContainer>
      </TopMenuContentContainer>
    </TopMenuContainer>
  );
}
