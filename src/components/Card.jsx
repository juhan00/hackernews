import React, { useCallback, useState } from "react";
import { CardItem } from "./CardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "@emotion/styled";
import { Spinner } from "react-bootstrap";
import { useLoading } from "../hooks/useLoading";

const CardStyle = styled.div`
  position: relative;
  min-height: auto;
  &.loading {
    min-height: 200px;
  }

  .card-title {
    margin: 11px 0 20px;
    padding: 0 20px;
    height: 24px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    .text {
      font-size: 20px;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }
    .arrow {
      width: 24px;
      height: 24px;
      background: url("./img/ic_card_arrow.png") 50% 50% no-repeat;
      transform: rotate(180deg);
      background-size: 16px 9px;
      cursor: pointer;
      margin-left: auto;
      &.close {
        transform: rotate(0deg);
      }
    }
  }

  .swiper {
    padding: 0 20px 46px;
    box-sizing: border-box;
    .swiper-pagination {
      bottom: 15px;
      .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        margin: 4px;
        background-color: #6f6f6f;
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        background-color: #96d9ff;
      }
    }
  }
`;

export const Card = ({ story }) => {
  const [cardOpen, setCardOpen] = useState(true);

  const cardOpenToggle = useCallback(() => {
    setCardOpen(!cardOpen);
  }, [cardOpen]);

  const CardRender = useCallback(() => {
    const result = [];
    for (let i = 0; i < story.length; i++) {
      result.push(
        <SwiperSlide key={`slide-${i}`}>
          <CardItem key={story[i].id} index={i} {...story[i]} />
        </SwiperSlide>
      );
    }
    return result;
  }, [story]);

  const [loadingState] = useLoading(story);

  return (
    <CardStyle className={`${loadingState && "loading"}`}>
      {loadingState ? (
        <div className="spinner">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <>
          <div className="card-title">
            <div className="text">Trending Now</div>
            <div
              className={`arrow ${cardOpen === false && "close"}`}
              onClick={() => {
                cardOpenToggle();
              }}
            ></div>
          </div>
          {cardOpen && (
            <Swiper
              // navigation={true}
              modules={[Navigation, Pagination]}
              slidesPerView={1.2}
              spaceBetween={10}
              pagination
            >
              {story && CardRender()}
            </Swiper>
          )}
        </>
      )}
    </CardStyle>
  );
};
