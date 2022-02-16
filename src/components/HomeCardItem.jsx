import React, { useContext } from "react";
import styled from "@emotion/styled";
import { useGetAgo } from "../hooks/useGetAgo";
import { Link } from "react-router-dom";
import { GlobalContext } from "../hooks/useGlobalContext";
import { useUrlTrim } from "../hooks/useUrlTrim";
import { ScoreBar } from "./ScoreBar";

const CardItemStyle = styled.div`
  background-color: #282828;
  height: 88.46vw;
  max-height: 345px;
  border-radius: 20px;
  padding: 16px 24px 20px;
  box-sizing: border-box;
  overflow: hidden;
  .item {
    position: relative;
    width: 100%;
    height: 100%;
    .url {
      text-align: right;
      a {
        color: #c0c4c7;
        font-size: 12px;
      }
    }
    .index {
      position: relative;
      display: flex;
      width: 32px;
      height: 32px;
      background-color: #e3e3e3;
      border-radius: 50%;
      font-size: 24px;
      font-weight: 500;
      color: #232429;
      justify-content: center;
      align-items: center;
      margin: 18px auto 0 0;
    }
    .title {
      margin-top: 10px;
      font-size: 24px;
      font-weight: 800;
      line-height: 1.2;
      padding-right: 15%;
      box-sizing: border-box;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      max-height: 4.8;
      overflow: hidden;
    }
    @media screen and (max-width: 320px) {
      .title {
        -webkit-line-clamp: 3;
        max-height: 3.6;
      }
    }
    .info {
      margin-top: 10px;
      span + span {
        margin-left: 8px;
      }
    }
    .score-bar {
      position: absolute;
      width: 100%;
      bottom: 22px;
    }
  }
  .no-data {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    font-size: 12px;
    font-weight: 300;
  }
`;

export const HomeCardItem = ({
  index,
  id,
  by,
  descendants,
  score,
  time,
  title,
  url,
  noData
}) => {
  const [timeAgo] = useGetAgo(new Date(time * 1000));
  const { userInfoToggle } = useContext(GlobalContext);
  const { trimUrl } = useUrlTrim(url);

  return noData !== "true" ? (
    <CardItemStyle dir="ltr">
      <div className="item">
        <div className="url">
          <a href={url}>{trimUrl}</a>
        </div>
        <div className="index">{index + 1}</div>
        <div className="title">
          <a href={url}>{title}</a>
        </div>
        <div className="info">
          <span
            className="info-icon user home"
            onClick={() => {
              userInfoToggle(by);
            }}
          >
            {by}
          </span>
          <span className="info-icon time home">{timeAgo}</span>
          {descendants ? (
            <Link className="info-icon comment home" to={`/Comment/${id}`}>
              {descendants}
            </Link>
          ) : (
            <span className="info-icon comment home">0</span>
          )}
        </div>
        <ScoreBar score={score} />
      </div>
    </CardItemStyle>
  ) : (
    <CardItemStyle dir="ltr">
      <div className="no-data">Before data update...</div>
    </CardItemStyle>
  );
};
