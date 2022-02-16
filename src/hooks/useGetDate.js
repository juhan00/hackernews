import { useEffect, useState } from "react";

export const useGetDate = (today) => {
  const [topDate0, setTopDate0] = useState();
  const [topDate1, setTopDate1] = useState();
  const [topDate2, setTopDate2] = useState();

  useEffect(() => {
    const getDayAgo = (date, day) => {
      return new Date(date.setDate(date.getDate() - day));
    };
    const formatDate = (date) => {
      const week = ["일", "월", "화", "수", "목", "금", "토"];
      if (date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        const setDate = [year, month, day].join("/");
        return setDate + `(${week[date.getDay()]})`;
      }
    };
    setTopDate0(formatDate(today));
    setTopDate1(formatDate(getDayAgo(today, 1)));
    setTopDate2(formatDate(getDayAgo(today, 1)));
  }, [today]);

  return [topDate0, topDate1, topDate2];
};
