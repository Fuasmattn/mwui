import { createStitches } from "@stitches/react";
import {
  bodyLarge,
  bodyMedium,
  bodySmall,
  displayLarge,
  displayMedium,
  displaySmall,
  headlineLarge,
  headlineMedium,
  headlineSmall,
  labelLarge,
  labelMedium,
  labelSmall,
  overline,
  titleLarge,
  titleMedium,
  titleSmall,
} from "@fuasmattn/mwui-token-farm";
import { Size, Token, Variant } from "./types";

const createCompoundVariant = (variant: Variant, size: Size, token: Token) => {
  const {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    paragraphSpacing,
    textCase,
    textDecoration,
  } = token;
  return {
    variant,
    size,
    css: {
      fontFamily: fontFamily,
      fontSize: `${fontSize}px`,
      fontWeight: fontWeight,
      lineHeight: `${lineHeight}px`,
      letterSpacing: `${letterSpacing}px`,
      marginBottom: `${paragraphSpacing}px`,
      textTransform: textCase,
      textDecoration: textDecoration,
    },
  };
};

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
  },
});

export const variants = {
  variant: {
    display: {},
    headline: {},
    title: {},
    label: {},
    body: {},
    overline: {},
    "body-light": {},
    "body-light-italic": {},
    "body-italic": {},
  },
  component: {
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    p: {},
    span: {},
    div: {},
    label: {},
  },
  size: {
    small: {},
    medium: {},
    large: {},
  },
};

export const compoundVariants = [
  createCompoundVariant("display", "large", displayLarge),
  createCompoundVariant("display", "medium", displayMedium),
  createCompoundVariant("display", "small", displaySmall),
  createCompoundVariant("headline", "large", headlineLarge),
  createCompoundVariant("headline", "medium", headlineMedium),
  createCompoundVariant("headline", "small", headlineSmall),
  createCompoundVariant("title", "large", titleLarge),
  createCompoundVariant("title", "medium", titleMedium),
  createCompoundVariant("title", "small", titleSmall),
  createCompoundVariant("label", "large", labelLarge),
  createCompoundVariant("label", "medium", labelMedium),
  createCompoundVariant("label", "small", labelSmall),
  createCompoundVariant("body", "large", bodyLarge),
  createCompoundVariant("body", "medium", bodyMedium),
  createCompoundVariant("body", "small", bodySmall),
  // createCompoundVariant("body-italic", "large", bodyLargeItalic),
  // createCompoundVariant("body-light", "large", bodyLargeLight),
  // createCompoundVariant("body-light-italic", "large", bodyLargeLightItalic),
  createCompoundVariant("overline", "medium", overline),
];
