import { createStitches } from "@stitches/react";
import {
  fontFamiliesDefault,
  xxs,
  xs,
  s,
  m,
  l,
  xl,
  xxl,
} from "@fuasmattn/mwui-token-farm";

const stitches = createStitches({
  theme: {
    space: {
      xxs: `${xxs}px`,
      xs: `${xs}px`,
      s: `${s}px`,
      m: `${m}px`,
      l: `${l}px`,
      xl: `${xl}px`,
      xxl: `${xxl}px`,
    },
    fonts: {
      default: fontFamiliesDefault,
    },
  },
});

export const { styled, css, getCssText } = stitches;

export const injectGlobalStyles = stitches.globalCss({
  ...css,
  "*": { boxSizing: "border-box" },
  "*:after": { boxSizing: "border-box" },
  "*:before": { boxSizing: "border-box" },
  body: { margin: 0, padding: 0 },
  p: { margin: 0, padding: 0 },
  h1: { margin: 0, padding: 0 },
});

injectGlobalStyles();

export default stitches;
