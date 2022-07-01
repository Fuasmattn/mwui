import React, { FC } from "react";
import { styled } from "../../../stitches";
import { scopedTokens, compoundVariants, variants } from "./Button.styled";

const StyledButton = styled("button", {
  ...scopedTokens,
  backgroundColor: "transparent",
  fontFamily: "$default",
  fontWeight: "600",
  padding: "$xs $m",
  border: "none",
  variants,
  defaultVariants: {
    variant: "primary",
  },
  compoundVariants,
});

export type ButtonVariant = "primary";

export type ButtonProps = {
  variant?: ButtonVariant;
  label: string;
  disabled?: boolean;
  outlined?: boolean;
  onClick: () => void;
  className?: string;
};

const Button = ({
  variant = "primary",
  label,
  disabled = false,
  outlined = false,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      type="button"
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      outlined={outlined}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
