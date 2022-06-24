import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { themes } from "@storybook/theming";
import { injectGlobalStyles } from "../../index";
import "../../index.css";

import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";

SyntaxHighlighter.registerLanguage("javascript", javascript);


injectGlobalStyles();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.normal,
  },
};
