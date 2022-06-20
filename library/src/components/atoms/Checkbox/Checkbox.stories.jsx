import React from "react";

import Checkbox from "./Checkbox";

export default {
  title: "Components/Atoms/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox",
};
