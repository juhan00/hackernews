import React from "react";
import styled from "@emotion/styled";

const HeaderSubStyle = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 81px;
  background-color: #121212;
  z-index: 999;
  display: flex;
  padding: 0 20px;
  box-sizing: border-box;
  .title {
    margin-top: 40px;
    color: #c4c4c4;
    font-size: 24px;
    font-weight: 500;
    &.detail {
      margin: 40px auto 0;
    }
  }
  .buttons {
    margin: 41px 0 0 auto;
    display: flex;
    .search {
      width: 24px;
      height: 24px;
      background: url("./img/ic_search.png") 50% 50% no-repeat;
      background-size: 20px 20px;
      margin-right: 13px;
      cursor: pointer;
    }
    .more {
      width: 24px;
      height: 24px;
      background: url("./img/ic_more.png") 50% 50% no-repeat;
      background-size: 16px 4px;
      cursor: pointer;
    }
  }
  .btn-back {
    position: absolute;
    top: 41px;
    left: 20px;
    width: 24px;
    height: 24px;
    background: url("/img/ic_header_arrow.png") 50% 50% no-repeat;
    background-size: 24px 24px;
    font-size: 0px;
    cursor: pointer;
  }
`;

export const HeaderSub = ({ headerTitle, type, navigate }) => {
  return type !== "detail" ? (
    <HeaderSubStyle>
      <div className="title">{headerTitle}</div>
      <div className="buttons">
        <div className="search"></div>
        <div className="more"></div>
      </div>
    </HeaderSubStyle>
  ) : (
    <HeaderSubStyle>
      <div className="btn-back" onClick={() => navigate(-1)}>
        back
      </div>
      <div className="title detail">{headerTitle}</div>
    </HeaderSubStyle>
  );
};
