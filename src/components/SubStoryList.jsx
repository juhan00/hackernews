import { SubStoryListItem } from "./SubStoryListItem";
import styled from "@emotion/styled";
import { Spinner } from "react-bootstrap";
import { useLoading } from "../hooks/useLoading";

const SubStoryListStyle = styled.div`
  /* position: relative; */
  background-color: #363636;
  padding: 0 20px;
  .subList {
    padding: 0 0 0 16px;
    box-sizing: border-box;
  }
`;

export const SubStoryList = ({ comment, listType }) => {
  const [loadingState] = useLoading(comment);

  return (
    <SubStoryListStyle
      className={`${listType === "subDeps" ? "subList" : "parentList"}`}
    >
      {loadingState ? (
        <div className="spinner fixed">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <ul>
          {comment &&
            comment.map(
              (item) =>
                item.text !== undefined && (
                  <SubStoryListItem
                    key={item.id}
                    listType={listType}
                    {...item}
                  />
                )
            )}
        </ul>
      )}
    </SubStoryListStyle>
  );
};
