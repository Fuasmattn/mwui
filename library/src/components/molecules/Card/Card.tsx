import React, { FC } from "react";
import { styled } from "./Card.styled";

const Box = styled("div", {});

export type Props = {};

const Card: FC<Props> = () => {
  return <Box>card</Box>;
};

Card.propTypes = {};

export default Card;
