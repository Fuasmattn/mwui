import React, { FC } from "react";
import { Component, Size, Variant } from "./types";
import { styled, variants, compoundVariants } from "./Typography.styled";

const Box = styled("div", {
  variants,
  compoundVariants,
});

export type TypographyProps = {
  variant?: Variant;
  component?: Component;
  size?: Size;
  text: string;
};

const Typography: FC<TypographyProps> = ({
  variant = "body",
  component = "p",
  size = "medium",
  text,
}) => {
  return (
    <Box
      as={component}
      component={component}
      variant={variant}
      size={size}
    >
      {text}
    </Box>
  );
};

export default Typography;
