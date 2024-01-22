import { Story, Meta } from "@storybook/react";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story = (args) => (
  <Button
    onClick={function (): void {
      throw new Error("Function not implemented.");
    }}
    text={""}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert("Button Clicked"),
  text: "Click Me",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
