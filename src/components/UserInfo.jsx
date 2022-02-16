import React, { useContext } from "react";
import { GlobalContext } from "../hooks/useGlobalContext";
import { useGetAgo } from "../hooks/useGetAgo";
import styled from "@emotion/styled";

const UserInfoStyle = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: rgba(18, 18, 18, 0.9);

  .header {
    display: block;
    width: 100%;
    height: 80px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    .title {
      font-size: 24px;
      font-weight: 500px;
      color: #6f6f6f;
      margin: 40px auto 0 0;
    }
    .close {
      width: 20px;
      height: 20px;
      background: url("./img/ic_modal_close.png") 50% 50% no-repeat;
      background-size: 20px 20px;
      margin: 42px 0 0 auto;
      cursor: pointer;
    }
    margin-bottom: 64px;
  }

  .contents {
    padding: 0 5%;
    box-sizing: border-box;
    word-break: break-word;
    min-width: 274px;
    max-width: 400px;
    margin: 0 auto;

    .label {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 16px;
      background-color: #96d9ff;
      color: #121212;
      font-size: 16px;
      border-radius: 2px;
    }
    .user-id {
      margin-top: 3px;
      font-size: 40px;
      font-weight: 500;
      color: #03c1ff;
    }
    .time {
      font-size: 16px;
      font-weight: 400;
      span {
        color: #494949;
      }
    }
    .point {
      margin-top: 10px;
      display: flex;
      align-items: center;
      &::before {
        content: "";
        display: block;
        width: 17px;
        height: 17px;
        background: url("./img/ic_user_info_point.png") 50% 50% no-repeat;
        background-size: 17px 17px;
        margin-right: 2px;
      }
    }
    .btn-wrap {
      display: inline-block;
      width: 100%;
      margin-top: 24px;
      button {
        float: left;
        width: 82px;
        height: 28px;
        background-color: transparent;
        font-size: 12px;
        font-weight: 300;
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.87);
        border-radius: 2px;
        margin-right: 8px;
      }
    }
    .text {
      margin-top: 48px;
      padding: 8px;
      border: 1px solid rgba(255, 255, 255, 0.23);
      border-radius: 2px;
      font-size: 12px;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.57);
    }
  }
`;

export const UserInfo = ({ about, created, id, karma, submitted }) => {
  const { userInfoToggle } = useContext(GlobalContext);
  const [timeAgo] = useGetAgo(new Date(created * 1000));

  return (
    <UserInfoStyle>
      <div className="header">
        <div className="title">User Infomation</div>
        <div className="close" onClick={() => userInfoToggle()}></div>
      </div>
      <div className="contents">
        <div className="label">user</div>
        <div className="user-id">{id}</div>
        <div className="time">
          {timeAgo} ago <span>Joined</span>
        </div>
        <div className="point">{karma}</div>
        <div className="btn-wrap">
          <button>articles</button>
          <button>comments</button>
          <button>favorite</button>
        </div>
        {about && (
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: about }}
          ></div>
        )}
      </div>
    </UserInfoStyle>
  );
};
