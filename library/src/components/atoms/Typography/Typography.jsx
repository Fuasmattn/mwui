import React from "react";
import PropTypes from "prop-types";
import { styled, variants, compoundVariants } from "./Typography.styled";

const Box = styled("div", {
  variants,
  compoundVariants,
});

const Typography = ({ variant, component, size, text }) => {
  return (
    <Box as={component} component={component} variant={variant} size={size}>
      {text}
    </Box>
  );
};

Typography.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    "display",
    "headline",
    "title",
    "label",
    "body",
    "body-light",
    "body-light-italic",
    "body-italic",
    "overline",
  ]),
  component: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "span",
    "div",
    "label",
  ]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
};

Typography.defaultProps = {
  text: "",
  variant: "body",
  component: "p",
  size: "medium",
};

export default Typography;
