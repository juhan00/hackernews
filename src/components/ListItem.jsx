import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useGetAgo } from "../hooks/useGetAgo";
import { GlobalContext } from "../hooks/useGlobalContext";
import { useUrlTrim } from "../hooks/useUrlTrim";
import { ScoreBar } from "../components/ScoreBar";

const ListItemStyle = styled.div`
  margin-top: 24px;
  padding: 0 20px;
  &.ask-top {
    &:first-of-type {
      margin-top: 20px;
    }
    margin: 8px 0 0 0;
    padding: 16px 20px 16px 43px;
    background-color: #232429;
    .title {
      position: relative;
      margin-top: 0px;
    }
    .title::before {
      position: absolute;
      top: 0px;
      left: -23px;
      display: block;
      content: "";
      width: 15px;
      height: 20px;
      background: url("./img/ic_ask_fire.png") 50% 50% no-repeat;
      background-size: 15px 20px;
    }
  }

  .url {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }
  .title {
    margin-top: 8px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }
  .score-bar {
    margin-top: 8px;
  }
  .info {
    margin-top: 8px;
    display: flex;
    .info-icon {
      &.comment {
        margin: 0 0 0 auto;
      }
    }
    &.jobs {
      .url {
        a {
          font-size: 12px;
          font-weight: 300;
          color: #6f6f6f;
        }
      }
      .info-icon {
        &.time {
          margin: 0 0 0 auto;
        }
      }
    }
  }
`;

export const ListItem = ({
  id,
  by,
  descendants,
  score,
  time,
  title,
  type,
  url,
  listType,
  listTop
}) => {
  const [timeAgo] = useGetAgo(new Date(time * 1000));
  const { userInfoToggle } = useContext(GlobalContext);
  const { trimUrl } = useUrlTrim(url);

  return listType === "default" ? (
    <ListItemStyle>
      <div className="url">
        <a href={url}>{trimUrl}</a>
      </div>
      <div className="title">
        <a href={url}>{title}</a>
      </div>
      <ScoreBar score={score} listType="sub" barType="small" />
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
        {descendants ? (
          <Link className="info-icon comment" to={`/Comment/${id}`}>
            {descendants}
          </Link>
        ) : (
          <span className="info-icon comment">0</span>
        )}
      </div>
    </ListItemStyle>
  ) : listType === "Ask" ? (
    <ListItemStyle className={listTop === "true" ? "ask-top" : ""}>
      <div className="title">
        <Link to={`/StoryDetail/${id}`}>{title}</Link>
      </div>
      <ScoreBar score={score} listType="sub" barType="small" />
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
        {descendants ? (
          <Link className="info-icon comment" to={`/Comment/${id}`}>
            {descendants}
          </Link>
        ) : (
          <span className="info-icon comment">0</span>
        )}
      </div>
    </ListItemStyle>
  ) : (
    listType === "Jobs" && (
      <ListItemStyle className="Jobs">
        <div className="title">
          <a href={url}>{title}</a>
        </div>
        <div className="info jobs">
          <div className="url">
            <a href={url}>{trimUrl}</a>
          </div>
          <span className="info-icon time">{timeAgo}</span>
        </div>
      </ListItemStyle>
    )
  );
};
