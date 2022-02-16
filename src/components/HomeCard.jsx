import React, { useCallback } from "react";
import { HomeCardItem } from "./HomeCardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const HomeCard = ({ homeState, sliderHandleChange }) => {
  const CardRender = useCallback(() => {
    const result = [];
    for (let i = 0; i < homeState.length; i++) {
      result.push(
        <SwiperSlide key={`slide-${i}`}>
          {homeState[i] && homeState[i].length !== 0 ? (
            homeState[i].map(
              (item, index) =>
                index === 0 && (
                  <HomeCardItem key={item.id} index={index} {...item} />
                )
            )
          ) : (
            <HomeCardItem noData="true" />
          )}
        </SwiperSlide>
      );
    }
    return result;
  }, [homeState]);

  return (
    <Swiper
      dir="rtl"
      // navigation={true}
      modules={[Navigation, Pagination]}
      centeredSlides={true}
      slidesPerView={1.1}
      spaceBetween={10}
      onSlideChange={(event) => {
        sliderHandleChange(event);
      }}
    >
      {homeState && CardRender()}
    </Swiper>
  );
};
