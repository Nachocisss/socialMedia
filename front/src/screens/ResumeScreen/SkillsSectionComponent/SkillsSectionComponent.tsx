import {
  SkillsSection,
  SkillCard,
  SkillCardTitle,
  SkillCardTextContent,
  SkillCardTextTitle,
  SkillCardText,
} from "./SkillsSectionComponent.styles";

import { skills } from "../ResumeContent";

const SkillsSectionComponent = () => {
  return (
    <SkillsSection>
      {skills.map((group, index) => (
        <SkillCard key={index}>
          <SkillCardTitle>{group.category}</SkillCardTitle>
          <SkillCardTextContent>
            {group.items.map((item, i) => (
              <div key={i}>
                <SkillCardTextTitle>{item.title}</SkillCardTextTitle>
                <SkillCardText>{item.description}</SkillCardText>
              </div>
            ))}
          </SkillCardTextContent>
        </SkillCard>
      ))}
    </SkillsSection>
  );
};

export default SkillsSectionComponent;
