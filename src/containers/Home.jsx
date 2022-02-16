import React, { useEffect, useState, useCallback } from "react";
import { useGetId } from "../hooks/useGetId";
import { useGetStory } from "../hooks/useGetStory";
import { HomeCard } from "../components/HomeCard";
import { HomeList } from "../components/HomeList";
import { Header } from "../components/Header";
import { useGetDate } from "../hooks/useGetDate";
import { useGetUrl } from "../hooks/useGetUrl";
import styled from "@emotion/styled";
import { useFilterStory } from "../hooks/useFilterStory";
import { Spinner } from "react-bootstrap";
import { useLoading } from "../hooks/useLoading";

const HomeStyle = styled.div``;

export const Home = () => {
  const { bestIdUrl } = useGetUrl();
  const bestItemGetCount = 50;
  const bestItemCount = 5;

  const [bestId] = useGetId(bestIdUrl, bestItemGetCount);
  const [bestStory] = useGetStory(bestId, "ids");
  const filterType = "date";
  const { daysAgo0Story, daysAgo1Story, daysAgo2Story } = useFilterStory(
    bestStory,
    bestItemCount,
    filterType
  );

  const [homeState, setHomeState] = useState([]);
  const [viewIndex, setViewIndex] = useState(0);

  const [topDate0, topDate1, topDate2] = useGetDate(new Date());
  const [headerDate, setHeaderDate] = useState();

  useEffect(() => {
    if (daysAgo0Story && daysAgo1Story && daysAgo2Story) {
      setHomeState([daysAgo0Story, daysAgo1Story, daysAgo2Story]);
    }
    setHeaderDate(topDate0);
  }, [daysAgo0Story, daysAgo1Story, daysAgo2Story, topDate0]);

  const sliderHandleChange = useCallback(
    (event) => {
      setViewIndex(event.activeIndex);

      if (event.activeIndex === 1) {
        setHeaderDate(topDate1);
      } else if (event.activeIndex === 2) {
        setHeaderDate(topDate2);
      } else {
        setHeaderDate(topDate0);
      }
    },
    [topDate0, topDate1, topDate2]
  );

  const [loadingState] = useLoading(bestStory);

  return (
    <HomeStyle className="mainPage">
      <Header headerDate={headerDate} />

      {loadingState ? (
        <div className="spinner">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <>
          <HomeCard
            homeState={homeState}
            sliderHandleChange={sliderHandleChange}
          />
          <HomeList homeState={homeState} viewIndex={viewIndex} />
        </>
      )}
    </HomeStyle>
  );
};
