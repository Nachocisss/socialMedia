import { ProfileCard } from "../../components/ProfileCard/ProfileCard.js";
import { PortafolioContainer } from "./PortafolioScreen.styled.js";
import { postMocks } from "../../mocks/postMocks.js";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";

export default function PortafolioScreen() {
  return (
    <PortafolioContainer>
      <div style={{ width: "60vw" }}>
        <ProfileCard />
        {postMocks.map((p, index) => {
          return (
            <ProjectCard key={`post${index}`} {...p} image={[p.image[0]]} />
          );
        })}
      </div>
    </PortafolioContainer>
  );
}
