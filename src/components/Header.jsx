import React from "react";
import styled from "@emotion/styled";

const HeaderStyle = styled.div`
  position: fixed;
  width: 100%;
  top: 0px;
  background-color: #121212;
  z-index: 999;
  .header-top {
    padding: 0 20px;
    box-sizing: border-box;
    .top {
      padding-top: 49px;
      display: flex;
      .logo {
        margin-right: auto;
      }
      .user {
        margin: 3px 9px 0 auto;
      }
    }
    .search {
      position: relative;
      margin: 13px 0 9px;
      width: 100%;
      .search-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        margin-top: -10px;
      }
      input {
        width: 100%;
        height: 40px;
        padding: 0;
        text-indent: 40px;
        border-width: 0;
        background-color: #232429;
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .header-date {
    position: relative;
    background-color: #232429;
    height: 57px;
    text-align: center;
    .date {
      padding-top: 10px;
      font-size: 20px;
      font-weight: 700;
    }
    .info {
      position: absolute;
      bottom: 5px;
      display: block;
      width: 100%;
      display: flex;
      padding: 0 20px;
      box-sizing: border-box;
      .ranking {
        font-size: 10px;
        line-height: 14px;
        background: url("/img/ic_badge.png") 0% 50% no-repeat;
        background-size: 14px 14px;
        padding-left: 16px;
        margin-right: auto;
        padding-top: 3px;
      }
      .update {
        font-size: 10px;
        line-height: 14px;
        background: url("/img/ic_navi_time.png") 0% 50% no-repeat;
        background-size: 14px 14px;
        padding-left: 16px;
        margin-left: auto;
        padding-top: 3px;
      }
    }
  }
`;

export const Header = ({ headerDate }) => {
  return (
    <HeaderStyle>
      <div className="header-top">
        <div className="top">
          <div className="logo">
            <img src="./img/logo.png" alt="logo" />
          </div>
          <div className="user">
            <img src="./img/ic_navi_user.png" alt="user" />
          </div>
        </div>
        <div className="search">
          <div className="search-icon">
            <img src="./img/ic_search.png" alt="search-icon" />
          </div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header-date">
        <div className="date">{headerDate}</div>
        <div className="info">
          <span className="ranking">랭킹 1위 - 5위 기사</span>
          <span className="update">매일 6AM 업데이트</span>
        </div>
      </div>
    </HeaderStyle>
  );
};
