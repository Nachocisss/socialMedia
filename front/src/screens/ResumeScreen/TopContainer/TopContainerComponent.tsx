import {
  TopContainer,
  TopCardText,
  TopCardYearTextContainer,
  TopCardYearTextNumber,
  TopCardYearText,
  TopButtonContainer,
  TopButtonCv,
  TopButton,
  ProfilePhoto,
  ProfileImage,
  CvDownload,
} from "./TopContainerComponent.styles";
import githubLogo from "../../../assets/resume/githubLogo.png";
import linkedinLogo from "../../../assets/resume/linkedinLogo.png";
import profileImage from "../../../assets/yo.jpeg";

const TopContainerComponent = () => (
  <TopContainer>
    <TopCardText>
      <h1>Ignacio Cisternas</h1>
      <h2>Software Developer & Mobile Developer</h2>
      <TopCardYearTextContainer>
        <TopCardYearTextNumber>3+ years </TopCardYearTextNumber>
        <TopCardYearText>of expertise in crafting solutions</TopCardYearText>
      </TopCardYearTextContainer>
      <TopButtonContainer>
        <TopButtonCv>
          <CvDownload href="assets/CV.pdf">Download CV</CvDownload>
        </TopButtonCv>
        <TopButton href="https://www.linkedin.com/in/ignacio-cisternas-nunez/">
          <img src={githubLogo} alt="linkedin Logo" />
        </TopButton>
        <TopButton href="https://github.com/Nachocisss">
          <img src={linkedinLogo} alt="github Logo" />
        </TopButton>
      </TopButtonContainer>
    </TopCardText>
    <ProfilePhoto>
      <ProfileImage src={profileImage} alt="Ignacio Cisternas" />
    </ProfilePhoto>
  </TopContainer>
);
export default TopContainerComponent;
