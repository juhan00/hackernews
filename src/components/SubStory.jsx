import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useGetAgo } from "../hooks/useGetAgo";
import { GlobalContext } from "../hooks/useGlobalContext";
import { useUrlTrim } from "../hooks/useUrlTrim";

const SubStoryStyle = styled.div`
  padding: 24px 20px;
  .title {
    font-size: 20px;
    font-weight: 500;
    font-size: 20px;
    font-weight: 500;
  }
  .text {
    margin-top: 32px;
    font-size: 14px;
  }
  .url {
    a {
      font-size: 16px;
      font-weight: 500;
      color: #909090;
    }
  }
  .info {
    .info-icon {
      opacity: 0.5;
    }
  }
`;

export const SubStory = ({
  id,
  by,
  descendants,
  score,
  time,
  title,
  type,
  url,
  text,
  storyType
}) => {
  const [timeAgo] = useGetAgo(new Date(time * 1000));
  const { userInfoToggle } = useContext(GlobalContext);
  const { trimUrl } = useUrlTrim(url);

  return (
    <>
      {
        <SubStoryStyle>
          <div className="title">{title}</div>
          <div className="url">
            <a href={url}>{trimUrl}</a>
          </div>
          <div className="info">
            <span
              className="info-icon user"
              onClick={() => {
                userInfoToggle(by);
              }}
            >
              {by}
            </span>
            <span className="info-icon time">{timeAgo}</span>
            <span className="info-icon comment">
              {descendants ? (
                <Link to={`/Comment/${id}`}>{descendants}</Link>
              ) : (
                `0`
              )}
            </span>
          </div>
          {storyType === "detail" && <div className="text">{text}</div>}
        </SubStoryStyle>
      }
    </>
  );
};
