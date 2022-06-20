import React from 'react';

import { Button } from './Button.jsx';

export default {
  title: 'Components/Atoms/Button',
  component: Button
};

const Template = args => <Button { ...args } />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Secondary'
};

// export const PrimaryOutlined = Template.bind({});
// PrimaryOutlined.args = {
//   variant: "primary",
//   outlined: true,
//   label: "Primary Outlined",
// };

// export const SecondaryOutlined = Template.bind({});
// SecondaryOutlined.args = {
//   variant: "seconday",
//   outlined: true,
//   label: "Secondary Outlined",
// };
