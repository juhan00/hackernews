import React, { useCallback } from "react";
import styled from "@emotion/styled";

const PaginationStyle = styled.div`
  margin: 24px 72px;
  display: flex;
  justify-content: center;
  .prev {
    width: 17px;
    height: 17px;
    font-size: 0px;
    background: url("./img/ic_pagination_arrow.png") 50% 50% no-repeat;
    background-size: 7px 15px;
    transform: rotate(180deg);
    cursor: pointer;
    &.dim {
      opacity: 0;
      cursor: default;
    }
  }
  .next {
    width: 17px;
    height: 17px;
    font-size: 0px;
    background: url("./img/ic_pagination_arrow.png") 50% 50% no-repeat;
    background-size: 7px 15px;
    cursor: pointer;
    &.dim {
      opacity: 0;
      cursor: default;
    }
  }
`;

const Page = styled.div`
  font-size: 14px;
  text-align: center;
  margin: 0 12px;
  color: ${(props) => (props.active === "active" ? "#96d9ff" : "#8d8d8d")};
  cursor: pointer;
`;

export const Pagination = ({
  currentPage,
  totalPagination,
  viewPageCount,
  pageHandleClick,
  prevHandleClick,
  nextHandleClick
}) => {
  const pageRender = useCallback(() => {
    const result = [];
    const startPageNum =
      Math.floor(currentPage / viewPageCount) * viewPageCount;

    for (let i = startPageNum; i < startPageNum + viewPageCount; i++) {
      result.push(
        <Page
          key={i}
          active={currentPage === i && "active"}
          onClick={() => {
            pageHandleClick(i);
          }}
        >
          {i + 1}
        </Page>
      );

      if (totalPagination === i + 1) {
        break;
      }
    }
    return result;
  }, [currentPage, viewPageCount, totalPagination, pageHandleClick]);

  return (
    <>
      <PaginationStyle>
        {currentPage !== 0 ? (
          <div
            className="prev"
            onClick={() => {
              prevHandleClick();
            }}
          >
            prev
          </div>
        ) : (
          <div className="prev dim">prev</div>
        )}
        {pageRender()}
        {currentPage !== totalPagination - 1 ? (
          <div
            className="next"
            onClick={() => {
              nextHandleClick();
            }}
          >
            next
          </div>
        ) : (
          <div className="next dim">next</div>
        )}
      </PaginationStyle>
    </>
  );
};
