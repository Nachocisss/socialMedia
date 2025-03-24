import styled from "styled-components";

export const LeftMenuMyProfileContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50px;
  align-items: center;
  padding: 8px;
  display: flex;
  transition: background-color 0.3s linear;
  margin-bottom: 16px;
  &:hover {
    background-color: rgba(255, 255, 255);
    outline: 2px solid #aa01d0;
  }
`;
export const LeftMenuMyProfileButton = styled.div`
  width: 80%;
`;
export const LeftMenuMyProfiletextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;
export const LeftMenuMyProfileTitle = styled.span`
  font-size: 14px;
  color: black;
  font-weight: 700;
`;
export const LeftMenuMyProfileSubtitle = styled.span`
  color: grey;
  font-size: 12px;
`;
export const LeftMenuMyProfileGearContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 9999px;
  padding: 4px;
  border: 1px solid blue;
  &:hover {
    border: 1px solid white;
    background-color: #309ed5;
    cursor: pointer;
  }
`;
