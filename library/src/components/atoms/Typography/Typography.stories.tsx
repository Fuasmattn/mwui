import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from "./Typography";

export default {
  title: "Components/Atoms/Typography",
  component: Typography,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "inline-radio" },
    },
    variant: {
      options: ["display", "headline", "title", "body", "label", "overline"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Typography>;

export const Overview = () => (
  <>
    <Typography
      variant="display"
      size="large"
      component="h1"
      text="Display Large"
    />
    <Typography
      variant="display"
      size="medium"
      component="h2"
      text="Display Medium"
    />
    <Typography
      variant="display"
      size="small"
      component="h3"
      text="Display Small"
    />
    <Typography
      variant="headline"
      size="large"
      component="h1"
      text="Headline Large"
    />
    <Typography
      variant="headline"
      size="medium"
      component="h2"
      text="Headline Medium"
    />
    <Typography
      variant="headline"
      size="small"
      component="h3"
      text="Headline Small"
    />
    <Typography variant="title" size="large" component="p" text="Title Large" />
    <Typography
      variant="title"
      size="medium"
      component="p"
      text="Title Medium"
    />
    <Typography variant="title" size="small" component="p" text="Title Small" />
    <Typography variant="label" size="large" component="p" text="Label Large" />
    <Typography
      variant="label"
      size="medium"
      component="p"
      text="Label Medium"
    />
    <Typography variant="label" size="small" component="p" text="Label Small" />
    <Typography variant="body" size="large" component="p" text="Body Large" />
    <Typography
      variant="body-italic"
      size="large"
      component="p"
      text="Body Large Italic"
    />
    <Typography
      variant="body-light"
      size="large"
      component="p"
      text="Body Large Light"
    />
    <Typography
      variant="body-light-italic"
      size="large"
      component="p"
      text="Body Large Light Italic"
    />
    <Typography variant="body" size="medium" component="p" text="Body Medium" />
    <Typography variant="body" size="small" component="p" text="Body Small" />
    <Typography variant="overline" component="p" text="Overline" />
  </>
);

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Display = Template.bind({});
Display.args = {
  variant: "display",
  size: "large",
  component: "h1",
  text: "Display",
};

export const Headline = Template.bind({});
Headline.args = {
  variant: "headline",
  size: "large",
  component: "h1",
  text: "Headline",
};

export const Title = Template.bind({});
Title.args = {
  variant: "title",
  size: "large",
  component: "p",
  text: "Title",
};

export const Label = Template.bind({});
Label.args = {
  variant: "label",
  size: "medium",
  component: "p",
  text: "Label",
};

export const Body = Template.bind({});
Body.args = {
  variant: "body",
  size: "medium",
  component: "p",
  text: "Body",
};

export const Overline = Template.bind({});
Overline.args = {
  variant: "overline",
  component: "p",
  text: "overline",
};
