import React from "react";
import { useGetId } from "../hooks/useGetId";
import { useGetStory } from "../hooks/useGetStory";
import { Card } from "../components/Card";
import { List } from "../components/List";
import { Pagination } from "../components/Pagination";
import { useGetUrl } from "../hooks/useGetUrl";
import { HeaderSub } from "../components/HeaderSub";
import styled from "@emotion/styled";
import { useFilterStory } from "../hooks/useFilterStory";
import { Spinner } from "react-bootstrap";
import { useLoading } from "../hooks/useLoading";

const ShowStyle = styled.div``;

export const AskContext = React.createContext();
export const Show = () => {
  const { showIdUrl } = useGetUrl();
  const trendingItemGetCount = 50;
  const trendingItemCount = 5;
  const showItemCount = 10;

  const [showId] = useGetId(showIdUrl, showItemCount);
  const [
    story,
    currentPage,
    totalPagination,
    viewPageCount,
    pageHandleClick,
    prevHandleClick,
    nextHandleClick
  ] = useGetStory(showId, "ids");

  const [trendingId] = useGetId(showIdUrl, trendingItemGetCount);
  const [trendingStory] = useGetStory(trendingId, "ids");
  const filterType = "trending";
  const { sortStory } = useFilterStory(
    trendingStory,
    trendingItemCount,
    filterType
  );

  const [loadingState] = useLoading(story);

  return (
    <ShowStyle className="subPage">
      <HeaderSub headerTitle="Show" />
      {loadingState ? (
        <div className="spinner">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <>
          <Card story={sortStory} />
          <div className="list-title">Recent</div>
          <List story={story} listType="default" />
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
    </ShowStyle>
  );
};
