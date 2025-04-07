import { UserIcon } from "../UserIcon/UserIcon";
import Carousel from "../Carrousel/Carrousel";

import {
  ProjectCardContainer,
  ProjectCardContent,
  ProjectCardContentDescription,
  ProjectCardContentImageContainer,
  ProjectCardContentTopNames,
  ProjectCardUserName,
  ProjectCardUserSubName,
} from "./ProjectCard.styles";

interface Props {
  username: string;
  account: string;
  date: string;
  content: string;
  image?: [string];
}

export default function ProjectCard({
  username,
  account,
  date,
  content,
  image,
}: Props) {
  return (
    <ProjectCardContainer>
      <UserIcon />
      <ProjectCardContent>
        <div>
          <ProjectCardContentTopNames>
            <ProjectCardUserName>{username}</ProjectCardUserName>
            <ProjectCardUserSubName> {account}</ProjectCardUserSubName>
          </ProjectCardContentTopNames>
          <ProjectCardUserSubName> {date}</ProjectCardUserSubName>
        </div>
        <ProjectCardContentDescription>{content}</ProjectCardContentDescription>
        {image ? (
          <ProjectCardContentImageContainer>
            <Carousel images={image} />
          </ProjectCardContentImageContainer>
        ) : null}
      </ProjectCardContent>
    </ProjectCardContainer>
  );
}
