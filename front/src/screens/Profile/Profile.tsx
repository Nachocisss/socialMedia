import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import Post from "../../components/Post/Post";
import { ProfileContainer } from "./Profile.styled";
import PostMocks from "../../mocks/postMocks.js";

export default function ProfileScreen() {
  const postMocks = PostMocks();

  return (
    <ProfileContainer>
      <ProfileCard />
      {postMocks.map((p, index) => {
        return <Post key={`post${index}`} {...p} image={[p.image[0]]} />;
      })}
    </ProfileContainer>
  );
}
