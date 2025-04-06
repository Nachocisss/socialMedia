import styled from "styled-components";

export const TopContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
  border-bottom: 1px solid #cda34f;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TopCardText = styled.div`
  border-radius: 40px;
  padding: 40px 0px;
  flex: 3;
  filter: drop-shadow(8px 8px 5px #000000);

  h1 {
    margin: 8px auto;
    font-size: 60px;
  }

  h2 {
    margin: 8px auto;
    font-size: 24px;
    background-image: linear-gradient(to right, #ffd683, #cda34f);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

export const TopCardYearTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TopCardYearTextNumber = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-right: 8px;
`;

export const TopCardYearText = styled.span`
  font-size: 18px;
`;

export const TopButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TopButtonCv = styled.div`
  margin-right: 16px;
`;

export const TopButton = styled.a`
  margin-right: 16px;
  img {
    width: 32px;
    height: 32px;
  }
`;

export const ProfilePhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 0;
  padding: 40px 0;
  animation: fadeIn 1.2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    margin: 20px auto 0;
    order: 1;
  }
`;

export const ProfileImage = styled.img`
  border-radius: 9999px;
  height: 200px;
  width: 200px;
  border: 4px solid #aa01d0;
  background-color: white;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.8);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;

  &:hover {
    transform: scale(1.07) rotate(3deg);
    box-shadow: 0 0 25px #aa01d0;
    border-color: #ffdf9e;
  }
`;
export const CvDownload = styled.a`
  display: inline-block;
  background-color: #333;
  color: #e7e9ea;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #cda34f;
  background: radial-gradient(circle, #363636 1%, #161616 100%);
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: radial-gradient(circle, #4b4b4b 1%, #202020 100%);
    transform: translateY(-2px);
  }
`;
