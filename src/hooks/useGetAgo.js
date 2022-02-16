import { useEffect, useState } from "react";

export const useGetAgo = (date) => {
  const [state, setState] = useState();

  const getAgo = (date) => {
    const milliSeconds = new Date() - date;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `Just before`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)} m`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)} h`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)} day`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)} week`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)} month`;
    const years = days / 365;
    return `${Math.floor(years)} year`;
  };

  useEffect(() => {
    setState(getAgo(date));
  }, [date]);

  return [state];
};
