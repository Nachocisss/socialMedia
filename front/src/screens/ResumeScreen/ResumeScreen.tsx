import { Container } from "./ResumeScreen.styles";
import TopContainerComponent from "./TopContainer/TopContainerComponent";
import ExperienceSectionComponent from "./ExperienceSectionComponent/ExperienceSectionComponent";
import TechLogoSectionComponent from "./TechLogoSectionComponent/TechLogoSectionComponent";
import SkillsSectionComponent from "./SkillsSectionComponent/SkillsSectionComponent";
import { SectionTitleContainer, SectionTitle } from "./ResumeScreen.styles";

const sections = [
  { title: "Experience", Component: ExperienceSectionComponent },
  { title: "Technologies", Component: TechLogoSectionComponent },
  { title: "Skills", Component: SkillsSectionComponent },
];

export default function ResumeScreen() {
  return (
    <Container>
      <TopContainerComponent />
      {sections.map((section, index) => (
        <div key={index}>
          <SectionTitleContainer>
            <SectionTitle>{section.title}</SectionTitle>
          </SectionTitleContainer>
          <section.Component />
        </div>
      ))}
    </Container>
  );
}
