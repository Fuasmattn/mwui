import React, { FC } from "react";
import { styled } from "../../../stitches";
import { scopedTokens, compoundVariants, variants } from "./Button.styled";

const StyledButton = styled("button", {
  ...scopedTokens,
  backgroundColor: "transparent",
  fontFamily: "$default",
  padding: "$xs $m",
  border: "none",
  variants,
  defaultVariants: {
    variant: "primary",
  },
  compoundVariants,
});

export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = {
  variant?: ButtonVariant;
  label: string;
  disabled?: boolean;
  outlined?: boolean;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({
  variant = "primary",
  label,
  disabled = false,
  outlined = false,
  onClick,
}) => {
  return (
    <StyledButton
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
