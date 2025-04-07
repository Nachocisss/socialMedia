import styled from "styled-components";

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
  padding: 30px 0px;
  flex-grow: 1;
  justify-content: flex-start;
  img {
    width: 50px;
    height: 50px;
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
