import {
  TechLogoSection,
  TechLogoContainer,
  TechLogoImageAndText,
  TechLogoText,
} from "./TechLogoSectionComponent.styles";

import { technologies } from "../ResumeContent";

const TechLogoSectionComponent = () => {
  return (
    <TechLogoSection>
      {technologies.map((tech, index) => (
        <TechLogoContainer key={index}>
          <TechLogoImageAndText>
            <img src={tech.src} alt={tech.alt} />
            <TechLogoText>{tech.label}</TechLogoText>
          </TechLogoImageAndText>
        </TechLogoContainer>
      ))}
    </TechLogoSection>
  );
};

export default TechLogoSectionComponent;
