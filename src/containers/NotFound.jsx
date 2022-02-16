import React from "react";
import styled from "@emotion/styled";
const NotFoundStyle = styled.div`
  text-align: center;
  margin-top: 50%;
  transform: translateY(calc(-50% - 72px));
  opacity: 0.5;
`;

export const NotFound = () => {
  return <NotFoundStyle>Not Found</NotFoundStyle>;
};
