import { useEffect, useState } from "react";

export const useLoading = (data) => {
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    if (data) {
      setLoadingState(false);
    } else {
      setLoadingState(true);
    }
  }, [data]);

  return [loadingState];
};
