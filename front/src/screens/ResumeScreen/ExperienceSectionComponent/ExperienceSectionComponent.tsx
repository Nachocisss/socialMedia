import {
  ExperienceSection,
  ExperienceCard,
  ExperienceText,
  Subtitles,
  ExperienceStackContainer,
} from "./ExperienceSectionComponent.styles";

import { experiences } from "../ResumeContent";

interface Experience {
  title: string;
  company: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  stack: string[];
}

const ExperienceSectionComponent = () => {
  return (
    <ExperienceSection>
      {experiences.map((exp: Experience, index: number) => (
        <ExperienceCard key={index}>
          <ExperienceText>
            <h2>{exp.title}</h2>
            <h3>{exp.company}</h3>
            <p>{exp.description}</p>

            <Subtitles>Responsibilities:</Subtitles>
            {exp.responsibilities.map((item: string, i: number) => (
              <li key={`resp-${i}`}>{item}</li>
            ))}

            <Subtitles>Achievements:</Subtitles>
            {exp.achievements.map((item: string, i: number) => (
              <li key={`ach-${i}`}>{item}</li>
            ))}

            <ExperienceStackContainer>
              {exp.stack.map((tech: string, i: number) => (
                <img key={`stack-${i}`} src={tech} alt={`${tech} Logo`} />
              ))}
            </ExperienceStackContainer>
          </ExperienceText>
        </ExperienceCard>
      ))}
    </ExperienceSection>
  );
};

export default ExperienceSectionComponent;
