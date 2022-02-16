import { useEffect, useState } from "react";

export const useFilterStory = (stories, itemCount, filterType) => {
  const [sortStory, setSortStory] = useState();
  const [daysAgo0Story, setDaysAgo0Story] = useState();
  const [daysAgo1Story, setDaysAgo1Story] = useState();
  const [daysAgo2Story, setDaysAgo2Story] = useState();

  const date = new Date();
  const daysAgo0 = new Date().toDateString();
  const daysAgo1 = new Date(date.setDate(date.getDate() - 1)).toDateString();
  const daysAgo2 = new Date(date.setDate(date.getDate() - 1)).toDateString();

  useEffect(() => {
    const getSortStory = () => {
      if (stories) {
        const sortStoryData = stories
          .sort((a, b) => b.score - a.score)
          .slice(0, itemCount);
        setSortStory(sortStoryData);
      }
    };
    const getFilterStory = () => {
      if (stories) {
        const filterDaysAgo0 = stories
          .filter(
            (story) => new Date(story.time * 1000).toDateString() === daysAgo0
          )
          .slice(0, itemCount);
        setDaysAgo0Story(filterDaysAgo0);
        const filterDaysAgo1 = stories
          .filter(
            (story) => new Date(story.time * 1000).toDateString() === daysAgo1
          )
          .slice(0, itemCount);
        setDaysAgo1Story(filterDaysAgo1);
        const filterDaysAgo2 = stories
          .filter(
            (story) => new Date(story.time * 1000).toDateString() === daysAgo2
          )
          .slice(0, itemCount);
        setDaysAgo2Story(filterDaysAgo2);
      }
    };

    if (filterType === "date") {
      getFilterStory();
    } else if (filterType === "trending") {
      getSortStory();
    }
  }, [stories, itemCount, filterType, daysAgo0, daysAgo1, daysAgo2]);

  return { sortStory, daysAgo0Story, daysAgo1Story, daysAgo2Story };
};
