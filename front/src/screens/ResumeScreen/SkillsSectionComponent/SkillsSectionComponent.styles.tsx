import styled from "styled-components";

export const SkillsSection = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
`;

export const SkillCard = styled.div`
  flex: 1;
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to right, #ffdf9e, #cda34f) 1;
  margin: 20px;
  padding: 20px;
  text-align: center;
  box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
  background: radial-gradient(circle, #2d2d2d 1%, #161616 100%);
  transition: 0.5s;

  &:hover {
    border-image: linear-gradient(to left, #ffdf9e, #cda34f) 1;
    background: #161616;
    transition: 0.5s;
  }
`;

export const SkillCardTitle = styled.span`
  font-size: 26px;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: #cda34f solid 1px;
`;

export const SkillCardTextContent = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

export const SkillCardTextTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const SkillCardText = styled.p`
  font-size: 16px;
  margin: 0;
`;
