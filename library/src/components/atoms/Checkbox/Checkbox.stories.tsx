import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "./Checkbox";

export default {
  title: "Components/Atoms/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox",
};
