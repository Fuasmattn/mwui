import React from "react";
import PropTypes from "prop-types";
import { styled } from "./Chip.styled";

const StyledChip = styled("div", {});

const Chip = ({ label }) => {
  return <StyledChip>{label}</StyledChip>;
};

Chip.propTypes = {
  label: PropTypes.string,
};

export default Chip;