import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.9);
  margin-top: 16px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid blue;
`;
export const ProjectCardContent = styled.div`
  flex: 10;
  justify-content: start;
  text-align: start;
  margin-right: 30px;
`;
export const ProjectCardContentTopNames = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
export const ProjectCardUserName = styled.span`
  color: black;
  font-size: 16px;
  font-weight: 700;
`;
export const ProjectCardUserSubName = styled.span`
  font-size: 12px;
  color: grey;
  font-weight: 700;
`;
export const ProjectCardContentDescription = styled.span`
  color: black;
  font-size: 14px;
  font-weight: 500;
`;

export const ProjectCardContentImageContainer = styled.div`
  display: flex;
  border-radius: 16px;
  margin-top: 16px;
  justify-content: center;
`;
