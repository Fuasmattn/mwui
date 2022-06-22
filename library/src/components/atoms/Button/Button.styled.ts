import { createStitches } from "@stitches/react";
import {
  buttonButtonFilledDefaultBgColor,
  // buttonButtonFilledDefaultBorderColor,
  // buttonButtonFilledDefaultBorderRadius,
  // buttonButtonFilledDefaultTextColor,
  // buttonButtonFilledFocusedBgColor,
  // buttonButtonFilledFocusedTextColor,
  // buttonButtonFilledHoverBgColor,
  // buttonButtonFilledHoverTextColor,
  // buttonButtonOutlineDefaultBgColor,
  // buttonButtonOutlineDefaultBorderColor,
  // buttonButtonOutlineDefaultTextColor,
  // buttonButtonOutlineFocusedBgColor,
  // buttonButtonOutlineFocusedTextColor,
  // buttonButtonOutlineHoverBgColor,
  // buttonButtonOutlineHoverTextColor,
  fontFamiliesDefault,
} from "@fuasmattn/mwui-token-farm";

const PLACEHODER_FIXME = "#000000";

const { styled } = createStitches({
  theme: {
    space: {
      xxs: "0.25rem",
      xs: "0.5rem",
      s: "1rem",
      m: "1.5rem",
      l: "2rem",
      xl: "2.5rem",
      xxl: "3rem",
      xxxl: "4rem",
    },
    fonts: {
      default: fontFamiliesDefault,
    },
    colors: {
      primary: buttonButtonFilledDefaultBgColor,
      "primary-hover": PLACEHODER_FIXME,
      "primary-active": PLACEHODER_FIXME,

      "primary-border": PLACEHODER_FIXME,
      "primary-border-hover": PLACEHODER_FIXME,
      "primary-border-active": PLACEHODER_FIXME,

      "primary-text": PLACEHODER_FIXME,
      "primary-text-hover": PLACEHODER_FIXME,
      "primary-text-active": PLACEHODER_FIXME,

      "primary-border-radius": 0,

      secondary: PLACEHODER_FIXME,
      "secondary-hover": PLACEHODER_FIXME,

      "secondary-active": PLACEHODER_FIXME,

      "secondary-border": PLACEHODER_FIXME,
      "secondary-border-hover": PLACEHODER_FIXME,
      "secondary-border-active": PLACEHODER_FIXME,

      "secondary-text": PLACEHODER_FIXME,
      "secondary-text-hover": PLACEHODER_FIXME,
      "secondary-text-active": PLACEHODER_FIXME,

      "secondary-border-radius": 0,
    },
  },
});

export default styled;
