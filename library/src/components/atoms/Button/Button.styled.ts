import {
  buttonButtonFilledDefaultBgColor,
  buttonButtonFilledHoverBgColor,
  buttonButtonFilledDefaultFgColor,
  buttonButtonFilledDisabledBgColor,
  buttonButtonFilledDisabledFgColor,
} from "@fuasmattn/mwui-token-farm";

const PLACEHODER_FIXME = "#00ff00";

export const scopedTokens = {
  $$primary: buttonButtonFilledDefaultBgColor,
  "$$primary-hover": buttonButtonFilledHoverBgColor,
  "$$primary-active": buttonButtonFilledHoverBgColor,
  "$$primary-border": PLACEHODER_FIXME,
  "$$primary-disabled": buttonButtonFilledDisabledBgColor,
  "$$primary-border-hover": PLACEHODER_FIXME,
  "$$primary-border-active": PLACEHODER_FIXME,
  "$$primary-text": buttonButtonFilledDefaultFgColor,
  "$$primary-text-hover": buttonButtonFilledDefaultFgColor,
  "$$primary-text-active": buttonButtonFilledDefaultFgColor,
  "$$primary-text-disabled": buttonButtonFilledDisabledFgColor,
  $$secondary: PLACEHODER_FIXME,
  "$$secondary-hover": PLACEHODER_FIXME,
  "$$secondary-active": PLACEHODER_FIXME,
  "$$secondary-border": PLACEHODER_FIXME,
  "$$secondary-disabled": PLACEHODER_FIXME,
  "$$secondary-border-hover": PLACEHODER_FIXME,
  "$$secondary-border-active": PLACEHODER_FIXME,
  "$$secondary-text": PLACEHODER_FIXME,
  "$$secondary-text-hover": PLACEHODER_FIXME,
  "$$secondary-text-active": PLACEHODER_FIXME,
  "$$secondary-text-disabled": PLACEHODER_FIXME,

};

export const variants = {
  variant: {
    primary: {
      backgroundColor: "$$primary",
      color: "$$primary-text",
      borderRadius: "$$primary-border-radius",
      "&:hover": {
        backgroundColor: "$$primary-hover",
        color: "$$primary-text-hover",
      },
      "&:active": {
        backgroundColor: "$$primary-active",
        color: "$$primary-text-hover",
      },
    },
    secondary: {
      backgroundColor: "$$secondary",
      color: "$$secondary-text",
      borderRadius: "$$secondary-border-radius",
      "&:hover": {
        backgroundColor: "$$secondary-hover",
        color: "$$secondary-text-hover",
      },
      "&:active": {
        backgroundColor: "$$secondary-active",
        color: "$$secondary-text-active",
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
      backgroundColor: "transparent",
      $$shadowColor: "$$primary-border",
      color: "$$primary",
    },
  },
  {
    variant: "secondary",
    outlined: true,
    css: {
      backgroundColor: "transparent",
      $$shadowColor: "$$secondary-border",
      color: "$$secondary",
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
  {
    variant: "secondary",
    outlined: false,
    disabled: true,
    css: {
      $$shadowColor: "transparent",
      backgroundColor: "$$secondary-disabled",
      color: "$$secondary-text-disabled",
      "&:hover": {
        backgroundColor: "$$secondary-disabled",
        color: "$$secondary-text-disabled",
      },
      "&:active": {
        backgroundColor: "$$secondary-disabled",
        color: "$$secondary-text-disabled",
      },
    },
  },
  {
    variant: "secondary",
    outlined: true,
    disabled: true,
    css: {
      $$shadowColor: "$$secondary-disabled",
      backgroundColor: "transparent",
      color: "$$secondary-text-disabled",
      "&:hover": {
        $$shadowColor: "$$secondary-disabled",
        backgroundColor: "transparent",
        color: "$$secondary-text-disabled",
      },
      "&:active": {
        $$shadowColor: "$$secondary-disabled",
        backgroundColor: "transparent",
        color: "$$secondary-text-disabled",
      },
    },
  },
];
