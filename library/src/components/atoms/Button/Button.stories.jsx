import React from 'react';

import Button from './Button.jsx';

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
