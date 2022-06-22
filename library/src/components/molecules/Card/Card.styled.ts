import { createStitches } from "@stitches/react";
import { fontFamiliesDefault } from "@fuasmattn/mwui-token-farm";

export const { styled } = createStitches({
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
      cardBackground: "white", // token
    },
    shadows: {
      cardBoxShadow: "0px 1px 5px rgba(0, 0, 0, 0.15)", // token
    },
    radii: {
      default: "4px", // token
    },
  },
});
