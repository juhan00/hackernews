import React from "react";
import styled from "@emotion/styled";
import { ScoreBar } from "./ScoreBar";
import { Link } from "react-router-dom";

const ListItemStyle = styled.li`
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #282828;
  margin-top: 5px;
  display: flex;
  .left {
    font-size: 16px;
    line-height: 1.2;
  }
  .right {
    width: 100%;
    padding-left: 5px;
    > a {
      color: #fff;
      font-size: 16px;
      line-height: 1.2;
    }
    .list-info {
      margin-top: 5px;
      display: flex;
      .score-bar {
        width: 80%;
        margin-right: auto;
        .bar {
          height: 2px;
        }
      }
      .comment-icon {
        margin-left: auto;
      }
    }
  }
`;

export const HomeListItem = ({
  index,
  id,
  descendants,
  score,
  title,
  url,
  noData
}) => {
  return noData !== "true" ? (
    <ListItemStyle>
      <div className="left">{index + 1}</div>
      <div className="right">
        <a href={url}>{title}</a>
        <div className="list-info">
          <ScoreBar score={score} barType="small" />
          {descendants ? (
            <Link className="info-icon comment home" to={`/Comment/${id}`}>
              {descendants}
            </Link>
          ) : (
            <span className="info-icon comment home">0</span>
          )}
        </div>
      </div>
    </ListItemStyle>
  ) : (
    ""
  );
};
