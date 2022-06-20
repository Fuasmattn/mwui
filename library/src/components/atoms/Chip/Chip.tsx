import React, { FC } from "react";
import PropTypes from "prop-types";
import { styled } from "./Chip.styled";

const StyledChip = styled("div", {});

export type Props = {
  label: string;
};

const Chip: FC<Props> = ({ label }) => {
  return <StyledChip>{label}</StyledChip>;
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Chip;
