import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useGetAgo } from "../hooks/useGetAgo";
import { GlobalContext } from "../hooks/useGlobalContext";
import { useUrlTrim } from "../hooks/useUrlTrim";
import { ScoreBar } from "./ScoreBar";

const CardItemStyle = styled.div`
  position: relative;
  text-align: left;
  background-color: #232429;
  font-size: 16px;
  height: 46.15vw;
  max-height: 300px;
  padding: 16px;
  box-sizing: border-box;
  .url {
    font-size: 14px;
    font-weight: 300;
    letter-spacing: -0.02em;
  }
  .title {
    margin-top: 8px;
    font-size: 18px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    box-sizing: border-box;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    max-height: 3.6;
    overflow: hidden;
  }
  @media screen and (max-width: 320px) {
    .title {
      -webkit-line-clamp: 2;
      max-height: 2.4;
    }
  }
  .bottom {
    position: absolute;
    left: 0;
    bottom: 16px;
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    .info {
      margin-top: 10px;
      display: flex;
      .info-icon {
        &.comment {
          margin: 0 0 0 auto;
        }
      }
    }
  }
`;

export const CardItem = ({
  index,
  id,
  by,
  descendants,
  score,
  time,
  title,
  type,
  url
}) => {
  const [timeAgo] = useGetAgo(new Date(time * 1000));
  const { userInfoToggle } = useContext(GlobalContext);
  const { trimUrl } = useUrlTrim(url);

  return (
    <CardItemStyle>
      <div className="url">
        <a href={url}>{trimUrl}</a>
      </div>
      <div className="title">{title}</div>
      <div className="bottom">
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
      </div>
    </CardItemStyle>
  );
};
