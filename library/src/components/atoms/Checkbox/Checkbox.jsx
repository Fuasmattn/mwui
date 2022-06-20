import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "./Checkbox.styled";
import { Typography } from "../Typography/Typography";

const Box = styled("div");

const StyledCheckbox = styled("input", {
  display: "inline-block",
  cursor: "pointer",
  width: "18px", // TODO: use token
  height: "18px",
});

export const Checkbox = ({ label, checked, onChange }) => {
  const [state, setState] = useState(checked);
  const handleChange = () => {
    onChange();
    setState(!state);
  };
  return (
    <Box
      css={{
        display: "flex",
        gap: "4px", // TODO: use token
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleChange}
    >
      <StyledCheckbox
        type="checkbox"
        checked={state}
        onChange={handleChange}
      ></StyledCheckbox>
      <Typography variant="label" text={label} component="span" />
    </Box>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  label: "",
  checked: false,
};
