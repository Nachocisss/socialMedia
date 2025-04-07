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
  font-size: 30px;
  font-weight: bold;
  margin-right: 8px;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #ffdf9e, #cda34f);
  filter: drop-shadow(8px 8px 5px #000000);
`;

export const TopButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TopButtonCv = styled.div`
  display: inline-block;
  margin-right: 20px;
`;

export const CvDownload = styled.a`
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #2575fc, #6a11cb);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    color: rgba(255, 255, 255, 0.6);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const TopButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-left: 20px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  img {
    width: 35px;
    height: 35px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    background-color: rgb(253, 233, 116);
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
