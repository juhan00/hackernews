import React from "react";
import { useGetId } from "../hooks/useGetId";
import { useGetStory } from "../hooks/useGetStory";
import { List } from "../components/List";
import { Pagination } from "../components/Pagination";
import { useGetUrl } from "../hooks/useGetUrl";
import { HeaderSub } from "../components/HeaderSub";
import styled from "@emotion/styled";
import { useFilterStory } from "../hooks/useFilterStory";
import { Spinner } from "react-bootstrap";
import { useLoading } from "../hooks/useLoading";

const AskStyle = styled.div``;

export const AskContext = React.createContext();
export const Ask = () => {
  const { askIdUrl } = useGetUrl();
  const trendingItemGetCount = 50;
  const trendingItemCount = 2;
  const askItemCount = 7;

  const [askId] = useGetId(askIdUrl, askItemCount);
  const [
    story,
    currentPage,
    totalPagination,
    viewPageCount,
    pageHandleClick,
    prevHandleClick,
    nextHandleClick
  ] = useGetStory(askId, "ids");

  const [trendingId] = useGetId(askIdUrl, trendingItemGetCount);
  const [trendingStory] = useGetStory(trendingId, "ids");
  const filterType = "trending";
  const { sortStory } = useFilterStory(
    trendingStory,
    trendingItemCount,
    filterType
  );

  const [loadingState] = useLoading(story);

  return (
    <AskStyle className="subPage">
      <HeaderSub headerTitle="Ask" />
      {loadingState ? (
        <div className="spinner">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <>
          <List story={sortStory} listType="Ask" listTop="true" />
          <List story={story} listType="Ask" />
          <Pagination
            currentPage={currentPage}
            totalPagination={totalPagination}
            viewPageCount={viewPageCount}
            pageHandleClick={pageHandleClick}
            prevHandleClick={prevHandleClick}
            nextHandleClick={nextHandleClick}
          />
        </>
      )}
    </AskStyle>
  );
};
