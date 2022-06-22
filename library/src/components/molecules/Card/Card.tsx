import React, { FC } from "react";
import { styled } from "./Card.styled";

const Box = styled("div", {});

export type CardProps = {};

const Card: FC<CardProps> = () => {
  return <Box>card</Box>;
};

Card.propTypes = {};

export default Card;
