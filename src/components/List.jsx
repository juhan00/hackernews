import React from "react";
import { ListItem } from "../components/ListItem";
import styled from "@emotion/styled";
import { Spinner } from "react-bootstrap";
import { useLoading } from "../hooks/useLoading";

const ListStyle = styled.div`
  position: relative;
  min-height: 200px;
`;

export const List = ({ story, listType, listTop }) => {
  const [loadingState] = useLoading(story);

  return (
    <ListStyle>
      {loadingState ? (
        <div className="spinner">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <ul>
          {story &&
            story.map((item, index) => (
              <ListItem
                key={item.id ? item.id : index}
                listType={listType}
                listTop={listTop}
                {...item}
              />
            ))}
        </ul>
      )}
    </ListStyle>
  );
};
