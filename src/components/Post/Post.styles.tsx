import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.9);
  margin-top: 16px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid blue;
`;
export const PostContent = styled.div`
  flex: 10;
  justify-content: start;
  text-align: start;
  margin-right: 30px;
`;
export const PostContentTopNames = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
export const PostUserName = styled.span`
  color: black;
  font-size: 16px;
  font-weight: 700;
`;
export const PostUserSubName = styled.span`
  font-size: 12px;
  color: grey;
  font-weight: 700;
`;
export const PostContentDescription = styled.span`
  color: black;
  font-size: 14px;
  font-weight: 500;
`;
export const PostContentImageContainer = styled.div`
  display: flex;
  border-radius: 16px;
  margin-top: 16px;
  justify-content: center;
`;
export const PostImage = styled.img`
  max-width: 100%;
  max-height: 400px;
`;
export const PostContentBottom = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`;
export const PostContentBottomText = styled.span`
  margin-left: 4px;
  color: gray;
  font-size: 12px;
  font-weight: 600;
`;
