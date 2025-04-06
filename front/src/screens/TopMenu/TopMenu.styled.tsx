import styled from "styled-components";
export const TopMenuContainer = styled.div`
  display: flex;
  padding: 0px 16px;
  flex: 1;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const TopMenuLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TopMenuLogoText = styled.h1`
  margin: 20px;
  font-size: 30px;

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
`;
export const TopMenuItemContainer = styled.div`
  padding: 12px;
  align-items: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.103);
    border-radius: 16px;
    cursor: pointer;
  }
`;

export const Circle = styled.div`
  height: 45px;
  width: 45px;
  background-color: #aa01d0;
  border-radius: 100%;
`;
export const MenuItem = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: start;
  align-items: center;
  opacity: ${({ selected }) => (selected ? 1 : 0.7)};
  gap: 8px;
`;
export const MenuItemSelected = styled.div`
  opacity: 1;
`;
export const MenuItemTitle = styled.h2`
  font-size: 30px;
  margin: 4px;
`;
