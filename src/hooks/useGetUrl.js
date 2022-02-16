import { useState } from "react";

export const useGetUrl = () => {
  const topstories = "https://hacker-news.firebaseio.com/v0/topstories.json";
  const newstories = "https://hacker-news.firebaseio.com/v0/newstories.json";
  const jobstories = "https://hacker-news.firebaseio.com/v0/jobstories.json";
  const askstories = "https://hacker-news.firebaseio.com/v0/askstories.json";
  const showstories = "https://hacker-news.firebaseio.com/v0/showstories.json";
  const beststories = "https://hacker-news.firebaseio.com/v0/beststories.json";

  const [topIdUrl] = useState(topstories);
  const [newIdUrl] = useState(newstories);
  const [jobIdUrl] = useState(jobstories);
  const [askIdUrl] = useState(askstories);
  const [showIdUrl] = useState(showstories);
  const [bestIdUrl] = useState(beststories);

  return { topIdUrl, newIdUrl, jobIdUrl, askIdUrl, showIdUrl, bestIdUrl };
};
