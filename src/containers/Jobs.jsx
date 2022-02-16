import React from "react";
import { useGetId } from "../hooks/useGetId";
import { useGetStory } from "../hooks/useGetStory";
import { List } from "../components/List";
import { Pagination } from "../components/Pagination";
import { useGetUrl } from "../hooks/useGetUrl";
import { HeaderSub } from "../components/HeaderSub";
import styled from "@emotion/styled";
import { Spinner } from "react-bootstrap";
import { useLoading } from "../hooks/useLoading";

const JobsStyle = styled.div``;

export const AskContext = React.createContext();
export const Jobs = () => {
  const { jobIdUrl } = useGetUrl();
  const jobsItemCount = 10;

  const [jobId] = useGetId(jobIdUrl, jobsItemCount);
  const [
    story,
    currentPage,
    totalPagination,
    viewPageCount,
    pageHandleClick,
    prevHandleClick,
    nextHandleClick
  ] = useGetStory(jobId, "ids");

  const [loadingState] = useLoading(story);

  return (
    <JobsStyle className="subPage">
      <HeaderSub headerTitle="Jobs" />
      {loadingState ? (
        <div className="spinner">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <>
          <List story={story} listType="Jobs" />
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
    </JobsStyle>
  );
};
