import React, { useCallback } from "react";
import { HomeListItem } from "./HomeListItem";

export const HomeList = ({ homeState, viewIndex }) => {
  const listRender = useCallback(() => {
    const result = [];
    result.push(
      homeState[viewIndex] && homeState[viewIndex].length !== 0 ? (
        homeState[viewIndex].map(
          (item, index) =>
            index !== 0 && (
              <HomeListItem key={item.id} index={index} {...item} />
            )
        )
      ) : (
        <HomeListItem key={viewIndex} noData="true" />
      )
    );

    return result;
  }, [homeState, viewIndex]);

  return <ul>{listRender()}</ul>;
};
