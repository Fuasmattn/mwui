import React, { FC } from "react";
import PropTypes from "prop-types";
import { styled } from "../../../stitches";
import Typography from "../Typography";

const scopedTokens = {
  $$background: "#6750A4", // token
  $$color: "white", // token
  $$radius: "99999px", // token
}

const StyledChip = styled("span", {
  ...scopedTokens,
  padding: "$xxs $xs",
  background: "$$background",
  color: "$$color",
  borderRadius: "$$radius",
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
