import {
  TopContainer,
  TopCardText,
  TopCardYearTextContainer,
  TopCardYearTextNumber,
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
      <h1>Ignacio Cisternas Núñez</h1>
      <h2>Software Developer & Mobile Developer</h2>
      <TopCardYearTextContainer>
        <TopCardYearTextNumber>
          3+ years crafting solutions
        </TopCardYearTextNumber>
      </TopCardYearTextContainer>
      <TopButtonContainer>
        <TopButtonCv>
          <CvDownload
            href="/assets/cvEnglish.pdf"
            download="Ignacio_Cisternas_CV.pdf"
          >
            Download CV
          </CvDownload>
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
