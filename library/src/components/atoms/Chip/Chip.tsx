import React, { FC } from "react";
import PropTypes from "prop-types";
import { styled } from "./Chip.styled";

const StyledChip = styled("div", {});

export type ChipProps = {
  label: string;
};

const Chip: FC<ChipProps> = ({ label }) => {
  return <StyledChip>{label}</StyledChip>;
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Chip;
