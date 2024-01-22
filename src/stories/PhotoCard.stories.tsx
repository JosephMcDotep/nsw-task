import { Story, Meta } from "@storybook/react";
import PhotoCard from "../components/PhotoCard";

export default {
  title: "PhotoCard",
  component: PhotoCard,
} as Meta;

const Template: Story = (args) => (
  <PhotoCard id={""} downloadUrl={""} author={""} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "1",
  downloadUrl: "https://picsum.photos/300/200.jpg",
  author: "John Doe",
};
