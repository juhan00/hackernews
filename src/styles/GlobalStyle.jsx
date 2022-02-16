import { css } from "@emotion/react";
import "bootstrap/dist/css/bootstrap.min.css";

export const GlobalStyle = css`
  @import "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css";
  @import "https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css";

  html,
  body {
    font-family: "Pretendard Variable";
    font-weight: normal;
    font-style: normal;
    background-color: #121212;
    color: #fff;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
  .spinner {
    position: absolute;
    &.fixed {
      position: fixed;
    }
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }

  .mainPage {
    padding-top: 206px;
    padding-bottom: 72px;
  }
  .subPage {
    padding-top: 81px;
    padding-bottom: 72px;
  }

  .list-title {
    position: relative;
    padding: 0 20px;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      border-top: 1px solid #6f6f6f;
      margin-bottom: 20px;
    }
  }

  .info-icon {
    display: inline-block;
    font-size: 12px;
    color: #c0c4c7;
    opacity: 0.5;
    a {
      font-size: 12px;
      color: #c0c4c7;
    }

    margin-right: 12px;
    &.user {
      cursor: pointer;
      &::before {
        content: "";
        background: url("/img/ic_user.png") 0% 50% no-repeat;
        background-size: 12px 12px;
        padding-left: 16px;
      }
      &.home {
        opacity: 1;
      }
    }
    &.time {
      &::before {
        content: "";
        background: url("/img/ic_time.png") 0% 50% no-repeat;
        background-size: 12px 12px;
        padding-left: 16px;
      }
      &.home {
        opacity: 1;
      }
    }
    &.comment {
      position: relative;
      cursor: pointer;
      opacity: 1;
      &::before {
        content: "";
        background: url("/img/ic_comment.png") 0% 50% no-repeat;
        background-size: 12px 12px;
        padding-left: 16px;
      }
      &:hover {
        color: #c0c4c7;
      }
    }
  }
`;
