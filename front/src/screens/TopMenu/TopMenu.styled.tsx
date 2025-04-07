import styled from "styled-components";

export const TopMenuContainer = styled.div<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.isScrolled ? "60px" : "100px")};
  background-color: ${(props) =>
    props.isScrolled ? "#121212" : "rgba(18, 18, 18, 0.8)"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: ${(props) =>
    props.isScrolled ? "0 2px 5px rgba(0, 0, 0, 0.3)" : "none"};
  transition: all 0.3s ease;
  z-index: 1000;
`;

export const TopMenuLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopMenuLogoText = styled.h1`
  margin: 20px;
  font-size: 24px;
  background: linear-gradient(-45deg, #ae0bd3, gold);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const TopMenuContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopMenuOptionsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const TopMenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const MenuItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ selected }) => (selected ? "#FFD700" : "white")};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  transition: color 0.3s ease;

  svg {
    font-size: 20px;
    color: ${({ selected }) => (selected ? "#FFD700" : "white")};
    transition: color 0.3s ease;
  }
`;

export const MenuItemTitle = styled.span`
  font-size: 16px;
`;
