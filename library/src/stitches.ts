import { createStitches } from "@stitches/react";
import {
  fontFamiliesDefault,
  borderRadiusDefault,
  borderRadiusRound,
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
    radii: {
      default: borderRadiusDefault,
      round: borderRadiusRound,
    },
  },
  utils: {
    // Abbreviated margin properties
    m: (value: number) => ({
      margin: value,
    }),
    mt: (value: number) => ({
      marginTop: value,
    }),
    mr: (value: number) => ({
      marginRight: value,
    }),
    mb: (value: number) => ({
      marginBottom: value,
    }),
    ml: (value: number) => ({
      marginLeft: value,
    }),
    mx: (value: number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export const { styled, css } = stitches;

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
