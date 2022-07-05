import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card";

export default {
  title: "Components/Molecules/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Hello World",
  body: "lorem ipsum dolor sit amet",
  confirmLabel: "Confirm",
  cancelLabel: "Cancel",
  imageSrc: "https://placedog.net/720/338?r",
  // badges: ["badge", "badge", "badge"],
  // additionalText: "additional information",
};

const TemplateDynamicWidth: ComponentStory<typeof Card> = (args) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 360px)",
      gridGap: "32px",
    }}
  >
    <Card {...args} />
    <Card {...args} />
    <Card {...args} />
  </div>
);

export const DynamicWidth = TemplateDynamicWidth.bind({});
DynamicWidth.args = {
  title: "Hello World",
  body: "lorem ipsum dolor sit amet",
  confirmLabel: "Confirm",
  cancelLabel: "Cancel",
  imageSrc: "https://placedog.net/720/338?r",
  // badges: ["badge", "badge", "badge"],
  // additionalText: "additional information",
};
