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
  top: -140px;
  height: 200px;
  width: 200px;
  border-radius: 9999px;
  background-color: white;
  border: 4px solid #aa01d0;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.8);
`;
export const ProfileImage = styled.img`
  border-radius: 9999px;
  height: 200px;
  width: 200px;
`;
export const ProfileTop = styled.div`
  text-align: start;
`;

export const ProfileTitleContainer = styled.div`
  color: black;
  font-size: 30px;
  margin-top: 68px;
  justify-content: flex-end;
`;

export const ProfileIconsContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-bottom: 16px;
`;

export const ProfileTitle = styled.h2`
  display: flex;
  margin-bottom: 12px;
`;
export const ProfileSubtitle = styled.span`
  display: flex;
  color: gray;
  font-weight: 600;
  font-size: 20px;
`;
export const ProfileIconText = styled.span`
  margin-right: 4px;
  color: gray;
  font-size: 20px;
`;
export const ProfileDescription = styled.p`
  color: rgb(60, 60, 60);
  font-size: 20px;
  font-weight: 500;
`;
export const FollowersContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 20px;
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
