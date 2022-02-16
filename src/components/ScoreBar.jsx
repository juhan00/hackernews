import styled from "@emotion/styled";

const ScoreBarStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    font-size: 10px;
    font-weight: 600;
    display: flex;
    align-items: center;
    width: 22px;
    &::before {
      content: "";
      width: 17px;
      height: 17px;
      background: url("/img/ic_score.png") 50% 50% no-repeat;
      background-size: 17px 17px;
      margin-right: 5px;
    }
    &.fill::before {
      background: url("/img/ic_score_fill.png") 50% 50% no-repeat;
      background-size: 17px 17px;
    }
  }

  .bar {
    position: relative;
    display: inline-block;
    width: calc(100% - 25px);
    height: 12px;
    background-color: #848484;
    border-radius: 12px;
    overflow: hidden;
    .score {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 10px;
      line-height: 12px;
      z-index: 1;
    }
    .bar-color {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      &.red {
        background: linear-gradient(
          90deg,
          #ff9696 0%,
          #ff0303 66.28%,
          #ff4949 129.85%
        );
      }
      &.blue {
        background: linear-gradient(
          90deg,
          rgba(150, 217, 255, 0) 0%,
          #03c1ff 63.57%,
          #4951ff 129.85%
        );
      }
    }
  }
  &.sub {
    .icon {
      font-size: 10px;
      font-weight: 600;
      display: flex;
      align-items: center;
      width: 55px;
    }
  }
  &.small {
    .bar {
      height: 2px;
      .score {
        display: none;
      }
      .bar-color {
        border-radius: 2px;
      }
    }
  }
`;

export const ScoreBar = ({ score, listType, barType }) => {
  return (
    <ScoreBarStyle
      className={`score-bar ${listType === "sub" && "sub"} ${
        barType === "small" && "small"
      }`}
    >
      <div className={`icon ${score < 300 ? "" : "fill"}`}>
        {listType === "sub" ? (score < 500 ? score : "500+") : ""}
      </div>
      <div className="bar">
        <div className="score">{score < 500 ? score : "500+"}</div>
        <div
          className={`bar-color ${score < 300 ? "blue" : "red"}`}
          style={
            score < 500
              ? { width: `${Math.ceil(score / 5)}%` }
              : { width: "100%" }
          }
        ></div>
      </div>
    </ScoreBarStyle>
  );
};
