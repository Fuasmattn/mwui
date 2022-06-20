import React from "react";

import { Chip } from "./Chip";

export default {
  title: "Components/Atoms/Chip",
  component: Chip,
};

const Template = (args) => <Chip {...args} />;


export const Default = Template.bind({});
Default.args = {
  label: "Chip & Chap",
};

