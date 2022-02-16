import { useEffect, useState } from "react";
import axios from "axios";

export const useGetId = (url, itemCount) => {
  const [state, setState] = useState();

  useEffect(() => {
    const getUserId = async () => {
      try {
        const userId = await axios(url);
        let pagingData = [];
        for (let i = 0; i < userId.data.length; i += itemCount) {
          pagingData.push(userId.data.slice(i, i + itemCount));
        }
        setState(pagingData);
      } catch (error) {
        // console.log("useGetId error");
      }
    };
    getUserId();

    return () => {
      setState();
    };
  }, [url, itemCount]);

  return [state];
};
