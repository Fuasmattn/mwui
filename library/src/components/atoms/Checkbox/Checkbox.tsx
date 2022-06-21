import React, { useState, FC } from "react";
import PropTypes from "prop-types";
import { default as Typography } from "../Typography";
import { styled } from "./Checkbox.styled";

const Box = styled("div");

const StyledCheckbox = styled("input", {
  display: "inline-block",
  cursor: "pointer",
  width: "18px", // TODO: use token
  height: "18px",
});

export type Props = {
  label?: string;
  checked?: boolean;
  onChange: () => void;
};

const Checkbox: FC<Props> = ({ label, checked, onChange }) => {
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
      {label && <Typography variant="label" text={label} component="span" />}
    </Box>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  label: "",
};

export default Checkbox;
