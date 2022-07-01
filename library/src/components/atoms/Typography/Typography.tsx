import React, { FC } from "react";
import { Component, Size, Variant } from "./types";
import { variants, compoundVariants } from "./Typography.styled";
import { styled } from "../../../stitches";

const Box = styled("div", {
  variants,
  compoundVariants,
});

export type TypographyProps = {
  variant?: Variant;
  component?: Component;
  size?: Size;
  text: string;
  className?: string;
};

const Typography = ({
  variant = "body",
  component = "p",
  size = "medium",
  text,
  className,
}: TypographyProps) => {
  return (
    <Box
      className={className}
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
