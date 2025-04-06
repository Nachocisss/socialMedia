import styled from "styled-components";

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
