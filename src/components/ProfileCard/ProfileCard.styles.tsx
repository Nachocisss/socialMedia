import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid blue;
  padding: 16px;
  padding-right: 36px;
  position: relative;
`;
export const ProfileBackground = styled.div`
  background: conic-gradient(
    blue,
    rgb(36, 81, 217),
    rgb(0, 140, 255),
    rgb(36, 81, 217),
    blue
  );
  height: 150px;
`;
export const ProfilePhoto = styled.div`
  position: absolute;
  top: -75px;
  height: 140px;
  width: 140px;
  border-radius: 9999px;
  background-color: white;
  border: 4px solid #aa01d0;
`;
export const ProfileImage = styled.img`
  border-radius: 9999px;
  height: 140px;
  width: 140px;
`;
export const ProfileTop = styled.div`
  display: block;
  justify-content: start;
  text-align: start;
  & > h2 {
    justify-content: start;
    text-align: start;
    margin: 0px;
    color: black;
    font-size: 30px;
    margin-top: 68px;
  }
`;

export const ProfileSubtitle = styled.span`
  display: flex;
  color: gray;
  font-weight: 600;
`;
export const ProfileIconsContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
  align-items: center;
`;
export const ProfileIconText = styled.span`
  margin-right: 4px;
  color: gray;
  font-size: 12px;
`;
export const ProfileDescription = styled.span`
  color: black;
  font-size: 12px;
  font-weight: 600;
`;
export const FollowersContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;
export const FollowersNumber = styled.span`
  color: black;
  font-size: 14px;
  font-weight: 800;
`;
export const FollowersText = styled.span`
  color: grey;
  font-size: 14px;
  margin-right: 4px;
`;
