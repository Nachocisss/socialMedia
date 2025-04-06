import styled from "styled-components";

export const Container = styled.div`
  font-family: "Helvetica Neue", sans-serif;
  color: #ffffff;
  background-color: #121212;
  padding-top: 60px;
  background: radial-gradient(circle, #4a4a4a 1%, #161616 100%);
  width: 100vw;
`;

export const AnimatedTitle = styled.h2`
  position: relative;
  display: inline-block;
  font-size: 24px;
  color: transparent;
  background-image: linear-gradient(to right, #ffd683, #cda34f);
  background-clip: text;
  -webkit-background-clip: text;
  transition: transform 0.4s ease, text-shadow 0.4s ease;

  &:hover {
    transform: scale(1.1);
    text-shadow: 0 0 10px rgba(255, 214, 131, 0.6);
  }
`;

export const AnimatedSectionTitle = styled.span`
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    color: #ffdf9e;
  }
`;
export const SectionTitleContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

export const SectionTitle = styled.h3`
  font-size: 40px;
  margin: 0px;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #ffdf9e, #cda34f);
  filter: drop-shadow(8px 8px 5px #000000);
`;

export const ExperienceSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;

export const ExperienceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin: 16px;
  border-radius: 10px;
  background: #161616;
  box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 10px 30px rgba(205, 163, 79, 0.5);
  }
`;

export const ExperienceText = styled.div`
  margin: 40px;
  padding-left: 40px;
  border-left: #cda34f solid 4px;

  h2 {
    font-size: 20px;
    color: #cda34f;
  }

  h3 {
    font-size: 18px;
  }

  p,
  li {
    font-size: 14px;
  }

  li {
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 16px;
  }
`;

export const Subtitles = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #cda34f;
`;

export const ExperienceStackContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 40px;
  margin-top: auto;

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
    margin-left: 16px;
    filter: drop-shadow(5px 5px 10px #000000);
    transition: transform 0.3s ease, filter 0.3s ease, rotate 0.3s ease;

    &:hover {
      transform: scale(1.2) rotate(-5deg);
      filter: drop-shadow(5px 5px 15px #cda34f);
    }
  }
`;

export const TechLogoSection = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
  border-radius: 30px;
  display: flex;
  flex-wrap: wrap;
`;

export const TechLogoContainer = styled.div`
  text-align: center;
  margin: 8px 0px;
  width: 25%;

  @media (max-width: 768px) {
    width: 50%;
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin: auto;
  }
`;

export const TechLogoImageAndText = styled.div`
  display: flex;
  flex-direction: column;
  filter: drop-shadow(8px 8px 5px #000000);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const TechLogoText = styled.span`
  margin: 8px 0;
  font-size: 16px;
  font-weight: 600;
`;

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
  text-align: start;
`;

export const SkillCardText = styled.span`
  font-size: 14px;
  margin: 4px 20px;
`;

export const SkillCardTextTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin: 8px 8px;
  background-image: linear-gradient(to right, #ffd47e, #cda34f);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
