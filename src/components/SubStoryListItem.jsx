import React, { useState } from "react";
import { useGetAgo } from "../hooks/useGetAgo";
import { useGetStory } from "../hooks/useGetStory";
import { SubStoryList } from "../components/SubStoryList";
import styled from "@emotion/styled";

const SubStoryListItemStyle = styled.li`
  .list {
    .contents {
      .info {
        display: flex;
        height: 50px;
        align-items: center;
        .user {
          margin: 0 auto 0 0;
          color: #96d9ff;
        }
        .arrow {
          display: block;
          width: 24px;
          height: 24px;
          cursor: pointer;
          &.open {
            background: url("/img/ic_comment_arrow.png") 50% 50% no-repeat;
            background-size: 24px 24px;
          }
          &.close {
            background: url("/img/ic_comment_arrow.png") 50% 50% no-repeat;
            background-size: 24px 24px;
            transform: rotate(180deg);
          }
        }
      }
      .text {
        font-size: 12px;
        font-weight: 400;
        padding-bottom: 20px;
      }
    }

    &.parentDeps {
      margin: 0 -20px;
      padding: 0 20px;
      background-color: #282828;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
    }
    &.subDeps {
      &::before {
        position: absolute;
        left: -16px;
        width: 100vw;
        display: block;
        content: "";
        height: 1px;
        border-top: 1px solid rgba(255, 255, 255, 0.15);
      }
    }
  }
`;

export const SubStoryListItem = ({ by, time, text, kids, listType }) => {
  const initialKids = kids && kids;
  const [comment] = useGetStory(initialKids, "kids");
  const [timeAgo] = useGetAgo(new Date(time * 1000));
  const [commentOpen, setCommentOpen] = useState(true);

  return (
    <SubStoryListItemStyle>
      <div
        className={`list ${listType === "subDeps" ? "subDeps" : "parentDeps"}`}
      >
        <div className="contents">
          <div className="info">
            <div className="user">{by}</div>
            <div className="info-icon time">{timeAgo}</div>
            <div
              className={`arrow ${commentOpen === true ? "open" : "close"}`}
              onClick={() => {
                setCommentOpen(!commentOpen);
              }}
            ></div>
          </div>
          {commentOpen && (
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          )}
        </div>
      </div>
      {comment && <SubStoryList comment={comment} listType="subDeps" />}
    </SubStoryListItemStyle>
  );
};
