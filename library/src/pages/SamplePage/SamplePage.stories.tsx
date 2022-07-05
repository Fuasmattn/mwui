import { ComponentMeta, ComponentStory } from "@storybook/react";
import SamplePage from "./SamplePage";

export default {
  title: "Pages/SamplePage",
  component: SamplePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof SamplePage>;

const Template: ComponentStory<typeof SamplePage> = () => <SamplePage />;

export const Default = Template.bind({});
