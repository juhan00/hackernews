import { useEffect, useState } from "react";

export const useUrlTrim = (url) => {
  const [trimUrl, setTrimUrl] = useState();

  useEffect(() => {
    if (url) {
      const result = url.split("/");

      setTrimUrl(result[2]);
    }
  }, [url]);

  return { trimUrl };
};
