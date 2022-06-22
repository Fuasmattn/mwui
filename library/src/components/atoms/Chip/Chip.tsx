import React, { FC } from "react";
import PropTypes from "prop-types";
import { styled } from "./Chip.styled";
import Typography from "../Typography";

const StyledChip = styled("span", {
  padding: "$xxs $xs",
  background: "$chipBackground",
  color: "$chipLabelColor",
  borderRadius: "$radiusChip",
});

export type ChipProps = {
  label: string;
};

const Chip: FC<ChipProps> = ({ label }) => {
  return (
    <StyledChip>
      <Typography
        variant="label"
        size="medium"
        component="span"
        text={label}
        no-margin
      />
    </StyledChip>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Chip;
