import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const useGetStory = (userId, itemType) => {
  const [storyState, setStoryState] = useState();
  const [pagingIdState, setPagingIdState] = useState();
  const [pageNumState, setPageNumState] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  const totalPagination = userId ? userId.length : 0;

  const viewPageCount = 5;
  const startPageNum = 0;

  const pageHandleClick = useCallback(
    (index) => {
      setPageNumState(index);
      setCurrentPage(index);
    },
    [setPageNumState, setCurrentPage]
  );

  const prevHandleClick = useCallback(() => {
    if (currentPage > 0) {
      setPageNumState(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage, setPageNumState]);

  const nextHandleClick = useCallback(() => {
    if (currentPage < totalPagination) {
      setPageNumState(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, setPageNumState, totalPagination]);

  useEffect(() => {
    setPagingIdState(userId);
  }, [userId]);

  useEffect(() => {
    setPageNumState(startPageNum);
  }, [startPageNum]);

  useEffect(() => {
    const getUserStory = async () => {
      try {
        if (itemType === "ids") {
          const userStory = pagingIdState[pageNumState].map((id) =>
            axios(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          );
          await Promise.all(userStory).then((responses) => {
            const data = responses.map((response) => response.data);
            setStoryState(data);
          });
        } else if (itemType === "id") {
          const userStory = await axios(
            `https://hacker-news.firebaseio.com/v0/item/${pagingIdState}.json`
          );
          setStoryState(userStory.data);
        } else if (itemType === "kids") {
          const userStory = pagingIdState.map((id) =>
            axios(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          );
          await Promise.all(userStory).then((responses) => {
            const data = responses.map((response) => response.data);
            setStoryState(data);
          });
        }
      } catch (error) {
        // console.log("useGetInfo error");
      }
    };
    pagingIdState && getUserStory();

    return () => {
      setStoryState();
    };
  }, [pagingIdState, pageNumState, itemType]);

  return [
    storyState,
    currentPage,
    totalPagination,
    viewPageCount,
    pageHandleClick,
    prevHandleClick,
    nextHandleClick
  ];
};
