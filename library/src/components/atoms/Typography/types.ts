export type Variant =
  | "body"
  | "display"
  | "headline"
  | "label"
  | "title"
  | "overline"
  | "body-light"
  | "body-light-italic"
  | "body-italic";

export type Component =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div"
  | "label";

export type Size = "large" | "medium" | "small";

export type Weight = "Regular" | "SemiBold" | "Bold";

export type Token = {
  fontFamily: string;
  fontSize: number;
  fontWeight: Weight;
  lineHeight: number;
  letterSpacing: number;
  paragraphSpacing: number;
  textCase: string;
  textDecoration: string;
};
