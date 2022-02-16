import { useParams } from "react-router-dom";
import { useGetStory } from "../hooks/useGetStory";
import { SubStory } from "../components/SubStory";
import { SubStoryList } from "../components/SubStoryList";
import styled from "@emotion/styled";
import { HeaderSub } from "../components/HeaderSub";
import { useNavigate } from "react-router-dom";

const StoryDetailStyle = styled.div``;

export const StoryDetail = () => {
  const params = useParams();
  const [story] = useGetStory(params.id, "id");
  const initialKids = story && story.kids;
  const [comment] = useGetStory(initialKids, "kids");
  const navigate = useNavigate();

  return (
    <StoryDetailStyle className="subPage">
      <HeaderSub headerTitle="AsK" type="detail" navigate={navigate} />
      <SubStory {...story} storyType="detail" />
      <SubStoryList comment={comment} />
    </StoryDetailStyle>
  );
};
