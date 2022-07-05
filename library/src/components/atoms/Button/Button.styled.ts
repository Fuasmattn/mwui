import {
  buttonButtonFilledDefaultBgColor,
  buttonButtonFilledHoverBgColor,
  buttonButtonFilledDefaultFgColor,
  buttonButtonFilledDisabledBgColor,
  buttonButtonFilledDisabledFgColor,
  buttonButtonFilledFocusedBgColor,
  buttonButtonFilledHoverFgColor,
  buttonButtonFilledFocusedFgColor,
  buttonButtonOutlineDefaultBorderColor,
  buttonButtonOutlineDefaultBgColor,
  buttonButtonOutlineDefaultFgColor,
  buttonButtonOutlineHoverBgColor,
  buttonButtonOutlineHoverBorderColor,
  buttonButtonOutlineHoverFgColor,
  buttonButtonOutlineFocusedBgColor,
  buttonButtonOutlineFocusedFgColor,
  buttonButtonOutlineFocusedBorderColor,
  buttonButtonFilledDefaultBorderRadius,
  buttonButtonOutlineDefaultBorderRadius,
} from "@fuasmattn/mwui-token-farm";

export const scopedTokens = {
  // primary default
  $$primary: buttonButtonFilledDefaultBgColor,
  "$$primary-text": buttonButtonFilledDefaultFgColor,
  "$$primary-border": buttonButtonFilledFocusedBgColor,
  "$$primary-border-radius": buttonButtonFilledDefaultBorderRadius,
  // primary hover
  "$$primary-hover": buttonButtonFilledHoverBgColor,
  "$$primary-border-hover": buttonButtonFilledHoverBgColor,
  "$$primary-text-hover": buttonButtonFilledHoverFgColor,
  // primary active
  "$$primary-active": buttonButtonFilledFocusedBgColor,
  "$$primary-text-active": buttonButtonFilledFocusedFgColor,
  "$$primary-border-active": buttonButtonFilledFocusedBgColor,
  // primary disabled
  "$$primary-disabled": buttonButtonFilledDisabledBgColor,
  "$$primary-text-disabled": buttonButtonFilledDisabledFgColor,

  // outlined default
  $$outlined: buttonButtonOutlineDefaultBgColor,
  "$$outlined-text": buttonButtonOutlineDefaultFgColor,
  "$$outlined-border": buttonButtonOutlineDefaultBorderColor,
  "$$outlined-border-radius": buttonButtonOutlineDefaultBorderRadius,
  // outlined hover
  "$$outlined-hover": buttonButtonOutlineHoverBgColor,
  "$$outlined-text-hover": buttonButtonOutlineHoverFgColor,
  "$$outlined-border-hover": buttonButtonOutlineHoverBorderColor,
  // outlined active
  "$$outlined-active": buttonButtonOutlineFocusedBgColor,
  "$$outlined-text-active": buttonButtonOutlineFocusedFgColor,
  "$$outlined-border-active": buttonButtonOutlineFocusedBorderColor,
};

export const variants = {
  variant: {
    primary: {
      backgroundColor: "$$primary",
      color: "$$primary-text",
      borderRadius: "$$primary-border-radius",
      boxShadow: "0 0 0 1px $$pimary",
      "&:hover": {
        backgroundColor: "$$primary-hover",
        color: "$$primary-text-hover",
      },
      "&:active": {
        backgroundColor: "$$primary-active",
        color: "$$primary-text-hover",
      },
    },
  },
  outlined: {
    true: {
      $$shadowColor: "transparent",
      backgroundColor: "transparent",
      boxShadow: "0 0 0 1px $$shadowColor",
    },
  },
  disabled: {
    true: {
      cursor: "not-allowed",
    },
  },
};

export const compoundVariants = [
  {
    variant: "primary",
    outlined: true,
    css: {
      backgroundColor: "$$outlined",
      $$shadowColor: "$$outlined-border",
      color: "$$outlined-text",
      boxShadow: "0 0 0 1px $$outlined-border",
      "&:hover": {
        backgroundColor: "$$outlined-hover",
        color: "$$outlined-text-hover",
      },
      "&:active": {
        backgroundColor: "$$outlined-active",
        color: "$$outlined-text-hover",
      },
    },
  },
  {
    variant: "primary",
    outlined: false,
    disabled: true,
    css: {
      $$shadowColor: "transparent",
      backgroundColor: "$$primary-disabled",
      color: "$$primary-text-disabled",
      "&:hover": {
        backgroundColor: "$$primary-disabled",
        color: "$$primary-text-disabled",
      },
      "&:active": {
        backgroundColor: "$$primary-disabled",
        color: "$$primary-text-disabled",
      },
    },
  },
  {
    variant: "primary",
    outlined: true,
    disabled: true,
    css: {
      $$shadowColor: "$$primary-disabled",
      backgroundColor: "transparent",
      color: "$$primary-text-disabled",
      "&:hover": {
        $$shadowColor: "$$primary-disabled",
        backgroundColor: "transparent",
        color: "$$primary-text-disabled",
      },
      "&:active": {
        $$shadowColor: "$$primary-disabled",
        backgroundColor: "transparent",
        color: "$$primary-text-disabled",
      },
    },
  },
];
