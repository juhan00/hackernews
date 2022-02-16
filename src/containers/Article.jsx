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

const ArticleStyle = styled.div``;

export const Article = () => {
  const { newIdUrl } = useGetUrl();
  const trendingItemGetCount = 50;
  const trendingItemCount = 5;
  const newItemCount = 7;

  const [newId] = useGetId(newIdUrl, newItemCount);
  const [
    story,
    currentPage,
    totalPagination,
    viewPageCount,
    pageHandleClick,
    prevHandleClick,
    nextHandleClick
  ] = useGetStory(newId, "ids");

  const [trendingId] = useGetId(newIdUrl, trendingItemGetCount);
  const [trendingStory] = useGetStory(trendingId, "ids");
  const filterType = "trending";
  const { sortStory } = useFilterStory(
    trendingStory,
    trendingItemCount,
    filterType
  );

  const [loadingState] = useLoading(story);

  return (
    <ArticleStyle className="subPage">
      <HeaderSub headerTitle="Article" />
      {loadingState ? (
        <div className="spinner fixed">
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
    </ArticleStyle>
  );
};
