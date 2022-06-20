import React from "react";

import { Card } from "./Card";

export default {
  title: "Components/Molecules/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};
